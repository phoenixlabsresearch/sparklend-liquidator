// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.8.17;

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address from, address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
}

interface IERC4626 is IERC20 {
    function deposit(uint256 assets, address receiver) external returns (uint256 shares);
    function redeem(uint256 shares, address receiver, address owner) external returns (uint256 assets);
}

interface IFlashLoanReceiver {
    function executeOperation(
        address[] calldata assets,
        uint256[] calldata amounts,
        uint256[] calldata premiums,
        address initiator,
        bytes calldata params
    ) external returns (bool);
}

interface ILendingPoolAddressesProvider {
    function getPool() external view returns (address);
}

interface ILendingPool {
    /**
    * @dev Function to liquidate a non-healthy position collateral-wise, with Health Factor below 1
    * - The caller (liquidator) covers `debtToCover` amount of debt of the user getting liquidated, and receives
    *   a proportionally amount of the `collateralAsset` plus a bonus to cover market risk
    * @param collateralAsset The address of the underlying asset used as collateral, to receive as result of the liquidation
    * @param debtAsset The address of the underlying borrowed asset to be repaid with the liquidation
    * @param user The address of the borrower getting liquidated
    * @param debtToCover The debt amount of borrowed `asset` the liquidator wants to cover
    * @param receiveAToken `true` if the liquidators wants to receive the collateral aTokens, `false` if he wants
    * to receive the underlying collateral asset directly
    **/
    function liquidationCall(
        address collateralAsset,
        address debtAsset,
        address user,
        uint256 debtToCover,
        bool receiveAToken
    ) external;

    /**
    * @dev Allows smartcontracts to access the liquidity of the pool within one transaction,
    * as long as the amount taken plus a fee is returned.
    * IMPORTANT There are security concerns for developers of flashloan receiver contracts that must be kept into consideration.
    * For further details please visit https://developers.aave.com
    * @param receiverAddress The address of the contract receiving the funds, implementing the IFlashLoanReceiver interface
    * @param assets The addresses of the assets being flash-borrowed
    * @param amounts The amounts amounts being flash-borrowed
    * @param modes Types of the debt to open if the flash loan is not returned:
    *   0 -> Don't open any debt, just revert if funds can't be transferred from the receiver
    *   1 -> Open debt at stable rate for the value of the amount flash-borrowed to the `onBehalfOf` address
    *   2 -> Open debt at variable rate for the value of the amount flash-borrowed to the `onBehalfOf` address
    * @param onBehalfOf The address  that will receive the debt in the case of using on `modes` 1 or 2
    * @param params Variadic packed params to pass to the receiver as extra information
    * @param referralCode Code used to register the integrator originating the operation, for potential rewards.
    *   0 if the action is executed directly by the user, without any middle-man
    **/
    function flashLoan(
        address receiverAddress,
        address[] calldata assets,
        uint256[] calldata amounts,
        uint256[] calldata modes,
        address onBehalfOf,
        bytes calldata params,
        uint16 referralCode
    ) external;
}

interface IERC3156FlashBorrower {

    /**
     * @dev Receive a flash loan.
     * @param initiator The initiator of the loan.
     * @param token The loan currency.
     * @param amount The amount of tokens lent.
     * @param fee The additional amount of tokens to repay.
     * @param data Arbitrary data structure, intended to contain user-defined parameters.
     * @return The keccak256 hash of "ERC3156FlashBorrower.onFlashLoan"
     */
    function onFlashLoan(
        address initiator,
        address token,
        uint256 amount,
        uint256 fee,
        bytes calldata data
    ) external returns (bytes32);
}

interface IERC3156FlashLender {

    /**
     * @dev The amount of currency available to be lent.
     * @param token The loan currency.
     * @return The amount of `token` that can be borrowed.
     */
    function maxFlashLoan(
        address token
    ) external view returns (uint256);

    /**
     * @dev The fee to be charged for a given loan.
     * @param token The loan currency.
     * @param amount The amount of tokens lent.
     * @return The amount of `token` to be charged for the loan, on top of the returned principal.
     */
    function flashFee(
        address token,
        uint256 amount
    ) external view returns (uint256);

    /**
     * @dev Initiate a flash loan.
     * @param receiver The receiver of the tokens in the loan, and the receiver of the callback.
     * @param token The loan currency.
     * @param amount The amount of tokens lent.
     * @param data Arbitrary data structure, intended to contain user-defined parameters.
     */
    function flashLoan(
        IERC3156FlashBorrower receiver,
        address token,
        uint256 amount,
        bytes calldata data
    ) external returns (bool);
}

contract LiquidateLoan is IFlashLoanReceiver, IERC3156FlashBorrower {

    ILendingPoolAddressesProvider public immutable provider;
    ILendingPool public immutable lendingPool;
    IERC20 public immutable dai;
    IERC4626 public immutable sdai;
    IERC3156FlashLender public immutable daiFlashLender;

    constructor(
        address _addressProvider,
        address _dai,
        address _sdai,
        address _daiFlashLender
    ) {
        provider = ILendingPoolAddressesProvider(_addressProvider);
        lendingPool = ILendingPool(provider.getPool());
        dai = IERC20(_dai);
        sdai = IERC4626(_sdai);
        daiFlashLender = IERC3156FlashLender(_daiFlashLender);

        dai.approve(address(sdai), type(uint256).max);
    }

    /**
        Maker DAI flash loan.
     */
    function onFlashLoan(
        address,
        address token,
        uint256 amount,
        uint256 fee,
        bytes calldata data
    ) external returns (bytes32) {
        flashLoanReceived(token, amount, fee, data);

        IERC20(token).approve(address(daiFlashLender), amount + fee);
        
        return keccak256("ERC3156FlashBorrower.onFlashLoan");
    }

    /**
        Spark Lend flash loan.
     */
    function executeOperation(
        address[] calldata assets,
        uint256[] calldata amounts,
        uint256[] calldata premiums,
        address,
        bytes calldata params
    )
        external
        override
        returns (bool)
    {
        flashLoanReceived(assets[0], amounts[0], premiums[0], params);

        // Approve the pool to reclaim
        IERC20(assets[0]).approve(address(lendingPool), amounts[0] + premiums[0]);

        return true;
    }

    receive() external payable {
    }

    function flashLoanReceived(
        address assetToLiquidiate,
        uint256 amount,
        uint256 fee,
        bytes calldata params
    ) internal {
        (address sender, address collateral, address userToLiquidate, address router, bytes memory swapPath) = abi.decode(params, (address, address, address, address, bytes));
        //collateral  the address of the token that we will be compensated in
        //userToLiquidate - id of the user to liquidate
        //amountOutMin - minimum amount of asset paid when swapping collateral
        {
            //liquidate unhealthy loan
            IERC20(assetToLiquidiate).approve(address(lendingPool), amount);
            lendingPool.liquidationCall(collateral, assetToLiquidiate, userToLiquidate, amount, false);

            //swap collateral from liquidate back to asset from flashloan to pay it off
            if (collateral != assetToLiquidiate) {
                // Unwrap sDAI if it's the collateral - there is no paths for sDAI in DEX aggregators
                if (collateral == address(sdai)) {
                    sdai.redeem(sdai.balanceOf(address(this)), address(this), address(this));
                    collateral = address(dai);
                }

                // Perform swap
                if (swapPath.length > 0) {
                    IERC20(collateral).approve(router, IERC20(collateral).balanceOf(address(this)));
                    (bool success,) = router.call(swapPath);
                    if (success == false) {
                        assembly {
                            let ptr := mload(0x40)
                            let size := returndatasize()
                            returndatacopy(ptr, 0, size)
                            revert(ptr, size)
                        }
                    }
                }

                // Wrap to sDAI if it's the liquidated asset (we assume current balance is in DAI)
                if (assetToLiquidiate == address(sdai)) {
                    sdai.deposit(dai.balanceOf(address(this)), address(this));
                }
            }
        }

        //Pay to owner the balance after fees
        uint256 earnings = IERC20(assetToLiquidiate).balanceOf(address(this));
        uint256 costs = amount + fee;

        require(earnings >= costs , "No profit");
        IERC20(assetToLiquidiate).transfer(sender, earnings - costs);
        IERC20(collateral).transfer(sender, IERC20(collateral).balanceOf(address(this)));   // May be some dust left
    }

    /*
    * This function is manually called to commence the flash loans sequence
    * to make executing a liquidation  flexible calculations are done outside of the contract and sent via parameters here
    * _assetToLiquidate - the token address of the asset that will be liquidated
    * _flashAmt - flash loan amount (number of tokens) which is exactly the amount that will be liquidated
    * _collateral - the token address of the collateral. This is the token that will be received after liquidating loans
    * _userToLiquidate - user ID of the loan that will be liquidated
    * _router - DEX aggregator router
    * _swapPath - the path that uniswap will use to swap tokens back to original tokens
    */
    function executeFlashLoans(address _assetToLiquidate, uint256 _flashAmt, address _collateral, address _userToLiquidate, address _router, bytes memory _swapPath) public {
        bytes memory params = abi.encode(msg.sender, _collateral, _userToLiquidate, _router, _swapPath);
        
        if (_assetToLiquidate == address(dai)) {
            // Use Maker Flash Mint Module
            daiFlashLender.flashLoan(this, _assetToLiquidate, _flashAmt, params);
        } else {
            // Use Spark Lend Flash Loan
            address[] memory assets = new address[](1);
            assets[0] = _assetToLiquidate;
            uint256[] memory amounts = new uint256[](1);
            amounts[0] = _flashAmt;
            uint256[] memory modes = new uint256[](1);
            modes[0] = 0;
            lendingPool.flashLoan(
                address(this),
                assets,
                amounts,
                modes,
                address(this),
                params,
                0
            );
        }
    }

}
