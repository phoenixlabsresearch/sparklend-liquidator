const fetch = require("node-fetch");

class OneInch {

    constructor(config, network) {
        this.config = config;
        this.network = network;
    }

    async fetchSwapData(from, to, amount) {
        const apiBaseUrl = `${this.config.url}/swap/v5.2/${this.network.chainId}`;
        function apiRequestUrl(methodName, queryParams) {
            return apiBaseUrl + methodName + '?' + (new URLSearchParams(queryParams)).toString();
        }
        const maxDEXSlippage = 2;
    
        const res = await fetch(apiRequestUrl('/swap', {
            src: ethers.utils.getAddress(from),
            dst: ethers.utils.getAddress(to),
            amount: amount.multipliedBy(this.network.getReserve(from).units).toFixed(0),
            from: ethers.utils.getAddress(this.network.liquidateLoan),
            slippage: maxDEXSlippage,
            allowPartialFill: false,
            disableEstimate: true,
        }), {
            headers: {
                'Authorization': `Bearer ${this.config.apiKey}`,
                'Accept': "application/json",
            }
        });

        const result = (await res.text()).trim();
        try {
            const parsedResult = JSON.parse(result);
    
            if (!parsedResult.error) {
                return parsedResult.tx;
            } else {
                throw new Error(`Failed to fetch DEX route.\n${JSON.stringify(result, null, 2)}`);
            }
        } catch (err) {
            throw new Error(`Failed to parse JSON of '${result}'.\n${err.stack}`);
        }
    }

}

module.exports = OneInch;