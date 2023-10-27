const fetch = require("node-fetch");

class OneInch {

    constructor(network) {
        this.network = network;
    }

    async getSwapData(from, to, amount) {
        const apiBaseUrl = `${process.env.ONEINCH_URL}/v5.0/${this.network.chainId}`;
        function apiRequestUrl(methodName, queryParams) {
            return apiBaseUrl + methodName + '?' + (new URLSearchParams(queryParams)).toString();
        }
        const maxDEXSlippage = 2;
    
        const res = await fetch(apiRequestUrl('/swap', {
            fromTokenAddress: from,
            toTokenAddress: to,
            amount: amount.multipliedBy(this.network.getReserve(from).units).toFixed(0),
            fromAddress: this.network.liquidateLoan,
            slippage: maxDEXSlippage,
            allowPartialFill: false,
            disableEstimate: true,
        }), {
            headers: {
                'Authorization': `Bearer ${process.env.ONEINCH_API_KEY}`
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