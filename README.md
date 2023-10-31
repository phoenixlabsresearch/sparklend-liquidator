# SparkLend Liquidator

This keeper will query the SparkLend Subgraph to find any positions that can be liquidated and then proceed to liquidate them via 1inch.

Please note this bot will liquidate any position regardless of whether it's profitable or not.

## Getting Started

1. Run `yarn` to install all dependencies.
1. Make a copy of `src/config/config.example.js` called `src/config/config.local.js` and fill in all values.
1. Run:

```
yarn run server
```
