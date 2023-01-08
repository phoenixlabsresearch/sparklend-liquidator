const BigNumber = require("bignumber.js");

async function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function retry (callback, errorHandler, ms, retries = 5) {
    let count = 0;
    while (count < retries) {
        try {
            return await callback(count);
        } catch (error) {
            if (!errorHandler(error)) {
                throw error;
            }
            await sleep(ms);
            count++;
            if (count >= retries) throw error;
        }
    }
}
async function interval (callback, ms) {
    while (true) {
        await callback();
        await sleep(ms);
    }
}
async function exponentialBackoff (callback, retries = 5) {
    let count = 0;
    while (count < retries) {
        try {
            return await callback();
        } catch (err) {
            await sleep((2 << count) * 1000);
            count++;
            if (count >= retries) throw err;
        }
    }
}
async function timeout(p, ms) {
    return Promise.race([
        p,
        new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), ms))
    ])
}

function shortNum(num, digits = 0) {
    var si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

function valueToBigNumber(amount) {
    if (amount instanceof BigNumber) {
      return amount;
    }
  
    return new BigNumber(amount);
}

module.exports = {
    sleep,
    retry,
    interval,
    exponentialBackoff,
    timeout,
    shortNum,
    valueToBigNumber
};
