#!/bin/bash
# Set the LTV to very low for the specified asset to allow liquidations
set -e

export ADMIN="0x3300f198988e4C9C63F75dF86De36421f06af8c4"
export CONFIGURATOR="0x542DBa469bdE58FAeE189ffB60C6b49CE60E0738"

export ASSET="$1"

echo "Setting $ASSET to near zero ltv/lt..."

cast rpc anvil_setBalance $ADMIN 0x10000000000000000 > /dev/null
cast rpc anvil_impersonateAccount $ADMIN > /dev/null

cast send $CONFIGURATOR 'configureReserveAsCollateral(address,uint256,uint256,uint256)' $ASSET 1 1 10100 $ --from $ADMIN --unlocked

cast rpc anvil_stopImpersonatingAccount $ADMIN > /dev/null