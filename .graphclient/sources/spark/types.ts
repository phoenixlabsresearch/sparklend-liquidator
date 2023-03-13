// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SparkTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  /**  { Account address }  */
  id: Scalars['ID'];
  /**  Number of positions this account has  */
  positionCount: Scalars['Int'];
  /**  All positions that belong to this account  */
  positions: Array<Position>;
  /**  Number of open positions this account has  */
  openPositionCount: Scalars['Int'];
  /**  Number of closed positions this account has  */
  closedPositionCount: Scalars['Int'];
  /**  Number of deposits this account made  */
  depositCount: Scalars['Int'];
  /**  All deposit events of this account  */
  deposits: Array<Deposit>;
  /**  Number of withdrawals this account made  */
  withdrawCount: Scalars['Int'];
  /**  All withdraw events of this account  */
  withdraws: Array<Withdraw>;
  /**  Number of borrows this account made  */
  borrowCount: Scalars['Int'];
  /**  All borrow events of this account  */
  borrows: Array<Borrow>;
  /**  Number of repays this account made  */
  repayCount: Scalars['Int'];
  /**  All repay events of this account  */
  repays: Array<Repay>;
  /**  Number of times this account liquidated a position  */
  liquidateCount: Scalars['Int'];
  /**  All liquidation events where this account was the liquidator  */
  liquidates: Array<Liquidate>;
  /**  Number of times this account has been liquidated  */
  liquidationCount: Scalars['Int'];
  /**  All liquidation events where this account got liquidated  */
  liquidations: Array<Liquidate>;
  /**  Markets that the account is using as collateral  */
  _enabledCollaterals: Array<Market>;
};


export type AccountpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
};


export type AccountdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};


export type AccountwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
};


export type AccountborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
};


export type AccountrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
};


export type AccountliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidate_filter>;
};


export type AccountliquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidate_filter>;
};


export type Account_enabledCollateralsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  positionCount?: InputMaybe<Scalars['Int']>;
  positionCount_not?: InputMaybe<Scalars['Int']>;
  positionCount_gt?: InputMaybe<Scalars['Int']>;
  positionCount_lt?: InputMaybe<Scalars['Int']>;
  positionCount_gte?: InputMaybe<Scalars['Int']>;
  positionCount_lte?: InputMaybe<Scalars['Int']>;
  positionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  positionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  positions_?: InputMaybe<Position_filter>;
  openPositionCount?: InputMaybe<Scalars['Int']>;
  openPositionCount_not?: InputMaybe<Scalars['Int']>;
  openPositionCount_gt?: InputMaybe<Scalars['Int']>;
  openPositionCount_lt?: InputMaybe<Scalars['Int']>;
  openPositionCount_gte?: InputMaybe<Scalars['Int']>;
  openPositionCount_lte?: InputMaybe<Scalars['Int']>;
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedPositionCount?: InputMaybe<Scalars['Int']>;
  closedPositionCount_not?: InputMaybe<Scalars['Int']>;
  closedPositionCount_gt?: InputMaybe<Scalars['Int']>;
  closedPositionCount_lt?: InputMaybe<Scalars['Int']>;
  closedPositionCount_gte?: InputMaybe<Scalars['Int']>;
  closedPositionCount_lte?: InputMaybe<Scalars['Int']>;
  closedPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  depositCount?: InputMaybe<Scalars['Int']>;
  depositCount_not?: InputMaybe<Scalars['Int']>;
  depositCount_gt?: InputMaybe<Scalars['Int']>;
  depositCount_lt?: InputMaybe<Scalars['Int']>;
  depositCount_gte?: InputMaybe<Scalars['Int']>;
  depositCount_lte?: InputMaybe<Scalars['Int']>;
  depositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  depositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deposits_?: InputMaybe<Deposit_filter>;
  withdrawCount?: InputMaybe<Scalars['Int']>;
  withdrawCount_not?: InputMaybe<Scalars['Int']>;
  withdrawCount_gt?: InputMaybe<Scalars['Int']>;
  withdrawCount_lt?: InputMaybe<Scalars['Int']>;
  withdrawCount_gte?: InputMaybe<Scalars['Int']>;
  withdrawCount_lte?: InputMaybe<Scalars['Int']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdraws_?: InputMaybe<Withdraw_filter>;
  borrowCount?: InputMaybe<Scalars['Int']>;
  borrowCount_not?: InputMaybe<Scalars['Int']>;
  borrowCount_gt?: InputMaybe<Scalars['Int']>;
  borrowCount_lt?: InputMaybe<Scalars['Int']>;
  borrowCount_gte?: InputMaybe<Scalars['Int']>;
  borrowCount_lte?: InputMaybe<Scalars['Int']>;
  borrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  borrows_?: InputMaybe<Borrow_filter>;
  repayCount?: InputMaybe<Scalars['Int']>;
  repayCount_not?: InputMaybe<Scalars['Int']>;
  repayCount_gt?: InputMaybe<Scalars['Int']>;
  repayCount_lt?: InputMaybe<Scalars['Int']>;
  repayCount_gte?: InputMaybe<Scalars['Int']>;
  repayCount_lte?: InputMaybe<Scalars['Int']>;
  repayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  repayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  repays_?: InputMaybe<Repay_filter>;
  liquidateCount?: InputMaybe<Scalars['Int']>;
  liquidateCount_not?: InputMaybe<Scalars['Int']>;
  liquidateCount_gt?: InputMaybe<Scalars['Int']>;
  liquidateCount_lt?: InputMaybe<Scalars['Int']>;
  liquidateCount_gte?: InputMaybe<Scalars['Int']>;
  liquidateCount_lte?: InputMaybe<Scalars['Int']>;
  liquidateCount_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidateCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidates_?: InputMaybe<Liquidate_filter>;
  liquidationCount?: InputMaybe<Scalars['Int']>;
  liquidationCount_not?: InputMaybe<Scalars['Int']>;
  liquidationCount_gt?: InputMaybe<Scalars['Int']>;
  liquidationCount_lt?: InputMaybe<Scalars['Int']>;
  liquidationCount_gte?: InputMaybe<Scalars['Int']>;
  liquidationCount_lte?: InputMaybe<Scalars['Int']>;
  liquidationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidations_?: InputMaybe<Liquidate_filter>;
  _enabledCollaterals?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_not?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_contains?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_not_contains?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_?: InputMaybe<Market_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Account_filter>>>;
};

export type Account_orderBy =
  | 'id'
  | 'positionCount'
  | 'positions'
  | 'openPositionCount'
  | 'closedPositionCount'
  | 'depositCount'
  | 'deposits'
  | 'withdrawCount'
  | 'withdraws'
  | 'borrowCount'
  | 'borrows'
  | 'repayCount'
  | 'repays'
  | 'liquidateCount'
  | 'liquidates'
  | 'liquidationCount'
  | 'liquidations'
  | '_enabledCollaterals';

export type ActiveAccount = {
  /**  { daily/hourly }-{ Address of the account }-{ Days/hours since Unix epoch }  */
  id: Scalars['ID'];
};

export type ActiveAccount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ActiveAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ActiveAccount_filter>>>;
};

export type ActiveAccount_orderBy =
  | 'id';

export type ActorAccount = {
  /**  { Actor type (Depositor / Borrower / Liquidator / Liquidatee) }-{ Account address }  */
  id: Scalars['ID'];
};

export type ActorAccount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ActorAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ActorAccount_filter>>>;
};

export type ActorAccount_orderBy =
  | 'id';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Borrow = {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  Account that borrowed/minted tokens  */
  account: Account;
  /**  The market tokens are borrowed/minted from  */
  market: Market;
  /**  The user position changed by this event  */
  position: Position;
  /**  Token borrowed  */
  asset: Token;
  /**  Amount of token borrowed in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token borrowed in USD  */
  amountUSD: Scalars['BigDecimal'];
};

export type Borrow_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_?: InputMaybe<Market_filter>;
  position?: InputMaybe<Scalars['String']>;
  position_not?: InputMaybe<Scalars['String']>;
  position_gt?: InputMaybe<Scalars['String']>;
  position_lt?: InputMaybe<Scalars['String']>;
  position_gte?: InputMaybe<Scalars['String']>;
  position_lte?: InputMaybe<Scalars['String']>;
  position_in?: InputMaybe<Array<Scalars['String']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']>>;
  position_contains?: InputMaybe<Scalars['String']>;
  position_contains_nocase?: InputMaybe<Scalars['String']>;
  position_not_contains?: InputMaybe<Scalars['String']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']>;
  position_starts_with?: InputMaybe<Scalars['String']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_starts_with?: InputMaybe<Scalars['String']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_ends_with?: InputMaybe<Scalars['String']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_ends_with?: InputMaybe<Scalars['String']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_?: InputMaybe<Position_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Token_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Borrow_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Borrow_filter>>>;
};

export type Borrow_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'blockNumber'
  | 'timestamp'
  | 'account'
  | 'account__id'
  | 'account__positionCount'
  | 'account__openPositionCount'
  | 'account__closedPositionCount'
  | 'account__depositCount'
  | 'account__withdrawCount'
  | 'account__borrowCount'
  | 'account__repayCount'
  | 'account__liquidateCount'
  | 'account__liquidationCount'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canUseAsCollateral'
  | 'market__canBorrowFrom'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___reserveFactor'
  | 'market___liquidityIndex'
  | 'market___lastRewardsUpdated'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__side'
  | 'position__isCollateral'
  | 'position__balance'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'position__borrowCount'
  | 'position__repayCount'
  | 'position__liquidationCount'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset___type'
  | 'amount'
  | 'amountUSD';

/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type Deposit = {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  Account that deposited tokens  */
  account: Account;
  /**  The market tokens are deposited to  */
  market: Market;
  /**  The user position changed by this event  */
  position: Position;
  /**  Token deposited  */
  asset: Token;
  /**  Amount of token deposited in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token deposited in USD  */
  amountUSD: Scalars['BigDecimal'];
};

export type Deposit_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_?: InputMaybe<Market_filter>;
  position?: InputMaybe<Scalars['String']>;
  position_not?: InputMaybe<Scalars['String']>;
  position_gt?: InputMaybe<Scalars['String']>;
  position_lt?: InputMaybe<Scalars['String']>;
  position_gte?: InputMaybe<Scalars['String']>;
  position_lte?: InputMaybe<Scalars['String']>;
  position_in?: InputMaybe<Array<Scalars['String']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']>>;
  position_contains?: InputMaybe<Scalars['String']>;
  position_contains_nocase?: InputMaybe<Scalars['String']>;
  position_not_contains?: InputMaybe<Scalars['String']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']>;
  position_starts_with?: InputMaybe<Scalars['String']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_starts_with?: InputMaybe<Scalars['String']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_ends_with?: InputMaybe<Scalars['String']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_ends_with?: InputMaybe<Scalars['String']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_?: InputMaybe<Position_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Token_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
};

export type Deposit_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'blockNumber'
  | 'timestamp'
  | 'account'
  | 'account__id'
  | 'account__positionCount'
  | 'account__openPositionCount'
  | 'account__closedPositionCount'
  | 'account__depositCount'
  | 'account__withdrawCount'
  | 'account__borrowCount'
  | 'account__repayCount'
  | 'account__liquidateCount'
  | 'account__liquidationCount'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canUseAsCollateral'
  | 'market__canBorrowFrom'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___reserveFactor'
  | 'market___liquidityIndex'
  | 'market___lastRewardsUpdated'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__side'
  | 'position__isCollateral'
  | 'position__balance'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'position__borrowCount'
  | 'position__repayCount'
  | 'position__liquidationCount'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset___type'
  | 'amount'
  | 'amountUSD';

export type FinancialsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['ID'];
  /**  Protocol this snapshot is associated with  */
  protocol: LendingProtocol;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Total supply of minted tokens in native amounts, with same ordering as mintedTokens. Only applies to CDP  */
  mintedTokenSupplies?: Maybe<Array<Scalars['BigInt']>>;
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  dailySupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  dailyProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  dailyTotalRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets, in USD. Note this metric should be the same as TVL.  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Total assets deposited on a given day, in USD  */
  dailyDepositUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current balance of all borrowed/minted assets, in USD.  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Total assets borrowed/minted on a given day, in USD.  */
  dailyBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination).  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Total assets liquidated on a given day, in USD.  */
  dailyLiquidateUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
  /**  Total assets withdrawn on a given day, in USD.  */
  dailyWithdrawUSD: Scalars['BigDecimal'];
  /**  Total assets repaid on a given day, in USD.  */
  dailyRepayUSD: Scalars['BigDecimal'];
};

export type FinancialsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<LendingProtocol_filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  mintedTokenSupplies?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyWithdrawUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyWithdrawUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyWithdrawUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyWithdrawUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyWithdrawUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyWithdrawUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyWithdrawUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyWithdrawUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyRepayUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyRepayUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyRepayUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyRepayUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyRepayUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyRepayUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyRepayUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyRepayUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FinancialsDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FinancialsDailySnapshot_filter>>>;
};

export type FinancialsDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__lendingType'
  | 'protocol__riskType'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueDepositors'
  | 'protocol__cumulativeUniqueBorrowers'
  | 'protocol__cumulativeUniqueLiquidators'
  | 'protocol__cumulativeUniqueLiquidatees'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__totalDepositBalanceUSD'
  | 'protocol__cumulativeDepositUSD'
  | 'protocol__totalBorrowBalanceUSD'
  | 'protocol__cumulativeBorrowUSD'
  | 'protocol__cumulativeLiquidateUSD'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol___priceOracle'
  | 'blockNumber'
  | 'timestamp'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'mintedTokenSupplies'
  | 'dailySupplySideRevenueUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'dailyProtocolSideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'dailyTotalRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'totalDepositBalanceUSD'
  | 'dailyDepositUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'dailyBorrowUSD'
  | 'cumulativeBorrowUSD'
  | 'dailyLiquidateUSD'
  | 'cumulativeLiquidateUSD'
  | 'dailyWithdrawUSD'
  | 'dailyRepayUSD';

export type InterestRate = {
  /**  { Interest rate side }-{ Interest rate type }-{ Market ID }  */
  id: Scalars['ID'];
  /**  Interest rate in percentage APY. E.g. 5.21% should be stored as 5.21  */
  rate: Scalars['BigDecimal'];
  /**  Duration of the loan in days. Only applies to fixed term lending (e.g. Notional)  */
  duration?: Maybe<Scalars['Int']>;
  /**  Maturity of the loan in block height. Only applies to fixed term lending (e.g. Notional)  */
  maturityBlock?: Maybe<Scalars['BigInt']>;
  /**  The party the interest is paid to / received from  */
  side: InterestRateSide;
  /**  The type of interest rate (e.g. stable, fixed, variable, etc)  */
  type: InterestRateType;
};

export type InterestRateSide =
  /**  Interest rate accrued by lenders  */
  | 'LENDER'
  /**  Interest rate paid by borrowers  */
  | 'BORROWER';

export type InterestRateType =
  /**  Stable interest rate (e.g. Aave)  */
  | 'STABLE'
  /**  Variable interest rate (e.g. Compound)  */
  | 'VARIABLE'
  /**  Fixed interest rate (e.g. Notional)  */
  | 'FIXED';

export type InterestRate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rate?: InputMaybe<Scalars['BigDecimal']>;
  rate_not?: InputMaybe<Scalars['BigDecimal']>;
  rate_gt?: InputMaybe<Scalars['BigDecimal']>;
  rate_lt?: InputMaybe<Scalars['BigDecimal']>;
  rate_gte?: InputMaybe<Scalars['BigDecimal']>;
  rate_lte?: InputMaybe<Scalars['BigDecimal']>;
  rate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  duration?: InputMaybe<Scalars['Int']>;
  duration_not?: InputMaybe<Scalars['Int']>;
  duration_gt?: InputMaybe<Scalars['Int']>;
  duration_lt?: InputMaybe<Scalars['Int']>;
  duration_gte?: InputMaybe<Scalars['Int']>;
  duration_lte?: InputMaybe<Scalars['Int']>;
  duration_in?: InputMaybe<Array<Scalars['Int']>>;
  duration_not_in?: InputMaybe<Array<Scalars['Int']>>;
  maturityBlock?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_not?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_gt?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_lt?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_gte?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_lte?: InputMaybe<Scalars['BigInt']>;
  maturityBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maturityBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  side?: InputMaybe<InterestRateSide>;
  side_not?: InputMaybe<InterestRateSide>;
  side_in?: InputMaybe<Array<InterestRateSide>>;
  side_not_in?: InputMaybe<Array<InterestRateSide>>;
  type?: InputMaybe<InterestRateType>;
  type_not?: InputMaybe<InterestRateType>;
  type_in?: InputMaybe<Array<InterestRateType>>;
  type_not_in?: InputMaybe<Array<InterestRateType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<InterestRate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<InterestRate_filter>>>;
};

export type InterestRate_orderBy =
  | 'id'
  | 'rate'
  | 'duration'
  | 'maturityBlock'
  | 'side'
  | 'type';

export type LendingProtocol = Protocol & {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['ID'];
  /**  Name of the protocol, including version. e.g. Aave v2  */
  name: Scalars['String'];
  /**  Slug of protocol, including version. e.g. aave-v2  */
  slug: Scalars['String'];
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String'];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String'];
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String'];
  /**  The blockchain network this subgraph is indexing on  */
  network: Network;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType;
  /**  The specific lending protocol type  */
  lendingType?: Maybe<LendingType>;
  /**  Risk type of the lending protocol  */
  riskType?: Maybe<RiskType>;
  /**  Tokens that can be minted. Only applies to CDP  */
  mintedTokens?: Maybe<Array<Token>>;
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Number of cumulative depositors  */
  cumulativeUniqueDepositors: Scalars['Int'];
  /**  Number of cumulative borrowers  */
  cumulativeUniqueBorrowers: Scalars['Int'];
  /**  Number of cumulative liquidators (accounts that performed liquidation)  */
  cumulativeUniqueLiquidators: Scalars['Int'];
  /**  Number of cumulative liquidatees (accounts that got liquidated)  */
  cumulativeUniqueLiquidatees: Scalars['Int'];
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets, in USD. Note this metric should be the same as TVL.  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination).  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
  /**  Total supply of minted tokens in native amounts, with same ordering as mintedTokens. Only applies to CDP  */
  mintedTokenSupplies?: Maybe<Array<Scalars['BigInt']>>;
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int'];
  /**  Total number of open positions  */
  openPositionCount: Scalars['Int'];
  /**  Total number of positions (open and closed)  */
  cumulativePositionCount: Scalars['Int'];
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>;
  /**  All markets that belong to this protocol  */
  markets: Array<Market>;
  /**  String of the address of the current price oracle on the protocol  */
  _priceOracle: Scalars['String'];
  /**  A list of all markets in the snapshot  */
  _marketIDs: Array<Scalars['String']>;
};


export type LendingProtocolmintedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};


export type LendingProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
};


export type LendingProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
};


export type LendingProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
};


export type LendingProtocolmarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
};

export type LendingProtocol_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion?: InputMaybe<Scalars['String']>;
  schemaVersion_not?: InputMaybe<Scalars['String']>;
  schemaVersion_gt?: InputMaybe<Scalars['String']>;
  schemaVersion_lt?: InputMaybe<Scalars['String']>;
  schemaVersion_gte?: InputMaybe<Scalars['String']>;
  schemaVersion_lte?: InputMaybe<Scalars['String']>;
  schemaVersion_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion?: InputMaybe<Scalars['String']>;
  subgraphVersion_not?: InputMaybe<Scalars['String']>;
  subgraphVersion_gt?: InputMaybe<Scalars['String']>;
  subgraphVersion_lt?: InputMaybe<Scalars['String']>;
  subgraphVersion_gte?: InputMaybe<Scalars['String']>;
  subgraphVersion_lte?: InputMaybe<Scalars['String']>;
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion?: InputMaybe<Scalars['String']>;
  methodologyVersion_not?: InputMaybe<Scalars['String']>;
  methodologyVersion_gt?: InputMaybe<Scalars['String']>;
  methodologyVersion_lt?: InputMaybe<Scalars['String']>;
  methodologyVersion_gte?: InputMaybe<Scalars['String']>;
  methodologyVersion_lte?: InputMaybe<Scalars['String']>;
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Network>;
  network_not?: InputMaybe<Network>;
  network_in?: InputMaybe<Array<Network>>;
  network_not_in?: InputMaybe<Array<Network>>;
  type?: InputMaybe<ProtocolType>;
  type_not?: InputMaybe<ProtocolType>;
  type_in?: InputMaybe<Array<ProtocolType>>;
  type_not_in?: InputMaybe<Array<ProtocolType>>;
  lendingType?: InputMaybe<LendingType>;
  lendingType_not?: InputMaybe<LendingType>;
  lendingType_in?: InputMaybe<Array<LendingType>>;
  lendingType_not_in?: InputMaybe<Array<LendingType>>;
  riskType?: InputMaybe<RiskType>;
  riskType_not?: InputMaybe<RiskType>;
  riskType_in?: InputMaybe<Array<RiskType>>;
  riskType_not_in?: InputMaybe<Array<RiskType>>;
  mintedTokens?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_?: InputMaybe<Token_filter>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueDepositors?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueDepositors_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueDepositors_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueDepositors_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueDepositors_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueDepositors_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueDepositors_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueDepositors_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueBorrowers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueBorrowers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueBorrowers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueBorrowers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueBorrowers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueBorrowers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueBorrowers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueBorrowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueLiquidators?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidators_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidators_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidators_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidators_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidators_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidators_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueLiquidators_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueLiquidatees?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidatees_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidatees_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidatees_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidatees_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidatees_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidatees_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueLiquidatees_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  mintedTokenSupplies?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPoolCount?: InputMaybe<Scalars['Int']>;
  totalPoolCount_not?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  openPositionCount?: InputMaybe<Scalars['Int']>;
  openPositionCount_not?: InputMaybe<Scalars['Int']>;
  openPositionCount_gt?: InputMaybe<Scalars['Int']>;
  openPositionCount_lt?: InputMaybe<Scalars['Int']>;
  openPositionCount_gte?: InputMaybe<Scalars['Int']>;
  openPositionCount_lte?: InputMaybe<Scalars['Int']>;
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativePositionCount?: InputMaybe<Scalars['Int']>;
  cumulativePositionCount_not?: InputMaybe<Scalars['Int']>;
  cumulativePositionCount_gt?: InputMaybe<Scalars['Int']>;
  cumulativePositionCount_lt?: InputMaybe<Scalars['Int']>;
  cumulativePositionCount_gte?: InputMaybe<Scalars['Int']>;
  cumulativePositionCount_lte?: InputMaybe<Scalars['Int']>;
  cumulativePositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativePositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_filter>;
  hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
  financialMetrics_?: InputMaybe<FinancialsDailySnapshot_filter>;
  markets_?: InputMaybe<Market_filter>;
  _priceOracle?: InputMaybe<Scalars['String']>;
  _priceOracle_not?: InputMaybe<Scalars['String']>;
  _priceOracle_gt?: InputMaybe<Scalars['String']>;
  _priceOracle_lt?: InputMaybe<Scalars['String']>;
  _priceOracle_gte?: InputMaybe<Scalars['String']>;
  _priceOracle_lte?: InputMaybe<Scalars['String']>;
  _priceOracle_in?: InputMaybe<Array<Scalars['String']>>;
  _priceOracle_not_in?: InputMaybe<Array<Scalars['String']>>;
  _priceOracle_contains?: InputMaybe<Scalars['String']>;
  _priceOracle_contains_nocase?: InputMaybe<Scalars['String']>;
  _priceOracle_not_contains?: InputMaybe<Scalars['String']>;
  _priceOracle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  _priceOracle_starts_with?: InputMaybe<Scalars['String']>;
  _priceOracle_starts_with_nocase?: InputMaybe<Scalars['String']>;
  _priceOracle_not_starts_with?: InputMaybe<Scalars['String']>;
  _priceOracle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  _priceOracle_ends_with?: InputMaybe<Scalars['String']>;
  _priceOracle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  _priceOracle_not_ends_with?: InputMaybe<Scalars['String']>;
  _priceOracle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  _marketIDs?: InputMaybe<Array<Scalars['String']>>;
  _marketIDs_not?: InputMaybe<Array<Scalars['String']>>;
  _marketIDs_contains?: InputMaybe<Array<Scalars['String']>>;
  _marketIDs_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  _marketIDs_not_contains?: InputMaybe<Array<Scalars['String']>>;
  _marketIDs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LendingProtocol_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LendingProtocol_filter>>>;
};

export type LendingProtocol_orderBy =
  | 'id'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'lendingType'
  | 'riskType'
  | 'mintedTokens'
  | 'cumulativeUniqueUsers'
  | 'cumulativeUniqueDepositors'
  | 'cumulativeUniqueBorrowers'
  | 'cumulativeUniqueLiquidators'
  | 'cumulativeUniqueLiquidatees'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'totalDepositBalanceUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'cumulativeBorrowUSD'
  | 'cumulativeLiquidateUSD'
  | 'mintedTokenSupplies'
  | 'totalPoolCount'
  | 'openPositionCount'
  | 'cumulativePositionCount'
  | 'dailyUsageMetrics'
  | 'hourlyUsageMetrics'
  | 'financialMetrics'
  | 'markets'
  | '_priceOracle'
  | '_marketIDs';

export type LendingType =
  /**  Collateralized Debt Position (CDP) protocols have singular isolated positions created by users. We aggregate them to give a single view of a market  */
  | 'CDP'
  /**  Pooled protocols pool all users assets into a single market  */
  | 'POOLED';

export type Liquidate = {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  Account that carried out the liquidation  */
  liquidator: Account;
  /**  Account that got liquidated  */
  liquidatee: Account;
  /**  The market of the collateral being used  */
  market: Market;
  /**  The user position changed by this event  */
  position: Position;
  /**  Asset repaid (borrowed)  */
  asset: Token;
  /**  Amount of collateral liquidated in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of collateral liquidated in USD  */
  amountUSD: Scalars['BigDecimal'];
  /**  Amount of profit from liquidation in USD  */
  profitUSD: Scalars['BigDecimal'];
};

export type Liquidate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidator?: InputMaybe<Scalars['String']>;
  liquidator_not?: InputMaybe<Scalars['String']>;
  liquidator_gt?: InputMaybe<Scalars['String']>;
  liquidator_lt?: InputMaybe<Scalars['String']>;
  liquidator_gte?: InputMaybe<Scalars['String']>;
  liquidator_lte?: InputMaybe<Scalars['String']>;
  liquidator_in?: InputMaybe<Array<Scalars['String']>>;
  liquidator_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidator_contains?: InputMaybe<Scalars['String']>;
  liquidator_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidator_not_contains?: InputMaybe<Scalars['String']>;
  liquidator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidator_starts_with?: InputMaybe<Scalars['String']>;
  liquidator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidator_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidator_ends_with?: InputMaybe<Scalars['String']>;
  liquidator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidator_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidator_?: InputMaybe<Account_filter>;
  liquidatee?: InputMaybe<Scalars['String']>;
  liquidatee_not?: InputMaybe<Scalars['String']>;
  liquidatee_gt?: InputMaybe<Scalars['String']>;
  liquidatee_lt?: InputMaybe<Scalars['String']>;
  liquidatee_gte?: InputMaybe<Scalars['String']>;
  liquidatee_lte?: InputMaybe<Scalars['String']>;
  liquidatee_in?: InputMaybe<Array<Scalars['String']>>;
  liquidatee_not_in?: InputMaybe<Array<Scalars['String']>>;
  liquidatee_contains?: InputMaybe<Scalars['String']>;
  liquidatee_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidatee_not_contains?: InputMaybe<Scalars['String']>;
  liquidatee_not_contains_nocase?: InputMaybe<Scalars['String']>;
  liquidatee_starts_with?: InputMaybe<Scalars['String']>;
  liquidatee_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidatee_not_starts_with?: InputMaybe<Scalars['String']>;
  liquidatee_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  liquidatee_ends_with?: InputMaybe<Scalars['String']>;
  liquidatee_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidatee_not_ends_with?: InputMaybe<Scalars['String']>;
  liquidatee_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  liquidatee_?: InputMaybe<Account_filter>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_?: InputMaybe<Market_filter>;
  position?: InputMaybe<Scalars['String']>;
  position_not?: InputMaybe<Scalars['String']>;
  position_gt?: InputMaybe<Scalars['String']>;
  position_lt?: InputMaybe<Scalars['String']>;
  position_gte?: InputMaybe<Scalars['String']>;
  position_lte?: InputMaybe<Scalars['String']>;
  position_in?: InputMaybe<Array<Scalars['String']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']>>;
  position_contains?: InputMaybe<Scalars['String']>;
  position_contains_nocase?: InputMaybe<Scalars['String']>;
  position_not_contains?: InputMaybe<Scalars['String']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']>;
  position_starts_with?: InputMaybe<Scalars['String']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_starts_with?: InputMaybe<Scalars['String']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_ends_with?: InputMaybe<Scalars['String']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_ends_with?: InputMaybe<Scalars['String']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_?: InputMaybe<Position_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Token_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  profitUSD?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  profitUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  profitUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Liquidate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Liquidate_filter>>>;
};

export type Liquidate_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'blockNumber'
  | 'timestamp'
  | 'liquidator'
  | 'liquidator__id'
  | 'liquidator__positionCount'
  | 'liquidator__openPositionCount'
  | 'liquidator__closedPositionCount'
  | 'liquidator__depositCount'
  | 'liquidator__withdrawCount'
  | 'liquidator__borrowCount'
  | 'liquidator__repayCount'
  | 'liquidator__liquidateCount'
  | 'liquidator__liquidationCount'
  | 'liquidatee'
  | 'liquidatee__id'
  | 'liquidatee__positionCount'
  | 'liquidatee__openPositionCount'
  | 'liquidatee__closedPositionCount'
  | 'liquidatee__depositCount'
  | 'liquidatee__withdrawCount'
  | 'liquidatee__borrowCount'
  | 'liquidatee__repayCount'
  | 'liquidatee__liquidateCount'
  | 'liquidatee__liquidationCount'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canUseAsCollateral'
  | 'market__canBorrowFrom'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___reserveFactor'
  | 'market___liquidityIndex'
  | 'market___lastRewardsUpdated'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__side'
  | 'position__isCollateral'
  | 'position__balance'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'position__borrowCount'
  | 'position__repayCount'
  | 'position__liquidationCount'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset___type'
  | 'amount'
  | 'amountUSD'
  | 'profitUSD';

export type Market = {
  /**  Smart contract address of the market  */
  id: Scalars['ID'];
  /**  The protocol this pool belongs to  */
  protocol: LendingProtocol;
  /**  Name of market  */
  name?: Maybe<Scalars['String']>;
  /**  Is this market active or is it frozen  */
  isActive: Scalars['Boolean'];
  /**  Can you use the output token as collateral  */
  canUseAsCollateral: Scalars['Boolean'];
  /**  Can you borrow from this market  */
  canBorrowFrom: Scalars['Boolean'];
  /**  Maximum loan-to-value ratio as a percentage value (e.g. 75% for DAI in Aave)  */
  maximumLTV: Scalars['BigDecimal'];
  /**  Liquidation threshold as a percentage value (e.g. 80% for DAI in Aave). When it is reached, the position is defined as undercollateralised and could be liquidated  */
  liquidationThreshold: Scalars['BigDecimal'];
  /**  Liquidation penalty (or the liquidation bonus for liquidators) as a percentage value. It is the penalty/bonus price on the collateral when liquidators purchase it as part of the liquidation of a loan that has passed the liquidation threshold  */
  liquidationPenalty: Scalars['BigDecimal'];
  /**  Token that need to be deposited to take a position in protocol  */
  inputToken: Token;
  /**  Token that is minted to track ownership of position in protocol (e.g. aToken, cToken). Leave as null if doesn't exist  */
  outputToken?: Maybe<Token>;
  /**  Aditional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<RewardToken>>;
  /**  All interest rates / fees allowed in the market. Interest rate should be in APY percentage  */
  rates: Array<InterestRate>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the market, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the market, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the market.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets (not historical cumulative), in USD  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
  /**  Amount of input tokens in the market  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Price per share of input token in USD  */
  inputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Total supply of output token  */
  outputTokenSupply: Scalars['BigInt'];
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Amount of input token per full share of output token. Only applies when the output token exists (note this is a ratio and not a percentage value, i.e. 1.05 instead of 105%)  */
  exchangeRate?: Maybe<Scalars['BigDecimal']>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
  /**  Creation timestamp  */
  createdTimestamp: Scalars['BigInt'];
  /**  Creation block number  */
  createdBlockNumber: Scalars['BigInt'];
  /**  All positions in this market  */
  positions: Array<Position>;
  /**  Number of positions in this market  */
  positionCount: Scalars['Int'];
  /**  Number of open positions in this market  */
  openPositionCount: Scalars['Int'];
  /**  Number of closed positions in this market  */
  closedPositionCount: Scalars['Int'];
  /**  Number of lending positions in this market  */
  lendingPositionCount: Scalars['Int'];
  /**  Number of borrowing positions in this market  */
  borrowingPositionCount: Scalars['Int'];
  /**  Market daily snapshots  */
  dailySnapshots: Array<MarketDailySnapshot>;
  /**  Market hourly snapshots  */
  hourlySnapshots: Array<MarketHourlySnapshot>;
  /**  All deposits made to this market  */
  deposits: Array<Deposit>;
  /**  All withdrawals made from this market  */
  withdraws: Array<Withdraw>;
  /**  All borrows from this market  */
  borrows: Array<Borrow>;
  /**  All repayments to this market  */
  repays: Array<Repay>;
  /**  All liquidations made to this market  */
  liquidates: Array<Liquidate>;
  /**  The reserve factor as a percentage  */
  _reserveFactor: Scalars['BigDecimal'];
  /**  The variable debt token address correlated to the reserve asset  */
  _vToken?: Maybe<Token>;
  /**  The stable debt token address correlated to the reserve asset  */
  _sToken?: Maybe<Token>;
  /**  An aggregate metric of the average borrow rate across all borrows  */
  _liquidityIndex: Scalars['BigInt'];
  /**  The state of the protocol prior to being paused (isActive / canUseAsCollateral / canBorrowFrom)  */
  _prePauseState: Array<Scalars['Boolean']>;
  /**  Aux: Timestamp of the last time rewards were calculated for this market.  */
  _lastRewardsUpdated?: Maybe<Scalars['BigInt']>;
};


export type MarketrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardToken_filter>;
};


export type MarketratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
};


export type MarketpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
};


export type MarketdailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketDailySnapshot_filter>;
};


export type MarkethourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketHourlySnapshot_filter>;
};


export type MarketdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};


export type MarketwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
};


export type MarketborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
};


export type MarketrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
};


export type MarketliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidate_filter>;
};

export type MarketDailySnapshot = {
  /**  { Smart contract address of the market }-{ # of days since Unix epoch time }  */
  id: Scalars['ID'];
  /**  The protocol this snapshot belongs to  */
  protocol: LendingProtocol;
  /**  The pool this snapshot belongs to  */
  market: Market;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  All interest rates / fees allowed in the market. Interest rate should be in APY percentage  */
  rates: Array<InterestRate>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the market, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Daily revenue generated by the market, accrued to the supply side.  */
  dailySupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the market, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  Daily revenue generated by the market, accrued to the protocol.  */
  dailyProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the market.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Daily revenue generated by the market.  */
  dailyTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets (not historical cumulative), in USD. Same as pool TVL.  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all deposits made on a given day, in USD  */
  dailyDepositUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all borrows/mints made on a given day, in USD  */
  dailyBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Total assets liquidated on a given day, in USD.  */
  dailyLiquidateUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
  /**  Total assets withdrawn on a given day, in USD.  */
  dailyWithdrawUSD: Scalars['BigDecimal'];
  /**  Total assets repaid on a given day, in USD.  */
  dailyRepayUSD: Scalars['BigDecimal'];
  /**  Amount of input token in the market.  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Price per share of input token in USD  */
  inputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Total supply of output token  */
  outputTokenSupply: Scalars['BigInt'];
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Amount of input token per full share of output token. Only applies when the output token exists  */
  exchangeRate?: Maybe<Scalars['BigDecimal']>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
};


export type MarketDailySnapshotratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
};

export type MarketDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<LendingProtocol_filter>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_?: InputMaybe<Market_filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_?: InputMaybe<InterestRate_filter>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyWithdrawUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyWithdrawUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyWithdrawUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyWithdrawUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyWithdrawUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyWithdrawUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyWithdrawUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyWithdrawUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyRepayUSD?: InputMaybe<Scalars['BigDecimal']>;
  dailyRepayUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyRepayUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyRepayUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyRepayUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyRepayUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyRepayUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyRepayUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalance?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MarketDailySnapshot_filter>>>;
};

export type MarketDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__lendingType'
  | 'protocol__riskType'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueDepositors'
  | 'protocol__cumulativeUniqueBorrowers'
  | 'protocol__cumulativeUniqueLiquidators'
  | 'protocol__cumulativeUniqueLiquidatees'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__totalDepositBalanceUSD'
  | 'protocol__cumulativeDepositUSD'
  | 'protocol__totalBorrowBalanceUSD'
  | 'protocol__cumulativeBorrowUSD'
  | 'protocol__cumulativeLiquidateUSD'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol___priceOracle'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canUseAsCollateral'
  | 'market__canBorrowFrom'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___reserveFactor'
  | 'market___liquidityIndex'
  | 'market___lastRewardsUpdated'
  | 'blockNumber'
  | 'timestamp'
  | 'rates'
  | 'totalValueLockedUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'dailySupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'dailyProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'dailyTotalRevenueUSD'
  | 'totalDepositBalanceUSD'
  | 'dailyDepositUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'dailyBorrowUSD'
  | 'cumulativeBorrowUSD'
  | 'dailyLiquidateUSD'
  | 'cumulativeLiquidateUSD'
  | 'dailyWithdrawUSD'
  | 'dailyRepayUSD'
  | 'inputTokenBalance'
  | 'inputTokenPriceUSD'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'exchangeRate'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD';

export type MarketHourlySnapshot = {
  /**  { Smart contract address of the market }-{ # of hours since Unix epoch time }  */
  id: Scalars['ID'];
  /**  The protocol this snapshot belongs to  */
  protocol: LendingProtocol;
  /**  The pool this snapshot belongs to  */
  market: Market;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  All interest rates / fees allowed in the market. Interest rate should be in APY percentage  */
  rates: Array<InterestRate>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the market, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Hourly revenue generated by the market, accrued to the supply side.  */
  hourlySupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the market, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  Hourly revenue generated by the market, accrued to the protocol.  */
  hourlyProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the market.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Hourly revenue generated by the market.  */
  hourlyTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Current balance of all deposited assets (not historical cumulative), in USD. Same as pool TVL.  */
  totalDepositBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all deposits made in a given hour, in USD  */
  hourlyDepositUSD: Scalars['BigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['BigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['BigDecimal'];
  /**  Sum of all borrows/mints made in a given hour, in USD  */
  hourlyBorrowUSD: Scalars['BigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['BigDecimal'];
  /**  Total assets liquidated in a given hour, in USD.  */
  hourlyLiquidateUSD: Scalars['BigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['BigDecimal'];
  /**  Total assets withdrawn on a given hour, in USD.  */
  hourlyWithdrawUSD: Scalars['BigDecimal'];
  /**  Total assets repaid on a given hour, in USD.  */
  hourlyRepayUSD: Scalars['BigDecimal'];
  /**  Amount of input token in the market.  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Price per share of input token in USD  */
  inputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Total supply of output token  */
  outputTokenSupply: Scalars['BigInt'];
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD: Scalars['BigDecimal'];
  /**  Amount of input token per full share of output token. Only applies when the output token exists  */
  exchangeRate?: Maybe<Scalars['BigDecimal']>;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
};


export type MarketHourlySnapshotratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
};

export type MarketHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<LendingProtocol_filter>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_?: InputMaybe<Market_filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_?: InputMaybe<InterestRate_filter>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyWithdrawUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyWithdrawUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyWithdrawUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyWithdrawUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyWithdrawUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyWithdrawUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyWithdrawUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyWithdrawUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyRepayUSD?: InputMaybe<Scalars['BigDecimal']>;
  hourlyRepayUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  hourlyRepayUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyRepayUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  hourlyRepayUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyRepayUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  hourlyRepayUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  hourlyRepayUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalance?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketHourlySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MarketHourlySnapshot_filter>>>;
};

export type MarketHourlySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__lendingType'
  | 'protocol__riskType'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueDepositors'
  | 'protocol__cumulativeUniqueBorrowers'
  | 'protocol__cumulativeUniqueLiquidators'
  | 'protocol__cumulativeUniqueLiquidatees'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__totalDepositBalanceUSD'
  | 'protocol__cumulativeDepositUSD'
  | 'protocol__totalBorrowBalanceUSD'
  | 'protocol__cumulativeBorrowUSD'
  | 'protocol__cumulativeLiquidateUSD'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol___priceOracle'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canUseAsCollateral'
  | 'market__canBorrowFrom'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___reserveFactor'
  | 'market___liquidityIndex'
  | 'market___lastRewardsUpdated'
  | 'blockNumber'
  | 'timestamp'
  | 'rates'
  | 'totalValueLockedUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'hourlySupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'hourlyProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'hourlyTotalRevenueUSD'
  | 'totalDepositBalanceUSD'
  | 'hourlyDepositUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'hourlyBorrowUSD'
  | 'cumulativeBorrowUSD'
  | 'hourlyLiquidateUSD'
  | 'cumulativeLiquidateUSD'
  | 'hourlyWithdrawUSD'
  | 'hourlyRepayUSD'
  | 'inputTokenBalance'
  | 'inputTokenPriceUSD'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'exchangeRate'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD';

export type Market_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<LendingProtocol_filter>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canUseAsCollateral?: InputMaybe<Scalars['Boolean']>;
  canUseAsCollateral_not?: InputMaybe<Scalars['Boolean']>;
  canUseAsCollateral_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canUseAsCollateral_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canBorrowFrom?: InputMaybe<Scalars['Boolean']>;
  canBorrowFrom_not?: InputMaybe<Scalars['Boolean']>;
  canBorrowFrom_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canBorrowFrom_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  maximumLTV?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_not?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_gt?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_lt?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_gte?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_lte?: InputMaybe<Scalars['BigDecimal']>;
  maximumLTV_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  maximumLTV_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationThreshold?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationThreshold_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationThreshold_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationPenalty?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationPenalty_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationPenalty_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputToken?: InputMaybe<Scalars['String']>;
  inputToken_not?: InputMaybe<Scalars['String']>;
  inputToken_gt?: InputMaybe<Scalars['String']>;
  inputToken_lt?: InputMaybe<Scalars['String']>;
  inputToken_gte?: InputMaybe<Scalars['String']>;
  inputToken_lte?: InputMaybe<Scalars['String']>;
  inputToken_in?: InputMaybe<Array<Scalars['String']>>;
  inputToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  inputToken_contains?: InputMaybe<Scalars['String']>;
  inputToken_contains_nocase?: InputMaybe<Scalars['String']>;
  inputToken_not_contains?: InputMaybe<Scalars['String']>;
  inputToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  inputToken_starts_with?: InputMaybe<Scalars['String']>;
  inputToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  inputToken_not_starts_with?: InputMaybe<Scalars['String']>;
  inputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  inputToken_ends_with?: InputMaybe<Scalars['String']>;
  inputToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  inputToken_not_ends_with?: InputMaybe<Scalars['String']>;
  inputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  inputToken_?: InputMaybe<Token_filter>;
  outputToken?: InputMaybe<Scalars['String']>;
  outputToken_not?: InputMaybe<Scalars['String']>;
  outputToken_gt?: InputMaybe<Scalars['String']>;
  outputToken_lt?: InputMaybe<Scalars['String']>;
  outputToken_gte?: InputMaybe<Scalars['String']>;
  outputToken_lte?: InputMaybe<Scalars['String']>;
  outputToken_in?: InputMaybe<Array<Scalars['String']>>;
  outputToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  outputToken_contains?: InputMaybe<Scalars['String']>;
  outputToken_contains_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_contains?: InputMaybe<Scalars['String']>;
  outputToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  outputToken_starts_with?: InputMaybe<Scalars['String']>;
  outputToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_starts_with?: InputMaybe<Scalars['String']>;
  outputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_ends_with?: InputMaybe<Scalars['String']>;
  outputToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_not_ends_with?: InputMaybe<Scalars['String']>;
  outputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  outputToken_?: InputMaybe<Token_filter>;
  rewardTokens?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_?: InputMaybe<RewardToken_filter>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_?: InputMaybe<InterestRate_filter>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenBalance?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlockNumber?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  positions_?: InputMaybe<Position_filter>;
  positionCount?: InputMaybe<Scalars['Int']>;
  positionCount_not?: InputMaybe<Scalars['Int']>;
  positionCount_gt?: InputMaybe<Scalars['Int']>;
  positionCount_lt?: InputMaybe<Scalars['Int']>;
  positionCount_gte?: InputMaybe<Scalars['Int']>;
  positionCount_lte?: InputMaybe<Scalars['Int']>;
  positionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  positionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  openPositionCount?: InputMaybe<Scalars['Int']>;
  openPositionCount_not?: InputMaybe<Scalars['Int']>;
  openPositionCount_gt?: InputMaybe<Scalars['Int']>;
  openPositionCount_lt?: InputMaybe<Scalars['Int']>;
  openPositionCount_gte?: InputMaybe<Scalars['Int']>;
  openPositionCount_lte?: InputMaybe<Scalars['Int']>;
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  closedPositionCount?: InputMaybe<Scalars['Int']>;
  closedPositionCount_not?: InputMaybe<Scalars['Int']>;
  closedPositionCount_gt?: InputMaybe<Scalars['Int']>;
  closedPositionCount_lt?: InputMaybe<Scalars['Int']>;
  closedPositionCount_gte?: InputMaybe<Scalars['Int']>;
  closedPositionCount_lte?: InputMaybe<Scalars['Int']>;
  closedPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lendingPositionCount?: InputMaybe<Scalars['Int']>;
  lendingPositionCount_not?: InputMaybe<Scalars['Int']>;
  lendingPositionCount_gt?: InputMaybe<Scalars['Int']>;
  lendingPositionCount_lt?: InputMaybe<Scalars['Int']>;
  lendingPositionCount_gte?: InputMaybe<Scalars['Int']>;
  lendingPositionCount_lte?: InputMaybe<Scalars['Int']>;
  lendingPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  lendingPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowingPositionCount?: InputMaybe<Scalars['Int']>;
  borrowingPositionCount_not?: InputMaybe<Scalars['Int']>;
  borrowingPositionCount_gt?: InputMaybe<Scalars['Int']>;
  borrowingPositionCount_lt?: InputMaybe<Scalars['Int']>;
  borrowingPositionCount_gte?: InputMaybe<Scalars['Int']>;
  borrowingPositionCount_lte?: InputMaybe<Scalars['Int']>;
  borrowingPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowingPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailySnapshots_?: InputMaybe<MarketDailySnapshot_filter>;
  hourlySnapshots_?: InputMaybe<MarketHourlySnapshot_filter>;
  deposits_?: InputMaybe<Deposit_filter>;
  withdraws_?: InputMaybe<Withdraw_filter>;
  borrows_?: InputMaybe<Borrow_filter>;
  repays_?: InputMaybe<Repay_filter>;
  liquidates_?: InputMaybe<Liquidate_filter>;
  _reserveFactor?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_not?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_gt?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_lt?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_gte?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_lte?: InputMaybe<Scalars['BigDecimal']>;
  _reserveFactor_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  _reserveFactor_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  _vToken?: InputMaybe<Scalars['String']>;
  _vToken_not?: InputMaybe<Scalars['String']>;
  _vToken_gt?: InputMaybe<Scalars['String']>;
  _vToken_lt?: InputMaybe<Scalars['String']>;
  _vToken_gte?: InputMaybe<Scalars['String']>;
  _vToken_lte?: InputMaybe<Scalars['String']>;
  _vToken_in?: InputMaybe<Array<Scalars['String']>>;
  _vToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  _vToken_contains?: InputMaybe<Scalars['String']>;
  _vToken_contains_nocase?: InputMaybe<Scalars['String']>;
  _vToken_not_contains?: InputMaybe<Scalars['String']>;
  _vToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  _vToken_starts_with?: InputMaybe<Scalars['String']>;
  _vToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  _vToken_not_starts_with?: InputMaybe<Scalars['String']>;
  _vToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  _vToken_ends_with?: InputMaybe<Scalars['String']>;
  _vToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  _vToken_not_ends_with?: InputMaybe<Scalars['String']>;
  _vToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  _vToken_?: InputMaybe<Token_filter>;
  _sToken?: InputMaybe<Scalars['String']>;
  _sToken_not?: InputMaybe<Scalars['String']>;
  _sToken_gt?: InputMaybe<Scalars['String']>;
  _sToken_lt?: InputMaybe<Scalars['String']>;
  _sToken_gte?: InputMaybe<Scalars['String']>;
  _sToken_lte?: InputMaybe<Scalars['String']>;
  _sToken_in?: InputMaybe<Array<Scalars['String']>>;
  _sToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  _sToken_contains?: InputMaybe<Scalars['String']>;
  _sToken_contains_nocase?: InputMaybe<Scalars['String']>;
  _sToken_not_contains?: InputMaybe<Scalars['String']>;
  _sToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  _sToken_starts_with?: InputMaybe<Scalars['String']>;
  _sToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  _sToken_not_starts_with?: InputMaybe<Scalars['String']>;
  _sToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  _sToken_ends_with?: InputMaybe<Scalars['String']>;
  _sToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  _sToken_not_ends_with?: InputMaybe<Scalars['String']>;
  _sToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  _sToken_?: InputMaybe<Token_filter>;
  _liquidityIndex?: InputMaybe<Scalars['BigInt']>;
  _liquidityIndex_not?: InputMaybe<Scalars['BigInt']>;
  _liquidityIndex_gt?: InputMaybe<Scalars['BigInt']>;
  _liquidityIndex_lt?: InputMaybe<Scalars['BigInt']>;
  _liquidityIndex_gte?: InputMaybe<Scalars['BigInt']>;
  _liquidityIndex_lte?: InputMaybe<Scalars['BigInt']>;
  _liquidityIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _liquidityIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _prePauseState?: InputMaybe<Array<Scalars['Boolean']>>;
  _prePauseState_not?: InputMaybe<Array<Scalars['Boolean']>>;
  _prePauseState_contains?: InputMaybe<Array<Scalars['Boolean']>>;
  _prePauseState_contains_nocase?: InputMaybe<Array<Scalars['Boolean']>>;
  _prePauseState_not_contains?: InputMaybe<Array<Scalars['Boolean']>>;
  _prePauseState_not_contains_nocase?: InputMaybe<Array<Scalars['Boolean']>>;
  _lastRewardsUpdated?: InputMaybe<Scalars['BigInt']>;
  _lastRewardsUpdated_not?: InputMaybe<Scalars['BigInt']>;
  _lastRewardsUpdated_gt?: InputMaybe<Scalars['BigInt']>;
  _lastRewardsUpdated_lt?: InputMaybe<Scalars['BigInt']>;
  _lastRewardsUpdated_gte?: InputMaybe<Scalars['BigInt']>;
  _lastRewardsUpdated_lte?: InputMaybe<Scalars['BigInt']>;
  _lastRewardsUpdated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _lastRewardsUpdated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Market_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Market_filter>>>;
};

export type Market_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__lendingType'
  | 'protocol__riskType'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueDepositors'
  | 'protocol__cumulativeUniqueBorrowers'
  | 'protocol__cumulativeUniqueLiquidators'
  | 'protocol__cumulativeUniqueLiquidatees'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__totalDepositBalanceUSD'
  | 'protocol__cumulativeDepositUSD'
  | 'protocol__totalBorrowBalanceUSD'
  | 'protocol__cumulativeBorrowUSD'
  | 'protocol__cumulativeLiquidateUSD'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol___priceOracle'
  | 'name'
  | 'isActive'
  | 'canUseAsCollateral'
  | 'canBorrowFrom'
  | 'maximumLTV'
  | 'liquidationThreshold'
  | 'liquidationPenalty'
  | 'inputToken'
  | 'inputToken__id'
  | 'inputToken__name'
  | 'inputToken__symbol'
  | 'inputToken__decimals'
  | 'inputToken__lastPriceUSD'
  | 'inputToken__lastPriceBlockNumber'
  | 'inputToken___type'
  | 'outputToken'
  | 'outputToken__id'
  | 'outputToken__name'
  | 'outputToken__symbol'
  | 'outputToken__decimals'
  | 'outputToken__lastPriceUSD'
  | 'outputToken__lastPriceBlockNumber'
  | 'outputToken___type'
  | 'rewardTokens'
  | 'rates'
  | 'totalValueLockedUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'totalDepositBalanceUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'cumulativeBorrowUSD'
  | 'cumulativeLiquidateUSD'
  | 'inputTokenBalance'
  | 'inputTokenPriceUSD'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'exchangeRate'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'
  | 'createdTimestamp'
  | 'createdBlockNumber'
  | 'positions'
  | 'positionCount'
  | 'openPositionCount'
  | 'closedPositionCount'
  | 'lendingPositionCount'
  | 'borrowingPositionCount'
  | 'dailySnapshots'
  | 'hourlySnapshots'
  | 'deposits'
  | 'withdraws'
  | 'borrows'
  | 'repays'
  | 'liquidates'
  | '_reserveFactor'
  | '_vToken'
  | '_vToken__id'
  | '_vToken__name'
  | '_vToken__symbol'
  | '_vToken__decimals'
  | '_vToken__lastPriceUSD'
  | '_vToken__lastPriceBlockNumber'
  | '_vToken___type'
  | '_sToken'
  | '_sToken__id'
  | '_sToken__name'
  | '_sToken__symbol'
  | '_sToken__decimals'
  | '_sToken__lastPriceUSD'
  | '_sToken__lastPriceBlockNumber'
  | '_sToken___type'
  | '_liquidityIndex'
  | '_prePauseState'
  | '_lastRewardsUpdated';

export type Network =
  | 'ARBITRUM_ONE'
  | 'ARWEAVE_MAINNET'
  | 'AURORA'
  | 'AVALANCHE'
  | 'BOBA'
  | 'BSC'
  | 'CELO'
  | 'COSMOS'
  | 'CRONOS'
  | 'MAINNET'
  | 'FANTOM'
  | 'FUSE'
  | 'HARMONY'
  | 'JUNO'
  | 'MOONBEAM'
  | 'MOONRIVER'
  | 'NEAR_MAINNET'
  | 'OPTIMISM'
  | 'OSMOSIS'
  | 'MATIC'
  | 'XDAI';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Position = {
  /**  { Account address }-{ Market address }-{ Position Side }-{ Counter }  */
  id: Scalars['ID'];
  /**  Account that owns this position  */
  account: Account;
  /**  The market in which this position was opened  */
  market: Market;
  /**  The hash of the transaction that opened this position  */
  hashOpened: Scalars['String'];
  /**  The hash of the transaction that closed this position  */
  hashClosed?: Maybe<Scalars['String']>;
  /**  Block number of when the position was opened  */
  blockNumberOpened: Scalars['BigInt'];
  /**  Timestamp when the position was opened  */
  timestampOpened: Scalars['BigInt'];
  /**  Block number of when the position was closed (0 if still open)  */
  blockNumberClosed?: Maybe<Scalars['BigInt']>;
  /**  Timestamp when the position was closed (0 if still open)  */
  timestampClosed?: Maybe<Scalars['BigInt']>;
  /**  Side of the position (either lender or borrower)  */
  side: PositionSide;
  /**  Whether this position is being used as a collateral (only applies to LENDER positions)  */
  isCollateral?: Maybe<Scalars['Boolean']>;
  /**  Token balance in this position, in native amounts  */
  balance: Scalars['BigInt'];
  /**  Number of deposits related to this position  */
  depositCount: Scalars['Int'];
  /**  All deposit events of this position  */
  deposits: Array<Deposit>;
  /**  Number of withdrawals related to this position  */
  withdrawCount: Scalars['Int'];
  /**  All withdraw events of this position  */
  withdraws: Array<Withdraw>;
  /**  Number of borrows related to this position  */
  borrowCount: Scalars['Int'];
  /**  All borrow events of this position  */
  borrows: Array<Borrow>;
  /**  Number of repays related to this position  */
  repayCount: Scalars['Int'];
  /**  All repay events of this position  */
  repays: Array<Repay>;
  /**  Number of liquidations related to this position  */
  liquidationCount: Scalars['Int'];
  /**  Liquidation event related to this position (if exists)  */
  liquidations: Array<Liquidate>;
  /**  Position daily snapshots for open positions  */
  snapshots: Array<PositionSnapshot>;
};


export type PositiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};


export type PositionwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
};


export type PositionborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
};


export type PositionrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
};


export type PositionliquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidate_filter>;
};


export type PositionsnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionSnapshot_filter>;
};

export type PositionCounter = {
  /**  { Account address }-{ Market address }-{ Position Side }  */
  id: Scalars['ID'];
  /**  Next count  */
  nextCount: Scalars['Int'];
};

export type PositionCounter_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nextCount?: InputMaybe<Scalars['Int']>;
  nextCount_not?: InputMaybe<Scalars['Int']>;
  nextCount_gt?: InputMaybe<Scalars['Int']>;
  nextCount_lt?: InputMaybe<Scalars['Int']>;
  nextCount_gte?: InputMaybe<Scalars['Int']>;
  nextCount_lte?: InputMaybe<Scalars['Int']>;
  nextCount_in?: InputMaybe<Array<Scalars['Int']>>;
  nextCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionCounter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PositionCounter_filter>>>;
};

export type PositionCounter_orderBy =
  | 'id'
  | 'nextCount';

export type PositionSide =
  /**  Position opened as a lender  */
  | 'LENDER'
  /**  Position opened as a borrower  */
  | 'BORROWER';

export type PositionSnapshot = {
  /**  { Position ID }-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that triggered this snapshot  */
  hash: Scalars['String'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Nonce of the transaction that triggered this snapshot  */
  nonce: Scalars['BigInt'];
  /**  Position of this snapshot  */
  position: Position;
  /**  Token balance in this position, in native amounts  */
  balance: Scalars['BigInt'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
};

export type PositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  position?: InputMaybe<Scalars['String']>;
  position_not?: InputMaybe<Scalars['String']>;
  position_gt?: InputMaybe<Scalars['String']>;
  position_lt?: InputMaybe<Scalars['String']>;
  position_gte?: InputMaybe<Scalars['String']>;
  position_lte?: InputMaybe<Scalars['String']>;
  position_in?: InputMaybe<Array<Scalars['String']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']>>;
  position_contains?: InputMaybe<Scalars['String']>;
  position_contains_nocase?: InputMaybe<Scalars['String']>;
  position_not_contains?: InputMaybe<Scalars['String']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']>;
  position_starts_with?: InputMaybe<Scalars['String']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_starts_with?: InputMaybe<Scalars['String']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_ends_with?: InputMaybe<Scalars['String']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_ends_with?: InputMaybe<Scalars['String']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_?: InputMaybe<Position_filter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PositionSnapshot_filter>>>;
};

export type PositionSnapshot_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'nonce'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__side'
  | 'position__isCollateral'
  | 'position__balance'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'position__borrowCount'
  | 'position__repayCount'
  | 'position__liquidationCount'
  | 'balance'
  | 'blockNumber'
  | 'timestamp';

export type Position_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_?: InputMaybe<Market_filter>;
  hashOpened?: InputMaybe<Scalars['String']>;
  hashOpened_not?: InputMaybe<Scalars['String']>;
  hashOpened_gt?: InputMaybe<Scalars['String']>;
  hashOpened_lt?: InputMaybe<Scalars['String']>;
  hashOpened_gte?: InputMaybe<Scalars['String']>;
  hashOpened_lte?: InputMaybe<Scalars['String']>;
  hashOpened_in?: InputMaybe<Array<Scalars['String']>>;
  hashOpened_not_in?: InputMaybe<Array<Scalars['String']>>;
  hashOpened_contains?: InputMaybe<Scalars['String']>;
  hashOpened_contains_nocase?: InputMaybe<Scalars['String']>;
  hashOpened_not_contains?: InputMaybe<Scalars['String']>;
  hashOpened_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hashOpened_starts_with?: InputMaybe<Scalars['String']>;
  hashOpened_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hashOpened_not_starts_with?: InputMaybe<Scalars['String']>;
  hashOpened_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hashOpened_ends_with?: InputMaybe<Scalars['String']>;
  hashOpened_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hashOpened_not_ends_with?: InputMaybe<Scalars['String']>;
  hashOpened_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hashClosed?: InputMaybe<Scalars['String']>;
  hashClosed_not?: InputMaybe<Scalars['String']>;
  hashClosed_gt?: InputMaybe<Scalars['String']>;
  hashClosed_lt?: InputMaybe<Scalars['String']>;
  hashClosed_gte?: InputMaybe<Scalars['String']>;
  hashClosed_lte?: InputMaybe<Scalars['String']>;
  hashClosed_in?: InputMaybe<Array<Scalars['String']>>;
  hashClosed_not_in?: InputMaybe<Array<Scalars['String']>>;
  hashClosed_contains?: InputMaybe<Scalars['String']>;
  hashClosed_contains_nocase?: InputMaybe<Scalars['String']>;
  hashClosed_not_contains?: InputMaybe<Scalars['String']>;
  hashClosed_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hashClosed_starts_with?: InputMaybe<Scalars['String']>;
  hashClosed_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hashClosed_not_starts_with?: InputMaybe<Scalars['String']>;
  hashClosed_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hashClosed_ends_with?: InputMaybe<Scalars['String']>;
  hashClosed_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hashClosed_not_ends_with?: InputMaybe<Scalars['String']>;
  hashClosed_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  blockNumberOpened?: InputMaybe<Scalars['BigInt']>;
  blockNumberOpened_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberOpened_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberOpened_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberOpened_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberOpened_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberOpened_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberOpened_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestampOpened?: InputMaybe<Scalars['BigInt']>;
  timestampOpened_not?: InputMaybe<Scalars['BigInt']>;
  timestampOpened_gt?: InputMaybe<Scalars['BigInt']>;
  timestampOpened_lt?: InputMaybe<Scalars['BigInt']>;
  timestampOpened_gte?: InputMaybe<Scalars['BigInt']>;
  timestampOpened_lte?: InputMaybe<Scalars['BigInt']>;
  timestampOpened_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestampOpened_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberClosed?: InputMaybe<Scalars['BigInt']>;
  blockNumberClosed_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberClosed_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberClosed_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberClosed_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberClosed_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberClosed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberClosed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestampClosed?: InputMaybe<Scalars['BigInt']>;
  timestampClosed_not?: InputMaybe<Scalars['BigInt']>;
  timestampClosed_gt?: InputMaybe<Scalars['BigInt']>;
  timestampClosed_lt?: InputMaybe<Scalars['BigInt']>;
  timestampClosed_gte?: InputMaybe<Scalars['BigInt']>;
  timestampClosed_lte?: InputMaybe<Scalars['BigInt']>;
  timestampClosed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestampClosed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  side?: InputMaybe<PositionSide>;
  side_not?: InputMaybe<PositionSide>;
  side_in?: InputMaybe<Array<PositionSide>>;
  side_not_in?: InputMaybe<Array<PositionSide>>;
  isCollateral?: InputMaybe<Scalars['Boolean']>;
  isCollateral_not?: InputMaybe<Scalars['Boolean']>;
  isCollateral_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isCollateral_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositCount?: InputMaybe<Scalars['Int']>;
  depositCount_not?: InputMaybe<Scalars['Int']>;
  depositCount_gt?: InputMaybe<Scalars['Int']>;
  depositCount_lt?: InputMaybe<Scalars['Int']>;
  depositCount_gte?: InputMaybe<Scalars['Int']>;
  depositCount_lte?: InputMaybe<Scalars['Int']>;
  depositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  depositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deposits_?: InputMaybe<Deposit_filter>;
  withdrawCount?: InputMaybe<Scalars['Int']>;
  withdrawCount_not?: InputMaybe<Scalars['Int']>;
  withdrawCount_gt?: InputMaybe<Scalars['Int']>;
  withdrawCount_lt?: InputMaybe<Scalars['Int']>;
  withdrawCount_gte?: InputMaybe<Scalars['Int']>;
  withdrawCount_lte?: InputMaybe<Scalars['Int']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdraws_?: InputMaybe<Withdraw_filter>;
  borrowCount?: InputMaybe<Scalars['Int']>;
  borrowCount_not?: InputMaybe<Scalars['Int']>;
  borrowCount_gt?: InputMaybe<Scalars['Int']>;
  borrowCount_lt?: InputMaybe<Scalars['Int']>;
  borrowCount_gte?: InputMaybe<Scalars['Int']>;
  borrowCount_lte?: InputMaybe<Scalars['Int']>;
  borrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  borrows_?: InputMaybe<Borrow_filter>;
  repayCount?: InputMaybe<Scalars['Int']>;
  repayCount_not?: InputMaybe<Scalars['Int']>;
  repayCount_gt?: InputMaybe<Scalars['Int']>;
  repayCount_lt?: InputMaybe<Scalars['Int']>;
  repayCount_gte?: InputMaybe<Scalars['Int']>;
  repayCount_lte?: InputMaybe<Scalars['Int']>;
  repayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  repayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  repays_?: InputMaybe<Repay_filter>;
  liquidationCount?: InputMaybe<Scalars['Int']>;
  liquidationCount_not?: InputMaybe<Scalars['Int']>;
  liquidationCount_gt?: InputMaybe<Scalars['Int']>;
  liquidationCount_lt?: InputMaybe<Scalars['Int']>;
  liquidationCount_gte?: InputMaybe<Scalars['Int']>;
  liquidationCount_lte?: InputMaybe<Scalars['Int']>;
  liquidationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidations_?: InputMaybe<Liquidate_filter>;
  snapshots_?: InputMaybe<PositionSnapshot_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Position_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Position_filter>>>;
};

export type Position_orderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'account__positionCount'
  | 'account__openPositionCount'
  | 'account__closedPositionCount'
  | 'account__depositCount'
  | 'account__withdrawCount'
  | 'account__borrowCount'
  | 'account__repayCount'
  | 'account__liquidateCount'
  | 'account__liquidationCount'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canUseAsCollateral'
  | 'market__canBorrowFrom'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___reserveFactor'
  | 'market___liquidityIndex'
  | 'market___lastRewardsUpdated'
  | 'hashOpened'
  | 'hashClosed'
  | 'blockNumberOpened'
  | 'timestampOpened'
  | 'blockNumberClosed'
  | 'timestampClosed'
  | 'side'
  | 'isCollateral'
  | 'balance'
  | 'depositCount'
  | 'deposits'
  | 'withdrawCount'
  | 'withdraws'
  | 'borrowCount'
  | 'borrows'
  | 'repayCount'
  | 'repays'
  | 'liquidationCount'
  | 'liquidations'
  | 'snapshots';

export type Protocol = {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['ID'];
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars['String'];
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars['String'];
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String'];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String'];
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String'];
  /**  The blockchain network this subgraph is indexing on  */
  network: Network;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType;
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int'];
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>;
};


export type ProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
};


export type ProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
};


export type ProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
};

export type ProtocolType =
  | 'EXCHANGE'
  | 'LENDING'
  | 'YIELD'
  | 'BRIDGE'
  | 'GENERIC';

export type Protocol_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_ends_with_nocase?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion?: InputMaybe<Scalars['String']>;
  schemaVersion_not?: InputMaybe<Scalars['String']>;
  schemaVersion_gt?: InputMaybe<Scalars['String']>;
  schemaVersion_lt?: InputMaybe<Scalars['String']>;
  schemaVersion_gte?: InputMaybe<Scalars['String']>;
  schemaVersion_lte?: InputMaybe<Scalars['String']>;
  schemaVersion_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  schemaVersion_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains?: InputMaybe<Scalars['String']>;
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion?: InputMaybe<Scalars['String']>;
  subgraphVersion_not?: InputMaybe<Scalars['String']>;
  subgraphVersion_gt?: InputMaybe<Scalars['String']>;
  subgraphVersion_lt?: InputMaybe<Scalars['String']>;
  subgraphVersion_gte?: InputMaybe<Scalars['String']>;
  subgraphVersion_lte?: InputMaybe<Scalars['String']>;
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  subgraphVersion_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion?: InputMaybe<Scalars['String']>;
  methodologyVersion_not?: InputMaybe<Scalars['String']>;
  methodologyVersion_gt?: InputMaybe<Scalars['String']>;
  methodologyVersion_lt?: InputMaybe<Scalars['String']>;
  methodologyVersion_gte?: InputMaybe<Scalars['String']>;
  methodologyVersion_lte?: InputMaybe<Scalars['String']>;
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  methodologyVersion_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Network>;
  network_not?: InputMaybe<Network>;
  network_in?: InputMaybe<Array<Network>>;
  network_not_in?: InputMaybe<Array<Network>>;
  type?: InputMaybe<ProtocolType>;
  type_not?: InputMaybe<ProtocolType>;
  type_in?: InputMaybe<Array<ProtocolType>>;
  type_not_in?: InputMaybe<Array<ProtocolType>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalPoolCount?: InputMaybe<Scalars['Int']>;
  totalPoolCount_not?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_filter>;
  hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
  financialMetrics_?: InputMaybe<FinancialsDailySnapshot_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Protocol_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Protocol_filter>>>;
};

export type Protocol_orderBy =
  | 'id'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'cumulativeUniqueUsers'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'totalPoolCount'
  | 'dailyUsageMetrics'
  | 'hourlyUsageMetrics'
  | 'financialMetrics';

export type Query = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  rewardToken?: Maybe<RewardToken>;
  rewardTokens: Array<RewardToken>;
  interestRate?: Maybe<InterestRate>;
  interestRates: Array<InterestRate>;
  lendingProtocol?: Maybe<LendingProtocol>;
  lendingProtocols: Array<LendingProtocol>;
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>;
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>;
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>;
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>;
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
  financialsDailySnapshots: Array<FinancialsDailySnapshot>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  marketDailySnapshot?: Maybe<MarketDailySnapshot>;
  marketDailySnapshots: Array<MarketDailySnapshot>;
  marketHourlySnapshot?: Maybe<MarketHourlySnapshot>;
  marketHourlySnapshots: Array<MarketHourlySnapshot>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  position?: Maybe<Position>;
  positions: Array<Position>;
  positionSnapshot?: Maybe<PositionSnapshot>;
  positionSnapshots: Array<PositionSnapshot>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  liquidate?: Maybe<Liquidate>;
  liquidates: Array<Liquidate>;
  activeAccount?: Maybe<ActiveAccount>;
  activeAccounts: Array<ActiveAccount>;
  positionCounter?: Maybe<PositionCounter>;
  positionCounters: Array<PositionCounter>;
  actorAccount?: Maybe<ActorAccount>;
  actorAccounts: Array<ActorAccount>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterestRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterestRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylendingProtocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerylendingProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LendingProtocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LendingProtocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfinancialsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymarketHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrepayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactiveAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActiveAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionCounterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypositionCountersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionCounter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionCounter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactorAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryactorAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActorAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActorAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Repay = {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  Account that repaid/burned tokens  */
  account: Account;
  /**  The market tokens are repaid/burned to  */
  market: Market;
  /**  The user position changed by this event  */
  position: Position;
  /**  Token repaid/burned  */
  asset: Token;
  /**  Amount of token repaid/burned in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token repaid/burned in USD  */
  amountUSD: Scalars['BigDecimal'];
};

export type Repay_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_?: InputMaybe<Market_filter>;
  position?: InputMaybe<Scalars['String']>;
  position_not?: InputMaybe<Scalars['String']>;
  position_gt?: InputMaybe<Scalars['String']>;
  position_lt?: InputMaybe<Scalars['String']>;
  position_gte?: InputMaybe<Scalars['String']>;
  position_lte?: InputMaybe<Scalars['String']>;
  position_in?: InputMaybe<Array<Scalars['String']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']>>;
  position_contains?: InputMaybe<Scalars['String']>;
  position_contains_nocase?: InputMaybe<Scalars['String']>;
  position_not_contains?: InputMaybe<Scalars['String']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']>;
  position_starts_with?: InputMaybe<Scalars['String']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_starts_with?: InputMaybe<Scalars['String']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_ends_with?: InputMaybe<Scalars['String']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_ends_with?: InputMaybe<Scalars['String']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_?: InputMaybe<Position_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Token_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Repay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Repay_filter>>>;
};

export type Repay_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'blockNumber'
  | 'timestamp'
  | 'account'
  | 'account__id'
  | 'account__positionCount'
  | 'account__openPositionCount'
  | 'account__closedPositionCount'
  | 'account__depositCount'
  | 'account__withdrawCount'
  | 'account__borrowCount'
  | 'account__repayCount'
  | 'account__liquidateCount'
  | 'account__liquidationCount'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canUseAsCollateral'
  | 'market__canBorrowFrom'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___reserveFactor'
  | 'market___liquidityIndex'
  | 'market___lastRewardsUpdated'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__side'
  | 'position__isCollateral'
  | 'position__balance'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'position__borrowCount'
  | 'position__repayCount'
  | 'position__liquidationCount'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset___type'
  | 'amount'
  | 'amountUSD';

export type RewardToken = {
  /**  { Reward token type }-{ Smart contract address of the reward token }  */
  id: Scalars['ID'];
  /**  Reference to the actual token  */
  token: Token;
  /**  The type of the reward token  */
  type: RewardTokenType;
  _distributionEnd?: Maybe<Scalars['BigInt']>;
};

export type RewardTokenType =
  /**  For reward tokens awarded to LPs/lenders  */
  | 'DEPOSIT'
  /**  For reward tokens awarded to borrowers  */
  | 'BORROW';

export type RewardToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  token?: InputMaybe<Scalars['String']>;
  token_not?: InputMaybe<Scalars['String']>;
  token_gt?: InputMaybe<Scalars['String']>;
  token_lt?: InputMaybe<Scalars['String']>;
  token_gte?: InputMaybe<Scalars['String']>;
  token_lte?: InputMaybe<Scalars['String']>;
  token_in?: InputMaybe<Array<Scalars['String']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']>>;
  token_contains?: InputMaybe<Scalars['String']>;
  token_contains_nocase?: InputMaybe<Scalars['String']>;
  token_not_contains?: InputMaybe<Scalars['String']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']>;
  token_starts_with?: InputMaybe<Scalars['String']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_starts_with?: InputMaybe<Scalars['String']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  token_ends_with?: InputMaybe<Scalars['String']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_not_ends_with?: InputMaybe<Scalars['String']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  token_?: InputMaybe<Token_filter>;
  type?: InputMaybe<RewardTokenType>;
  type_not?: InputMaybe<RewardTokenType>;
  type_in?: InputMaybe<Array<RewardTokenType>>;
  type_not_in?: InputMaybe<Array<RewardTokenType>>;
  _distributionEnd?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_not?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_gt?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_lt?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_gte?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_lte?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _distributionEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RewardToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RewardToken_filter>>>;
};

export type RewardToken_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__name'
  | 'token__symbol'
  | 'token__decimals'
  | 'token__lastPriceUSD'
  | 'token__lastPriceBlockNumber'
  | 'token___type'
  | 'type'
  | '_distributionEnd';

export type RiskType =
  /**  Global risk means each users position in a market is combined for one score to determine if they can be liquidated  */
  | 'GLOBAL'
  /**  Isolated risk means each users position in a market or CDP is isolated for risk of liquidation  */
  | 'ISOLATED';

export type Subscription = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  rewardToken?: Maybe<RewardToken>;
  rewardTokens: Array<RewardToken>;
  interestRate?: Maybe<InterestRate>;
  interestRates: Array<InterestRate>;
  lendingProtocol?: Maybe<LendingProtocol>;
  lendingProtocols: Array<LendingProtocol>;
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>;
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>;
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>;
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>;
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>;
  financialsDailySnapshots: Array<FinancialsDailySnapshot>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  marketDailySnapshot?: Maybe<MarketDailySnapshot>;
  marketDailySnapshots: Array<MarketDailySnapshot>;
  marketHourlySnapshot?: Maybe<MarketHourlySnapshot>;
  marketHourlySnapshots: Array<MarketHourlySnapshot>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  position?: Maybe<Position>;
  positions: Array<Position>;
  positionSnapshot?: Maybe<PositionSnapshot>;
  positionSnapshots: Array<PositionSnapshot>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  withdraw?: Maybe<Withdraw>;
  withdraws: Array<Withdraw>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  liquidate?: Maybe<Liquidate>;
  liquidates: Array<Liquidate>;
  activeAccount?: Maybe<ActiveAccount>;
  activeAccounts: Array<ActiveAccount>;
  positionCounter?: Maybe<PositionCounter>;
  positionCounters: Array<PositionCounter>;
  actorAccount?: Maybe<ActorAccount>;
  actorAccounts: Array<ActorAccount>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RewardToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RewardToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterestRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterestRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterestRate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterestRate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlendingProtocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionlendingProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LendingProtocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LendingProtocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfinancialsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FinancialsDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketDailySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmarketHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MarketHourlySnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionSnapshot_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdraw_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdraw_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Borrow_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Borrow_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrepayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Repay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Repay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Liquidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactiveAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActiveAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionCounterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpositionCountersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionCounter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionCounter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactorAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionactorAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ActorAccount_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ActorAccount_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Protocol_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  /**  Smart contract address of the token  */
  id: Scalars['ID'];
  /**  Name of the token, mirrored from the smart contract  */
  name: Scalars['String'];
  /**  Symbol of the token, mirrored from the smart contract  */
  symbol: Scalars['String'];
  /**  The number of decimal places this token uses, default to 18  */
  decimals: Scalars['Int'];
  /**  Optional field to track the price of a token, mostly for caching purposes  */
  lastPriceUSD?: Maybe<Scalars['BigDecimal']>;
  /**  Optional field to track the block number of the last token price  */
  lastPriceBlockNumber?: Maybe<Scalars['BigInt']>;
  /**  the market ID for underlying/asset token, aToken, vToken and sToken */
  _market?: Maybe<Market>;
  /**  type of token: aToken, inputToken, sToken, or vToken  */
  _type?: Maybe<Scalars['String']>;
};

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['Int']>;
  decimals_not?: InputMaybe<Scalars['Int']>;
  decimals_gt?: InputMaybe<Scalars['Int']>;
  decimals_lt?: InputMaybe<Scalars['Int']>;
  decimals_gte?: InputMaybe<Scalars['Int']>;
  decimals_lte?: InputMaybe<Scalars['Int']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>;
  lastPriceUSD?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  lastPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _market?: InputMaybe<Scalars['String']>;
  _market_not?: InputMaybe<Scalars['String']>;
  _market_gt?: InputMaybe<Scalars['String']>;
  _market_lt?: InputMaybe<Scalars['String']>;
  _market_gte?: InputMaybe<Scalars['String']>;
  _market_lte?: InputMaybe<Scalars['String']>;
  _market_in?: InputMaybe<Array<Scalars['String']>>;
  _market_not_in?: InputMaybe<Array<Scalars['String']>>;
  _market_contains?: InputMaybe<Scalars['String']>;
  _market_contains_nocase?: InputMaybe<Scalars['String']>;
  _market_not_contains?: InputMaybe<Scalars['String']>;
  _market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  _market_starts_with?: InputMaybe<Scalars['String']>;
  _market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  _market_not_starts_with?: InputMaybe<Scalars['String']>;
  _market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  _market_ends_with?: InputMaybe<Scalars['String']>;
  _market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  _market_not_ends_with?: InputMaybe<Scalars['String']>;
  _market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  _market_?: InputMaybe<Market_filter>;
  _type?: InputMaybe<Scalars['String']>;
  _type_not?: InputMaybe<Scalars['String']>;
  _type_gt?: InputMaybe<Scalars['String']>;
  _type_lt?: InputMaybe<Scalars['String']>;
  _type_gte?: InputMaybe<Scalars['String']>;
  _type_lte?: InputMaybe<Scalars['String']>;
  _type_in?: InputMaybe<Array<Scalars['String']>>;
  _type_not_in?: InputMaybe<Array<Scalars['String']>>;
  _type_contains?: InputMaybe<Scalars['String']>;
  _type_contains_nocase?: InputMaybe<Scalars['String']>;
  _type_not_contains?: InputMaybe<Scalars['String']>;
  _type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  _type_starts_with?: InputMaybe<Scalars['String']>;
  _type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  _type_not_starts_with?: InputMaybe<Scalars['String']>;
  _type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  _type_ends_with?: InputMaybe<Scalars['String']>;
  _type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  _type_not_ends_with?: InputMaybe<Scalars['String']>;
  _type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'decimals'
  | 'lastPriceUSD'
  | 'lastPriceBlockNumber'
  | '_market'
  | '_market__id'
  | '_market__name'
  | '_market__isActive'
  | '_market__canUseAsCollateral'
  | '_market__canBorrowFrom'
  | '_market__maximumLTV'
  | '_market__liquidationThreshold'
  | '_market__liquidationPenalty'
  | '_market__totalValueLockedUSD'
  | '_market__cumulativeSupplySideRevenueUSD'
  | '_market__cumulativeProtocolSideRevenueUSD'
  | '_market__cumulativeTotalRevenueUSD'
  | '_market__totalDepositBalanceUSD'
  | '_market__cumulativeDepositUSD'
  | '_market__totalBorrowBalanceUSD'
  | '_market__cumulativeBorrowUSD'
  | '_market__cumulativeLiquidateUSD'
  | '_market__inputTokenBalance'
  | '_market__inputTokenPriceUSD'
  | '_market__outputTokenSupply'
  | '_market__outputTokenPriceUSD'
  | '_market__exchangeRate'
  | '_market__createdTimestamp'
  | '_market__createdBlockNumber'
  | '_market__positionCount'
  | '_market__openPositionCount'
  | '_market__closedPositionCount'
  | '_market__lendingPositionCount'
  | '_market__borrowingPositionCount'
  | '_market___reserveFactor'
  | '_market___liquidityIndex'
  | '_market___lastRewardsUpdated'
  | '_type';

export type UsageMetricsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['ID'];
  /**  Protocol this snapshot is associated with  */
  protocol: LendingProtocol;
  /**  Number of unique daily active users  */
  dailyActiveUsers: Scalars['Int'];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Number of unique daily depositors  */
  dailyActiveDepositors: Scalars['Int'];
  /**  Number of cumulative depositors  */
  cumulativeUniqueDepositors: Scalars['Int'];
  /**  Number of unique daily borrowers  */
  dailyActiveBorrowers: Scalars['Int'];
  /**  Number of cumulative borrowers  */
  cumulativeUniqueBorrowers: Scalars['Int'];
  /**  Number of unique daily liquidators (accounts that performed liquidation)  */
  dailyActiveLiquidators: Scalars['Int'];
  /**  Number of cumulative liquidators (accounts that performed liquidation)  */
  cumulativeUniqueLiquidators: Scalars['Int'];
  /**  Number of unique daily liquidatees (accounts that got liquidated)  */
  dailyActiveLiquidatees: Scalars['Int'];
  /**  Number of cumulative liquidatees (accounts that got liquidated)  */
  cumulativeUniqueLiquidatees: Scalars['Int'];
  /**  Total number of transactions occurred in a day. Transactions include all entities that implement the Event interface.  */
  dailyTransactionCount: Scalars['Int'];
  /**  Total number of deposits in a day  */
  dailyDepositCount: Scalars['Int'];
  /**  Total number of withdrawals in a day  */
  dailyWithdrawCount: Scalars['Int'];
  /**  Total number of borrows/mints in a day  */
  dailyBorrowCount: Scalars['Int'];
  /**  Total number of repayments/burns in a day  */
  dailyRepayCount: Scalars['Int'];
  /**  Total number of liquidations in a day  */
  dailyLiquidateCount: Scalars['Int'];
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
};

export type UsageMetricsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<LendingProtocol_filter>;
  dailyActiveUsers?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_not?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveDepositors?: InputMaybe<Scalars['Int']>;
  dailyActiveDepositors_not?: InputMaybe<Scalars['Int']>;
  dailyActiveDepositors_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveDepositors_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveDepositors_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveDepositors_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveDepositors_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveDepositors_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueDepositors?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueDepositors_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueDepositors_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueDepositors_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueDepositors_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueDepositors_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueDepositors_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueDepositors_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveBorrowers?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowers_not?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowers_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowers_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowers_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowers_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowers_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveBorrowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueBorrowers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueBorrowers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueBorrowers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueBorrowers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueBorrowers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueBorrowers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueBorrowers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueBorrowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveLiquidators?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidators_not?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidators_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidators_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidators_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidators_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidators_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveLiquidators_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueLiquidators?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidators_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidators_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidators_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidators_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidators_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidators_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueLiquidators_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveLiquidatees?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidatees_not?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidatees_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidatees_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidatees_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidatees_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidatees_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveLiquidatees_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueLiquidatees?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidatees_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidatees_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidatees_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidatees_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidatees_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueLiquidatees_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueLiquidatees_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyTransactionCount?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_not?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_gt?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_lt?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_gte?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_lte?: InputMaybe<Scalars['Int']>;
  dailyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyDepositCount?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_not?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_gt?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_lt?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_gte?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_lte?: InputMaybe<Scalars['Int']>;
  dailyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyWithdrawCount?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_not?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
  dailyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyBorrowCount?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_not?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_gt?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_lt?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_gte?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_lte?: InputMaybe<Scalars['Int']>;
  dailyBorrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyBorrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyRepayCount?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_not?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_gt?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_lt?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_gte?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_lte?: InputMaybe<Scalars['Int']>;
  dailyRepayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyRepayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyLiquidateCount?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_not?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_gt?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_lt?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_gte?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_lte?: InputMaybe<Scalars['Int']>;
  dailyLiquidateCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyLiquidateCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPoolCount?: InputMaybe<Scalars['Int']>;
  totalPoolCount_not?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UsageMetricsDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UsageMetricsDailySnapshot_filter>>>;
};

export type UsageMetricsDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__lendingType'
  | 'protocol__riskType'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueDepositors'
  | 'protocol__cumulativeUniqueBorrowers'
  | 'protocol__cumulativeUniqueLiquidators'
  | 'protocol__cumulativeUniqueLiquidatees'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__totalDepositBalanceUSD'
  | 'protocol__cumulativeDepositUSD'
  | 'protocol__totalBorrowBalanceUSD'
  | 'protocol__cumulativeBorrowUSD'
  | 'protocol__cumulativeLiquidateUSD'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol___priceOracle'
  | 'dailyActiveUsers'
  | 'cumulativeUniqueUsers'
  | 'dailyActiveDepositors'
  | 'cumulativeUniqueDepositors'
  | 'dailyActiveBorrowers'
  | 'cumulativeUniqueBorrowers'
  | 'dailyActiveLiquidators'
  | 'cumulativeUniqueLiquidators'
  | 'dailyActiveLiquidatees'
  | 'cumulativeUniqueLiquidatees'
  | 'dailyTransactionCount'
  | 'dailyDepositCount'
  | 'dailyWithdrawCount'
  | 'dailyBorrowCount'
  | 'dailyRepayCount'
  | 'dailyLiquidateCount'
  | 'totalPoolCount'
  | 'blockNumber'
  | 'timestamp';

export type UsageMetricsHourlySnapshot = {
  /**  { # of hours since Unix epoch time }  */
  id: Scalars['ID'];
  /**  Protocol this snapshot is associated with  */
  protocol: LendingProtocol;
  /**  Number of unique hourly active users  */
  hourlyActiveUsers: Scalars['Int'];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Total number of transactions occurred in an hour. Transactions include all entities that implement the Event interface.  */
  hourlyTransactionCount: Scalars['Int'];
  /**  Total number of deposits in an hour  */
  hourlyDepositCount: Scalars['Int'];
  /**  Total number of withdrawals in an hour  */
  hourlyWithdrawCount: Scalars['Int'];
  /**  Total number of borrows/mints in an hour  */
  hourlyBorrowCount: Scalars['Int'];
  /**  Total number of repayments/burns in an hour  */
  hourlyRepayCount: Scalars['Int'];
  /**  Total number of liquidations in an hour  */
  hourlyLiquidateCount: Scalars['Int'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
};

export type UsageMetricsHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  protocol?: InputMaybe<Scalars['String']>;
  protocol_not?: InputMaybe<Scalars['String']>;
  protocol_gt?: InputMaybe<Scalars['String']>;
  protocol_lt?: InputMaybe<Scalars['String']>;
  protocol_gte?: InputMaybe<Scalars['String']>;
  protocol_lte?: InputMaybe<Scalars['String']>;
  protocol_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocol_contains?: InputMaybe<Scalars['String']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_contains?: InputMaybe<Scalars['String']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocol_starts_with?: InputMaybe<Scalars['String']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_ends_with?: InputMaybe<Scalars['String']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocol_?: InputMaybe<LendingProtocol_filter>;
  hourlyActiveUsers?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_not?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_gt?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_lt?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_gte?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_lte?: InputMaybe<Scalars['Int']>;
  hourlyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyTransactionCount?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_not?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyDepositCount?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_not?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyWithdrawCount?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_not?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyBorrowCount?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_not?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyBorrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyBorrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyRepayCount?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_not?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyRepayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyRepayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyLiquidateCount?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_not?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_gt?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_lt?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_gte?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_lte?: InputMaybe<Scalars['Int']>;
  hourlyLiquidateCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hourlyLiquidateCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UsageMetricsHourlySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UsageMetricsHourlySnapshot_filter>>>;
};

export type UsageMetricsHourlySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__lendingType'
  | 'protocol__riskType'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueDepositors'
  | 'protocol__cumulativeUniqueBorrowers'
  | 'protocol__cumulativeUniqueLiquidators'
  | 'protocol__cumulativeUniqueLiquidatees'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__totalDepositBalanceUSD'
  | 'protocol__cumulativeDepositUSD'
  | 'protocol__totalBorrowBalanceUSD'
  | 'protocol__cumulativeBorrowUSD'
  | 'protocol__cumulativeLiquidateUSD'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol___priceOracle'
  | 'hourlyActiveUsers'
  | 'cumulativeUniqueUsers'
  | 'hourlyTransactionCount'
  | 'hourlyDepositCount'
  | 'hourlyWithdrawCount'
  | 'hourlyBorrowCount'
  | 'hourlyRepayCount'
  | 'hourlyLiquidateCount'
  | 'blockNumber'
  | 'timestamp';

export type Withdraw = {
  /**  { Transaction hash }-{ Log index } */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  Account that withdrew tokens  */
  account: Account;
  /**  The market tokens are withdrew from  */
  market: Market;
  /**  The user position changed by this event  */
  position: Position;
  /**  Token withdrawn  */
  asset: Token;
  /**  Amount of token withdrawn in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token withdrawn in USD  */
  amountUSD: Scalars['BigDecimal'];
};

export type Withdraw_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['String']>;
  hash_not?: InputMaybe<Scalars['String']>;
  hash_gt?: InputMaybe<Scalars['String']>;
  hash_lt?: InputMaybe<Scalars['String']>;
  hash_gte?: InputMaybe<Scalars['String']>;
  hash_lte?: InputMaybe<Scalars['String']>;
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  hash_contains?: InputMaybe<Scalars['String']>;
  hash_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_not_contains?: InputMaybe<Scalars['String']>;
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>;
  hash_starts_with?: InputMaybe<Scalars['String']>;
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  hash_ends_with?: InputMaybe<Scalars['String']>;
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>;
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  logIndex?: InputMaybe<Scalars['Int']>;
  logIndex_not?: InputMaybe<Scalars['Int']>;
  logIndex_gt?: InputMaybe<Scalars['Int']>;
  logIndex_lt?: InputMaybe<Scalars['Int']>;
  logIndex_gte?: InputMaybe<Scalars['Int']>;
  logIndex_lte?: InputMaybe<Scalars['Int']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_filter>;
  market?: InputMaybe<Scalars['String']>;
  market_not?: InputMaybe<Scalars['String']>;
  market_gt?: InputMaybe<Scalars['String']>;
  market_lt?: InputMaybe<Scalars['String']>;
  market_gte?: InputMaybe<Scalars['String']>;
  market_lte?: InputMaybe<Scalars['String']>;
  market_in?: InputMaybe<Array<Scalars['String']>>;
  market_not_in?: InputMaybe<Array<Scalars['String']>>;
  market_contains?: InputMaybe<Scalars['String']>;
  market_contains_nocase?: InputMaybe<Scalars['String']>;
  market_not_contains?: InputMaybe<Scalars['String']>;
  market_not_contains_nocase?: InputMaybe<Scalars['String']>;
  market_starts_with?: InputMaybe<Scalars['String']>;
  market_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_starts_with?: InputMaybe<Scalars['String']>;
  market_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  market_ends_with?: InputMaybe<Scalars['String']>;
  market_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_not_ends_with?: InputMaybe<Scalars['String']>;
  market_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  market_?: InputMaybe<Market_filter>;
  position?: InputMaybe<Scalars['String']>;
  position_not?: InputMaybe<Scalars['String']>;
  position_gt?: InputMaybe<Scalars['String']>;
  position_lt?: InputMaybe<Scalars['String']>;
  position_gte?: InputMaybe<Scalars['String']>;
  position_lte?: InputMaybe<Scalars['String']>;
  position_in?: InputMaybe<Array<Scalars['String']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']>>;
  position_contains?: InputMaybe<Scalars['String']>;
  position_contains_nocase?: InputMaybe<Scalars['String']>;
  position_not_contains?: InputMaybe<Scalars['String']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']>;
  position_starts_with?: InputMaybe<Scalars['String']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_starts_with?: InputMaybe<Scalars['String']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  position_ends_with?: InputMaybe<Scalars['String']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_not_ends_with?: InputMaybe<Scalars['String']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  position_?: InputMaybe<Position_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Token_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Withdraw_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Withdraw_filter>>>;
};

export type Withdraw_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'blockNumber'
  | 'timestamp'
  | 'account'
  | 'account__id'
  | 'account__positionCount'
  | 'account__openPositionCount'
  | 'account__closedPositionCount'
  | 'account__depositCount'
  | 'account__withdrawCount'
  | 'account__borrowCount'
  | 'account__repayCount'
  | 'account__liquidateCount'
  | 'account__liquidationCount'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canUseAsCollateral'
  | 'market__canBorrowFrom'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___reserveFactor'
  | 'market___liquidityIndex'
  | 'market___lastRewardsUpdated'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__side'
  | 'position__isCollateral'
  | 'position__balance'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'position__borrowCount'
  | 'position__repayCount'
  | 'position__liquidationCount'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset___type'
  | 'amount'
  | 'amountUSD';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  rewardToken: InContextSdkMethod<Query['rewardToken'], QueryrewardTokenArgs, MeshContext>,
  /** null **/
  rewardTokens: InContextSdkMethod<Query['rewardTokens'], QueryrewardTokensArgs, MeshContext>,
  /** null **/
  interestRate: InContextSdkMethod<Query['interestRate'], QueryinterestRateArgs, MeshContext>,
  /** null **/
  interestRates: InContextSdkMethod<Query['interestRates'], QueryinterestRatesArgs, MeshContext>,
  /** null **/
  lendingProtocol: InContextSdkMethod<Query['lendingProtocol'], QuerylendingProtocolArgs, MeshContext>,
  /** null **/
  lendingProtocols: InContextSdkMethod<Query['lendingProtocols'], QuerylendingProtocolsArgs, MeshContext>,
  /** null **/
  usageMetricsDailySnapshot: InContextSdkMethod<Query['usageMetricsDailySnapshot'], QueryusageMetricsDailySnapshotArgs, MeshContext>,
  /** null **/
  usageMetricsDailySnapshots: InContextSdkMethod<Query['usageMetricsDailySnapshots'], QueryusageMetricsDailySnapshotsArgs, MeshContext>,
  /** null **/
  usageMetricsHourlySnapshot: InContextSdkMethod<Query['usageMetricsHourlySnapshot'], QueryusageMetricsHourlySnapshotArgs, MeshContext>,
  /** null **/
  usageMetricsHourlySnapshots: InContextSdkMethod<Query['usageMetricsHourlySnapshots'], QueryusageMetricsHourlySnapshotsArgs, MeshContext>,
  /** null **/
  financialsDailySnapshot: InContextSdkMethod<Query['financialsDailySnapshot'], QueryfinancialsDailySnapshotArgs, MeshContext>,
  /** null **/
  financialsDailySnapshots: InContextSdkMethod<Query['financialsDailySnapshots'], QueryfinancialsDailySnapshotsArgs, MeshContext>,
  /** null **/
  market: InContextSdkMethod<Query['market'], QuerymarketArgs, MeshContext>,
  /** null **/
  markets: InContextSdkMethod<Query['markets'], QuerymarketsArgs, MeshContext>,
  /** null **/
  marketDailySnapshot: InContextSdkMethod<Query['marketDailySnapshot'], QuerymarketDailySnapshotArgs, MeshContext>,
  /** null **/
  marketDailySnapshots: InContextSdkMethod<Query['marketDailySnapshots'], QuerymarketDailySnapshotsArgs, MeshContext>,
  /** null **/
  marketHourlySnapshot: InContextSdkMethod<Query['marketHourlySnapshot'], QuerymarketHourlySnapshotArgs, MeshContext>,
  /** null **/
  marketHourlySnapshots: InContextSdkMethod<Query['marketHourlySnapshots'], QuerymarketHourlySnapshotsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Query['account'], QueryaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Query['accounts'], QueryaccountsArgs, MeshContext>,
  /** null **/
  position: InContextSdkMethod<Query['position'], QuerypositionArgs, MeshContext>,
  /** null **/
  positions: InContextSdkMethod<Query['positions'], QuerypositionsArgs, MeshContext>,
  /** null **/
  positionSnapshot: InContextSdkMethod<Query['positionSnapshot'], QuerypositionSnapshotArgs, MeshContext>,
  /** null **/
  positionSnapshots: InContextSdkMethod<Query['positionSnapshots'], QuerypositionSnapshotsArgs, MeshContext>,
  /** null **/
  deposit: InContextSdkMethod<Query['deposit'], QuerydepositArgs, MeshContext>,
  /** null **/
  deposits: InContextSdkMethod<Query['deposits'], QuerydepositsArgs, MeshContext>,
  /** null **/
  withdraw: InContextSdkMethod<Query['withdraw'], QuerywithdrawArgs, MeshContext>,
  /** null **/
  withdraws: InContextSdkMethod<Query['withdraws'], QuerywithdrawsArgs, MeshContext>,
  /** null **/
  borrow: InContextSdkMethod<Query['borrow'], QueryborrowArgs, MeshContext>,
  /** null **/
  borrows: InContextSdkMethod<Query['borrows'], QueryborrowsArgs, MeshContext>,
  /** null **/
  repay: InContextSdkMethod<Query['repay'], QueryrepayArgs, MeshContext>,
  /** null **/
  repays: InContextSdkMethod<Query['repays'], QueryrepaysArgs, MeshContext>,
  /** null **/
  liquidate: InContextSdkMethod<Query['liquidate'], QueryliquidateArgs, MeshContext>,
  /** null **/
  liquidates: InContextSdkMethod<Query['liquidates'], QueryliquidatesArgs, MeshContext>,
  /** null **/
  activeAccount: InContextSdkMethod<Query['activeAccount'], QueryactiveAccountArgs, MeshContext>,
  /** null **/
  activeAccounts: InContextSdkMethod<Query['activeAccounts'], QueryactiveAccountsArgs, MeshContext>,
  /** null **/
  positionCounter: InContextSdkMethod<Query['positionCounter'], QuerypositionCounterArgs, MeshContext>,
  /** null **/
  positionCounters: InContextSdkMethod<Query['positionCounters'], QuerypositionCountersArgs, MeshContext>,
  /** null **/
  actorAccount: InContextSdkMethod<Query['actorAccount'], QueryactorAccountArgs, MeshContext>,
  /** null **/
  actorAccounts: InContextSdkMethod<Query['actorAccounts'], QueryactorAccountsArgs, MeshContext>,
  /** null **/
  protocol: InContextSdkMethod<Query['protocol'], QueryprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<Query['protocols'], QueryprotocolsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  rewardToken: InContextSdkMethod<Subscription['rewardToken'], SubscriptionrewardTokenArgs, MeshContext>,
  /** null **/
  rewardTokens: InContextSdkMethod<Subscription['rewardTokens'], SubscriptionrewardTokensArgs, MeshContext>,
  /** null **/
  interestRate: InContextSdkMethod<Subscription['interestRate'], SubscriptioninterestRateArgs, MeshContext>,
  /** null **/
  interestRates: InContextSdkMethod<Subscription['interestRates'], SubscriptioninterestRatesArgs, MeshContext>,
  /** null **/
  lendingProtocol: InContextSdkMethod<Subscription['lendingProtocol'], SubscriptionlendingProtocolArgs, MeshContext>,
  /** null **/
  lendingProtocols: InContextSdkMethod<Subscription['lendingProtocols'], SubscriptionlendingProtocolsArgs, MeshContext>,
  /** null **/
  usageMetricsDailySnapshot: InContextSdkMethod<Subscription['usageMetricsDailySnapshot'], SubscriptionusageMetricsDailySnapshotArgs, MeshContext>,
  /** null **/
  usageMetricsDailySnapshots: InContextSdkMethod<Subscription['usageMetricsDailySnapshots'], SubscriptionusageMetricsDailySnapshotsArgs, MeshContext>,
  /** null **/
  usageMetricsHourlySnapshot: InContextSdkMethod<Subscription['usageMetricsHourlySnapshot'], SubscriptionusageMetricsHourlySnapshotArgs, MeshContext>,
  /** null **/
  usageMetricsHourlySnapshots: InContextSdkMethod<Subscription['usageMetricsHourlySnapshots'], SubscriptionusageMetricsHourlySnapshotsArgs, MeshContext>,
  /** null **/
  financialsDailySnapshot: InContextSdkMethod<Subscription['financialsDailySnapshot'], SubscriptionfinancialsDailySnapshotArgs, MeshContext>,
  /** null **/
  financialsDailySnapshots: InContextSdkMethod<Subscription['financialsDailySnapshots'], SubscriptionfinancialsDailySnapshotsArgs, MeshContext>,
  /** null **/
  market: InContextSdkMethod<Subscription['market'], SubscriptionmarketArgs, MeshContext>,
  /** null **/
  markets: InContextSdkMethod<Subscription['markets'], SubscriptionmarketsArgs, MeshContext>,
  /** null **/
  marketDailySnapshot: InContextSdkMethod<Subscription['marketDailySnapshot'], SubscriptionmarketDailySnapshotArgs, MeshContext>,
  /** null **/
  marketDailySnapshots: InContextSdkMethod<Subscription['marketDailySnapshots'], SubscriptionmarketDailySnapshotsArgs, MeshContext>,
  /** null **/
  marketHourlySnapshot: InContextSdkMethod<Subscription['marketHourlySnapshot'], SubscriptionmarketHourlySnapshotArgs, MeshContext>,
  /** null **/
  marketHourlySnapshots: InContextSdkMethod<Subscription['marketHourlySnapshots'], SubscriptionmarketHourlySnapshotsArgs, MeshContext>,
  /** null **/
  account: InContextSdkMethod<Subscription['account'], SubscriptionaccountArgs, MeshContext>,
  /** null **/
  accounts: InContextSdkMethod<Subscription['accounts'], SubscriptionaccountsArgs, MeshContext>,
  /** null **/
  position: InContextSdkMethod<Subscription['position'], SubscriptionpositionArgs, MeshContext>,
  /** null **/
  positions: InContextSdkMethod<Subscription['positions'], SubscriptionpositionsArgs, MeshContext>,
  /** null **/
  positionSnapshot: InContextSdkMethod<Subscription['positionSnapshot'], SubscriptionpositionSnapshotArgs, MeshContext>,
  /** null **/
  positionSnapshots: InContextSdkMethod<Subscription['positionSnapshots'], SubscriptionpositionSnapshotsArgs, MeshContext>,
  /** null **/
  deposit: InContextSdkMethod<Subscription['deposit'], SubscriptiondepositArgs, MeshContext>,
  /** null **/
  deposits: InContextSdkMethod<Subscription['deposits'], SubscriptiondepositsArgs, MeshContext>,
  /** null **/
  withdraw: InContextSdkMethod<Subscription['withdraw'], SubscriptionwithdrawArgs, MeshContext>,
  /** null **/
  withdraws: InContextSdkMethod<Subscription['withdraws'], SubscriptionwithdrawsArgs, MeshContext>,
  /** null **/
  borrow: InContextSdkMethod<Subscription['borrow'], SubscriptionborrowArgs, MeshContext>,
  /** null **/
  borrows: InContextSdkMethod<Subscription['borrows'], SubscriptionborrowsArgs, MeshContext>,
  /** null **/
  repay: InContextSdkMethod<Subscription['repay'], SubscriptionrepayArgs, MeshContext>,
  /** null **/
  repays: InContextSdkMethod<Subscription['repays'], SubscriptionrepaysArgs, MeshContext>,
  /** null **/
  liquidate: InContextSdkMethod<Subscription['liquidate'], SubscriptionliquidateArgs, MeshContext>,
  /** null **/
  liquidates: InContextSdkMethod<Subscription['liquidates'], SubscriptionliquidatesArgs, MeshContext>,
  /** null **/
  activeAccount: InContextSdkMethod<Subscription['activeAccount'], SubscriptionactiveAccountArgs, MeshContext>,
  /** null **/
  activeAccounts: InContextSdkMethod<Subscription['activeAccounts'], SubscriptionactiveAccountsArgs, MeshContext>,
  /** null **/
  positionCounter: InContextSdkMethod<Subscription['positionCounter'], SubscriptionpositionCounterArgs, MeshContext>,
  /** null **/
  positionCounters: InContextSdkMethod<Subscription['positionCounters'], SubscriptionpositionCountersArgs, MeshContext>,
  /** null **/
  actorAccount: InContextSdkMethod<Subscription['actorAccount'], SubscriptionactorAccountArgs, MeshContext>,
  /** null **/
  actorAccounts: InContextSdkMethod<Subscription['actorAccounts'], SubscriptionactorAccountsArgs, MeshContext>,
  /** null **/
  protocol: InContextSdkMethod<Subscription['protocol'], SubscriptionprotocolArgs, MeshContext>,
  /** null **/
  protocols: InContextSdkMethod<Subscription['protocols'], SubscriptionprotocolsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["spark"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
