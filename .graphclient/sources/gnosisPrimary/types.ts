// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace GnosisPrimaryTypes {
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
  gnosisPrimaryBigDecimal: any;
  BigInt: any;
  gnosisPrimaryBytes: any;
  gnosisPrimaryInt8: any;
};

export type gnosisPrimaryAccount = {
  /**  { Account address }  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Number of positions this account has  */
  positionCount: Scalars['Int'];
  /**  All positions that belong to this account  */
  positions: Array<gnosisPrimaryPosition>;
  /**  Number of open positions this account has  */
  openPositionCount: Scalars['Int'];
  /**  Number of closed positions this account has  */
  closedPositionCount: Scalars['Int'];
  /**  Number of deposits this account made  */
  depositCount: Scalars['Int'];
  /**  All deposit events of this account  */
  deposits: Array<gnosisPrimaryDeposit>;
  /**  Number of withdrawals this account made  */
  withdrawCount: Scalars['Int'];
  /**  All withdraw events of this account  */
  withdraws: Array<gnosisPrimaryWithdraw>;
  /**  Number of borrows this account made  */
  borrowCount: Scalars['Int'];
  /**  All borrow events of this account  */
  borrows: Array<gnosisPrimaryBorrow>;
  /**  Number of repays this account made  */
  repayCount: Scalars['Int'];
  /**  All repay events of this account  */
  repays: Array<gnosisPrimaryRepay>;
  /**  Number of times this account liquidated a position  */
  liquidateCount: Scalars['Int'];
  /**  All liquidation events where this account was the liquidator  */
  liquidates: Array<gnosisPrimaryLiquidate>;
  /**  Number of times this account has been liquidated  */
  liquidationCount: Scalars['Int'];
  /**  All liquidation events where this account got liquidated  */
  liquidations: Array<gnosisPrimaryLiquidate>;
  /**  Number of times this account has transferred  */
  transferredCount: Scalars['Int'];
  /**  All transfer events where this account was the sender  */
  transfers: Array<gnosisPrimaryTransfer>;
  /**  Number of times this account has received a transfer  */
  receivedCount: Scalars['Int'];
  /**  All transfer events where this account was the receiver  */
  receives: Array<gnosisPrimaryTransfer>;
  /**  Number of times this account has executed a flashloan  */
  flashloanCount: Scalars['Int'];
  /**  All flashloan events where this account executed it  */
  flashloans: Array<gnosisPrimaryFlashloan>;
  /**  The amount of rewards claimed by this account in USD (use the USD value at the time of claiming)  */
  rewardsClaimedUSD?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  Markets that the account is using as collateral  */
  _enabledCollaterals?: Maybe<Array<gnosisPrimaryMarket>>;
  /**  efficient mode flag  */
  _eMode?: Maybe<Scalars['Boolean']>;
};


export type gnosisPrimaryAccountpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryPosition_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryPosition_filter>;
};


export type gnosisPrimaryAccountdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryDeposit_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryDeposit_filter>;
};


export type gnosisPrimaryAccountwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryWithdraw_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryWithdraw_filter>;
};


export type gnosisPrimaryAccountborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryBorrow_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryBorrow_filter>;
};


export type gnosisPrimaryAccountrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryRepay_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryRepay_filter>;
};


export type gnosisPrimaryAccountliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryLiquidate_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryLiquidate_filter>;
};


export type gnosisPrimaryAccountliquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryLiquidate_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryLiquidate_filter>;
};


export type gnosisPrimaryAccounttransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryTransfer_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryTransfer_filter>;
};


export type gnosisPrimaryAccountreceivesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryTransfer_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryTransfer_filter>;
};


export type gnosisPrimaryAccountflashloansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryFlashloan_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryFlashloan_filter>;
};


export type gnosisPrimaryAccount_enabledCollateralsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryMarket_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryMarket_filter>;
};

export type gnosisPrimaryAccount_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  positionCount?: InputMaybe<Scalars['Int']>;
  positionCount_not?: InputMaybe<Scalars['Int']>;
  positionCount_gt?: InputMaybe<Scalars['Int']>;
  positionCount_lt?: InputMaybe<Scalars['Int']>;
  positionCount_gte?: InputMaybe<Scalars['Int']>;
  positionCount_lte?: InputMaybe<Scalars['Int']>;
  positionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  positionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  positions_?: InputMaybe<gnosisPrimaryPosition_filter>;
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
  deposits_?: InputMaybe<gnosisPrimaryDeposit_filter>;
  withdrawCount?: InputMaybe<Scalars['Int']>;
  withdrawCount_not?: InputMaybe<Scalars['Int']>;
  withdrawCount_gt?: InputMaybe<Scalars['Int']>;
  withdrawCount_lt?: InputMaybe<Scalars['Int']>;
  withdrawCount_gte?: InputMaybe<Scalars['Int']>;
  withdrawCount_lte?: InputMaybe<Scalars['Int']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdraws_?: InputMaybe<gnosisPrimaryWithdraw_filter>;
  borrowCount?: InputMaybe<Scalars['Int']>;
  borrowCount_not?: InputMaybe<Scalars['Int']>;
  borrowCount_gt?: InputMaybe<Scalars['Int']>;
  borrowCount_lt?: InputMaybe<Scalars['Int']>;
  borrowCount_gte?: InputMaybe<Scalars['Int']>;
  borrowCount_lte?: InputMaybe<Scalars['Int']>;
  borrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  borrows_?: InputMaybe<gnosisPrimaryBorrow_filter>;
  repayCount?: InputMaybe<Scalars['Int']>;
  repayCount_not?: InputMaybe<Scalars['Int']>;
  repayCount_gt?: InputMaybe<Scalars['Int']>;
  repayCount_lt?: InputMaybe<Scalars['Int']>;
  repayCount_gte?: InputMaybe<Scalars['Int']>;
  repayCount_lte?: InputMaybe<Scalars['Int']>;
  repayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  repayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  repays_?: InputMaybe<gnosisPrimaryRepay_filter>;
  liquidateCount?: InputMaybe<Scalars['Int']>;
  liquidateCount_not?: InputMaybe<Scalars['Int']>;
  liquidateCount_gt?: InputMaybe<Scalars['Int']>;
  liquidateCount_lt?: InputMaybe<Scalars['Int']>;
  liquidateCount_gte?: InputMaybe<Scalars['Int']>;
  liquidateCount_lte?: InputMaybe<Scalars['Int']>;
  liquidateCount_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidateCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidates_?: InputMaybe<gnosisPrimaryLiquidate_filter>;
  liquidationCount?: InputMaybe<Scalars['Int']>;
  liquidationCount_not?: InputMaybe<Scalars['Int']>;
  liquidationCount_gt?: InputMaybe<Scalars['Int']>;
  liquidationCount_lt?: InputMaybe<Scalars['Int']>;
  liquidationCount_gte?: InputMaybe<Scalars['Int']>;
  liquidationCount_lte?: InputMaybe<Scalars['Int']>;
  liquidationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidations_?: InputMaybe<gnosisPrimaryLiquidate_filter>;
  transferredCount?: InputMaybe<Scalars['Int']>;
  transferredCount_not?: InputMaybe<Scalars['Int']>;
  transferredCount_gt?: InputMaybe<Scalars['Int']>;
  transferredCount_lt?: InputMaybe<Scalars['Int']>;
  transferredCount_gte?: InputMaybe<Scalars['Int']>;
  transferredCount_lte?: InputMaybe<Scalars['Int']>;
  transferredCount_in?: InputMaybe<Array<Scalars['Int']>>;
  transferredCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transfers_?: InputMaybe<gnosisPrimaryTransfer_filter>;
  receivedCount?: InputMaybe<Scalars['Int']>;
  receivedCount_not?: InputMaybe<Scalars['Int']>;
  receivedCount_gt?: InputMaybe<Scalars['Int']>;
  receivedCount_lt?: InputMaybe<Scalars['Int']>;
  receivedCount_gte?: InputMaybe<Scalars['Int']>;
  receivedCount_lte?: InputMaybe<Scalars['Int']>;
  receivedCount_in?: InputMaybe<Array<Scalars['Int']>>;
  receivedCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  receives_?: InputMaybe<gnosisPrimaryTransfer_filter>;
  flashloanCount?: InputMaybe<Scalars['Int']>;
  flashloanCount_not?: InputMaybe<Scalars['Int']>;
  flashloanCount_gt?: InputMaybe<Scalars['Int']>;
  flashloanCount_lt?: InputMaybe<Scalars['Int']>;
  flashloanCount_gte?: InputMaybe<Scalars['Int']>;
  flashloanCount_lte?: InputMaybe<Scalars['Int']>;
  flashloanCount_in?: InputMaybe<Array<Scalars['Int']>>;
  flashloanCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  flashloans_?: InputMaybe<gnosisPrimaryFlashloan_filter>;
  rewardsClaimedUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rewardsClaimedUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rewardsClaimedUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rewardsClaimedUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rewardsClaimedUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rewardsClaimedUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rewardsClaimedUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardsClaimedUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  _enabledCollaterals?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_not?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_contains?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_not_contains?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_?: InputMaybe<gnosisPrimaryMarket_filter>;
  _eMode?: InputMaybe<Scalars['Boolean']>;
  _eMode_not?: InputMaybe<Scalars['Boolean']>;
  _eMode_in?: InputMaybe<Array<Scalars['Boolean']>>;
  _eMode_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryAccount_filter>>>;
};

export type gnosisPrimaryAccount_orderBy =
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
  | 'transferredCount'
  | 'transfers'
  | 'receivedCount'
  | 'receives'
  | 'flashloanCount'
  | 'flashloans'
  | 'rewardsClaimedUSD'
  | '_enabledCollaterals'
  | '_eMode';

export type gnosisPrimaryBlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type gnosisPrimaryBlock_height = {
  hash?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type gnosisPrimaryBorrow = gnosisPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['gnosisPrimaryBytes'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Price of gas in this transaction  */
  gasPrice?: Maybe<Scalars['BigInt']>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']>;
  /**  Gas limit of this transaction. e.g. the amount of gas the sender will pay  */
  gasLimit?: Maybe<Scalars['BigInt']>;
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  Account that controls incurs debt in this transaction  */
  account: gnosisPrimaryAccount;
  /**  Account that receives the funds from the new debt  */
  accountActor?: Maybe<gnosisPrimaryAccount>;
  /**  The market tokens are borrowed/minted from  */
  market: gnosisPrimaryMarket;
  /**  The user position changed by this event  */
  position: gnosisPrimaryPosition;
  /**  Token borrowed  */
  asset: gnosisPrimaryToken;
  /**  Amount of token borrowed in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token borrowed in USD  */
  amountUSD: Scalars['gnosisPrimaryBigDecimal'];
};

export type gnosisPrimaryBorrow_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  account_?: InputMaybe<gnosisPrimaryAccount_filter>;
  accountActor?: InputMaybe<Scalars['String']>;
  accountActor_not?: InputMaybe<Scalars['String']>;
  accountActor_gt?: InputMaybe<Scalars['String']>;
  accountActor_lt?: InputMaybe<Scalars['String']>;
  accountActor_gte?: InputMaybe<Scalars['String']>;
  accountActor_lte?: InputMaybe<Scalars['String']>;
  accountActor_in?: InputMaybe<Array<Scalars['String']>>;
  accountActor_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountActor_contains?: InputMaybe<Scalars['String']>;
  accountActor_contains_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_contains?: InputMaybe<Scalars['String']>;
  accountActor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  accountActor_starts_with?: InputMaybe<Scalars['String']>;
  accountActor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_starts_with?: InputMaybe<Scalars['String']>;
  accountActor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_ends_with?: InputMaybe<Scalars['String']>;
  accountActor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_ends_with?: InputMaybe<Scalars['String']>;
  accountActor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_?: InputMaybe<gnosisPrimaryAccount_filter>;
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
  market_?: InputMaybe<gnosisPrimaryMarket_filter>;
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
  position_?: InputMaybe<gnosisPrimaryPosition_filter>;
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
  asset_?: InputMaybe<gnosisPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryBorrow_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryBorrow_filter>>>;
};

export type gnosisPrimaryBorrow_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'gasPrice'
  | 'gasUsed'
  | 'gasLimit'
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
  | 'account__transferredCount'
  | 'account__receivedCount'
  | 'account__flashloanCount'
  | 'account__rewardsClaimedUSD'
  | 'account___eMode'
  | 'accountActor'
  | 'accountActor__id'
  | 'accountActor__positionCount'
  | 'accountActor__openPositionCount'
  | 'accountActor__closedPositionCount'
  | 'accountActor__depositCount'
  | 'accountActor__withdrawCount'
  | 'accountActor__borrowCount'
  | 'accountActor__repayCount'
  | 'accountActor__liquidateCount'
  | 'accountActor__liquidationCount'
  | 'accountActor__transferredCount'
  | 'accountActor__receivedCount'
  | 'accountActor__flashloanCount'
  | 'accountActor__rewardsClaimedUSD'
  | 'accountActor___eMode'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canBorrowFrom'
  | 'market__canUseAsCollateral'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__canIsolate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__relation'
  | 'market__stakedOutputTokenAmount'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__reserves'
  | 'market__reserveFactor'
  | 'market__variableBorrowedTokenBalance'
  | 'market__stableBorrowedTokenBalance'
  | 'market__indexLastUpdatedTimestamp'
  | 'market__supplyIndex'
  | 'market__supplyCap'
  | 'market__borrowIndex'
  | 'market__borrowCap'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__cumulativeTransferUSD'
  | 'market__cumulativeFlashloanUSD'
  | 'market__transactionCount'
  | 'market__depositCount'
  | 'market__withdrawCount'
  | 'market__borrowCount'
  | 'market__repayCount'
  | 'market__liquidationCount'
  | 'market__transferCount'
  | 'market__flashloanCount'
  | 'market__cumulativeUniqueUsers'
  | 'market__cumulativeUniqueDepositors'
  | 'market__cumulativeUniqueBorrowers'
  | 'market__cumulativeUniqueLiquidators'
  | 'market__cumulativeUniqueLiquidatees'
  | 'market__cumulativeUniqueTransferrers'
  | 'market__cumulativeUniqueFlashloaners'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___baseTrackingBorrowSpeed'
  | 'market___baseTrackingSupplySpeed'
  | 'market___lastRewardsUpdated'
  | 'market___liquidationProtocolFee'
  | 'market___siloedBorrowing'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__side'
  | 'position__type'
  | 'position__isCollateral'
  | 'position__isIsolated'
  | 'position__balance'
  | 'position__principal'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'position__borrowCount'
  | 'position__repayCount'
  | 'position__liquidationCount'
  | 'position__transferredCount'
  | 'position__receivedCount'
  | 'position___eMode'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset__type'
  | 'asset___iavsTokenType'
  | 'amount'
  | 'amountUSD';

export type gnosisPrimaryCollateralizationType =
  /**  Over collateralized protocols require users to put up more collateral than the amount borrowed.  */
  | 'OVER_COLLATERALIZED'
  /**  Protocols that allow users to borrow more than their collateral locked.   */
  | 'UNDER_COLLATERALIZED'
  /**  Protocols that allow users to borrow without any collateral. Generally this protocol is KYC'd and only whitelist users can do this  */
  | 'UNCOLLATERALIZED';

export type gnosisPrimaryDeposit = gnosisPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['gnosisPrimaryBytes'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Price of gas in this transaction  */
  gasPrice?: Maybe<Scalars['BigInt']>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']>;
  /**  Gas limit of this transaction. e.g. the amount of gas the sender will pay  */
  gasLimit?: Maybe<Scalars['BigInt']>;
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /** Account where deposit was executed (e.g. a deposit on behalf of account) */
  account: gnosisPrimaryAccount;
  /**  Account that executed the deposit (e.g. a deposit on behalf of account)  */
  accountActor?: Maybe<gnosisPrimaryAccount>;
  /**  The market tokens are deposited to  */
  market: gnosisPrimaryMarket;
  /**  The user position changed by this event  */
  position: gnosisPrimaryPosition;
  /**  Token deposited  */
  asset: gnosisPrimaryToken;
  /**  Amount of token deposited in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token deposited in USD  */
  amountUSD: Scalars['gnosisPrimaryBigDecimal'];
};

export type gnosisPrimaryDeposit_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  account_?: InputMaybe<gnosisPrimaryAccount_filter>;
  accountActor?: InputMaybe<Scalars['String']>;
  accountActor_not?: InputMaybe<Scalars['String']>;
  accountActor_gt?: InputMaybe<Scalars['String']>;
  accountActor_lt?: InputMaybe<Scalars['String']>;
  accountActor_gte?: InputMaybe<Scalars['String']>;
  accountActor_lte?: InputMaybe<Scalars['String']>;
  accountActor_in?: InputMaybe<Array<Scalars['String']>>;
  accountActor_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountActor_contains?: InputMaybe<Scalars['String']>;
  accountActor_contains_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_contains?: InputMaybe<Scalars['String']>;
  accountActor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  accountActor_starts_with?: InputMaybe<Scalars['String']>;
  accountActor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_starts_with?: InputMaybe<Scalars['String']>;
  accountActor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_ends_with?: InputMaybe<Scalars['String']>;
  accountActor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_ends_with?: InputMaybe<Scalars['String']>;
  accountActor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_?: InputMaybe<gnosisPrimaryAccount_filter>;
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
  market_?: InputMaybe<gnosisPrimaryMarket_filter>;
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
  position_?: InputMaybe<gnosisPrimaryPosition_filter>;
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
  asset_?: InputMaybe<gnosisPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryDeposit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryDeposit_filter>>>;
};

export type gnosisPrimaryDeposit_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'gasPrice'
  | 'gasUsed'
  | 'gasLimit'
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
  | 'account__transferredCount'
  | 'account__receivedCount'
  | 'account__flashloanCount'
  | 'account__rewardsClaimedUSD'
  | 'account___eMode'
  | 'accountActor'
  | 'accountActor__id'
  | 'accountActor__positionCount'
  | 'accountActor__openPositionCount'
  | 'accountActor__closedPositionCount'
  | 'accountActor__depositCount'
  | 'accountActor__withdrawCount'
  | 'accountActor__borrowCount'
  | 'accountActor__repayCount'
  | 'accountActor__liquidateCount'
  | 'accountActor__liquidationCount'
  | 'accountActor__transferredCount'
  | 'accountActor__receivedCount'
  | 'accountActor__flashloanCount'
  | 'accountActor__rewardsClaimedUSD'
  | 'accountActor___eMode'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canBorrowFrom'
  | 'market__canUseAsCollateral'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__canIsolate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__relation'
  | 'market__stakedOutputTokenAmount'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__reserves'
  | 'market__reserveFactor'
  | 'market__variableBorrowedTokenBalance'
  | 'market__stableBorrowedTokenBalance'
  | 'market__indexLastUpdatedTimestamp'
  | 'market__supplyIndex'
  | 'market__supplyCap'
  | 'market__borrowIndex'
  | 'market__borrowCap'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__cumulativeTransferUSD'
  | 'market__cumulativeFlashloanUSD'
  | 'market__transactionCount'
  | 'market__depositCount'
  | 'market__withdrawCount'
  | 'market__borrowCount'
  | 'market__repayCount'
  | 'market__liquidationCount'
  | 'market__transferCount'
  | 'market__flashloanCount'
  | 'market__cumulativeUniqueUsers'
  | 'market__cumulativeUniqueDepositors'
  | 'market__cumulativeUniqueBorrowers'
  | 'market__cumulativeUniqueLiquidators'
  | 'market__cumulativeUniqueLiquidatees'
  | 'market__cumulativeUniqueTransferrers'
  | 'market__cumulativeUniqueFlashloaners'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___baseTrackingBorrowSpeed'
  | 'market___baseTrackingSupplySpeed'
  | 'market___lastRewardsUpdated'
  | 'market___liquidationProtocolFee'
  | 'market___siloedBorrowing'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__side'
  | 'position__type'
  | 'position__isCollateral'
  | 'position__isIsolated'
  | 'position__balance'
  | 'position__principal'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'position__borrowCount'
  | 'position__repayCount'
  | 'position__liquidationCount'
  | 'position__transferredCount'
  | 'position__receivedCount'
  | 'position___eMode'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset__type'
  | 'asset___iavsTokenType'
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
export type gnosisPrimaryEvent = {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['gnosisPrimaryBytes'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Price of gas in this transaction  */
  gasPrice?: Maybe<Scalars['BigInt']>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']>;
  /**  Gas limit of this transaction. e.g. the amount of gas the sender will pay  */
  gasLimit?: Maybe<Scalars['BigInt']>;
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  The market tokens are deposited to  */
  market: gnosisPrimaryMarket;
  /**  Token deposited  */
  asset: gnosisPrimaryToken;
  /**  Amount of token deposited in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token deposited in USD  */
  amountUSD: Scalars['gnosisPrimaryBigDecimal'];
};

export type gnosisPrimaryEvent_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  market_?: InputMaybe<gnosisPrimaryMarket_filter>;
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
  asset_?: InputMaybe<gnosisPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryEvent_filter>>>;
};

export type gnosisPrimaryEvent_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'gasPrice'
  | 'gasUsed'
  | 'gasLimit'
  | 'blockNumber'
  | 'timestamp'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canBorrowFrom'
  | 'market__canUseAsCollateral'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__canIsolate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__relation'
  | 'market__stakedOutputTokenAmount'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__reserves'
  | 'market__reserveFactor'
  | 'market__variableBorrowedTokenBalance'
  | 'market__stableBorrowedTokenBalance'
  | 'market__indexLastUpdatedTimestamp'
  | 'market__supplyIndex'
  | 'market__supplyCap'
  | 'market__borrowIndex'
  | 'market__borrowCap'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__cumulativeTransferUSD'
  | 'market__cumulativeFlashloanUSD'
  | 'market__transactionCount'
  | 'market__depositCount'
  | 'market__withdrawCount'
  | 'market__borrowCount'
  | 'market__repayCount'
  | 'market__liquidationCount'
  | 'market__transferCount'
  | 'market__flashloanCount'
  | 'market__cumulativeUniqueUsers'
  | 'market__cumulativeUniqueDepositors'
  | 'market__cumulativeUniqueBorrowers'
  | 'market__cumulativeUniqueLiquidators'
  | 'market__cumulativeUniqueLiquidatees'
  | 'market__cumulativeUniqueTransferrers'
  | 'market__cumulativeUniqueFlashloaners'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___baseTrackingBorrowSpeed'
  | 'market___baseTrackingSupplySpeed'
  | 'market___lastRewardsUpdated'
  | 'market___liquidationProtocolFee'
  | 'market___siloedBorrowing'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset__type'
  | 'asset___iavsTokenType'
  | 'amount'
  | 'amountUSD';

export type gnosisPrimaryFee = {
  /**  { Fee type }  */
  id: Scalars['ID'];
  /**  Fee in percentage. E.g. 5.21% should be stored as 5.21  */
  rate?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  A flat fee in the native token. This may be a base fee in addition to the rate, or the only fee.  */
  flatFee?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  The type of fee (e.g. liquidation, admin, etc.)  */
  type: gnosisPrimaryFeeType;
};

export type gnosisPrimaryFeeType =
  /**  Fees from liquidations  */
  | 'LIQUIDATION_FEE'
  /**  Fees given to an admin  */
  | 'ADMIN_FEE'
  /**  Fees that are taken by the protocol  */
  | 'PROTOCOL_FEE'
  /**  Fee to mint an asset. Found mostly in CDPs  */
  | 'MINT_FEE'
  /**  Fee taken on withdrawal. e.g. found in Euler  */
  | 'WITHDRAW_FEE'
  /**  Flashloan Fees taken by the protocol  */
  | 'FLASHLOAN_PROTOCOL_FEE'
  /**  Flashloan Fees taken by LP  */
  | 'FLASHLOAN_LP_FEE'
  /**  Any fee not represented here. Please make a github issue for this to be added: https://github.com/messari/subgraphs/issues/new  */
  | 'OTHER';

export type gnosisPrimaryFee_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rate?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rate_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rate_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rate_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rate_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rate_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rate_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rate_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  flatFee?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  flatFee_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  flatFee_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  flatFee_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  flatFee_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  flatFee_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  flatFee_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  flatFee_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  type?: InputMaybe<gnosisPrimaryFeeType>;
  type_not?: InputMaybe<gnosisPrimaryFeeType>;
  type_in?: InputMaybe<Array<gnosisPrimaryFeeType>>;
  type_not_in?: InputMaybe<Array<gnosisPrimaryFeeType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryFee_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryFee_filter>>>;
};

export type gnosisPrimaryFee_orderBy =
  | 'id'
  | 'rate'
  | 'flatFee'
  | 'type';

export type gnosisPrimaryFinancialsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Number of days since Unix epoch time  */
  days: Scalars['Int'];
  /**  Protocol this snapshot is associated with  */
  protocol: gnosisPrimaryLendingProtocol;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  Total supply of minted tokens in native amounts, with same ordering as mintedTokens. Only applies to CDP  */
  mintedTokenSupplies?: Maybe<Array<Scalars['BigInt']>>;
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  dailySupplySideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  dailyProtocolSideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  dailyTotalRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Details of revenue sources and amounts  */
  revenueDetail?: Maybe<gnosisPrimaryRevenueDetail>;
  /**  Current balance of all deposited assets, in USD. Note this metric should be the same as TVL.  */
  totalDepositBalanceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets deposited on a given day, in USD  */
  dailyDepositUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Current balance of all borrowed/minted assets, in USD.  */
  totalBorrowBalanceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets borrowed/minted on a given day, in USD.  */
  dailyBorrowUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination).  */
  cumulativeBorrowUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets liquidated on a given day, in USD.  */
  dailyLiquidateUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets withdrawn on a given day, in USD.  */
  dailyWithdrawUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets repaid on a given day, in USD.  */
  dailyRepayUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets transferred on a given day, in USD.  */
  dailyTransferUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total flashloans executed on a given day, in USD.  */
  dailyFlashloanUSD: Scalars['gnosisPrimaryBigDecimal'];
};

export type gnosisPrimaryFinancialsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  days?: InputMaybe<Scalars['Int']>;
  days_not?: InputMaybe<Scalars['Int']>;
  days_gt?: InputMaybe<Scalars['Int']>;
  days_lt?: InputMaybe<Scalars['Int']>;
  days_gte?: InputMaybe<Scalars['Int']>;
  days_lte?: InputMaybe<Scalars['Int']>;
  days_in?: InputMaybe<Array<Scalars['Int']>>;
  days_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  protocol_?: InputMaybe<gnosisPrimaryLendingProtocol_filter>;
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
  totalValueLockedUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  mintedTokenSupplies?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  revenueDetail?: InputMaybe<Scalars['String']>;
  revenueDetail_not?: InputMaybe<Scalars['String']>;
  revenueDetail_gt?: InputMaybe<Scalars['String']>;
  revenueDetail_lt?: InputMaybe<Scalars['String']>;
  revenueDetail_gte?: InputMaybe<Scalars['String']>;
  revenueDetail_lte?: InputMaybe<Scalars['String']>;
  revenueDetail_in?: InputMaybe<Array<Scalars['String']>>;
  revenueDetail_not_in?: InputMaybe<Array<Scalars['String']>>;
  revenueDetail_contains?: InputMaybe<Scalars['String']>;
  revenueDetail_contains_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_not_contains?: InputMaybe<Scalars['String']>;
  revenueDetail_not_contains_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_starts_with?: InputMaybe<Scalars['String']>;
  revenueDetail_starts_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_not_starts_with?: InputMaybe<Scalars['String']>;
  revenueDetail_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_ends_with?: InputMaybe<Scalars['String']>;
  revenueDetail_ends_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_not_ends_with?: InputMaybe<Scalars['String']>;
  revenueDetail_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_?: InputMaybe<gnosisPrimaryRevenueDetail_filter>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyDepositUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyDepositUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyDepositUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyDepositUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyDepositUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyDepositUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyDepositUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyDepositUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyBorrowUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyBorrowUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyBorrowUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyBorrowUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyBorrowUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyBorrowUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyBorrowUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyBorrowUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyLiquidateUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyLiquidateUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyLiquidateUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyLiquidateUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyLiquidateUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyLiquidateUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyLiquidateUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyWithdrawUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyWithdrawUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyWithdrawUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyWithdrawUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyWithdrawUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyWithdrawUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyWithdrawUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyWithdrawUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyRepayUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyRepayUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyRepayUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyRepayUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyRepayUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyRepayUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyRepayUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyRepayUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyTransferUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTransferUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTransferUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTransferUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTransferUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTransferUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTransferUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyTransferUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyFlashloanUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyFlashloanUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyFlashloanUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyFlashloanUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyFlashloanUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyFlashloanUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyFlashloanUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyFlashloanUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryFinancialsDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryFinancialsDailySnapshot_filter>>>;
};

export type gnosisPrimaryFinancialsDailySnapshot_orderBy =
  | 'id'
  | 'days'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__protocol'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__lendingType'
  | 'protocol__lenderPermissionType'
  | 'protocol__borrowerPermissionType'
  | 'protocol__poolCreatorPermissionType'
  | 'protocol__riskType'
  | 'protocol__collateralizationType'
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
  | 'protocol__transactionCount'
  | 'protocol__depositCount'
  | 'protocol__withdrawCount'
  | 'protocol__borrowCount'
  | 'protocol__repayCount'
  | 'protocol__liquidationCount'
  | 'protocol__transferCount'
  | 'protocol__flashloanCount'
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
  | 'revenueDetail'
  | 'revenueDetail__id'
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
  | 'dailyTransferUSD'
  | 'dailyFlashloanUSD';

export type gnosisPrimaryFlashloan = gnosisPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['gnosisPrimaryBytes'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Price of gas in this transaction  */
  gasPrice?: Maybe<Scalars['BigInt']>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']>;
  /**  Gas limit of this transaction. e.g. the amount of gas the sender will pay  */
  gasLimit?: Maybe<Scalars['BigInt']>;
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  Account that receives the funds from the flashloan  */
  account: gnosisPrimaryAccount;
  /**  Account that initiates the flashloan  */
  accountActor?: Maybe<gnosisPrimaryAccount>;
  /**  The market in which this flashloan is executed  */
  market: gnosisPrimaryMarket;
  /**  Asset borrowed  */
  asset: gnosisPrimaryToken;
  /**  Amount of asset borrowed in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of asset borrowed in USD  */
  amountUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Amount of asset taken by protocol as a fee in native units  */
  feeAmount?: Maybe<Scalars['BigInt']>;
  /**  Amount of asset taken by protocol as a fee in USD  */
  feeAmountUSD?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
};

export type gnosisPrimaryFlashloan_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  account_?: InputMaybe<gnosisPrimaryAccount_filter>;
  accountActor?: InputMaybe<Scalars['String']>;
  accountActor_not?: InputMaybe<Scalars['String']>;
  accountActor_gt?: InputMaybe<Scalars['String']>;
  accountActor_lt?: InputMaybe<Scalars['String']>;
  accountActor_gte?: InputMaybe<Scalars['String']>;
  accountActor_lte?: InputMaybe<Scalars['String']>;
  accountActor_in?: InputMaybe<Array<Scalars['String']>>;
  accountActor_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountActor_contains?: InputMaybe<Scalars['String']>;
  accountActor_contains_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_contains?: InputMaybe<Scalars['String']>;
  accountActor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  accountActor_starts_with?: InputMaybe<Scalars['String']>;
  accountActor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_starts_with?: InputMaybe<Scalars['String']>;
  accountActor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_ends_with?: InputMaybe<Scalars['String']>;
  accountActor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_ends_with?: InputMaybe<Scalars['String']>;
  accountActor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_?: InputMaybe<gnosisPrimaryAccount_filter>;
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
  market_?: InputMaybe<gnosisPrimaryMarket_filter>;
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
  asset_?: InputMaybe<gnosisPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  feeAmount?: InputMaybe<Scalars['BigInt']>;
  feeAmount_not?: InputMaybe<Scalars['BigInt']>;
  feeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  feeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  feeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  feeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  feeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeAmountUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  feeAmountUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  feeAmountUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  feeAmountUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  feeAmountUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  feeAmountUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  feeAmountUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  feeAmountUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryFlashloan_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryFlashloan_filter>>>;
};

export type gnosisPrimaryFlashloan_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'gasPrice'
  | 'gasUsed'
  | 'gasLimit'
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
  | 'account__transferredCount'
  | 'account__receivedCount'
  | 'account__flashloanCount'
  | 'account__rewardsClaimedUSD'
  | 'account___eMode'
  | 'accountActor'
  | 'accountActor__id'
  | 'accountActor__positionCount'
  | 'accountActor__openPositionCount'
  | 'accountActor__closedPositionCount'
  | 'accountActor__depositCount'
  | 'accountActor__withdrawCount'
  | 'accountActor__borrowCount'
  | 'accountActor__repayCount'
  | 'accountActor__liquidateCount'
  | 'accountActor__liquidationCount'
  | 'accountActor__transferredCount'
  | 'accountActor__receivedCount'
  | 'accountActor__flashloanCount'
  | 'accountActor__rewardsClaimedUSD'
  | 'accountActor___eMode'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canBorrowFrom'
  | 'market__canUseAsCollateral'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__canIsolate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__relation'
  | 'market__stakedOutputTokenAmount'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__reserves'
  | 'market__reserveFactor'
  | 'market__variableBorrowedTokenBalance'
  | 'market__stableBorrowedTokenBalance'
  | 'market__indexLastUpdatedTimestamp'
  | 'market__supplyIndex'
  | 'market__supplyCap'
  | 'market__borrowIndex'
  | 'market__borrowCap'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__cumulativeTransferUSD'
  | 'market__cumulativeFlashloanUSD'
  | 'market__transactionCount'
  | 'market__depositCount'
  | 'market__withdrawCount'
  | 'market__borrowCount'
  | 'market__repayCount'
  | 'market__liquidationCount'
  | 'market__transferCount'
  | 'market__flashloanCount'
  | 'market__cumulativeUniqueUsers'
  | 'market__cumulativeUniqueDepositors'
  | 'market__cumulativeUniqueBorrowers'
  | 'market__cumulativeUniqueLiquidators'
  | 'market__cumulativeUniqueLiquidatees'
  | 'market__cumulativeUniqueTransferrers'
  | 'market__cumulativeUniqueFlashloaners'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___baseTrackingBorrowSpeed'
  | 'market___baseTrackingSupplySpeed'
  | 'market___lastRewardsUpdated'
  | 'market___liquidationProtocolFee'
  | 'market___siloedBorrowing'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset__type'
  | 'asset___iavsTokenType'
  | 'amount'
  | 'amountUSD'
  | 'feeAmount'
  | 'feeAmountUSD';

export type gnosisPrimaryInterestRate = {
  /**  { Interest rate side }-{ Interest rate type }-{ Market ID }-{ Optional: Tranche }-{ Optional: # days/hours since epoch time }  */
  id: Scalars['ID'];
  /**  Interest rate in percentage APY. E.g. 5.21% should be stored as 5.21  */
  rate: Scalars['gnosisPrimaryBigDecimal'];
  /**  Duration of the loan in days. Only applies to fixed term lending (e.g. Notional)  */
  duration?: Maybe<Scalars['Int']>;
  /**  Maturity of the loan in block height. Only applies to fixed term lending (e.g. Notional)  */
  maturityBlock?: Maybe<Scalars['BigInt']>;
  /**  The party the interest is paid to / received from  */
  side: gnosisPrimaryInterestRateSide;
  /**  The type of interest rate (e.g. stable, fixed, variable, etc)  */
  type: gnosisPrimaryInterestRateType;
  /**  The level of debt priority at this interest rate  */
  tranche?: Maybe<gnosisPrimaryTranche>;
};

export type gnosisPrimaryInterestRateSide =
  /**  Interest rate accrued by lenders  */
  | 'LENDER'
  /**  Interest rate paid by borrowers  */
  | 'BORROWER';

export type gnosisPrimaryInterestRateType =
  /**  Stable interest rate (e.g. Aave)  */
  | 'STABLE'
  /**  Variable interest rate (e.g. Compound)  */
  | 'VARIABLE'
  /**  Fixed interest rate (e.g. Notional)  */
  | 'FIXED';

export type gnosisPrimaryInterestRate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rate?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rate_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rate_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rate_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rate_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rate_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  rate_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rate_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
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
  side?: InputMaybe<gnosisPrimaryInterestRateSide>;
  side_not?: InputMaybe<gnosisPrimaryInterestRateSide>;
  side_in?: InputMaybe<Array<gnosisPrimaryInterestRateSide>>;
  side_not_in?: InputMaybe<Array<gnosisPrimaryInterestRateSide>>;
  type?: InputMaybe<gnosisPrimaryInterestRateType>;
  type_not?: InputMaybe<gnosisPrimaryInterestRateType>;
  type_in?: InputMaybe<Array<gnosisPrimaryInterestRateType>>;
  type_not_in?: InputMaybe<Array<gnosisPrimaryInterestRateType>>;
  tranche?: InputMaybe<gnosisPrimaryTranche>;
  tranche_not?: InputMaybe<gnosisPrimaryTranche>;
  tranche_in?: InputMaybe<Array<gnosisPrimaryTranche>>;
  tranche_not_in?: InputMaybe<Array<gnosisPrimaryTranche>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryInterestRate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryInterestRate_filter>>>;
};

export type gnosisPrimaryInterestRate_orderBy =
  | 'id'
  | 'rate'
  | 'duration'
  | 'maturityBlock'
  | 'side'
  | 'type'
  | 'tranche';

export type gnosisPrimaryLendingProtocol = gnosisPrimaryProtocol & {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Base name of the protocol, excluding transformations. e.g. Aave  */
  protocol: Scalars['String'];
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
  network: gnosisPrimaryNetwork;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: gnosisPrimaryProtocolType;
  /**  The specific lending protocol type  */
  lendingType?: Maybe<gnosisPrimaryLendingType>;
  /**  The specific permissions required to lend in this protocol  */
  lenderPermissionType?: Maybe<gnosisPrimaryPermissionType>;
  /**  The specific permissions required to borrow from this protocol  */
  borrowerPermissionType?: Maybe<gnosisPrimaryPermissionType>;
  /**  The specific permissions required to create a pool (market) in this protocol  */
  poolCreatorPermissionType?: Maybe<gnosisPrimaryPermissionType>;
  /**  Risk type of the lending protocol  */
  riskType?: Maybe<gnosisPrimaryRiskType>;
  /**  The way a positions can be collateralized  */
  collateralizationType?: Maybe<gnosisPrimaryCollateralizationType>;
  /**  Tokens that can be minted. Only applies to CDP (usually stable coins)  */
  mintedTokens?: Maybe<Array<gnosisPrimaryToken>>;
  /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs.  */
  rewardTokens?: Maybe<Array<gnosisPrimaryRewardToken>>;
  /**  Number of cumulative unique users. e.g. accounts that spent gas to interact with this protocol  */
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
  totalValueLockedUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All fees in the protocol. Fee should be in percentage format. e.g. 0.30% liquidation fee  */
  fees?: Maybe<Array<gnosisPrimaryFee>>;
  /**  Details of revenue sources and amounts  */
  revenueDetail?: Maybe<gnosisPrimaryRevenueDetail>;
  /**  Current balance of all deposited assets, in USD. Note this metric should be the same as TVL.  */
  totalDepositBalanceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination).  */
  cumulativeBorrowUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total supply of minted tokens in native amounts, with same ordering as mintedTokens. Only applies to CDP  */
  mintedTokenSupplies?: Maybe<Array<Scalars['BigInt']>>;
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int'];
  /**  Total number of open positions  */
  openPositionCount: Scalars['Int'];
  /**  Total number of positions (open and closed)  */
  cumulativePositionCount: Scalars['Int'];
  /**  Total number of transactions  */
  transactionCount: Scalars['Int'];
  /**  Total number of deposits  */
  depositCount: Scalars['Int'];
  /**  Total number of withdrawals  */
  withdrawCount: Scalars['Int'];
  /**  Total number of borrows  */
  borrowCount: Scalars['Int'];
  /**  Total number of repayments  */
  repayCount: Scalars['Int'];
  /**  Total number of liquidations  */
  liquidationCount: Scalars['Int'];
  /**  Total number of transfers  */
  transferCount: Scalars['Int'];
  /**  Total number of flashloans  */
  flashloanCount: Scalars['Int'];
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<gnosisPrimaryUsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<gnosisPrimaryUsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<gnosisPrimaryFinancialsDailySnapshot>;
  /**  All markets that belong to this protocol  */
  markets: Array<gnosisPrimaryMarket>;
};


export type gnosisPrimaryLendingProtocolmintedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryToken_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryToken_filter>;
};


export type gnosisPrimaryLendingProtocolrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryRewardToken_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryRewardToken_filter>;
};


export type gnosisPrimaryLendingProtocolfeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryFee_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryFee_filter>;
};


export type gnosisPrimaryLendingProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryUsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryUsageMetricsDailySnapshot_filter>;
};


export type gnosisPrimaryLendingProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryUsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryUsageMetricsHourlySnapshot_filter>;
};


export type gnosisPrimaryLendingProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryFinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryFinancialsDailySnapshot_filter>;
};


export type gnosisPrimaryLendingProtocolmarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryMarket_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryMarket_filter>;
};

export type gnosisPrimaryLendingProtocol_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  network?: InputMaybe<gnosisPrimaryNetwork>;
  network_not?: InputMaybe<gnosisPrimaryNetwork>;
  network_in?: InputMaybe<Array<gnosisPrimaryNetwork>>;
  network_not_in?: InputMaybe<Array<gnosisPrimaryNetwork>>;
  type?: InputMaybe<gnosisPrimaryProtocolType>;
  type_not?: InputMaybe<gnosisPrimaryProtocolType>;
  type_in?: InputMaybe<Array<gnosisPrimaryProtocolType>>;
  type_not_in?: InputMaybe<Array<gnosisPrimaryProtocolType>>;
  lendingType?: InputMaybe<gnosisPrimaryLendingType>;
  lendingType_not?: InputMaybe<gnosisPrimaryLendingType>;
  lendingType_in?: InputMaybe<Array<gnosisPrimaryLendingType>>;
  lendingType_not_in?: InputMaybe<Array<gnosisPrimaryLendingType>>;
  lenderPermissionType?: InputMaybe<gnosisPrimaryPermissionType>;
  lenderPermissionType_not?: InputMaybe<gnosisPrimaryPermissionType>;
  lenderPermissionType_in?: InputMaybe<Array<gnosisPrimaryPermissionType>>;
  lenderPermissionType_not_in?: InputMaybe<Array<gnosisPrimaryPermissionType>>;
  borrowerPermissionType?: InputMaybe<gnosisPrimaryPermissionType>;
  borrowerPermissionType_not?: InputMaybe<gnosisPrimaryPermissionType>;
  borrowerPermissionType_in?: InputMaybe<Array<gnosisPrimaryPermissionType>>;
  borrowerPermissionType_not_in?: InputMaybe<Array<gnosisPrimaryPermissionType>>;
  poolCreatorPermissionType?: InputMaybe<gnosisPrimaryPermissionType>;
  poolCreatorPermissionType_not?: InputMaybe<gnosisPrimaryPermissionType>;
  poolCreatorPermissionType_in?: InputMaybe<Array<gnosisPrimaryPermissionType>>;
  poolCreatorPermissionType_not_in?: InputMaybe<Array<gnosisPrimaryPermissionType>>;
  riskType?: InputMaybe<gnosisPrimaryRiskType>;
  riskType_not?: InputMaybe<gnosisPrimaryRiskType>;
  riskType_in?: InputMaybe<Array<gnosisPrimaryRiskType>>;
  riskType_not_in?: InputMaybe<Array<gnosisPrimaryRiskType>>;
  collateralizationType?: InputMaybe<gnosisPrimaryCollateralizationType>;
  collateralizationType_not?: InputMaybe<gnosisPrimaryCollateralizationType>;
  collateralizationType_in?: InputMaybe<Array<gnosisPrimaryCollateralizationType>>;
  collateralizationType_not_in?: InputMaybe<Array<gnosisPrimaryCollateralizationType>>;
  mintedTokens?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_?: InputMaybe<gnosisPrimaryToken_filter>;
  rewardTokens?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_?: InputMaybe<gnosisPrimaryRewardToken_filter>;
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
  totalValueLockedUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  fees?: InputMaybe<Array<Scalars['String']>>;
  fees_not?: InputMaybe<Array<Scalars['String']>>;
  fees_contains?: InputMaybe<Array<Scalars['String']>>;
  fees_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fees_not_contains?: InputMaybe<Array<Scalars['String']>>;
  fees_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fees_?: InputMaybe<gnosisPrimaryFee_filter>;
  revenueDetail?: InputMaybe<Scalars['String']>;
  revenueDetail_not?: InputMaybe<Scalars['String']>;
  revenueDetail_gt?: InputMaybe<Scalars['String']>;
  revenueDetail_lt?: InputMaybe<Scalars['String']>;
  revenueDetail_gte?: InputMaybe<Scalars['String']>;
  revenueDetail_lte?: InputMaybe<Scalars['String']>;
  revenueDetail_in?: InputMaybe<Array<Scalars['String']>>;
  revenueDetail_not_in?: InputMaybe<Array<Scalars['String']>>;
  revenueDetail_contains?: InputMaybe<Scalars['String']>;
  revenueDetail_contains_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_not_contains?: InputMaybe<Scalars['String']>;
  revenueDetail_not_contains_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_starts_with?: InputMaybe<Scalars['String']>;
  revenueDetail_starts_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_not_starts_with?: InputMaybe<Scalars['String']>;
  revenueDetail_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_ends_with?: InputMaybe<Scalars['String']>;
  revenueDetail_ends_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_not_ends_with?: InputMaybe<Scalars['String']>;
  revenueDetail_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_?: InputMaybe<gnosisPrimaryRevenueDetail_filter>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
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
  transactionCount?: InputMaybe<Scalars['Int']>;
  transactionCount_not?: InputMaybe<Scalars['Int']>;
  transactionCount_gt?: InputMaybe<Scalars['Int']>;
  transactionCount_lt?: InputMaybe<Scalars['Int']>;
  transactionCount_gte?: InputMaybe<Scalars['Int']>;
  transactionCount_lte?: InputMaybe<Scalars['Int']>;
  transactionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  depositCount?: InputMaybe<Scalars['Int']>;
  depositCount_not?: InputMaybe<Scalars['Int']>;
  depositCount_gt?: InputMaybe<Scalars['Int']>;
  depositCount_lt?: InputMaybe<Scalars['Int']>;
  depositCount_gte?: InputMaybe<Scalars['Int']>;
  depositCount_lte?: InputMaybe<Scalars['Int']>;
  depositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  depositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount?: InputMaybe<Scalars['Int']>;
  withdrawCount_not?: InputMaybe<Scalars['Int']>;
  withdrawCount_gt?: InputMaybe<Scalars['Int']>;
  withdrawCount_lt?: InputMaybe<Scalars['Int']>;
  withdrawCount_gte?: InputMaybe<Scalars['Int']>;
  withdrawCount_lte?: InputMaybe<Scalars['Int']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowCount?: InputMaybe<Scalars['Int']>;
  borrowCount_not?: InputMaybe<Scalars['Int']>;
  borrowCount_gt?: InputMaybe<Scalars['Int']>;
  borrowCount_lt?: InputMaybe<Scalars['Int']>;
  borrowCount_gte?: InputMaybe<Scalars['Int']>;
  borrowCount_lte?: InputMaybe<Scalars['Int']>;
  borrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  repayCount?: InputMaybe<Scalars['Int']>;
  repayCount_not?: InputMaybe<Scalars['Int']>;
  repayCount_gt?: InputMaybe<Scalars['Int']>;
  repayCount_lt?: InputMaybe<Scalars['Int']>;
  repayCount_gte?: InputMaybe<Scalars['Int']>;
  repayCount_lte?: InputMaybe<Scalars['Int']>;
  repayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  repayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidationCount?: InputMaybe<Scalars['Int']>;
  liquidationCount_not?: InputMaybe<Scalars['Int']>;
  liquidationCount_gt?: InputMaybe<Scalars['Int']>;
  liquidationCount_lt?: InputMaybe<Scalars['Int']>;
  liquidationCount_gte?: InputMaybe<Scalars['Int']>;
  liquidationCount_lte?: InputMaybe<Scalars['Int']>;
  liquidationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transferCount?: InputMaybe<Scalars['Int']>;
  transferCount_not?: InputMaybe<Scalars['Int']>;
  transferCount_gt?: InputMaybe<Scalars['Int']>;
  transferCount_lt?: InputMaybe<Scalars['Int']>;
  transferCount_gte?: InputMaybe<Scalars['Int']>;
  transferCount_lte?: InputMaybe<Scalars['Int']>;
  transferCount_in?: InputMaybe<Array<Scalars['Int']>>;
  transferCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  flashloanCount?: InputMaybe<Scalars['Int']>;
  flashloanCount_not?: InputMaybe<Scalars['Int']>;
  flashloanCount_gt?: InputMaybe<Scalars['Int']>;
  flashloanCount_lt?: InputMaybe<Scalars['Int']>;
  flashloanCount_gte?: InputMaybe<Scalars['Int']>;
  flashloanCount_lte?: InputMaybe<Scalars['Int']>;
  flashloanCount_in?: InputMaybe<Array<Scalars['Int']>>;
  flashloanCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyUsageMetrics_?: InputMaybe<gnosisPrimaryUsageMetricsDailySnapshot_filter>;
  hourlyUsageMetrics_?: InputMaybe<gnosisPrimaryUsageMetricsHourlySnapshot_filter>;
  financialMetrics_?: InputMaybe<gnosisPrimaryFinancialsDailySnapshot_filter>;
  markets_?: InputMaybe<gnosisPrimaryMarket_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryLendingProtocol_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryLendingProtocol_filter>>>;
};

export type gnosisPrimaryLendingProtocol_orderBy =
  | 'id'
  | 'protocol'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'lendingType'
  | 'lenderPermissionType'
  | 'borrowerPermissionType'
  | 'poolCreatorPermissionType'
  | 'riskType'
  | 'collateralizationType'
  | 'mintedTokens'
  | 'rewardTokens'
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
  | 'fees'
  | 'revenueDetail'
  | 'revenueDetail__id'
  | 'totalDepositBalanceUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'cumulativeBorrowUSD'
  | 'cumulativeLiquidateUSD'
  | 'mintedTokenSupplies'
  | 'totalPoolCount'
  | 'openPositionCount'
  | 'cumulativePositionCount'
  | 'transactionCount'
  | 'depositCount'
  | 'withdrawCount'
  | 'borrowCount'
  | 'repayCount'
  | 'liquidationCount'
  | 'transferCount'
  | 'flashloanCount'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'
  | 'dailyUsageMetrics'
  | 'hourlyUsageMetrics'
  | 'financialMetrics'
  | 'markets';

export type gnosisPrimaryLendingType =
  /**  Collateralized Debt Position (CDP) protocols have singular isolated positions created by users. We aggregate them to give a single view of a market  */
  | 'CDP'
  /**  Pooled protocols pool all users assets into a single market  */
  | 'POOLED';

export type gnosisPrimaryLiquidate = gnosisPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['gnosisPrimaryBytes'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Price of gas in this transaction  */
  gasPrice?: Maybe<Scalars['BigInt']>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']>;
  /**  Gas limit of this transaction. e.g. the amount of gas the sender will pay  */
  gasLimit?: Maybe<Scalars['BigInt']>;
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  Account that carried out the liquidation  */
  liquidator: gnosisPrimaryAccount;
  /**  Account that got liquidated  */
  liquidatee: gnosisPrimaryAccount;
  /**  The market of the collateral being used  */
  market: gnosisPrimaryMarket;
  /**  The user position changed by this event  */
  positions: Array<gnosisPrimaryPosition>;
  /**  Asset repaid (borrowed)  */
  asset: gnosisPrimaryToken;
  /**  Amount of collateral liquidated in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of collateral liquidated in USD  */
  amountUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Amount of profit from liquidation in USD  */
  profitUSD: Scalars['gnosisPrimaryBigDecimal'];
};


export type gnosisPrimaryLiquidatepositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryPosition_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryPosition_filter>;
};

export type gnosisPrimaryLiquidate_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  liquidator_?: InputMaybe<gnosisPrimaryAccount_filter>;
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
  liquidatee_?: InputMaybe<gnosisPrimaryAccount_filter>;
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
  market_?: InputMaybe<gnosisPrimaryMarket_filter>;
  positions?: InputMaybe<Array<Scalars['String']>>;
  positions_not?: InputMaybe<Array<Scalars['String']>>;
  positions_contains?: InputMaybe<Array<Scalars['String']>>;
  positions_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  positions_not_contains?: InputMaybe<Array<Scalars['String']>>;
  positions_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  positions_?: InputMaybe<gnosisPrimaryPosition_filter>;
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
  asset_?: InputMaybe<gnosisPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  profitUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  profitUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  profitUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  profitUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  profitUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  profitUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  profitUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  profitUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryLiquidate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryLiquidate_filter>>>;
};

export type gnosisPrimaryLiquidate_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'gasPrice'
  | 'gasUsed'
  | 'gasLimit'
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
  | 'liquidator__transferredCount'
  | 'liquidator__receivedCount'
  | 'liquidator__flashloanCount'
  | 'liquidator__rewardsClaimedUSD'
  | 'liquidator___eMode'
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
  | 'liquidatee__transferredCount'
  | 'liquidatee__receivedCount'
  | 'liquidatee__flashloanCount'
  | 'liquidatee__rewardsClaimedUSD'
  | 'liquidatee___eMode'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canBorrowFrom'
  | 'market__canUseAsCollateral'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__canIsolate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__relation'
  | 'market__stakedOutputTokenAmount'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__reserves'
  | 'market__reserveFactor'
  | 'market__variableBorrowedTokenBalance'
  | 'market__stableBorrowedTokenBalance'
  | 'market__indexLastUpdatedTimestamp'
  | 'market__supplyIndex'
  | 'market__supplyCap'
  | 'market__borrowIndex'
  | 'market__borrowCap'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__cumulativeTransferUSD'
  | 'market__cumulativeFlashloanUSD'
  | 'market__transactionCount'
  | 'market__depositCount'
  | 'market__withdrawCount'
  | 'market__borrowCount'
  | 'market__repayCount'
  | 'market__liquidationCount'
  | 'market__transferCount'
  | 'market__flashloanCount'
  | 'market__cumulativeUniqueUsers'
  | 'market__cumulativeUniqueDepositors'
  | 'market__cumulativeUniqueBorrowers'
  | 'market__cumulativeUniqueLiquidators'
  | 'market__cumulativeUniqueLiquidatees'
  | 'market__cumulativeUniqueTransferrers'
  | 'market__cumulativeUniqueFlashloaners'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___baseTrackingBorrowSpeed'
  | 'market___baseTrackingSupplySpeed'
  | 'market___lastRewardsUpdated'
  | 'market___liquidationProtocolFee'
  | 'market___siloedBorrowing'
  | 'positions'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset__type'
  | 'asset___iavsTokenType'
  | 'amount'
  | 'amountUSD'
  | 'profitUSD';

/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type gnosisPrimaryMarket = {
  /**  Smart contract address of the market  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  The protocol this pool belongs to  */
  protocol: gnosisPrimaryLendingProtocol;
  /**  Name of market  */
  name?: Maybe<Scalars['String']>;
  /**  Is this market active or is it frozen  */
  isActive: Scalars['Boolean'];
  /**  Can you borrow from this market  */
  canBorrowFrom: Scalars['Boolean'];
  /**  Can you use the output token as collateral  */
  canUseAsCollateral: Scalars['Boolean'];
  /**  Maximum loan-to-value ratio as a percentage value (e.g. 75% for DAI in Aave)  */
  maximumLTV: Scalars['gnosisPrimaryBigDecimal'];
  /**  Liquidation threshold as a percentage value (e.g. 80% for DAI in Aave). When it is reached, the position is defined as undercollateralised and could be liquidated  */
  liquidationThreshold: Scalars['gnosisPrimaryBigDecimal'];
  /**  Liquidation penalty (or the liquidation bonus for liquidators) as a percentage value. It is the penalty/bonus price on the collateral when liquidators purchase it as part of the liquidation of a loan that has passed the liquidation threshold  */
  liquidationPenalty: Scalars['gnosisPrimaryBigDecimal'];
  /**  Can the user choose to isolate assets in this market. e.g. only this market's collateral can be used for a borrow in Aave V3  */
  canIsolate: Scalars['Boolean'];
  /**  Creation timestamp  */
  createdTimestamp: Scalars['BigInt'];
  /**  Creation block number  */
  createdBlockNumber: Scalars['BigInt'];
  /**  Details about the price oracle used to get this token's price  */
  oracle?: Maybe<gnosisPrimaryOracle>;
  /**  A unique identifier that can relate multiple markets. e.g. a common address that is the same for each related market. This is useful for markets with multiple input tokens  */
  relation?: Maybe<Scalars['gnosisPrimaryBytes']>;
  /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<gnosisPrimaryRewardToken>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /**  Total supply of output tokens that are staked. Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
  /**  Token that need to be deposited in this market to take a position in protocol (should be alphabetized)  */
  inputToken: gnosisPrimaryToken;
  /**  Amount of input token in the market (same order as inputTokens)  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Prices in USD of the input token (same order as inputTokens)  */
  inputTokenPriceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Tokens that are minted to track ownership of position in protocol (e.g. aToken, cToken). Leave as null if doesn't exist (should be alphabetized)  */
  outputToken?: Maybe<gnosisPrimaryToken>;
  /**  Total supply of output token (same order as outputTokens)  */
  outputTokenSupply?: Maybe<Scalars['BigInt']>;
  /**  Prices in USD of the output token (same order as outputTokens)  */
  outputTokenPriceUSD?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  Amount of input token per full share of output token. Only applies when the output token exists (note this is a ratio and not a percentage value, i.e. 1.05 instead of 105%)  */
  exchangeRate?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  All interest rates for this input token. Should be in APR format  */
  rates?: Maybe<Array<gnosisPrimaryInterestRate>>;
  /**  Total amount of reserves (in USD)  */
  reserves?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  The amount of revenue that is converted to reserves at the current time. 20% reserve factor should be in format 0.20  */
  reserveFactor?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  The token that can be borrowed (e.g. inputToken in POOLED and generally a stable in CDPs)  */
  borrowedToken?: Maybe<gnosisPrimaryToken>;
  /**  Amount of input tokens borrowed in this market using variable interest rates (in native terms)  */
  variableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
  /**  Amount of input tokens borrowed in this market using stable interest rates (in native terms)  */
  stableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
  /**  Last updated timestamp of supply/borrow index.  */
  indexLastUpdatedTimestamp?: Maybe<Scalars['BigInt']>;
  /**  Index used by the protocol to calculate interest generated on the supply token (ie, liquidityIndex in Aave) */
  supplyIndex?: Maybe<Scalars['BigInt']>;
  /**  Allowed limit to how much of the underlying asset can be supplied to this market.  */
  supplyCap?: Maybe<Scalars['BigInt']>;
  /**  Index used by the protocol to calculate the interest paid on the borrowed token (ie, variableBorrowIndex in Aave)) */
  borrowIndex?: Maybe<Scalars['BigInt']>;
  /**  Allowed limit for how much of the underlying asset can be borrowed from this market.  */
  borrowCap?: Maybe<Scalars['BigInt']>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All revenue generated by the market, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All revenue generated by the market, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All revenue generated by the market.  */
  cumulativeTotalRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Details of revenue sources and amounts  */
  revenueDetail?: Maybe<gnosisPrimaryRevenueDetail>;
  /**  Current balance of all deposited assets (not historical cumulative), in USD  */
  totalDepositBalanceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD  */
  totalBorrowBalanceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical transfers in USD  */
  cumulativeTransferUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical flashloans in USD  */
  cumulativeFlashloanUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total number of transactions  */
  transactionCount: Scalars['Int'];
  /**  Total number of deposits  */
  depositCount: Scalars['Int'];
  /**  Total number of withdrawals  */
  withdrawCount: Scalars['Int'];
  /**  Total number of borrows  */
  borrowCount: Scalars['Int'];
  /**  Total number of repayments  */
  repayCount: Scalars['Int'];
  /**  Total number of liquidations  */
  liquidationCount: Scalars['Int'];
  /**  Total number of transfers  */
  transferCount: Scalars['Int'];
  /**  Total number of flashloans  */
  flashloanCount: Scalars['Int'];
  /**  Number of cumulative unique users. e.g. accounts that spent gas to interact with this market  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Number of cumulative depositors  */
  cumulativeUniqueDepositors: Scalars['Int'];
  /**  Number of cumulative borrowers  */
  cumulativeUniqueBorrowers: Scalars['Int'];
  /**  Number of cumulative liquidators (accounts that performed liquidation)  */
  cumulativeUniqueLiquidators: Scalars['Int'];
  /**  Number of cumulative liquidatees (accounts that got liquidated)  */
  cumulativeUniqueLiquidatees: Scalars['Int'];
  /**  Number of cumulative accounts that transferred positions (generally in the form of outputToken transfer)  */
  cumulativeUniqueTransferrers: Scalars['Int'];
  /**  Number of cumulative accounts that performed flashloans  */
  cumulativeUniqueFlashloaners: Scalars['Int'];
  /**  All positions in this market  */
  positions: Array<gnosisPrimaryPosition>;
  /**  Number of positions in this market  */
  positionCount: Scalars['Int'];
  /**  Number of open positions in this market  */
  openPositionCount: Scalars['Int'];
  /**  Number of closed positions in this market  */
  closedPositionCount: Scalars['Int'];
  /**  Number of lending positions in this market. Note: this is cumulative and strictly increasing  */
  lendingPositionCount: Scalars['Int'];
  /**  Number of borrowing positions in this market. Note: this is cumulative and strictly increasing  */
  borrowingPositionCount: Scalars['Int'];
  /**  Market daily snapshots  */
  dailySnapshots: Array<gnosisPrimaryMarketDailySnapshot>;
  /**  Market hourly snapshots  */
  hourlySnapshots: Array<gnosisPrimaryMarketHourlySnapshot>;
  /**  All deposits made to this market  */
  deposits: Array<gnosisPrimaryDeposit>;
  /**  All withdrawals made from this market  */
  withdraws: Array<gnosisPrimaryWithdraw>;
  /**  All borrows from this market  */
  borrows: Array<gnosisPrimaryBorrow>;
  /**  All repayments to this market  */
  repays: Array<gnosisPrimaryRepay>;
  /**  All liquidations made to this market  */
  liquidates: Array<gnosisPrimaryLiquidate>;
  /**  All transfers made in this market  */
  transfers: Array<gnosisPrimaryTransfer>;
  /**  All flashloans made in this market */
  flashloans: Array<gnosisPrimaryFlashloan>;
  /**  Rewards borrow speed for this market */
  _baseTrackingBorrowSpeed?: Maybe<Scalars['BigInt']>;
  /**  Rewards supply speed for this market */
  _baseTrackingSupplySpeed?: Maybe<Scalars['BigInt']>;
  /**  The variable debt token address correlated to the reserve asset  */
  _vToken?: Maybe<gnosisPrimaryToken>;
  /**  The stable debt token address correlated to the reserve asset  */
  _sToken?: Maybe<gnosisPrimaryToken>;
  /**  The state of the protocol prior to being paused (isActive / canUseAsCollateral / canBorrowFrom)  */
  _prePauseState?: Maybe<Array<Scalars['Boolean']>>;
  /**  Aux: Timestamp of the last time rewards were calculated for this market.  */
  _lastRewardsUpdated?: Maybe<Scalars['BigInt']>;
  /**  proportion of liquidation bonus (liquidation penalty) going to the protocol  */
  _liquidationProtocolFee?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  _siloedBorrowing?: Maybe<Scalars['Boolean']>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type gnosisPrimaryMarketrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryRewardToken_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryRewardToken_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type gnosisPrimaryMarketratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryInterestRate_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryInterestRate_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type gnosisPrimaryMarketpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryPosition_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryPosition_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type gnosisPrimaryMarketdailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryMarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryMarketDailySnapshot_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type gnosisPrimaryMarkethourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryMarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryMarketHourlySnapshot_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type gnosisPrimaryMarketdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryDeposit_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryDeposit_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type gnosisPrimaryMarketwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryWithdraw_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryWithdraw_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type gnosisPrimaryMarketborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryBorrow_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryBorrow_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type gnosisPrimaryMarketrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryRepay_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryRepay_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type gnosisPrimaryMarketliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryLiquidate_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryLiquidate_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type gnosisPrimaryMarkettransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryTransfer_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryTransfer_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type gnosisPrimaryMarketflashloansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryFlashloan_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryFlashloan_filter>;
};

export type gnosisPrimaryMarketDailySnapshot = {
  /**  { Smart contract address of the market }{ # of days since Unix epoch time }  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Number of days since Unix epoch time  */
  days: Scalars['Int'];
  /**  The protocol this snapshot belongs to  */
  protocol: gnosisPrimaryLendingProtocol;
  /**  The pool this snapshot belongs to  */
  market: gnosisPrimaryMarket;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  A unique identifier that can relate multiple markets together. e.g. a common address that they all share. This is useful for markets with multiple input tokens  */
  relation?: Maybe<Scalars['gnosisPrimaryBytes']>;
  /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<gnosisPrimaryRewardToken>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /**  Total supply of output tokens that are staked. Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
  /**  Amount of input token in the market (same order as inputTokens)  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Prices in USD of the input token (same order as inputTokens)  */
  inputTokenPriceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total supply of output token (same order as outputTokens)  */
  outputTokenSupply?: Maybe<Scalars['BigInt']>;
  /**  Prices in USD of the output token (same order as outputTokens)  */
  outputTokenPriceUSD?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  Amount of input token per full share of output token. Only applies when the output token exists (note this is a ratio and not a percentage value, i.e. 1.05 instead of 105%)  */
  exchangeRate?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  All interest rates for this input token. Should be in APR format  */
  rates?: Maybe<Array<gnosisPrimaryInterestRate>>;
  /**  Total amount of reserves (in USD)  */
  reserves?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  The amount of revenue that is converted to reserves at the current time. 20% reserve factor should be in format 0.20  */
  reserveFactor?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  Amount of input tokens borrowed in this market using variable interest rates (in native terms)  */
  variableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
  /**  Amount of input tokens borrowed in this market using stable interest rates (in native terms)  */
  stableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
  /**  Allowed limit to how much of the underlying asset can be supplied to this market.  */
  supplyCap?: Maybe<Scalars['BigInt']>;
  /**  Allowed limit for how much of the underlying asset can be borrowed from this market.  */
  borrowCap?: Maybe<Scalars['BigInt']>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All revenue generated by the market, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Daily revenue generated by the market, accrued to the supply side.  */
  dailySupplySideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All revenue generated by the market, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Daily revenue generated by the market, accrued to the protocol.  */
  dailyProtocolSideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All revenue generated by the market.  */
  cumulativeTotalRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Daily revenue generated by the market.  */
  dailyTotalRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Details of revenue sources and amounts  */
  revenueDetail?: Maybe<gnosisPrimaryRevenueDetail>;
  /**  Current balance of all deposited assets (not historical cumulative), in USD. Same as pool TVL.  */
  totalDepositBalanceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all deposits made on a given day, in USD  */
  dailyDepositUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all the deposits on a given day, in native units  */
  dailyNativeDeposit: Scalars['BigInt'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all borrows/mints made on a given day, in USD  */
  dailyBorrowUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all the borrows on a given day, in native units  */
  dailyNativeBorrow: Scalars['BigInt'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets liquidated on a given day, in USD.  */
  dailyLiquidateUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets liquidated on a given day, in native units.  */
  dailyNativeLiquidate: Scalars['BigInt'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets withdrawn on a given day, in USD.  */
  dailyWithdrawUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets withdrawn on a given day, in native units.  */
  dailyNativeWithdraw: Scalars['BigInt'];
  /**  Total assets repaid on a given day, in USD.  */
  dailyRepayUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets repaid on a given day, in native units.  */
  dailyNativeRepay: Scalars['BigInt'];
  /**  Total assets transferred on a given day, in USD.  */
  dailyTransferUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets transferred on a given day, in native units.  */
  dailyNativeTransfer: Scalars['BigInt'];
  /**  Sum of all historical transfers in USD  */
  cumulativeTransferUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets flashloaned on a given day, in USD.  */
  dailyFlashloanUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets flashloaned on a given day, in native units.  */
  dailyNativeFlashloan: Scalars['BigInt'];
  /**  Sum of all historical flashloans in USD  */
  cumulativeFlashloanUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Number of unique daily active users. e.g. accounts that spent gas to interact with this market  */
  dailyActiveUsers: Scalars['Int'];
  /**  Number of unique daily depositors  */
  dailyActiveDepositors: Scalars['Int'];
  /**  Number of unique daily borrowers  */
  dailyActiveBorrowers: Scalars['Int'];
  /**  Number of unique daily liquidators (accounts that performed liquidation)  */
  dailyActiveLiquidators: Scalars['Int'];
  /**  Number of unique daily liquidatees (accounts that got liquidated)  */
  dailyActiveLiquidatees: Scalars['Int'];
  /**  Number of unique daily transferrers (the sender in a Transfer)  */
  dailyActiveTransferrers: Scalars['Int'];
  /**  Number of unique daily accounts that executed a flash loan */
  dailyActiveFlashloaners: Scalars['Int'];
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
  /**  Total number of transfers in a day  */
  dailyTransferCount: Scalars['Int'];
  /**  Total number of flashloans in a day  */
  dailyFlashloanCount: Scalars['Int'];
  /**  Number of positions in this market  */
  positionCount: Scalars['Int'];
  /**  Number of open positions in this market  */
  openPositionCount: Scalars['Int'];
  /**  Number of closed positions in this market  */
  closedPositionCount: Scalars['Int'];
  /**  Number of lending positions in this market. Note: this is cumulative and strictly increasing  */
  lendingPositionCount: Scalars['Int'];
  /**  Total number of lending positions touched in a day. This includes opening, closing, and modifying positions.  */
  dailyActiveLendingPositionCount: Scalars['Int'];
  /**  Number of borrowing positions in this market. Note: this is cumulative and strictly increasing  */
  borrowingPositionCount: Scalars['Int'];
  /**  Total number of borrow positions touched in a day. This includes opening, closing, and modifying positions.  */
  dailyActiveBorrowingPositionCount: Scalars['Int'];
};


export type gnosisPrimaryMarketDailySnapshotrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryRewardToken_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryRewardToken_filter>;
};


export type gnosisPrimaryMarketDailySnapshotratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryInterestRate_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryInterestRate_filter>;
};

export type gnosisPrimaryMarketDailySnapshot_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  days?: InputMaybe<Scalars['Int']>;
  days_not?: InputMaybe<Scalars['Int']>;
  days_gt?: InputMaybe<Scalars['Int']>;
  days_lt?: InputMaybe<Scalars['Int']>;
  days_gte?: InputMaybe<Scalars['Int']>;
  days_lte?: InputMaybe<Scalars['Int']>;
  days_in?: InputMaybe<Array<Scalars['Int']>>;
  days_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  protocol_?: InputMaybe<gnosisPrimaryLendingProtocol_filter>;
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
  market_?: InputMaybe<gnosisPrimaryMarket_filter>;
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
  relation?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  relation_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  relation_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  rewardTokens?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_?: InputMaybe<gnosisPrimaryRewardToken_filter>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenPriceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_?: InputMaybe<gnosisPrimaryInterestRate_filter>;
  reserves?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  reserves_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  reserveFactor?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserveFactor_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserveFactor_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserveFactor_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserveFactor_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserveFactor_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserveFactor_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  reserveFactor_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  variableBorrowedTokenBalance?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableBorrowedTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableBorrowedTokenBalance?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableBorrowedTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supplyCap?: InputMaybe<Scalars['BigInt']>;
  supplyCap_not?: InputMaybe<Scalars['BigInt']>;
  supplyCap_gt?: InputMaybe<Scalars['BigInt']>;
  supplyCap_lt?: InputMaybe<Scalars['BigInt']>;
  supplyCap_gte?: InputMaybe<Scalars['BigInt']>;
  supplyCap_lte?: InputMaybe<Scalars['BigInt']>;
  supplyCap_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supplyCap_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowCap?: InputMaybe<Scalars['BigInt']>;
  borrowCap_not?: InputMaybe<Scalars['BigInt']>;
  borrowCap_gt?: InputMaybe<Scalars['BigInt']>;
  borrowCap_lt?: InputMaybe<Scalars['BigInt']>;
  borrowCap_gte?: InputMaybe<Scalars['BigInt']>;
  borrowCap_lte?: InputMaybe<Scalars['BigInt']>;
  borrowCap_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowCap_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  revenueDetail?: InputMaybe<Scalars['String']>;
  revenueDetail_not?: InputMaybe<Scalars['String']>;
  revenueDetail_gt?: InputMaybe<Scalars['String']>;
  revenueDetail_lt?: InputMaybe<Scalars['String']>;
  revenueDetail_gte?: InputMaybe<Scalars['String']>;
  revenueDetail_lte?: InputMaybe<Scalars['String']>;
  revenueDetail_in?: InputMaybe<Array<Scalars['String']>>;
  revenueDetail_not_in?: InputMaybe<Array<Scalars['String']>>;
  revenueDetail_contains?: InputMaybe<Scalars['String']>;
  revenueDetail_contains_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_not_contains?: InputMaybe<Scalars['String']>;
  revenueDetail_not_contains_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_starts_with?: InputMaybe<Scalars['String']>;
  revenueDetail_starts_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_not_starts_with?: InputMaybe<Scalars['String']>;
  revenueDetail_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_ends_with?: InputMaybe<Scalars['String']>;
  revenueDetail_ends_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_not_ends_with?: InputMaybe<Scalars['String']>;
  revenueDetail_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_?: InputMaybe<gnosisPrimaryRevenueDetail_filter>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyDepositUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyDepositUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyDepositUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyDepositUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyDepositUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyDepositUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyDepositUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyDepositUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyNativeDeposit?: InputMaybe<Scalars['BigInt']>;
  dailyNativeDeposit_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyBorrowUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyBorrowUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyBorrowUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyBorrowUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyBorrowUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyBorrowUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyBorrowUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyBorrowUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyNativeBorrow?: InputMaybe<Scalars['BigInt']>;
  dailyNativeBorrow_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeBorrow_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeBorrow_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeBorrow_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeBorrow_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeBorrow_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeBorrow_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyLiquidateUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyLiquidateUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyLiquidateUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyLiquidateUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyLiquidateUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyLiquidateUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyLiquidateUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyNativeLiquidate?: InputMaybe<Scalars['BigInt']>;
  dailyNativeLiquidate_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeLiquidate_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeLiquidate_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeLiquidate_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeLiquidate_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeLiquidate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeLiquidate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyWithdrawUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyWithdrawUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyWithdrawUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyWithdrawUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyWithdrawUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyWithdrawUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyWithdrawUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyWithdrawUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyNativeWithdraw?: InputMaybe<Scalars['BigInt']>;
  dailyNativeWithdraw_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeWithdraw_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeWithdraw_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeWithdraw_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeWithdraw_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeWithdraw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeWithdraw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyRepayUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyRepayUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyRepayUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyRepayUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyRepayUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyRepayUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyRepayUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyRepayUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyNativeRepay?: InputMaybe<Scalars['BigInt']>;
  dailyNativeRepay_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeRepay_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeRepay_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeRepay_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeRepay_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeRepay_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeRepay_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransferUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTransferUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTransferUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTransferUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTransferUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTransferUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyTransferUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyTransferUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyNativeTransfer?: InputMaybe<Scalars['BigInt']>;
  dailyNativeTransfer_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeTransfer_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeTransfer_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeTransfer_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeTransfer_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeTransfer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeTransfer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeTransferUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTransferUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTransferUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTransferUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTransferUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTransferUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTransferUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTransferUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyFlashloanUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyFlashloanUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyFlashloanUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyFlashloanUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyFlashloanUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyFlashloanUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  dailyFlashloanUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyFlashloanUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyNativeFlashloan?: InputMaybe<Scalars['BigInt']>;
  dailyNativeFlashloan_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeFlashloan_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeFlashloan_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeFlashloan_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeFlashloan_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeFlashloan_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeFlashloan_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeFlashloanUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeFlashloanUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  dailyActiveUsers?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_not?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveDepositors?: InputMaybe<Scalars['Int']>;
  dailyActiveDepositors_not?: InputMaybe<Scalars['Int']>;
  dailyActiveDepositors_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveDepositors_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveDepositors_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveDepositors_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveDepositors_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveDepositors_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveBorrowers?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowers_not?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowers_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowers_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowers_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowers_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowers_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveBorrowers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveLiquidators?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidators_not?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidators_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidators_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidators_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidators_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidators_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveLiquidators_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveLiquidatees?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidatees_not?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidatees_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidatees_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidatees_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidatees_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveLiquidatees_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveLiquidatees_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveTransferrers?: InputMaybe<Scalars['Int']>;
  dailyActiveTransferrers_not?: InputMaybe<Scalars['Int']>;
  dailyActiveTransferrers_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveTransferrers_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveTransferrers_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveTransferrers_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveTransferrers_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveTransferrers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveFlashloaners?: InputMaybe<Scalars['Int']>;
  dailyActiveFlashloaners_not?: InputMaybe<Scalars['Int']>;
  dailyActiveFlashloaners_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveFlashloaners_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveFlashloaners_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveFlashloaners_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveFlashloaners_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveFlashloaners_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  dailyTransferCount?: InputMaybe<Scalars['Int']>;
  dailyTransferCount_not?: InputMaybe<Scalars['Int']>;
  dailyTransferCount_gt?: InputMaybe<Scalars['Int']>;
  dailyTransferCount_lt?: InputMaybe<Scalars['Int']>;
  dailyTransferCount_gte?: InputMaybe<Scalars['Int']>;
  dailyTransferCount_lte?: InputMaybe<Scalars['Int']>;
  dailyTransferCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyTransferCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyFlashloanCount?: InputMaybe<Scalars['Int']>;
  dailyFlashloanCount_not?: InputMaybe<Scalars['Int']>;
  dailyFlashloanCount_gt?: InputMaybe<Scalars['Int']>;
  dailyFlashloanCount_lt?: InputMaybe<Scalars['Int']>;
  dailyFlashloanCount_gte?: InputMaybe<Scalars['Int']>;
  dailyFlashloanCount_lte?: InputMaybe<Scalars['Int']>;
  dailyFlashloanCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyFlashloanCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  dailyActiveLendingPositionCount?: InputMaybe<Scalars['Int']>;
  dailyActiveLendingPositionCount_not?: InputMaybe<Scalars['Int']>;
  dailyActiveLendingPositionCount_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveLendingPositionCount_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveLendingPositionCount_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveLendingPositionCount_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveLendingPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveLendingPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowingPositionCount?: InputMaybe<Scalars['Int']>;
  borrowingPositionCount_not?: InputMaybe<Scalars['Int']>;
  borrowingPositionCount_gt?: InputMaybe<Scalars['Int']>;
  borrowingPositionCount_lt?: InputMaybe<Scalars['Int']>;
  borrowingPositionCount_gte?: InputMaybe<Scalars['Int']>;
  borrowingPositionCount_lte?: InputMaybe<Scalars['Int']>;
  borrowingPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowingPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveBorrowingPositionCount?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowingPositionCount_not?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowingPositionCount_gt?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowingPositionCount_lt?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowingPositionCount_gte?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowingPositionCount_lte?: InputMaybe<Scalars['Int']>;
  dailyActiveBorrowingPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActiveBorrowingPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryMarketDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryMarketDailySnapshot_filter>>>;
};

export type gnosisPrimaryMarketDailySnapshot_orderBy =
  | 'id'
  | 'days'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__protocol'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__lendingType'
  | 'protocol__lenderPermissionType'
  | 'protocol__borrowerPermissionType'
  | 'protocol__poolCreatorPermissionType'
  | 'protocol__riskType'
  | 'protocol__collateralizationType'
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
  | 'protocol__transactionCount'
  | 'protocol__depositCount'
  | 'protocol__withdrawCount'
  | 'protocol__borrowCount'
  | 'protocol__repayCount'
  | 'protocol__liquidationCount'
  | 'protocol__transferCount'
  | 'protocol__flashloanCount'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canBorrowFrom'
  | 'market__canUseAsCollateral'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__canIsolate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__relation'
  | 'market__stakedOutputTokenAmount'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__reserves'
  | 'market__reserveFactor'
  | 'market__variableBorrowedTokenBalance'
  | 'market__stableBorrowedTokenBalance'
  | 'market__indexLastUpdatedTimestamp'
  | 'market__supplyIndex'
  | 'market__supplyCap'
  | 'market__borrowIndex'
  | 'market__borrowCap'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__cumulativeTransferUSD'
  | 'market__cumulativeFlashloanUSD'
  | 'market__transactionCount'
  | 'market__depositCount'
  | 'market__withdrawCount'
  | 'market__borrowCount'
  | 'market__repayCount'
  | 'market__liquidationCount'
  | 'market__transferCount'
  | 'market__flashloanCount'
  | 'market__cumulativeUniqueUsers'
  | 'market__cumulativeUniqueDepositors'
  | 'market__cumulativeUniqueBorrowers'
  | 'market__cumulativeUniqueLiquidators'
  | 'market__cumulativeUniqueLiquidatees'
  | 'market__cumulativeUniqueTransferrers'
  | 'market__cumulativeUniqueFlashloaners'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___baseTrackingBorrowSpeed'
  | 'market___baseTrackingSupplySpeed'
  | 'market___lastRewardsUpdated'
  | 'market___liquidationProtocolFee'
  | 'market___siloedBorrowing'
  | 'blockNumber'
  | 'timestamp'
  | 'relation'
  | 'rewardTokens'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'
  | 'stakedOutputTokenAmount'
  | 'inputTokenBalance'
  | 'inputTokenPriceUSD'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'exchangeRate'
  | 'rates'
  | 'reserves'
  | 'reserveFactor'
  | 'variableBorrowedTokenBalance'
  | 'stableBorrowedTokenBalance'
  | 'supplyCap'
  | 'borrowCap'
  | 'totalValueLockedUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'dailySupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'dailyProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'dailyTotalRevenueUSD'
  | 'revenueDetail'
  | 'revenueDetail__id'
  | 'totalDepositBalanceUSD'
  | 'dailyDepositUSD'
  | 'dailyNativeDeposit'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'dailyBorrowUSD'
  | 'dailyNativeBorrow'
  | 'cumulativeBorrowUSD'
  | 'dailyLiquidateUSD'
  | 'dailyNativeLiquidate'
  | 'cumulativeLiquidateUSD'
  | 'dailyWithdrawUSD'
  | 'dailyNativeWithdraw'
  | 'dailyRepayUSD'
  | 'dailyNativeRepay'
  | 'dailyTransferUSD'
  | 'dailyNativeTransfer'
  | 'cumulativeTransferUSD'
  | 'dailyFlashloanUSD'
  | 'dailyNativeFlashloan'
  | 'cumulativeFlashloanUSD'
  | 'dailyActiveUsers'
  | 'dailyActiveDepositors'
  | 'dailyActiveBorrowers'
  | 'dailyActiveLiquidators'
  | 'dailyActiveLiquidatees'
  | 'dailyActiveTransferrers'
  | 'dailyActiveFlashloaners'
  | 'dailyDepositCount'
  | 'dailyWithdrawCount'
  | 'dailyBorrowCount'
  | 'dailyRepayCount'
  | 'dailyLiquidateCount'
  | 'dailyTransferCount'
  | 'dailyFlashloanCount'
  | 'positionCount'
  | 'openPositionCount'
  | 'closedPositionCount'
  | 'lendingPositionCount'
  | 'dailyActiveLendingPositionCount'
  | 'borrowingPositionCount'
  | 'dailyActiveBorrowingPositionCount';

export type gnosisPrimaryMarketHourlySnapshot = {
  /**  { Smart contract address of the market }{ # of hours since Unix epoch time }  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Number of hours since Unix epoch time  */
  hours: Scalars['Int'];
  /**  The protocol this snapshot belongs to  */
  protocol: gnosisPrimaryLendingProtocol;
  /**  The pool this snapshot belongs to  */
  market: gnosisPrimaryMarket;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  A unique identifier that can relate multiple markets together. e.g. a common address that they all share. This is useful for markets with multiple input tokens  */
  relation?: Maybe<Scalars['gnosisPrimaryBytes']>;
  /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<gnosisPrimaryRewardToken>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /**  Total supply of output tokens that are staked. Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
  /**  Amount of input token in the market (same order as inputTokens)  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Prices in USD of the input token (same order as inputTokens)  */
  inputTokenPriceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total supply of output token (same order as outputTokens)  */
  outputTokenSupply?: Maybe<Scalars['BigInt']>;
  /**  Prices in USD of the output token (same order as outputTokens)  */
  outputTokenPriceUSD?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  Amount of input token per full share of output token. Only applies when the output token exists (note this is a ratio and not a percentage value, i.e. 1.05 instead of 105%)  */
  exchangeRate?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  All interest rates for this input token. Should be in APR format  */
  rates?: Maybe<Array<gnosisPrimaryInterestRate>>;
  /**  Total amount of reserves (in USD)  */
  reserves?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  Amount of input tokens borrowed in this market using variable interest rates (in native terms)  */
  variableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
  /**  Amount of input tokens borrowed in this market using stable interest rates (in native terms)  */
  stableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All revenue generated by the market, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Hourly revenue generated by the market, accrued to the supply side.  */
  hourlySupplySideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All revenue generated by the market, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Hourly revenue generated by the market, accrued to the protocol.  */
  hourlyProtocolSideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All revenue generated by the market.  */
  cumulativeTotalRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Hourly revenue generated by the market.  */
  hourlyTotalRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Current balance of all deposited assets (not historical cumulative), in USD. Same as pool TVL.  */
  totalDepositBalanceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all deposits made in a given hour, in USD  */
  hourlyDepositUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all borrows/mints made in a given hour, in USD  */
  hourlyBorrowUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets liquidated in a given hour, in USD.  */
  hourlyLiquidateUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets withdrawn on a given hour, in USD.  */
  hourlyWithdrawUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets repaid on a given hour, in USD.  */
  hourlyRepayUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets transferred on a given hour, in USD.  */
  hourlyTransferUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total assets flashloaned on a given hour, in USD.  */
  hourlyFlashloanUSD: Scalars['gnosisPrimaryBigDecimal'];
};


export type gnosisPrimaryMarketHourlySnapshotrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryRewardToken_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryRewardToken_filter>;
};


export type gnosisPrimaryMarketHourlySnapshotratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryInterestRate_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryInterestRate_filter>;
};

export type gnosisPrimaryMarketHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hours?: InputMaybe<Scalars['Int']>;
  hours_not?: InputMaybe<Scalars['Int']>;
  hours_gt?: InputMaybe<Scalars['Int']>;
  hours_lt?: InputMaybe<Scalars['Int']>;
  hours_gte?: InputMaybe<Scalars['Int']>;
  hours_lte?: InputMaybe<Scalars['Int']>;
  hours_in?: InputMaybe<Array<Scalars['Int']>>;
  hours_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  protocol_?: InputMaybe<gnosisPrimaryLendingProtocol_filter>;
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
  market_?: InputMaybe<gnosisPrimaryMarket_filter>;
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
  relation?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  relation_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  relation_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  rewardTokens?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_?: InputMaybe<gnosisPrimaryRewardToken_filter>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenPriceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_?: InputMaybe<gnosisPrimaryInterestRate_filter>;
  reserves?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  reserves_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  variableBorrowedTokenBalance?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableBorrowedTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableBorrowedTokenBalance?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableBorrowedTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlySupplySideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlySupplySideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlySupplySideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlySupplySideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlySupplySideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlySupplySideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyProtocolSideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyTotalRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyTotalRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyTotalRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyTotalRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyTotalRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyTotalRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyDepositUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyDepositUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyDepositUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyDepositUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyDepositUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyDepositUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyDepositUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyDepositUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyBorrowUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyBorrowUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyBorrowUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyBorrowUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyBorrowUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyBorrowUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyBorrowUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyBorrowUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyLiquidateUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyLiquidateUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyLiquidateUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyLiquidateUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyLiquidateUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyLiquidateUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyLiquidateUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyWithdrawUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyWithdrawUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyWithdrawUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyWithdrawUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyWithdrawUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyWithdrawUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyWithdrawUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyWithdrawUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyRepayUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyRepayUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyRepayUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyRepayUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyRepayUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyRepayUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyRepayUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyRepayUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyTransferUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyTransferUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyTransferUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyTransferUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyTransferUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyTransferUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyTransferUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyTransferUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyFlashloanUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyFlashloanUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyFlashloanUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyFlashloanUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyFlashloanUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyFlashloanUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  hourlyFlashloanUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  hourlyFlashloanUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryMarketHourlySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryMarketHourlySnapshot_filter>>>;
};

export type gnosisPrimaryMarketHourlySnapshot_orderBy =
  | 'id'
  | 'hours'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__protocol'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__lendingType'
  | 'protocol__lenderPermissionType'
  | 'protocol__borrowerPermissionType'
  | 'protocol__poolCreatorPermissionType'
  | 'protocol__riskType'
  | 'protocol__collateralizationType'
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
  | 'protocol__transactionCount'
  | 'protocol__depositCount'
  | 'protocol__withdrawCount'
  | 'protocol__borrowCount'
  | 'protocol__repayCount'
  | 'protocol__liquidationCount'
  | 'protocol__transferCount'
  | 'protocol__flashloanCount'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canBorrowFrom'
  | 'market__canUseAsCollateral'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__canIsolate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__relation'
  | 'market__stakedOutputTokenAmount'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__reserves'
  | 'market__reserveFactor'
  | 'market__variableBorrowedTokenBalance'
  | 'market__stableBorrowedTokenBalance'
  | 'market__indexLastUpdatedTimestamp'
  | 'market__supplyIndex'
  | 'market__supplyCap'
  | 'market__borrowIndex'
  | 'market__borrowCap'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__cumulativeTransferUSD'
  | 'market__cumulativeFlashloanUSD'
  | 'market__transactionCount'
  | 'market__depositCount'
  | 'market__withdrawCount'
  | 'market__borrowCount'
  | 'market__repayCount'
  | 'market__liquidationCount'
  | 'market__transferCount'
  | 'market__flashloanCount'
  | 'market__cumulativeUniqueUsers'
  | 'market__cumulativeUniqueDepositors'
  | 'market__cumulativeUniqueBorrowers'
  | 'market__cumulativeUniqueLiquidators'
  | 'market__cumulativeUniqueLiquidatees'
  | 'market__cumulativeUniqueTransferrers'
  | 'market__cumulativeUniqueFlashloaners'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___baseTrackingBorrowSpeed'
  | 'market___baseTrackingSupplySpeed'
  | 'market___lastRewardsUpdated'
  | 'market___liquidationProtocolFee'
  | 'market___siloedBorrowing'
  | 'blockNumber'
  | 'timestamp'
  | 'relation'
  | 'rewardTokens'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'
  | 'stakedOutputTokenAmount'
  | 'inputTokenBalance'
  | 'inputTokenPriceUSD'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'exchangeRate'
  | 'rates'
  | 'reserves'
  | 'variableBorrowedTokenBalance'
  | 'stableBorrowedTokenBalance'
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
  | 'hourlyTransferUSD'
  | 'hourlyFlashloanUSD';

export type gnosisPrimaryMarket_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  protocol_?: InputMaybe<gnosisPrimaryLendingProtocol_filter>;
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
  canBorrowFrom?: InputMaybe<Scalars['Boolean']>;
  canBorrowFrom_not?: InputMaybe<Scalars['Boolean']>;
  canBorrowFrom_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canBorrowFrom_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canUseAsCollateral?: InputMaybe<Scalars['Boolean']>;
  canUseAsCollateral_not?: InputMaybe<Scalars['Boolean']>;
  canUseAsCollateral_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canUseAsCollateral_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  maximumLTV?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  maximumLTV_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  maximumLTV_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  maximumLTV_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  maximumLTV_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  maximumLTV_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  maximumLTV_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  maximumLTV_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  liquidationThreshold?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  liquidationThreshold_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  liquidationThreshold_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  liquidationThreshold_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  liquidationThreshold_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  liquidationThreshold_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  liquidationThreshold_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  liquidationThreshold_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  liquidationPenalty?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  liquidationPenalty_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  liquidationPenalty_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  liquidationPenalty_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  liquidationPenalty_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  liquidationPenalty_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  liquidationPenalty_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  liquidationPenalty_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  canIsolate?: InputMaybe<Scalars['Boolean']>;
  canIsolate_not?: InputMaybe<Scalars['Boolean']>;
  canIsolate_in?: InputMaybe<Array<Scalars['Boolean']>>;
  canIsolate_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
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
  oracle?: InputMaybe<Scalars['String']>;
  oracle_not?: InputMaybe<Scalars['String']>;
  oracle_gt?: InputMaybe<Scalars['String']>;
  oracle_lt?: InputMaybe<Scalars['String']>;
  oracle_gte?: InputMaybe<Scalars['String']>;
  oracle_lte?: InputMaybe<Scalars['String']>;
  oracle_in?: InputMaybe<Array<Scalars['String']>>;
  oracle_not_in?: InputMaybe<Array<Scalars['String']>>;
  oracle_contains?: InputMaybe<Scalars['String']>;
  oracle_contains_nocase?: InputMaybe<Scalars['String']>;
  oracle_not_contains?: InputMaybe<Scalars['String']>;
  oracle_not_contains_nocase?: InputMaybe<Scalars['String']>;
  oracle_starts_with?: InputMaybe<Scalars['String']>;
  oracle_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oracle_not_starts_with?: InputMaybe<Scalars['String']>;
  oracle_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  oracle_ends_with?: InputMaybe<Scalars['String']>;
  oracle_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oracle_not_ends_with?: InputMaybe<Scalars['String']>;
  oracle_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  oracle_?: InputMaybe<gnosisPrimaryOracle_filter>;
  relation?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  relation_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  relation_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  relation_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  rewardTokens?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_?: InputMaybe<gnosisPrimaryRewardToken_filter>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>;
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  inputToken_?: InputMaybe<gnosisPrimaryToken_filter>;
  inputTokenBalance?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenPriceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
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
  outputToken_?: InputMaybe<gnosisPrimaryToken_filter>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_?: InputMaybe<gnosisPrimaryInterestRate_filter>;
  reserves?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserves_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  reserves_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  reserveFactor?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserveFactor_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserveFactor_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserveFactor_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserveFactor_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserveFactor_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  reserveFactor_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  reserveFactor_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  borrowedToken?: InputMaybe<Scalars['String']>;
  borrowedToken_not?: InputMaybe<Scalars['String']>;
  borrowedToken_gt?: InputMaybe<Scalars['String']>;
  borrowedToken_lt?: InputMaybe<Scalars['String']>;
  borrowedToken_gte?: InputMaybe<Scalars['String']>;
  borrowedToken_lte?: InputMaybe<Scalars['String']>;
  borrowedToken_in?: InputMaybe<Array<Scalars['String']>>;
  borrowedToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  borrowedToken_contains?: InputMaybe<Scalars['String']>;
  borrowedToken_contains_nocase?: InputMaybe<Scalars['String']>;
  borrowedToken_not_contains?: InputMaybe<Scalars['String']>;
  borrowedToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  borrowedToken_starts_with?: InputMaybe<Scalars['String']>;
  borrowedToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  borrowedToken_not_starts_with?: InputMaybe<Scalars['String']>;
  borrowedToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  borrowedToken_ends_with?: InputMaybe<Scalars['String']>;
  borrowedToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  borrowedToken_not_ends_with?: InputMaybe<Scalars['String']>;
  borrowedToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  borrowedToken_?: InputMaybe<gnosisPrimaryToken_filter>;
  variableBorrowedTokenBalance?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  variableBorrowedTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  variableBorrowedTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableBorrowedTokenBalance?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  stableBorrowedTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stableBorrowedTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexLastUpdatedTimestamp?: InputMaybe<Scalars['BigInt']>;
  indexLastUpdatedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  indexLastUpdatedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  indexLastUpdatedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  indexLastUpdatedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  indexLastUpdatedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  indexLastUpdatedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  indexLastUpdatedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supplyIndex?: InputMaybe<Scalars['BigInt']>;
  supplyIndex_not?: InputMaybe<Scalars['BigInt']>;
  supplyIndex_gt?: InputMaybe<Scalars['BigInt']>;
  supplyIndex_lt?: InputMaybe<Scalars['BigInt']>;
  supplyIndex_gte?: InputMaybe<Scalars['BigInt']>;
  supplyIndex_lte?: InputMaybe<Scalars['BigInt']>;
  supplyIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supplyIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supplyCap?: InputMaybe<Scalars['BigInt']>;
  supplyCap_not?: InputMaybe<Scalars['BigInt']>;
  supplyCap_gt?: InputMaybe<Scalars['BigInt']>;
  supplyCap_lt?: InputMaybe<Scalars['BigInt']>;
  supplyCap_gte?: InputMaybe<Scalars['BigInt']>;
  supplyCap_lte?: InputMaybe<Scalars['BigInt']>;
  supplyCap_in?: InputMaybe<Array<Scalars['BigInt']>>;
  supplyCap_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowIndex?: InputMaybe<Scalars['BigInt']>;
  borrowIndex_not?: InputMaybe<Scalars['BigInt']>;
  borrowIndex_gt?: InputMaybe<Scalars['BigInt']>;
  borrowIndex_lt?: InputMaybe<Scalars['BigInt']>;
  borrowIndex_gte?: InputMaybe<Scalars['BigInt']>;
  borrowIndex_lte?: InputMaybe<Scalars['BigInt']>;
  borrowIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowCap?: InputMaybe<Scalars['BigInt']>;
  borrowCap_not?: InputMaybe<Scalars['BigInt']>;
  borrowCap_gt?: InputMaybe<Scalars['BigInt']>;
  borrowCap_lt?: InputMaybe<Scalars['BigInt']>;
  borrowCap_gte?: InputMaybe<Scalars['BigInt']>;
  borrowCap_lte?: InputMaybe<Scalars['BigInt']>;
  borrowCap_in?: InputMaybe<Array<Scalars['BigInt']>>;
  borrowCap_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  revenueDetail?: InputMaybe<Scalars['String']>;
  revenueDetail_not?: InputMaybe<Scalars['String']>;
  revenueDetail_gt?: InputMaybe<Scalars['String']>;
  revenueDetail_lt?: InputMaybe<Scalars['String']>;
  revenueDetail_gte?: InputMaybe<Scalars['String']>;
  revenueDetail_lte?: InputMaybe<Scalars['String']>;
  revenueDetail_in?: InputMaybe<Array<Scalars['String']>>;
  revenueDetail_not_in?: InputMaybe<Array<Scalars['String']>>;
  revenueDetail_contains?: InputMaybe<Scalars['String']>;
  revenueDetail_contains_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_not_contains?: InputMaybe<Scalars['String']>;
  revenueDetail_not_contains_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_starts_with?: InputMaybe<Scalars['String']>;
  revenueDetail_starts_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_not_starts_with?: InputMaybe<Scalars['String']>;
  revenueDetail_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_ends_with?: InputMaybe<Scalars['String']>;
  revenueDetail_ends_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_not_ends_with?: InputMaybe<Scalars['String']>;
  revenueDetail_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  revenueDetail_?: InputMaybe<gnosisPrimaryRevenueDetail_filter>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTransferUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTransferUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTransferUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTransferUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTransferUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTransferUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTransferUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTransferUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeFlashloanUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeFlashloanUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  transactionCount?: InputMaybe<Scalars['Int']>;
  transactionCount_not?: InputMaybe<Scalars['Int']>;
  transactionCount_gt?: InputMaybe<Scalars['Int']>;
  transactionCount_lt?: InputMaybe<Scalars['Int']>;
  transactionCount_gte?: InputMaybe<Scalars['Int']>;
  transactionCount_lte?: InputMaybe<Scalars['Int']>;
  transactionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  depositCount?: InputMaybe<Scalars['Int']>;
  depositCount_not?: InputMaybe<Scalars['Int']>;
  depositCount_gt?: InputMaybe<Scalars['Int']>;
  depositCount_lt?: InputMaybe<Scalars['Int']>;
  depositCount_gte?: InputMaybe<Scalars['Int']>;
  depositCount_lte?: InputMaybe<Scalars['Int']>;
  depositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  depositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount?: InputMaybe<Scalars['Int']>;
  withdrawCount_not?: InputMaybe<Scalars['Int']>;
  withdrawCount_gt?: InputMaybe<Scalars['Int']>;
  withdrawCount_lt?: InputMaybe<Scalars['Int']>;
  withdrawCount_gte?: InputMaybe<Scalars['Int']>;
  withdrawCount_lte?: InputMaybe<Scalars['Int']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowCount?: InputMaybe<Scalars['Int']>;
  borrowCount_not?: InputMaybe<Scalars['Int']>;
  borrowCount_gt?: InputMaybe<Scalars['Int']>;
  borrowCount_lt?: InputMaybe<Scalars['Int']>;
  borrowCount_gte?: InputMaybe<Scalars['Int']>;
  borrowCount_lte?: InputMaybe<Scalars['Int']>;
  borrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  repayCount?: InputMaybe<Scalars['Int']>;
  repayCount_not?: InputMaybe<Scalars['Int']>;
  repayCount_gt?: InputMaybe<Scalars['Int']>;
  repayCount_lt?: InputMaybe<Scalars['Int']>;
  repayCount_gte?: InputMaybe<Scalars['Int']>;
  repayCount_lte?: InputMaybe<Scalars['Int']>;
  repayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  repayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidationCount?: InputMaybe<Scalars['Int']>;
  liquidationCount_not?: InputMaybe<Scalars['Int']>;
  liquidationCount_gt?: InputMaybe<Scalars['Int']>;
  liquidationCount_lt?: InputMaybe<Scalars['Int']>;
  liquidationCount_gte?: InputMaybe<Scalars['Int']>;
  liquidationCount_lte?: InputMaybe<Scalars['Int']>;
  liquidationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transferCount?: InputMaybe<Scalars['Int']>;
  transferCount_not?: InputMaybe<Scalars['Int']>;
  transferCount_gt?: InputMaybe<Scalars['Int']>;
  transferCount_lt?: InputMaybe<Scalars['Int']>;
  transferCount_gte?: InputMaybe<Scalars['Int']>;
  transferCount_lte?: InputMaybe<Scalars['Int']>;
  transferCount_in?: InputMaybe<Array<Scalars['Int']>>;
  transferCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  flashloanCount?: InputMaybe<Scalars['Int']>;
  flashloanCount_not?: InputMaybe<Scalars['Int']>;
  flashloanCount_gt?: InputMaybe<Scalars['Int']>;
  flashloanCount_lt?: InputMaybe<Scalars['Int']>;
  flashloanCount_gte?: InputMaybe<Scalars['Int']>;
  flashloanCount_lte?: InputMaybe<Scalars['Int']>;
  flashloanCount_in?: InputMaybe<Array<Scalars['Int']>>;
  flashloanCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  cumulativeUniqueTransferrers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueTransferrers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueTransferrers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueTransferrers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueTransferrers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueTransferrers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueTransferrers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueTransferrers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueFlashloaners?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueFlashloaners_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueFlashloaners_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueFlashloaners_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueFlashloaners_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueFlashloaners_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueFlashloaners_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueFlashloaners_not_in?: InputMaybe<Array<Scalars['Int']>>;
  positions_?: InputMaybe<gnosisPrimaryPosition_filter>;
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
  dailySnapshots_?: InputMaybe<gnosisPrimaryMarketDailySnapshot_filter>;
  hourlySnapshots_?: InputMaybe<gnosisPrimaryMarketHourlySnapshot_filter>;
  deposits_?: InputMaybe<gnosisPrimaryDeposit_filter>;
  withdraws_?: InputMaybe<gnosisPrimaryWithdraw_filter>;
  borrows_?: InputMaybe<gnosisPrimaryBorrow_filter>;
  repays_?: InputMaybe<gnosisPrimaryRepay_filter>;
  liquidates_?: InputMaybe<gnosisPrimaryLiquidate_filter>;
  transfers_?: InputMaybe<gnosisPrimaryTransfer_filter>;
  flashloans_?: InputMaybe<gnosisPrimaryFlashloan_filter>;
  _baseTrackingBorrowSpeed?: InputMaybe<Scalars['BigInt']>;
  _baseTrackingBorrowSpeed_not?: InputMaybe<Scalars['BigInt']>;
  _baseTrackingBorrowSpeed_gt?: InputMaybe<Scalars['BigInt']>;
  _baseTrackingBorrowSpeed_lt?: InputMaybe<Scalars['BigInt']>;
  _baseTrackingBorrowSpeed_gte?: InputMaybe<Scalars['BigInt']>;
  _baseTrackingBorrowSpeed_lte?: InputMaybe<Scalars['BigInt']>;
  _baseTrackingBorrowSpeed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _baseTrackingBorrowSpeed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _baseTrackingSupplySpeed?: InputMaybe<Scalars['BigInt']>;
  _baseTrackingSupplySpeed_not?: InputMaybe<Scalars['BigInt']>;
  _baseTrackingSupplySpeed_gt?: InputMaybe<Scalars['BigInt']>;
  _baseTrackingSupplySpeed_lt?: InputMaybe<Scalars['BigInt']>;
  _baseTrackingSupplySpeed_gte?: InputMaybe<Scalars['BigInt']>;
  _baseTrackingSupplySpeed_lte?: InputMaybe<Scalars['BigInt']>;
  _baseTrackingSupplySpeed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _baseTrackingSupplySpeed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  _vToken_?: InputMaybe<gnosisPrimaryToken_filter>;
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
  _sToken_?: InputMaybe<gnosisPrimaryToken_filter>;
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
  _liquidationProtocolFee?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  _liquidationProtocolFee_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  _liquidationProtocolFee_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  _liquidationProtocolFee_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  _liquidationProtocolFee_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  _liquidationProtocolFee_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  _liquidationProtocolFee_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  _liquidationProtocolFee_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  _siloedBorrowing?: InputMaybe<Scalars['Boolean']>;
  _siloedBorrowing_not?: InputMaybe<Scalars['Boolean']>;
  _siloedBorrowing_in?: InputMaybe<Array<Scalars['Boolean']>>;
  _siloedBorrowing_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryMarket_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryMarket_filter>>>;
};

export type gnosisPrimaryMarket_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__protocol'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__lendingType'
  | 'protocol__lenderPermissionType'
  | 'protocol__borrowerPermissionType'
  | 'protocol__poolCreatorPermissionType'
  | 'protocol__riskType'
  | 'protocol__collateralizationType'
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
  | 'protocol__transactionCount'
  | 'protocol__depositCount'
  | 'protocol__withdrawCount'
  | 'protocol__borrowCount'
  | 'protocol__repayCount'
  | 'protocol__liquidationCount'
  | 'protocol__transferCount'
  | 'protocol__flashloanCount'
  | 'name'
  | 'isActive'
  | 'canBorrowFrom'
  | 'canUseAsCollateral'
  | 'maximumLTV'
  | 'liquidationThreshold'
  | 'liquidationPenalty'
  | 'canIsolate'
  | 'createdTimestamp'
  | 'createdBlockNumber'
  | 'oracle'
  | 'oracle__id'
  | 'oracle__oracleAddress'
  | 'oracle__blockCreated'
  | 'oracle__timestampCreated'
  | 'oracle__isActive'
  | 'oracle__isUSD'
  | 'oracle__hashEnded'
  | 'oracle__oracleSource'
  | 'relation'
  | 'rewardTokens'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'
  | 'stakedOutputTokenAmount'
  | 'inputToken'
  | 'inputToken__id'
  | 'inputToken__name'
  | 'inputToken__symbol'
  | 'inputToken__decimals'
  | 'inputToken__lastPriceUSD'
  | 'inputToken__lastPriceBlockNumber'
  | 'inputToken__type'
  | 'inputToken___iavsTokenType'
  | 'inputTokenBalance'
  | 'inputTokenPriceUSD'
  | 'outputToken'
  | 'outputToken__id'
  | 'outputToken__name'
  | 'outputToken__symbol'
  | 'outputToken__decimals'
  | 'outputToken__lastPriceUSD'
  | 'outputToken__lastPriceBlockNumber'
  | 'outputToken__type'
  | 'outputToken___iavsTokenType'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'exchangeRate'
  | 'rates'
  | 'reserves'
  | 'reserveFactor'
  | 'borrowedToken'
  | 'borrowedToken__id'
  | 'borrowedToken__name'
  | 'borrowedToken__symbol'
  | 'borrowedToken__decimals'
  | 'borrowedToken__lastPriceUSD'
  | 'borrowedToken__lastPriceBlockNumber'
  | 'borrowedToken__type'
  | 'borrowedToken___iavsTokenType'
  | 'variableBorrowedTokenBalance'
  | 'stableBorrowedTokenBalance'
  | 'indexLastUpdatedTimestamp'
  | 'supplyIndex'
  | 'supplyCap'
  | 'borrowIndex'
  | 'borrowCap'
  | 'totalValueLockedUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'revenueDetail'
  | 'revenueDetail__id'
  | 'totalDepositBalanceUSD'
  | 'cumulativeDepositUSD'
  | 'totalBorrowBalanceUSD'
  | 'cumulativeBorrowUSD'
  | 'cumulativeLiquidateUSD'
  | 'cumulativeTransferUSD'
  | 'cumulativeFlashloanUSD'
  | 'transactionCount'
  | 'depositCount'
  | 'withdrawCount'
  | 'borrowCount'
  | 'repayCount'
  | 'liquidationCount'
  | 'transferCount'
  | 'flashloanCount'
  | 'cumulativeUniqueUsers'
  | 'cumulativeUniqueDepositors'
  | 'cumulativeUniqueBorrowers'
  | 'cumulativeUniqueLiquidators'
  | 'cumulativeUniqueLiquidatees'
  | 'cumulativeUniqueTransferrers'
  | 'cumulativeUniqueFlashloaners'
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
  | 'transfers'
  | 'flashloans'
  | '_baseTrackingBorrowSpeed'
  | '_baseTrackingSupplySpeed'
  | '_vToken'
  | '_vToken__id'
  | '_vToken__name'
  | '_vToken__symbol'
  | '_vToken__decimals'
  | '_vToken__lastPriceUSD'
  | '_vToken__lastPriceBlockNumber'
  | '_vToken__type'
  | '_vToken___iavsTokenType'
  | '_sToken'
  | '_sToken__id'
  | '_sToken__name'
  | '_sToken__symbol'
  | '_sToken__decimals'
  | '_sToken__lastPriceUSD'
  | '_sToken__lastPriceBlockNumber'
  | '_sToken__type'
  | '_sToken___iavsTokenType'
  | '_prePauseState'
  | '_lastRewardsUpdated'
  | '_liquidationProtocolFee'
  | '_siloedBorrowing';

export type gnosisPrimaryNetwork =
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
  | 'GNOSIS'
  | 'ANDROMEDA'
  | 'BASE';

export type gnosisPrimaryOracle = {
  /**  { Market Address }{ Token Address }  */
  id: Scalars['gnosisPrimaryBytes'];
  oracleAddress: Scalars['gnosisPrimaryBytes'];
  /**  The market that this oracle is used for pricing  */
  market: gnosisPrimaryMarket;
  /**  The block this oracle was adopted for a market  */
  blockCreated: Scalars['BigInt'];
  /**  The timestamp this oracle was adopted for a market  */
  timestampCreated: Scalars['BigInt'];
  /**  Is the Oracle currently used as the source of truth for a market */
  isActive: Scalars['Boolean'];
  /**  True if the oracle returns prices in USD (e.g. generally the other case is the network's native token)  */
  isUSD: Scalars['Boolean'];
  /**  The hash where the oracle was no longer used  */
  hashEnded?: Maybe<Scalars['gnosisPrimaryBytes']>;
  /**  The Protocol that is providing the oracle (nullable if non-standard source) */
  oracleSource?: Maybe<gnosisPrimaryOracleSource>;
};

export type gnosisPrimaryOracleSource =
  | 'UNISWAP'
  | 'BALANCER'
  | 'CHAINLINK'
  | 'YEARN'
  | 'SUSHISWAP'
  | 'CURVE';

export type gnosisPrimaryOracle_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracleAddress?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracleAddress_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracleAddress_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracleAddress_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracleAddress_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracleAddress_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracleAddress_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  oracleAddress_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  oracleAddress_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracleAddress_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  market_?: InputMaybe<gnosisPrimaryMarket_filter>;
  blockCreated?: InputMaybe<Scalars['BigInt']>;
  blockCreated_not?: InputMaybe<Scalars['BigInt']>;
  blockCreated_gt?: InputMaybe<Scalars['BigInt']>;
  blockCreated_lt?: InputMaybe<Scalars['BigInt']>;
  blockCreated_gte?: InputMaybe<Scalars['BigInt']>;
  blockCreated_lte?: InputMaybe<Scalars['BigInt']>;
  blockCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestampCreated?: InputMaybe<Scalars['BigInt']>;
  timestampCreated_not?: InputMaybe<Scalars['BigInt']>;
  timestampCreated_gt?: InputMaybe<Scalars['BigInt']>;
  timestampCreated_lt?: InputMaybe<Scalars['BigInt']>;
  timestampCreated_gte?: InputMaybe<Scalars['BigInt']>;
  timestampCreated_lte?: InputMaybe<Scalars['BigInt']>;
  timestampCreated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestampCreated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isUSD?: InputMaybe<Scalars['Boolean']>;
  isUSD_not?: InputMaybe<Scalars['Boolean']>;
  isUSD_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isUSD_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hashEnded?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashEnded_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashEnded_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashEnded_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashEnded_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashEnded_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashEnded_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hashEnded_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hashEnded_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashEnded_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracleSource?: InputMaybe<gnosisPrimaryOracleSource>;
  oracleSource_not?: InputMaybe<gnosisPrimaryOracleSource>;
  oracleSource_in?: InputMaybe<Array<gnosisPrimaryOracleSource>>;
  oracleSource_not_in?: InputMaybe<Array<gnosisPrimaryOracleSource>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryOracle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryOracle_filter>>>;
};

export type gnosisPrimaryOracle_orderBy =
  | 'id'
  | 'oracleAddress'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canBorrowFrom'
  | 'market__canUseAsCollateral'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__canIsolate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__relation'
  | 'market__stakedOutputTokenAmount'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__reserves'
  | 'market__reserveFactor'
  | 'market__variableBorrowedTokenBalance'
  | 'market__stableBorrowedTokenBalance'
  | 'market__indexLastUpdatedTimestamp'
  | 'market__supplyIndex'
  | 'market__supplyCap'
  | 'market__borrowIndex'
  | 'market__borrowCap'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__cumulativeTransferUSD'
  | 'market__cumulativeFlashloanUSD'
  | 'market__transactionCount'
  | 'market__depositCount'
  | 'market__withdrawCount'
  | 'market__borrowCount'
  | 'market__repayCount'
  | 'market__liquidationCount'
  | 'market__transferCount'
  | 'market__flashloanCount'
  | 'market__cumulativeUniqueUsers'
  | 'market__cumulativeUniqueDepositors'
  | 'market__cumulativeUniqueBorrowers'
  | 'market__cumulativeUniqueLiquidators'
  | 'market__cumulativeUniqueLiquidatees'
  | 'market__cumulativeUniqueTransferrers'
  | 'market__cumulativeUniqueFlashloaners'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___baseTrackingBorrowSpeed'
  | 'market___baseTrackingSupplySpeed'
  | 'market___lastRewardsUpdated'
  | 'market___liquidationProtocolFee'
  | 'market___siloedBorrowing'
  | 'blockCreated'
  | 'timestampCreated'
  | 'isActive'
  | 'isUSD'
  | 'hashEnded'
  | 'oracleSource';

/** Defines the order direction, either ascending or descending */
export type gnosisPrimaryOrderDirection =
  | 'asc'
  | 'desc';

export type gnosisPrimaryPermissionType =
  /**  Only users that have been whitelisted can interact. e.g. Only approved institutions can borrow  */
  | 'WHITELIST_ONLY'
  /**  To interact a user must be KYC'd  */
  | 'PERMISSIONED'
  /**  Protocols that do not KYC. Can be used by any account  */
  | 'PERMISSIONLESS'
  /**  Only the protocol admin address can make do the defined actions  */
  | 'ADMIN';

export type gnosisPrimaryPosition = {
  /**  { Account address }-{ Market address }-{ Position Side }-{ Optional: Interest Rate Type}-{ Counter }  */
  id: Scalars['ID'];
  /**  Account that owns this position  */
  account: gnosisPrimaryAccount;
  /**  The market in which this position was opened  */
  market: gnosisPrimaryMarket;
  /**  The asset in which this position was opened with  */
  asset: gnosisPrimaryToken;
  /**  The hash of the transaction that opened this position  */
  hashOpened: Scalars['gnosisPrimaryBytes'];
  /**  The hash of the transaction that closed this position  */
  hashClosed?: Maybe<Scalars['gnosisPrimaryBytes']>;
  /**  Block number of when the position was opened  */
  blockNumberOpened: Scalars['BigInt'];
  /**  Timestamp when the position was opened  */
  timestampOpened: Scalars['BigInt'];
  /**  Block number of when the position was closed (0 if still open)  */
  blockNumberClosed?: Maybe<Scalars['BigInt']>;
  /**  Timestamp when the position was closed (0 if still open)  */
  timestampClosed?: Maybe<Scalars['BigInt']>;
  /**  Side of the position (either lender or borrower)  */
  side: gnosisPrimaryPositionSide;
  /**  Type of interest rate used for this position (stable or variable). Generally for borrow side positions. */
  type?: Maybe<gnosisPrimaryInterestRateType>;
  /**  Whether this position has been enabled as a collateral (only applies to LENDER positions). For protocols (e.g. MakerDAO) that doesn't require enabling explicitly, this will always be true.  */
  isCollateral?: Maybe<Scalars['Boolean']>;
  /**  Whether this position is being isolated from risk from other positions (only applies to LENDER positions). For protocols (e.g. Aave V3) this reduces risk exposure from other user positions.  */
  isIsolated?: Maybe<Scalars['Boolean']>;
  /**  Token balance in this position, in native amounts  */
  balance: Scalars['BigInt'];
  /**  The token balance of this position without interest generated (Used to calculate interest generated on a position)  */
  principal?: Maybe<Scalars['BigInt']>;
  /**  Number of deposits related to this position  */
  depositCount: Scalars['Int'];
  /**  All deposit events of this position  */
  deposits: Array<gnosisPrimaryDeposit>;
  /**  Number of withdrawals related to this position  */
  withdrawCount: Scalars['Int'];
  /**  All withdraw events of this position  */
  withdraws: Array<gnosisPrimaryWithdraw>;
  /**  Number of borrows related to this position  */
  borrowCount: Scalars['Int'];
  /**  All borrow events of this position  */
  borrows: Array<gnosisPrimaryBorrow>;
  /**  Number of repays related to this position  */
  repayCount: Scalars['Int'];
  /**  All repay events of this position  */
  repays: Array<gnosisPrimaryRepay>;
  /**  Number of liquidations related to this position (incremented when this position is liquidated)  */
  liquidationCount: Scalars['Int'];
  /**  Liquidation event related to this position (if exists)  */
  liquidations: Array<gnosisPrimaryLiquidate>;
  /**  Number of times this position has transferred  */
  transferredCount: Scalars['Int'];
  /**  Number of times this position has received a transfer  */
  receivedCount: Scalars['Int'];
  /**  All transfer events related to this position  */
  transfers: Array<gnosisPrimaryTransfer>;
  /**  Position daily snapshots for open positions  */
  snapshots: Array<gnosisPrimaryPositionSnapshot>;
  /**  efficient mode flag  */
  _eMode?: Maybe<Scalars['Boolean']>;
};


export type gnosisPrimaryPositiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryDeposit_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryDeposit_filter>;
};


export type gnosisPrimaryPositionwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryWithdraw_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryWithdraw_filter>;
};


export type gnosisPrimaryPositionborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryBorrow_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryBorrow_filter>;
};


export type gnosisPrimaryPositionrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryRepay_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryRepay_filter>;
};


export type gnosisPrimaryPositionliquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryLiquidate_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryLiquidate_filter>;
};


export type gnosisPrimaryPositiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryTransfer_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryTransfer_filter>;
};


export type gnosisPrimaryPositionsnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryPositionSnapshot_filter>;
};

export type gnosisPrimaryPositionSide =
  /**  Position opened as a lender (used as collateral)  */
  | 'COLLATERAL'
  /**  Position opened as a borrower  */
  | 'BORROWER';

export type gnosisPrimaryPositionSnapshot = {
  /**  { Position ID }-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that triggered this snapshot  */
  hash: Scalars['gnosisPrimaryBytes'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Nonce of the transaction that triggered this snapshot  */
  nonce: Scalars['BigInt'];
  /**  Account that owns this position  */
  account: gnosisPrimaryAccount;
  /**  Position of this snapshot  */
  position: gnosisPrimaryPosition;
  /**  Token balance in this position, in native amounts  */
  balance: Scalars['BigInt'];
  /**  Token balance in this position, in USD  */
  balanceUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  The principal value without interest accrued. Used to calculate interest per position.  */
  principal?: Maybe<Scalars['BigInt']>;
  /**  Base borrow OR supply index (based on the position side). Used to calculate interest across snapshots.  */
  index?: Maybe<Scalars['BigInt']>;
};

export type gnosisPrimaryPositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  account_?: InputMaybe<gnosisPrimaryAccount_filter>;
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
  position_?: InputMaybe<gnosisPrimaryPosition_filter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  balanceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  balanceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  balanceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  balanceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  balanceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  balanceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  balanceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
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
  principal?: InputMaybe<Scalars['BigInt']>;
  principal_not?: InputMaybe<Scalars['BigInt']>;
  principal_gt?: InputMaybe<Scalars['BigInt']>;
  principal_lt?: InputMaybe<Scalars['BigInt']>;
  principal_gte?: InputMaybe<Scalars['BigInt']>;
  principal_lte?: InputMaybe<Scalars['BigInt']>;
  principal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  principal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryPositionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryPositionSnapshot_filter>>>;
};

export type gnosisPrimaryPositionSnapshot_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'nonce'
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
  | 'account__transferredCount'
  | 'account__receivedCount'
  | 'account__flashloanCount'
  | 'account__rewardsClaimedUSD'
  | 'account___eMode'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__side'
  | 'position__type'
  | 'position__isCollateral'
  | 'position__isIsolated'
  | 'position__balance'
  | 'position__principal'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'position__borrowCount'
  | 'position__repayCount'
  | 'position__liquidationCount'
  | 'position__transferredCount'
  | 'position__receivedCount'
  | 'position___eMode'
  | 'balance'
  | 'balanceUSD'
  | 'blockNumber'
  | 'timestamp'
  | 'principal'
  | 'index';

export type gnosisPrimaryPosition_filter = {
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
  account_?: InputMaybe<gnosisPrimaryAccount_filter>;
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
  market_?: InputMaybe<gnosisPrimaryMarket_filter>;
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
  asset_?: InputMaybe<gnosisPrimaryToken_filter>;
  hashOpened?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashOpened_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashOpened_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashOpened_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashOpened_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashOpened_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashOpened_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hashOpened_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hashOpened_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashOpened_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashClosed?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashClosed_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashClosed_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashClosed_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashClosed_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashClosed_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashClosed_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hashClosed_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hashClosed_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hashClosed_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  side?: InputMaybe<gnosisPrimaryPositionSide>;
  side_not?: InputMaybe<gnosisPrimaryPositionSide>;
  side_in?: InputMaybe<Array<gnosisPrimaryPositionSide>>;
  side_not_in?: InputMaybe<Array<gnosisPrimaryPositionSide>>;
  type?: InputMaybe<gnosisPrimaryInterestRateType>;
  type_not?: InputMaybe<gnosisPrimaryInterestRateType>;
  type_in?: InputMaybe<Array<gnosisPrimaryInterestRateType>>;
  type_not_in?: InputMaybe<Array<gnosisPrimaryInterestRateType>>;
  isCollateral?: InputMaybe<Scalars['Boolean']>;
  isCollateral_not?: InputMaybe<Scalars['Boolean']>;
  isCollateral_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isCollateral_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isIsolated?: InputMaybe<Scalars['Boolean']>;
  isIsolated_not?: InputMaybe<Scalars['Boolean']>;
  isIsolated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isIsolated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  principal?: InputMaybe<Scalars['BigInt']>;
  principal_not?: InputMaybe<Scalars['BigInt']>;
  principal_gt?: InputMaybe<Scalars['BigInt']>;
  principal_lt?: InputMaybe<Scalars['BigInt']>;
  principal_gte?: InputMaybe<Scalars['BigInt']>;
  principal_lte?: InputMaybe<Scalars['BigInt']>;
  principal_in?: InputMaybe<Array<Scalars['BigInt']>>;
  principal_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositCount?: InputMaybe<Scalars['Int']>;
  depositCount_not?: InputMaybe<Scalars['Int']>;
  depositCount_gt?: InputMaybe<Scalars['Int']>;
  depositCount_lt?: InputMaybe<Scalars['Int']>;
  depositCount_gte?: InputMaybe<Scalars['Int']>;
  depositCount_lte?: InputMaybe<Scalars['Int']>;
  depositCount_in?: InputMaybe<Array<Scalars['Int']>>;
  depositCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  deposits_?: InputMaybe<gnosisPrimaryDeposit_filter>;
  withdrawCount?: InputMaybe<Scalars['Int']>;
  withdrawCount_not?: InputMaybe<Scalars['Int']>;
  withdrawCount_gt?: InputMaybe<Scalars['Int']>;
  withdrawCount_lt?: InputMaybe<Scalars['Int']>;
  withdrawCount_gte?: InputMaybe<Scalars['Int']>;
  withdrawCount_lte?: InputMaybe<Scalars['Int']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdraws_?: InputMaybe<gnosisPrimaryWithdraw_filter>;
  borrowCount?: InputMaybe<Scalars['Int']>;
  borrowCount_not?: InputMaybe<Scalars['Int']>;
  borrowCount_gt?: InputMaybe<Scalars['Int']>;
  borrowCount_lt?: InputMaybe<Scalars['Int']>;
  borrowCount_gte?: InputMaybe<Scalars['Int']>;
  borrowCount_lte?: InputMaybe<Scalars['Int']>;
  borrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  borrows_?: InputMaybe<gnosisPrimaryBorrow_filter>;
  repayCount?: InputMaybe<Scalars['Int']>;
  repayCount_not?: InputMaybe<Scalars['Int']>;
  repayCount_gt?: InputMaybe<Scalars['Int']>;
  repayCount_lt?: InputMaybe<Scalars['Int']>;
  repayCount_gte?: InputMaybe<Scalars['Int']>;
  repayCount_lte?: InputMaybe<Scalars['Int']>;
  repayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  repayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  repays_?: InputMaybe<gnosisPrimaryRepay_filter>;
  liquidationCount?: InputMaybe<Scalars['Int']>;
  liquidationCount_not?: InputMaybe<Scalars['Int']>;
  liquidationCount_gt?: InputMaybe<Scalars['Int']>;
  liquidationCount_lt?: InputMaybe<Scalars['Int']>;
  liquidationCount_gte?: InputMaybe<Scalars['Int']>;
  liquidationCount_lte?: InputMaybe<Scalars['Int']>;
  liquidationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidations_?: InputMaybe<gnosisPrimaryLiquidate_filter>;
  transferredCount?: InputMaybe<Scalars['Int']>;
  transferredCount_not?: InputMaybe<Scalars['Int']>;
  transferredCount_gt?: InputMaybe<Scalars['Int']>;
  transferredCount_lt?: InputMaybe<Scalars['Int']>;
  transferredCount_gte?: InputMaybe<Scalars['Int']>;
  transferredCount_lte?: InputMaybe<Scalars['Int']>;
  transferredCount_in?: InputMaybe<Array<Scalars['Int']>>;
  transferredCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  receivedCount?: InputMaybe<Scalars['Int']>;
  receivedCount_not?: InputMaybe<Scalars['Int']>;
  receivedCount_gt?: InputMaybe<Scalars['Int']>;
  receivedCount_lt?: InputMaybe<Scalars['Int']>;
  receivedCount_gte?: InputMaybe<Scalars['Int']>;
  receivedCount_lte?: InputMaybe<Scalars['Int']>;
  receivedCount_in?: InputMaybe<Array<Scalars['Int']>>;
  receivedCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transfers_?: InputMaybe<gnosisPrimaryTransfer_filter>;
  snapshots_?: InputMaybe<gnosisPrimaryPositionSnapshot_filter>;
  _eMode?: InputMaybe<Scalars['Boolean']>;
  _eMode_not?: InputMaybe<Scalars['Boolean']>;
  _eMode_in?: InputMaybe<Array<Scalars['Boolean']>>;
  _eMode_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryPosition_filter>>>;
};

export type gnosisPrimaryPosition_orderBy =
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
  | 'account__transferredCount'
  | 'account__receivedCount'
  | 'account__flashloanCount'
  | 'account__rewardsClaimedUSD'
  | 'account___eMode'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canBorrowFrom'
  | 'market__canUseAsCollateral'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__canIsolate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__relation'
  | 'market__stakedOutputTokenAmount'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__reserves'
  | 'market__reserveFactor'
  | 'market__variableBorrowedTokenBalance'
  | 'market__stableBorrowedTokenBalance'
  | 'market__indexLastUpdatedTimestamp'
  | 'market__supplyIndex'
  | 'market__supplyCap'
  | 'market__borrowIndex'
  | 'market__borrowCap'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__cumulativeTransferUSD'
  | 'market__cumulativeFlashloanUSD'
  | 'market__transactionCount'
  | 'market__depositCount'
  | 'market__withdrawCount'
  | 'market__borrowCount'
  | 'market__repayCount'
  | 'market__liquidationCount'
  | 'market__transferCount'
  | 'market__flashloanCount'
  | 'market__cumulativeUniqueUsers'
  | 'market__cumulativeUniqueDepositors'
  | 'market__cumulativeUniqueBorrowers'
  | 'market__cumulativeUniqueLiquidators'
  | 'market__cumulativeUniqueLiquidatees'
  | 'market__cumulativeUniqueTransferrers'
  | 'market__cumulativeUniqueFlashloaners'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___baseTrackingBorrowSpeed'
  | 'market___baseTrackingSupplySpeed'
  | 'market___lastRewardsUpdated'
  | 'market___liquidationProtocolFee'
  | 'market___siloedBorrowing'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset__type'
  | 'asset___iavsTokenType'
  | 'hashOpened'
  | 'hashClosed'
  | 'blockNumberOpened'
  | 'timestampOpened'
  | 'blockNumberClosed'
  | 'timestampClosed'
  | 'side'
  | 'type'
  | 'isCollateral'
  | 'isIsolated'
  | 'balance'
  | 'principal'
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
  | 'transferredCount'
  | 'receivedCount'
  | 'transfers'
  | 'snapshots'
  | '_eMode';

export type gnosisPrimaryProtocol = {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Base name of the protocol, excluding transformations. e.g. Aave  */
  protocol: Scalars['String'];
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
  network: gnosisPrimaryNetwork;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: gnosisPrimaryProtocolType;
  /**  The specific lending protocol type  */
  lendingType?: Maybe<gnosisPrimaryLendingType>;
  /**  The specific permissions required to lend in this protocol  */
  lenderPermissionType?: Maybe<gnosisPrimaryPermissionType>;
  /**  The specific permissions required to borrow from this protocol  */
  borrowerPermissionType?: Maybe<gnosisPrimaryPermissionType>;
  /**  The specific permissions required to create a pool (market) in this protocol  */
  poolCreatorPermissionType?: Maybe<gnosisPrimaryPermissionType>;
  /**  Risk type of the lending protocol  */
  riskType?: Maybe<gnosisPrimaryRiskType>;
  /**  The way a positions can be collateralized  */
  collateralizationType?: Maybe<gnosisPrimaryCollateralizationType>;
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  Number of cumulative unique users. e.g. accounts that spent gas to interact with this protocol  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['gnosisPrimaryBigDecimal'];
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int'];
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<gnosisPrimaryUsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<gnosisPrimaryUsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<gnosisPrimaryFinancialsDailySnapshot>;
};


export type gnosisPrimaryProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryUsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryUsageMetricsDailySnapshot_filter>;
};


export type gnosisPrimaryProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryUsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryUsageMetricsHourlySnapshot_filter>;
};


export type gnosisPrimaryProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryFinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryFinancialsDailySnapshot_filter>;
};

export type gnosisPrimaryProtocolType =
  | 'EXCHANGE'
  | 'LENDING'
  | 'YIELD'
  | 'BRIDGE'
  | 'GENERIC';

export type gnosisPrimaryProtocol_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  network?: InputMaybe<gnosisPrimaryNetwork>;
  network_not?: InputMaybe<gnosisPrimaryNetwork>;
  network_in?: InputMaybe<Array<gnosisPrimaryNetwork>>;
  network_not_in?: InputMaybe<Array<gnosisPrimaryNetwork>>;
  type?: InputMaybe<gnosisPrimaryProtocolType>;
  type_not?: InputMaybe<gnosisPrimaryProtocolType>;
  type_in?: InputMaybe<Array<gnosisPrimaryProtocolType>>;
  type_not_in?: InputMaybe<Array<gnosisPrimaryProtocolType>>;
  lendingType?: InputMaybe<gnosisPrimaryLendingType>;
  lendingType_not?: InputMaybe<gnosisPrimaryLendingType>;
  lendingType_in?: InputMaybe<Array<gnosisPrimaryLendingType>>;
  lendingType_not_in?: InputMaybe<Array<gnosisPrimaryLendingType>>;
  lenderPermissionType?: InputMaybe<gnosisPrimaryPermissionType>;
  lenderPermissionType_not?: InputMaybe<gnosisPrimaryPermissionType>;
  lenderPermissionType_in?: InputMaybe<Array<gnosisPrimaryPermissionType>>;
  lenderPermissionType_not_in?: InputMaybe<Array<gnosisPrimaryPermissionType>>;
  borrowerPermissionType?: InputMaybe<gnosisPrimaryPermissionType>;
  borrowerPermissionType_not?: InputMaybe<gnosisPrimaryPermissionType>;
  borrowerPermissionType_in?: InputMaybe<Array<gnosisPrimaryPermissionType>>;
  borrowerPermissionType_not_in?: InputMaybe<Array<gnosisPrimaryPermissionType>>;
  poolCreatorPermissionType?: InputMaybe<gnosisPrimaryPermissionType>;
  poolCreatorPermissionType_not?: InputMaybe<gnosisPrimaryPermissionType>;
  poolCreatorPermissionType_in?: InputMaybe<Array<gnosisPrimaryPermissionType>>;
  poolCreatorPermissionType_not_in?: InputMaybe<Array<gnosisPrimaryPermissionType>>;
  riskType?: InputMaybe<gnosisPrimaryRiskType>;
  riskType_not?: InputMaybe<gnosisPrimaryRiskType>;
  riskType_in?: InputMaybe<Array<gnosisPrimaryRiskType>>;
  riskType_not_in?: InputMaybe<Array<gnosisPrimaryRiskType>>;
  collateralizationType?: InputMaybe<gnosisPrimaryCollateralizationType>;
  collateralizationType_not?: InputMaybe<gnosisPrimaryCollateralizationType>;
  collateralizationType_in?: InputMaybe<Array<gnosisPrimaryCollateralizationType>>;
  collateralizationType_not_in?: InputMaybe<Array<gnosisPrimaryCollateralizationType>>;
  totalValueLockedUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  totalPoolCount?: InputMaybe<Scalars['Int']>;
  totalPoolCount_not?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyUsageMetrics_?: InputMaybe<gnosisPrimaryUsageMetricsDailySnapshot_filter>;
  hourlyUsageMetrics_?: InputMaybe<gnosisPrimaryUsageMetricsHourlySnapshot_filter>;
  financialMetrics_?: InputMaybe<gnosisPrimaryFinancialsDailySnapshot_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryProtocol_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryProtocol_filter>>>;
};

export type gnosisPrimaryProtocol_orderBy =
  | 'id'
  | 'protocol'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'lendingType'
  | 'lenderPermissionType'
  | 'borrowerPermissionType'
  | 'poolCreatorPermissionType'
  | 'riskType'
  | 'collateralizationType'
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
  gnosisPrimarytoken?: Maybe<gnosisPrimaryToken>;
  gnosisPrimarytokens: Array<gnosisPrimaryToken>;
  gnosisPrimaryrewardToken?: Maybe<gnosisPrimaryRewardToken>;
  gnosisPrimaryrewardTokens: Array<gnosisPrimaryRewardToken>;
  gnosisPrimaryinterestRate?: Maybe<gnosisPrimaryInterestRate>;
  gnosisPrimaryinterestRates: Array<gnosisPrimaryInterestRate>;
  gnosisPrimaryfee?: Maybe<gnosisPrimaryFee>;
  gnosisPrimaryfees: Array<gnosisPrimaryFee>;
  gnosisPrimaryrevenueDetail?: Maybe<gnosisPrimaryRevenueDetail>;
  gnosisPrimaryrevenueDetails: Array<gnosisPrimaryRevenueDetail>;
  gnosisPrimaryoracle?: Maybe<gnosisPrimaryOracle>;
  gnosisPrimaryoracles: Array<gnosisPrimaryOracle>;
  gnosisPrimarylendingProtocol?: Maybe<gnosisPrimaryLendingProtocol>;
  gnosisPrimarylendingProtocols: Array<gnosisPrimaryLendingProtocol>;
  gnosisPrimarymarketList?: Maybe<gnosisPrimary_MarketList>;
  gnosisPrimarymarketLists: Array<gnosisPrimary_MarketList>;
  gnosisPrimaryusageMetricsDailySnapshot?: Maybe<gnosisPrimaryUsageMetricsDailySnapshot>;
  gnosisPrimaryusageMetricsDailySnapshots: Array<gnosisPrimaryUsageMetricsDailySnapshot>;
  gnosisPrimaryusageMetricsHourlySnapshot?: Maybe<gnosisPrimaryUsageMetricsHourlySnapshot>;
  gnosisPrimaryusageMetricsHourlySnapshots: Array<gnosisPrimaryUsageMetricsHourlySnapshot>;
  gnosisPrimaryfinancialsDailySnapshot?: Maybe<gnosisPrimaryFinancialsDailySnapshot>;
  gnosisPrimaryfinancialsDailySnapshots: Array<gnosisPrimaryFinancialsDailySnapshot>;
  gnosisPrimarymarket?: Maybe<gnosisPrimaryMarket>;
  gnosisPrimarymarkets: Array<gnosisPrimaryMarket>;
  gnosisPrimarymarketDailySnapshot?: Maybe<gnosisPrimaryMarketDailySnapshot>;
  gnosisPrimarymarketDailySnapshots: Array<gnosisPrimaryMarketDailySnapshot>;
  gnosisPrimarymarketHourlySnapshot?: Maybe<gnosisPrimaryMarketHourlySnapshot>;
  gnosisPrimarymarketHourlySnapshots: Array<gnosisPrimaryMarketHourlySnapshot>;
  gnosisPrimaryaccount?: Maybe<gnosisPrimaryAccount>;
  gnosisPrimaryaccounts: Array<gnosisPrimaryAccount>;
  gnosisPrimaryposition?: Maybe<gnosisPrimaryPosition>;
  gnosisPrimarypositions: Array<gnosisPrimaryPosition>;
  gnosisPrimarypositionSnapshot?: Maybe<gnosisPrimaryPositionSnapshot>;
  gnosisPrimarypositionSnapshots: Array<gnosisPrimaryPositionSnapshot>;
  gnosisPrimaryactiveAccount?: Maybe<gnosisPrimary_ActiveAccount>;
  gnosisPrimaryactiveAccounts: Array<gnosisPrimary_ActiveAccount>;
  gnosisPrimarypositionCounter?: Maybe<gnosisPrimary_PositionCounter>;
  gnosisPrimarypositionCounters: Array<gnosisPrimary_PositionCounter>;
  gnosisPrimarydeposit?: Maybe<gnosisPrimaryDeposit>;
  gnosisPrimarydeposits: Array<gnosisPrimaryDeposit>;
  gnosisPrimarywithdraw?: Maybe<gnosisPrimaryWithdraw>;
  gnosisPrimarywithdraws: Array<gnosisPrimaryWithdraw>;
  gnosisPrimaryborrow?: Maybe<gnosisPrimaryBorrow>;
  gnosisPrimaryborrows: Array<gnosisPrimaryBorrow>;
  gnosisPrimaryrepay?: Maybe<gnosisPrimaryRepay>;
  gnosisPrimaryrepays: Array<gnosisPrimaryRepay>;
  gnosisPrimaryliquidate?: Maybe<gnosisPrimaryLiquidate>;
  gnosisPrimaryliquidates: Array<gnosisPrimaryLiquidate>;
  gnosisPrimarytransfer?: Maybe<gnosisPrimaryTransfer>;
  gnosisPrimarytransfers: Array<gnosisPrimaryTransfer>;
  gnosisPrimaryflashloan?: Maybe<gnosisPrimaryFlashloan>;
  gnosisPrimaryflashloans: Array<gnosisPrimaryFlashloan>;
  gnosisPrimarydefaultOracle?: Maybe<gnosisPrimary_DefaultOracle>;
  gnosisPrimarydefaultOracles: Array<gnosisPrimary_DefaultOracle>;
  gnosisPrimaryflashLoanPremium?: Maybe<gnosisPrimary_FlashLoanPremium>;
  gnosisPrimaryflashLoanPremiums: Array<gnosisPrimary_FlashLoanPremium>;
  gnosisPrimaryprotocol?: Maybe<gnosisPrimaryProtocol>;
  gnosisPrimaryprotocols: Array<gnosisPrimaryProtocol>;
  gnosisPrimaryevent?: Maybe<gnosisPrimaryEvent>;
  gnosisPrimaryevents: Array<gnosisPrimaryEvent>;
  /** Access to subgraph metadata */
  gnosisPrimary_meta?: Maybe<gnosisPrimary_Meta_>;
};


export type QuerygnosisPrimarytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryToken_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryToken_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryrewardTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryRewardToken_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryRewardToken_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryinterestRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryinterestRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryInterestRate_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryInterestRate_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryfeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryfeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryFee_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryFee_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryrevenueDetailArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryrevenueDetailsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryRevenueDetail_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryRevenueDetail_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryoracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryoraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryOracle_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryOracle_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarylendingProtocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarylendingProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryLendingProtocol_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryLendingProtocol_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarymarketListArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarymarketListsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimary_MarketList_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimary_MarketList_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryusageMetricsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryUsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryUsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryUsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryUsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryfinancialsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryFinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryFinancialsDailySnapshot_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarymarketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarymarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryMarket_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryMarket_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarymarketDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarymarketDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryMarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryMarketDailySnapshot_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarymarketHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarymarketHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryMarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryMarketHourlySnapshot_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryAccount_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryAccount_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarypositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarypositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryPosition_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryPosition_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarypositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarypositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryPositionSnapshot_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryactiveAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimary_ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimary_ActiveAccount_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarypositionCounterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarypositionCountersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimary_PositionCounter_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimary_PositionCounter_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarydepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarydepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryDeposit_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryDeposit_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarywithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarywithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryWithdraw_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryWithdraw_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryborrowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryBorrow_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryBorrow_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryrepayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryRepay_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryRepay_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryliquidateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryLiquidate_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryLiquidate_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryTransfer_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryTransfer_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryflashloanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryflashloansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryFlashloan_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryFlashloan_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarydefaultOracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimarydefaultOraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimary_DefaultOracle_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimary_DefaultOracle_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryflashLoanPremiumArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryflashLoanPremiumsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimary_FlashLoanPremium_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimary_FlashLoanPremium_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryProtocol_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryProtocol_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryeventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimaryeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryEvent_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryEvent_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type QuerygnosisPrimary_metaArgs = {
  block?: InputMaybe<gnosisPrimaryBlock_height>;
};

export type gnosisPrimaryRepay = gnosisPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['gnosisPrimaryBytes'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Price of gas in this transaction  */
  gasPrice?: Maybe<Scalars['BigInt']>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']>;
  /**  Gas limit of this transaction. e.g. the amount of gas the sender will pay  */
  gasLimit?: Maybe<Scalars['BigInt']>;
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  Account that reduces their debt on this transaction  */
  account: gnosisPrimaryAccount;
  /**  Account that is providing the funds to repay the debt  */
  accountActor?: Maybe<gnosisPrimaryAccount>;
  /**  The market tokens are repaid/burned to  */
  market: gnosisPrimaryMarket;
  /**  The user position changed by this event  */
  position: gnosisPrimaryPosition;
  /**  Token repaid/burned  */
  asset: gnosisPrimaryToken;
  /**  Amount of token repaid/burned in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token repaid/burned in USD  */
  amountUSD: Scalars['gnosisPrimaryBigDecimal'];
};

export type gnosisPrimaryRepay_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  account_?: InputMaybe<gnosisPrimaryAccount_filter>;
  accountActor?: InputMaybe<Scalars['String']>;
  accountActor_not?: InputMaybe<Scalars['String']>;
  accountActor_gt?: InputMaybe<Scalars['String']>;
  accountActor_lt?: InputMaybe<Scalars['String']>;
  accountActor_gte?: InputMaybe<Scalars['String']>;
  accountActor_lte?: InputMaybe<Scalars['String']>;
  accountActor_in?: InputMaybe<Array<Scalars['String']>>;
  accountActor_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountActor_contains?: InputMaybe<Scalars['String']>;
  accountActor_contains_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_contains?: InputMaybe<Scalars['String']>;
  accountActor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  accountActor_starts_with?: InputMaybe<Scalars['String']>;
  accountActor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_starts_with?: InputMaybe<Scalars['String']>;
  accountActor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_ends_with?: InputMaybe<Scalars['String']>;
  accountActor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_ends_with?: InputMaybe<Scalars['String']>;
  accountActor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_?: InputMaybe<gnosisPrimaryAccount_filter>;
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
  market_?: InputMaybe<gnosisPrimaryMarket_filter>;
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
  position_?: InputMaybe<gnosisPrimaryPosition_filter>;
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
  asset_?: InputMaybe<gnosisPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryRepay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryRepay_filter>>>;
};

export type gnosisPrimaryRepay_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'gasPrice'
  | 'gasUsed'
  | 'gasLimit'
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
  | 'account__transferredCount'
  | 'account__receivedCount'
  | 'account__flashloanCount'
  | 'account__rewardsClaimedUSD'
  | 'account___eMode'
  | 'accountActor'
  | 'accountActor__id'
  | 'accountActor__positionCount'
  | 'accountActor__openPositionCount'
  | 'accountActor__closedPositionCount'
  | 'accountActor__depositCount'
  | 'accountActor__withdrawCount'
  | 'accountActor__borrowCount'
  | 'accountActor__repayCount'
  | 'accountActor__liquidateCount'
  | 'accountActor__liquidationCount'
  | 'accountActor__transferredCount'
  | 'accountActor__receivedCount'
  | 'accountActor__flashloanCount'
  | 'accountActor__rewardsClaimedUSD'
  | 'accountActor___eMode'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canBorrowFrom'
  | 'market__canUseAsCollateral'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__canIsolate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__relation'
  | 'market__stakedOutputTokenAmount'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__reserves'
  | 'market__reserveFactor'
  | 'market__variableBorrowedTokenBalance'
  | 'market__stableBorrowedTokenBalance'
  | 'market__indexLastUpdatedTimestamp'
  | 'market__supplyIndex'
  | 'market__supplyCap'
  | 'market__borrowIndex'
  | 'market__borrowCap'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__cumulativeTransferUSD'
  | 'market__cumulativeFlashloanUSD'
  | 'market__transactionCount'
  | 'market__depositCount'
  | 'market__withdrawCount'
  | 'market__borrowCount'
  | 'market__repayCount'
  | 'market__liquidationCount'
  | 'market__transferCount'
  | 'market__flashloanCount'
  | 'market__cumulativeUniqueUsers'
  | 'market__cumulativeUniqueDepositors'
  | 'market__cumulativeUniqueBorrowers'
  | 'market__cumulativeUniqueLiquidators'
  | 'market__cumulativeUniqueLiquidatees'
  | 'market__cumulativeUniqueTransferrers'
  | 'market__cumulativeUniqueFlashloaners'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___baseTrackingBorrowSpeed'
  | 'market___baseTrackingSupplySpeed'
  | 'market___lastRewardsUpdated'
  | 'market___liquidationProtocolFee'
  | 'market___siloedBorrowing'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__side'
  | 'position__type'
  | 'position__isCollateral'
  | 'position__isIsolated'
  | 'position__balance'
  | 'position__principal'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'position__borrowCount'
  | 'position__repayCount'
  | 'position__liquidationCount'
  | 'position__transferredCount'
  | 'position__receivedCount'
  | 'position___eMode'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset__type'
  | 'asset___iavsTokenType'
  | 'amount'
  | 'amountUSD';

export type gnosisPrimaryRevenueDetail = {
  /**  { Market/Protocol ID }{ Optional: Snapshot ID }  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  The source of revenue (in alphabetical order)  */
  sources: Array<gnosisPrimaryFee>;
  /**  The amount of revenue in USD (same order as sources)  */
  amountsUSD: Array<Scalars['gnosisPrimaryBigDecimal']>;
};


export type gnosisPrimaryRevenueDetailsourcesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryFee_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryFee_filter>;
};

export type gnosisPrimaryRevenueDetail_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  sources?: InputMaybe<Array<Scalars['String']>>;
  sources_not?: InputMaybe<Array<Scalars['String']>>;
  sources_contains?: InputMaybe<Array<Scalars['String']>>;
  sources_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  sources_not_contains?: InputMaybe<Array<Scalars['String']>>;
  sources_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  sources_?: InputMaybe<gnosisPrimaryFee_filter>;
  amountsUSD?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  amountsUSD_not?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  amountsUSD_contains?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  amountsUSD_contains_nocase?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  amountsUSD_not_contains?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  amountsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryRevenueDetail_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryRevenueDetail_filter>>>;
};

export type gnosisPrimaryRevenueDetail_orderBy =
  | 'id'
  | 'sources'
  | 'amountsUSD';

export type gnosisPrimaryRewardToken = {
  /**  { Reward token type }-{ Smart contract address of the reward token }  */
  id: Scalars['ID'];
  /**  Reference to the actual token  */
  token: gnosisPrimaryToken;
  /**  The type of the reward token  */
  type: gnosisPrimaryRewardTokenType;
  _distributionEnd?: Maybe<Scalars['BigInt']>;
};

export type gnosisPrimaryRewardTokenType =
  /**  For reward tokens awarded to LPs/lenders  */
  | 'DEPOSIT'
  /**  For reward tokens awarded to borrowers of variable debt  */
  | 'VARIABLE_BORROW'
  /**  For reward tokens awarded to borrowers of stable debt  */
  | 'STABLE_BORROW'
  /**  For reward tokens awarded to stakers  */
  | 'STAKE';

export type gnosisPrimaryRewardToken_filter = {
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
  token_?: InputMaybe<gnosisPrimaryToken_filter>;
  type?: InputMaybe<gnosisPrimaryRewardTokenType>;
  type_not?: InputMaybe<gnosisPrimaryRewardTokenType>;
  type_in?: InputMaybe<Array<gnosisPrimaryRewardTokenType>>;
  type_not_in?: InputMaybe<Array<gnosisPrimaryRewardTokenType>>;
  _distributionEnd?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_not?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_gt?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_lt?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_gte?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_lte?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _distributionEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryRewardToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryRewardToken_filter>>>;
};

export type gnosisPrimaryRewardToken_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__name'
  | 'token__symbol'
  | 'token__decimals'
  | 'token__lastPriceUSD'
  | 'token__lastPriceBlockNumber'
  | 'token__type'
  | 'token___iavsTokenType'
  | 'type'
  | '_distributionEnd';

export type gnosisPrimaryRiskType =
  /**  Global risk means each users position in a market is combined for one score to determine if they can be liquidated  */
  | 'GLOBAL'
  /**  Isolated risk means each users position in a market or CDP is isolated for risk of liquidation  */
  | 'ISOLATED';

export type Subscription = {
  gnosisPrimarytoken?: Maybe<gnosisPrimaryToken>;
  gnosisPrimarytokens: Array<gnosisPrimaryToken>;
  gnosisPrimaryrewardToken?: Maybe<gnosisPrimaryRewardToken>;
  gnosisPrimaryrewardTokens: Array<gnosisPrimaryRewardToken>;
  gnosisPrimaryinterestRate?: Maybe<gnosisPrimaryInterestRate>;
  gnosisPrimaryinterestRates: Array<gnosisPrimaryInterestRate>;
  gnosisPrimaryfee?: Maybe<gnosisPrimaryFee>;
  gnosisPrimaryfees: Array<gnosisPrimaryFee>;
  gnosisPrimaryrevenueDetail?: Maybe<gnosisPrimaryRevenueDetail>;
  gnosisPrimaryrevenueDetails: Array<gnosisPrimaryRevenueDetail>;
  gnosisPrimaryoracle?: Maybe<gnosisPrimaryOracle>;
  gnosisPrimaryoracles: Array<gnosisPrimaryOracle>;
  gnosisPrimarylendingProtocol?: Maybe<gnosisPrimaryLendingProtocol>;
  gnosisPrimarylendingProtocols: Array<gnosisPrimaryLendingProtocol>;
  gnosisPrimarymarketList?: Maybe<gnosisPrimary_MarketList>;
  gnosisPrimarymarketLists: Array<gnosisPrimary_MarketList>;
  gnosisPrimaryusageMetricsDailySnapshot?: Maybe<gnosisPrimaryUsageMetricsDailySnapshot>;
  gnosisPrimaryusageMetricsDailySnapshots: Array<gnosisPrimaryUsageMetricsDailySnapshot>;
  gnosisPrimaryusageMetricsHourlySnapshot?: Maybe<gnosisPrimaryUsageMetricsHourlySnapshot>;
  gnosisPrimaryusageMetricsHourlySnapshots: Array<gnosisPrimaryUsageMetricsHourlySnapshot>;
  gnosisPrimaryfinancialsDailySnapshot?: Maybe<gnosisPrimaryFinancialsDailySnapshot>;
  gnosisPrimaryfinancialsDailySnapshots: Array<gnosisPrimaryFinancialsDailySnapshot>;
  gnosisPrimarymarket?: Maybe<gnosisPrimaryMarket>;
  gnosisPrimarymarkets: Array<gnosisPrimaryMarket>;
  gnosisPrimarymarketDailySnapshot?: Maybe<gnosisPrimaryMarketDailySnapshot>;
  gnosisPrimarymarketDailySnapshots: Array<gnosisPrimaryMarketDailySnapshot>;
  gnosisPrimarymarketHourlySnapshot?: Maybe<gnosisPrimaryMarketHourlySnapshot>;
  gnosisPrimarymarketHourlySnapshots: Array<gnosisPrimaryMarketHourlySnapshot>;
  gnosisPrimaryaccount?: Maybe<gnosisPrimaryAccount>;
  gnosisPrimaryaccounts: Array<gnosisPrimaryAccount>;
  gnosisPrimaryposition?: Maybe<gnosisPrimaryPosition>;
  gnosisPrimarypositions: Array<gnosisPrimaryPosition>;
  gnosisPrimarypositionSnapshot?: Maybe<gnosisPrimaryPositionSnapshot>;
  gnosisPrimarypositionSnapshots: Array<gnosisPrimaryPositionSnapshot>;
  gnosisPrimaryactiveAccount?: Maybe<gnosisPrimary_ActiveAccount>;
  gnosisPrimaryactiveAccounts: Array<gnosisPrimary_ActiveAccount>;
  gnosisPrimarypositionCounter?: Maybe<gnosisPrimary_PositionCounter>;
  gnosisPrimarypositionCounters: Array<gnosisPrimary_PositionCounter>;
  gnosisPrimarydeposit?: Maybe<gnosisPrimaryDeposit>;
  gnosisPrimarydeposits: Array<gnosisPrimaryDeposit>;
  gnosisPrimarywithdraw?: Maybe<gnosisPrimaryWithdraw>;
  gnosisPrimarywithdraws: Array<gnosisPrimaryWithdraw>;
  gnosisPrimaryborrow?: Maybe<gnosisPrimaryBorrow>;
  gnosisPrimaryborrows: Array<gnosisPrimaryBorrow>;
  gnosisPrimaryrepay?: Maybe<gnosisPrimaryRepay>;
  gnosisPrimaryrepays: Array<gnosisPrimaryRepay>;
  gnosisPrimaryliquidate?: Maybe<gnosisPrimaryLiquidate>;
  gnosisPrimaryliquidates: Array<gnosisPrimaryLiquidate>;
  gnosisPrimarytransfer?: Maybe<gnosisPrimaryTransfer>;
  gnosisPrimarytransfers: Array<gnosisPrimaryTransfer>;
  gnosisPrimaryflashloan?: Maybe<gnosisPrimaryFlashloan>;
  gnosisPrimaryflashloans: Array<gnosisPrimaryFlashloan>;
  gnosisPrimarydefaultOracle?: Maybe<gnosisPrimary_DefaultOracle>;
  gnosisPrimarydefaultOracles: Array<gnosisPrimary_DefaultOracle>;
  gnosisPrimaryflashLoanPremium?: Maybe<gnosisPrimary_FlashLoanPremium>;
  gnosisPrimaryflashLoanPremiums: Array<gnosisPrimary_FlashLoanPremium>;
  gnosisPrimaryprotocol?: Maybe<gnosisPrimaryProtocol>;
  gnosisPrimaryprotocols: Array<gnosisPrimaryProtocol>;
  gnosisPrimaryevent?: Maybe<gnosisPrimaryEvent>;
  gnosisPrimaryevents: Array<gnosisPrimaryEvent>;
  /** Access to subgraph metadata */
  gnosisPrimary_meta?: Maybe<gnosisPrimary_Meta_>;
};


export type SubscriptiongnosisPrimarytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryToken_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryToken_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryrewardTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryRewardToken_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryRewardToken_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryinterestRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryinterestRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryInterestRate_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryInterestRate_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryfeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryfeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryFee_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryFee_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryrevenueDetailArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryrevenueDetailsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryRevenueDetail_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryRevenueDetail_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryoracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryoraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryOracle_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryOracle_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarylendingProtocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarylendingProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryLendingProtocol_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryLendingProtocol_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarymarketListArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarymarketListsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimary_MarketList_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimary_MarketList_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryusageMetricsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryUsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryUsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryUsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryUsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryfinancialsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryFinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryFinancialsDailySnapshot_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarymarketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarymarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryMarket_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryMarket_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarymarketDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarymarketDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryMarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryMarketDailySnapshot_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarymarketHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarymarketHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryMarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryMarketHourlySnapshot_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryAccount_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryAccount_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarypositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarypositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryPosition_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryPosition_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarypositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarypositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryPositionSnapshot_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryactiveAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimary_ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimary_ActiveAccount_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarypositionCounterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarypositionCountersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimary_PositionCounter_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimary_PositionCounter_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarydepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarydepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryDeposit_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryDeposit_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarywithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarywithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryWithdraw_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryWithdraw_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryborrowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryBorrow_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryBorrow_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryrepayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryRepay_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryRepay_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryliquidateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryLiquidate_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryLiquidate_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryTransfer_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryTransfer_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryflashloanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryflashloansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryFlashloan_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryFlashloan_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarydefaultOracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimarydefaultOraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimary_DefaultOracle_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimary_DefaultOracle_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryflashLoanPremiumArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryflashLoanPremiumsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimary_FlashLoanPremium_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimary_FlashLoanPremium_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryProtocol_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryProtocol_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryeventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimaryeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryEvent_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryEvent_filter>;
  block?: InputMaybe<gnosisPrimaryBlock_height>;
  subgraphError?: gnosisPrimary_SubgraphErrorPolicy_;
};


export type SubscriptiongnosisPrimary_metaArgs = {
  block?: InputMaybe<gnosisPrimaryBlock_height>;
};

export type gnosisPrimaryToken = {
  /**  Smart contract address of the token  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Name of the token, mirrored from the smart contract  */
  name: Scalars['String'];
  /**  Symbol of the token, mirrored from the smart contract  */
  symbol: Scalars['String'];
  /**  The number of decimal places this token uses, default to 18  */
  decimals: Scalars['Int'];
  /**  Optional field to track the price of a token, mostly for caching purposes  */
  lastPriceUSD?: Maybe<Scalars['gnosisPrimaryBigDecimal']>;
  /**  Optional field to track the block number of the last token price  */
  lastPriceBlockNumber?: Maybe<Scalars['BigInt']>;
  /**  The type of token the protocol creates for positions  */
  type?: Maybe<gnosisPrimaryTokenType>;
  /**  the market ID for underlying/asset token, aToken, vToken and sToken */
  _market?: Maybe<gnosisPrimaryMarket>;
  /**  type of token: inputToken, aToken, vToken, or sToken  */
  _iavsTokenType?: Maybe<Scalars['String']>;
};

export type gnosisPrimaryTokenType =
  /**  Rebasing tokens continuously adjust balances / supply as interest is accrued (e.g. Aave debt balances adjust at each block with interest)  */
  | 'REBASING'
  /**  Non-rebasing token balances / supply do not change as interest is accrued (e.g. Compound's cToken's do not adjust balance, the exchange rate changes with interest)  */
  | 'NON_REBASING';

export type gnosisPrimaryToken_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  lastPriceUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  lastPriceUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  lastPriceUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  lastPriceUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  lastPriceUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  lastPriceUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  lastPriceUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  lastPriceUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<gnosisPrimaryTokenType>;
  type_not?: InputMaybe<gnosisPrimaryTokenType>;
  type_in?: InputMaybe<Array<gnosisPrimaryTokenType>>;
  type_not_in?: InputMaybe<Array<gnosisPrimaryTokenType>>;
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
  _market_?: InputMaybe<gnosisPrimaryMarket_filter>;
  _iavsTokenType?: InputMaybe<Scalars['String']>;
  _iavsTokenType_not?: InputMaybe<Scalars['String']>;
  _iavsTokenType_gt?: InputMaybe<Scalars['String']>;
  _iavsTokenType_lt?: InputMaybe<Scalars['String']>;
  _iavsTokenType_gte?: InputMaybe<Scalars['String']>;
  _iavsTokenType_lte?: InputMaybe<Scalars['String']>;
  _iavsTokenType_in?: InputMaybe<Array<Scalars['String']>>;
  _iavsTokenType_not_in?: InputMaybe<Array<Scalars['String']>>;
  _iavsTokenType_contains?: InputMaybe<Scalars['String']>;
  _iavsTokenType_contains_nocase?: InputMaybe<Scalars['String']>;
  _iavsTokenType_not_contains?: InputMaybe<Scalars['String']>;
  _iavsTokenType_not_contains_nocase?: InputMaybe<Scalars['String']>;
  _iavsTokenType_starts_with?: InputMaybe<Scalars['String']>;
  _iavsTokenType_starts_with_nocase?: InputMaybe<Scalars['String']>;
  _iavsTokenType_not_starts_with?: InputMaybe<Scalars['String']>;
  _iavsTokenType_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  _iavsTokenType_ends_with?: InputMaybe<Scalars['String']>;
  _iavsTokenType_ends_with_nocase?: InputMaybe<Scalars['String']>;
  _iavsTokenType_not_ends_with?: InputMaybe<Scalars['String']>;
  _iavsTokenType_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryToken_filter>>>;
};

export type gnosisPrimaryToken_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'decimals'
  | 'lastPriceUSD'
  | 'lastPriceBlockNumber'
  | 'type'
  | '_market'
  | '_market__id'
  | '_market__name'
  | '_market__isActive'
  | '_market__canBorrowFrom'
  | '_market__canUseAsCollateral'
  | '_market__maximumLTV'
  | '_market__liquidationThreshold'
  | '_market__liquidationPenalty'
  | '_market__canIsolate'
  | '_market__createdTimestamp'
  | '_market__createdBlockNumber'
  | '_market__relation'
  | '_market__stakedOutputTokenAmount'
  | '_market__inputTokenBalance'
  | '_market__inputTokenPriceUSD'
  | '_market__outputTokenSupply'
  | '_market__outputTokenPriceUSD'
  | '_market__exchangeRate'
  | '_market__reserves'
  | '_market__reserveFactor'
  | '_market__variableBorrowedTokenBalance'
  | '_market__stableBorrowedTokenBalance'
  | '_market__indexLastUpdatedTimestamp'
  | '_market__supplyIndex'
  | '_market__supplyCap'
  | '_market__borrowIndex'
  | '_market__borrowCap'
  | '_market__totalValueLockedUSD'
  | '_market__cumulativeSupplySideRevenueUSD'
  | '_market__cumulativeProtocolSideRevenueUSD'
  | '_market__cumulativeTotalRevenueUSD'
  | '_market__totalDepositBalanceUSD'
  | '_market__cumulativeDepositUSD'
  | '_market__totalBorrowBalanceUSD'
  | '_market__cumulativeBorrowUSD'
  | '_market__cumulativeLiquidateUSD'
  | '_market__cumulativeTransferUSD'
  | '_market__cumulativeFlashloanUSD'
  | '_market__transactionCount'
  | '_market__depositCount'
  | '_market__withdrawCount'
  | '_market__borrowCount'
  | '_market__repayCount'
  | '_market__liquidationCount'
  | '_market__transferCount'
  | '_market__flashloanCount'
  | '_market__cumulativeUniqueUsers'
  | '_market__cumulativeUniqueDepositors'
  | '_market__cumulativeUniqueBorrowers'
  | '_market__cumulativeUniqueLiquidators'
  | '_market__cumulativeUniqueLiquidatees'
  | '_market__cumulativeUniqueTransferrers'
  | '_market__cumulativeUniqueFlashloaners'
  | '_market__positionCount'
  | '_market__openPositionCount'
  | '_market__closedPositionCount'
  | '_market__lendingPositionCount'
  | '_market__borrowingPositionCount'
  | '_market___baseTrackingBorrowSpeed'
  | '_market___baseTrackingSupplySpeed'
  | '_market___lastRewardsUpdated'
  | '_market___liquidationProtocolFee'
  | '_market___siloedBorrowing'
  | '_iavsTokenType';

export type gnosisPrimaryTranche =
  /**  Senior denotes debt with a higher priority. The first debt to be paid back to lenders.  */
  | 'SENIOR'
  /**  Junior tranche denotes lower priority debt. This is secondary priority to be paid back to lenders.  */
  | 'JUNIOR';

export type gnosisPrimaryTransfer = gnosisPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['gnosisPrimaryBytes'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Price of gas in this transaction  */
  gasPrice?: Maybe<Scalars['BigInt']>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']>;
  /**  Gas limit of this transaction. e.g. the amount of gas the sender will pay  */
  gasLimit?: Maybe<Scalars['BigInt']>;
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  The account that sent the tokens  */
  sender: gnosisPrimaryAccount;
  /**  The Account that received the tokens  */
  receiver: gnosisPrimaryAccount;
  /**  The user positions changed by this event  */
  positions: Array<gnosisPrimaryPosition>;
  /**  The market associated with the token transfer  */
  market: gnosisPrimaryMarket;
  /**  The asset that was actually transferred. This could also include a debt token.  */
  asset: gnosisPrimaryToken;
  /**  Amount of token transferred in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token transferred in USD  */
  amountUSD: Scalars['gnosisPrimaryBigDecimal'];
};


export type gnosisPrimaryTransferpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<gnosisPrimaryPosition_orderBy>;
  orderDirection?: InputMaybe<gnosisPrimaryOrderDirection>;
  where?: InputMaybe<gnosisPrimaryPosition_filter>;
};

export type gnosisPrimaryTransfer_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  sender?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<gnosisPrimaryAccount_filter>;
  receiver?: InputMaybe<Scalars['String']>;
  receiver_not?: InputMaybe<Scalars['String']>;
  receiver_gt?: InputMaybe<Scalars['String']>;
  receiver_lt?: InputMaybe<Scalars['String']>;
  receiver_gte?: InputMaybe<Scalars['String']>;
  receiver_lte?: InputMaybe<Scalars['String']>;
  receiver_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiver_contains?: InputMaybe<Scalars['String']>;
  receiver_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_contains?: InputMaybe<Scalars['String']>;
  receiver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiver_starts_with?: InputMaybe<Scalars['String']>;
  receiver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with?: InputMaybe<Scalars['String']>;
  receiver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_ends_with?: InputMaybe<Scalars['String']>;
  receiver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with?: InputMaybe<Scalars['String']>;
  receiver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiver_?: InputMaybe<gnosisPrimaryAccount_filter>;
  positions?: InputMaybe<Array<Scalars['String']>>;
  positions_not?: InputMaybe<Array<Scalars['String']>>;
  positions_contains?: InputMaybe<Array<Scalars['String']>>;
  positions_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  positions_not_contains?: InputMaybe<Array<Scalars['String']>>;
  positions_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  positions_?: InputMaybe<gnosisPrimaryPosition_filter>;
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
  market_?: InputMaybe<gnosisPrimaryMarket_filter>;
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
  asset_?: InputMaybe<gnosisPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryTransfer_filter>>>;
};

export type gnosisPrimaryTransfer_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'gasPrice'
  | 'gasUsed'
  | 'gasLimit'
  | 'blockNumber'
  | 'timestamp'
  | 'sender'
  | 'sender__id'
  | 'sender__positionCount'
  | 'sender__openPositionCount'
  | 'sender__closedPositionCount'
  | 'sender__depositCount'
  | 'sender__withdrawCount'
  | 'sender__borrowCount'
  | 'sender__repayCount'
  | 'sender__liquidateCount'
  | 'sender__liquidationCount'
  | 'sender__transferredCount'
  | 'sender__receivedCount'
  | 'sender__flashloanCount'
  | 'sender__rewardsClaimedUSD'
  | 'sender___eMode'
  | 'receiver'
  | 'receiver__id'
  | 'receiver__positionCount'
  | 'receiver__openPositionCount'
  | 'receiver__closedPositionCount'
  | 'receiver__depositCount'
  | 'receiver__withdrawCount'
  | 'receiver__borrowCount'
  | 'receiver__repayCount'
  | 'receiver__liquidateCount'
  | 'receiver__liquidationCount'
  | 'receiver__transferredCount'
  | 'receiver__receivedCount'
  | 'receiver__flashloanCount'
  | 'receiver__rewardsClaimedUSD'
  | 'receiver___eMode'
  | 'positions'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canBorrowFrom'
  | 'market__canUseAsCollateral'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__canIsolate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__relation'
  | 'market__stakedOutputTokenAmount'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__reserves'
  | 'market__reserveFactor'
  | 'market__variableBorrowedTokenBalance'
  | 'market__stableBorrowedTokenBalance'
  | 'market__indexLastUpdatedTimestamp'
  | 'market__supplyIndex'
  | 'market__supplyCap'
  | 'market__borrowIndex'
  | 'market__borrowCap'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__cumulativeTransferUSD'
  | 'market__cumulativeFlashloanUSD'
  | 'market__transactionCount'
  | 'market__depositCount'
  | 'market__withdrawCount'
  | 'market__borrowCount'
  | 'market__repayCount'
  | 'market__liquidationCount'
  | 'market__transferCount'
  | 'market__flashloanCount'
  | 'market__cumulativeUniqueUsers'
  | 'market__cumulativeUniqueDepositors'
  | 'market__cumulativeUniqueBorrowers'
  | 'market__cumulativeUniqueLiquidators'
  | 'market__cumulativeUniqueLiquidatees'
  | 'market__cumulativeUniqueTransferrers'
  | 'market__cumulativeUniqueFlashloaners'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___baseTrackingBorrowSpeed'
  | 'market___baseTrackingSupplySpeed'
  | 'market___lastRewardsUpdated'
  | 'market___liquidationProtocolFee'
  | 'market___siloedBorrowing'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset__type'
  | 'asset___iavsTokenType'
  | 'amount'
  | 'amountUSD';

export type gnosisPrimaryUsageMetricsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Number of days since Unix epoch time  */
  days: Scalars['Int'];
  /**  Protocol this snapshot is associated with  */
  protocol: gnosisPrimaryLendingProtocol;
  /**  Number of unique daily active users. e.g. accounts that spent gas to interact with this protocol  */
  dailyActiveUsers: Scalars['Int'];
  /**  Number of cumulative unique users. e.g. accounts that spent gas to interact with this protocol  */
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
  /**  Total number of transfers in a day  */
  dailyTransferCount: Scalars['Int'];
  /**  Total number of flashloans in a day  */
  dailyFlashloanCount: Scalars['Int'];
  /**  Total number of positions (open and closed)  */
  cumulativePositionCount: Scalars['Int'];
  /**  Total number of open positions  */
  openPositionCount: Scalars['Int'];
  /**  Total number of positions touched in a day. This includes opening, closing, and modifying positions.  */
  dailyActivePositions: Scalars['Int'];
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
};

export type gnosisPrimaryUsageMetricsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  days?: InputMaybe<Scalars['Int']>;
  days_not?: InputMaybe<Scalars['Int']>;
  days_gt?: InputMaybe<Scalars['Int']>;
  days_lt?: InputMaybe<Scalars['Int']>;
  days_gte?: InputMaybe<Scalars['Int']>;
  days_lte?: InputMaybe<Scalars['Int']>;
  days_in?: InputMaybe<Array<Scalars['Int']>>;
  days_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  protocol_?: InputMaybe<gnosisPrimaryLendingProtocol_filter>;
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
  dailyTransferCount?: InputMaybe<Scalars['Int']>;
  dailyTransferCount_not?: InputMaybe<Scalars['Int']>;
  dailyTransferCount_gt?: InputMaybe<Scalars['Int']>;
  dailyTransferCount_lt?: InputMaybe<Scalars['Int']>;
  dailyTransferCount_gte?: InputMaybe<Scalars['Int']>;
  dailyTransferCount_lte?: InputMaybe<Scalars['Int']>;
  dailyTransferCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyTransferCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyFlashloanCount?: InputMaybe<Scalars['Int']>;
  dailyFlashloanCount_not?: InputMaybe<Scalars['Int']>;
  dailyFlashloanCount_gt?: InputMaybe<Scalars['Int']>;
  dailyFlashloanCount_lt?: InputMaybe<Scalars['Int']>;
  dailyFlashloanCount_gte?: InputMaybe<Scalars['Int']>;
  dailyFlashloanCount_lte?: InputMaybe<Scalars['Int']>;
  dailyFlashloanCount_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyFlashloanCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativePositionCount?: InputMaybe<Scalars['Int']>;
  cumulativePositionCount_not?: InputMaybe<Scalars['Int']>;
  cumulativePositionCount_gt?: InputMaybe<Scalars['Int']>;
  cumulativePositionCount_lt?: InputMaybe<Scalars['Int']>;
  cumulativePositionCount_gte?: InputMaybe<Scalars['Int']>;
  cumulativePositionCount_lte?: InputMaybe<Scalars['Int']>;
  cumulativePositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativePositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  openPositionCount?: InputMaybe<Scalars['Int']>;
  openPositionCount_not?: InputMaybe<Scalars['Int']>;
  openPositionCount_gt?: InputMaybe<Scalars['Int']>;
  openPositionCount_lt?: InputMaybe<Scalars['Int']>;
  openPositionCount_gte?: InputMaybe<Scalars['Int']>;
  openPositionCount_lte?: InputMaybe<Scalars['Int']>;
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActivePositions?: InputMaybe<Scalars['Int']>;
  dailyActivePositions_not?: InputMaybe<Scalars['Int']>;
  dailyActivePositions_gt?: InputMaybe<Scalars['Int']>;
  dailyActivePositions_lt?: InputMaybe<Scalars['Int']>;
  dailyActivePositions_gte?: InputMaybe<Scalars['Int']>;
  dailyActivePositions_lte?: InputMaybe<Scalars['Int']>;
  dailyActivePositions_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyActivePositions_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryUsageMetricsDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryUsageMetricsDailySnapshot_filter>>>;
};

export type gnosisPrimaryUsageMetricsDailySnapshot_orderBy =
  | 'id'
  | 'days'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__protocol'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__lendingType'
  | 'protocol__lenderPermissionType'
  | 'protocol__borrowerPermissionType'
  | 'protocol__poolCreatorPermissionType'
  | 'protocol__riskType'
  | 'protocol__collateralizationType'
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
  | 'protocol__transactionCount'
  | 'protocol__depositCount'
  | 'protocol__withdrawCount'
  | 'protocol__borrowCount'
  | 'protocol__repayCount'
  | 'protocol__liquidationCount'
  | 'protocol__transferCount'
  | 'protocol__flashloanCount'
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
  | 'dailyTransferCount'
  | 'dailyFlashloanCount'
  | 'cumulativePositionCount'
  | 'openPositionCount'
  | 'dailyActivePositions'
  | 'totalPoolCount'
  | 'blockNumber'
  | 'timestamp';

export type gnosisPrimaryUsageMetricsHourlySnapshot = {
  /**  { # of hours since Unix epoch time }  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Number of hours since Unix epoch time  */
  hours: Scalars['Int'];
  /**  Protocol this snapshot is associated with  */
  protocol: gnosisPrimaryLendingProtocol;
  /**  Number of unique hourly active users  */
  hourlyActiveUsers: Scalars['Int'];
  /**  Number of cumulative unique users. e.g. accounts that spent gas to interact with this protocol  */
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

export type gnosisPrimaryUsageMetricsHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hours?: InputMaybe<Scalars['Int']>;
  hours_not?: InputMaybe<Scalars['Int']>;
  hours_gt?: InputMaybe<Scalars['Int']>;
  hours_lt?: InputMaybe<Scalars['Int']>;
  hours_gte?: InputMaybe<Scalars['Int']>;
  hours_lte?: InputMaybe<Scalars['Int']>;
  hours_in?: InputMaybe<Array<Scalars['Int']>>;
  hours_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  protocol_?: InputMaybe<gnosisPrimaryLendingProtocol_filter>;
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
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryUsageMetricsHourlySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryUsageMetricsHourlySnapshot_filter>>>;
};

export type gnosisPrimaryUsageMetricsHourlySnapshot_orderBy =
  | 'id'
  | 'hours'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__protocol'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__lendingType'
  | 'protocol__lenderPermissionType'
  | 'protocol__borrowerPermissionType'
  | 'protocol__poolCreatorPermissionType'
  | 'protocol__riskType'
  | 'protocol__collateralizationType'
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
  | 'protocol__transactionCount'
  | 'protocol__depositCount'
  | 'protocol__withdrawCount'
  | 'protocol__borrowCount'
  | 'protocol__repayCount'
  | 'protocol__liquidationCount'
  | 'protocol__transferCount'
  | 'protocol__flashloanCount'
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

export type gnosisPrimaryWithdraw = gnosisPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['gnosisPrimaryBytes'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Price of gas in this transaction  */
  gasPrice?: Maybe<Scalars['BigInt']>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']>;
  /**  Gas limit of this transaction. e.g. the amount of gas the sender will pay  */
  gasLimit?: Maybe<Scalars['BigInt']>;
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt'];
  /**  Account that controls the position (e.g. the aToken owner initiating the withdraw in Aave)  */
  account: gnosisPrimaryAccount;
  /**  Account that receives the underlying withdrawn amount  */
  accountActor?: Maybe<gnosisPrimaryAccount>;
  /**  The market tokens are withdrew from  */
  market: gnosisPrimaryMarket;
  /**  The user position changed by this event  */
  position: gnosisPrimaryPosition;
  /**  Token withdrawn  */
  asset: gnosisPrimaryToken;
  /**  Amount of token withdrawn in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token withdrawn in USD  */
  amountUSD: Scalars['gnosisPrimaryBigDecimal'];
};

export type gnosisPrimaryWithdraw_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
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
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  account_?: InputMaybe<gnosisPrimaryAccount_filter>;
  accountActor?: InputMaybe<Scalars['String']>;
  accountActor_not?: InputMaybe<Scalars['String']>;
  accountActor_gt?: InputMaybe<Scalars['String']>;
  accountActor_lt?: InputMaybe<Scalars['String']>;
  accountActor_gte?: InputMaybe<Scalars['String']>;
  accountActor_lte?: InputMaybe<Scalars['String']>;
  accountActor_in?: InputMaybe<Array<Scalars['String']>>;
  accountActor_not_in?: InputMaybe<Array<Scalars['String']>>;
  accountActor_contains?: InputMaybe<Scalars['String']>;
  accountActor_contains_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_contains?: InputMaybe<Scalars['String']>;
  accountActor_not_contains_nocase?: InputMaybe<Scalars['String']>;
  accountActor_starts_with?: InputMaybe<Scalars['String']>;
  accountActor_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_starts_with?: InputMaybe<Scalars['String']>;
  accountActor_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_ends_with?: InputMaybe<Scalars['String']>;
  accountActor_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_not_ends_with?: InputMaybe<Scalars['String']>;
  accountActor_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  accountActor_?: InputMaybe<gnosisPrimaryAccount_filter>;
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
  market_?: InputMaybe<gnosisPrimaryMarket_filter>;
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
  position_?: InputMaybe<gnosisPrimaryPosition_filter>;
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
  asset_?: InputMaybe<gnosisPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimaryWithdraw_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimaryWithdraw_filter>>>;
};

export type gnosisPrimaryWithdraw_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'gasPrice'
  | 'gasUsed'
  | 'gasLimit'
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
  | 'account__transferredCount'
  | 'account__receivedCount'
  | 'account__flashloanCount'
  | 'account__rewardsClaimedUSD'
  | 'account___eMode'
  | 'accountActor'
  | 'accountActor__id'
  | 'accountActor__positionCount'
  | 'accountActor__openPositionCount'
  | 'accountActor__closedPositionCount'
  | 'accountActor__depositCount'
  | 'accountActor__withdrawCount'
  | 'accountActor__borrowCount'
  | 'accountActor__repayCount'
  | 'accountActor__liquidateCount'
  | 'accountActor__liquidationCount'
  | 'accountActor__transferredCount'
  | 'accountActor__receivedCount'
  | 'accountActor__flashloanCount'
  | 'accountActor__rewardsClaimedUSD'
  | 'accountActor___eMode'
  | 'market'
  | 'market__id'
  | 'market__name'
  | 'market__isActive'
  | 'market__canBorrowFrom'
  | 'market__canUseAsCollateral'
  | 'market__maximumLTV'
  | 'market__liquidationThreshold'
  | 'market__liquidationPenalty'
  | 'market__canIsolate'
  | 'market__createdTimestamp'
  | 'market__createdBlockNumber'
  | 'market__relation'
  | 'market__stakedOutputTokenAmount'
  | 'market__inputTokenBalance'
  | 'market__inputTokenPriceUSD'
  | 'market__outputTokenSupply'
  | 'market__outputTokenPriceUSD'
  | 'market__exchangeRate'
  | 'market__reserves'
  | 'market__reserveFactor'
  | 'market__variableBorrowedTokenBalance'
  | 'market__stableBorrowedTokenBalance'
  | 'market__indexLastUpdatedTimestamp'
  | 'market__supplyIndex'
  | 'market__supplyCap'
  | 'market__borrowIndex'
  | 'market__borrowCap'
  | 'market__totalValueLockedUSD'
  | 'market__cumulativeSupplySideRevenueUSD'
  | 'market__cumulativeProtocolSideRevenueUSD'
  | 'market__cumulativeTotalRevenueUSD'
  | 'market__totalDepositBalanceUSD'
  | 'market__cumulativeDepositUSD'
  | 'market__totalBorrowBalanceUSD'
  | 'market__cumulativeBorrowUSD'
  | 'market__cumulativeLiquidateUSD'
  | 'market__cumulativeTransferUSD'
  | 'market__cumulativeFlashloanUSD'
  | 'market__transactionCount'
  | 'market__depositCount'
  | 'market__withdrawCount'
  | 'market__borrowCount'
  | 'market__repayCount'
  | 'market__liquidationCount'
  | 'market__transferCount'
  | 'market__flashloanCount'
  | 'market__cumulativeUniqueUsers'
  | 'market__cumulativeUniqueDepositors'
  | 'market__cumulativeUniqueBorrowers'
  | 'market__cumulativeUniqueLiquidators'
  | 'market__cumulativeUniqueLiquidatees'
  | 'market__cumulativeUniqueTransferrers'
  | 'market__cumulativeUniqueFlashloaners'
  | 'market__positionCount'
  | 'market__openPositionCount'
  | 'market__closedPositionCount'
  | 'market__lendingPositionCount'
  | 'market__borrowingPositionCount'
  | 'market___baseTrackingBorrowSpeed'
  | 'market___baseTrackingSupplySpeed'
  | 'market___lastRewardsUpdated'
  | 'market___liquidationProtocolFee'
  | 'market___siloedBorrowing'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__side'
  | 'position__type'
  | 'position__isCollateral'
  | 'position__isIsolated'
  | 'position__balance'
  | 'position__principal'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'position__borrowCount'
  | 'position__repayCount'
  | 'position__liquidationCount'
  | 'position__transferredCount'
  | 'position__receivedCount'
  | 'position___eMode'
  | 'asset'
  | 'asset__id'
  | 'asset__name'
  | 'asset__symbol'
  | 'asset__decimals'
  | 'asset__lastPriceUSD'
  | 'asset__lastPriceBlockNumber'
  | 'asset__type'
  | 'asset___iavsTokenType'
  | 'amount'
  | 'amountUSD';

export type gnosisPrimary_ActiveAccount = {
  /**  { daily/hourly }-{ Address of the account }-{ Optional: Transaction Type }-{ Optional: Market Address }-{ Optional: Days/hours since Unix epoch }  */
  id: Scalars['ID'];
};

export type gnosisPrimary_ActiveAccount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimary_ActiveAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimary_ActiveAccount_filter>>>;
};

export type gnosisPrimary_ActiveAccount_orderBy =
  | 'id';

export type gnosisPrimary_Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['gnosisPrimaryBytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

export type gnosisPrimary_DefaultOracle = {
  /**  protocol id  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  address of default oracle  */
  oracle: Scalars['gnosisPrimaryBytes'];
};

export type gnosisPrimary_DefaultOracle_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracle?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracle_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracle_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracle_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracle_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracle_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracle_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  oracle_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  oracle_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  oracle_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimary_DefaultOracle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimary_DefaultOracle_filter>>>;
};

export type gnosisPrimary_DefaultOracle_orderBy =
  | 'id'
  | 'oracle';

export type gnosisPrimary_FlashLoanPremium = {
  /**  protocol id  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  total premium rate  */
  premiumRateTotal: Scalars['gnosisPrimaryBigDecimal'];
  /**  premium rate to protocol  */
  premiumRateToProtocol: Scalars['gnosisPrimaryBigDecimal'];
};

export type gnosisPrimary_FlashLoanPremium_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  premiumRateTotal?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  premiumRateTotal_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  premiumRateTotal_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  premiumRateTotal_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  premiumRateTotal_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  premiumRateTotal_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  premiumRateTotal_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  premiumRateTotal_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  premiumRateToProtocol?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  premiumRateToProtocol_not?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  premiumRateToProtocol_gt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  premiumRateToProtocol_lt?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  premiumRateToProtocol_gte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  premiumRateToProtocol_lte?: InputMaybe<Scalars['gnosisPrimaryBigDecimal']>;
  premiumRateToProtocol_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  premiumRateToProtocol_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimary_FlashLoanPremium_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimary_FlashLoanPremium_filter>>>;
};

export type gnosisPrimary_FlashLoanPremium_orderBy =
  | 'id'
  | 'premiumRateTotal'
  | 'premiumRateToProtocol';

export type gnosisPrimary_MarketList = {
  /**  Same ID as LendingProtocol  */
  id: Scalars['gnosisPrimaryBytes'];
  /**  IDs of all markets in the LendingProtocol  */
  markets: Array<Scalars['gnosisPrimaryBytes']>;
};

export type gnosisPrimary_MarketList_filter = {
  id?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['gnosisPrimaryBytes']>;
  markets?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  markets_not?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  markets_contains?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  markets_contains_nocase?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  markets_not_contains?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  markets_not_contains_nocase?: InputMaybe<Array<Scalars['gnosisPrimaryBytes']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimary_MarketList_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimary_MarketList_filter>>>;
};

export type gnosisPrimary_MarketList_orderBy =
  | 'id'
  | 'markets';

/** The type for the top-level _meta field */
export type gnosisPrimary_Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: gnosisPrimary_Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type gnosisPrimary_PositionCounter = {
  /**  { Account address }-{ Market address }-{ Position Side }  */
  id: Scalars['ID'];
  /**  Next count  */
  nextCount: Scalars['Int'];
  /**  The last timestamp this position was updated  */
  lastTimestamp: Scalars['BigInt'];
};

export type gnosisPrimary_PositionCounter_filter = {
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
  lastTimestamp?: InputMaybe<Scalars['BigInt']>;
  lastTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  lastTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  lastTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  lastTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  lastTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  lastTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<gnosisPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<gnosisPrimary_PositionCounter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<gnosisPrimary_PositionCounter_filter>>>;
};

export type gnosisPrimary_PositionCounter_orderBy =
  | 'id'
  | 'nextCount'
  | 'lastTimestamp';

export type gnosisPrimary_SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  gnosisPrimarytoken: InContextSdkMethod<Query['gnosisPrimarytoken'], QuerygnosisPrimarytokenArgs, MeshContext>,
  /** null **/
  gnosisPrimarytokens: InContextSdkMethod<Query['gnosisPrimarytokens'], QuerygnosisPrimarytokensArgs, MeshContext>,
  /** null **/
  gnosisPrimaryrewardToken: InContextSdkMethod<Query['gnosisPrimaryrewardToken'], QuerygnosisPrimaryrewardTokenArgs, MeshContext>,
  /** null **/
  gnosisPrimaryrewardTokens: InContextSdkMethod<Query['gnosisPrimaryrewardTokens'], QuerygnosisPrimaryrewardTokensArgs, MeshContext>,
  /** null **/
  gnosisPrimaryinterestRate: InContextSdkMethod<Query['gnosisPrimaryinterestRate'], QuerygnosisPrimaryinterestRateArgs, MeshContext>,
  /** null **/
  gnosisPrimaryinterestRates: InContextSdkMethod<Query['gnosisPrimaryinterestRates'], QuerygnosisPrimaryinterestRatesArgs, MeshContext>,
  /** null **/
  gnosisPrimaryfee: InContextSdkMethod<Query['gnosisPrimaryfee'], QuerygnosisPrimaryfeeArgs, MeshContext>,
  /** null **/
  gnosisPrimaryfees: InContextSdkMethod<Query['gnosisPrimaryfees'], QuerygnosisPrimaryfeesArgs, MeshContext>,
  /** null **/
  gnosisPrimaryrevenueDetail: InContextSdkMethod<Query['gnosisPrimaryrevenueDetail'], QuerygnosisPrimaryrevenueDetailArgs, MeshContext>,
  /** null **/
  gnosisPrimaryrevenueDetails: InContextSdkMethod<Query['gnosisPrimaryrevenueDetails'], QuerygnosisPrimaryrevenueDetailsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryoracle: InContextSdkMethod<Query['gnosisPrimaryoracle'], QuerygnosisPrimaryoracleArgs, MeshContext>,
  /** null **/
  gnosisPrimaryoracles: InContextSdkMethod<Query['gnosisPrimaryoracles'], QuerygnosisPrimaryoraclesArgs, MeshContext>,
  /** null **/
  gnosisPrimarylendingProtocol: InContextSdkMethod<Query['gnosisPrimarylendingProtocol'], QuerygnosisPrimarylendingProtocolArgs, MeshContext>,
  /** null **/
  gnosisPrimarylendingProtocols: InContextSdkMethod<Query['gnosisPrimarylendingProtocols'], QuerygnosisPrimarylendingProtocolsArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarketList: InContextSdkMethod<Query['gnosisPrimarymarketList'], QuerygnosisPrimarymarketListArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarketLists: InContextSdkMethod<Query['gnosisPrimarymarketLists'], QuerygnosisPrimarymarketListsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryusageMetricsDailySnapshot: InContextSdkMethod<Query['gnosisPrimaryusageMetricsDailySnapshot'], QuerygnosisPrimaryusageMetricsDailySnapshotArgs, MeshContext>,
  /** null **/
  gnosisPrimaryusageMetricsDailySnapshots: InContextSdkMethod<Query['gnosisPrimaryusageMetricsDailySnapshots'], QuerygnosisPrimaryusageMetricsDailySnapshotsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryusageMetricsHourlySnapshot: InContextSdkMethod<Query['gnosisPrimaryusageMetricsHourlySnapshot'], QuerygnosisPrimaryusageMetricsHourlySnapshotArgs, MeshContext>,
  /** null **/
  gnosisPrimaryusageMetricsHourlySnapshots: InContextSdkMethod<Query['gnosisPrimaryusageMetricsHourlySnapshots'], QuerygnosisPrimaryusageMetricsHourlySnapshotsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryfinancialsDailySnapshot: InContextSdkMethod<Query['gnosisPrimaryfinancialsDailySnapshot'], QuerygnosisPrimaryfinancialsDailySnapshotArgs, MeshContext>,
  /** null **/
  gnosisPrimaryfinancialsDailySnapshots: InContextSdkMethod<Query['gnosisPrimaryfinancialsDailySnapshots'], QuerygnosisPrimaryfinancialsDailySnapshotsArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarket: InContextSdkMethod<Query['gnosisPrimarymarket'], QuerygnosisPrimarymarketArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarkets: InContextSdkMethod<Query['gnosisPrimarymarkets'], QuerygnosisPrimarymarketsArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarketDailySnapshot: InContextSdkMethod<Query['gnosisPrimarymarketDailySnapshot'], QuerygnosisPrimarymarketDailySnapshotArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarketDailySnapshots: InContextSdkMethod<Query['gnosisPrimarymarketDailySnapshots'], QuerygnosisPrimarymarketDailySnapshotsArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarketHourlySnapshot: InContextSdkMethod<Query['gnosisPrimarymarketHourlySnapshot'], QuerygnosisPrimarymarketHourlySnapshotArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarketHourlySnapshots: InContextSdkMethod<Query['gnosisPrimarymarketHourlySnapshots'], QuerygnosisPrimarymarketHourlySnapshotsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryaccount: InContextSdkMethod<Query['gnosisPrimaryaccount'], QuerygnosisPrimaryaccountArgs, MeshContext>,
  /** null **/
  gnosisPrimaryaccounts: InContextSdkMethod<Query['gnosisPrimaryaccounts'], QuerygnosisPrimaryaccountsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryposition: InContextSdkMethod<Query['gnosisPrimaryposition'], QuerygnosisPrimarypositionArgs, MeshContext>,
  /** null **/
  gnosisPrimarypositions: InContextSdkMethod<Query['gnosisPrimarypositions'], QuerygnosisPrimarypositionsArgs, MeshContext>,
  /** null **/
  gnosisPrimarypositionSnapshot: InContextSdkMethod<Query['gnosisPrimarypositionSnapshot'], QuerygnosisPrimarypositionSnapshotArgs, MeshContext>,
  /** null **/
  gnosisPrimarypositionSnapshots: InContextSdkMethod<Query['gnosisPrimarypositionSnapshots'], QuerygnosisPrimarypositionSnapshotsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryactiveAccount: InContextSdkMethod<Query['gnosisPrimaryactiveAccount'], QuerygnosisPrimaryactiveAccountArgs, MeshContext>,
  /** null **/
  gnosisPrimaryactiveAccounts: InContextSdkMethod<Query['gnosisPrimaryactiveAccounts'], QuerygnosisPrimaryactiveAccountsArgs, MeshContext>,
  /** null **/
  gnosisPrimarypositionCounter: InContextSdkMethod<Query['gnosisPrimarypositionCounter'], QuerygnosisPrimarypositionCounterArgs, MeshContext>,
  /** null **/
  gnosisPrimarypositionCounters: InContextSdkMethod<Query['gnosisPrimarypositionCounters'], QuerygnosisPrimarypositionCountersArgs, MeshContext>,
  /** null **/
  gnosisPrimarydeposit: InContextSdkMethod<Query['gnosisPrimarydeposit'], QuerygnosisPrimarydepositArgs, MeshContext>,
  /** null **/
  gnosisPrimarydeposits: InContextSdkMethod<Query['gnosisPrimarydeposits'], QuerygnosisPrimarydepositsArgs, MeshContext>,
  /** null **/
  gnosisPrimarywithdraw: InContextSdkMethod<Query['gnosisPrimarywithdraw'], QuerygnosisPrimarywithdrawArgs, MeshContext>,
  /** null **/
  gnosisPrimarywithdraws: InContextSdkMethod<Query['gnosisPrimarywithdraws'], QuerygnosisPrimarywithdrawsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryborrow: InContextSdkMethod<Query['gnosisPrimaryborrow'], QuerygnosisPrimaryborrowArgs, MeshContext>,
  /** null **/
  gnosisPrimaryborrows: InContextSdkMethod<Query['gnosisPrimaryborrows'], QuerygnosisPrimaryborrowsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryrepay: InContextSdkMethod<Query['gnosisPrimaryrepay'], QuerygnosisPrimaryrepayArgs, MeshContext>,
  /** null **/
  gnosisPrimaryrepays: InContextSdkMethod<Query['gnosisPrimaryrepays'], QuerygnosisPrimaryrepaysArgs, MeshContext>,
  /** null **/
  gnosisPrimaryliquidate: InContextSdkMethod<Query['gnosisPrimaryliquidate'], QuerygnosisPrimaryliquidateArgs, MeshContext>,
  /** null **/
  gnosisPrimaryliquidates: InContextSdkMethod<Query['gnosisPrimaryliquidates'], QuerygnosisPrimaryliquidatesArgs, MeshContext>,
  /** null **/
  gnosisPrimarytransfer: InContextSdkMethod<Query['gnosisPrimarytransfer'], QuerygnosisPrimarytransferArgs, MeshContext>,
  /** null **/
  gnosisPrimarytransfers: InContextSdkMethod<Query['gnosisPrimarytransfers'], QuerygnosisPrimarytransfersArgs, MeshContext>,
  /** null **/
  gnosisPrimaryflashloan: InContextSdkMethod<Query['gnosisPrimaryflashloan'], QuerygnosisPrimaryflashloanArgs, MeshContext>,
  /** null **/
  gnosisPrimaryflashloans: InContextSdkMethod<Query['gnosisPrimaryflashloans'], QuerygnosisPrimaryflashloansArgs, MeshContext>,
  /** null **/
  gnosisPrimarydefaultOracle: InContextSdkMethod<Query['gnosisPrimarydefaultOracle'], QuerygnosisPrimarydefaultOracleArgs, MeshContext>,
  /** null **/
  gnosisPrimarydefaultOracles: InContextSdkMethod<Query['gnosisPrimarydefaultOracles'], QuerygnosisPrimarydefaultOraclesArgs, MeshContext>,
  /** null **/
  gnosisPrimaryflashLoanPremium: InContextSdkMethod<Query['gnosisPrimaryflashLoanPremium'], QuerygnosisPrimaryflashLoanPremiumArgs, MeshContext>,
  /** null **/
  gnosisPrimaryflashLoanPremiums: InContextSdkMethod<Query['gnosisPrimaryflashLoanPremiums'], QuerygnosisPrimaryflashLoanPremiumsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryprotocol: InContextSdkMethod<Query['gnosisPrimaryprotocol'], QuerygnosisPrimaryprotocolArgs, MeshContext>,
  /** null **/
  gnosisPrimaryprotocols: InContextSdkMethod<Query['gnosisPrimaryprotocols'], QuerygnosisPrimaryprotocolsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryevent: InContextSdkMethod<Query['gnosisPrimaryevent'], QuerygnosisPrimaryeventArgs, MeshContext>,
  /** null **/
  gnosisPrimaryevents: InContextSdkMethod<Query['gnosisPrimaryevents'], QuerygnosisPrimaryeventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  gnosisPrimary_meta: InContextSdkMethod<Query['gnosisPrimary_meta'], QuerygnosisPrimary_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  gnosisPrimarytoken: InContextSdkMethod<Subscription['gnosisPrimarytoken'], SubscriptiongnosisPrimarytokenArgs, MeshContext>,
  /** null **/
  gnosisPrimarytokens: InContextSdkMethod<Subscription['gnosisPrimarytokens'], SubscriptiongnosisPrimarytokensArgs, MeshContext>,
  /** null **/
  gnosisPrimaryrewardToken: InContextSdkMethod<Subscription['gnosisPrimaryrewardToken'], SubscriptiongnosisPrimaryrewardTokenArgs, MeshContext>,
  /** null **/
  gnosisPrimaryrewardTokens: InContextSdkMethod<Subscription['gnosisPrimaryrewardTokens'], SubscriptiongnosisPrimaryrewardTokensArgs, MeshContext>,
  /** null **/
  gnosisPrimaryinterestRate: InContextSdkMethod<Subscription['gnosisPrimaryinterestRate'], SubscriptiongnosisPrimaryinterestRateArgs, MeshContext>,
  /** null **/
  gnosisPrimaryinterestRates: InContextSdkMethod<Subscription['gnosisPrimaryinterestRates'], SubscriptiongnosisPrimaryinterestRatesArgs, MeshContext>,
  /** null **/
  gnosisPrimaryfee: InContextSdkMethod<Subscription['gnosisPrimaryfee'], SubscriptiongnosisPrimaryfeeArgs, MeshContext>,
  /** null **/
  gnosisPrimaryfees: InContextSdkMethod<Subscription['gnosisPrimaryfees'], SubscriptiongnosisPrimaryfeesArgs, MeshContext>,
  /** null **/
  gnosisPrimaryrevenueDetail: InContextSdkMethod<Subscription['gnosisPrimaryrevenueDetail'], SubscriptiongnosisPrimaryrevenueDetailArgs, MeshContext>,
  /** null **/
  gnosisPrimaryrevenueDetails: InContextSdkMethod<Subscription['gnosisPrimaryrevenueDetails'], SubscriptiongnosisPrimaryrevenueDetailsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryoracle: InContextSdkMethod<Subscription['gnosisPrimaryoracle'], SubscriptiongnosisPrimaryoracleArgs, MeshContext>,
  /** null **/
  gnosisPrimaryoracles: InContextSdkMethod<Subscription['gnosisPrimaryoracles'], SubscriptiongnosisPrimaryoraclesArgs, MeshContext>,
  /** null **/
  gnosisPrimarylendingProtocol: InContextSdkMethod<Subscription['gnosisPrimarylendingProtocol'], SubscriptiongnosisPrimarylendingProtocolArgs, MeshContext>,
  /** null **/
  gnosisPrimarylendingProtocols: InContextSdkMethod<Subscription['gnosisPrimarylendingProtocols'], SubscriptiongnosisPrimarylendingProtocolsArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarketList: InContextSdkMethod<Subscription['gnosisPrimarymarketList'], SubscriptiongnosisPrimarymarketListArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarketLists: InContextSdkMethod<Subscription['gnosisPrimarymarketLists'], SubscriptiongnosisPrimarymarketListsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryusageMetricsDailySnapshot: InContextSdkMethod<Subscription['gnosisPrimaryusageMetricsDailySnapshot'], SubscriptiongnosisPrimaryusageMetricsDailySnapshotArgs, MeshContext>,
  /** null **/
  gnosisPrimaryusageMetricsDailySnapshots: InContextSdkMethod<Subscription['gnosisPrimaryusageMetricsDailySnapshots'], SubscriptiongnosisPrimaryusageMetricsDailySnapshotsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryusageMetricsHourlySnapshot: InContextSdkMethod<Subscription['gnosisPrimaryusageMetricsHourlySnapshot'], SubscriptiongnosisPrimaryusageMetricsHourlySnapshotArgs, MeshContext>,
  /** null **/
  gnosisPrimaryusageMetricsHourlySnapshots: InContextSdkMethod<Subscription['gnosisPrimaryusageMetricsHourlySnapshots'], SubscriptiongnosisPrimaryusageMetricsHourlySnapshotsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryfinancialsDailySnapshot: InContextSdkMethod<Subscription['gnosisPrimaryfinancialsDailySnapshot'], SubscriptiongnosisPrimaryfinancialsDailySnapshotArgs, MeshContext>,
  /** null **/
  gnosisPrimaryfinancialsDailySnapshots: InContextSdkMethod<Subscription['gnosisPrimaryfinancialsDailySnapshots'], SubscriptiongnosisPrimaryfinancialsDailySnapshotsArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarket: InContextSdkMethod<Subscription['gnosisPrimarymarket'], SubscriptiongnosisPrimarymarketArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarkets: InContextSdkMethod<Subscription['gnosisPrimarymarkets'], SubscriptiongnosisPrimarymarketsArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarketDailySnapshot: InContextSdkMethod<Subscription['gnosisPrimarymarketDailySnapshot'], SubscriptiongnosisPrimarymarketDailySnapshotArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarketDailySnapshots: InContextSdkMethod<Subscription['gnosisPrimarymarketDailySnapshots'], SubscriptiongnosisPrimarymarketDailySnapshotsArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarketHourlySnapshot: InContextSdkMethod<Subscription['gnosisPrimarymarketHourlySnapshot'], SubscriptiongnosisPrimarymarketHourlySnapshotArgs, MeshContext>,
  /** null **/
  gnosisPrimarymarketHourlySnapshots: InContextSdkMethod<Subscription['gnosisPrimarymarketHourlySnapshots'], SubscriptiongnosisPrimarymarketHourlySnapshotsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryaccount: InContextSdkMethod<Subscription['gnosisPrimaryaccount'], SubscriptiongnosisPrimaryaccountArgs, MeshContext>,
  /** null **/
  gnosisPrimaryaccounts: InContextSdkMethod<Subscription['gnosisPrimaryaccounts'], SubscriptiongnosisPrimaryaccountsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryposition: InContextSdkMethod<Subscription['gnosisPrimaryposition'], SubscriptiongnosisPrimarypositionArgs, MeshContext>,
  /** null **/
  gnosisPrimarypositions: InContextSdkMethod<Subscription['gnosisPrimarypositions'], SubscriptiongnosisPrimarypositionsArgs, MeshContext>,
  /** null **/
  gnosisPrimarypositionSnapshot: InContextSdkMethod<Subscription['gnosisPrimarypositionSnapshot'], SubscriptiongnosisPrimarypositionSnapshotArgs, MeshContext>,
  /** null **/
  gnosisPrimarypositionSnapshots: InContextSdkMethod<Subscription['gnosisPrimarypositionSnapshots'], SubscriptiongnosisPrimarypositionSnapshotsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryactiveAccount: InContextSdkMethod<Subscription['gnosisPrimaryactiveAccount'], SubscriptiongnosisPrimaryactiveAccountArgs, MeshContext>,
  /** null **/
  gnosisPrimaryactiveAccounts: InContextSdkMethod<Subscription['gnosisPrimaryactiveAccounts'], SubscriptiongnosisPrimaryactiveAccountsArgs, MeshContext>,
  /** null **/
  gnosisPrimarypositionCounter: InContextSdkMethod<Subscription['gnosisPrimarypositionCounter'], SubscriptiongnosisPrimarypositionCounterArgs, MeshContext>,
  /** null **/
  gnosisPrimarypositionCounters: InContextSdkMethod<Subscription['gnosisPrimarypositionCounters'], SubscriptiongnosisPrimarypositionCountersArgs, MeshContext>,
  /** null **/
  gnosisPrimarydeposit: InContextSdkMethod<Subscription['gnosisPrimarydeposit'], SubscriptiongnosisPrimarydepositArgs, MeshContext>,
  /** null **/
  gnosisPrimarydeposits: InContextSdkMethod<Subscription['gnosisPrimarydeposits'], SubscriptiongnosisPrimarydepositsArgs, MeshContext>,
  /** null **/
  gnosisPrimarywithdraw: InContextSdkMethod<Subscription['gnosisPrimarywithdraw'], SubscriptiongnosisPrimarywithdrawArgs, MeshContext>,
  /** null **/
  gnosisPrimarywithdraws: InContextSdkMethod<Subscription['gnosisPrimarywithdraws'], SubscriptiongnosisPrimarywithdrawsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryborrow: InContextSdkMethod<Subscription['gnosisPrimaryborrow'], SubscriptiongnosisPrimaryborrowArgs, MeshContext>,
  /** null **/
  gnosisPrimaryborrows: InContextSdkMethod<Subscription['gnosisPrimaryborrows'], SubscriptiongnosisPrimaryborrowsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryrepay: InContextSdkMethod<Subscription['gnosisPrimaryrepay'], SubscriptiongnosisPrimaryrepayArgs, MeshContext>,
  /** null **/
  gnosisPrimaryrepays: InContextSdkMethod<Subscription['gnosisPrimaryrepays'], SubscriptiongnosisPrimaryrepaysArgs, MeshContext>,
  /** null **/
  gnosisPrimaryliquidate: InContextSdkMethod<Subscription['gnosisPrimaryliquidate'], SubscriptiongnosisPrimaryliquidateArgs, MeshContext>,
  /** null **/
  gnosisPrimaryliquidates: InContextSdkMethod<Subscription['gnosisPrimaryliquidates'], SubscriptiongnosisPrimaryliquidatesArgs, MeshContext>,
  /** null **/
  gnosisPrimarytransfer: InContextSdkMethod<Subscription['gnosisPrimarytransfer'], SubscriptiongnosisPrimarytransferArgs, MeshContext>,
  /** null **/
  gnosisPrimarytransfers: InContextSdkMethod<Subscription['gnosisPrimarytransfers'], SubscriptiongnosisPrimarytransfersArgs, MeshContext>,
  /** null **/
  gnosisPrimaryflashloan: InContextSdkMethod<Subscription['gnosisPrimaryflashloan'], SubscriptiongnosisPrimaryflashloanArgs, MeshContext>,
  /** null **/
  gnosisPrimaryflashloans: InContextSdkMethod<Subscription['gnosisPrimaryflashloans'], SubscriptiongnosisPrimaryflashloansArgs, MeshContext>,
  /** null **/
  gnosisPrimarydefaultOracle: InContextSdkMethod<Subscription['gnosisPrimarydefaultOracle'], SubscriptiongnosisPrimarydefaultOracleArgs, MeshContext>,
  /** null **/
  gnosisPrimarydefaultOracles: InContextSdkMethod<Subscription['gnosisPrimarydefaultOracles'], SubscriptiongnosisPrimarydefaultOraclesArgs, MeshContext>,
  /** null **/
  gnosisPrimaryflashLoanPremium: InContextSdkMethod<Subscription['gnosisPrimaryflashLoanPremium'], SubscriptiongnosisPrimaryflashLoanPremiumArgs, MeshContext>,
  /** null **/
  gnosisPrimaryflashLoanPremiums: InContextSdkMethod<Subscription['gnosisPrimaryflashLoanPremiums'], SubscriptiongnosisPrimaryflashLoanPremiumsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryprotocol: InContextSdkMethod<Subscription['gnosisPrimaryprotocol'], SubscriptiongnosisPrimaryprotocolArgs, MeshContext>,
  /** null **/
  gnosisPrimaryprotocols: InContextSdkMethod<Subscription['gnosisPrimaryprotocols'], SubscriptiongnosisPrimaryprotocolsArgs, MeshContext>,
  /** null **/
  gnosisPrimaryevent: InContextSdkMethod<Subscription['gnosisPrimaryevent'], SubscriptiongnosisPrimaryeventArgs, MeshContext>,
  /** null **/
  gnosisPrimaryevents: InContextSdkMethod<Subscription['gnosisPrimaryevents'], SubscriptiongnosisPrimaryeventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  gnosisPrimary_meta: InContextSdkMethod<Subscription['gnosisPrimary_meta'], SubscriptiongnosisPrimary_metaArgs, MeshContext>
  };

  export type Context = {
      ["gnosisPrimary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
