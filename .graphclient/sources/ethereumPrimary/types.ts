// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace EthereumPrimaryTypes {
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
  ethereumPrimaryBigDecimal: any;
  BigInt: any;
  ethereumPrimaryBytes: any;
  ethereumPrimaryInt8: any;
};

export type ethereumPrimaryAccount = {
  /**  { Account address }  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Number of positions this account has  */
  positionCount: Scalars['Int'];
  /**  All positions that belong to this account  */
  positions: Array<ethereumPrimaryPosition>;
  /**  Number of open positions this account has  */
  openPositionCount: Scalars['Int'];
  /**  Number of closed positions this account has  */
  closedPositionCount: Scalars['Int'];
  /**  Number of deposits this account made  */
  depositCount: Scalars['Int'];
  /**  All deposit events of this account  */
  deposits: Array<ethereumPrimaryDeposit>;
  /**  Number of withdrawals this account made  */
  withdrawCount: Scalars['Int'];
  /**  All withdraw events of this account  */
  withdraws: Array<ethereumPrimaryWithdraw>;
  /**  Number of borrows this account made  */
  borrowCount: Scalars['Int'];
  /**  All borrow events of this account  */
  borrows: Array<ethereumPrimaryBorrow>;
  /**  Number of repays this account made  */
  repayCount: Scalars['Int'];
  /**  All repay events of this account  */
  repays: Array<ethereumPrimaryRepay>;
  /**  Number of times this account liquidated a position  */
  liquidateCount: Scalars['Int'];
  /**  All liquidation events where this account was the liquidator  */
  liquidates: Array<ethereumPrimaryLiquidate>;
  /**  Number of times this account has been liquidated  */
  liquidationCount: Scalars['Int'];
  /**  All liquidation events where this account got liquidated  */
  liquidations: Array<ethereumPrimaryLiquidate>;
  /**  Number of times this account has transferred  */
  transferredCount: Scalars['Int'];
  /**  All transfer events where this account was the sender  */
  transfers: Array<ethereumPrimaryTransfer>;
  /**  Number of times this account has received a transfer  */
  receivedCount: Scalars['Int'];
  /**  All transfer events where this account was the receiver  */
  receives: Array<ethereumPrimaryTransfer>;
  /**  Number of times this account has executed a flashloan  */
  flashloanCount: Scalars['Int'];
  /**  All flashloan events where this account executed it  */
  flashloans: Array<ethereumPrimaryFlashloan>;
  /**  The amount of rewards claimed by this account in USD (use the USD value at the time of claiming)  */
  rewardsClaimedUSD?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  Markets that the account is using as collateral  */
  _enabledCollaterals?: Maybe<Array<ethereumPrimaryMarket>>;
  /**  efficient mode flag  */
  _eMode?: Maybe<Scalars['Boolean']>;
};


export type ethereumPrimaryAccountpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryPosition_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryPosition_filter>;
};


export type ethereumPrimaryAccountdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryDeposit_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryDeposit_filter>;
};


export type ethereumPrimaryAccountwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryWithdraw_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryWithdraw_filter>;
};


export type ethereumPrimaryAccountborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryBorrow_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryBorrow_filter>;
};


export type ethereumPrimaryAccountrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryRepay_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryRepay_filter>;
};


export type ethereumPrimaryAccountliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryLiquidate_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryLiquidate_filter>;
};


export type ethereumPrimaryAccountliquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryLiquidate_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryLiquidate_filter>;
};


export type ethereumPrimaryAccounttransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryTransfer_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryTransfer_filter>;
};


export type ethereumPrimaryAccountreceivesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryTransfer_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryTransfer_filter>;
};


export type ethereumPrimaryAccountflashloansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryFlashloan_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryFlashloan_filter>;
};


export type ethereumPrimaryAccount_enabledCollateralsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryMarket_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryMarket_filter>;
};

export type ethereumPrimaryAccount_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  positionCount?: InputMaybe<Scalars['Int']>;
  positionCount_not?: InputMaybe<Scalars['Int']>;
  positionCount_gt?: InputMaybe<Scalars['Int']>;
  positionCount_lt?: InputMaybe<Scalars['Int']>;
  positionCount_gte?: InputMaybe<Scalars['Int']>;
  positionCount_lte?: InputMaybe<Scalars['Int']>;
  positionCount_in?: InputMaybe<Array<Scalars['Int']>>;
  positionCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  positions_?: InputMaybe<ethereumPrimaryPosition_filter>;
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
  deposits_?: InputMaybe<ethereumPrimaryDeposit_filter>;
  withdrawCount?: InputMaybe<Scalars['Int']>;
  withdrawCount_not?: InputMaybe<Scalars['Int']>;
  withdrawCount_gt?: InputMaybe<Scalars['Int']>;
  withdrawCount_lt?: InputMaybe<Scalars['Int']>;
  withdrawCount_gte?: InputMaybe<Scalars['Int']>;
  withdrawCount_lte?: InputMaybe<Scalars['Int']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdraws_?: InputMaybe<ethereumPrimaryWithdraw_filter>;
  borrowCount?: InputMaybe<Scalars['Int']>;
  borrowCount_not?: InputMaybe<Scalars['Int']>;
  borrowCount_gt?: InputMaybe<Scalars['Int']>;
  borrowCount_lt?: InputMaybe<Scalars['Int']>;
  borrowCount_gte?: InputMaybe<Scalars['Int']>;
  borrowCount_lte?: InputMaybe<Scalars['Int']>;
  borrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  borrows_?: InputMaybe<ethereumPrimaryBorrow_filter>;
  repayCount?: InputMaybe<Scalars['Int']>;
  repayCount_not?: InputMaybe<Scalars['Int']>;
  repayCount_gt?: InputMaybe<Scalars['Int']>;
  repayCount_lt?: InputMaybe<Scalars['Int']>;
  repayCount_gte?: InputMaybe<Scalars['Int']>;
  repayCount_lte?: InputMaybe<Scalars['Int']>;
  repayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  repayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  repays_?: InputMaybe<ethereumPrimaryRepay_filter>;
  liquidateCount?: InputMaybe<Scalars['Int']>;
  liquidateCount_not?: InputMaybe<Scalars['Int']>;
  liquidateCount_gt?: InputMaybe<Scalars['Int']>;
  liquidateCount_lt?: InputMaybe<Scalars['Int']>;
  liquidateCount_gte?: InputMaybe<Scalars['Int']>;
  liquidateCount_lte?: InputMaybe<Scalars['Int']>;
  liquidateCount_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidateCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidates_?: InputMaybe<ethereumPrimaryLiquidate_filter>;
  liquidationCount?: InputMaybe<Scalars['Int']>;
  liquidationCount_not?: InputMaybe<Scalars['Int']>;
  liquidationCount_gt?: InputMaybe<Scalars['Int']>;
  liquidationCount_lt?: InputMaybe<Scalars['Int']>;
  liquidationCount_gte?: InputMaybe<Scalars['Int']>;
  liquidationCount_lte?: InputMaybe<Scalars['Int']>;
  liquidationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidations_?: InputMaybe<ethereumPrimaryLiquidate_filter>;
  transferredCount?: InputMaybe<Scalars['Int']>;
  transferredCount_not?: InputMaybe<Scalars['Int']>;
  transferredCount_gt?: InputMaybe<Scalars['Int']>;
  transferredCount_lt?: InputMaybe<Scalars['Int']>;
  transferredCount_gte?: InputMaybe<Scalars['Int']>;
  transferredCount_lte?: InputMaybe<Scalars['Int']>;
  transferredCount_in?: InputMaybe<Array<Scalars['Int']>>;
  transferredCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transfers_?: InputMaybe<ethereumPrimaryTransfer_filter>;
  receivedCount?: InputMaybe<Scalars['Int']>;
  receivedCount_not?: InputMaybe<Scalars['Int']>;
  receivedCount_gt?: InputMaybe<Scalars['Int']>;
  receivedCount_lt?: InputMaybe<Scalars['Int']>;
  receivedCount_gte?: InputMaybe<Scalars['Int']>;
  receivedCount_lte?: InputMaybe<Scalars['Int']>;
  receivedCount_in?: InputMaybe<Array<Scalars['Int']>>;
  receivedCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  receives_?: InputMaybe<ethereumPrimaryTransfer_filter>;
  flashloanCount?: InputMaybe<Scalars['Int']>;
  flashloanCount_not?: InputMaybe<Scalars['Int']>;
  flashloanCount_gt?: InputMaybe<Scalars['Int']>;
  flashloanCount_lt?: InputMaybe<Scalars['Int']>;
  flashloanCount_gte?: InputMaybe<Scalars['Int']>;
  flashloanCount_lte?: InputMaybe<Scalars['Int']>;
  flashloanCount_in?: InputMaybe<Array<Scalars['Int']>>;
  flashloanCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  flashloans_?: InputMaybe<ethereumPrimaryFlashloan_filter>;
  rewardsClaimedUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rewardsClaimedUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rewardsClaimedUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rewardsClaimedUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rewardsClaimedUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rewardsClaimedUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rewardsClaimedUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardsClaimedUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  _enabledCollaterals?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_not?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_contains?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_not_contains?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  _enabledCollaterals_?: InputMaybe<ethereumPrimaryMarket_filter>;
  _eMode?: InputMaybe<Scalars['Boolean']>;
  _eMode_not?: InputMaybe<Scalars['Boolean']>;
  _eMode_in?: InputMaybe<Array<Scalars['Boolean']>>;
  _eMode_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryAccount_filter>>>;
};

export type ethereumPrimaryAccount_orderBy =
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

export type ethereumPrimaryBlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type ethereumPrimaryBlock_height = {
  hash?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type ethereumPrimaryBorrow = ethereumPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['ethereumPrimaryBytes'];
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
  account: ethereumPrimaryAccount;
  /**  Account that receives the funds from the new debt  */
  accountActor?: Maybe<ethereumPrimaryAccount>;
  /**  The market tokens are borrowed/minted from  */
  market: ethereumPrimaryMarket;
  /**  The user position changed by this event  */
  position: ethereumPrimaryPosition;
  /**  Token borrowed  */
  asset: ethereumPrimaryToken;
  /**  Amount of token borrowed in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token borrowed in USD  */
  amountUSD: Scalars['ethereumPrimaryBigDecimal'];
};

export type ethereumPrimaryBorrow_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  account_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  accountActor_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  market_?: InputMaybe<ethereumPrimaryMarket_filter>;
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
  position_?: InputMaybe<ethereumPrimaryPosition_filter>;
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
  asset_?: InputMaybe<ethereumPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryBorrow_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryBorrow_filter>>>;
};

export type ethereumPrimaryBorrow_orderBy =
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

export type ethereumPrimaryCollateralizationType =
  /**  Over collateralized protocols require users to put up more collateral than the amount borrowed.  */
  | 'OVER_COLLATERALIZED'
  /**  Protocols that allow users to borrow more than their collateral locked.   */
  | 'UNDER_COLLATERALIZED'
  /**  Protocols that allow users to borrow without any collateral. Generally this protocol is KYC'd and only whitelist users can do this  */
  | 'UNCOLLATERALIZED';

export type ethereumPrimaryDeposit = ethereumPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['ethereumPrimaryBytes'];
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
  account: ethereumPrimaryAccount;
  /**  Account that executed the deposit (e.g. a deposit on behalf of account)  */
  accountActor?: Maybe<ethereumPrimaryAccount>;
  /**  The market tokens are deposited to  */
  market: ethereumPrimaryMarket;
  /**  The user position changed by this event  */
  position: ethereumPrimaryPosition;
  /**  Token deposited  */
  asset: ethereumPrimaryToken;
  /**  Amount of token deposited in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token deposited in USD  */
  amountUSD: Scalars['ethereumPrimaryBigDecimal'];
};

export type ethereumPrimaryDeposit_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  account_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  accountActor_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  market_?: InputMaybe<ethereumPrimaryMarket_filter>;
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
  position_?: InputMaybe<ethereumPrimaryPosition_filter>;
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
  asset_?: InputMaybe<ethereumPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryDeposit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryDeposit_filter>>>;
};

export type ethereumPrimaryDeposit_orderBy =
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
export type ethereumPrimaryEvent = {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['ethereumPrimaryBytes'];
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
  market: ethereumPrimaryMarket;
  /**  Token deposited  */
  asset: ethereumPrimaryToken;
  /**  Amount of token deposited in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token deposited in USD  */
  amountUSD: Scalars['ethereumPrimaryBigDecimal'];
};

export type ethereumPrimaryEvent_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  market_?: InputMaybe<ethereumPrimaryMarket_filter>;
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
  asset_?: InputMaybe<ethereumPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryEvent_filter>>>;
};

export type ethereumPrimaryEvent_orderBy =
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

export type ethereumPrimaryFee = {
  /**  { Fee type }  */
  id: Scalars['ID'];
  /**  Fee in percentage. E.g. 5.21% should be stored as 5.21  */
  rate?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  A flat fee in the native token. This may be a base fee in addition to the rate, or the only fee.  */
  flatFee?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  The type of fee (e.g. liquidation, admin, etc.)  */
  type: ethereumPrimaryFeeType;
};

export type ethereumPrimaryFeeType =
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

export type ethereumPrimaryFee_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rate?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rate_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rate_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rate_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rate_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rate_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rate_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rate_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  flatFee?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  flatFee_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  flatFee_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  flatFee_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  flatFee_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  flatFee_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  flatFee_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  flatFee_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  type?: InputMaybe<ethereumPrimaryFeeType>;
  type_not?: InputMaybe<ethereumPrimaryFeeType>;
  type_in?: InputMaybe<Array<ethereumPrimaryFeeType>>;
  type_not_in?: InputMaybe<Array<ethereumPrimaryFeeType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryFee_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryFee_filter>>>;
};

export type ethereumPrimaryFee_orderBy =
  | 'id'
  | 'rate'
  | 'flatFee'
  | 'type';

export type ethereumPrimaryFinancialsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Number of days since Unix epoch time  */
  days: Scalars['Int'];
  /**  Protocol this snapshot is associated with  */
  protocol: ethereumPrimaryLendingProtocol;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  Total supply of minted tokens in native amounts, with same ordering as mintedTokens. Only applies to CDP  */
  mintedTokenSupplies?: Maybe<Array<Scalars['BigInt']>>;
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  dailySupplySideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  dailyProtocolSideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  dailyTotalRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Details of revenue sources and amounts  */
  revenueDetail?: Maybe<ethereumPrimaryRevenueDetail>;
  /**  Current balance of all deposited assets, in USD. Note this metric should be the same as TVL.  */
  totalDepositBalanceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets deposited on a given day, in USD  */
  dailyDepositUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Current balance of all borrowed/minted assets, in USD.  */
  totalBorrowBalanceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets borrowed/minted on a given day, in USD.  */
  dailyBorrowUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination).  */
  cumulativeBorrowUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets liquidated on a given day, in USD.  */
  dailyLiquidateUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets withdrawn on a given day, in USD.  */
  dailyWithdrawUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets repaid on a given day, in USD.  */
  dailyRepayUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets transferred on a given day, in USD.  */
  dailyTransferUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total flashloans executed on a given day, in USD.  */
  dailyFlashloanUSD: Scalars['ethereumPrimaryBigDecimal'];
};

export type ethereumPrimaryFinancialsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  protocol_?: InputMaybe<ethereumPrimaryLendingProtocol_filter>;
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
  totalValueLockedUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  mintedTokenSupplies?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedTokenSupplies_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  revenueDetail_?: InputMaybe<ethereumPrimaryRevenueDetail_filter>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyDepositUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyDepositUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyDepositUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyDepositUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyDepositUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyDepositUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyDepositUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyDepositUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyBorrowUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyBorrowUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyBorrowUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyBorrowUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyBorrowUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyBorrowUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyBorrowUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyBorrowUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyLiquidateUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyLiquidateUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyLiquidateUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyLiquidateUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyLiquidateUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyLiquidateUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyLiquidateUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyWithdrawUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyWithdrawUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyWithdrawUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyWithdrawUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyWithdrawUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyWithdrawUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyWithdrawUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyWithdrawUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyRepayUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyRepayUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyRepayUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyRepayUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyRepayUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyRepayUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyRepayUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyRepayUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyTransferUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTransferUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTransferUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTransferUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTransferUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTransferUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTransferUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyTransferUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyFlashloanUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyFlashloanUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyFlashloanUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyFlashloanUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyFlashloanUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyFlashloanUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyFlashloanUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyFlashloanUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryFinancialsDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryFinancialsDailySnapshot_filter>>>;
};

export type ethereumPrimaryFinancialsDailySnapshot_orderBy =
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

export type ethereumPrimaryFlashloan = ethereumPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['ethereumPrimaryBytes'];
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
  account: ethereumPrimaryAccount;
  /**  Account that initiates the flashloan  */
  accountActor?: Maybe<ethereumPrimaryAccount>;
  /**  The market in which this flashloan is executed  */
  market: ethereumPrimaryMarket;
  /**  Asset borrowed  */
  asset: ethereumPrimaryToken;
  /**  Amount of asset borrowed in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of asset borrowed in USD  */
  amountUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Amount of asset taken by protocol as a fee in native units  */
  feeAmount?: Maybe<Scalars['BigInt']>;
  /**  Amount of asset taken by protocol as a fee in USD  */
  feeAmountUSD?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
};

export type ethereumPrimaryFlashloan_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  account_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  accountActor_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  market_?: InputMaybe<ethereumPrimaryMarket_filter>;
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
  asset_?: InputMaybe<ethereumPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  feeAmount?: InputMaybe<Scalars['BigInt']>;
  feeAmount_not?: InputMaybe<Scalars['BigInt']>;
  feeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  feeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  feeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  feeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  feeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeAmountUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  feeAmountUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  feeAmountUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  feeAmountUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  feeAmountUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  feeAmountUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  feeAmountUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  feeAmountUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryFlashloan_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryFlashloan_filter>>>;
};

export type ethereumPrimaryFlashloan_orderBy =
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

export type ethereumPrimaryInterestRate = {
  /**  { Interest rate side }-{ Interest rate type }-{ Market ID }-{ Optional: Tranche }-{ Optional: # days/hours since epoch time }  */
  id: Scalars['ID'];
  /**  Interest rate in percentage APY. E.g. 5.21% should be stored as 5.21  */
  rate: Scalars['ethereumPrimaryBigDecimal'];
  /**  Duration of the loan in days. Only applies to fixed term lending (e.g. Notional)  */
  duration?: Maybe<Scalars['Int']>;
  /**  Maturity of the loan in block height. Only applies to fixed term lending (e.g. Notional)  */
  maturityBlock?: Maybe<Scalars['BigInt']>;
  /**  The party the interest is paid to / received from  */
  side: ethereumPrimaryInterestRateSide;
  /**  The type of interest rate (e.g. stable, fixed, variable, etc)  */
  type: ethereumPrimaryInterestRateType;
  /**  The level of debt priority at this interest rate  */
  tranche?: Maybe<ethereumPrimaryTranche>;
};

export type ethereumPrimaryInterestRateSide =
  /**  Interest rate accrued by lenders  */
  | 'LENDER'
  /**  Interest rate paid by borrowers  */
  | 'BORROWER';

export type ethereumPrimaryInterestRateType =
  /**  Stable interest rate (e.g. Aave)  */
  | 'STABLE'
  /**  Variable interest rate (e.g. Compound)  */
  | 'VARIABLE'
  /**  Fixed interest rate (e.g. Notional)  */
  | 'FIXED';

export type ethereumPrimaryInterestRate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rate?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rate_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rate_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rate_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rate_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rate_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  rate_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rate_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  side?: InputMaybe<ethereumPrimaryInterestRateSide>;
  side_not?: InputMaybe<ethereumPrimaryInterestRateSide>;
  side_in?: InputMaybe<Array<ethereumPrimaryInterestRateSide>>;
  side_not_in?: InputMaybe<Array<ethereumPrimaryInterestRateSide>>;
  type?: InputMaybe<ethereumPrimaryInterestRateType>;
  type_not?: InputMaybe<ethereumPrimaryInterestRateType>;
  type_in?: InputMaybe<Array<ethereumPrimaryInterestRateType>>;
  type_not_in?: InputMaybe<Array<ethereumPrimaryInterestRateType>>;
  tranche?: InputMaybe<ethereumPrimaryTranche>;
  tranche_not?: InputMaybe<ethereumPrimaryTranche>;
  tranche_in?: InputMaybe<Array<ethereumPrimaryTranche>>;
  tranche_not_in?: InputMaybe<Array<ethereumPrimaryTranche>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryInterestRate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryInterestRate_filter>>>;
};

export type ethereumPrimaryInterestRate_orderBy =
  | 'id'
  | 'rate'
  | 'duration'
  | 'maturityBlock'
  | 'side'
  | 'type'
  | 'tranche';

export type ethereumPrimaryLendingProtocol = ethereumPrimaryProtocol & {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['ethereumPrimaryBytes'];
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
  network: ethereumPrimaryNetwork;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ethereumPrimaryProtocolType;
  /**  The specific lending protocol type  */
  lendingType?: Maybe<ethereumPrimaryLendingType>;
  /**  The specific permissions required to lend in this protocol  */
  lenderPermissionType?: Maybe<ethereumPrimaryPermissionType>;
  /**  The specific permissions required to borrow from this protocol  */
  borrowerPermissionType?: Maybe<ethereumPrimaryPermissionType>;
  /**  The specific permissions required to create a pool (market) in this protocol  */
  poolCreatorPermissionType?: Maybe<ethereumPrimaryPermissionType>;
  /**  Risk type of the lending protocol  */
  riskType?: Maybe<ethereumPrimaryRiskType>;
  /**  The way a positions can be collateralized  */
  collateralizationType?: Maybe<ethereumPrimaryCollateralizationType>;
  /**  Tokens that can be minted. Only applies to CDP (usually stable coins)  */
  mintedTokens?: Maybe<Array<ethereumPrimaryToken>>;
  /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs.  */
  rewardTokens?: Maybe<Array<ethereumPrimaryRewardToken>>;
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
  totalValueLockedUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All fees in the protocol. Fee should be in percentage format. e.g. 0.30% liquidation fee  */
  fees?: Maybe<Array<ethereumPrimaryFee>>;
  /**  Details of revenue sources and amounts  */
  revenueDetail?: Maybe<ethereumPrimaryRevenueDetail>;
  /**  Current balance of all deposited assets, in USD. Note this metric should be the same as TVL.  */
  totalDepositBalanceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination).  */
  cumulativeBorrowUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['ethereumPrimaryBigDecimal'];
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
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<ethereumPrimaryUsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<ethereumPrimaryUsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<ethereumPrimaryFinancialsDailySnapshot>;
  /**  All markets that belong to this protocol  */
  markets: Array<ethereumPrimaryMarket>;
};


export type ethereumPrimaryLendingProtocolmintedTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryToken_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryToken_filter>;
};


export type ethereumPrimaryLendingProtocolrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryRewardToken_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryRewardToken_filter>;
};


export type ethereumPrimaryLendingProtocolfeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryFee_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryFee_filter>;
};


export type ethereumPrimaryLendingProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryUsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryUsageMetricsDailySnapshot_filter>;
};


export type ethereumPrimaryLendingProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryUsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryUsageMetricsHourlySnapshot_filter>;
};


export type ethereumPrimaryLendingProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryFinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryFinancialsDailySnapshot_filter>;
};


export type ethereumPrimaryLendingProtocolmarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryMarket_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryMarket_filter>;
};

export type ethereumPrimaryLendingProtocol_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  network?: InputMaybe<ethereumPrimaryNetwork>;
  network_not?: InputMaybe<ethereumPrimaryNetwork>;
  network_in?: InputMaybe<Array<ethereumPrimaryNetwork>>;
  network_not_in?: InputMaybe<Array<ethereumPrimaryNetwork>>;
  type?: InputMaybe<ethereumPrimaryProtocolType>;
  type_not?: InputMaybe<ethereumPrimaryProtocolType>;
  type_in?: InputMaybe<Array<ethereumPrimaryProtocolType>>;
  type_not_in?: InputMaybe<Array<ethereumPrimaryProtocolType>>;
  lendingType?: InputMaybe<ethereumPrimaryLendingType>;
  lendingType_not?: InputMaybe<ethereumPrimaryLendingType>;
  lendingType_in?: InputMaybe<Array<ethereumPrimaryLendingType>>;
  lendingType_not_in?: InputMaybe<Array<ethereumPrimaryLendingType>>;
  lenderPermissionType?: InputMaybe<ethereumPrimaryPermissionType>;
  lenderPermissionType_not?: InputMaybe<ethereumPrimaryPermissionType>;
  lenderPermissionType_in?: InputMaybe<Array<ethereumPrimaryPermissionType>>;
  lenderPermissionType_not_in?: InputMaybe<Array<ethereumPrimaryPermissionType>>;
  borrowerPermissionType?: InputMaybe<ethereumPrimaryPermissionType>;
  borrowerPermissionType_not?: InputMaybe<ethereumPrimaryPermissionType>;
  borrowerPermissionType_in?: InputMaybe<Array<ethereumPrimaryPermissionType>>;
  borrowerPermissionType_not_in?: InputMaybe<Array<ethereumPrimaryPermissionType>>;
  poolCreatorPermissionType?: InputMaybe<ethereumPrimaryPermissionType>;
  poolCreatorPermissionType_not?: InputMaybe<ethereumPrimaryPermissionType>;
  poolCreatorPermissionType_in?: InputMaybe<Array<ethereumPrimaryPermissionType>>;
  poolCreatorPermissionType_not_in?: InputMaybe<Array<ethereumPrimaryPermissionType>>;
  riskType?: InputMaybe<ethereumPrimaryRiskType>;
  riskType_not?: InputMaybe<ethereumPrimaryRiskType>;
  riskType_in?: InputMaybe<Array<ethereumPrimaryRiskType>>;
  riskType_not_in?: InputMaybe<Array<ethereumPrimaryRiskType>>;
  collateralizationType?: InputMaybe<ethereumPrimaryCollateralizationType>;
  collateralizationType_not?: InputMaybe<ethereumPrimaryCollateralizationType>;
  collateralizationType_in?: InputMaybe<Array<ethereumPrimaryCollateralizationType>>;
  collateralizationType_not_in?: InputMaybe<Array<ethereumPrimaryCollateralizationType>>;
  mintedTokens?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  mintedTokens_?: InputMaybe<ethereumPrimaryToken_filter>;
  rewardTokens?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_?: InputMaybe<ethereumPrimaryRewardToken_filter>;
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
  totalValueLockedUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  fees?: InputMaybe<Array<Scalars['String']>>;
  fees_not?: InputMaybe<Array<Scalars['String']>>;
  fees_contains?: InputMaybe<Array<Scalars['String']>>;
  fees_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fees_not_contains?: InputMaybe<Array<Scalars['String']>>;
  fees_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  fees_?: InputMaybe<ethereumPrimaryFee_filter>;
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
  revenueDetail_?: InputMaybe<ethereumPrimaryRevenueDetail_filter>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyUsageMetrics_?: InputMaybe<ethereumPrimaryUsageMetricsDailySnapshot_filter>;
  hourlyUsageMetrics_?: InputMaybe<ethereumPrimaryUsageMetricsHourlySnapshot_filter>;
  financialMetrics_?: InputMaybe<ethereumPrimaryFinancialsDailySnapshot_filter>;
  markets_?: InputMaybe<ethereumPrimaryMarket_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryLendingProtocol_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryLendingProtocol_filter>>>;
};

export type ethereumPrimaryLendingProtocol_orderBy =
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

export type ethereumPrimaryLendingType =
  /**  Collateralized Debt Position (CDP) protocols have singular isolated positions created by users. We aggregate them to give a single view of a market  */
  | 'CDP'
  /**  Pooled protocols pool all users assets into a single market  */
  | 'POOLED';

export type ethereumPrimaryLiquidate = ethereumPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['ethereumPrimaryBytes'];
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
  liquidator: ethereumPrimaryAccount;
  /**  Account that got liquidated  */
  liquidatee: ethereumPrimaryAccount;
  /**  The market of the collateral being used  */
  market: ethereumPrimaryMarket;
  /**  The user position changed by this event  */
  positions: Array<ethereumPrimaryPosition>;
  /**  Asset repaid (borrowed)  */
  asset: ethereumPrimaryToken;
  /**  Amount of collateral liquidated in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of collateral liquidated in USD  */
  amountUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Amount of profit from liquidation in USD  */
  profitUSD: Scalars['ethereumPrimaryBigDecimal'];
};


export type ethereumPrimaryLiquidatepositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryPosition_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryPosition_filter>;
};

export type ethereumPrimaryLiquidate_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  liquidator_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  liquidatee_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  market_?: InputMaybe<ethereumPrimaryMarket_filter>;
  positions?: InputMaybe<Array<Scalars['String']>>;
  positions_not?: InputMaybe<Array<Scalars['String']>>;
  positions_contains?: InputMaybe<Array<Scalars['String']>>;
  positions_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  positions_not_contains?: InputMaybe<Array<Scalars['String']>>;
  positions_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  positions_?: InputMaybe<ethereumPrimaryPosition_filter>;
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
  asset_?: InputMaybe<ethereumPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  profitUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  profitUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  profitUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  profitUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  profitUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  profitUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  profitUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  profitUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryLiquidate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryLiquidate_filter>>>;
};

export type ethereumPrimaryLiquidate_orderBy =
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
export type ethereumPrimaryMarket = {
  /**  Smart contract address of the market  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  The protocol this pool belongs to  */
  protocol: ethereumPrimaryLendingProtocol;
  /**  Name of market  */
  name?: Maybe<Scalars['String']>;
  /**  Is this market active or is it frozen  */
  isActive: Scalars['Boolean'];
  /**  Can you borrow from this market  */
  canBorrowFrom: Scalars['Boolean'];
  /**  Can you use the output token as collateral  */
  canUseAsCollateral: Scalars['Boolean'];
  /**  Maximum loan-to-value ratio as a percentage value (e.g. 75% for DAI in Aave)  */
  maximumLTV: Scalars['ethereumPrimaryBigDecimal'];
  /**  Liquidation threshold as a percentage value (e.g. 80% for DAI in Aave). When it is reached, the position is defined as undercollateralised and could be liquidated  */
  liquidationThreshold: Scalars['ethereumPrimaryBigDecimal'];
  /**  Liquidation penalty (or the liquidation bonus for liquidators) as a percentage value. It is the penalty/bonus price on the collateral when liquidators purchase it as part of the liquidation of a loan that has passed the liquidation threshold  */
  liquidationPenalty: Scalars['ethereumPrimaryBigDecimal'];
  /**  Can the user choose to isolate assets in this market. e.g. only this market's collateral can be used for a borrow in Aave V3  */
  canIsolate: Scalars['Boolean'];
  /**  Creation timestamp  */
  createdTimestamp: Scalars['BigInt'];
  /**  Creation block number  */
  createdBlockNumber: Scalars['BigInt'];
  /**  Details about the price oracle used to get this token's price  */
  oracle?: Maybe<ethereumPrimaryOracle>;
  /**  A unique identifier that can relate multiple markets. e.g. a common address that is the same for each related market. This is useful for markets with multiple input tokens  */
  relation?: Maybe<Scalars['ethereumPrimaryBytes']>;
  /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<ethereumPrimaryRewardToken>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /**  Total supply of output tokens that are staked. Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
  /**  Token that need to be deposited in this market to take a position in protocol (should be alphabetized)  */
  inputToken: ethereumPrimaryToken;
  /**  Amount of input token in the market (same order as inputTokens)  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Prices in USD of the input token (same order as inputTokens)  */
  inputTokenPriceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Tokens that are minted to track ownership of position in protocol (e.g. aToken, cToken). Leave as null if doesn't exist (should be alphabetized)  */
  outputToken?: Maybe<ethereumPrimaryToken>;
  /**  Total supply of output token (same order as outputTokens)  */
  outputTokenSupply?: Maybe<Scalars['BigInt']>;
  /**  Prices in USD of the output token (same order as outputTokens)  */
  outputTokenPriceUSD?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  Amount of input token per full share of output token. Only applies when the output token exists (note this is a ratio and not a percentage value, i.e. 1.05 instead of 105%)  */
  exchangeRate?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  All interest rates for this input token. Should be in APR format  */
  rates?: Maybe<Array<ethereumPrimaryInterestRate>>;
  /**  Total amount of reserves (in USD)  */
  reserves?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  The amount of revenue that is converted to reserves at the current time. 20% reserve factor should be in format 0.20  */
  reserveFactor?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  The token that can be borrowed (e.g. inputToken in POOLED and generally a stable in CDPs)  */
  borrowedToken?: Maybe<ethereumPrimaryToken>;
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
  totalValueLockedUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All revenue generated by the market, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All revenue generated by the market, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All revenue generated by the market.  */
  cumulativeTotalRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Details of revenue sources and amounts  */
  revenueDetail?: Maybe<ethereumPrimaryRevenueDetail>;
  /**  Current balance of all deposited assets (not historical cumulative), in USD  */
  totalDepositBalanceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD  */
  totalBorrowBalanceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical transfers in USD  */
  cumulativeTransferUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical flashloans in USD  */
  cumulativeFlashloanUSD: Scalars['ethereumPrimaryBigDecimal'];
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
  positions: Array<ethereumPrimaryPosition>;
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
  dailySnapshots: Array<ethereumPrimaryMarketDailySnapshot>;
  /**  Market hourly snapshots  */
  hourlySnapshots: Array<ethereumPrimaryMarketHourlySnapshot>;
  /**  All deposits made to this market  */
  deposits: Array<ethereumPrimaryDeposit>;
  /**  All withdrawals made from this market  */
  withdraws: Array<ethereumPrimaryWithdraw>;
  /**  All borrows from this market  */
  borrows: Array<ethereumPrimaryBorrow>;
  /**  All repayments to this market  */
  repays: Array<ethereumPrimaryRepay>;
  /**  All liquidations made to this market  */
  liquidates: Array<ethereumPrimaryLiquidate>;
  /**  All transfers made in this market  */
  transfers: Array<ethereumPrimaryTransfer>;
  /**  All flashloans made in this market */
  flashloans: Array<ethereumPrimaryFlashloan>;
  /**  Rewards borrow speed for this market */
  _baseTrackingBorrowSpeed?: Maybe<Scalars['BigInt']>;
  /**  Rewards supply speed for this market */
  _baseTrackingSupplySpeed?: Maybe<Scalars['BigInt']>;
  /**  The variable debt token address correlated to the reserve asset  */
  _vToken?: Maybe<ethereumPrimaryToken>;
  /**  The stable debt token address correlated to the reserve asset  */
  _sToken?: Maybe<ethereumPrimaryToken>;
  /**  The state of the protocol prior to being paused (isActive / canUseAsCollateral / canBorrowFrom)  */
  _prePauseState?: Maybe<Array<Scalars['Boolean']>>;
  /**  Aux: Timestamp of the last time rewards were calculated for this market.  */
  _lastRewardsUpdated?: Maybe<Scalars['BigInt']>;
  /**  proportion of liquidation bonus (liquidation penalty) going to the protocol  */
  _liquidationProtocolFee?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  _siloedBorrowing?: Maybe<Scalars['Boolean']>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type ethereumPrimaryMarketrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryRewardToken_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryRewardToken_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type ethereumPrimaryMarketratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryInterestRate_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryInterestRate_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type ethereumPrimaryMarketpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryPosition_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryPosition_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type ethereumPrimaryMarketdailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryMarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryMarketDailySnapshot_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type ethereumPrimaryMarkethourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryMarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryMarketHourlySnapshot_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type ethereumPrimaryMarketdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryDeposit_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryDeposit_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type ethereumPrimaryMarketwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryWithdraw_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryWithdraw_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type ethereumPrimaryMarketborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryBorrow_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryBorrow_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type ethereumPrimaryMarketrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryRepay_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryRepay_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type ethereumPrimaryMarketliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryLiquidate_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryLiquidate_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type ethereumPrimaryMarkettransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryTransfer_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryTransfer_filter>;
};


/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type ethereumPrimaryMarketflashloansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryFlashloan_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryFlashloan_filter>;
};

export type ethereumPrimaryMarketDailySnapshot = {
  /**  { Smart contract address of the market }{ # of days since Unix epoch time }  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Number of days since Unix epoch time  */
  days: Scalars['Int'];
  /**  The protocol this snapshot belongs to  */
  protocol: ethereumPrimaryLendingProtocol;
  /**  The pool this snapshot belongs to  */
  market: ethereumPrimaryMarket;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  A unique identifier that can relate multiple markets together. e.g. a common address that they all share. This is useful for markets with multiple input tokens  */
  relation?: Maybe<Scalars['ethereumPrimaryBytes']>;
  /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<ethereumPrimaryRewardToken>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /**  Total supply of output tokens that are staked. Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
  /**  Amount of input token in the market (same order as inputTokens)  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Prices in USD of the input token (same order as inputTokens)  */
  inputTokenPriceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total supply of output token (same order as outputTokens)  */
  outputTokenSupply?: Maybe<Scalars['BigInt']>;
  /**  Prices in USD of the output token (same order as outputTokens)  */
  outputTokenPriceUSD?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  Amount of input token per full share of output token. Only applies when the output token exists (note this is a ratio and not a percentage value, i.e. 1.05 instead of 105%)  */
  exchangeRate?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  All interest rates for this input token. Should be in APR format  */
  rates?: Maybe<Array<ethereumPrimaryInterestRate>>;
  /**  Total amount of reserves (in USD)  */
  reserves?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  The amount of revenue that is converted to reserves at the current time. 20% reserve factor should be in format 0.20  */
  reserveFactor?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  Amount of input tokens borrowed in this market using variable interest rates (in native terms)  */
  variableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
  /**  Amount of input tokens borrowed in this market using stable interest rates (in native terms)  */
  stableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
  /**  Allowed limit to how much of the underlying asset can be supplied to this market.  */
  supplyCap?: Maybe<Scalars['BigInt']>;
  /**  Allowed limit for how much of the underlying asset can be borrowed from this market.  */
  borrowCap?: Maybe<Scalars['BigInt']>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All revenue generated by the market, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Daily revenue generated by the market, accrued to the supply side.  */
  dailySupplySideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All revenue generated by the market, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Daily revenue generated by the market, accrued to the protocol.  */
  dailyProtocolSideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All revenue generated by the market.  */
  cumulativeTotalRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Daily revenue generated by the market.  */
  dailyTotalRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Details of revenue sources and amounts  */
  revenueDetail?: Maybe<ethereumPrimaryRevenueDetail>;
  /**  Current balance of all deposited assets (not historical cumulative), in USD. Same as pool TVL.  */
  totalDepositBalanceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all deposits made on a given day, in USD  */
  dailyDepositUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all the deposits on a given day, in native units  */
  dailyNativeDeposit: Scalars['BigInt'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all borrows/mints made on a given day, in USD  */
  dailyBorrowUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all the borrows on a given day, in native units  */
  dailyNativeBorrow: Scalars['BigInt'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets liquidated on a given day, in USD.  */
  dailyLiquidateUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets liquidated on a given day, in native units.  */
  dailyNativeLiquidate: Scalars['BigInt'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets withdrawn on a given day, in USD.  */
  dailyWithdrawUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets withdrawn on a given day, in native units.  */
  dailyNativeWithdraw: Scalars['BigInt'];
  /**  Total assets repaid on a given day, in USD.  */
  dailyRepayUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets repaid on a given day, in native units.  */
  dailyNativeRepay: Scalars['BigInt'];
  /**  Total assets transferred on a given day, in USD.  */
  dailyTransferUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets transferred on a given day, in native units.  */
  dailyNativeTransfer: Scalars['BigInt'];
  /**  Sum of all historical transfers in USD  */
  cumulativeTransferUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets flashloaned on a given day, in USD.  */
  dailyFlashloanUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets flashloaned on a given day, in native units.  */
  dailyNativeFlashloan: Scalars['BigInt'];
  /**  Sum of all historical flashloans in USD  */
  cumulativeFlashloanUSD: Scalars['ethereumPrimaryBigDecimal'];
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


export type ethereumPrimaryMarketDailySnapshotrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryRewardToken_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryRewardToken_filter>;
};


export type ethereumPrimaryMarketDailySnapshotratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryInterestRate_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryInterestRate_filter>;
};

export type ethereumPrimaryMarketDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  protocol_?: InputMaybe<ethereumPrimaryLendingProtocol_filter>;
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
  market_?: InputMaybe<ethereumPrimaryMarket_filter>;
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
  relation?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  relation_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  relation_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  rewardTokens?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_?: InputMaybe<ethereumPrimaryRewardToken_filter>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  inputTokenPriceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_?: InputMaybe<ethereumPrimaryInterestRate_filter>;
  reserves?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  reserves_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  reserveFactor?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserveFactor_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserveFactor_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserveFactor_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserveFactor_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserveFactor_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserveFactor_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  reserveFactor_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  totalValueLockedUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  revenueDetail_?: InputMaybe<ethereumPrimaryRevenueDetail_filter>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyDepositUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyDepositUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyDepositUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyDepositUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyDepositUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyDepositUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyDepositUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyDepositUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyNativeDeposit?: InputMaybe<Scalars['BigInt']>;
  dailyNativeDeposit_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyBorrowUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyBorrowUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyBorrowUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyBorrowUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyBorrowUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyBorrowUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyBorrowUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyBorrowUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyNativeBorrow?: InputMaybe<Scalars['BigInt']>;
  dailyNativeBorrow_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeBorrow_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeBorrow_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeBorrow_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeBorrow_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeBorrow_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeBorrow_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyLiquidateUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyLiquidateUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyLiquidateUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyLiquidateUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyLiquidateUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyLiquidateUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyLiquidateUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyNativeLiquidate?: InputMaybe<Scalars['BigInt']>;
  dailyNativeLiquidate_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeLiquidate_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeLiquidate_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeLiquidate_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeLiquidate_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeLiquidate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeLiquidate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyWithdrawUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyWithdrawUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyWithdrawUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyWithdrawUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyWithdrawUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyWithdrawUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyWithdrawUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyWithdrawUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyNativeWithdraw?: InputMaybe<Scalars['BigInt']>;
  dailyNativeWithdraw_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeWithdraw_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeWithdraw_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeWithdraw_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeWithdraw_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeWithdraw_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeWithdraw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyRepayUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyRepayUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyRepayUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyRepayUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyRepayUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyRepayUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyRepayUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyRepayUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyNativeRepay?: InputMaybe<Scalars['BigInt']>;
  dailyNativeRepay_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeRepay_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeRepay_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeRepay_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeRepay_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeRepay_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeRepay_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyTransferUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTransferUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTransferUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTransferUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTransferUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTransferUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyTransferUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyTransferUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyNativeTransfer?: InputMaybe<Scalars['BigInt']>;
  dailyNativeTransfer_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeTransfer_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeTransfer_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeTransfer_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeTransfer_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeTransfer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeTransfer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeTransferUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTransferUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTransferUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTransferUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTransferUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTransferUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTransferUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTransferUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyFlashloanUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyFlashloanUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyFlashloanUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyFlashloanUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyFlashloanUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyFlashloanUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  dailyFlashloanUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyFlashloanUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  dailyNativeFlashloan?: InputMaybe<Scalars['BigInt']>;
  dailyNativeFlashloan_not?: InputMaybe<Scalars['BigInt']>;
  dailyNativeFlashloan_gt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeFlashloan_lt?: InputMaybe<Scalars['BigInt']>;
  dailyNativeFlashloan_gte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeFlashloan_lte?: InputMaybe<Scalars['BigInt']>;
  dailyNativeFlashloan_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyNativeFlashloan_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cumulativeFlashloanUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeFlashloanUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryMarketDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryMarketDailySnapshot_filter>>>;
};

export type ethereumPrimaryMarketDailySnapshot_orderBy =
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

export type ethereumPrimaryMarketHourlySnapshot = {
  /**  { Smart contract address of the market }{ # of hours since Unix epoch time }  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Number of hours since Unix epoch time  */
  hours: Scalars['Int'];
  /**  The protocol this snapshot belongs to  */
  protocol: ethereumPrimaryLendingProtocol;
  /**  The pool this snapshot belongs to  */
  market: ethereumPrimaryMarket;
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  A unique identifier that can relate multiple markets together. e.g. a common address that they all share. This is useful for markets with multiple input tokens  */
  relation?: Maybe<Scalars['ethereumPrimaryBytes']>;
  /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<ethereumPrimaryRewardToken>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /**  Total supply of output tokens that are staked. Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
  /**  Amount of input token in the market (same order as inputTokens)  */
  inputTokenBalance: Scalars['BigInt'];
  /**  Prices in USD of the input token (same order as inputTokens)  */
  inputTokenPriceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total supply of output token (same order as outputTokens)  */
  outputTokenSupply?: Maybe<Scalars['BigInt']>;
  /**  Prices in USD of the output token (same order as outputTokens)  */
  outputTokenPriceUSD?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  Amount of input token per full share of output token. Only applies when the output token exists (note this is a ratio and not a percentage value, i.e. 1.05 instead of 105%)  */
  exchangeRate?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  All interest rates for this input token. Should be in APR format  */
  rates?: Maybe<Array<ethereumPrimaryInterestRate>>;
  /**  Total amount of reserves (in USD)  */
  reserves?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  Amount of input tokens borrowed in this market using variable interest rates (in native terms)  */
  variableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
  /**  Amount of input tokens borrowed in this market using stable interest rates (in native terms)  */
  stableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
  /**  Current TVL (Total Value Locked) of this market  */
  totalValueLockedUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All revenue generated by the market, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Hourly revenue generated by the market, accrued to the supply side.  */
  hourlySupplySideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All revenue generated by the market, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Hourly revenue generated by the market, accrued to the protocol.  */
  hourlyProtocolSideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All revenue generated by the market.  */
  cumulativeTotalRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Hourly revenue generated by the market.  */
  hourlyTotalRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Current balance of all deposited assets (not historical cumulative), in USD. Same as pool TVL.  */
  totalDepositBalanceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all deposits made in a given hour, in USD  */
  hourlyDepositUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
  cumulativeDepositUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
  totalBorrowBalanceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all borrows/mints made in a given hour, in USD  */
  hourlyBorrowUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
  cumulativeBorrowUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets liquidated in a given hour, in USD.  */
  hourlyLiquidateUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Sum of all historical liquidations in USD  */
  cumulativeLiquidateUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets withdrawn on a given hour, in USD.  */
  hourlyWithdrawUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets repaid on a given hour, in USD.  */
  hourlyRepayUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets transferred on a given hour, in USD.  */
  hourlyTransferUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total assets flashloaned on a given hour, in USD.  */
  hourlyFlashloanUSD: Scalars['ethereumPrimaryBigDecimal'];
};


export type ethereumPrimaryMarketHourlySnapshotrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryRewardToken_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryRewardToken_filter>;
};


export type ethereumPrimaryMarketHourlySnapshotratesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryInterestRate_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryInterestRate_filter>;
};

export type ethereumPrimaryMarketHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  protocol_?: InputMaybe<ethereumPrimaryLendingProtocol_filter>;
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
  market_?: InputMaybe<ethereumPrimaryMarket_filter>;
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
  relation?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  relation_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  relation_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  rewardTokens?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_?: InputMaybe<ethereumPrimaryRewardToken_filter>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  inputTokenPriceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_?: InputMaybe<ethereumPrimaryInterestRate_filter>;
  reserves?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  reserves_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  totalValueLockedUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlySupplySideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlySupplySideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlySupplySideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlySupplySideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlySupplySideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlySupplySideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyProtocolSideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyTotalRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyTotalRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyTotalRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyTotalRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyTotalRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyTotalRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyDepositUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyDepositUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyDepositUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyDepositUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyDepositUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyDepositUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyDepositUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyDepositUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyBorrowUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyBorrowUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyBorrowUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyBorrowUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyBorrowUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyBorrowUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyBorrowUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyBorrowUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyLiquidateUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyLiquidateUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyLiquidateUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyLiquidateUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyLiquidateUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyLiquidateUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyLiquidateUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyLiquidateUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyWithdrawUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyWithdrawUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyWithdrawUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyWithdrawUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyWithdrawUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyWithdrawUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyWithdrawUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyWithdrawUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyRepayUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyRepayUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyRepayUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyRepayUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyRepayUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyRepayUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyRepayUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyRepayUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyTransferUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyTransferUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyTransferUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyTransferUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyTransferUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyTransferUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyTransferUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyTransferUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyFlashloanUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyFlashloanUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyFlashloanUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyFlashloanUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyFlashloanUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyFlashloanUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  hourlyFlashloanUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  hourlyFlashloanUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryMarketHourlySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryMarketHourlySnapshot_filter>>>;
};

export type ethereumPrimaryMarketHourlySnapshot_orderBy =
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

export type ethereumPrimaryMarket_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  protocol_?: InputMaybe<ethereumPrimaryLendingProtocol_filter>;
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
  maximumLTV?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  maximumLTV_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  maximumLTV_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  maximumLTV_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  maximumLTV_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  maximumLTV_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  maximumLTV_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  maximumLTV_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  liquidationThreshold?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  liquidationThreshold_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  liquidationThreshold_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  liquidationThreshold_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  liquidationThreshold_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  liquidationThreshold_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  liquidationThreshold_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  liquidationThreshold_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  liquidationPenalty?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  liquidationPenalty_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  liquidationPenalty_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  liquidationPenalty_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  liquidationPenalty_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  liquidationPenalty_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  liquidationPenalty_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  liquidationPenalty_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  oracle_?: InputMaybe<ethereumPrimaryOracle_filter>;
  relation?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  relation_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  relation_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  relation_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  rewardTokens?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rewardTokens_?: InputMaybe<ethereumPrimaryRewardToken_filter>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  inputToken_?: InputMaybe<ethereumPrimaryToken_filter>;
  inputTokenBalance?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_not?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lt?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_gte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_lte?: InputMaybe<Scalars['BigInt']>;
  inputTokenBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  inputTokenPriceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  inputTokenPriceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  inputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  outputToken_?: InputMaybe<ethereumPrimaryToken_filter>;
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  outputTokenPriceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  exchangeRate?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  exchangeRate_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  exchangeRate_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  rates?: InputMaybe<Array<Scalars['String']>>;
  rates_not?: InputMaybe<Array<Scalars['String']>>;
  rates_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  rates_?: InputMaybe<ethereumPrimaryInterestRate_filter>;
  reserves?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserves_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  reserves_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  reserveFactor?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserveFactor_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserveFactor_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserveFactor_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserveFactor_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserveFactor_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  reserveFactor_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  reserveFactor_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  borrowedToken_?: InputMaybe<ethereumPrimaryToken_filter>;
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
  totalValueLockedUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  revenueDetail_?: InputMaybe<ethereumPrimaryRevenueDetail_filter>;
  totalDepositBalanceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalDepositBalanceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalDepositBalanceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalBorrowBalanceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalBorrowBalanceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeBorrowUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeBorrowUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeBorrowUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeLiquidateUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeLiquidateUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTransferUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTransferUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTransferUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTransferUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTransferUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTransferUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTransferUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTransferUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeFlashloanUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeFlashloanUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeFlashloanUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  positions_?: InputMaybe<ethereumPrimaryPosition_filter>;
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
  dailySnapshots_?: InputMaybe<ethereumPrimaryMarketDailySnapshot_filter>;
  hourlySnapshots_?: InputMaybe<ethereumPrimaryMarketHourlySnapshot_filter>;
  deposits_?: InputMaybe<ethereumPrimaryDeposit_filter>;
  withdraws_?: InputMaybe<ethereumPrimaryWithdraw_filter>;
  borrows_?: InputMaybe<ethereumPrimaryBorrow_filter>;
  repays_?: InputMaybe<ethereumPrimaryRepay_filter>;
  liquidates_?: InputMaybe<ethereumPrimaryLiquidate_filter>;
  transfers_?: InputMaybe<ethereumPrimaryTransfer_filter>;
  flashloans_?: InputMaybe<ethereumPrimaryFlashloan_filter>;
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
  _vToken_?: InputMaybe<ethereumPrimaryToken_filter>;
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
  _sToken_?: InputMaybe<ethereumPrimaryToken_filter>;
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
  _liquidationProtocolFee?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  _liquidationProtocolFee_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  _liquidationProtocolFee_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  _liquidationProtocolFee_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  _liquidationProtocolFee_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  _liquidationProtocolFee_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  _liquidationProtocolFee_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  _liquidationProtocolFee_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  _siloedBorrowing?: InputMaybe<Scalars['Boolean']>;
  _siloedBorrowing_not?: InputMaybe<Scalars['Boolean']>;
  _siloedBorrowing_in?: InputMaybe<Array<Scalars['Boolean']>>;
  _siloedBorrowing_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryMarket_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryMarket_filter>>>;
};

export type ethereumPrimaryMarket_orderBy =
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

export type ethereumPrimaryNetwork =
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

export type ethereumPrimaryOracle = {
  /**  { Market Address }{ Token Address }  */
  id: Scalars['ethereumPrimaryBytes'];
  oracleAddress: Scalars['ethereumPrimaryBytes'];
  /**  The market that this oracle is used for pricing  */
  market: ethereumPrimaryMarket;
  /**  The block this oracle was adopted for a market  */
  blockCreated: Scalars['BigInt'];
  /**  The timestamp this oracle was adopted for a market  */
  timestampCreated: Scalars['BigInt'];
  /**  Is the Oracle currently used as the source of truth for a market */
  isActive: Scalars['Boolean'];
  /**  True if the oracle returns prices in USD (e.g. generally the other case is the network's native token)  */
  isUSD: Scalars['Boolean'];
  /**  The hash where the oracle was no longer used  */
  hashEnded?: Maybe<Scalars['ethereumPrimaryBytes']>;
  /**  The Protocol that is providing the oracle (nullable if non-standard source) */
  oracleSource?: Maybe<ethereumPrimaryOracleSource>;
};

export type ethereumPrimaryOracleSource =
  | 'UNISWAP'
  | 'BALANCER'
  | 'CHAINLINK'
  | 'YEARN'
  | 'SUSHISWAP'
  | 'CURVE';

export type ethereumPrimaryOracle_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracleAddress?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracleAddress_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracleAddress_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracleAddress_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracleAddress_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracleAddress_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracleAddress_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  oracleAddress_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  oracleAddress_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracleAddress_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  market_?: InputMaybe<ethereumPrimaryMarket_filter>;
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
  hashEnded?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashEnded_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashEnded_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashEnded_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashEnded_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashEnded_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashEnded_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hashEnded_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hashEnded_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashEnded_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracleSource?: InputMaybe<ethereumPrimaryOracleSource>;
  oracleSource_not?: InputMaybe<ethereumPrimaryOracleSource>;
  oracleSource_in?: InputMaybe<Array<ethereumPrimaryOracleSource>>;
  oracleSource_not_in?: InputMaybe<Array<ethereumPrimaryOracleSource>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryOracle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryOracle_filter>>>;
};

export type ethereumPrimaryOracle_orderBy =
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
export type ethereumPrimaryOrderDirection =
  | 'asc'
  | 'desc';

export type ethereumPrimaryPermissionType =
  /**  Only users that have been whitelisted can interact. e.g. Only approved institutions can borrow  */
  | 'WHITELIST_ONLY'
  /**  To interact a user must be KYC'd  */
  | 'PERMISSIONED'
  /**  Protocols that do not KYC. Can be used by any account  */
  | 'PERMISSIONLESS'
  /**  Only the protocol admin address can make do the defined actions  */
  | 'ADMIN';

export type ethereumPrimaryPosition = {
  /**  { Account address }-{ Market address }-{ Position Side }-{ Optional: Interest Rate Type}-{ Counter }  */
  id: Scalars['ID'];
  /**  Account that owns this position  */
  account: ethereumPrimaryAccount;
  /**  The market in which this position was opened  */
  market: ethereumPrimaryMarket;
  /**  The asset in which this position was opened with  */
  asset: ethereumPrimaryToken;
  /**  The hash of the transaction that opened this position  */
  hashOpened: Scalars['ethereumPrimaryBytes'];
  /**  The hash of the transaction that closed this position  */
  hashClosed?: Maybe<Scalars['ethereumPrimaryBytes']>;
  /**  Block number of when the position was opened  */
  blockNumberOpened: Scalars['BigInt'];
  /**  Timestamp when the position was opened  */
  timestampOpened: Scalars['BigInt'];
  /**  Block number of when the position was closed (0 if still open)  */
  blockNumberClosed?: Maybe<Scalars['BigInt']>;
  /**  Timestamp when the position was closed (0 if still open)  */
  timestampClosed?: Maybe<Scalars['BigInt']>;
  /**  Side of the position (either lender or borrower)  */
  side: ethereumPrimaryPositionSide;
  /**  Type of interest rate used for this position (stable or variable). Generally for borrow side positions. */
  type?: Maybe<ethereumPrimaryInterestRateType>;
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
  deposits: Array<ethereumPrimaryDeposit>;
  /**  Number of withdrawals related to this position  */
  withdrawCount: Scalars['Int'];
  /**  All withdraw events of this position  */
  withdraws: Array<ethereumPrimaryWithdraw>;
  /**  Number of borrows related to this position  */
  borrowCount: Scalars['Int'];
  /**  All borrow events of this position  */
  borrows: Array<ethereumPrimaryBorrow>;
  /**  Number of repays related to this position  */
  repayCount: Scalars['Int'];
  /**  All repay events of this position  */
  repays: Array<ethereumPrimaryRepay>;
  /**  Number of liquidations related to this position (incremented when this position is liquidated)  */
  liquidationCount: Scalars['Int'];
  /**  Liquidation event related to this position (if exists)  */
  liquidations: Array<ethereumPrimaryLiquidate>;
  /**  Number of times this position has transferred  */
  transferredCount: Scalars['Int'];
  /**  Number of times this position has received a transfer  */
  receivedCount: Scalars['Int'];
  /**  All transfer events related to this position  */
  transfers: Array<ethereumPrimaryTransfer>;
  /**  Position daily snapshots for open positions  */
  snapshots: Array<ethereumPrimaryPositionSnapshot>;
  /**  efficient mode flag  */
  _eMode?: Maybe<Scalars['Boolean']>;
};


export type ethereumPrimaryPositiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryDeposit_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryDeposit_filter>;
};


export type ethereumPrimaryPositionwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryWithdraw_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryWithdraw_filter>;
};


export type ethereumPrimaryPositionborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryBorrow_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryBorrow_filter>;
};


export type ethereumPrimaryPositionrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryRepay_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryRepay_filter>;
};


export type ethereumPrimaryPositionliquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryLiquidate_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryLiquidate_filter>;
};


export type ethereumPrimaryPositiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryTransfer_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryTransfer_filter>;
};


export type ethereumPrimaryPositionsnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryPositionSnapshot_filter>;
};

export type ethereumPrimaryPositionSide =
  /**  Position opened as a lender (used as collateral)  */
  | 'COLLATERAL'
  /**  Position opened as a borrower  */
  | 'BORROWER';

export type ethereumPrimaryPositionSnapshot = {
  /**  { Position ID }-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID'];
  /**  Transaction hash of the transaction that triggered this snapshot  */
  hash: Scalars['ethereumPrimaryBytes'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int'];
  /**  Nonce of the transaction that triggered this snapshot  */
  nonce: Scalars['BigInt'];
  /**  Account that owns this position  */
  account: ethereumPrimaryAccount;
  /**  Position of this snapshot  */
  position: ethereumPrimaryPosition;
  /**  Token balance in this position, in native amounts  */
  balance: Scalars['BigInt'];
  /**  Token balance in this position, in USD  */
  balanceUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt'];
  /**  The principal value without interest accrued. Used to calculate interest per position.  */
  principal?: Maybe<Scalars['BigInt']>;
  /**  Base borrow OR supply index (based on the position side). Used to calculate interest across snapshots.  */
  index?: Maybe<Scalars['BigInt']>;
};

export type ethereumPrimaryPositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  hash?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  account_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  position_?: InputMaybe<ethereumPrimaryPosition_filter>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balanceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  balanceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  balanceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  balanceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  balanceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  balanceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  balanceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  balanceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
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
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryPositionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryPositionSnapshot_filter>>>;
};

export type ethereumPrimaryPositionSnapshot_orderBy =
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

export type ethereumPrimaryPosition_filter = {
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
  account_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  market_?: InputMaybe<ethereumPrimaryMarket_filter>;
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
  asset_?: InputMaybe<ethereumPrimaryToken_filter>;
  hashOpened?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashOpened_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashOpened_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashOpened_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashOpened_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashOpened_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashOpened_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hashOpened_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hashOpened_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashOpened_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashClosed?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashClosed_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashClosed_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashClosed_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashClosed_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashClosed_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashClosed_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hashClosed_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hashClosed_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hashClosed_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  side?: InputMaybe<ethereumPrimaryPositionSide>;
  side_not?: InputMaybe<ethereumPrimaryPositionSide>;
  side_in?: InputMaybe<Array<ethereumPrimaryPositionSide>>;
  side_not_in?: InputMaybe<Array<ethereumPrimaryPositionSide>>;
  type?: InputMaybe<ethereumPrimaryInterestRateType>;
  type_not?: InputMaybe<ethereumPrimaryInterestRateType>;
  type_in?: InputMaybe<Array<ethereumPrimaryInterestRateType>>;
  type_not_in?: InputMaybe<Array<ethereumPrimaryInterestRateType>>;
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
  deposits_?: InputMaybe<ethereumPrimaryDeposit_filter>;
  withdrawCount?: InputMaybe<Scalars['Int']>;
  withdrawCount_not?: InputMaybe<Scalars['Int']>;
  withdrawCount_gt?: InputMaybe<Scalars['Int']>;
  withdrawCount_lt?: InputMaybe<Scalars['Int']>;
  withdrawCount_gte?: InputMaybe<Scalars['Int']>;
  withdrawCount_lte?: InputMaybe<Scalars['Int']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  withdraws_?: InputMaybe<ethereumPrimaryWithdraw_filter>;
  borrowCount?: InputMaybe<Scalars['Int']>;
  borrowCount_not?: InputMaybe<Scalars['Int']>;
  borrowCount_gt?: InputMaybe<Scalars['Int']>;
  borrowCount_lt?: InputMaybe<Scalars['Int']>;
  borrowCount_gte?: InputMaybe<Scalars['Int']>;
  borrowCount_lte?: InputMaybe<Scalars['Int']>;
  borrowCount_in?: InputMaybe<Array<Scalars['Int']>>;
  borrowCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  borrows_?: InputMaybe<ethereumPrimaryBorrow_filter>;
  repayCount?: InputMaybe<Scalars['Int']>;
  repayCount_not?: InputMaybe<Scalars['Int']>;
  repayCount_gt?: InputMaybe<Scalars['Int']>;
  repayCount_lt?: InputMaybe<Scalars['Int']>;
  repayCount_gte?: InputMaybe<Scalars['Int']>;
  repayCount_lte?: InputMaybe<Scalars['Int']>;
  repayCount_in?: InputMaybe<Array<Scalars['Int']>>;
  repayCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  repays_?: InputMaybe<ethereumPrimaryRepay_filter>;
  liquidationCount?: InputMaybe<Scalars['Int']>;
  liquidationCount_not?: InputMaybe<Scalars['Int']>;
  liquidationCount_gt?: InputMaybe<Scalars['Int']>;
  liquidationCount_lt?: InputMaybe<Scalars['Int']>;
  liquidationCount_gte?: InputMaybe<Scalars['Int']>;
  liquidationCount_lte?: InputMaybe<Scalars['Int']>;
  liquidationCount_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidationCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  liquidations_?: InputMaybe<ethereumPrimaryLiquidate_filter>;
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
  transfers_?: InputMaybe<ethereumPrimaryTransfer_filter>;
  snapshots_?: InputMaybe<ethereumPrimaryPositionSnapshot_filter>;
  _eMode?: InputMaybe<Scalars['Boolean']>;
  _eMode_not?: InputMaybe<Scalars['Boolean']>;
  _eMode_in?: InputMaybe<Array<Scalars['Boolean']>>;
  _eMode_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryPosition_filter>>>;
};

export type ethereumPrimaryPosition_orderBy =
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

export type ethereumPrimaryProtocol = {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['ethereumPrimaryBytes'];
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
  network: ethereumPrimaryNetwork;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ethereumPrimaryProtocolType;
  /**  The specific lending protocol type  */
  lendingType?: Maybe<ethereumPrimaryLendingType>;
  /**  The specific permissions required to lend in this protocol  */
  lenderPermissionType?: Maybe<ethereumPrimaryPermissionType>;
  /**  The specific permissions required to borrow from this protocol  */
  borrowerPermissionType?: Maybe<ethereumPrimaryPermissionType>;
  /**  The specific permissions required to create a pool (market) in this protocol  */
  poolCreatorPermissionType?: Maybe<ethereumPrimaryPermissionType>;
  /**  Risk type of the lending protocol  */
  riskType?: Maybe<ethereumPrimaryRiskType>;
  /**  The way a positions can be collateralized  */
  collateralizationType?: Maybe<ethereumPrimaryCollateralizationType>;
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  Number of cumulative unique users. e.g. accounts that spent gas to interact with this protocol  */
  cumulativeUniqueUsers: Scalars['Int'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['ethereumPrimaryBigDecimal'];
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int'];
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<ethereumPrimaryUsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<ethereumPrimaryUsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<ethereumPrimaryFinancialsDailySnapshot>;
};


export type ethereumPrimaryProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryUsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryUsageMetricsDailySnapshot_filter>;
};


export type ethereumPrimaryProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryUsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryUsageMetricsHourlySnapshot_filter>;
};


export type ethereumPrimaryProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryFinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryFinancialsDailySnapshot_filter>;
};

export type ethereumPrimaryProtocolType =
  | 'EXCHANGE'
  | 'LENDING'
  | 'YIELD'
  | 'BRIDGE'
  | 'GENERIC';

export type ethereumPrimaryProtocol_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  network?: InputMaybe<ethereumPrimaryNetwork>;
  network_not?: InputMaybe<ethereumPrimaryNetwork>;
  network_in?: InputMaybe<Array<ethereumPrimaryNetwork>>;
  network_not_in?: InputMaybe<Array<ethereumPrimaryNetwork>>;
  type?: InputMaybe<ethereumPrimaryProtocolType>;
  type_not?: InputMaybe<ethereumPrimaryProtocolType>;
  type_in?: InputMaybe<Array<ethereumPrimaryProtocolType>>;
  type_not_in?: InputMaybe<Array<ethereumPrimaryProtocolType>>;
  lendingType?: InputMaybe<ethereumPrimaryLendingType>;
  lendingType_not?: InputMaybe<ethereumPrimaryLendingType>;
  lendingType_in?: InputMaybe<Array<ethereumPrimaryLendingType>>;
  lendingType_not_in?: InputMaybe<Array<ethereumPrimaryLendingType>>;
  lenderPermissionType?: InputMaybe<ethereumPrimaryPermissionType>;
  lenderPermissionType_not?: InputMaybe<ethereumPrimaryPermissionType>;
  lenderPermissionType_in?: InputMaybe<Array<ethereumPrimaryPermissionType>>;
  lenderPermissionType_not_in?: InputMaybe<Array<ethereumPrimaryPermissionType>>;
  borrowerPermissionType?: InputMaybe<ethereumPrimaryPermissionType>;
  borrowerPermissionType_not?: InputMaybe<ethereumPrimaryPermissionType>;
  borrowerPermissionType_in?: InputMaybe<Array<ethereumPrimaryPermissionType>>;
  borrowerPermissionType_not_in?: InputMaybe<Array<ethereumPrimaryPermissionType>>;
  poolCreatorPermissionType?: InputMaybe<ethereumPrimaryPermissionType>;
  poolCreatorPermissionType_not?: InputMaybe<ethereumPrimaryPermissionType>;
  poolCreatorPermissionType_in?: InputMaybe<Array<ethereumPrimaryPermissionType>>;
  poolCreatorPermissionType_not_in?: InputMaybe<Array<ethereumPrimaryPermissionType>>;
  riskType?: InputMaybe<ethereumPrimaryRiskType>;
  riskType_not?: InputMaybe<ethereumPrimaryRiskType>;
  riskType_in?: InputMaybe<Array<ethereumPrimaryRiskType>>;
  riskType_not_in?: InputMaybe<Array<ethereumPrimaryRiskType>>;
  collateralizationType?: InputMaybe<ethereumPrimaryCollateralizationType>;
  collateralizationType_not?: InputMaybe<ethereumPrimaryCollateralizationType>;
  collateralizationType_in?: InputMaybe<Array<ethereumPrimaryCollateralizationType>>;
  collateralizationType_not_in?: InputMaybe<Array<ethereumPrimaryCollateralizationType>>;
  totalValueLockedUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  totalPoolCount?: InputMaybe<Scalars['Int']>;
  totalPoolCount_not?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lt?: InputMaybe<Scalars['Int']>;
  totalPoolCount_gte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_lte?: InputMaybe<Scalars['Int']>;
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']>>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  dailyUsageMetrics_?: InputMaybe<ethereumPrimaryUsageMetricsDailySnapshot_filter>;
  hourlyUsageMetrics_?: InputMaybe<ethereumPrimaryUsageMetricsHourlySnapshot_filter>;
  financialMetrics_?: InputMaybe<ethereumPrimaryFinancialsDailySnapshot_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryProtocol_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryProtocol_filter>>>;
};

export type ethereumPrimaryProtocol_orderBy =
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
  ethereumPrimarytoken?: Maybe<ethereumPrimaryToken>;
  ethereumPrimarytokens: Array<ethereumPrimaryToken>;
  ethereumPrimaryrewardToken?: Maybe<ethereumPrimaryRewardToken>;
  ethereumPrimaryrewardTokens: Array<ethereumPrimaryRewardToken>;
  ethereumPrimaryinterestRate?: Maybe<ethereumPrimaryInterestRate>;
  ethereumPrimaryinterestRates: Array<ethereumPrimaryInterestRate>;
  ethereumPrimaryfee?: Maybe<ethereumPrimaryFee>;
  ethereumPrimaryfees: Array<ethereumPrimaryFee>;
  ethereumPrimaryrevenueDetail?: Maybe<ethereumPrimaryRevenueDetail>;
  ethereumPrimaryrevenueDetails: Array<ethereumPrimaryRevenueDetail>;
  ethereumPrimaryoracle?: Maybe<ethereumPrimaryOracle>;
  ethereumPrimaryoracles: Array<ethereumPrimaryOracle>;
  ethereumPrimarylendingProtocol?: Maybe<ethereumPrimaryLendingProtocol>;
  ethereumPrimarylendingProtocols: Array<ethereumPrimaryLendingProtocol>;
  ethereumPrimarymarketList?: Maybe<ethereumPrimary_MarketList>;
  ethereumPrimarymarketLists: Array<ethereumPrimary_MarketList>;
  ethereumPrimaryusageMetricsDailySnapshot?: Maybe<ethereumPrimaryUsageMetricsDailySnapshot>;
  ethereumPrimaryusageMetricsDailySnapshots: Array<ethereumPrimaryUsageMetricsDailySnapshot>;
  ethereumPrimaryusageMetricsHourlySnapshot?: Maybe<ethereumPrimaryUsageMetricsHourlySnapshot>;
  ethereumPrimaryusageMetricsHourlySnapshots: Array<ethereumPrimaryUsageMetricsHourlySnapshot>;
  ethereumPrimaryfinancialsDailySnapshot?: Maybe<ethereumPrimaryFinancialsDailySnapshot>;
  ethereumPrimaryfinancialsDailySnapshots: Array<ethereumPrimaryFinancialsDailySnapshot>;
  ethereumPrimarymarket?: Maybe<ethereumPrimaryMarket>;
  ethereumPrimarymarkets: Array<ethereumPrimaryMarket>;
  ethereumPrimarymarketDailySnapshot?: Maybe<ethereumPrimaryMarketDailySnapshot>;
  ethereumPrimarymarketDailySnapshots: Array<ethereumPrimaryMarketDailySnapshot>;
  ethereumPrimarymarketHourlySnapshot?: Maybe<ethereumPrimaryMarketHourlySnapshot>;
  ethereumPrimarymarketHourlySnapshots: Array<ethereumPrimaryMarketHourlySnapshot>;
  ethereumPrimaryaccount?: Maybe<ethereumPrimaryAccount>;
  ethereumPrimaryaccounts: Array<ethereumPrimaryAccount>;
  ethereumPrimaryposition?: Maybe<ethereumPrimaryPosition>;
  ethereumPrimarypositions: Array<ethereumPrimaryPosition>;
  ethereumPrimarypositionSnapshot?: Maybe<ethereumPrimaryPositionSnapshot>;
  ethereumPrimarypositionSnapshots: Array<ethereumPrimaryPositionSnapshot>;
  ethereumPrimaryactiveAccount?: Maybe<ethereumPrimary_ActiveAccount>;
  ethereumPrimaryactiveAccounts: Array<ethereumPrimary_ActiveAccount>;
  ethereumPrimarypositionCounter?: Maybe<ethereumPrimary_PositionCounter>;
  ethereumPrimarypositionCounters: Array<ethereumPrimary_PositionCounter>;
  ethereumPrimarydeposit?: Maybe<ethereumPrimaryDeposit>;
  ethereumPrimarydeposits: Array<ethereumPrimaryDeposit>;
  ethereumPrimarywithdraw?: Maybe<ethereumPrimaryWithdraw>;
  ethereumPrimarywithdraws: Array<ethereumPrimaryWithdraw>;
  ethereumPrimaryborrow?: Maybe<ethereumPrimaryBorrow>;
  ethereumPrimaryborrows: Array<ethereumPrimaryBorrow>;
  ethereumPrimaryrepay?: Maybe<ethereumPrimaryRepay>;
  ethereumPrimaryrepays: Array<ethereumPrimaryRepay>;
  ethereumPrimaryliquidate?: Maybe<ethereumPrimaryLiquidate>;
  ethereumPrimaryliquidates: Array<ethereumPrimaryLiquidate>;
  ethereumPrimarytransfer?: Maybe<ethereumPrimaryTransfer>;
  ethereumPrimarytransfers: Array<ethereumPrimaryTransfer>;
  ethereumPrimaryflashloan?: Maybe<ethereumPrimaryFlashloan>;
  ethereumPrimaryflashloans: Array<ethereumPrimaryFlashloan>;
  ethereumPrimarydefaultOracle?: Maybe<ethereumPrimary_DefaultOracle>;
  ethereumPrimarydefaultOracles: Array<ethereumPrimary_DefaultOracle>;
  ethereumPrimaryflashLoanPremium?: Maybe<ethereumPrimary_FlashLoanPremium>;
  ethereumPrimaryflashLoanPremiums: Array<ethereumPrimary_FlashLoanPremium>;
  ethereumPrimaryprotocol?: Maybe<ethereumPrimaryProtocol>;
  ethereumPrimaryprotocols: Array<ethereumPrimaryProtocol>;
  ethereumPrimaryevent?: Maybe<ethereumPrimaryEvent>;
  ethereumPrimaryevents: Array<ethereumPrimaryEvent>;
  /** Access to subgraph metadata */
  ethereumPrimary_meta?: Maybe<ethereumPrimary_Meta_>;
};


export type QueryethereumPrimarytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryToken_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryToken_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryrewardTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryRewardToken_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryRewardToken_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryinterestRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryinterestRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryInterestRate_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryInterestRate_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryfeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryfeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryFee_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryFee_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryrevenueDetailArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryrevenueDetailsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryRevenueDetail_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryRevenueDetail_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryoracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryoraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryOracle_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryOracle_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarylendingProtocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarylendingProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryLendingProtocol_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryLendingProtocol_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarymarketListArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarymarketListsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimary_MarketList_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimary_MarketList_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryusageMetricsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryUsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryUsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryUsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryUsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryfinancialsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryFinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryFinancialsDailySnapshot_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarymarketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarymarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryMarket_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryMarket_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarymarketDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarymarketDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryMarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryMarketDailySnapshot_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarymarketHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarymarketHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryMarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryMarketHourlySnapshot_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryAccount_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryAccount_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarypositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarypositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryPosition_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryPosition_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarypositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarypositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryPositionSnapshot_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryactiveAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimary_ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimary_ActiveAccount_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarypositionCounterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarypositionCountersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimary_PositionCounter_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimary_PositionCounter_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarydepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarydepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryDeposit_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryDeposit_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarywithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarywithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryWithdraw_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryWithdraw_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryborrowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryBorrow_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryBorrow_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryrepayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryRepay_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryRepay_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryliquidateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryLiquidate_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryLiquidate_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryTransfer_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryTransfer_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryflashloanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryflashloansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryFlashloan_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryFlashloan_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarydefaultOracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimarydefaultOraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimary_DefaultOracle_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimary_DefaultOracle_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryflashLoanPremiumArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryflashLoanPremiumsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimary_FlashLoanPremium_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimary_FlashLoanPremium_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryProtocol_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryProtocol_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryeventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimaryeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryEvent_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryEvent_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type QueryethereumPrimary_metaArgs = {
  block?: InputMaybe<ethereumPrimaryBlock_height>;
};

export type ethereumPrimaryRepay = ethereumPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['ethereumPrimaryBytes'];
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
  account: ethereumPrimaryAccount;
  /**  Account that is providing the funds to repay the debt  */
  accountActor?: Maybe<ethereumPrimaryAccount>;
  /**  The market tokens are repaid/burned to  */
  market: ethereumPrimaryMarket;
  /**  The user position changed by this event  */
  position: ethereumPrimaryPosition;
  /**  Token repaid/burned  */
  asset: ethereumPrimaryToken;
  /**  Amount of token repaid/burned in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token repaid/burned in USD  */
  amountUSD: Scalars['ethereumPrimaryBigDecimal'];
};

export type ethereumPrimaryRepay_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  account_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  accountActor_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  market_?: InputMaybe<ethereumPrimaryMarket_filter>;
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
  position_?: InputMaybe<ethereumPrimaryPosition_filter>;
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
  asset_?: InputMaybe<ethereumPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryRepay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryRepay_filter>>>;
};

export type ethereumPrimaryRepay_orderBy =
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

export type ethereumPrimaryRevenueDetail = {
  /**  { Market/Protocol ID }{ Optional: Snapshot ID }  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  The source of revenue (in alphabetical order)  */
  sources: Array<ethereumPrimaryFee>;
  /**  The amount of revenue in USD (same order as sources)  */
  amountsUSD: Array<Scalars['ethereumPrimaryBigDecimal']>;
};


export type ethereumPrimaryRevenueDetailsourcesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryFee_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryFee_filter>;
};

export type ethereumPrimaryRevenueDetail_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  sources?: InputMaybe<Array<Scalars['String']>>;
  sources_not?: InputMaybe<Array<Scalars['String']>>;
  sources_contains?: InputMaybe<Array<Scalars['String']>>;
  sources_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  sources_not_contains?: InputMaybe<Array<Scalars['String']>>;
  sources_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  sources_?: InputMaybe<ethereumPrimaryFee_filter>;
  amountsUSD?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  amountsUSD_not?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  amountsUSD_contains?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  amountsUSD_contains_nocase?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  amountsUSD_not_contains?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  amountsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryRevenueDetail_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryRevenueDetail_filter>>>;
};

export type ethereumPrimaryRevenueDetail_orderBy =
  | 'id'
  | 'sources'
  | 'amountsUSD';

export type ethereumPrimaryRewardToken = {
  /**  { Reward token type }-{ Smart contract address of the reward token }  */
  id: Scalars['ID'];
  /**  Reference to the actual token  */
  token: ethereumPrimaryToken;
  /**  The type of the reward token  */
  type: ethereumPrimaryRewardTokenType;
  _distributionEnd?: Maybe<Scalars['BigInt']>;
};

export type ethereumPrimaryRewardTokenType =
  /**  For reward tokens awarded to LPs/lenders  */
  | 'DEPOSIT'
  /**  For reward tokens awarded to borrowers of variable debt  */
  | 'VARIABLE_BORROW'
  /**  For reward tokens awarded to borrowers of stable debt  */
  | 'STABLE_BORROW'
  /**  For reward tokens awarded to stakers  */
  | 'STAKE';

export type ethereumPrimaryRewardToken_filter = {
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
  token_?: InputMaybe<ethereumPrimaryToken_filter>;
  type?: InputMaybe<ethereumPrimaryRewardTokenType>;
  type_not?: InputMaybe<ethereumPrimaryRewardTokenType>;
  type_in?: InputMaybe<Array<ethereumPrimaryRewardTokenType>>;
  type_not_in?: InputMaybe<Array<ethereumPrimaryRewardTokenType>>;
  _distributionEnd?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_not?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_gt?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_lt?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_gte?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_lte?: InputMaybe<Scalars['BigInt']>;
  _distributionEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  _distributionEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryRewardToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryRewardToken_filter>>>;
};

export type ethereumPrimaryRewardToken_orderBy =
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

export type ethereumPrimaryRiskType =
  /**  Global risk means each users position in a market is combined for one score to determine if they can be liquidated  */
  | 'GLOBAL'
  /**  Isolated risk means each users position in a market or CDP is isolated for risk of liquidation  */
  | 'ISOLATED';

export type Subscription = {
  ethereumPrimarytoken?: Maybe<ethereumPrimaryToken>;
  ethereumPrimarytokens: Array<ethereumPrimaryToken>;
  ethereumPrimaryrewardToken?: Maybe<ethereumPrimaryRewardToken>;
  ethereumPrimaryrewardTokens: Array<ethereumPrimaryRewardToken>;
  ethereumPrimaryinterestRate?: Maybe<ethereumPrimaryInterestRate>;
  ethereumPrimaryinterestRates: Array<ethereumPrimaryInterestRate>;
  ethereumPrimaryfee?: Maybe<ethereumPrimaryFee>;
  ethereumPrimaryfees: Array<ethereumPrimaryFee>;
  ethereumPrimaryrevenueDetail?: Maybe<ethereumPrimaryRevenueDetail>;
  ethereumPrimaryrevenueDetails: Array<ethereumPrimaryRevenueDetail>;
  ethereumPrimaryoracle?: Maybe<ethereumPrimaryOracle>;
  ethereumPrimaryoracles: Array<ethereumPrimaryOracle>;
  ethereumPrimarylendingProtocol?: Maybe<ethereumPrimaryLendingProtocol>;
  ethereumPrimarylendingProtocols: Array<ethereumPrimaryLendingProtocol>;
  ethereumPrimarymarketList?: Maybe<ethereumPrimary_MarketList>;
  ethereumPrimarymarketLists: Array<ethereumPrimary_MarketList>;
  ethereumPrimaryusageMetricsDailySnapshot?: Maybe<ethereumPrimaryUsageMetricsDailySnapshot>;
  ethereumPrimaryusageMetricsDailySnapshots: Array<ethereumPrimaryUsageMetricsDailySnapshot>;
  ethereumPrimaryusageMetricsHourlySnapshot?: Maybe<ethereumPrimaryUsageMetricsHourlySnapshot>;
  ethereumPrimaryusageMetricsHourlySnapshots: Array<ethereumPrimaryUsageMetricsHourlySnapshot>;
  ethereumPrimaryfinancialsDailySnapshot?: Maybe<ethereumPrimaryFinancialsDailySnapshot>;
  ethereumPrimaryfinancialsDailySnapshots: Array<ethereumPrimaryFinancialsDailySnapshot>;
  ethereumPrimarymarket?: Maybe<ethereumPrimaryMarket>;
  ethereumPrimarymarkets: Array<ethereumPrimaryMarket>;
  ethereumPrimarymarketDailySnapshot?: Maybe<ethereumPrimaryMarketDailySnapshot>;
  ethereumPrimarymarketDailySnapshots: Array<ethereumPrimaryMarketDailySnapshot>;
  ethereumPrimarymarketHourlySnapshot?: Maybe<ethereumPrimaryMarketHourlySnapshot>;
  ethereumPrimarymarketHourlySnapshots: Array<ethereumPrimaryMarketHourlySnapshot>;
  ethereumPrimaryaccount?: Maybe<ethereumPrimaryAccount>;
  ethereumPrimaryaccounts: Array<ethereumPrimaryAccount>;
  ethereumPrimaryposition?: Maybe<ethereumPrimaryPosition>;
  ethereumPrimarypositions: Array<ethereumPrimaryPosition>;
  ethereumPrimarypositionSnapshot?: Maybe<ethereumPrimaryPositionSnapshot>;
  ethereumPrimarypositionSnapshots: Array<ethereumPrimaryPositionSnapshot>;
  ethereumPrimaryactiveAccount?: Maybe<ethereumPrimary_ActiveAccount>;
  ethereumPrimaryactiveAccounts: Array<ethereumPrimary_ActiveAccount>;
  ethereumPrimarypositionCounter?: Maybe<ethereumPrimary_PositionCounter>;
  ethereumPrimarypositionCounters: Array<ethereumPrimary_PositionCounter>;
  ethereumPrimarydeposit?: Maybe<ethereumPrimaryDeposit>;
  ethereumPrimarydeposits: Array<ethereumPrimaryDeposit>;
  ethereumPrimarywithdraw?: Maybe<ethereumPrimaryWithdraw>;
  ethereumPrimarywithdraws: Array<ethereumPrimaryWithdraw>;
  ethereumPrimaryborrow?: Maybe<ethereumPrimaryBorrow>;
  ethereumPrimaryborrows: Array<ethereumPrimaryBorrow>;
  ethereumPrimaryrepay?: Maybe<ethereumPrimaryRepay>;
  ethereumPrimaryrepays: Array<ethereumPrimaryRepay>;
  ethereumPrimaryliquidate?: Maybe<ethereumPrimaryLiquidate>;
  ethereumPrimaryliquidates: Array<ethereumPrimaryLiquidate>;
  ethereumPrimarytransfer?: Maybe<ethereumPrimaryTransfer>;
  ethereumPrimarytransfers: Array<ethereumPrimaryTransfer>;
  ethereumPrimaryflashloan?: Maybe<ethereumPrimaryFlashloan>;
  ethereumPrimaryflashloans: Array<ethereumPrimaryFlashloan>;
  ethereumPrimarydefaultOracle?: Maybe<ethereumPrimary_DefaultOracle>;
  ethereumPrimarydefaultOracles: Array<ethereumPrimary_DefaultOracle>;
  ethereumPrimaryflashLoanPremium?: Maybe<ethereumPrimary_FlashLoanPremium>;
  ethereumPrimaryflashLoanPremiums: Array<ethereumPrimary_FlashLoanPremium>;
  ethereumPrimaryprotocol?: Maybe<ethereumPrimaryProtocol>;
  ethereumPrimaryprotocols: Array<ethereumPrimaryProtocol>;
  ethereumPrimaryevent?: Maybe<ethereumPrimaryEvent>;
  ethereumPrimaryevents: Array<ethereumPrimaryEvent>;
  /** Access to subgraph metadata */
  ethereumPrimary_meta?: Maybe<ethereumPrimary_Meta_>;
};


export type SubscriptionethereumPrimarytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryToken_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryToken_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryrewardTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryRewardToken_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryRewardToken_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryinterestRateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryinterestRatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryInterestRate_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryInterestRate_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryfeeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryfeesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryFee_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryFee_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryrevenueDetailArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryrevenueDetailsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryRevenueDetail_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryRevenueDetail_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryoracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryoraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryOracle_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryOracle_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarylendingProtocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarylendingProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryLendingProtocol_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryLendingProtocol_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarymarketListArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarymarketListsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimary_MarketList_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimary_MarketList_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryusageMetricsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryUsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryUsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryUsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryUsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryfinancialsDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryFinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryFinancialsDailySnapshot_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarymarketArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarymarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryMarket_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryMarket_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarymarketDailySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarymarketDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryMarketDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryMarketDailySnapshot_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarymarketHourlySnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarymarketHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryMarketHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryMarketHourlySnapshot_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryAccount_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryAccount_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarypositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarypositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryPosition_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryPosition_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarypositionSnapshotArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarypositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryPositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryPositionSnapshot_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryactiveAccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimary_ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimary_ActiveAccount_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarypositionCounterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarypositionCountersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimary_PositionCounter_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimary_PositionCounter_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarydepositArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarydepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryDeposit_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryDeposit_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarywithdrawArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarywithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryWithdraw_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryWithdraw_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryborrowArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryborrowsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryBorrow_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryBorrow_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryrepayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryrepaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryRepay_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryRepay_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryliquidateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryliquidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryLiquidate_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryLiquidate_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryTransfer_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryTransfer_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryflashloanArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryflashloansArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryFlashloan_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryFlashloan_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarydefaultOracleArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimarydefaultOraclesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimary_DefaultOracle_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimary_DefaultOracle_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryflashLoanPremiumArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryflashLoanPremiumsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimary_FlashLoanPremium_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimary_FlashLoanPremium_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryprotocolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryProtocol_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryProtocol_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryeventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimaryeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryEvent_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryEvent_filter>;
  block?: InputMaybe<ethereumPrimaryBlock_height>;
  subgraphError?: ethereumPrimary_SubgraphErrorPolicy_;
};


export type SubscriptionethereumPrimary_metaArgs = {
  block?: InputMaybe<ethereumPrimaryBlock_height>;
};

export type ethereumPrimaryToken = {
  /**  Smart contract address of the token  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Name of the token, mirrored from the smart contract  */
  name: Scalars['String'];
  /**  Symbol of the token, mirrored from the smart contract  */
  symbol: Scalars['String'];
  /**  The number of decimal places this token uses, default to 18  */
  decimals: Scalars['Int'];
  /**  Optional field to track the price of a token, mostly for caching purposes  */
  lastPriceUSD?: Maybe<Scalars['ethereumPrimaryBigDecimal']>;
  /**  Optional field to track the block number of the last token price  */
  lastPriceBlockNumber?: Maybe<Scalars['BigInt']>;
  /**  The type of token the protocol creates for positions  */
  type?: Maybe<ethereumPrimaryTokenType>;
  /**  the market ID for underlying/asset token, aToken, vToken and sToken */
  _market?: Maybe<ethereumPrimaryMarket>;
  /**  type of token: inputToken, aToken, vToken, or sToken  */
  _iavsTokenType?: Maybe<Scalars['String']>;
};

export type ethereumPrimaryTokenType =
  /**  Rebasing tokens continuously adjust balances / supply as interest is accrued (e.g. Aave debt balances adjust at each block with interest)  */
  | 'REBASING'
  /**  Non-rebasing token balances / supply do not change as interest is accrued (e.g. Compound's cToken's do not adjust balance, the exchange rate changes with interest)  */
  | 'NON_REBASING';

export type ethereumPrimaryToken_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  lastPriceUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  lastPriceUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  lastPriceUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  lastPriceUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  lastPriceUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  lastPriceUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  lastPriceUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  lastPriceUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  type?: InputMaybe<ethereumPrimaryTokenType>;
  type_not?: InputMaybe<ethereumPrimaryTokenType>;
  type_in?: InputMaybe<Array<ethereumPrimaryTokenType>>;
  type_not_in?: InputMaybe<Array<ethereumPrimaryTokenType>>;
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
  _market_?: InputMaybe<ethereumPrimaryMarket_filter>;
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
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryToken_filter>>>;
};

export type ethereumPrimaryToken_orderBy =
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

export type ethereumPrimaryTranche =
  /**  Senior denotes debt with a higher priority. The first debt to be paid back to lenders.  */
  | 'SENIOR'
  /**  Junior tranche denotes lower priority debt. This is secondary priority to be paid back to lenders.  */
  | 'JUNIOR';

export type ethereumPrimaryTransfer = ethereumPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['ethereumPrimaryBytes'];
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
  sender: ethereumPrimaryAccount;
  /**  The Account that received the tokens  */
  receiver: ethereumPrimaryAccount;
  /**  The user positions changed by this event  */
  positions: Array<ethereumPrimaryPosition>;
  /**  The market associated with the token transfer  */
  market: ethereumPrimaryMarket;
  /**  The asset that was actually transferred. This could also include a debt token.  */
  asset: ethereumPrimaryToken;
  /**  Amount of token transferred in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token transferred in USD  */
  amountUSD: Scalars['ethereumPrimaryBigDecimal'];
};


export type ethereumPrimaryTransferpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ethereumPrimaryPosition_orderBy>;
  orderDirection?: InputMaybe<ethereumPrimaryOrderDirection>;
  where?: InputMaybe<ethereumPrimaryPosition_filter>;
};

export type ethereumPrimaryTransfer_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  sender_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  receiver_?: InputMaybe<ethereumPrimaryAccount_filter>;
  positions?: InputMaybe<Array<Scalars['String']>>;
  positions_not?: InputMaybe<Array<Scalars['String']>>;
  positions_contains?: InputMaybe<Array<Scalars['String']>>;
  positions_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  positions_not_contains?: InputMaybe<Array<Scalars['String']>>;
  positions_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  positions_?: InputMaybe<ethereumPrimaryPosition_filter>;
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
  market_?: InputMaybe<ethereumPrimaryMarket_filter>;
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
  asset_?: InputMaybe<ethereumPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryTransfer_filter>>>;
};

export type ethereumPrimaryTransfer_orderBy =
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

export type ethereumPrimaryUsageMetricsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Number of days since Unix epoch time  */
  days: Scalars['Int'];
  /**  Protocol this snapshot is associated with  */
  protocol: ethereumPrimaryLendingProtocol;
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

export type ethereumPrimaryUsageMetricsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  protocol_?: InputMaybe<ethereumPrimaryLendingProtocol_filter>;
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
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryUsageMetricsDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryUsageMetricsDailySnapshot_filter>>>;
};

export type ethereumPrimaryUsageMetricsDailySnapshot_orderBy =
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

export type ethereumPrimaryUsageMetricsHourlySnapshot = {
  /**  { # of hours since Unix epoch time }  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Number of hours since Unix epoch time  */
  hours: Scalars['Int'];
  /**  Protocol this snapshot is associated with  */
  protocol: ethereumPrimaryLendingProtocol;
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

export type ethereumPrimaryUsageMetricsHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  protocol_?: InputMaybe<ethereumPrimaryLendingProtocol_filter>;
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
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryUsageMetricsHourlySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryUsageMetricsHourlySnapshot_filter>>>;
};

export type ethereumPrimaryUsageMetricsHourlySnapshot_orderBy =
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

export type ethereumPrimaryWithdraw = ethereumPrimaryEvent & {
  /**  { Transaction hash }{ Log index }  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['ethereumPrimaryBytes'];
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
  account: ethereumPrimaryAccount;
  /**  Account that receives the underlying withdrawn amount  */
  accountActor?: Maybe<ethereumPrimaryAccount>;
  /**  The market tokens are withdrew from  */
  market: ethereumPrimaryMarket;
  /**  The user position changed by this event  */
  position: ethereumPrimaryPosition;
  /**  Token withdrawn  */
  asset: ethereumPrimaryToken;
  /**  Amount of token withdrawn in native units  */
  amount: Scalars['BigInt'];
  /**  Amount of token withdrawn in USD  */
  amountUSD: Scalars['ethereumPrimaryBigDecimal'];
};

export type ethereumPrimaryWithdraw_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  hash_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  hash_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
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
  account_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  accountActor_?: InputMaybe<ethereumPrimaryAccount_filter>;
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
  market_?: InputMaybe<ethereumPrimaryMarket_filter>;
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
  position_?: InputMaybe<ethereumPrimaryPosition_filter>;
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
  asset_?: InputMaybe<ethereumPrimaryToken_filter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountUSD?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  amountUSD_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimaryWithdraw_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimaryWithdraw_filter>>>;
};

export type ethereumPrimaryWithdraw_orderBy =
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

export type ethereumPrimary_ActiveAccount = {
  /**  { daily/hourly }-{ Address of the account }-{ Optional: Transaction Type }-{ Optional: Market Address }-{ Optional: Days/hours since Unix epoch }  */
  id: Scalars['ID'];
};

export type ethereumPrimary_ActiveAccount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimary_ActiveAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimary_ActiveAccount_filter>>>;
};

export type ethereumPrimary_ActiveAccount_orderBy =
  | 'id';

export type ethereumPrimary_Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['ethereumPrimaryBytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

export type ethereumPrimary_DefaultOracle = {
  /**  protocol id  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  address of default oracle  */
  oracle: Scalars['ethereumPrimaryBytes'];
};

export type ethereumPrimary_DefaultOracle_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracle?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracle_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracle_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracle_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracle_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracle_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracle_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  oracle_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  oracle_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  oracle_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimary_DefaultOracle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimary_DefaultOracle_filter>>>;
};

export type ethereumPrimary_DefaultOracle_orderBy =
  | 'id'
  | 'oracle';

export type ethereumPrimary_FlashLoanPremium = {
  /**  protocol id  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  total premium rate  */
  premiumRateTotal: Scalars['ethereumPrimaryBigDecimal'];
  /**  premium rate to protocol  */
  premiumRateToProtocol: Scalars['ethereumPrimaryBigDecimal'];
};

export type ethereumPrimary_FlashLoanPremium_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  premiumRateTotal?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  premiumRateTotal_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  premiumRateTotal_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  premiumRateTotal_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  premiumRateTotal_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  premiumRateTotal_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  premiumRateTotal_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  premiumRateTotal_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  premiumRateToProtocol?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  premiumRateToProtocol_not?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  premiumRateToProtocol_gt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  premiumRateToProtocol_lt?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  premiumRateToProtocol_gte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  premiumRateToProtocol_lte?: InputMaybe<Scalars['ethereumPrimaryBigDecimal']>;
  premiumRateToProtocol_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  premiumRateToProtocol_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimary_FlashLoanPremium_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimary_FlashLoanPremium_filter>>>;
};

export type ethereumPrimary_FlashLoanPremium_orderBy =
  | 'id'
  | 'premiumRateTotal'
  | 'premiumRateToProtocol';

export type ethereumPrimary_MarketList = {
  /**  Same ID as LendingProtocol  */
  id: Scalars['ethereumPrimaryBytes'];
  /**  IDs of all markets in the LendingProtocol  */
  markets: Array<Scalars['ethereumPrimaryBytes']>;
};

export type ethereumPrimary_MarketList_filter = {
  id?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lt?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_gte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_lte?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  id_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  id_not_contains?: InputMaybe<Scalars['ethereumPrimaryBytes']>;
  markets?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  markets_not?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  markets_contains?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  markets_contains_nocase?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  markets_not_contains?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  markets_not_contains_nocase?: InputMaybe<Array<Scalars['ethereumPrimaryBytes']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimary_MarketList_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimary_MarketList_filter>>>;
};

export type ethereumPrimary_MarketList_orderBy =
  | 'id'
  | 'markets';

/** The type for the top-level _meta field */
export type ethereumPrimary_Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: ethereumPrimary_Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type ethereumPrimary_PositionCounter = {
  /**  { Account address }-{ Market address }-{ Position Side }  */
  id: Scalars['ID'];
  /**  Next count  */
  nextCount: Scalars['Int'];
  /**  The last timestamp this position was updated  */
  lastTimestamp: Scalars['BigInt'];
};

export type ethereumPrimary_PositionCounter_filter = {
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
  _change_block?: InputMaybe<ethereumPrimaryBlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ethereumPrimary_PositionCounter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ethereumPrimary_PositionCounter_filter>>>;
};

export type ethereumPrimary_PositionCounter_orderBy =
  | 'id'
  | 'nextCount'
  | 'lastTimestamp';

export type ethereumPrimary_SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  ethereumPrimarytoken: InContextSdkMethod<Query['ethereumPrimarytoken'], QueryethereumPrimarytokenArgs, MeshContext>,
  /** null **/
  ethereumPrimarytokens: InContextSdkMethod<Query['ethereumPrimarytokens'], QueryethereumPrimarytokensArgs, MeshContext>,
  /** null **/
  ethereumPrimaryrewardToken: InContextSdkMethod<Query['ethereumPrimaryrewardToken'], QueryethereumPrimaryrewardTokenArgs, MeshContext>,
  /** null **/
  ethereumPrimaryrewardTokens: InContextSdkMethod<Query['ethereumPrimaryrewardTokens'], QueryethereumPrimaryrewardTokensArgs, MeshContext>,
  /** null **/
  ethereumPrimaryinterestRate: InContextSdkMethod<Query['ethereumPrimaryinterestRate'], QueryethereumPrimaryinterestRateArgs, MeshContext>,
  /** null **/
  ethereumPrimaryinterestRates: InContextSdkMethod<Query['ethereumPrimaryinterestRates'], QueryethereumPrimaryinterestRatesArgs, MeshContext>,
  /** null **/
  ethereumPrimaryfee: InContextSdkMethod<Query['ethereumPrimaryfee'], QueryethereumPrimaryfeeArgs, MeshContext>,
  /** null **/
  ethereumPrimaryfees: InContextSdkMethod<Query['ethereumPrimaryfees'], QueryethereumPrimaryfeesArgs, MeshContext>,
  /** null **/
  ethereumPrimaryrevenueDetail: InContextSdkMethod<Query['ethereumPrimaryrevenueDetail'], QueryethereumPrimaryrevenueDetailArgs, MeshContext>,
  /** null **/
  ethereumPrimaryrevenueDetails: InContextSdkMethod<Query['ethereumPrimaryrevenueDetails'], QueryethereumPrimaryrevenueDetailsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryoracle: InContextSdkMethod<Query['ethereumPrimaryoracle'], QueryethereumPrimaryoracleArgs, MeshContext>,
  /** null **/
  ethereumPrimaryoracles: InContextSdkMethod<Query['ethereumPrimaryoracles'], QueryethereumPrimaryoraclesArgs, MeshContext>,
  /** null **/
  ethereumPrimarylendingProtocol: InContextSdkMethod<Query['ethereumPrimarylendingProtocol'], QueryethereumPrimarylendingProtocolArgs, MeshContext>,
  /** null **/
  ethereumPrimarylendingProtocols: InContextSdkMethod<Query['ethereumPrimarylendingProtocols'], QueryethereumPrimarylendingProtocolsArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarketList: InContextSdkMethod<Query['ethereumPrimarymarketList'], QueryethereumPrimarymarketListArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarketLists: InContextSdkMethod<Query['ethereumPrimarymarketLists'], QueryethereumPrimarymarketListsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryusageMetricsDailySnapshot: InContextSdkMethod<Query['ethereumPrimaryusageMetricsDailySnapshot'], QueryethereumPrimaryusageMetricsDailySnapshotArgs, MeshContext>,
  /** null **/
  ethereumPrimaryusageMetricsDailySnapshots: InContextSdkMethod<Query['ethereumPrimaryusageMetricsDailySnapshots'], QueryethereumPrimaryusageMetricsDailySnapshotsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryusageMetricsHourlySnapshot: InContextSdkMethod<Query['ethereumPrimaryusageMetricsHourlySnapshot'], QueryethereumPrimaryusageMetricsHourlySnapshotArgs, MeshContext>,
  /** null **/
  ethereumPrimaryusageMetricsHourlySnapshots: InContextSdkMethod<Query['ethereumPrimaryusageMetricsHourlySnapshots'], QueryethereumPrimaryusageMetricsHourlySnapshotsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryfinancialsDailySnapshot: InContextSdkMethod<Query['ethereumPrimaryfinancialsDailySnapshot'], QueryethereumPrimaryfinancialsDailySnapshotArgs, MeshContext>,
  /** null **/
  ethereumPrimaryfinancialsDailySnapshots: InContextSdkMethod<Query['ethereumPrimaryfinancialsDailySnapshots'], QueryethereumPrimaryfinancialsDailySnapshotsArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarket: InContextSdkMethod<Query['ethereumPrimarymarket'], QueryethereumPrimarymarketArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarkets: InContextSdkMethod<Query['ethereumPrimarymarkets'], QueryethereumPrimarymarketsArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarketDailySnapshot: InContextSdkMethod<Query['ethereumPrimarymarketDailySnapshot'], QueryethereumPrimarymarketDailySnapshotArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarketDailySnapshots: InContextSdkMethod<Query['ethereumPrimarymarketDailySnapshots'], QueryethereumPrimarymarketDailySnapshotsArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarketHourlySnapshot: InContextSdkMethod<Query['ethereumPrimarymarketHourlySnapshot'], QueryethereumPrimarymarketHourlySnapshotArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarketHourlySnapshots: InContextSdkMethod<Query['ethereumPrimarymarketHourlySnapshots'], QueryethereumPrimarymarketHourlySnapshotsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryaccount: InContextSdkMethod<Query['ethereumPrimaryaccount'], QueryethereumPrimaryaccountArgs, MeshContext>,
  /** null **/
  ethereumPrimaryaccounts: InContextSdkMethod<Query['ethereumPrimaryaccounts'], QueryethereumPrimaryaccountsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryposition: InContextSdkMethod<Query['ethereumPrimaryposition'], QueryethereumPrimarypositionArgs, MeshContext>,
  /** null **/
  ethereumPrimarypositions: InContextSdkMethod<Query['ethereumPrimarypositions'], QueryethereumPrimarypositionsArgs, MeshContext>,
  /** null **/
  ethereumPrimarypositionSnapshot: InContextSdkMethod<Query['ethereumPrimarypositionSnapshot'], QueryethereumPrimarypositionSnapshotArgs, MeshContext>,
  /** null **/
  ethereumPrimarypositionSnapshots: InContextSdkMethod<Query['ethereumPrimarypositionSnapshots'], QueryethereumPrimarypositionSnapshotsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryactiveAccount: InContextSdkMethod<Query['ethereumPrimaryactiveAccount'], QueryethereumPrimaryactiveAccountArgs, MeshContext>,
  /** null **/
  ethereumPrimaryactiveAccounts: InContextSdkMethod<Query['ethereumPrimaryactiveAccounts'], QueryethereumPrimaryactiveAccountsArgs, MeshContext>,
  /** null **/
  ethereumPrimarypositionCounter: InContextSdkMethod<Query['ethereumPrimarypositionCounter'], QueryethereumPrimarypositionCounterArgs, MeshContext>,
  /** null **/
  ethereumPrimarypositionCounters: InContextSdkMethod<Query['ethereumPrimarypositionCounters'], QueryethereumPrimarypositionCountersArgs, MeshContext>,
  /** null **/
  ethereumPrimarydeposit: InContextSdkMethod<Query['ethereumPrimarydeposit'], QueryethereumPrimarydepositArgs, MeshContext>,
  /** null **/
  ethereumPrimarydeposits: InContextSdkMethod<Query['ethereumPrimarydeposits'], QueryethereumPrimarydepositsArgs, MeshContext>,
  /** null **/
  ethereumPrimarywithdraw: InContextSdkMethod<Query['ethereumPrimarywithdraw'], QueryethereumPrimarywithdrawArgs, MeshContext>,
  /** null **/
  ethereumPrimarywithdraws: InContextSdkMethod<Query['ethereumPrimarywithdraws'], QueryethereumPrimarywithdrawsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryborrow: InContextSdkMethod<Query['ethereumPrimaryborrow'], QueryethereumPrimaryborrowArgs, MeshContext>,
  /** null **/
  ethereumPrimaryborrows: InContextSdkMethod<Query['ethereumPrimaryborrows'], QueryethereumPrimaryborrowsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryrepay: InContextSdkMethod<Query['ethereumPrimaryrepay'], QueryethereumPrimaryrepayArgs, MeshContext>,
  /** null **/
  ethereumPrimaryrepays: InContextSdkMethod<Query['ethereumPrimaryrepays'], QueryethereumPrimaryrepaysArgs, MeshContext>,
  /** null **/
  ethereumPrimaryliquidate: InContextSdkMethod<Query['ethereumPrimaryliquidate'], QueryethereumPrimaryliquidateArgs, MeshContext>,
  /** null **/
  ethereumPrimaryliquidates: InContextSdkMethod<Query['ethereumPrimaryliquidates'], QueryethereumPrimaryliquidatesArgs, MeshContext>,
  /** null **/
  ethereumPrimarytransfer: InContextSdkMethod<Query['ethereumPrimarytransfer'], QueryethereumPrimarytransferArgs, MeshContext>,
  /** null **/
  ethereumPrimarytransfers: InContextSdkMethod<Query['ethereumPrimarytransfers'], QueryethereumPrimarytransfersArgs, MeshContext>,
  /** null **/
  ethereumPrimaryflashloan: InContextSdkMethod<Query['ethereumPrimaryflashloan'], QueryethereumPrimaryflashloanArgs, MeshContext>,
  /** null **/
  ethereumPrimaryflashloans: InContextSdkMethod<Query['ethereumPrimaryflashloans'], QueryethereumPrimaryflashloansArgs, MeshContext>,
  /** null **/
  ethereumPrimarydefaultOracle: InContextSdkMethod<Query['ethereumPrimarydefaultOracle'], QueryethereumPrimarydefaultOracleArgs, MeshContext>,
  /** null **/
  ethereumPrimarydefaultOracles: InContextSdkMethod<Query['ethereumPrimarydefaultOracles'], QueryethereumPrimarydefaultOraclesArgs, MeshContext>,
  /** null **/
  ethereumPrimaryflashLoanPremium: InContextSdkMethod<Query['ethereumPrimaryflashLoanPremium'], QueryethereumPrimaryflashLoanPremiumArgs, MeshContext>,
  /** null **/
  ethereumPrimaryflashLoanPremiums: InContextSdkMethod<Query['ethereumPrimaryflashLoanPremiums'], QueryethereumPrimaryflashLoanPremiumsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryprotocol: InContextSdkMethod<Query['ethereumPrimaryprotocol'], QueryethereumPrimaryprotocolArgs, MeshContext>,
  /** null **/
  ethereumPrimaryprotocols: InContextSdkMethod<Query['ethereumPrimaryprotocols'], QueryethereumPrimaryprotocolsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryevent: InContextSdkMethod<Query['ethereumPrimaryevent'], QueryethereumPrimaryeventArgs, MeshContext>,
  /** null **/
  ethereumPrimaryevents: InContextSdkMethod<Query['ethereumPrimaryevents'], QueryethereumPrimaryeventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  ethereumPrimary_meta: InContextSdkMethod<Query['ethereumPrimary_meta'], QueryethereumPrimary_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  ethereumPrimarytoken: InContextSdkMethod<Subscription['ethereumPrimarytoken'], SubscriptionethereumPrimarytokenArgs, MeshContext>,
  /** null **/
  ethereumPrimarytokens: InContextSdkMethod<Subscription['ethereumPrimarytokens'], SubscriptionethereumPrimarytokensArgs, MeshContext>,
  /** null **/
  ethereumPrimaryrewardToken: InContextSdkMethod<Subscription['ethereumPrimaryrewardToken'], SubscriptionethereumPrimaryrewardTokenArgs, MeshContext>,
  /** null **/
  ethereumPrimaryrewardTokens: InContextSdkMethod<Subscription['ethereumPrimaryrewardTokens'], SubscriptionethereumPrimaryrewardTokensArgs, MeshContext>,
  /** null **/
  ethereumPrimaryinterestRate: InContextSdkMethod<Subscription['ethereumPrimaryinterestRate'], SubscriptionethereumPrimaryinterestRateArgs, MeshContext>,
  /** null **/
  ethereumPrimaryinterestRates: InContextSdkMethod<Subscription['ethereumPrimaryinterestRates'], SubscriptionethereumPrimaryinterestRatesArgs, MeshContext>,
  /** null **/
  ethereumPrimaryfee: InContextSdkMethod<Subscription['ethereumPrimaryfee'], SubscriptionethereumPrimaryfeeArgs, MeshContext>,
  /** null **/
  ethereumPrimaryfees: InContextSdkMethod<Subscription['ethereumPrimaryfees'], SubscriptionethereumPrimaryfeesArgs, MeshContext>,
  /** null **/
  ethereumPrimaryrevenueDetail: InContextSdkMethod<Subscription['ethereumPrimaryrevenueDetail'], SubscriptionethereumPrimaryrevenueDetailArgs, MeshContext>,
  /** null **/
  ethereumPrimaryrevenueDetails: InContextSdkMethod<Subscription['ethereumPrimaryrevenueDetails'], SubscriptionethereumPrimaryrevenueDetailsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryoracle: InContextSdkMethod<Subscription['ethereumPrimaryoracle'], SubscriptionethereumPrimaryoracleArgs, MeshContext>,
  /** null **/
  ethereumPrimaryoracles: InContextSdkMethod<Subscription['ethereumPrimaryoracles'], SubscriptionethereumPrimaryoraclesArgs, MeshContext>,
  /** null **/
  ethereumPrimarylendingProtocol: InContextSdkMethod<Subscription['ethereumPrimarylendingProtocol'], SubscriptionethereumPrimarylendingProtocolArgs, MeshContext>,
  /** null **/
  ethereumPrimarylendingProtocols: InContextSdkMethod<Subscription['ethereumPrimarylendingProtocols'], SubscriptionethereumPrimarylendingProtocolsArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarketList: InContextSdkMethod<Subscription['ethereumPrimarymarketList'], SubscriptionethereumPrimarymarketListArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarketLists: InContextSdkMethod<Subscription['ethereumPrimarymarketLists'], SubscriptionethereumPrimarymarketListsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryusageMetricsDailySnapshot: InContextSdkMethod<Subscription['ethereumPrimaryusageMetricsDailySnapshot'], SubscriptionethereumPrimaryusageMetricsDailySnapshotArgs, MeshContext>,
  /** null **/
  ethereumPrimaryusageMetricsDailySnapshots: InContextSdkMethod<Subscription['ethereumPrimaryusageMetricsDailySnapshots'], SubscriptionethereumPrimaryusageMetricsDailySnapshotsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryusageMetricsHourlySnapshot: InContextSdkMethod<Subscription['ethereumPrimaryusageMetricsHourlySnapshot'], SubscriptionethereumPrimaryusageMetricsHourlySnapshotArgs, MeshContext>,
  /** null **/
  ethereumPrimaryusageMetricsHourlySnapshots: InContextSdkMethod<Subscription['ethereumPrimaryusageMetricsHourlySnapshots'], SubscriptionethereumPrimaryusageMetricsHourlySnapshotsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryfinancialsDailySnapshot: InContextSdkMethod<Subscription['ethereumPrimaryfinancialsDailySnapshot'], SubscriptionethereumPrimaryfinancialsDailySnapshotArgs, MeshContext>,
  /** null **/
  ethereumPrimaryfinancialsDailySnapshots: InContextSdkMethod<Subscription['ethereumPrimaryfinancialsDailySnapshots'], SubscriptionethereumPrimaryfinancialsDailySnapshotsArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarket: InContextSdkMethod<Subscription['ethereumPrimarymarket'], SubscriptionethereumPrimarymarketArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarkets: InContextSdkMethod<Subscription['ethereumPrimarymarkets'], SubscriptionethereumPrimarymarketsArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarketDailySnapshot: InContextSdkMethod<Subscription['ethereumPrimarymarketDailySnapshot'], SubscriptionethereumPrimarymarketDailySnapshotArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarketDailySnapshots: InContextSdkMethod<Subscription['ethereumPrimarymarketDailySnapshots'], SubscriptionethereumPrimarymarketDailySnapshotsArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarketHourlySnapshot: InContextSdkMethod<Subscription['ethereumPrimarymarketHourlySnapshot'], SubscriptionethereumPrimarymarketHourlySnapshotArgs, MeshContext>,
  /** null **/
  ethereumPrimarymarketHourlySnapshots: InContextSdkMethod<Subscription['ethereumPrimarymarketHourlySnapshots'], SubscriptionethereumPrimarymarketHourlySnapshotsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryaccount: InContextSdkMethod<Subscription['ethereumPrimaryaccount'], SubscriptionethereumPrimaryaccountArgs, MeshContext>,
  /** null **/
  ethereumPrimaryaccounts: InContextSdkMethod<Subscription['ethereumPrimaryaccounts'], SubscriptionethereumPrimaryaccountsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryposition: InContextSdkMethod<Subscription['ethereumPrimaryposition'], SubscriptionethereumPrimarypositionArgs, MeshContext>,
  /** null **/
  ethereumPrimarypositions: InContextSdkMethod<Subscription['ethereumPrimarypositions'], SubscriptionethereumPrimarypositionsArgs, MeshContext>,
  /** null **/
  ethereumPrimarypositionSnapshot: InContextSdkMethod<Subscription['ethereumPrimarypositionSnapshot'], SubscriptionethereumPrimarypositionSnapshotArgs, MeshContext>,
  /** null **/
  ethereumPrimarypositionSnapshots: InContextSdkMethod<Subscription['ethereumPrimarypositionSnapshots'], SubscriptionethereumPrimarypositionSnapshotsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryactiveAccount: InContextSdkMethod<Subscription['ethereumPrimaryactiveAccount'], SubscriptionethereumPrimaryactiveAccountArgs, MeshContext>,
  /** null **/
  ethereumPrimaryactiveAccounts: InContextSdkMethod<Subscription['ethereumPrimaryactiveAccounts'], SubscriptionethereumPrimaryactiveAccountsArgs, MeshContext>,
  /** null **/
  ethereumPrimarypositionCounter: InContextSdkMethod<Subscription['ethereumPrimarypositionCounter'], SubscriptionethereumPrimarypositionCounterArgs, MeshContext>,
  /** null **/
  ethereumPrimarypositionCounters: InContextSdkMethod<Subscription['ethereumPrimarypositionCounters'], SubscriptionethereumPrimarypositionCountersArgs, MeshContext>,
  /** null **/
  ethereumPrimarydeposit: InContextSdkMethod<Subscription['ethereumPrimarydeposit'], SubscriptionethereumPrimarydepositArgs, MeshContext>,
  /** null **/
  ethereumPrimarydeposits: InContextSdkMethod<Subscription['ethereumPrimarydeposits'], SubscriptionethereumPrimarydepositsArgs, MeshContext>,
  /** null **/
  ethereumPrimarywithdraw: InContextSdkMethod<Subscription['ethereumPrimarywithdraw'], SubscriptionethereumPrimarywithdrawArgs, MeshContext>,
  /** null **/
  ethereumPrimarywithdraws: InContextSdkMethod<Subscription['ethereumPrimarywithdraws'], SubscriptionethereumPrimarywithdrawsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryborrow: InContextSdkMethod<Subscription['ethereumPrimaryborrow'], SubscriptionethereumPrimaryborrowArgs, MeshContext>,
  /** null **/
  ethereumPrimaryborrows: InContextSdkMethod<Subscription['ethereumPrimaryborrows'], SubscriptionethereumPrimaryborrowsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryrepay: InContextSdkMethod<Subscription['ethereumPrimaryrepay'], SubscriptionethereumPrimaryrepayArgs, MeshContext>,
  /** null **/
  ethereumPrimaryrepays: InContextSdkMethod<Subscription['ethereumPrimaryrepays'], SubscriptionethereumPrimaryrepaysArgs, MeshContext>,
  /** null **/
  ethereumPrimaryliquidate: InContextSdkMethod<Subscription['ethereumPrimaryliquidate'], SubscriptionethereumPrimaryliquidateArgs, MeshContext>,
  /** null **/
  ethereumPrimaryliquidates: InContextSdkMethod<Subscription['ethereumPrimaryliquidates'], SubscriptionethereumPrimaryliquidatesArgs, MeshContext>,
  /** null **/
  ethereumPrimarytransfer: InContextSdkMethod<Subscription['ethereumPrimarytransfer'], SubscriptionethereumPrimarytransferArgs, MeshContext>,
  /** null **/
  ethereumPrimarytransfers: InContextSdkMethod<Subscription['ethereumPrimarytransfers'], SubscriptionethereumPrimarytransfersArgs, MeshContext>,
  /** null **/
  ethereumPrimaryflashloan: InContextSdkMethod<Subscription['ethereumPrimaryflashloan'], SubscriptionethereumPrimaryflashloanArgs, MeshContext>,
  /** null **/
  ethereumPrimaryflashloans: InContextSdkMethod<Subscription['ethereumPrimaryflashloans'], SubscriptionethereumPrimaryflashloansArgs, MeshContext>,
  /** null **/
  ethereumPrimarydefaultOracle: InContextSdkMethod<Subscription['ethereumPrimarydefaultOracle'], SubscriptionethereumPrimarydefaultOracleArgs, MeshContext>,
  /** null **/
  ethereumPrimarydefaultOracles: InContextSdkMethod<Subscription['ethereumPrimarydefaultOracles'], SubscriptionethereumPrimarydefaultOraclesArgs, MeshContext>,
  /** null **/
  ethereumPrimaryflashLoanPremium: InContextSdkMethod<Subscription['ethereumPrimaryflashLoanPremium'], SubscriptionethereumPrimaryflashLoanPremiumArgs, MeshContext>,
  /** null **/
  ethereumPrimaryflashLoanPremiums: InContextSdkMethod<Subscription['ethereumPrimaryflashLoanPremiums'], SubscriptionethereumPrimaryflashLoanPremiumsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryprotocol: InContextSdkMethod<Subscription['ethereumPrimaryprotocol'], SubscriptionethereumPrimaryprotocolArgs, MeshContext>,
  /** null **/
  ethereumPrimaryprotocols: InContextSdkMethod<Subscription['ethereumPrimaryprotocols'], SubscriptionethereumPrimaryprotocolsArgs, MeshContext>,
  /** null **/
  ethereumPrimaryevent: InContextSdkMethod<Subscription['ethereumPrimaryevent'], SubscriptionethereumPrimaryeventArgs, MeshContext>,
  /** null **/
  ethereumPrimaryevents: InContextSdkMethod<Subscription['ethereumPrimaryevents'], SubscriptionethereumPrimaryeventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  ethereumPrimary_meta: InContextSdkMethod<Subscription['ethereumPrimary_meta'], SubscriptionethereumPrimary_metaArgs, MeshContext>
  };

  export type Context = {
      ["ethereumPrimary"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
