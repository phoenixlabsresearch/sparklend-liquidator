# Spark Lend Liquidator

This keeper will query the Spark Lend Subgraph to find any positions that can be liquidated and then proceed to liquidate them. This bot will use Curve for Lido stETH and Uniswap V3 for everything else.

Please note this bot will liquidate any position regardless of whether it's profitable or not.

## Getting Started

1. Run `yarn` to install all dependencies.
1. Make a copy of `.env.example` called `.env` and fill in all values.
1. Run:

```
yarn run server-mainnet
```

The `LiquidateLoan` contract is set to point to Spark Protocol's treasury. If you want to point it to yourself you will need to redeploy with another `treasury` value set in the constructor. You can deploy with `yarn deploy-mainnet`.

## Make Adjustments

This bot is designed to be a starting template and will probably be uncompetitive. Some suggested changes to get an edge:

1. Use Flashbots as an RPC endpoint to not get front-run.
1. Calculate profitability before adding positions to be queued up for liquidation.
1. Use a DEX aggregator instead of manually specifying Uniswap routes.

Feel free to PR anything back, but no worries if you don't. We understand this is a competitive industry. ;)
