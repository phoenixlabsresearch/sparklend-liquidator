import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { MeshHTTPHandler } from '@graphql-mesh/http';
import { ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import type { EthereumPrimaryTypes } from './sources/ethereumPrimary/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
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
    Int8: any;
};
export type Account = {
    /**  { Account address }  */
    id: Scalars['Bytes'];
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
    /**  Number of times this account has transferred  */
    transferredCount: Scalars['Int'];
    /**  All transfer events where this account was the sender  */
    transfers: Array<Transfer>;
    /**  Number of times this account has received a transfer  */
    receivedCount: Scalars['Int'];
    /**  All transfer events where this account was the receiver  */
    receives: Array<Transfer>;
    /**  Number of times this account has executed a flashloan  */
    flashloanCount: Scalars['Int'];
    /**  All flashloan events where this account executed it  */
    flashloans: Array<Flashloan>;
    /**  The amount of rewards claimed by this account in USD (use the USD value at the time of claiming)  */
    rewardsClaimedUSD?: Maybe<Scalars['BigDecimal']>;
    /**  Markets that the account is using as collateral  */
    _enabledCollaterals?: Maybe<Array<Market>>;
    /**  efficient mode flag  */
    _eMode?: Maybe<Scalars['Boolean']>;
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
export type AccounttransfersArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Transfer_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Transfer_filter>;
};
export type AccountreceivesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Transfer_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Transfer_filter>;
};
export type AccountflashloansArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Flashloan_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Flashloan_filter>;
};
export type Account_enabledCollateralsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Market_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Market_filter>;
};
export type Account_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    transferredCount?: InputMaybe<Scalars['Int']>;
    transferredCount_not?: InputMaybe<Scalars['Int']>;
    transferredCount_gt?: InputMaybe<Scalars['Int']>;
    transferredCount_lt?: InputMaybe<Scalars['Int']>;
    transferredCount_gte?: InputMaybe<Scalars['Int']>;
    transferredCount_lte?: InputMaybe<Scalars['Int']>;
    transferredCount_in?: InputMaybe<Array<Scalars['Int']>>;
    transferredCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    transfers_?: InputMaybe<Transfer_filter>;
    receivedCount?: InputMaybe<Scalars['Int']>;
    receivedCount_not?: InputMaybe<Scalars['Int']>;
    receivedCount_gt?: InputMaybe<Scalars['Int']>;
    receivedCount_lt?: InputMaybe<Scalars['Int']>;
    receivedCount_gte?: InputMaybe<Scalars['Int']>;
    receivedCount_lte?: InputMaybe<Scalars['Int']>;
    receivedCount_in?: InputMaybe<Array<Scalars['Int']>>;
    receivedCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    receives_?: InputMaybe<Transfer_filter>;
    flashloanCount?: InputMaybe<Scalars['Int']>;
    flashloanCount_not?: InputMaybe<Scalars['Int']>;
    flashloanCount_gt?: InputMaybe<Scalars['Int']>;
    flashloanCount_lt?: InputMaybe<Scalars['Int']>;
    flashloanCount_gte?: InputMaybe<Scalars['Int']>;
    flashloanCount_lte?: InputMaybe<Scalars['Int']>;
    flashloanCount_in?: InputMaybe<Array<Scalars['Int']>>;
    flashloanCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
    flashloans_?: InputMaybe<Flashloan_filter>;
    rewardsClaimedUSD?: InputMaybe<Scalars['BigDecimal']>;
    rewardsClaimedUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    rewardsClaimedUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    rewardsClaimedUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    rewardsClaimedUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    rewardsClaimedUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    rewardsClaimedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardsClaimedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    _enabledCollaterals?: InputMaybe<Array<Scalars['String']>>;
    _enabledCollaterals_not?: InputMaybe<Array<Scalars['String']>>;
    _enabledCollaterals_contains?: InputMaybe<Array<Scalars['String']>>;
    _enabledCollaterals_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    _enabledCollaterals_not_contains?: InputMaybe<Array<Scalars['String']>>;
    _enabledCollaterals_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    _enabledCollaterals_?: InputMaybe<Market_filter>;
    _eMode?: InputMaybe<Scalars['Boolean']>;
    _eMode_not?: InputMaybe<Scalars['Boolean']>;
    _eMode_in?: InputMaybe<Array<Scalars['Boolean']>>;
    _eMode_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Account_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Account_filter>>>;
};
export type Account_orderBy = 'id' | 'positionCount' | 'positions' | 'openPositionCount' | 'closedPositionCount' | 'depositCount' | 'deposits' | 'withdrawCount' | 'withdraws' | 'borrowCount' | 'borrows' | 'repayCount' | 'repays' | 'liquidateCount' | 'liquidates' | 'liquidationCount' | 'liquidations' | 'transferredCount' | 'transfers' | 'receivedCount' | 'receives' | 'flashloanCount' | 'flashloans' | 'rewardsClaimedUSD' | '_enabledCollaterals' | '_eMode';
export type BlockChangedFilter = {
    number_gte: Scalars['Int'];
};
export type Block_height = {
    hash?: InputMaybe<Scalars['Bytes']>;
    number?: InputMaybe<Scalars['Int']>;
    number_gte?: InputMaybe<Scalars['Int']>;
};
export type Borrow = Event & {
    /**  { Transaction hash }{ Log index }  */
    id: Scalars['Bytes'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['Bytes'];
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
    account: Account;
    /**  Account that receives the funds from the new debt  */
    accountActor?: Maybe<Account>;
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
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_gt?: InputMaybe<Scalars['Bytes']>;
    hash_lt?: InputMaybe<Scalars['Bytes']>;
    hash_gte?: InputMaybe<Scalars['Bytes']>;
    hash_lte?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    account_?: InputMaybe<Account_filter>;
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
    accountActor_?: InputMaybe<Account_filter>;
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
export type Borrow_orderBy = 'id' | 'hash' | 'nonce' | 'logIndex' | 'gasPrice' | 'gasUsed' | 'gasLimit' | 'blockNumber' | 'timestamp' | 'account' | 'account__id' | 'account__positionCount' | 'account__openPositionCount' | 'account__closedPositionCount' | 'account__depositCount' | 'account__withdrawCount' | 'account__borrowCount' | 'account__repayCount' | 'account__liquidateCount' | 'account__liquidationCount' | 'account__transferredCount' | 'account__receivedCount' | 'account__flashloanCount' | 'account__rewardsClaimedUSD' | 'account___eMode' | 'accountActor' | 'accountActor__id' | 'accountActor__positionCount' | 'accountActor__openPositionCount' | 'accountActor__closedPositionCount' | 'accountActor__depositCount' | 'accountActor__withdrawCount' | 'accountActor__borrowCount' | 'accountActor__repayCount' | 'accountActor__liquidateCount' | 'accountActor__liquidationCount' | 'accountActor__transferredCount' | 'accountActor__receivedCount' | 'accountActor__flashloanCount' | 'accountActor__rewardsClaimedUSD' | 'accountActor___eMode' | 'market' | 'market__id' | 'market__name' | 'market__isActive' | 'market__canBorrowFrom' | 'market__canUseAsCollateral' | 'market__maximumLTV' | 'market__liquidationThreshold' | 'market__liquidationPenalty' | 'market__canIsolate' | 'market__createdTimestamp' | 'market__createdBlockNumber' | 'market__relation' | 'market__stakedOutputTokenAmount' | 'market__inputTokenBalance' | 'market__inputTokenPriceUSD' | 'market__outputTokenSupply' | 'market__outputTokenPriceUSD' | 'market__exchangeRate' | 'market__reserves' | 'market__reserveFactor' | 'market__variableBorrowedTokenBalance' | 'market__stableBorrowedTokenBalance' | 'market__indexLastUpdatedTimestamp' | 'market__supplyIndex' | 'market__supplyCap' | 'market__borrowIndex' | 'market__borrowCap' | 'market__totalValueLockedUSD' | 'market__cumulativeSupplySideRevenueUSD' | 'market__cumulativeProtocolSideRevenueUSD' | 'market__cumulativeTotalRevenueUSD' | 'market__totalDepositBalanceUSD' | 'market__cumulativeDepositUSD' | 'market__totalBorrowBalanceUSD' | 'market__cumulativeBorrowUSD' | 'market__cumulativeLiquidateUSD' | 'market__cumulativeTransferUSD' | 'market__cumulativeFlashloanUSD' | 'market__transactionCount' | 'market__depositCount' | 'market__withdrawCount' | 'market__borrowCount' | 'market__repayCount' | 'market__liquidationCount' | 'market__transferCount' | 'market__flashloanCount' | 'market__cumulativeUniqueUsers' | 'market__cumulativeUniqueDepositors' | 'market__cumulativeUniqueBorrowers' | 'market__cumulativeUniqueLiquidators' | 'market__cumulativeUniqueLiquidatees' | 'market__cumulativeUniqueTransferrers' | 'market__cumulativeUniqueFlashloaners' | 'market__positionCount' | 'market__openPositionCount' | 'market__closedPositionCount' | 'market__lendingPositionCount' | 'market__borrowingPositionCount' | 'market___baseTrackingBorrowSpeed' | 'market___baseTrackingSupplySpeed' | 'market___lastRewardsUpdated' | 'market___liquidationProtocolFee' | 'market___siloedBorrowing' | 'position' | 'position__id' | 'position__hashOpened' | 'position__hashClosed' | 'position__blockNumberOpened' | 'position__timestampOpened' | 'position__blockNumberClosed' | 'position__timestampClosed' | 'position__side' | 'position__type' | 'position__isCollateral' | 'position__isIsolated' | 'position__balance' | 'position__principal' | 'position__depositCount' | 'position__withdrawCount' | 'position__borrowCount' | 'position__repayCount' | 'position__liquidationCount' | 'position__transferredCount' | 'position__receivedCount' | 'position___eMode' | 'asset' | 'asset__id' | 'asset__name' | 'asset__symbol' | 'asset__decimals' | 'asset__lastPriceUSD' | 'asset__lastPriceBlockNumber' | 'asset__type' | 'asset___iavsTokenType' | 'amount' | 'amountUSD';
export type CollateralizationType = 
/**  Over collateralized protocols require users to put up more collateral than the amount borrowed.  */
'OVER_COLLATERALIZED'
/**  Protocols that allow users to borrow more than their collateral locked.   */
 | 'UNDER_COLLATERALIZED'
/**  Protocols that allow users to borrow without any collateral. Generally this protocol is KYC'd and only whitelist users can do this  */
 | 'UNCOLLATERALIZED';
export type Deposit = Event & {
    /**  { Transaction hash }{ Log index }  */
    id: Scalars['Bytes'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['Bytes'];
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
    account: Account;
    /**  Account that executed the deposit (e.g. a deposit on behalf of account)  */
    accountActor?: Maybe<Account>;
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
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_gt?: InputMaybe<Scalars['Bytes']>;
    hash_lt?: InputMaybe<Scalars['Bytes']>;
    hash_gte?: InputMaybe<Scalars['Bytes']>;
    hash_lte?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    account_?: InputMaybe<Account_filter>;
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
    accountActor_?: InputMaybe<Account_filter>;
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
export type Deposit_orderBy = 'id' | 'hash' | 'nonce' | 'logIndex' | 'gasPrice' | 'gasUsed' | 'gasLimit' | 'blockNumber' | 'timestamp' | 'account' | 'account__id' | 'account__positionCount' | 'account__openPositionCount' | 'account__closedPositionCount' | 'account__depositCount' | 'account__withdrawCount' | 'account__borrowCount' | 'account__repayCount' | 'account__liquidateCount' | 'account__liquidationCount' | 'account__transferredCount' | 'account__receivedCount' | 'account__flashloanCount' | 'account__rewardsClaimedUSD' | 'account___eMode' | 'accountActor' | 'accountActor__id' | 'accountActor__positionCount' | 'accountActor__openPositionCount' | 'accountActor__closedPositionCount' | 'accountActor__depositCount' | 'accountActor__withdrawCount' | 'accountActor__borrowCount' | 'accountActor__repayCount' | 'accountActor__liquidateCount' | 'accountActor__liquidationCount' | 'accountActor__transferredCount' | 'accountActor__receivedCount' | 'accountActor__flashloanCount' | 'accountActor__rewardsClaimedUSD' | 'accountActor___eMode' | 'market' | 'market__id' | 'market__name' | 'market__isActive' | 'market__canBorrowFrom' | 'market__canUseAsCollateral' | 'market__maximumLTV' | 'market__liquidationThreshold' | 'market__liquidationPenalty' | 'market__canIsolate' | 'market__createdTimestamp' | 'market__createdBlockNumber' | 'market__relation' | 'market__stakedOutputTokenAmount' | 'market__inputTokenBalance' | 'market__inputTokenPriceUSD' | 'market__outputTokenSupply' | 'market__outputTokenPriceUSD' | 'market__exchangeRate' | 'market__reserves' | 'market__reserveFactor' | 'market__variableBorrowedTokenBalance' | 'market__stableBorrowedTokenBalance' | 'market__indexLastUpdatedTimestamp' | 'market__supplyIndex' | 'market__supplyCap' | 'market__borrowIndex' | 'market__borrowCap' | 'market__totalValueLockedUSD' | 'market__cumulativeSupplySideRevenueUSD' | 'market__cumulativeProtocolSideRevenueUSD' | 'market__cumulativeTotalRevenueUSD' | 'market__totalDepositBalanceUSD' | 'market__cumulativeDepositUSD' | 'market__totalBorrowBalanceUSD' | 'market__cumulativeBorrowUSD' | 'market__cumulativeLiquidateUSD' | 'market__cumulativeTransferUSD' | 'market__cumulativeFlashloanUSD' | 'market__transactionCount' | 'market__depositCount' | 'market__withdrawCount' | 'market__borrowCount' | 'market__repayCount' | 'market__liquidationCount' | 'market__transferCount' | 'market__flashloanCount' | 'market__cumulativeUniqueUsers' | 'market__cumulativeUniqueDepositors' | 'market__cumulativeUniqueBorrowers' | 'market__cumulativeUniqueLiquidators' | 'market__cumulativeUniqueLiquidatees' | 'market__cumulativeUniqueTransferrers' | 'market__cumulativeUniqueFlashloaners' | 'market__positionCount' | 'market__openPositionCount' | 'market__closedPositionCount' | 'market__lendingPositionCount' | 'market__borrowingPositionCount' | 'market___baseTrackingBorrowSpeed' | 'market___baseTrackingSupplySpeed' | 'market___lastRewardsUpdated' | 'market___liquidationProtocolFee' | 'market___siloedBorrowing' | 'position' | 'position__id' | 'position__hashOpened' | 'position__hashClosed' | 'position__blockNumberOpened' | 'position__timestampOpened' | 'position__blockNumberClosed' | 'position__timestampClosed' | 'position__side' | 'position__type' | 'position__isCollateral' | 'position__isIsolated' | 'position__balance' | 'position__principal' | 'position__depositCount' | 'position__withdrawCount' | 'position__borrowCount' | 'position__repayCount' | 'position__liquidationCount' | 'position__transferredCount' | 'position__receivedCount' | 'position___eMode' | 'asset' | 'asset__id' | 'asset__name' | 'asset__symbol' | 'asset__decimals' | 'asset__lastPriceUSD' | 'asset__lastPriceBlockNumber' | 'asset__type' | 'asset___iavsTokenType' | 'amount' | 'amountUSD';
/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type Event = {
    /**  { Transaction hash }{ Log index }  */
    id: Scalars['Bytes'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['Bytes'];
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
    market: Market;
    /**  Token deposited  */
    asset: Token;
    /**  Amount of token deposited in native units  */
    amount: Scalars['BigInt'];
    /**  Amount of token deposited in USD  */
    amountUSD: Scalars['BigDecimal'];
};
export type Event_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_gt?: InputMaybe<Scalars['Bytes']>;
    hash_lt?: InputMaybe<Scalars['Bytes']>;
    hash_gte?: InputMaybe<Scalars['Bytes']>;
    hash_lte?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    market_?: InputMaybe<Market_filter>;
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
    and?: InputMaybe<Array<InputMaybe<Event_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Event_filter>>>;
};
export type Event_orderBy = 'id' | 'hash' | 'nonce' | 'logIndex' | 'gasPrice' | 'gasUsed' | 'gasLimit' | 'blockNumber' | 'timestamp' | 'market' | 'market__id' | 'market__name' | 'market__isActive' | 'market__canBorrowFrom' | 'market__canUseAsCollateral' | 'market__maximumLTV' | 'market__liquidationThreshold' | 'market__liquidationPenalty' | 'market__canIsolate' | 'market__createdTimestamp' | 'market__createdBlockNumber' | 'market__relation' | 'market__stakedOutputTokenAmount' | 'market__inputTokenBalance' | 'market__inputTokenPriceUSD' | 'market__outputTokenSupply' | 'market__outputTokenPriceUSD' | 'market__exchangeRate' | 'market__reserves' | 'market__reserveFactor' | 'market__variableBorrowedTokenBalance' | 'market__stableBorrowedTokenBalance' | 'market__indexLastUpdatedTimestamp' | 'market__supplyIndex' | 'market__supplyCap' | 'market__borrowIndex' | 'market__borrowCap' | 'market__totalValueLockedUSD' | 'market__cumulativeSupplySideRevenueUSD' | 'market__cumulativeProtocolSideRevenueUSD' | 'market__cumulativeTotalRevenueUSD' | 'market__totalDepositBalanceUSD' | 'market__cumulativeDepositUSD' | 'market__totalBorrowBalanceUSD' | 'market__cumulativeBorrowUSD' | 'market__cumulativeLiquidateUSD' | 'market__cumulativeTransferUSD' | 'market__cumulativeFlashloanUSD' | 'market__transactionCount' | 'market__depositCount' | 'market__withdrawCount' | 'market__borrowCount' | 'market__repayCount' | 'market__liquidationCount' | 'market__transferCount' | 'market__flashloanCount' | 'market__cumulativeUniqueUsers' | 'market__cumulativeUniqueDepositors' | 'market__cumulativeUniqueBorrowers' | 'market__cumulativeUniqueLiquidators' | 'market__cumulativeUniqueLiquidatees' | 'market__cumulativeUniqueTransferrers' | 'market__cumulativeUniqueFlashloaners' | 'market__positionCount' | 'market__openPositionCount' | 'market__closedPositionCount' | 'market__lendingPositionCount' | 'market__borrowingPositionCount' | 'market___baseTrackingBorrowSpeed' | 'market___baseTrackingSupplySpeed' | 'market___lastRewardsUpdated' | 'market___liquidationProtocolFee' | 'market___siloedBorrowing' | 'asset' | 'asset__id' | 'asset__name' | 'asset__symbol' | 'asset__decimals' | 'asset__lastPriceUSD' | 'asset__lastPriceBlockNumber' | 'asset__type' | 'asset___iavsTokenType' | 'amount' | 'amountUSD';
export type Fee = {
    /**  { Fee type }  */
    id: Scalars['ID'];
    /**  Fee in percentage. E.g. 5.21% should be stored as 5.21  */
    rate?: Maybe<Scalars['BigDecimal']>;
    /**  A flat fee in the native token. This may be a base fee in addition to the rate, or the only fee.  */
    flatFee?: Maybe<Scalars['BigDecimal']>;
    /**  The type of fee (e.g. liquidation, admin, etc.)  */
    type: FeeType;
};
export type FeeType = 
/**  Fees from liquidations  */
'LIQUIDATION_FEE'
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
export type Fee_filter = {
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
    flatFee?: InputMaybe<Scalars['BigDecimal']>;
    flatFee_not?: InputMaybe<Scalars['BigDecimal']>;
    flatFee_gt?: InputMaybe<Scalars['BigDecimal']>;
    flatFee_lt?: InputMaybe<Scalars['BigDecimal']>;
    flatFee_gte?: InputMaybe<Scalars['BigDecimal']>;
    flatFee_lte?: InputMaybe<Scalars['BigDecimal']>;
    flatFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    flatFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    type?: InputMaybe<FeeType>;
    type_not?: InputMaybe<FeeType>;
    type_in?: InputMaybe<Array<FeeType>>;
    type_not_in?: InputMaybe<Array<FeeType>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Fee_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Fee_filter>>>;
};
export type Fee_orderBy = 'id' | 'rate' | 'flatFee' | 'type';
export type FinancialsDailySnapshot = {
    /**  ID is # of days since Unix epoch time  */
    id: Scalars['Bytes'];
    /**  Number of days since Unix epoch time  */
    days: Scalars['Int'];
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
    /**  Details of revenue sources and amounts  */
    revenueDetail?: Maybe<RevenueDetail>;
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
    /**  Total assets transferred on a given day, in USD.  */
    dailyTransferUSD: Scalars['BigDecimal'];
    /**  Total flashloans executed on a given day, in USD.  */
    dailyFlashloanUSD: Scalars['BigDecimal'];
};
export type FinancialsDailySnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    revenueDetail_?: InputMaybe<RevenueDetail_filter>;
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
    dailyTransferUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyTransferUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyTransferUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyTransferUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyTransferUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyTransferUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyTransferUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyTransferUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyFlashloanUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyFlashloanUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyFlashloanUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyFlashloanUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyFlashloanUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyFlashloanUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyFlashloanUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyFlashloanUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<FinancialsDailySnapshot_filter>>>;
    or?: InputMaybe<Array<InputMaybe<FinancialsDailySnapshot_filter>>>;
};
export type FinancialsDailySnapshot_orderBy = 'id' | 'days' | 'protocol' | 'protocol__id' | 'protocol__protocol' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__lendingType' | 'protocol__lenderPermissionType' | 'protocol__borrowerPermissionType' | 'protocol__poolCreatorPermissionType' | 'protocol__riskType' | 'protocol__collateralizationType' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueDepositors' | 'protocol__cumulativeUniqueBorrowers' | 'protocol__cumulativeUniqueLiquidators' | 'protocol__cumulativeUniqueLiquidatees' | 'protocol__totalValueLockedUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__totalDepositBalanceUSD' | 'protocol__cumulativeDepositUSD' | 'protocol__totalBorrowBalanceUSD' | 'protocol__cumulativeBorrowUSD' | 'protocol__cumulativeLiquidateUSD' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__transactionCount' | 'protocol__depositCount' | 'protocol__withdrawCount' | 'protocol__borrowCount' | 'protocol__repayCount' | 'protocol__liquidationCount' | 'protocol__transferCount' | 'protocol__flashloanCount' | 'blockNumber' | 'timestamp' | 'totalValueLockedUSD' | 'protocolControlledValueUSD' | 'mintedTokenSupplies' | 'dailySupplySideRevenueUSD' | 'cumulativeSupplySideRevenueUSD' | 'dailyProtocolSideRevenueUSD' | 'cumulativeProtocolSideRevenueUSD' | 'dailyTotalRevenueUSD' | 'cumulativeTotalRevenueUSD' | 'revenueDetail' | 'revenueDetail__id' | 'totalDepositBalanceUSD' | 'dailyDepositUSD' | 'cumulativeDepositUSD' | 'totalBorrowBalanceUSD' | 'dailyBorrowUSD' | 'cumulativeBorrowUSD' | 'dailyLiquidateUSD' | 'cumulativeLiquidateUSD' | 'dailyWithdrawUSD' | 'dailyRepayUSD' | 'dailyTransferUSD' | 'dailyFlashloanUSD';
export type Flashloan = Event & {
    /**  { Transaction hash }{ Log index }  */
    id: Scalars['Bytes'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['Bytes'];
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
    account: Account;
    /**  Account that initiates the flashloan  */
    accountActor?: Maybe<Account>;
    /**  The market in which this flashloan is executed  */
    market: Market;
    /**  Asset borrowed  */
    asset: Token;
    /**  Amount of asset borrowed in native units  */
    amount: Scalars['BigInt'];
    /**  Amount of asset borrowed in USD  */
    amountUSD: Scalars['BigDecimal'];
    /**  Amount of asset taken by protocol as a fee in native units  */
    feeAmount?: Maybe<Scalars['BigInt']>;
    /**  Amount of asset taken by protocol as a fee in USD  */
    feeAmountUSD?: Maybe<Scalars['BigDecimal']>;
};
export type Flashloan_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_gt?: InputMaybe<Scalars['Bytes']>;
    hash_lt?: InputMaybe<Scalars['Bytes']>;
    hash_gte?: InputMaybe<Scalars['Bytes']>;
    hash_lte?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    account_?: InputMaybe<Account_filter>;
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
    accountActor_?: InputMaybe<Account_filter>;
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
    feeAmount?: InputMaybe<Scalars['BigInt']>;
    feeAmount_not?: InputMaybe<Scalars['BigInt']>;
    feeAmount_gt?: InputMaybe<Scalars['BigInt']>;
    feeAmount_lt?: InputMaybe<Scalars['BigInt']>;
    feeAmount_gte?: InputMaybe<Scalars['BigInt']>;
    feeAmount_lte?: InputMaybe<Scalars['BigInt']>;
    feeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    feeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    feeAmountUSD?: InputMaybe<Scalars['BigDecimal']>;
    feeAmountUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    feeAmountUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    feeAmountUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    feeAmountUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    feeAmountUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    feeAmountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    feeAmountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Flashloan_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Flashloan_filter>>>;
};
export type Flashloan_orderBy = 'id' | 'hash' | 'nonce' | 'logIndex' | 'gasPrice' | 'gasUsed' | 'gasLimit' | 'blockNumber' | 'timestamp' | 'account' | 'account__id' | 'account__positionCount' | 'account__openPositionCount' | 'account__closedPositionCount' | 'account__depositCount' | 'account__withdrawCount' | 'account__borrowCount' | 'account__repayCount' | 'account__liquidateCount' | 'account__liquidationCount' | 'account__transferredCount' | 'account__receivedCount' | 'account__flashloanCount' | 'account__rewardsClaimedUSD' | 'account___eMode' | 'accountActor' | 'accountActor__id' | 'accountActor__positionCount' | 'accountActor__openPositionCount' | 'accountActor__closedPositionCount' | 'accountActor__depositCount' | 'accountActor__withdrawCount' | 'accountActor__borrowCount' | 'accountActor__repayCount' | 'accountActor__liquidateCount' | 'accountActor__liquidationCount' | 'accountActor__transferredCount' | 'accountActor__receivedCount' | 'accountActor__flashloanCount' | 'accountActor__rewardsClaimedUSD' | 'accountActor___eMode' | 'market' | 'market__id' | 'market__name' | 'market__isActive' | 'market__canBorrowFrom' | 'market__canUseAsCollateral' | 'market__maximumLTV' | 'market__liquidationThreshold' | 'market__liquidationPenalty' | 'market__canIsolate' | 'market__createdTimestamp' | 'market__createdBlockNumber' | 'market__relation' | 'market__stakedOutputTokenAmount' | 'market__inputTokenBalance' | 'market__inputTokenPriceUSD' | 'market__outputTokenSupply' | 'market__outputTokenPriceUSD' | 'market__exchangeRate' | 'market__reserves' | 'market__reserveFactor' | 'market__variableBorrowedTokenBalance' | 'market__stableBorrowedTokenBalance' | 'market__indexLastUpdatedTimestamp' | 'market__supplyIndex' | 'market__supplyCap' | 'market__borrowIndex' | 'market__borrowCap' | 'market__totalValueLockedUSD' | 'market__cumulativeSupplySideRevenueUSD' | 'market__cumulativeProtocolSideRevenueUSD' | 'market__cumulativeTotalRevenueUSD' | 'market__totalDepositBalanceUSD' | 'market__cumulativeDepositUSD' | 'market__totalBorrowBalanceUSD' | 'market__cumulativeBorrowUSD' | 'market__cumulativeLiquidateUSD' | 'market__cumulativeTransferUSD' | 'market__cumulativeFlashloanUSD' | 'market__transactionCount' | 'market__depositCount' | 'market__withdrawCount' | 'market__borrowCount' | 'market__repayCount' | 'market__liquidationCount' | 'market__transferCount' | 'market__flashloanCount' | 'market__cumulativeUniqueUsers' | 'market__cumulativeUniqueDepositors' | 'market__cumulativeUniqueBorrowers' | 'market__cumulativeUniqueLiquidators' | 'market__cumulativeUniqueLiquidatees' | 'market__cumulativeUniqueTransferrers' | 'market__cumulativeUniqueFlashloaners' | 'market__positionCount' | 'market__openPositionCount' | 'market__closedPositionCount' | 'market__lendingPositionCount' | 'market__borrowingPositionCount' | 'market___baseTrackingBorrowSpeed' | 'market___baseTrackingSupplySpeed' | 'market___lastRewardsUpdated' | 'market___liquidationProtocolFee' | 'market___siloedBorrowing' | 'asset' | 'asset__id' | 'asset__name' | 'asset__symbol' | 'asset__decimals' | 'asset__lastPriceUSD' | 'asset__lastPriceBlockNumber' | 'asset__type' | 'asset___iavsTokenType' | 'amount' | 'amountUSD' | 'feeAmount' | 'feeAmountUSD';
export type InterestRate = {
    /**  { Interest rate side }-{ Interest rate type }-{ Market ID }-{ Optional: Tranche }-{ Optional: # days/hours since epoch time }  */
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
    /**  The level of debt priority at this interest rate  */
    tranche?: Maybe<Tranche>;
};
export type InterestRateSide = 
/**  Interest rate accrued by lenders  */
'LENDER'
/**  Interest rate paid by borrowers  */
 | 'BORROWER';
export type InterestRateType = 
/**  Stable interest rate (e.g. Aave)  */
'STABLE'
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
    tranche?: InputMaybe<Tranche>;
    tranche_not?: InputMaybe<Tranche>;
    tranche_in?: InputMaybe<Array<Tranche>>;
    tranche_not_in?: InputMaybe<Array<Tranche>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<InterestRate_filter>>>;
    or?: InputMaybe<Array<InputMaybe<InterestRate_filter>>>;
};
export type InterestRate_orderBy = 'id' | 'rate' | 'duration' | 'maturityBlock' | 'side' | 'type' | 'tranche';
export type LendingProtocol = Protocol & {
    /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
    id: Scalars['Bytes'];
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
    network: Network;
    /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
    type: ProtocolType;
    /**  The specific lending protocol type  */
    lendingType?: Maybe<LendingType>;
    /**  The specific permissions required to lend in this protocol  */
    lenderPermissionType?: Maybe<PermissionType>;
    /**  The specific permissions required to borrow from this protocol  */
    borrowerPermissionType?: Maybe<PermissionType>;
    /**  The specific permissions required to create a pool (market) in this protocol  */
    poolCreatorPermissionType?: Maybe<PermissionType>;
    /**  Risk type of the lending protocol  */
    riskType?: Maybe<RiskType>;
    /**  The way a positions can be collateralized  */
    collateralizationType?: Maybe<CollateralizationType>;
    /**  Tokens that can be minted. Only applies to CDP (usually stable coins)  */
    mintedTokens?: Maybe<Array<Token>>;
    /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs.  */
    rewardTokens?: Maybe<Array<RewardToken>>;
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
    totalValueLockedUSD: Scalars['BigDecimal'];
    /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
    protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
    /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
    cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
    /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
    cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
    cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
    /**  All fees in the protocol. Fee should be in percentage format. e.g. 0.30% liquidation fee  */
    fees?: Maybe<Array<Fee>>;
    /**  Details of revenue sources and amounts  */
    revenueDetail?: Maybe<RevenueDetail>;
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
    rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
    /**  Daily usage metrics for this protocol  */
    dailyUsageMetrics: Array<UsageMetricsDailySnapshot>;
    /**  Hourly usage metrics for this protocol  */
    hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>;
    /**  Daily financial metrics for this protocol  */
    financialMetrics: Array<FinancialsDailySnapshot>;
    /**  All markets that belong to this protocol  */
    markets: Array<Market>;
};
export type LendingProtocolmintedTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Token_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Token_filter>;
};
export type LendingProtocolrewardTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RewardToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<RewardToken_filter>;
};
export type LendingProtocolfeesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Fee_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Fee_filter>;
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
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    lenderPermissionType?: InputMaybe<PermissionType>;
    lenderPermissionType_not?: InputMaybe<PermissionType>;
    lenderPermissionType_in?: InputMaybe<Array<PermissionType>>;
    lenderPermissionType_not_in?: InputMaybe<Array<PermissionType>>;
    borrowerPermissionType?: InputMaybe<PermissionType>;
    borrowerPermissionType_not?: InputMaybe<PermissionType>;
    borrowerPermissionType_in?: InputMaybe<Array<PermissionType>>;
    borrowerPermissionType_not_in?: InputMaybe<Array<PermissionType>>;
    poolCreatorPermissionType?: InputMaybe<PermissionType>;
    poolCreatorPermissionType_not?: InputMaybe<PermissionType>;
    poolCreatorPermissionType_in?: InputMaybe<Array<PermissionType>>;
    poolCreatorPermissionType_not_in?: InputMaybe<Array<PermissionType>>;
    riskType?: InputMaybe<RiskType>;
    riskType_not?: InputMaybe<RiskType>;
    riskType_in?: InputMaybe<Array<RiskType>>;
    riskType_not_in?: InputMaybe<Array<RiskType>>;
    collateralizationType?: InputMaybe<CollateralizationType>;
    collateralizationType_not?: InputMaybe<CollateralizationType>;
    collateralizationType_in?: InputMaybe<Array<CollateralizationType>>;
    collateralizationType_not_in?: InputMaybe<Array<CollateralizationType>>;
    mintedTokens?: InputMaybe<Array<Scalars['String']>>;
    mintedTokens_not?: InputMaybe<Array<Scalars['String']>>;
    mintedTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    mintedTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    mintedTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    mintedTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    mintedTokens_?: InputMaybe<Token_filter>;
    rewardTokens?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_?: InputMaybe<RewardToken_filter>;
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
    fees?: InputMaybe<Array<Scalars['String']>>;
    fees_not?: InputMaybe<Array<Scalars['String']>>;
    fees_contains?: InputMaybe<Array<Scalars['String']>>;
    fees_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    fees_not_contains?: InputMaybe<Array<Scalars['String']>>;
    fees_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    fees_?: InputMaybe<Fee_filter>;
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
    revenueDetail_?: InputMaybe<RevenueDetail_filter>;
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
    rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_filter>;
    hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_filter>;
    financialMetrics_?: InputMaybe<FinancialsDailySnapshot_filter>;
    markets_?: InputMaybe<Market_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<LendingProtocol_filter>>>;
    or?: InputMaybe<Array<InputMaybe<LendingProtocol_filter>>>;
};
export type LendingProtocol_orderBy = 'id' | 'protocol' | 'name' | 'slug' | 'schemaVersion' | 'subgraphVersion' | 'methodologyVersion' | 'network' | 'type' | 'lendingType' | 'lenderPermissionType' | 'borrowerPermissionType' | 'poolCreatorPermissionType' | 'riskType' | 'collateralizationType' | 'mintedTokens' | 'rewardTokens' | 'cumulativeUniqueUsers' | 'cumulativeUniqueDepositors' | 'cumulativeUniqueBorrowers' | 'cumulativeUniqueLiquidators' | 'cumulativeUniqueLiquidatees' | 'totalValueLockedUSD' | 'protocolControlledValueUSD' | 'cumulativeSupplySideRevenueUSD' | 'cumulativeProtocolSideRevenueUSD' | 'cumulativeTotalRevenueUSD' | 'fees' | 'revenueDetail' | 'revenueDetail__id' | 'totalDepositBalanceUSD' | 'cumulativeDepositUSD' | 'totalBorrowBalanceUSD' | 'cumulativeBorrowUSD' | 'cumulativeLiquidateUSD' | 'mintedTokenSupplies' | 'totalPoolCount' | 'openPositionCount' | 'cumulativePositionCount' | 'transactionCount' | 'depositCount' | 'withdrawCount' | 'borrowCount' | 'repayCount' | 'liquidationCount' | 'transferCount' | 'flashloanCount' | 'rewardTokenEmissionsAmount' | 'rewardTokenEmissionsUSD' | 'dailyUsageMetrics' | 'hourlyUsageMetrics' | 'financialMetrics' | 'markets';
export type LendingType = 
/**  Collateralized Debt Position (CDP) protocols have singular isolated positions created by users. We aggregate them to give a single view of a market  */
'CDP'
/**  Pooled protocols pool all users assets into a single market  */
 | 'POOLED';
export type Liquidate = Event & {
    /**  { Transaction hash }{ Log index }  */
    id: Scalars['Bytes'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['Bytes'];
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
    liquidator: Account;
    /**  Account that got liquidated  */
    liquidatee: Account;
    /**  The market of the collateral being used  */
    market: Market;
    /**  The user position changed by this event  */
    positions: Array<Position>;
    /**  Asset repaid (borrowed)  */
    asset: Token;
    /**  Amount of collateral liquidated in native units  */
    amount: Scalars['BigInt'];
    /**  Amount of collateral liquidated in USD  */
    amountUSD: Scalars['BigDecimal'];
    /**  Amount of profit from liquidation in USD  */
    profitUSD: Scalars['BigDecimal'];
};
export type LiquidatepositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Position_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Position_filter>;
};
export type Liquidate_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_gt?: InputMaybe<Scalars['Bytes']>;
    hash_lt?: InputMaybe<Scalars['Bytes']>;
    hash_gte?: InputMaybe<Scalars['Bytes']>;
    hash_lte?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    positions?: InputMaybe<Array<Scalars['String']>>;
    positions_not?: InputMaybe<Array<Scalars['String']>>;
    positions_contains?: InputMaybe<Array<Scalars['String']>>;
    positions_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    positions_not_contains?: InputMaybe<Array<Scalars['String']>>;
    positions_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    positions_?: InputMaybe<Position_filter>;
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
export type Liquidate_orderBy = 'id' | 'hash' | 'nonce' | 'logIndex' | 'gasPrice' | 'gasUsed' | 'gasLimit' | 'blockNumber' | 'timestamp' | 'liquidator' | 'liquidator__id' | 'liquidator__positionCount' | 'liquidator__openPositionCount' | 'liquidator__closedPositionCount' | 'liquidator__depositCount' | 'liquidator__withdrawCount' | 'liquidator__borrowCount' | 'liquidator__repayCount' | 'liquidator__liquidateCount' | 'liquidator__liquidationCount' | 'liquidator__transferredCount' | 'liquidator__receivedCount' | 'liquidator__flashloanCount' | 'liquidator__rewardsClaimedUSD' | 'liquidator___eMode' | 'liquidatee' | 'liquidatee__id' | 'liquidatee__positionCount' | 'liquidatee__openPositionCount' | 'liquidatee__closedPositionCount' | 'liquidatee__depositCount' | 'liquidatee__withdrawCount' | 'liquidatee__borrowCount' | 'liquidatee__repayCount' | 'liquidatee__liquidateCount' | 'liquidatee__liquidationCount' | 'liquidatee__transferredCount' | 'liquidatee__receivedCount' | 'liquidatee__flashloanCount' | 'liquidatee__rewardsClaimedUSD' | 'liquidatee___eMode' | 'market' | 'market__id' | 'market__name' | 'market__isActive' | 'market__canBorrowFrom' | 'market__canUseAsCollateral' | 'market__maximumLTV' | 'market__liquidationThreshold' | 'market__liquidationPenalty' | 'market__canIsolate' | 'market__createdTimestamp' | 'market__createdBlockNumber' | 'market__relation' | 'market__stakedOutputTokenAmount' | 'market__inputTokenBalance' | 'market__inputTokenPriceUSD' | 'market__outputTokenSupply' | 'market__outputTokenPriceUSD' | 'market__exchangeRate' | 'market__reserves' | 'market__reserveFactor' | 'market__variableBorrowedTokenBalance' | 'market__stableBorrowedTokenBalance' | 'market__indexLastUpdatedTimestamp' | 'market__supplyIndex' | 'market__supplyCap' | 'market__borrowIndex' | 'market__borrowCap' | 'market__totalValueLockedUSD' | 'market__cumulativeSupplySideRevenueUSD' | 'market__cumulativeProtocolSideRevenueUSD' | 'market__cumulativeTotalRevenueUSD' | 'market__totalDepositBalanceUSD' | 'market__cumulativeDepositUSD' | 'market__totalBorrowBalanceUSD' | 'market__cumulativeBorrowUSD' | 'market__cumulativeLiquidateUSD' | 'market__cumulativeTransferUSD' | 'market__cumulativeFlashloanUSD' | 'market__transactionCount' | 'market__depositCount' | 'market__withdrawCount' | 'market__borrowCount' | 'market__repayCount' | 'market__liquidationCount' | 'market__transferCount' | 'market__flashloanCount' | 'market__cumulativeUniqueUsers' | 'market__cumulativeUniqueDepositors' | 'market__cumulativeUniqueBorrowers' | 'market__cumulativeUniqueLiquidators' | 'market__cumulativeUniqueLiquidatees' | 'market__cumulativeUniqueTransferrers' | 'market__cumulativeUniqueFlashloaners' | 'market__positionCount' | 'market__openPositionCount' | 'market__closedPositionCount' | 'market__lendingPositionCount' | 'market__borrowingPositionCount' | 'market___baseTrackingBorrowSpeed' | 'market___baseTrackingSupplySpeed' | 'market___lastRewardsUpdated' | 'market___liquidationProtocolFee' | 'market___siloedBorrowing' | 'positions' | 'asset' | 'asset__id' | 'asset__name' | 'asset__symbol' | 'asset__decimals' | 'asset__lastPriceUSD' | 'asset__lastPriceBlockNumber' | 'asset__type' | 'asset___iavsTokenType' | 'amount' | 'amountUSD' | 'profitUSD';
/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type Market = {
    /**  Smart contract address of the market  */
    id: Scalars['Bytes'];
    /**  The protocol this pool belongs to  */
    protocol: LendingProtocol;
    /**  Name of market  */
    name?: Maybe<Scalars['String']>;
    /**  Is this market active or is it frozen  */
    isActive: Scalars['Boolean'];
    /**  Can you borrow from this market  */
    canBorrowFrom: Scalars['Boolean'];
    /**  Can you use the output token as collateral  */
    canUseAsCollateral: Scalars['Boolean'];
    /**  Maximum loan-to-value ratio as a percentage value (e.g. 75% for DAI in Aave)  */
    maximumLTV: Scalars['BigDecimal'];
    /**  Liquidation threshold as a percentage value (e.g. 80% for DAI in Aave). When it is reached, the position is defined as undercollateralised and could be liquidated  */
    liquidationThreshold: Scalars['BigDecimal'];
    /**  Liquidation penalty (or the liquidation bonus for liquidators) as a percentage value. It is the penalty/bonus price on the collateral when liquidators purchase it as part of the liquidation of a loan that has passed the liquidation threshold  */
    liquidationPenalty: Scalars['BigDecimal'];
    /**  Can the user choose to isolate assets in this market. e.g. only this market's collateral can be used for a borrow in Aave V3  */
    canIsolate: Scalars['Boolean'];
    /**  Creation timestamp  */
    createdTimestamp: Scalars['BigInt'];
    /**  Creation block number  */
    createdBlockNumber: Scalars['BigInt'];
    /**  Details about the price oracle used to get this token's price  */
    oracle?: Maybe<Oracle>;
    /**  A unique identifier that can relate multiple markets. e.g. a common address that is the same for each related market. This is useful for markets with multiple input tokens  */
    relation?: Maybe<Scalars['Bytes']>;
    /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
    rewardTokens?: Maybe<Array<RewardToken>>;
    /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
    /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
    /**  Total supply of output tokens that are staked. Used to calculate reward APY.  */
    stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
    /**  Token that need to be deposited in this market to take a position in protocol (should be alphabetized)  */
    inputToken: Token;
    /**  Amount of input token in the market (same order as inputTokens)  */
    inputTokenBalance: Scalars['BigInt'];
    /**  Prices in USD of the input token (same order as inputTokens)  */
    inputTokenPriceUSD: Scalars['BigDecimal'];
    /**  Tokens that are minted to track ownership of position in protocol (e.g. aToken, cToken). Leave as null if doesn't exist (should be alphabetized)  */
    outputToken?: Maybe<Token>;
    /**  Total supply of output token (same order as outputTokens)  */
    outputTokenSupply?: Maybe<Scalars['BigInt']>;
    /**  Prices in USD of the output token (same order as outputTokens)  */
    outputTokenPriceUSD?: Maybe<Scalars['BigDecimal']>;
    /**  Amount of input token per full share of output token. Only applies when the output token exists (note this is a ratio and not a percentage value, i.e. 1.05 instead of 105%)  */
    exchangeRate?: Maybe<Scalars['BigDecimal']>;
    /**  All interest rates for this input token. Should be in APR format  */
    rates?: Maybe<Array<InterestRate>>;
    /**  Total amount of reserves (in USD)  */
    reserves?: Maybe<Scalars['BigDecimal']>;
    /**  The amount of revenue that is converted to reserves at the current time. 20% reserve factor should be in format 0.20  */
    reserveFactor?: Maybe<Scalars['BigDecimal']>;
    /**  The token that can be borrowed (e.g. inputToken in POOLED and generally a stable in CDPs)  */
    borrowedToken?: Maybe<Token>;
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
    totalValueLockedUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the market, accrued to the supply side.  */
    cumulativeSupplySideRevenueUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the market, accrued to the protocol.  */
    cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal'];
    /**  All revenue generated by the market.  */
    cumulativeTotalRevenueUSD: Scalars['BigDecimal'];
    /**  Details of revenue sources and amounts  */
    revenueDetail?: Maybe<RevenueDetail>;
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
    /**  Sum of all historical transfers in USD  */
    cumulativeTransferUSD: Scalars['BigDecimal'];
    /**  Sum of all historical flashloans in USD  */
    cumulativeFlashloanUSD: Scalars['BigDecimal'];
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
    positions: Array<Position>;
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
    /**  All transfers made in this market  */
    transfers: Array<Transfer>;
    /**  All flashloans made in this market */
    flashloans: Array<Flashloan>;
    /**  Rewards borrow speed for this market */
    _baseTrackingBorrowSpeed?: Maybe<Scalars['BigInt']>;
    /**  Rewards supply speed for this market */
    _baseTrackingSupplySpeed?: Maybe<Scalars['BigInt']>;
    /**  The variable debt token address correlated to the reserve asset  */
    _vToken?: Maybe<Token>;
    /**  The stable debt token address correlated to the reserve asset  */
    _sToken?: Maybe<Token>;
    /**  The state of the protocol prior to being paused (isActive / canUseAsCollateral / canBorrowFrom)  */
    _prePauseState?: Maybe<Array<Scalars['Boolean']>>;
    /**  Aux: Timestamp of the last time rewards were calculated for this market.  */
    _lastRewardsUpdated?: Maybe<Scalars['BigInt']>;
    /**  proportion of liquidation bonus (liquidation penalty) going to the protocol  */
    _liquidationProtocolFee?: Maybe<Scalars['BigDecimal']>;
    _siloedBorrowing?: Maybe<Scalars['Boolean']>;
};
/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type MarketrewardTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RewardToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<RewardToken_filter>;
};
/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type MarketratesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<InterestRate_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<InterestRate_filter>;
};
/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type MarketpositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Position_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Position_filter>;
};
/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type MarketdailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketDailySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketDailySnapshot_filter>;
};
/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type MarkethourlySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MarketHourlySnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MarketHourlySnapshot_filter>;
};
/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type MarketdepositsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Deposit_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Deposit_filter>;
};
/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type MarketwithdrawsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Withdraw_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Withdraw_filter>;
};
/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type MarketborrowsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Borrow_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Borrow_filter>;
};
/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type MarketrepaysArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Repay_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Repay_filter>;
};
/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type MarketliquidatesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Liquidate_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Liquidate_filter>;
};
/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type MarkettransfersArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Transfer_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Transfer_filter>;
};
/**
 * A market is defined by the input token.
 * At a minimum that means being able to deposit/withdraw that token.
 * e.g. there may be related markets as they only act as collateral for other markets.
 *
 */
export type MarketflashloansArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Flashloan_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Flashloan_filter>;
};
export type MarketDailySnapshot = {
    /**  { Smart contract address of the market }{ # of days since Unix epoch time }  */
    id: Scalars['Bytes'];
    /**  Number of days since Unix epoch time  */
    days: Scalars['Int'];
    /**  The protocol this snapshot belongs to  */
    protocol: LendingProtocol;
    /**  The pool this snapshot belongs to  */
    market: Market;
    /**  Block number of this snapshot  */
    blockNumber: Scalars['BigInt'];
    /**  Timestamp of this snapshot  */
    timestamp: Scalars['BigInt'];
    /**  A unique identifier that can relate multiple markets together. e.g. a common address that they all share. This is useful for markets with multiple input tokens  */
    relation?: Maybe<Scalars['Bytes']>;
    /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
    rewardTokens?: Maybe<Array<RewardToken>>;
    /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
    /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
    /**  Total supply of output tokens that are staked. Used to calculate reward APY.  */
    stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
    /**  Amount of input token in the market (same order as inputTokens)  */
    inputTokenBalance: Scalars['BigInt'];
    /**  Prices in USD of the input token (same order as inputTokens)  */
    inputTokenPriceUSD: Scalars['BigDecimal'];
    /**  Total supply of output token (same order as outputTokens)  */
    outputTokenSupply?: Maybe<Scalars['BigInt']>;
    /**  Prices in USD of the output token (same order as outputTokens)  */
    outputTokenPriceUSD?: Maybe<Scalars['BigDecimal']>;
    /**  Amount of input token per full share of output token. Only applies when the output token exists (note this is a ratio and not a percentage value, i.e. 1.05 instead of 105%)  */
    exchangeRate?: Maybe<Scalars['BigDecimal']>;
    /**  All interest rates for this input token. Should be in APR format  */
    rates?: Maybe<Array<InterestRate>>;
    /**  Total amount of reserves (in USD)  */
    reserves?: Maybe<Scalars['BigDecimal']>;
    /**  The amount of revenue that is converted to reserves at the current time. 20% reserve factor should be in format 0.20  */
    reserveFactor?: Maybe<Scalars['BigDecimal']>;
    /**  Amount of input tokens borrowed in this market using variable interest rates (in native terms)  */
    variableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
    /**  Amount of input tokens borrowed in this market using stable interest rates (in native terms)  */
    stableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
    /**  Allowed limit to how much of the underlying asset can be supplied to this market.  */
    supplyCap?: Maybe<Scalars['BigInt']>;
    /**  Allowed limit for how much of the underlying asset can be borrowed from this market.  */
    borrowCap?: Maybe<Scalars['BigInt']>;
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
    /**  Details of revenue sources and amounts  */
    revenueDetail?: Maybe<RevenueDetail>;
    /**  Current balance of all deposited assets (not historical cumulative), in USD. Same as pool TVL.  */
    totalDepositBalanceUSD: Scalars['BigDecimal'];
    /**  Sum of all deposits made on a given day, in USD  */
    dailyDepositUSD: Scalars['BigDecimal'];
    /**  Sum of all the deposits on a given day, in native units  */
    dailyNativeDeposit: Scalars['BigInt'];
    /**  Sum of all historical deposits in USD (only considers deposits and not withdrawals)  */
    cumulativeDepositUSD: Scalars['BigDecimal'];
    /**  Current balance of all borrowed/minted assets (not historical cumulative), in USD.  */
    totalBorrowBalanceUSD: Scalars['BigDecimal'];
    /**  Sum of all borrows/mints made on a given day, in USD  */
    dailyBorrowUSD: Scalars['BigDecimal'];
    /**  Sum of all the borrows on a given day, in native units  */
    dailyNativeBorrow: Scalars['BigInt'];
    /**  Sum of all historical borrows/mints in USD (i.e. total loan origination)  */
    cumulativeBorrowUSD: Scalars['BigDecimal'];
    /**  Total assets liquidated on a given day, in USD.  */
    dailyLiquidateUSD: Scalars['BigDecimal'];
    /**  Total assets liquidated on a given day, in native units.  */
    dailyNativeLiquidate: Scalars['BigInt'];
    /**  Sum of all historical liquidations in USD  */
    cumulativeLiquidateUSD: Scalars['BigDecimal'];
    /**  Total assets withdrawn on a given day, in USD.  */
    dailyWithdrawUSD: Scalars['BigDecimal'];
    /**  Total assets withdrawn on a given day, in native units.  */
    dailyNativeWithdraw: Scalars['BigInt'];
    /**  Total assets repaid on a given day, in USD.  */
    dailyRepayUSD: Scalars['BigDecimal'];
    /**  Total assets repaid on a given day, in native units.  */
    dailyNativeRepay: Scalars['BigInt'];
    /**  Total assets transferred on a given day, in USD.  */
    dailyTransferUSD: Scalars['BigDecimal'];
    /**  Total assets transferred on a given day, in native units.  */
    dailyNativeTransfer: Scalars['BigInt'];
    /**  Sum of all historical transfers in USD  */
    cumulativeTransferUSD: Scalars['BigDecimal'];
    /**  Total assets flashloaned on a given day, in USD.  */
    dailyFlashloanUSD: Scalars['BigDecimal'];
    /**  Total assets flashloaned on a given day, in native units.  */
    dailyNativeFlashloan: Scalars['BigInt'];
    /**  Sum of all historical flashloans in USD  */
    cumulativeFlashloanUSD: Scalars['BigDecimal'];
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
export type MarketDailySnapshotrewardTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RewardToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<RewardToken_filter>;
};
export type MarketDailySnapshotratesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<InterestRate_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<InterestRate_filter>;
};
export type MarketDailySnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    relation?: InputMaybe<Scalars['Bytes']>;
    relation_not?: InputMaybe<Scalars['Bytes']>;
    relation_gt?: InputMaybe<Scalars['Bytes']>;
    relation_lt?: InputMaybe<Scalars['Bytes']>;
    relation_gte?: InputMaybe<Scalars['Bytes']>;
    relation_lte?: InputMaybe<Scalars['Bytes']>;
    relation_in?: InputMaybe<Array<Scalars['Bytes']>>;
    relation_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    relation_contains?: InputMaybe<Scalars['Bytes']>;
    relation_not_contains?: InputMaybe<Scalars['Bytes']>;
    rewardTokens?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_?: InputMaybe<RewardToken_filter>;
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
    rates?: InputMaybe<Array<Scalars['String']>>;
    rates_not?: InputMaybe<Array<Scalars['String']>>;
    rates_contains?: InputMaybe<Array<Scalars['String']>>;
    rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
    rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rates_?: InputMaybe<InterestRate_filter>;
    reserves?: InputMaybe<Scalars['BigDecimal']>;
    reserves_not?: InputMaybe<Scalars['BigDecimal']>;
    reserves_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserves_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserves_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserves_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserves_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserves_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveFactor?: InputMaybe<Scalars['BigDecimal']>;
    reserveFactor_not?: InputMaybe<Scalars['BigDecimal']>;
    reserveFactor_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserveFactor_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserveFactor_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserveFactor_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserveFactor_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveFactor_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
    revenueDetail_?: InputMaybe<RevenueDetail_filter>;
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
    dailyNativeDeposit?: InputMaybe<Scalars['BigInt']>;
    dailyNativeDeposit_not?: InputMaybe<Scalars['BigInt']>;
    dailyNativeDeposit_gt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeDeposit_lt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeDeposit_gte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeDeposit_lte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyNativeDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
    dailyNativeBorrow?: InputMaybe<Scalars['BigInt']>;
    dailyNativeBorrow_not?: InputMaybe<Scalars['BigInt']>;
    dailyNativeBorrow_gt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeBorrow_lt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeBorrow_gte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeBorrow_lte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeBorrow_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyNativeBorrow_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
    dailyNativeLiquidate?: InputMaybe<Scalars['BigInt']>;
    dailyNativeLiquidate_not?: InputMaybe<Scalars['BigInt']>;
    dailyNativeLiquidate_gt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeLiquidate_lt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeLiquidate_gte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeLiquidate_lte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeLiquidate_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyNativeLiquidate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
    dailyNativeWithdraw?: InputMaybe<Scalars['BigInt']>;
    dailyNativeWithdraw_not?: InputMaybe<Scalars['BigInt']>;
    dailyNativeWithdraw_gt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeWithdraw_lt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeWithdraw_gte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeWithdraw_lte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeWithdraw_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyNativeWithdraw_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyRepayUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyRepayUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyRepayUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyRepayUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyRepayUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyRepayUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyRepayUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyRepayUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyNativeRepay?: InputMaybe<Scalars['BigInt']>;
    dailyNativeRepay_not?: InputMaybe<Scalars['BigInt']>;
    dailyNativeRepay_gt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeRepay_lt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeRepay_gte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeRepay_lte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeRepay_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyNativeRepay_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyTransferUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyTransferUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyTransferUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyTransferUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyTransferUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyTransferUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyTransferUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyTransferUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyNativeTransfer?: InputMaybe<Scalars['BigInt']>;
    dailyNativeTransfer_not?: InputMaybe<Scalars['BigInt']>;
    dailyNativeTransfer_gt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeTransfer_lt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeTransfer_gte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeTransfer_lte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeTransfer_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyNativeTransfer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeTransferUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTransferUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTransferUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTransferUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTransferUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTransferUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTransferUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTransferUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyFlashloanUSD?: InputMaybe<Scalars['BigDecimal']>;
    dailyFlashloanUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    dailyFlashloanUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    dailyFlashloanUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    dailyFlashloanUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    dailyFlashloanUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    dailyFlashloanUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyFlashloanUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    dailyNativeFlashloan?: InputMaybe<Scalars['BigInt']>;
    dailyNativeFlashloan_not?: InputMaybe<Scalars['BigInt']>;
    dailyNativeFlashloan_gt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeFlashloan_lt?: InputMaybe<Scalars['BigInt']>;
    dailyNativeFlashloan_gte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeFlashloan_lte?: InputMaybe<Scalars['BigInt']>;
    dailyNativeFlashloan_in?: InputMaybe<Array<Scalars['BigInt']>>;
    dailyNativeFlashloan_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    cumulativeFlashloanUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeFlashloanUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeFlashloanUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeFlashloanUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeFlashloanUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeFlashloanUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeFlashloanUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeFlashloanUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<MarketDailySnapshot_filter>>>;
    or?: InputMaybe<Array<InputMaybe<MarketDailySnapshot_filter>>>;
};
export type MarketDailySnapshot_orderBy = 'id' | 'days' | 'protocol' | 'protocol__id' | 'protocol__protocol' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__lendingType' | 'protocol__lenderPermissionType' | 'protocol__borrowerPermissionType' | 'protocol__poolCreatorPermissionType' | 'protocol__riskType' | 'protocol__collateralizationType' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueDepositors' | 'protocol__cumulativeUniqueBorrowers' | 'protocol__cumulativeUniqueLiquidators' | 'protocol__cumulativeUniqueLiquidatees' | 'protocol__totalValueLockedUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__totalDepositBalanceUSD' | 'protocol__cumulativeDepositUSD' | 'protocol__totalBorrowBalanceUSD' | 'protocol__cumulativeBorrowUSD' | 'protocol__cumulativeLiquidateUSD' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__transactionCount' | 'protocol__depositCount' | 'protocol__withdrawCount' | 'protocol__borrowCount' | 'protocol__repayCount' | 'protocol__liquidationCount' | 'protocol__transferCount' | 'protocol__flashloanCount' | 'market' | 'market__id' | 'market__name' | 'market__isActive' | 'market__canBorrowFrom' | 'market__canUseAsCollateral' | 'market__maximumLTV' | 'market__liquidationThreshold' | 'market__liquidationPenalty' | 'market__canIsolate' | 'market__createdTimestamp' | 'market__createdBlockNumber' | 'market__relation' | 'market__stakedOutputTokenAmount' | 'market__inputTokenBalance' | 'market__inputTokenPriceUSD' | 'market__outputTokenSupply' | 'market__outputTokenPriceUSD' | 'market__exchangeRate' | 'market__reserves' | 'market__reserveFactor' | 'market__variableBorrowedTokenBalance' | 'market__stableBorrowedTokenBalance' | 'market__indexLastUpdatedTimestamp' | 'market__supplyIndex' | 'market__supplyCap' | 'market__borrowIndex' | 'market__borrowCap' | 'market__totalValueLockedUSD' | 'market__cumulativeSupplySideRevenueUSD' | 'market__cumulativeProtocolSideRevenueUSD' | 'market__cumulativeTotalRevenueUSD' | 'market__totalDepositBalanceUSD' | 'market__cumulativeDepositUSD' | 'market__totalBorrowBalanceUSD' | 'market__cumulativeBorrowUSD' | 'market__cumulativeLiquidateUSD' | 'market__cumulativeTransferUSD' | 'market__cumulativeFlashloanUSD' | 'market__transactionCount' | 'market__depositCount' | 'market__withdrawCount' | 'market__borrowCount' | 'market__repayCount' | 'market__liquidationCount' | 'market__transferCount' | 'market__flashloanCount' | 'market__cumulativeUniqueUsers' | 'market__cumulativeUniqueDepositors' | 'market__cumulativeUniqueBorrowers' | 'market__cumulativeUniqueLiquidators' | 'market__cumulativeUniqueLiquidatees' | 'market__cumulativeUniqueTransferrers' | 'market__cumulativeUniqueFlashloaners' | 'market__positionCount' | 'market__openPositionCount' | 'market__closedPositionCount' | 'market__lendingPositionCount' | 'market__borrowingPositionCount' | 'market___baseTrackingBorrowSpeed' | 'market___baseTrackingSupplySpeed' | 'market___lastRewardsUpdated' | 'market___liquidationProtocolFee' | 'market___siloedBorrowing' | 'blockNumber' | 'timestamp' | 'relation' | 'rewardTokens' | 'rewardTokenEmissionsAmount' | 'rewardTokenEmissionsUSD' | 'stakedOutputTokenAmount' | 'inputTokenBalance' | 'inputTokenPriceUSD' | 'outputTokenSupply' | 'outputTokenPriceUSD' | 'exchangeRate' | 'rates' | 'reserves' | 'reserveFactor' | 'variableBorrowedTokenBalance' | 'stableBorrowedTokenBalance' | 'supplyCap' | 'borrowCap' | 'totalValueLockedUSD' | 'cumulativeSupplySideRevenueUSD' | 'dailySupplySideRevenueUSD' | 'cumulativeProtocolSideRevenueUSD' | 'dailyProtocolSideRevenueUSD' | 'cumulativeTotalRevenueUSD' | 'dailyTotalRevenueUSD' | 'revenueDetail' | 'revenueDetail__id' | 'totalDepositBalanceUSD' | 'dailyDepositUSD' | 'dailyNativeDeposit' | 'cumulativeDepositUSD' | 'totalBorrowBalanceUSD' | 'dailyBorrowUSD' | 'dailyNativeBorrow' | 'cumulativeBorrowUSD' | 'dailyLiquidateUSD' | 'dailyNativeLiquidate' | 'cumulativeLiquidateUSD' | 'dailyWithdrawUSD' | 'dailyNativeWithdraw' | 'dailyRepayUSD' | 'dailyNativeRepay' | 'dailyTransferUSD' | 'dailyNativeTransfer' | 'cumulativeTransferUSD' | 'dailyFlashloanUSD' | 'dailyNativeFlashloan' | 'cumulativeFlashloanUSD' | 'dailyActiveUsers' | 'dailyActiveDepositors' | 'dailyActiveBorrowers' | 'dailyActiveLiquidators' | 'dailyActiveLiquidatees' | 'dailyActiveTransferrers' | 'dailyActiveFlashloaners' | 'dailyDepositCount' | 'dailyWithdrawCount' | 'dailyBorrowCount' | 'dailyRepayCount' | 'dailyLiquidateCount' | 'dailyTransferCount' | 'dailyFlashloanCount' | 'positionCount' | 'openPositionCount' | 'closedPositionCount' | 'lendingPositionCount' | 'dailyActiveLendingPositionCount' | 'borrowingPositionCount' | 'dailyActiveBorrowingPositionCount';
export type MarketHourlySnapshot = {
    /**  { Smart contract address of the market }{ # of hours since Unix epoch time }  */
    id: Scalars['Bytes'];
    /**  Number of hours since Unix epoch time  */
    hours: Scalars['Int'];
    /**  The protocol this snapshot belongs to  */
    protocol: LendingProtocol;
    /**  The pool this snapshot belongs to  */
    market: Market;
    /**  Block number of this snapshot  */
    blockNumber: Scalars['BigInt'];
    /**  Timestamp of this snapshot  */
    timestamp: Scalars['BigInt'];
    /**  A unique identifier that can relate multiple markets together. e.g. a common address that they all share. This is useful for markets with multiple input tokens  */
    relation?: Maybe<Scalars['Bytes']>;
    /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
    rewardTokens?: Maybe<Array<RewardToken>>;
    /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']>>;
    /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsUSD?: Maybe<Array<Scalars['BigDecimal']>>;
    /**  Total supply of output tokens that are staked. Used to calculate reward APY.  */
    stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>;
    /**  Amount of input token in the market (same order as inputTokens)  */
    inputTokenBalance: Scalars['BigInt'];
    /**  Prices in USD of the input token (same order as inputTokens)  */
    inputTokenPriceUSD: Scalars['BigDecimal'];
    /**  Total supply of output token (same order as outputTokens)  */
    outputTokenSupply?: Maybe<Scalars['BigInt']>;
    /**  Prices in USD of the output token (same order as outputTokens)  */
    outputTokenPriceUSD?: Maybe<Scalars['BigDecimal']>;
    /**  Amount of input token per full share of output token. Only applies when the output token exists (note this is a ratio and not a percentage value, i.e. 1.05 instead of 105%)  */
    exchangeRate?: Maybe<Scalars['BigDecimal']>;
    /**  All interest rates for this input token. Should be in APR format  */
    rates?: Maybe<Array<InterestRate>>;
    /**  Total amount of reserves (in USD)  */
    reserves?: Maybe<Scalars['BigDecimal']>;
    /**  Amount of input tokens borrowed in this market using variable interest rates (in native terms)  */
    variableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
    /**  Amount of input tokens borrowed in this market using stable interest rates (in native terms)  */
    stableBorrowedTokenBalance?: Maybe<Scalars['BigInt']>;
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
    /**  Total assets transferred on a given hour, in USD.  */
    hourlyTransferUSD: Scalars['BigDecimal'];
    /**  Total assets flashloaned on a given hour, in USD.  */
    hourlyFlashloanUSD: Scalars['BigDecimal'];
};
export type MarketHourlySnapshotrewardTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RewardToken_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<RewardToken_filter>;
};
export type MarketHourlySnapshotratesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<InterestRate_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<InterestRate_filter>;
};
export type MarketHourlySnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    relation?: InputMaybe<Scalars['Bytes']>;
    relation_not?: InputMaybe<Scalars['Bytes']>;
    relation_gt?: InputMaybe<Scalars['Bytes']>;
    relation_lt?: InputMaybe<Scalars['Bytes']>;
    relation_gte?: InputMaybe<Scalars['Bytes']>;
    relation_lte?: InputMaybe<Scalars['Bytes']>;
    relation_in?: InputMaybe<Array<Scalars['Bytes']>>;
    relation_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    relation_contains?: InputMaybe<Scalars['Bytes']>;
    relation_not_contains?: InputMaybe<Scalars['Bytes']>;
    rewardTokens?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_?: InputMaybe<RewardToken_filter>;
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
    rates?: InputMaybe<Array<Scalars['String']>>;
    rates_not?: InputMaybe<Array<Scalars['String']>>;
    rates_contains?: InputMaybe<Array<Scalars['String']>>;
    rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
    rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rates_?: InputMaybe<InterestRate_filter>;
    reserves?: InputMaybe<Scalars['BigDecimal']>;
    reserves_not?: InputMaybe<Scalars['BigDecimal']>;
    reserves_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserves_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserves_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserves_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserves_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserves_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
    hourlyTransferUSD?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTransferUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTransferUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTransferUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTransferUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTransferUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyTransferUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyTransferUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyFlashloanUSD?: InputMaybe<Scalars['BigDecimal']>;
    hourlyFlashloanUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    hourlyFlashloanUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyFlashloanUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    hourlyFlashloanUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyFlashloanUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    hourlyFlashloanUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    hourlyFlashloanUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<MarketHourlySnapshot_filter>>>;
    or?: InputMaybe<Array<InputMaybe<MarketHourlySnapshot_filter>>>;
};
export type MarketHourlySnapshot_orderBy = 'id' | 'hours' | 'protocol' | 'protocol__id' | 'protocol__protocol' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__lendingType' | 'protocol__lenderPermissionType' | 'protocol__borrowerPermissionType' | 'protocol__poolCreatorPermissionType' | 'protocol__riskType' | 'protocol__collateralizationType' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueDepositors' | 'protocol__cumulativeUniqueBorrowers' | 'protocol__cumulativeUniqueLiquidators' | 'protocol__cumulativeUniqueLiquidatees' | 'protocol__totalValueLockedUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__totalDepositBalanceUSD' | 'protocol__cumulativeDepositUSD' | 'protocol__totalBorrowBalanceUSD' | 'protocol__cumulativeBorrowUSD' | 'protocol__cumulativeLiquidateUSD' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__transactionCount' | 'protocol__depositCount' | 'protocol__withdrawCount' | 'protocol__borrowCount' | 'protocol__repayCount' | 'protocol__liquidationCount' | 'protocol__transferCount' | 'protocol__flashloanCount' | 'market' | 'market__id' | 'market__name' | 'market__isActive' | 'market__canBorrowFrom' | 'market__canUseAsCollateral' | 'market__maximumLTV' | 'market__liquidationThreshold' | 'market__liquidationPenalty' | 'market__canIsolate' | 'market__createdTimestamp' | 'market__createdBlockNumber' | 'market__relation' | 'market__stakedOutputTokenAmount' | 'market__inputTokenBalance' | 'market__inputTokenPriceUSD' | 'market__outputTokenSupply' | 'market__outputTokenPriceUSD' | 'market__exchangeRate' | 'market__reserves' | 'market__reserveFactor' | 'market__variableBorrowedTokenBalance' | 'market__stableBorrowedTokenBalance' | 'market__indexLastUpdatedTimestamp' | 'market__supplyIndex' | 'market__supplyCap' | 'market__borrowIndex' | 'market__borrowCap' | 'market__totalValueLockedUSD' | 'market__cumulativeSupplySideRevenueUSD' | 'market__cumulativeProtocolSideRevenueUSD' | 'market__cumulativeTotalRevenueUSD' | 'market__totalDepositBalanceUSD' | 'market__cumulativeDepositUSD' | 'market__totalBorrowBalanceUSD' | 'market__cumulativeBorrowUSD' | 'market__cumulativeLiquidateUSD' | 'market__cumulativeTransferUSD' | 'market__cumulativeFlashloanUSD' | 'market__transactionCount' | 'market__depositCount' | 'market__withdrawCount' | 'market__borrowCount' | 'market__repayCount' | 'market__liquidationCount' | 'market__transferCount' | 'market__flashloanCount' | 'market__cumulativeUniqueUsers' | 'market__cumulativeUniqueDepositors' | 'market__cumulativeUniqueBorrowers' | 'market__cumulativeUniqueLiquidators' | 'market__cumulativeUniqueLiquidatees' | 'market__cumulativeUniqueTransferrers' | 'market__cumulativeUniqueFlashloaners' | 'market__positionCount' | 'market__openPositionCount' | 'market__closedPositionCount' | 'market__lendingPositionCount' | 'market__borrowingPositionCount' | 'market___baseTrackingBorrowSpeed' | 'market___baseTrackingSupplySpeed' | 'market___lastRewardsUpdated' | 'market___liquidationProtocolFee' | 'market___siloedBorrowing' | 'blockNumber' | 'timestamp' | 'relation' | 'rewardTokens' | 'rewardTokenEmissionsAmount' | 'rewardTokenEmissionsUSD' | 'stakedOutputTokenAmount' | 'inputTokenBalance' | 'inputTokenPriceUSD' | 'outputTokenSupply' | 'outputTokenPriceUSD' | 'exchangeRate' | 'rates' | 'reserves' | 'variableBorrowedTokenBalance' | 'stableBorrowedTokenBalance' | 'totalValueLockedUSD' | 'cumulativeSupplySideRevenueUSD' | 'hourlySupplySideRevenueUSD' | 'cumulativeProtocolSideRevenueUSD' | 'hourlyProtocolSideRevenueUSD' | 'cumulativeTotalRevenueUSD' | 'hourlyTotalRevenueUSD' | 'totalDepositBalanceUSD' | 'hourlyDepositUSD' | 'cumulativeDepositUSD' | 'totalBorrowBalanceUSD' | 'hourlyBorrowUSD' | 'cumulativeBorrowUSD' | 'hourlyLiquidateUSD' | 'cumulativeLiquidateUSD' | 'hourlyWithdrawUSD' | 'hourlyRepayUSD' | 'hourlyTransferUSD' | 'hourlyFlashloanUSD';
export type Market_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    canBorrowFrom?: InputMaybe<Scalars['Boolean']>;
    canBorrowFrom_not?: InputMaybe<Scalars['Boolean']>;
    canBorrowFrom_in?: InputMaybe<Array<Scalars['Boolean']>>;
    canBorrowFrom_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    canUseAsCollateral?: InputMaybe<Scalars['Boolean']>;
    canUseAsCollateral_not?: InputMaybe<Scalars['Boolean']>;
    canUseAsCollateral_in?: InputMaybe<Array<Scalars['Boolean']>>;
    canUseAsCollateral_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
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
    oracle_?: InputMaybe<Oracle_filter>;
    relation?: InputMaybe<Scalars['Bytes']>;
    relation_not?: InputMaybe<Scalars['Bytes']>;
    relation_gt?: InputMaybe<Scalars['Bytes']>;
    relation_lt?: InputMaybe<Scalars['Bytes']>;
    relation_gte?: InputMaybe<Scalars['Bytes']>;
    relation_lte?: InputMaybe<Scalars['Bytes']>;
    relation_in?: InputMaybe<Array<Scalars['Bytes']>>;
    relation_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    relation_contains?: InputMaybe<Scalars['Bytes']>;
    relation_not_contains?: InputMaybe<Scalars['Bytes']>;
    rewardTokens?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rewardTokens_?: InputMaybe<RewardToken_filter>;
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
    inputToken_?: InputMaybe<Token_filter>;
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
    rates?: InputMaybe<Array<Scalars['String']>>;
    rates_not?: InputMaybe<Array<Scalars['String']>>;
    rates_contains?: InputMaybe<Array<Scalars['String']>>;
    rates_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rates_not_contains?: InputMaybe<Array<Scalars['String']>>;
    rates_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    rates_?: InputMaybe<InterestRate_filter>;
    reserves?: InputMaybe<Scalars['BigDecimal']>;
    reserves_not?: InputMaybe<Scalars['BigDecimal']>;
    reserves_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserves_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserves_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserves_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserves_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserves_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveFactor?: InputMaybe<Scalars['BigDecimal']>;
    reserveFactor_not?: InputMaybe<Scalars['BigDecimal']>;
    reserveFactor_gt?: InputMaybe<Scalars['BigDecimal']>;
    reserveFactor_lt?: InputMaybe<Scalars['BigDecimal']>;
    reserveFactor_gte?: InputMaybe<Scalars['BigDecimal']>;
    reserveFactor_lte?: InputMaybe<Scalars['BigDecimal']>;
    reserveFactor_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    reserveFactor_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
    borrowedToken_?: InputMaybe<Token_filter>;
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
    revenueDetail_?: InputMaybe<RevenueDetail_filter>;
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
    cumulativeTransferUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTransferUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTransferUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTransferUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTransferUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTransferUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeTransferUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeTransferUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeFlashloanUSD?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeFlashloanUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeFlashloanUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeFlashloanUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeFlashloanUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeFlashloanUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    cumulativeFlashloanUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    cumulativeFlashloanUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
    transfers_?: InputMaybe<Transfer_filter>;
    flashloans_?: InputMaybe<Flashloan_filter>;
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
    _liquidationProtocolFee?: InputMaybe<Scalars['BigDecimal']>;
    _liquidationProtocolFee_not?: InputMaybe<Scalars['BigDecimal']>;
    _liquidationProtocolFee_gt?: InputMaybe<Scalars['BigDecimal']>;
    _liquidationProtocolFee_lt?: InputMaybe<Scalars['BigDecimal']>;
    _liquidationProtocolFee_gte?: InputMaybe<Scalars['BigDecimal']>;
    _liquidationProtocolFee_lte?: InputMaybe<Scalars['BigDecimal']>;
    _liquidationProtocolFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    _liquidationProtocolFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    _siloedBorrowing?: InputMaybe<Scalars['Boolean']>;
    _siloedBorrowing_not?: InputMaybe<Scalars['Boolean']>;
    _siloedBorrowing_in?: InputMaybe<Array<Scalars['Boolean']>>;
    _siloedBorrowing_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Market_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Market_filter>>>;
};
export type Market_orderBy = 'id' | 'protocol' | 'protocol__id' | 'protocol__protocol' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__lendingType' | 'protocol__lenderPermissionType' | 'protocol__borrowerPermissionType' | 'protocol__poolCreatorPermissionType' | 'protocol__riskType' | 'protocol__collateralizationType' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueDepositors' | 'protocol__cumulativeUniqueBorrowers' | 'protocol__cumulativeUniqueLiquidators' | 'protocol__cumulativeUniqueLiquidatees' | 'protocol__totalValueLockedUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__totalDepositBalanceUSD' | 'protocol__cumulativeDepositUSD' | 'protocol__totalBorrowBalanceUSD' | 'protocol__cumulativeBorrowUSD' | 'protocol__cumulativeLiquidateUSD' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__transactionCount' | 'protocol__depositCount' | 'protocol__withdrawCount' | 'protocol__borrowCount' | 'protocol__repayCount' | 'protocol__liquidationCount' | 'protocol__transferCount' | 'protocol__flashloanCount' | 'name' | 'isActive' | 'canBorrowFrom' | 'canUseAsCollateral' | 'maximumLTV' | 'liquidationThreshold' | 'liquidationPenalty' | 'canIsolate' | 'createdTimestamp' | 'createdBlockNumber' | 'oracle' | 'oracle__id' | 'oracle__oracleAddress' | 'oracle__blockCreated' | 'oracle__timestampCreated' | 'oracle__isActive' | 'oracle__isUSD' | 'oracle__hashEnded' | 'oracle__oracleSource' | 'relation' | 'rewardTokens' | 'rewardTokenEmissionsAmount' | 'rewardTokenEmissionsUSD' | 'stakedOutputTokenAmount' | 'inputToken' | 'inputToken__id' | 'inputToken__name' | 'inputToken__symbol' | 'inputToken__decimals' | 'inputToken__lastPriceUSD' | 'inputToken__lastPriceBlockNumber' | 'inputToken__type' | 'inputToken___iavsTokenType' | 'inputTokenBalance' | 'inputTokenPriceUSD' | 'outputToken' | 'outputToken__id' | 'outputToken__name' | 'outputToken__symbol' | 'outputToken__decimals' | 'outputToken__lastPriceUSD' | 'outputToken__lastPriceBlockNumber' | 'outputToken__type' | 'outputToken___iavsTokenType' | 'outputTokenSupply' | 'outputTokenPriceUSD' | 'exchangeRate' | 'rates' | 'reserves' | 'reserveFactor' | 'borrowedToken' | 'borrowedToken__id' | 'borrowedToken__name' | 'borrowedToken__symbol' | 'borrowedToken__decimals' | 'borrowedToken__lastPriceUSD' | 'borrowedToken__lastPriceBlockNumber' | 'borrowedToken__type' | 'borrowedToken___iavsTokenType' | 'variableBorrowedTokenBalance' | 'stableBorrowedTokenBalance' | 'indexLastUpdatedTimestamp' | 'supplyIndex' | 'supplyCap' | 'borrowIndex' | 'borrowCap' | 'totalValueLockedUSD' | 'cumulativeSupplySideRevenueUSD' | 'cumulativeProtocolSideRevenueUSD' | 'cumulativeTotalRevenueUSD' | 'revenueDetail' | 'revenueDetail__id' | 'totalDepositBalanceUSD' | 'cumulativeDepositUSD' | 'totalBorrowBalanceUSD' | 'cumulativeBorrowUSD' | 'cumulativeLiquidateUSD' | 'cumulativeTransferUSD' | 'cumulativeFlashloanUSD' | 'transactionCount' | 'depositCount' | 'withdrawCount' | 'borrowCount' | 'repayCount' | 'liquidationCount' | 'transferCount' | 'flashloanCount' | 'cumulativeUniqueUsers' | 'cumulativeUniqueDepositors' | 'cumulativeUniqueBorrowers' | 'cumulativeUniqueLiquidators' | 'cumulativeUniqueLiquidatees' | 'cumulativeUniqueTransferrers' | 'cumulativeUniqueFlashloaners' | 'positions' | 'positionCount' | 'openPositionCount' | 'closedPositionCount' | 'lendingPositionCount' | 'borrowingPositionCount' | 'dailySnapshots' | 'hourlySnapshots' | 'deposits' | 'withdraws' | 'borrows' | 'repays' | 'liquidates' | 'transfers' | 'flashloans' | '_baseTrackingBorrowSpeed' | '_baseTrackingSupplySpeed' | '_vToken' | '_vToken__id' | '_vToken__name' | '_vToken__symbol' | '_vToken__decimals' | '_vToken__lastPriceUSD' | '_vToken__lastPriceBlockNumber' | '_vToken__type' | '_vToken___iavsTokenType' | '_sToken' | '_sToken__id' | '_sToken__name' | '_sToken__symbol' | '_sToken__decimals' | '_sToken__lastPriceUSD' | '_sToken__lastPriceBlockNumber' | '_sToken__type' | '_sToken___iavsTokenType' | '_prePauseState' | '_lastRewardsUpdated' | '_liquidationProtocolFee' | '_siloedBorrowing';
export type Network = 'ARBITRUM_ONE' | 'ARWEAVE_MAINNET' | 'AURORA' | 'AVALANCHE' | 'BOBA' | 'BSC' | 'CELO' | 'COSMOS' | 'CRONOS' | 'MAINNET' | 'FANTOM' | 'FUSE' | 'HARMONY' | 'JUNO' | 'MOONBEAM' | 'MOONRIVER' | 'NEAR_MAINNET' | 'OPTIMISM' | 'OSMOSIS' | 'MATIC' | 'GNOSIS' | 'ANDROMEDA' | 'BASE';
export type Oracle = {
    /**  { Market Address }{ Token Address }  */
    id: Scalars['Bytes'];
    oracleAddress: Scalars['Bytes'];
    /**  The market that this oracle is used for pricing  */
    market: Market;
    /**  The block this oracle was adopted for a market  */
    blockCreated: Scalars['BigInt'];
    /**  The timestamp this oracle was adopted for a market  */
    timestampCreated: Scalars['BigInt'];
    /**  Is the Oracle currently used as the source of truth for a market */
    isActive: Scalars['Boolean'];
    /**  True if the oracle returns prices in USD (e.g. generally the other case is the network's native token)  */
    isUSD: Scalars['Boolean'];
    /**  The hash where the oracle was no longer used  */
    hashEnded?: Maybe<Scalars['Bytes']>;
    /**  The Protocol that is providing the oracle (nullable if non-standard source) */
    oracleSource?: Maybe<OracleSource>;
};
export type OracleSource = 'UNISWAP' | 'BALANCER' | 'CHAINLINK' | 'YEARN' | 'SUSHISWAP' | 'CURVE';
export type Oracle_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    oracleAddress?: InputMaybe<Scalars['Bytes']>;
    oracleAddress_not?: InputMaybe<Scalars['Bytes']>;
    oracleAddress_gt?: InputMaybe<Scalars['Bytes']>;
    oracleAddress_lt?: InputMaybe<Scalars['Bytes']>;
    oracleAddress_gte?: InputMaybe<Scalars['Bytes']>;
    oracleAddress_lte?: InputMaybe<Scalars['Bytes']>;
    oracleAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
    oracleAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    oracleAddress_contains?: InputMaybe<Scalars['Bytes']>;
    oracleAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    hashEnded?: InputMaybe<Scalars['Bytes']>;
    hashEnded_not?: InputMaybe<Scalars['Bytes']>;
    hashEnded_gt?: InputMaybe<Scalars['Bytes']>;
    hashEnded_lt?: InputMaybe<Scalars['Bytes']>;
    hashEnded_gte?: InputMaybe<Scalars['Bytes']>;
    hashEnded_lte?: InputMaybe<Scalars['Bytes']>;
    hashEnded_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hashEnded_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hashEnded_contains?: InputMaybe<Scalars['Bytes']>;
    hashEnded_not_contains?: InputMaybe<Scalars['Bytes']>;
    oracleSource?: InputMaybe<OracleSource>;
    oracleSource_not?: InputMaybe<OracleSource>;
    oracleSource_in?: InputMaybe<Array<OracleSource>>;
    oracleSource_not_in?: InputMaybe<Array<OracleSource>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Oracle_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Oracle_filter>>>;
};
export type Oracle_orderBy = 'id' | 'oracleAddress' | 'market' | 'market__id' | 'market__name' | 'market__isActive' | 'market__canBorrowFrom' | 'market__canUseAsCollateral' | 'market__maximumLTV' | 'market__liquidationThreshold' | 'market__liquidationPenalty' | 'market__canIsolate' | 'market__createdTimestamp' | 'market__createdBlockNumber' | 'market__relation' | 'market__stakedOutputTokenAmount' | 'market__inputTokenBalance' | 'market__inputTokenPriceUSD' | 'market__outputTokenSupply' | 'market__outputTokenPriceUSD' | 'market__exchangeRate' | 'market__reserves' | 'market__reserveFactor' | 'market__variableBorrowedTokenBalance' | 'market__stableBorrowedTokenBalance' | 'market__indexLastUpdatedTimestamp' | 'market__supplyIndex' | 'market__supplyCap' | 'market__borrowIndex' | 'market__borrowCap' | 'market__totalValueLockedUSD' | 'market__cumulativeSupplySideRevenueUSD' | 'market__cumulativeProtocolSideRevenueUSD' | 'market__cumulativeTotalRevenueUSD' | 'market__totalDepositBalanceUSD' | 'market__cumulativeDepositUSD' | 'market__totalBorrowBalanceUSD' | 'market__cumulativeBorrowUSD' | 'market__cumulativeLiquidateUSD' | 'market__cumulativeTransferUSD' | 'market__cumulativeFlashloanUSD' | 'market__transactionCount' | 'market__depositCount' | 'market__withdrawCount' | 'market__borrowCount' | 'market__repayCount' | 'market__liquidationCount' | 'market__transferCount' | 'market__flashloanCount' | 'market__cumulativeUniqueUsers' | 'market__cumulativeUniqueDepositors' | 'market__cumulativeUniqueBorrowers' | 'market__cumulativeUniqueLiquidators' | 'market__cumulativeUniqueLiquidatees' | 'market__cumulativeUniqueTransferrers' | 'market__cumulativeUniqueFlashloaners' | 'market__positionCount' | 'market__openPositionCount' | 'market__closedPositionCount' | 'market__lendingPositionCount' | 'market__borrowingPositionCount' | 'market___baseTrackingBorrowSpeed' | 'market___baseTrackingSupplySpeed' | 'market___lastRewardsUpdated' | 'market___liquidationProtocolFee' | 'market___siloedBorrowing' | 'blockCreated' | 'timestampCreated' | 'isActive' | 'isUSD' | 'hashEnded' | 'oracleSource';
/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc';
export type PermissionType = 
/**  Only users that have been whitelisted can interact. e.g. Only approved institutions can borrow  */
'WHITELIST_ONLY'
/**  To interact a user must be KYC'd  */
 | 'PERMISSIONED'
/**  Protocols that do not KYC. Can be used by any account  */
 | 'PERMISSIONLESS'
/**  Only the protocol admin address can make do the defined actions  */
 | 'ADMIN';
export type Position = {
    /**  { Account address }-{ Market address }-{ Position Side }-{ Optional: Interest Rate Type}-{ Counter }  */
    id: Scalars['ID'];
    /**  Account that owns this position  */
    account: Account;
    /**  The market in which this position was opened  */
    market: Market;
    /**  The asset in which this position was opened with  */
    asset: Token;
    /**  The hash of the transaction that opened this position  */
    hashOpened: Scalars['Bytes'];
    /**  The hash of the transaction that closed this position  */
    hashClosed?: Maybe<Scalars['Bytes']>;
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
    /**  Type of interest rate used for this position (stable or variable). Generally for borrow side positions. */
    type?: Maybe<InterestRateType>;
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
    /**  Number of liquidations related to this position (incremented when this position is liquidated)  */
    liquidationCount: Scalars['Int'];
    /**  Liquidation event related to this position (if exists)  */
    liquidations: Array<Liquidate>;
    /**  Number of times this position has transferred  */
    transferredCount: Scalars['Int'];
    /**  Number of times this position has received a transfer  */
    receivedCount: Scalars['Int'];
    /**  All transfer events related to this position  */
    transfers: Array<Transfer>;
    /**  Position daily snapshots for open positions  */
    snapshots: Array<PositionSnapshot>;
    /**  efficient mode flag  */
    _eMode?: Maybe<Scalars['Boolean']>;
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
export type PositiontransfersArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Transfer_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Transfer_filter>;
};
export type PositionsnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<PositionSnapshot_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<PositionSnapshot_filter>;
};
export type PositionSide = 
/**  Position opened as a lender (used as collateral)  */
'COLLATERAL'
/**  Position opened as a borrower  */
 | 'BORROWER';
export type PositionSnapshot = {
    /**  { Position ID }-{ Transaction hash }-{ Log index }  */
    id: Scalars['ID'];
    /**  Transaction hash of the transaction that triggered this snapshot  */
    hash: Scalars['Bytes'];
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int'];
    /**  Nonce of the transaction that triggered this snapshot  */
    nonce: Scalars['BigInt'];
    /**  Account that owns this position  */
    account: Account;
    /**  Position of this snapshot  */
    position: Position;
    /**  Token balance in this position, in native amounts  */
    balance: Scalars['BigInt'];
    /**  Token balance in this position, in USD  */
    balanceUSD: Scalars['BigDecimal'];
    /**  Block number of this snapshot  */
    blockNumber: Scalars['BigInt'];
    /**  Timestamp of this snapshot  */
    timestamp: Scalars['BigInt'];
    /**  The principal value without interest accrued. Used to calculate interest per position.  */
    principal?: Maybe<Scalars['BigInt']>;
    /**  Base borrow OR supply index (based on the position side). Used to calculate interest across snapshots.  */
    index?: Maybe<Scalars['BigInt']>;
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
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_gt?: InputMaybe<Scalars['Bytes']>;
    hash_lt?: InputMaybe<Scalars['Bytes']>;
    hash_gte?: InputMaybe<Scalars['Bytes']>;
    hash_lte?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    account_?: InputMaybe<Account_filter>;
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
    balanceUSD?: InputMaybe<Scalars['BigDecimal']>;
    balanceUSD_not?: InputMaybe<Scalars['BigDecimal']>;
    balanceUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
    balanceUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
    balanceUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
    balanceUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
    balanceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    balanceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<PositionSnapshot_filter>>>;
    or?: InputMaybe<Array<InputMaybe<PositionSnapshot_filter>>>;
};
export type PositionSnapshot_orderBy = 'id' | 'hash' | 'logIndex' | 'nonce' | 'account' | 'account__id' | 'account__positionCount' | 'account__openPositionCount' | 'account__closedPositionCount' | 'account__depositCount' | 'account__withdrawCount' | 'account__borrowCount' | 'account__repayCount' | 'account__liquidateCount' | 'account__liquidationCount' | 'account__transferredCount' | 'account__receivedCount' | 'account__flashloanCount' | 'account__rewardsClaimedUSD' | 'account___eMode' | 'position' | 'position__id' | 'position__hashOpened' | 'position__hashClosed' | 'position__blockNumberOpened' | 'position__timestampOpened' | 'position__blockNumberClosed' | 'position__timestampClosed' | 'position__side' | 'position__type' | 'position__isCollateral' | 'position__isIsolated' | 'position__balance' | 'position__principal' | 'position__depositCount' | 'position__withdrawCount' | 'position__borrowCount' | 'position__repayCount' | 'position__liquidationCount' | 'position__transferredCount' | 'position__receivedCount' | 'position___eMode' | 'balance' | 'balanceUSD' | 'blockNumber' | 'timestamp' | 'principal' | 'index';
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
    hashOpened?: InputMaybe<Scalars['Bytes']>;
    hashOpened_not?: InputMaybe<Scalars['Bytes']>;
    hashOpened_gt?: InputMaybe<Scalars['Bytes']>;
    hashOpened_lt?: InputMaybe<Scalars['Bytes']>;
    hashOpened_gte?: InputMaybe<Scalars['Bytes']>;
    hashOpened_lte?: InputMaybe<Scalars['Bytes']>;
    hashOpened_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hashOpened_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hashOpened_contains?: InputMaybe<Scalars['Bytes']>;
    hashOpened_not_contains?: InputMaybe<Scalars['Bytes']>;
    hashClosed?: InputMaybe<Scalars['Bytes']>;
    hashClosed_not?: InputMaybe<Scalars['Bytes']>;
    hashClosed_gt?: InputMaybe<Scalars['Bytes']>;
    hashClosed_lt?: InputMaybe<Scalars['Bytes']>;
    hashClosed_gte?: InputMaybe<Scalars['Bytes']>;
    hashClosed_lte?: InputMaybe<Scalars['Bytes']>;
    hashClosed_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hashClosed_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hashClosed_contains?: InputMaybe<Scalars['Bytes']>;
    hashClosed_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    type?: InputMaybe<InterestRateType>;
    type_not?: InputMaybe<InterestRateType>;
    type_in?: InputMaybe<Array<InterestRateType>>;
    type_not_in?: InputMaybe<Array<InterestRateType>>;
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
    transfers_?: InputMaybe<Transfer_filter>;
    snapshots_?: InputMaybe<PositionSnapshot_filter>;
    _eMode?: InputMaybe<Scalars['Boolean']>;
    _eMode_not?: InputMaybe<Scalars['Boolean']>;
    _eMode_in?: InputMaybe<Array<Scalars['Boolean']>>;
    _eMode_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Position_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Position_filter>>>;
};
export type Position_orderBy = 'id' | 'account' | 'account__id' | 'account__positionCount' | 'account__openPositionCount' | 'account__closedPositionCount' | 'account__depositCount' | 'account__withdrawCount' | 'account__borrowCount' | 'account__repayCount' | 'account__liquidateCount' | 'account__liquidationCount' | 'account__transferredCount' | 'account__receivedCount' | 'account__flashloanCount' | 'account__rewardsClaimedUSD' | 'account___eMode' | 'market' | 'market__id' | 'market__name' | 'market__isActive' | 'market__canBorrowFrom' | 'market__canUseAsCollateral' | 'market__maximumLTV' | 'market__liquidationThreshold' | 'market__liquidationPenalty' | 'market__canIsolate' | 'market__createdTimestamp' | 'market__createdBlockNumber' | 'market__relation' | 'market__stakedOutputTokenAmount' | 'market__inputTokenBalance' | 'market__inputTokenPriceUSD' | 'market__outputTokenSupply' | 'market__outputTokenPriceUSD' | 'market__exchangeRate' | 'market__reserves' | 'market__reserveFactor' | 'market__variableBorrowedTokenBalance' | 'market__stableBorrowedTokenBalance' | 'market__indexLastUpdatedTimestamp' | 'market__supplyIndex' | 'market__supplyCap' | 'market__borrowIndex' | 'market__borrowCap' | 'market__totalValueLockedUSD' | 'market__cumulativeSupplySideRevenueUSD' | 'market__cumulativeProtocolSideRevenueUSD' | 'market__cumulativeTotalRevenueUSD' | 'market__totalDepositBalanceUSD' | 'market__cumulativeDepositUSD' | 'market__totalBorrowBalanceUSD' | 'market__cumulativeBorrowUSD' | 'market__cumulativeLiquidateUSD' | 'market__cumulativeTransferUSD' | 'market__cumulativeFlashloanUSD' | 'market__transactionCount' | 'market__depositCount' | 'market__withdrawCount' | 'market__borrowCount' | 'market__repayCount' | 'market__liquidationCount' | 'market__transferCount' | 'market__flashloanCount' | 'market__cumulativeUniqueUsers' | 'market__cumulativeUniqueDepositors' | 'market__cumulativeUniqueBorrowers' | 'market__cumulativeUniqueLiquidators' | 'market__cumulativeUniqueLiquidatees' | 'market__cumulativeUniqueTransferrers' | 'market__cumulativeUniqueFlashloaners' | 'market__positionCount' | 'market__openPositionCount' | 'market__closedPositionCount' | 'market__lendingPositionCount' | 'market__borrowingPositionCount' | 'market___baseTrackingBorrowSpeed' | 'market___baseTrackingSupplySpeed' | 'market___lastRewardsUpdated' | 'market___liquidationProtocolFee' | 'market___siloedBorrowing' | 'asset' | 'asset__id' | 'asset__name' | 'asset__symbol' | 'asset__decimals' | 'asset__lastPriceUSD' | 'asset__lastPriceBlockNumber' | 'asset__type' | 'asset___iavsTokenType' | 'hashOpened' | 'hashClosed' | 'blockNumberOpened' | 'timestampOpened' | 'blockNumberClosed' | 'timestampClosed' | 'side' | 'type' | 'isCollateral' | 'isIsolated' | 'balance' | 'principal' | 'depositCount' | 'deposits' | 'withdrawCount' | 'withdraws' | 'borrowCount' | 'borrows' | 'repayCount' | 'repays' | 'liquidationCount' | 'liquidations' | 'transferredCount' | 'receivedCount' | 'transfers' | 'snapshots' | '_eMode';
export type Protocol = {
    /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
    id: Scalars['Bytes'];
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
    network: Network;
    /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
    type: ProtocolType;
    /**  The specific lending protocol type  */
    lendingType?: Maybe<LendingType>;
    /**  The specific permissions required to lend in this protocol  */
    lenderPermissionType?: Maybe<PermissionType>;
    /**  The specific permissions required to borrow from this protocol  */
    borrowerPermissionType?: Maybe<PermissionType>;
    /**  The specific permissions required to create a pool (market) in this protocol  */
    poolCreatorPermissionType?: Maybe<PermissionType>;
    /**  Risk type of the lending protocol  */
    riskType?: Maybe<RiskType>;
    /**  The way a positions can be collateralized  */
    collateralizationType?: Maybe<CollateralizationType>;
    /**  Current TVL (Total Value Locked) of the entire protocol  */
    totalValueLockedUSD: Scalars['BigDecimal'];
    /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
    protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>;
    /**  Number of cumulative unique users. e.g. accounts that spent gas to interact with this protocol  */
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
export type ProtocolType = 'EXCHANGE' | 'LENDING' | 'YIELD' | 'BRIDGE' | 'GENERIC';
export type Protocol_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    lenderPermissionType?: InputMaybe<PermissionType>;
    lenderPermissionType_not?: InputMaybe<PermissionType>;
    lenderPermissionType_in?: InputMaybe<Array<PermissionType>>;
    lenderPermissionType_not_in?: InputMaybe<Array<PermissionType>>;
    borrowerPermissionType?: InputMaybe<PermissionType>;
    borrowerPermissionType_not?: InputMaybe<PermissionType>;
    borrowerPermissionType_in?: InputMaybe<Array<PermissionType>>;
    borrowerPermissionType_not_in?: InputMaybe<Array<PermissionType>>;
    poolCreatorPermissionType?: InputMaybe<PermissionType>;
    poolCreatorPermissionType_not?: InputMaybe<PermissionType>;
    poolCreatorPermissionType_in?: InputMaybe<Array<PermissionType>>;
    poolCreatorPermissionType_not_in?: InputMaybe<Array<PermissionType>>;
    riskType?: InputMaybe<RiskType>;
    riskType_not?: InputMaybe<RiskType>;
    riskType_in?: InputMaybe<Array<RiskType>>;
    riskType_not_in?: InputMaybe<Array<RiskType>>;
    collateralizationType?: InputMaybe<CollateralizationType>;
    collateralizationType_not?: InputMaybe<CollateralizationType>;
    collateralizationType_in?: InputMaybe<Array<CollateralizationType>>;
    collateralizationType_not_in?: InputMaybe<Array<CollateralizationType>>;
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
export type Protocol_orderBy = 'id' | 'protocol' | 'name' | 'slug' | 'schemaVersion' | 'subgraphVersion' | 'methodologyVersion' | 'network' | 'type' | 'lendingType' | 'lenderPermissionType' | 'borrowerPermissionType' | 'poolCreatorPermissionType' | 'riskType' | 'collateralizationType' | 'totalValueLockedUSD' | 'protocolControlledValueUSD' | 'cumulativeUniqueUsers' | 'cumulativeSupplySideRevenueUSD' | 'cumulativeProtocolSideRevenueUSD' | 'cumulativeTotalRevenueUSD' | 'totalPoolCount' | 'dailyUsageMetrics' | 'hourlyUsageMetrics' | 'financialMetrics';
export type Query = {
    token?: Maybe<Token>;
    tokens: Array<Token>;
    rewardToken?: Maybe<RewardToken>;
    rewardTokens: Array<RewardToken>;
    interestRate?: Maybe<InterestRate>;
    interestRates: Array<InterestRate>;
    fee?: Maybe<Fee>;
    fees: Array<Fee>;
    revenueDetail?: Maybe<RevenueDetail>;
    revenueDetails: Array<RevenueDetail>;
    oracle?: Maybe<Oracle>;
    oracles: Array<Oracle>;
    lendingProtocol?: Maybe<LendingProtocol>;
    lendingProtocols: Array<LendingProtocol>;
    marketList?: Maybe<_MarketList>;
    marketLists: Array<_MarketList>;
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
    activeAccount?: Maybe<_ActiveAccount>;
    activeAccounts: Array<_ActiveAccount>;
    positionCounter?: Maybe<_PositionCounter>;
    positionCounters: Array<_PositionCounter>;
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
    transfer?: Maybe<Transfer>;
    transfers: Array<Transfer>;
    flashloan?: Maybe<Flashloan>;
    flashloans: Array<Flashloan>;
    defaultOracle?: Maybe<_DefaultOracle>;
    defaultOracles: Array<_DefaultOracle>;
    flashLoanPremium?: Maybe<_FlashLoanPremium>;
    flashLoanPremiums: Array<_FlashLoanPremium>;
    protocol?: Maybe<Protocol>;
    protocols: Array<Protocol>;
    event?: Maybe<Event>;
    events: Array<Event>;
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
export type QueryfeeArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryfeesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Fee_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Fee_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryrevenueDetailArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryrevenueDetailsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RevenueDetail_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<RevenueDetail_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryoracleArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryoraclesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Oracle_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Oracle_filter>;
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
export type QuerymarketListArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerymarketListsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_MarketList_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_MarketList_filter>;
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
export type QueryactiveAccountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryactiveAccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_ActiveAccount_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_ActiveAccount_filter>;
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
    orderBy?: InputMaybe<_PositionCounter_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_PositionCounter_filter>;
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
export type QuerytransferArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerytransfersArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Transfer_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Transfer_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryflashloanArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryflashloansArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Flashloan_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Flashloan_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerydefaultOracleArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QuerydefaultOraclesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_DefaultOracle_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_DefaultOracle_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryflashLoanPremiumArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryflashLoanPremiumsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_FlashLoanPremium_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_FlashLoanPremium_filter>;
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
export type QueryeventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryeventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Event_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Event_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type Query_metaArgs = {
    block?: InputMaybe<Block_height>;
};
export type Repay = Event & {
    /**  { Transaction hash }{ Log index }  */
    id: Scalars['Bytes'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['Bytes'];
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
    account: Account;
    /**  Account that is providing the funds to repay the debt  */
    accountActor?: Maybe<Account>;
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
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_gt?: InputMaybe<Scalars['Bytes']>;
    hash_lt?: InputMaybe<Scalars['Bytes']>;
    hash_gte?: InputMaybe<Scalars['Bytes']>;
    hash_lte?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    account_?: InputMaybe<Account_filter>;
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
    accountActor_?: InputMaybe<Account_filter>;
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
export type Repay_orderBy = 'id' | 'hash' | 'nonce' | 'logIndex' | 'gasPrice' | 'gasUsed' | 'gasLimit' | 'blockNumber' | 'timestamp' | 'account' | 'account__id' | 'account__positionCount' | 'account__openPositionCount' | 'account__closedPositionCount' | 'account__depositCount' | 'account__withdrawCount' | 'account__borrowCount' | 'account__repayCount' | 'account__liquidateCount' | 'account__liquidationCount' | 'account__transferredCount' | 'account__receivedCount' | 'account__flashloanCount' | 'account__rewardsClaimedUSD' | 'account___eMode' | 'accountActor' | 'accountActor__id' | 'accountActor__positionCount' | 'accountActor__openPositionCount' | 'accountActor__closedPositionCount' | 'accountActor__depositCount' | 'accountActor__withdrawCount' | 'accountActor__borrowCount' | 'accountActor__repayCount' | 'accountActor__liquidateCount' | 'accountActor__liquidationCount' | 'accountActor__transferredCount' | 'accountActor__receivedCount' | 'accountActor__flashloanCount' | 'accountActor__rewardsClaimedUSD' | 'accountActor___eMode' | 'market' | 'market__id' | 'market__name' | 'market__isActive' | 'market__canBorrowFrom' | 'market__canUseAsCollateral' | 'market__maximumLTV' | 'market__liquidationThreshold' | 'market__liquidationPenalty' | 'market__canIsolate' | 'market__createdTimestamp' | 'market__createdBlockNumber' | 'market__relation' | 'market__stakedOutputTokenAmount' | 'market__inputTokenBalance' | 'market__inputTokenPriceUSD' | 'market__outputTokenSupply' | 'market__outputTokenPriceUSD' | 'market__exchangeRate' | 'market__reserves' | 'market__reserveFactor' | 'market__variableBorrowedTokenBalance' | 'market__stableBorrowedTokenBalance' | 'market__indexLastUpdatedTimestamp' | 'market__supplyIndex' | 'market__supplyCap' | 'market__borrowIndex' | 'market__borrowCap' | 'market__totalValueLockedUSD' | 'market__cumulativeSupplySideRevenueUSD' | 'market__cumulativeProtocolSideRevenueUSD' | 'market__cumulativeTotalRevenueUSD' | 'market__totalDepositBalanceUSD' | 'market__cumulativeDepositUSD' | 'market__totalBorrowBalanceUSD' | 'market__cumulativeBorrowUSD' | 'market__cumulativeLiquidateUSD' | 'market__cumulativeTransferUSD' | 'market__cumulativeFlashloanUSD' | 'market__transactionCount' | 'market__depositCount' | 'market__withdrawCount' | 'market__borrowCount' | 'market__repayCount' | 'market__liquidationCount' | 'market__transferCount' | 'market__flashloanCount' | 'market__cumulativeUniqueUsers' | 'market__cumulativeUniqueDepositors' | 'market__cumulativeUniqueBorrowers' | 'market__cumulativeUniqueLiquidators' | 'market__cumulativeUniqueLiquidatees' | 'market__cumulativeUniqueTransferrers' | 'market__cumulativeUniqueFlashloaners' | 'market__positionCount' | 'market__openPositionCount' | 'market__closedPositionCount' | 'market__lendingPositionCount' | 'market__borrowingPositionCount' | 'market___baseTrackingBorrowSpeed' | 'market___baseTrackingSupplySpeed' | 'market___lastRewardsUpdated' | 'market___liquidationProtocolFee' | 'market___siloedBorrowing' | 'position' | 'position__id' | 'position__hashOpened' | 'position__hashClosed' | 'position__blockNumberOpened' | 'position__timestampOpened' | 'position__blockNumberClosed' | 'position__timestampClosed' | 'position__side' | 'position__type' | 'position__isCollateral' | 'position__isIsolated' | 'position__balance' | 'position__principal' | 'position__depositCount' | 'position__withdrawCount' | 'position__borrowCount' | 'position__repayCount' | 'position__liquidationCount' | 'position__transferredCount' | 'position__receivedCount' | 'position___eMode' | 'asset' | 'asset__id' | 'asset__name' | 'asset__symbol' | 'asset__decimals' | 'asset__lastPriceUSD' | 'asset__lastPriceBlockNumber' | 'asset__type' | 'asset___iavsTokenType' | 'amount' | 'amountUSD';
export type RevenueDetail = {
    /**  { Market/Protocol ID }{ Optional: Snapshot ID }  */
    id: Scalars['Bytes'];
    /**  The source of revenue (in alphabetical order)  */
    sources: Array<Fee>;
    /**  The amount of revenue in USD (same order as sources)  */
    amountsUSD: Array<Scalars['BigDecimal']>;
};
export type RevenueDetailsourcesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Fee_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Fee_filter>;
};
export type RevenueDetail_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    sources?: InputMaybe<Array<Scalars['String']>>;
    sources_not?: InputMaybe<Array<Scalars['String']>>;
    sources_contains?: InputMaybe<Array<Scalars['String']>>;
    sources_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    sources_not_contains?: InputMaybe<Array<Scalars['String']>>;
    sources_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    sources_?: InputMaybe<Fee_filter>;
    amountsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>;
    amountsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<RevenueDetail_filter>>>;
    or?: InputMaybe<Array<InputMaybe<RevenueDetail_filter>>>;
};
export type RevenueDetail_orderBy = 'id' | 'sources' | 'amountsUSD';
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
'DEPOSIT'
/**  For reward tokens awarded to borrowers of variable debt  */
 | 'VARIABLE_BORROW'
/**  For reward tokens awarded to borrowers of stable debt  */
 | 'STABLE_BORROW'
/**  For reward tokens awarded to stakers  */
 | 'STAKE';
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
export type RewardToken_orderBy = 'id' | 'token' | 'token__id' | 'token__name' | 'token__symbol' | 'token__decimals' | 'token__lastPriceUSD' | 'token__lastPriceBlockNumber' | 'token__type' | 'token___iavsTokenType' | 'type' | '_distributionEnd';
export type RiskType = 
/**  Global risk means each users position in a market is combined for one score to determine if they can be liquidated  */
'GLOBAL'
/**  Isolated risk means each users position in a market or CDP is isolated for risk of liquidation  */
 | 'ISOLATED';
export type Subscription = {
    token?: Maybe<Token>;
    tokens: Array<Token>;
    rewardToken?: Maybe<RewardToken>;
    rewardTokens: Array<RewardToken>;
    interestRate?: Maybe<InterestRate>;
    interestRates: Array<InterestRate>;
    fee?: Maybe<Fee>;
    fees: Array<Fee>;
    revenueDetail?: Maybe<RevenueDetail>;
    revenueDetails: Array<RevenueDetail>;
    oracle?: Maybe<Oracle>;
    oracles: Array<Oracle>;
    lendingProtocol?: Maybe<LendingProtocol>;
    lendingProtocols: Array<LendingProtocol>;
    marketList?: Maybe<_MarketList>;
    marketLists: Array<_MarketList>;
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
    activeAccount?: Maybe<_ActiveAccount>;
    activeAccounts: Array<_ActiveAccount>;
    positionCounter?: Maybe<_PositionCounter>;
    positionCounters: Array<_PositionCounter>;
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
    transfer?: Maybe<Transfer>;
    transfers: Array<Transfer>;
    flashloan?: Maybe<Flashloan>;
    flashloans: Array<Flashloan>;
    defaultOracle?: Maybe<_DefaultOracle>;
    defaultOracles: Array<_DefaultOracle>;
    flashLoanPremium?: Maybe<_FlashLoanPremium>;
    flashLoanPremiums: Array<_FlashLoanPremium>;
    protocol?: Maybe<Protocol>;
    protocols: Array<Protocol>;
    event?: Maybe<Event>;
    events: Array<Event>;
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
export type SubscriptionfeeArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionfeesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Fee_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Fee_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionrevenueDetailArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionrevenueDetailsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RevenueDetail_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<RevenueDetail_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionoracleArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionoraclesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Oracle_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Oracle_filter>;
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
export type SubscriptionmarketListArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionmarketListsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_MarketList_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_MarketList_filter>;
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
export type SubscriptionactiveAccountArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionactiveAccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_ActiveAccount_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_ActiveAccount_filter>;
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
    orderBy?: InputMaybe<_PositionCounter_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_PositionCounter_filter>;
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
export type SubscriptiontransferArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiontransfersArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Transfer_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Transfer_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionflashloanArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionflashloansArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Flashloan_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Flashloan_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiondefaultOracleArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptiondefaultOraclesArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_DefaultOracle_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_DefaultOracle_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionflashLoanPremiumArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionflashLoanPremiumsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<_FlashLoanPremium_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<_FlashLoanPremium_filter>;
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
export type SubscriptioneventArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptioneventsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Event_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Event_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type Subscription_metaArgs = {
    block?: InputMaybe<Block_height>;
};
export type Token = {
    /**  Smart contract address of the token  */
    id: Scalars['Bytes'];
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
    /**  The type of token the protocol creates for positions  */
    type?: Maybe<TokenType>;
    /**  the market ID for underlying/asset token, aToken, vToken and sToken */
    _market?: Maybe<Market>;
    /**  type of token: inputToken, aToken, vToken, or sToken  */
    _iavsTokenType?: Maybe<Scalars['String']>;
};
export type TokenType = 
/**  Rebasing tokens continuously adjust balances / supply as interest is accrued (e.g. Aave debt balances adjust at each block with interest)  */
'REBASING'
/**  Non-rebasing token balances / supply do not change as interest is accrued (e.g. Compound's cToken's do not adjust balance, the exchange rate changes with interest)  */
 | 'NON_REBASING';
export type Token_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    type?: InputMaybe<TokenType>;
    type_not?: InputMaybe<TokenType>;
    type_in?: InputMaybe<Array<TokenType>>;
    type_not_in?: InputMaybe<Array<TokenType>>;
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
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};
export type Token_orderBy = 'id' | 'name' | 'symbol' | 'decimals' | 'lastPriceUSD' | 'lastPriceBlockNumber' | 'type' | '_market' | '_market__id' | '_market__name' | '_market__isActive' | '_market__canBorrowFrom' | '_market__canUseAsCollateral' | '_market__maximumLTV' | '_market__liquidationThreshold' | '_market__liquidationPenalty' | '_market__canIsolate' | '_market__createdTimestamp' | '_market__createdBlockNumber' | '_market__relation' | '_market__stakedOutputTokenAmount' | '_market__inputTokenBalance' | '_market__inputTokenPriceUSD' | '_market__outputTokenSupply' | '_market__outputTokenPriceUSD' | '_market__exchangeRate' | '_market__reserves' | '_market__reserveFactor' | '_market__variableBorrowedTokenBalance' | '_market__stableBorrowedTokenBalance' | '_market__indexLastUpdatedTimestamp' | '_market__supplyIndex' | '_market__supplyCap' | '_market__borrowIndex' | '_market__borrowCap' | '_market__totalValueLockedUSD' | '_market__cumulativeSupplySideRevenueUSD' | '_market__cumulativeProtocolSideRevenueUSD' | '_market__cumulativeTotalRevenueUSD' | '_market__totalDepositBalanceUSD' | '_market__cumulativeDepositUSD' | '_market__totalBorrowBalanceUSD' | '_market__cumulativeBorrowUSD' | '_market__cumulativeLiquidateUSD' | '_market__cumulativeTransferUSD' | '_market__cumulativeFlashloanUSD' | '_market__transactionCount' | '_market__depositCount' | '_market__withdrawCount' | '_market__borrowCount' | '_market__repayCount' | '_market__liquidationCount' | '_market__transferCount' | '_market__flashloanCount' | '_market__cumulativeUniqueUsers' | '_market__cumulativeUniqueDepositors' | '_market__cumulativeUniqueBorrowers' | '_market__cumulativeUniqueLiquidators' | '_market__cumulativeUniqueLiquidatees' | '_market__cumulativeUniqueTransferrers' | '_market__cumulativeUniqueFlashloaners' | '_market__positionCount' | '_market__openPositionCount' | '_market__closedPositionCount' | '_market__lendingPositionCount' | '_market__borrowingPositionCount' | '_market___baseTrackingBorrowSpeed' | '_market___baseTrackingSupplySpeed' | '_market___lastRewardsUpdated' | '_market___liquidationProtocolFee' | '_market___siloedBorrowing' | '_iavsTokenType';
export type Tranche = 
/**  Senior denotes debt with a higher priority. The first debt to be paid back to lenders.  */
'SENIOR'
/**  Junior tranche denotes lower priority debt. This is secondary priority to be paid back to lenders.  */
 | 'JUNIOR';
export type Transfer = Event & {
    /**  { Transaction hash }{ Log index }  */
    id: Scalars['Bytes'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['Bytes'];
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
    sender: Account;
    /**  The Account that received the tokens  */
    receiver: Account;
    /**  The user positions changed by this event  */
    positions: Array<Position>;
    /**  The market associated with the token transfer  */
    market: Market;
    /**  The asset that was actually transferred. This could also include a debt token.  */
    asset: Token;
    /**  Amount of token transferred in native units  */
    amount: Scalars['BigInt'];
    /**  Amount of token transferred in USD  */
    amountUSD: Scalars['BigDecimal'];
};
export type TransferpositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Position_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Position_filter>;
};
export type Transfer_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_gt?: InputMaybe<Scalars['Bytes']>;
    hash_lt?: InputMaybe<Scalars['Bytes']>;
    hash_gte?: InputMaybe<Scalars['Bytes']>;
    hash_lte?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    sender_?: InputMaybe<Account_filter>;
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
    receiver_?: InputMaybe<Account_filter>;
    positions?: InputMaybe<Array<Scalars['String']>>;
    positions_not?: InputMaybe<Array<Scalars['String']>>;
    positions_contains?: InputMaybe<Array<Scalars['String']>>;
    positions_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    positions_not_contains?: InputMaybe<Array<Scalars['String']>>;
    positions_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    positions_?: InputMaybe<Position_filter>;
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
    and?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
    or?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
};
export type Transfer_orderBy = 'id' | 'hash' | 'nonce' | 'logIndex' | 'gasPrice' | 'gasUsed' | 'gasLimit' | 'blockNumber' | 'timestamp' | 'sender' | 'sender__id' | 'sender__positionCount' | 'sender__openPositionCount' | 'sender__closedPositionCount' | 'sender__depositCount' | 'sender__withdrawCount' | 'sender__borrowCount' | 'sender__repayCount' | 'sender__liquidateCount' | 'sender__liquidationCount' | 'sender__transferredCount' | 'sender__receivedCount' | 'sender__flashloanCount' | 'sender__rewardsClaimedUSD' | 'sender___eMode' | 'receiver' | 'receiver__id' | 'receiver__positionCount' | 'receiver__openPositionCount' | 'receiver__closedPositionCount' | 'receiver__depositCount' | 'receiver__withdrawCount' | 'receiver__borrowCount' | 'receiver__repayCount' | 'receiver__liquidateCount' | 'receiver__liquidationCount' | 'receiver__transferredCount' | 'receiver__receivedCount' | 'receiver__flashloanCount' | 'receiver__rewardsClaimedUSD' | 'receiver___eMode' | 'positions' | 'market' | 'market__id' | 'market__name' | 'market__isActive' | 'market__canBorrowFrom' | 'market__canUseAsCollateral' | 'market__maximumLTV' | 'market__liquidationThreshold' | 'market__liquidationPenalty' | 'market__canIsolate' | 'market__createdTimestamp' | 'market__createdBlockNumber' | 'market__relation' | 'market__stakedOutputTokenAmount' | 'market__inputTokenBalance' | 'market__inputTokenPriceUSD' | 'market__outputTokenSupply' | 'market__outputTokenPriceUSD' | 'market__exchangeRate' | 'market__reserves' | 'market__reserveFactor' | 'market__variableBorrowedTokenBalance' | 'market__stableBorrowedTokenBalance' | 'market__indexLastUpdatedTimestamp' | 'market__supplyIndex' | 'market__supplyCap' | 'market__borrowIndex' | 'market__borrowCap' | 'market__totalValueLockedUSD' | 'market__cumulativeSupplySideRevenueUSD' | 'market__cumulativeProtocolSideRevenueUSD' | 'market__cumulativeTotalRevenueUSD' | 'market__totalDepositBalanceUSD' | 'market__cumulativeDepositUSD' | 'market__totalBorrowBalanceUSD' | 'market__cumulativeBorrowUSD' | 'market__cumulativeLiquidateUSD' | 'market__cumulativeTransferUSD' | 'market__cumulativeFlashloanUSD' | 'market__transactionCount' | 'market__depositCount' | 'market__withdrawCount' | 'market__borrowCount' | 'market__repayCount' | 'market__liquidationCount' | 'market__transferCount' | 'market__flashloanCount' | 'market__cumulativeUniqueUsers' | 'market__cumulativeUniqueDepositors' | 'market__cumulativeUniqueBorrowers' | 'market__cumulativeUniqueLiquidators' | 'market__cumulativeUniqueLiquidatees' | 'market__cumulativeUniqueTransferrers' | 'market__cumulativeUniqueFlashloaners' | 'market__positionCount' | 'market__openPositionCount' | 'market__closedPositionCount' | 'market__lendingPositionCount' | 'market__borrowingPositionCount' | 'market___baseTrackingBorrowSpeed' | 'market___baseTrackingSupplySpeed' | 'market___lastRewardsUpdated' | 'market___liquidationProtocolFee' | 'market___siloedBorrowing' | 'asset' | 'asset__id' | 'asset__name' | 'asset__symbol' | 'asset__decimals' | 'asset__lastPriceUSD' | 'asset__lastPriceBlockNumber' | 'asset__type' | 'asset___iavsTokenType' | 'amount' | 'amountUSD';
export type UsageMetricsDailySnapshot = {
    /**  ID is # of days since Unix epoch time  */
    id: Scalars['Bytes'];
    /**  Number of days since Unix epoch time  */
    days: Scalars['Int'];
    /**  Protocol this snapshot is associated with  */
    protocol: LendingProtocol;
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
export type UsageMetricsDailySnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<UsageMetricsDailySnapshot_filter>>>;
    or?: InputMaybe<Array<InputMaybe<UsageMetricsDailySnapshot_filter>>>;
};
export type UsageMetricsDailySnapshot_orderBy = 'id' | 'days' | 'protocol' | 'protocol__id' | 'protocol__protocol' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__lendingType' | 'protocol__lenderPermissionType' | 'protocol__borrowerPermissionType' | 'protocol__poolCreatorPermissionType' | 'protocol__riskType' | 'protocol__collateralizationType' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueDepositors' | 'protocol__cumulativeUniqueBorrowers' | 'protocol__cumulativeUniqueLiquidators' | 'protocol__cumulativeUniqueLiquidatees' | 'protocol__totalValueLockedUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__totalDepositBalanceUSD' | 'protocol__cumulativeDepositUSD' | 'protocol__totalBorrowBalanceUSD' | 'protocol__cumulativeBorrowUSD' | 'protocol__cumulativeLiquidateUSD' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__transactionCount' | 'protocol__depositCount' | 'protocol__withdrawCount' | 'protocol__borrowCount' | 'protocol__repayCount' | 'protocol__liquidationCount' | 'protocol__transferCount' | 'protocol__flashloanCount' | 'dailyActiveUsers' | 'cumulativeUniqueUsers' | 'dailyActiveDepositors' | 'cumulativeUniqueDepositors' | 'dailyActiveBorrowers' | 'cumulativeUniqueBorrowers' | 'dailyActiveLiquidators' | 'cumulativeUniqueLiquidators' | 'dailyActiveLiquidatees' | 'cumulativeUniqueLiquidatees' | 'dailyTransactionCount' | 'dailyDepositCount' | 'dailyWithdrawCount' | 'dailyBorrowCount' | 'dailyRepayCount' | 'dailyLiquidateCount' | 'dailyTransferCount' | 'dailyFlashloanCount' | 'cumulativePositionCount' | 'openPositionCount' | 'dailyActivePositions' | 'totalPoolCount' | 'blockNumber' | 'timestamp';
export type UsageMetricsHourlySnapshot = {
    /**  { # of hours since Unix epoch time }  */
    id: Scalars['Bytes'];
    /**  Number of hours since Unix epoch time  */
    hours: Scalars['Int'];
    /**  Protocol this snapshot is associated with  */
    protocol: LendingProtocol;
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
export type UsageMetricsHourlySnapshot_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
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
export type UsageMetricsHourlySnapshot_orderBy = 'id' | 'hours' | 'protocol' | 'protocol__id' | 'protocol__protocol' | 'protocol__name' | 'protocol__slug' | 'protocol__schemaVersion' | 'protocol__subgraphVersion' | 'protocol__methodologyVersion' | 'protocol__network' | 'protocol__type' | 'protocol__lendingType' | 'protocol__lenderPermissionType' | 'protocol__borrowerPermissionType' | 'protocol__poolCreatorPermissionType' | 'protocol__riskType' | 'protocol__collateralizationType' | 'protocol__cumulativeUniqueUsers' | 'protocol__cumulativeUniqueDepositors' | 'protocol__cumulativeUniqueBorrowers' | 'protocol__cumulativeUniqueLiquidators' | 'protocol__cumulativeUniqueLiquidatees' | 'protocol__totalValueLockedUSD' | 'protocol__protocolControlledValueUSD' | 'protocol__cumulativeSupplySideRevenueUSD' | 'protocol__cumulativeProtocolSideRevenueUSD' | 'protocol__cumulativeTotalRevenueUSD' | 'protocol__totalDepositBalanceUSD' | 'protocol__cumulativeDepositUSD' | 'protocol__totalBorrowBalanceUSD' | 'protocol__cumulativeBorrowUSD' | 'protocol__cumulativeLiquidateUSD' | 'protocol__totalPoolCount' | 'protocol__openPositionCount' | 'protocol__cumulativePositionCount' | 'protocol__transactionCount' | 'protocol__depositCount' | 'protocol__withdrawCount' | 'protocol__borrowCount' | 'protocol__repayCount' | 'protocol__liquidationCount' | 'protocol__transferCount' | 'protocol__flashloanCount' | 'hourlyActiveUsers' | 'cumulativeUniqueUsers' | 'hourlyTransactionCount' | 'hourlyDepositCount' | 'hourlyWithdrawCount' | 'hourlyBorrowCount' | 'hourlyRepayCount' | 'hourlyLiquidateCount' | 'blockNumber' | 'timestamp';
export type Withdraw = Event & {
    /**  { Transaction hash }{ Log index }  */
    id: Scalars['Bytes'];
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['Bytes'];
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
    account: Account;
    /**  Account that receives the underlying withdrawn amount  */
    accountActor?: Maybe<Account>;
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
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    hash?: InputMaybe<Scalars['Bytes']>;
    hash_not?: InputMaybe<Scalars['Bytes']>;
    hash_gt?: InputMaybe<Scalars['Bytes']>;
    hash_lt?: InputMaybe<Scalars['Bytes']>;
    hash_gte?: InputMaybe<Scalars['Bytes']>;
    hash_lte?: InputMaybe<Scalars['Bytes']>;
    hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    hash_contains?: InputMaybe<Scalars['Bytes']>;
    hash_not_contains?: InputMaybe<Scalars['Bytes']>;
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
    account_?: InputMaybe<Account_filter>;
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
    accountActor_?: InputMaybe<Account_filter>;
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
export type Withdraw_orderBy = 'id' | 'hash' | 'nonce' | 'logIndex' | 'gasPrice' | 'gasUsed' | 'gasLimit' | 'blockNumber' | 'timestamp' | 'account' | 'account__id' | 'account__positionCount' | 'account__openPositionCount' | 'account__closedPositionCount' | 'account__depositCount' | 'account__withdrawCount' | 'account__borrowCount' | 'account__repayCount' | 'account__liquidateCount' | 'account__liquidationCount' | 'account__transferredCount' | 'account__receivedCount' | 'account__flashloanCount' | 'account__rewardsClaimedUSD' | 'account___eMode' | 'accountActor' | 'accountActor__id' | 'accountActor__positionCount' | 'accountActor__openPositionCount' | 'accountActor__closedPositionCount' | 'accountActor__depositCount' | 'accountActor__withdrawCount' | 'accountActor__borrowCount' | 'accountActor__repayCount' | 'accountActor__liquidateCount' | 'accountActor__liquidationCount' | 'accountActor__transferredCount' | 'accountActor__receivedCount' | 'accountActor__flashloanCount' | 'accountActor__rewardsClaimedUSD' | 'accountActor___eMode' | 'market' | 'market__id' | 'market__name' | 'market__isActive' | 'market__canBorrowFrom' | 'market__canUseAsCollateral' | 'market__maximumLTV' | 'market__liquidationThreshold' | 'market__liquidationPenalty' | 'market__canIsolate' | 'market__createdTimestamp' | 'market__createdBlockNumber' | 'market__relation' | 'market__stakedOutputTokenAmount' | 'market__inputTokenBalance' | 'market__inputTokenPriceUSD' | 'market__outputTokenSupply' | 'market__outputTokenPriceUSD' | 'market__exchangeRate' | 'market__reserves' | 'market__reserveFactor' | 'market__variableBorrowedTokenBalance' | 'market__stableBorrowedTokenBalance' | 'market__indexLastUpdatedTimestamp' | 'market__supplyIndex' | 'market__supplyCap' | 'market__borrowIndex' | 'market__borrowCap' | 'market__totalValueLockedUSD' | 'market__cumulativeSupplySideRevenueUSD' | 'market__cumulativeProtocolSideRevenueUSD' | 'market__cumulativeTotalRevenueUSD' | 'market__totalDepositBalanceUSD' | 'market__cumulativeDepositUSD' | 'market__totalBorrowBalanceUSD' | 'market__cumulativeBorrowUSD' | 'market__cumulativeLiquidateUSD' | 'market__cumulativeTransferUSD' | 'market__cumulativeFlashloanUSD' | 'market__transactionCount' | 'market__depositCount' | 'market__withdrawCount' | 'market__borrowCount' | 'market__repayCount' | 'market__liquidationCount' | 'market__transferCount' | 'market__flashloanCount' | 'market__cumulativeUniqueUsers' | 'market__cumulativeUniqueDepositors' | 'market__cumulativeUniqueBorrowers' | 'market__cumulativeUniqueLiquidators' | 'market__cumulativeUniqueLiquidatees' | 'market__cumulativeUniqueTransferrers' | 'market__cumulativeUniqueFlashloaners' | 'market__positionCount' | 'market__openPositionCount' | 'market__closedPositionCount' | 'market__lendingPositionCount' | 'market__borrowingPositionCount' | 'market___baseTrackingBorrowSpeed' | 'market___baseTrackingSupplySpeed' | 'market___lastRewardsUpdated' | 'market___liquidationProtocolFee' | 'market___siloedBorrowing' | 'position' | 'position__id' | 'position__hashOpened' | 'position__hashClosed' | 'position__blockNumberOpened' | 'position__timestampOpened' | 'position__blockNumberClosed' | 'position__timestampClosed' | 'position__side' | 'position__type' | 'position__isCollateral' | 'position__isIsolated' | 'position__balance' | 'position__principal' | 'position__depositCount' | 'position__withdrawCount' | 'position__borrowCount' | 'position__repayCount' | 'position__liquidationCount' | 'position__transferredCount' | 'position__receivedCount' | 'position___eMode' | 'asset' | 'asset__id' | 'asset__name' | 'asset__symbol' | 'asset__decimals' | 'asset__lastPriceUSD' | 'asset__lastPriceBlockNumber' | 'asset__type' | 'asset___iavsTokenType' | 'amount' | 'amountUSD';
export type _ActiveAccount = {
    /**  { daily/hourly }-{ Address of the account }-{ Optional: Transaction Type }-{ Optional: Market Address }-{ Optional: Days/hours since Unix epoch }  */
    id: Scalars['ID'];
};
export type _ActiveAccount_filter = {
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
    and?: InputMaybe<Array<InputMaybe<_ActiveAccount_filter>>>;
    or?: InputMaybe<Array<InputMaybe<_ActiveAccount_filter>>>;
};
export type _ActiveAccount_orderBy = 'id';
export type _Block_ = {
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Maybe<Scalars['Int']>;
};
export type _DefaultOracle = {
    /**  protocol id  */
    id: Scalars['Bytes'];
    /**  address of default oracle  */
    oracle: Scalars['Bytes'];
};
export type _DefaultOracle_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    oracle?: InputMaybe<Scalars['Bytes']>;
    oracle_not?: InputMaybe<Scalars['Bytes']>;
    oracle_gt?: InputMaybe<Scalars['Bytes']>;
    oracle_lt?: InputMaybe<Scalars['Bytes']>;
    oracle_gte?: InputMaybe<Scalars['Bytes']>;
    oracle_lte?: InputMaybe<Scalars['Bytes']>;
    oracle_in?: InputMaybe<Array<Scalars['Bytes']>>;
    oracle_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    oracle_contains?: InputMaybe<Scalars['Bytes']>;
    oracle_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<_DefaultOracle_filter>>>;
    or?: InputMaybe<Array<InputMaybe<_DefaultOracle_filter>>>;
};
export type _DefaultOracle_orderBy = 'id' | 'oracle';
export type _FlashLoanPremium = {
    /**  protocol id  */
    id: Scalars['Bytes'];
    /**  total premium rate  */
    premiumRateTotal: Scalars['BigDecimal'];
    /**  premium rate to protocol  */
    premiumRateToProtocol: Scalars['BigDecimal'];
};
export type _FlashLoanPremium_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    premiumRateTotal?: InputMaybe<Scalars['BigDecimal']>;
    premiumRateTotal_not?: InputMaybe<Scalars['BigDecimal']>;
    premiumRateTotal_gt?: InputMaybe<Scalars['BigDecimal']>;
    premiumRateTotal_lt?: InputMaybe<Scalars['BigDecimal']>;
    premiumRateTotal_gte?: InputMaybe<Scalars['BigDecimal']>;
    premiumRateTotal_lte?: InputMaybe<Scalars['BigDecimal']>;
    premiumRateTotal_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    premiumRateTotal_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    premiumRateToProtocol?: InputMaybe<Scalars['BigDecimal']>;
    premiumRateToProtocol_not?: InputMaybe<Scalars['BigDecimal']>;
    premiumRateToProtocol_gt?: InputMaybe<Scalars['BigDecimal']>;
    premiumRateToProtocol_lt?: InputMaybe<Scalars['BigDecimal']>;
    premiumRateToProtocol_gte?: InputMaybe<Scalars['BigDecimal']>;
    premiumRateToProtocol_lte?: InputMaybe<Scalars['BigDecimal']>;
    premiumRateToProtocol_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    premiumRateToProtocol_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<_FlashLoanPremium_filter>>>;
    or?: InputMaybe<Array<InputMaybe<_FlashLoanPremium_filter>>>;
};
export type _FlashLoanPremium_orderBy = 'id' | 'premiumRateTotal' | 'premiumRateToProtocol';
export type _MarketList = {
    /**  Same ID as LendingProtocol  */
    id: Scalars['Bytes'];
    /**  IDs of all markets in the LendingProtocol  */
    markets: Array<Scalars['Bytes']>;
};
export type _MarketList_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    markets?: InputMaybe<Array<Scalars['Bytes']>>;
    markets_not?: InputMaybe<Array<Scalars['Bytes']>>;
    markets_contains?: InputMaybe<Array<Scalars['Bytes']>>;
    markets_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
    markets_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
    markets_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<_MarketList_filter>>>;
    or?: InputMaybe<Array<InputMaybe<_MarketList_filter>>>;
};
export type _MarketList_orderBy = 'id' | 'markets';
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
export type _PositionCounter = {
    /**  { Account address }-{ Market address }-{ Position Side }  */
    id: Scalars['ID'];
    /**  Next count  */
    nextCount: Scalars['Int'];
    /**  The last timestamp this position was updated  */
    lastTimestamp: Scalars['BigInt'];
};
export type _PositionCounter_filter = {
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
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<_PositionCounter_filter>>>;
    or?: InputMaybe<Array<InputMaybe<_PositionCounter_filter>>>;
};
export type _PositionCounter_orderBy = 'id' | 'nextCount' | 'lastTimestamp';
export type _SubgraphErrorPolicy_ = 
/** Data will be returned even if the subgraph has indexing errors */
'allow'
/** If the subgraph has indexing errors, data will be omitted. The default. */
 | 'deny';
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;
export type ResolverTypeWrapper<T> = Promise<T> | T;
export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export type NextResolverFn<T> = () => Promise<T>;
export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    Account: ResolverTypeWrapper<Account>;
    Account_filter: Account_filter;
    Account_orderBy: Account_orderBy;
    BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
    BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_height;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    Borrow: ResolverTypeWrapper<Borrow>;
    Borrow_filter: Borrow_filter;
    Borrow_orderBy: Borrow_orderBy;
    Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
    CollateralizationType: CollateralizationType;
    Deposit: ResolverTypeWrapper<Deposit>;
    Deposit_filter: Deposit_filter;
    Deposit_orderBy: Deposit_orderBy;
    Event: ResolversTypes['Borrow'] | ResolversTypes['Deposit'] | ResolversTypes['Flashloan'] | ResolversTypes['Liquidate'] | ResolversTypes['Repay'] | ResolversTypes['Transfer'] | ResolversTypes['Withdraw'];
    Event_filter: Event_filter;
    Event_orderBy: Event_orderBy;
    Fee: ResolverTypeWrapper<Fee>;
    FeeType: FeeType;
    Fee_filter: Fee_filter;
    Fee_orderBy: Fee_orderBy;
    FinancialsDailySnapshot: ResolverTypeWrapper<FinancialsDailySnapshot>;
    FinancialsDailySnapshot_filter: FinancialsDailySnapshot_filter;
    FinancialsDailySnapshot_orderBy: FinancialsDailySnapshot_orderBy;
    Flashloan: ResolverTypeWrapper<Flashloan>;
    Flashloan_filter: Flashloan_filter;
    Flashloan_orderBy: Flashloan_orderBy;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    Int8: ResolverTypeWrapper<Scalars['Int8']>;
    InterestRate: ResolverTypeWrapper<InterestRate>;
    InterestRateSide: InterestRateSide;
    InterestRateType: InterestRateType;
    InterestRate_filter: InterestRate_filter;
    InterestRate_orderBy: InterestRate_orderBy;
    LendingProtocol: ResolverTypeWrapper<LendingProtocol>;
    LendingProtocol_filter: LendingProtocol_filter;
    LendingProtocol_orderBy: LendingProtocol_orderBy;
    LendingType: LendingType;
    Liquidate: ResolverTypeWrapper<Liquidate>;
    Liquidate_filter: Liquidate_filter;
    Liquidate_orderBy: Liquidate_orderBy;
    Market: ResolverTypeWrapper<Market>;
    MarketDailySnapshot: ResolverTypeWrapper<MarketDailySnapshot>;
    MarketDailySnapshot_filter: MarketDailySnapshot_filter;
    MarketDailySnapshot_orderBy: MarketDailySnapshot_orderBy;
    MarketHourlySnapshot: ResolverTypeWrapper<MarketHourlySnapshot>;
    MarketHourlySnapshot_filter: MarketHourlySnapshot_filter;
    MarketHourlySnapshot_orderBy: MarketHourlySnapshot_orderBy;
    Market_filter: Market_filter;
    Market_orderBy: Market_orderBy;
    Network: Network;
    Oracle: ResolverTypeWrapper<Oracle>;
    OracleSource: OracleSource;
    Oracle_filter: Oracle_filter;
    Oracle_orderBy: Oracle_orderBy;
    OrderDirection: OrderDirection;
    PermissionType: PermissionType;
    Position: ResolverTypeWrapper<Position>;
    PositionSide: PositionSide;
    PositionSnapshot: ResolverTypeWrapper<PositionSnapshot>;
    PositionSnapshot_filter: PositionSnapshot_filter;
    PositionSnapshot_orderBy: PositionSnapshot_orderBy;
    Position_filter: Position_filter;
    Position_orderBy: Position_orderBy;
    Protocol: ResolversTypes['LendingProtocol'];
    ProtocolType: ProtocolType;
    Protocol_filter: Protocol_filter;
    Protocol_orderBy: Protocol_orderBy;
    Query: ResolverTypeWrapper<{}>;
    Repay: ResolverTypeWrapper<Repay>;
    Repay_filter: Repay_filter;
    Repay_orderBy: Repay_orderBy;
    RevenueDetail: ResolverTypeWrapper<RevenueDetail>;
    RevenueDetail_filter: RevenueDetail_filter;
    RevenueDetail_orderBy: RevenueDetail_orderBy;
    RewardToken: ResolverTypeWrapper<RewardToken>;
    RewardTokenType: RewardTokenType;
    RewardToken_filter: RewardToken_filter;
    RewardToken_orderBy: RewardToken_orderBy;
    RiskType: RiskType;
    String: ResolverTypeWrapper<Scalars['String']>;
    Subscription: ResolverTypeWrapper<{}>;
    Token: ResolverTypeWrapper<Token>;
    TokenType: TokenType;
    Token_filter: Token_filter;
    Token_orderBy: Token_orderBy;
    Tranche: Tranche;
    Transfer: ResolverTypeWrapper<Transfer>;
    Transfer_filter: Transfer_filter;
    Transfer_orderBy: Transfer_orderBy;
    UsageMetricsDailySnapshot: ResolverTypeWrapper<UsageMetricsDailySnapshot>;
    UsageMetricsDailySnapshot_filter: UsageMetricsDailySnapshot_filter;
    UsageMetricsDailySnapshot_orderBy: UsageMetricsDailySnapshot_orderBy;
    UsageMetricsHourlySnapshot: ResolverTypeWrapper<UsageMetricsHourlySnapshot>;
    UsageMetricsHourlySnapshot_filter: UsageMetricsHourlySnapshot_filter;
    UsageMetricsHourlySnapshot_orderBy: UsageMetricsHourlySnapshot_orderBy;
    Withdraw: ResolverTypeWrapper<Withdraw>;
    Withdraw_filter: Withdraw_filter;
    Withdraw_orderBy: Withdraw_orderBy;
    _ActiveAccount: ResolverTypeWrapper<_ActiveAccount>;
    _ActiveAccount_filter: _ActiveAccount_filter;
    _ActiveAccount_orderBy: _ActiveAccount_orderBy;
    _Block_: ResolverTypeWrapper<_Block_>;
    _DefaultOracle: ResolverTypeWrapper<_DefaultOracle>;
    _DefaultOracle_filter: _DefaultOracle_filter;
    _DefaultOracle_orderBy: _DefaultOracle_orderBy;
    _FlashLoanPremium: ResolverTypeWrapper<_FlashLoanPremium>;
    _FlashLoanPremium_filter: _FlashLoanPremium_filter;
    _FlashLoanPremium_orderBy: _FlashLoanPremium_orderBy;
    _MarketList: ResolverTypeWrapper<_MarketList>;
    _MarketList_filter: _MarketList_filter;
    _MarketList_orderBy: _MarketList_orderBy;
    _Meta_: ResolverTypeWrapper<_Meta_>;
    _PositionCounter: ResolverTypeWrapper<_PositionCounter>;
    _PositionCounter_filter: _PositionCounter_filter;
    _PositionCounter_orderBy: _PositionCounter_orderBy;
    _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;
/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    Account: Account;
    Account_filter: Account_filter;
    BigDecimal: Scalars['BigDecimal'];
    BigInt: Scalars['BigInt'];
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_height;
    Boolean: Scalars['Boolean'];
    Borrow: Borrow;
    Borrow_filter: Borrow_filter;
    Bytes: Scalars['Bytes'];
    Deposit: Deposit;
    Deposit_filter: Deposit_filter;
    Event: ResolversParentTypes['Borrow'] | ResolversParentTypes['Deposit'] | ResolversParentTypes['Flashloan'] | ResolversParentTypes['Liquidate'] | ResolversParentTypes['Repay'] | ResolversParentTypes['Transfer'] | ResolversParentTypes['Withdraw'];
    Event_filter: Event_filter;
    Fee: Fee;
    Fee_filter: Fee_filter;
    FinancialsDailySnapshot: FinancialsDailySnapshot;
    FinancialsDailySnapshot_filter: FinancialsDailySnapshot_filter;
    Flashloan: Flashloan;
    Flashloan_filter: Flashloan_filter;
    Float: Scalars['Float'];
    ID: Scalars['ID'];
    Int: Scalars['Int'];
    Int8: Scalars['Int8'];
    InterestRate: InterestRate;
    InterestRate_filter: InterestRate_filter;
    LendingProtocol: LendingProtocol;
    LendingProtocol_filter: LendingProtocol_filter;
    Liquidate: Liquidate;
    Liquidate_filter: Liquidate_filter;
    Market: Market;
    MarketDailySnapshot: MarketDailySnapshot;
    MarketDailySnapshot_filter: MarketDailySnapshot_filter;
    MarketHourlySnapshot: MarketHourlySnapshot;
    MarketHourlySnapshot_filter: MarketHourlySnapshot_filter;
    Market_filter: Market_filter;
    Oracle: Oracle;
    Oracle_filter: Oracle_filter;
    Position: Position;
    PositionSnapshot: PositionSnapshot;
    PositionSnapshot_filter: PositionSnapshot_filter;
    Position_filter: Position_filter;
    Protocol: ResolversParentTypes['LendingProtocol'];
    Protocol_filter: Protocol_filter;
    Query: {};
    Repay: Repay;
    Repay_filter: Repay_filter;
    RevenueDetail: RevenueDetail;
    RevenueDetail_filter: RevenueDetail_filter;
    RewardToken: RewardToken;
    RewardToken_filter: RewardToken_filter;
    String: Scalars['String'];
    Subscription: {};
    Token: Token;
    Token_filter: Token_filter;
    Transfer: Transfer;
    Transfer_filter: Transfer_filter;
    UsageMetricsDailySnapshot: UsageMetricsDailySnapshot;
    UsageMetricsDailySnapshot_filter: UsageMetricsDailySnapshot_filter;
    UsageMetricsHourlySnapshot: UsageMetricsHourlySnapshot;
    UsageMetricsHourlySnapshot_filter: UsageMetricsHourlySnapshot_filter;
    Withdraw: Withdraw;
    Withdraw_filter: Withdraw_filter;
    _ActiveAccount: _ActiveAccount;
    _ActiveAccount_filter: _ActiveAccount_filter;
    _Block_: _Block_;
    _DefaultOracle: _DefaultOracle;
    _DefaultOracle_filter: _DefaultOracle_filter;
    _FlashLoanPremium: _FlashLoanPremium;
    _FlashLoanPremium_filter: _FlashLoanPremium_filter;
    _MarketList: _MarketList;
    _MarketList_filter: _MarketList_filter;
    _Meta_: _Meta_;
    _PositionCounter: _PositionCounter;
    _PositionCounter_filter: _PositionCounter_filter;
}>;
export type entityDirectiveArgs = {};
export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type subgraphIdDirectiveArgs = {
    id: Scalars['String'];
};
export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type derivedFromDirectiveArgs = {
    field: Scalars['String'];
};
export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    positionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<AccountpositionsArgs, 'skip' | 'first'>>;
    openPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    closedPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    depositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<AccountdepositsArgs, 'skip' | 'first'>>;
    withdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<AccountwithdrawsArgs, 'skip' | 'first'>>;
    borrowCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    borrows?: Resolver<Array<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<AccountborrowsArgs, 'skip' | 'first'>>;
    repayCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    repays?: Resolver<Array<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<AccountrepaysArgs, 'skip' | 'first'>>;
    liquidateCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    liquidates?: Resolver<Array<ResolversTypes['Liquidate']>, ParentType, ContextType, RequireFields<AccountliquidatesArgs, 'skip' | 'first'>>;
    liquidationCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    liquidations?: Resolver<Array<ResolversTypes['Liquidate']>, ParentType, ContextType, RequireFields<AccountliquidationsArgs, 'skip' | 'first'>>;
    transferredCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<AccounttransfersArgs, 'skip' | 'first'>>;
    receivedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    receives?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<AccountreceivesArgs, 'skip' | 'first'>>;
    flashloanCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    flashloans?: Resolver<Array<ResolversTypes['Flashloan']>, ParentType, ContextType, RequireFields<AccountflashloansArgs, 'skip' | 'first'>>;
    rewardsClaimedUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    _enabledCollaterals?: Resolver<Maybe<Array<ResolversTypes['Market']>>, ParentType, ContextType, RequireFields<Account_enabledCollateralsArgs, 'skip' | 'first'>>;
    _eMode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
    name: 'BigDecimal';
}
export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
    name: 'BigInt';
}
export type BorrowResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Borrow'] = ResolversParentTypes['Borrow']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasUsed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    accountActor?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
    market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
    position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
    asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
    name: 'Bytes';
}
export type DepositResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Deposit'] = ResolversParentTypes['Deposit']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasUsed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    accountActor?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
    market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
    position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
    asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type EventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
    __resolveType: TypeResolveFn<'Borrow' | 'Deposit' | 'Flashloan' | 'Liquidate' | 'Repay' | 'Transfer' | 'Withdraw', ParentType, ContextType>;
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasUsed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
    asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
}>;
export type FeeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Fee'] = ResolversParentTypes['Fee']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    rate?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    flatFee?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    type?: Resolver<ResolversTypes['FeeType'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type FinancialsDailySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FinancialsDailySnapshot'] = ResolversParentTypes['FinancialsDailySnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    days?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    mintedTokenSupplies?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
    dailySupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    revenueDetail?: Resolver<Maybe<ResolversTypes['RevenueDetail']>, ParentType, ContextType>;
    totalDepositBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    totalBorrowBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyWithdrawUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyRepayUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyTransferUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyFlashloanUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type FlashloanResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Flashloan'] = ResolversParentTypes['Flashloan']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasUsed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    accountActor?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
    market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
    asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    feeAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    feeAmountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
    name: 'Int8';
}
export type InterestRateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InterestRate'] = ResolversParentTypes['InterestRate']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    rate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    maturityBlock?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    side?: Resolver<ResolversTypes['InterestRateSide'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['InterestRateType'], ParentType, ContextType>;
    tranche?: Resolver<Maybe<ResolversTypes['Tranche']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type LendingProtocolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LendingProtocol'] = ResolversParentTypes['LendingProtocol']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    schemaVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    subgraphVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    methodologyVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    network?: Resolver<ResolversTypes['Network'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['ProtocolType'], ParentType, ContextType>;
    lendingType?: Resolver<Maybe<ResolversTypes['LendingType']>, ParentType, ContextType>;
    lenderPermissionType?: Resolver<Maybe<ResolversTypes['PermissionType']>, ParentType, ContextType>;
    borrowerPermissionType?: Resolver<Maybe<ResolversTypes['PermissionType']>, ParentType, ContextType>;
    poolCreatorPermissionType?: Resolver<Maybe<ResolversTypes['PermissionType']>, ParentType, ContextType>;
    riskType?: Resolver<Maybe<ResolversTypes['RiskType']>, ParentType, ContextType>;
    collateralizationType?: Resolver<Maybe<ResolversTypes['CollateralizationType']>, ParentType, ContextType>;
    mintedTokens?: Resolver<Maybe<Array<ResolversTypes['Token']>>, ParentType, ContextType, RequireFields<LendingProtocolmintedTokensArgs, 'skip' | 'first'>>;
    rewardTokens?: Resolver<Maybe<Array<ResolversTypes['RewardToken']>>, ParentType, ContextType, RequireFields<LendingProtocolrewardTokensArgs, 'skip' | 'first'>>;
    cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueDepositors?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueBorrowers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueLiquidators?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueLiquidatees?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    fees?: Resolver<Maybe<Array<ResolversTypes['Fee']>>, ParentType, ContextType, RequireFields<LendingProtocolfeesArgs, 'skip' | 'first'>>;
    revenueDetail?: Resolver<Maybe<ResolversTypes['RevenueDetail']>, ParentType, ContextType>;
    totalDepositBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    totalBorrowBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    mintedTokenSupplies?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
    totalPoolCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    openPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativePositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    transactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    depositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    withdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    borrowCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    repayCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    liquidationCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    transferCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    flashloanCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    rewardTokenEmissionsAmount?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
    rewardTokenEmissionsUSD?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
    dailyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<LendingProtocoldailyUsageMetricsArgs, 'skip' | 'first'>>;
    hourlyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<LendingProtocolhourlyUsageMetricsArgs, 'skip' | 'first'>>;
    financialMetrics?: Resolver<Array<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<LendingProtocolfinancialMetricsArgs, 'skip' | 'first'>>;
    markets?: Resolver<Array<ResolversTypes['Market']>, ParentType, ContextType, RequireFields<LendingProtocolmarketsArgs, 'skip' | 'first'>>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type LiquidateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Liquidate'] = ResolversParentTypes['Liquidate']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasUsed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    liquidator?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    liquidatee?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
    positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<LiquidatepositionsArgs, 'skip' | 'first'>>;
    asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    profitUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MarketResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Market'] = ResolversParentTypes['Market']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    canBorrowFrom?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    canUseAsCollateral?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    maximumLTV?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    liquidationThreshold?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    liquidationPenalty?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    canIsolate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    createdTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    createdBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    oracle?: Resolver<Maybe<ResolversTypes['Oracle']>, ParentType, ContextType>;
    relation?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    rewardTokens?: Resolver<Maybe<Array<ResolversTypes['RewardToken']>>, ParentType, ContextType, RequireFields<MarketrewardTokensArgs, 'skip' | 'first'>>;
    rewardTokenEmissionsAmount?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
    rewardTokenEmissionsUSD?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
    stakedOutputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    inputToken?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    inputTokenBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    inputTokenPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    outputToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    outputTokenSupply?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    outputTokenPriceUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    exchangeRate?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    rates?: Resolver<Maybe<Array<ResolversTypes['InterestRate']>>, ParentType, ContextType, RequireFields<MarketratesArgs, 'skip' | 'first'>>;
    reserves?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    reserveFactor?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    borrowedToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    variableBorrowedTokenBalance?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    stableBorrowedTokenBalance?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    indexLastUpdatedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    supplyIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    supplyCap?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    borrowIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    borrowCap?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    revenueDetail?: Resolver<Maybe<ResolversTypes['RevenueDetail']>, ParentType, ContextType>;
    totalDepositBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    totalBorrowBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeTransferUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeFlashloanUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    transactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    depositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    withdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    borrowCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    repayCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    liquidationCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    transferCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    flashloanCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueDepositors?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueBorrowers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueLiquidators?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueLiquidatees?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueTransferrers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueFlashloaners?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<MarketpositionsArgs, 'skip' | 'first'>>;
    positionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    openPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    closedPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    lendingPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    borrowingPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailySnapshots?: Resolver<Array<ResolversTypes['MarketDailySnapshot']>, ParentType, ContextType, RequireFields<MarketdailySnapshotsArgs, 'skip' | 'first'>>;
    hourlySnapshots?: Resolver<Array<ResolversTypes['MarketHourlySnapshot']>, ParentType, ContextType, RequireFields<MarkethourlySnapshotsArgs, 'skip' | 'first'>>;
    deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<MarketdepositsArgs, 'skip' | 'first'>>;
    withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<MarketwithdrawsArgs, 'skip' | 'first'>>;
    borrows?: Resolver<Array<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<MarketborrowsArgs, 'skip' | 'first'>>;
    repays?: Resolver<Array<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<MarketrepaysArgs, 'skip' | 'first'>>;
    liquidates?: Resolver<Array<ResolversTypes['Liquidate']>, ParentType, ContextType, RequireFields<MarketliquidatesArgs, 'skip' | 'first'>>;
    transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<MarkettransfersArgs, 'skip' | 'first'>>;
    flashloans?: Resolver<Array<ResolversTypes['Flashloan']>, ParentType, ContextType, RequireFields<MarketflashloansArgs, 'skip' | 'first'>>;
    _baseTrackingBorrowSpeed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    _baseTrackingSupplySpeed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    _vToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    _sToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>;
    _prePauseState?: Resolver<Maybe<Array<ResolversTypes['Boolean']>>, ParentType, ContextType>;
    _lastRewardsUpdated?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    _liquidationProtocolFee?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    _siloedBorrowing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MarketDailySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MarketDailySnapshot'] = ResolversParentTypes['MarketDailySnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    days?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
    market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    relation?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    rewardTokens?: Resolver<Maybe<Array<ResolversTypes['RewardToken']>>, ParentType, ContextType, RequireFields<MarketDailySnapshotrewardTokensArgs, 'skip' | 'first'>>;
    rewardTokenEmissionsAmount?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
    rewardTokenEmissionsUSD?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
    stakedOutputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    inputTokenBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    inputTokenPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    outputTokenSupply?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    outputTokenPriceUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    exchangeRate?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    rates?: Resolver<Maybe<Array<ResolversTypes['InterestRate']>>, ParentType, ContextType, RequireFields<MarketDailySnapshotratesArgs, 'skip' | 'first'>>;
    reserves?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    reserveFactor?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    variableBorrowedTokenBalance?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    stableBorrowedTokenBalance?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    supplyCap?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    borrowCap?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailySupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    revenueDetail?: Resolver<Maybe<ResolversTypes['RevenueDetail']>, ParentType, ContextType>;
    totalDepositBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyNativeDeposit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    cumulativeDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    totalBorrowBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyNativeBorrow?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    cumulativeBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyNativeLiquidate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    cumulativeLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyWithdrawUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyNativeWithdraw?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    dailyRepayUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyNativeRepay?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    dailyTransferUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyNativeTransfer?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    cumulativeTransferUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyFlashloanUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyNativeFlashloan?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    cumulativeFlashloanUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    dailyActiveUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyActiveDepositors?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyActiveBorrowers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyActiveLiquidators?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyActiveLiquidatees?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyActiveTransferrers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyActiveFlashloaners?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyBorrowCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyRepayCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyLiquidateCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyTransferCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyFlashloanCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    positionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    openPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    closedPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    lendingPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyActiveLendingPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    borrowingPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyActiveBorrowingPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type MarketHourlySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MarketHourlySnapshot'] = ResolversParentTypes['MarketHourlySnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hours?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
    market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    relation?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    rewardTokens?: Resolver<Maybe<Array<ResolversTypes['RewardToken']>>, ParentType, ContextType, RequireFields<MarketHourlySnapshotrewardTokensArgs, 'skip' | 'first'>>;
    rewardTokenEmissionsAmount?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
    rewardTokenEmissionsUSD?: Resolver<Maybe<Array<ResolversTypes['BigDecimal']>>, ParentType, ContextType>;
    stakedOutputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    inputTokenBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    inputTokenPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    outputTokenSupply?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    outputTokenPriceUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    exchangeRate?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    rates?: Resolver<Maybe<Array<ResolversTypes['InterestRate']>>, ParentType, ContextType, RequireFields<MarketHourlySnapshotratesArgs, 'skip' | 'first'>>;
    reserves?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    variableBorrowedTokenBalance?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    stableBorrowedTokenBalance?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlySupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlyProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlyTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    totalDepositBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlyDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeDepositUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    totalBorrowBalanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlyBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeBorrowUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlyLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeLiquidateUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlyWithdrawUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlyRepayUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlyTransferUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    hourlyFlashloanUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type OracleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Oracle'] = ResolversParentTypes['Oracle']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    oracleAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
    blockCreated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestampCreated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    isUSD?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    hashEnded?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    oracleSource?: Resolver<Maybe<ResolversTypes['OracleSource']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type PositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
    asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    hashOpened?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hashClosed?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    blockNumberOpened?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestampOpened?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumberClosed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    timestampClosed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    side?: Resolver<ResolversTypes['PositionSide'], ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['InterestRateType']>, ParentType, ContextType>;
    isCollateral?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    isIsolated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    principal?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    depositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<PositiondepositsArgs, 'skip' | 'first'>>;
    withdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<PositionwithdrawsArgs, 'skip' | 'first'>>;
    borrowCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    borrows?: Resolver<Array<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<PositionborrowsArgs, 'skip' | 'first'>>;
    repayCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    repays?: Resolver<Array<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<PositionrepaysArgs, 'skip' | 'first'>>;
    liquidationCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    liquidations?: Resolver<Array<ResolversTypes['Liquidate']>, ParentType, ContextType, RequireFields<PositionliquidationsArgs, 'skip' | 'first'>>;
    transferredCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    receivedCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<PositiontransfersArgs, 'skip' | 'first'>>;
    snapshots?: Resolver<Array<ResolversTypes['PositionSnapshot']>, ParentType, ContextType, RequireFields<PositionsnapshotsArgs, 'skip' | 'first'>>;
    _eMode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type PositionSnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionSnapshot'] = ResolversParentTypes['PositionSnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
    balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    balanceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    principal?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    index?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ProtocolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Protocol'] = ResolversParentTypes['Protocol']> = ResolversObject<{
    __resolveType: TypeResolveFn<'LendingProtocol', ParentType, ContextType>;
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    schemaVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    subgraphVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    methodologyVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    network?: Resolver<ResolversTypes['Network'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['ProtocolType'], ParentType, ContextType>;
    lendingType?: Resolver<Maybe<ResolversTypes['LendingType']>, ParentType, ContextType>;
    lenderPermissionType?: Resolver<Maybe<ResolversTypes['PermissionType']>, ParentType, ContextType>;
    borrowerPermissionType?: Resolver<Maybe<ResolversTypes['PermissionType']>, ParentType, ContextType>;
    poolCreatorPermissionType?: Resolver<Maybe<ResolversTypes['PermissionType']>, ParentType, ContextType>;
    riskType?: Resolver<Maybe<ResolversTypes['RiskType']>, ParentType, ContextType>;
    collateralizationType?: Resolver<Maybe<ResolversTypes['CollateralizationType']>, ParentType, ContextType>;
    totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    totalPoolCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<ProtocoldailyUsageMetricsArgs, 'skip' | 'first'>>;
    hourlyUsageMetrics?: Resolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<ProtocolhourlyUsageMetricsArgs, 'skip' | 'first'>>;
    financialMetrics?: Resolver<Array<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<ProtocolfinancialMetricsArgs, 'skip' | 'first'>>;
}>;
export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
    tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
    rewardToken?: Resolver<Maybe<ResolversTypes['RewardToken']>, ParentType, ContextType, RequireFields<QueryrewardTokenArgs, 'id' | 'subgraphError'>>;
    rewardTokens?: Resolver<Array<ResolversTypes['RewardToken']>, ParentType, ContextType, RequireFields<QueryrewardTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
    interestRate?: Resolver<Maybe<ResolversTypes['InterestRate']>, ParentType, ContextType, RequireFields<QueryinterestRateArgs, 'id' | 'subgraphError'>>;
    interestRates?: Resolver<Array<ResolversTypes['InterestRate']>, ParentType, ContextType, RequireFields<QueryinterestRatesArgs, 'skip' | 'first' | 'subgraphError'>>;
    fee?: Resolver<Maybe<ResolversTypes['Fee']>, ParentType, ContextType, RequireFields<QueryfeeArgs, 'id' | 'subgraphError'>>;
    fees?: Resolver<Array<ResolversTypes['Fee']>, ParentType, ContextType, RequireFields<QueryfeesArgs, 'skip' | 'first' | 'subgraphError'>>;
    revenueDetail?: Resolver<Maybe<ResolversTypes['RevenueDetail']>, ParentType, ContextType, RequireFields<QueryrevenueDetailArgs, 'id' | 'subgraphError'>>;
    revenueDetails?: Resolver<Array<ResolversTypes['RevenueDetail']>, ParentType, ContextType, RequireFields<QueryrevenueDetailsArgs, 'skip' | 'first' | 'subgraphError'>>;
    oracle?: Resolver<Maybe<ResolversTypes['Oracle']>, ParentType, ContextType, RequireFields<QueryoracleArgs, 'id' | 'subgraphError'>>;
    oracles?: Resolver<Array<ResolversTypes['Oracle']>, ParentType, ContextType, RequireFields<QueryoraclesArgs, 'skip' | 'first' | 'subgraphError'>>;
    lendingProtocol?: Resolver<Maybe<ResolversTypes['LendingProtocol']>, ParentType, ContextType, RequireFields<QuerylendingProtocolArgs, 'id' | 'subgraphError'>>;
    lendingProtocols?: Resolver<Array<ResolversTypes['LendingProtocol']>, ParentType, ContextType, RequireFields<QuerylendingProtocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
    marketList?: Resolver<Maybe<ResolversTypes['_MarketList']>, ParentType, ContextType, RequireFields<QuerymarketListArgs, 'id' | 'subgraphError'>>;
    marketLists?: Resolver<Array<ResolversTypes['_MarketList']>, ParentType, ContextType, RequireFields<QuerymarketListsArgs, 'skip' | 'first' | 'subgraphError'>>;
    usageMetricsDailySnapshot?: Resolver<Maybe<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsDailySnapshotArgs, 'id' | 'subgraphError'>>;
    usageMetricsDailySnapshots?: Resolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    usageMetricsHourlySnapshot?: Resolver<Maybe<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsHourlySnapshotArgs, 'id' | 'subgraphError'>>;
    usageMetricsHourlySnapshots?: Resolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, ParentType, ContextType, RequireFields<QueryusageMetricsHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    financialsDailySnapshot?: Resolver<Maybe<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryfinancialsDailySnapshotArgs, 'id' | 'subgraphError'>>;
    financialsDailySnapshots?: Resolver<Array<ResolversTypes['FinancialsDailySnapshot']>, ParentType, ContextType, RequireFields<QueryfinancialsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    market?: Resolver<Maybe<ResolversTypes['Market']>, ParentType, ContextType, RequireFields<QuerymarketArgs, 'id' | 'subgraphError'>>;
    markets?: Resolver<Array<ResolversTypes['Market']>, ParentType, ContextType, RequireFields<QuerymarketsArgs, 'skip' | 'first' | 'subgraphError'>>;
    marketDailySnapshot?: Resolver<Maybe<ResolversTypes['MarketDailySnapshot']>, ParentType, ContextType, RequireFields<QuerymarketDailySnapshotArgs, 'id' | 'subgraphError'>>;
    marketDailySnapshots?: Resolver<Array<ResolversTypes['MarketDailySnapshot']>, ParentType, ContextType, RequireFields<QuerymarketDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    marketHourlySnapshot?: Resolver<Maybe<ResolversTypes['MarketHourlySnapshot']>, ParentType, ContextType, RequireFields<QuerymarketHourlySnapshotArgs, 'id' | 'subgraphError'>>;
    marketHourlySnapshots?: Resolver<Array<ResolversTypes['MarketHourlySnapshot']>, ParentType, ContextType, RequireFields<QuerymarketHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
    accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    position?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QuerypositionArgs, 'id' | 'subgraphError'>>;
    positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QuerypositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
    positionSnapshot?: Resolver<Maybe<ResolversTypes['PositionSnapshot']>, ParentType, ContextType, RequireFields<QuerypositionSnapshotArgs, 'id' | 'subgraphError'>>;
    positionSnapshots?: Resolver<Array<ResolversTypes['PositionSnapshot']>, ParentType, ContextType, RequireFields<QuerypositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    activeAccount?: Resolver<Maybe<ResolversTypes['_ActiveAccount']>, ParentType, ContextType, RequireFields<QueryactiveAccountArgs, 'id' | 'subgraphError'>>;
    activeAccounts?: Resolver<Array<ResolversTypes['_ActiveAccount']>, ParentType, ContextType, RequireFields<QueryactiveAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    positionCounter?: Resolver<Maybe<ResolversTypes['_PositionCounter']>, ParentType, ContextType, RequireFields<QuerypositionCounterArgs, 'id' | 'subgraphError'>>;
    positionCounters?: Resolver<Array<ResolversTypes['_PositionCounter']>, ParentType, ContextType, RequireFields<QuerypositionCountersArgs, 'skip' | 'first' | 'subgraphError'>>;
    deposit?: Resolver<Maybe<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositArgs, 'id' | 'subgraphError'>>;
    deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<QuerydepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
    withdraw?: Resolver<Maybe<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawArgs, 'id' | 'subgraphError'>>;
    withdraws?: Resolver<Array<ResolversTypes['Withdraw']>, ParentType, ContextType, RequireFields<QuerywithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
    borrow?: Resolver<Maybe<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<QueryborrowArgs, 'id' | 'subgraphError'>>;
    borrows?: Resolver<Array<ResolversTypes['Borrow']>, ParentType, ContextType, RequireFields<QueryborrowsArgs, 'skip' | 'first' | 'subgraphError'>>;
    repay?: Resolver<Maybe<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<QueryrepayArgs, 'id' | 'subgraphError'>>;
    repays?: Resolver<Array<ResolversTypes['Repay']>, ParentType, ContextType, RequireFields<QueryrepaysArgs, 'skip' | 'first' | 'subgraphError'>>;
    liquidate?: Resolver<Maybe<ResolversTypes['Liquidate']>, ParentType, ContextType, RequireFields<QueryliquidateArgs, 'id' | 'subgraphError'>>;
    liquidates?: Resolver<Array<ResolversTypes['Liquidate']>, ParentType, ContextType, RequireFields<QueryliquidatesArgs, 'skip' | 'first' | 'subgraphError'>>;
    transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransferArgs, 'id' | 'subgraphError'>>;
    transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
    flashloan?: Resolver<Maybe<ResolversTypes['Flashloan']>, ParentType, ContextType, RequireFields<QueryflashloanArgs, 'id' | 'subgraphError'>>;
    flashloans?: Resolver<Array<ResolversTypes['Flashloan']>, ParentType, ContextType, RequireFields<QueryflashloansArgs, 'skip' | 'first' | 'subgraphError'>>;
    defaultOracle?: Resolver<Maybe<ResolversTypes['_DefaultOracle']>, ParentType, ContextType, RequireFields<QuerydefaultOracleArgs, 'id' | 'subgraphError'>>;
    defaultOracles?: Resolver<Array<ResolversTypes['_DefaultOracle']>, ParentType, ContextType, RequireFields<QuerydefaultOraclesArgs, 'skip' | 'first' | 'subgraphError'>>;
    flashLoanPremium?: Resolver<Maybe<ResolversTypes['_FlashLoanPremium']>, ParentType, ContextType, RequireFields<QueryflashLoanPremiumArgs, 'id' | 'subgraphError'>>;
    flashLoanPremiums?: Resolver<Array<ResolversTypes['_FlashLoanPremium']>, ParentType, ContextType, RequireFields<QueryflashLoanPremiumsArgs, 'skip' | 'first' | 'subgraphError'>>;
    protocol?: Resolver<Maybe<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolArgs, 'id' | 'subgraphError'>>;
    protocols?: Resolver<Array<ResolversTypes['Protocol']>, ParentType, ContextType, RequireFields<QueryprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
    event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryeventArgs, 'id' | 'subgraphError'>>;
    events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryeventsArgs, 'skip' | 'first' | 'subgraphError'>>;
    _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;
export type RepayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Repay'] = ResolversParentTypes['Repay']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasUsed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    accountActor?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
    market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
    position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
    asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type RevenueDetailResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RevenueDetail'] = ResolversParentTypes['RevenueDetail']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    sources?: Resolver<Array<ResolversTypes['Fee']>, ParentType, ContextType, RequireFields<RevenueDetailsourcesArgs, 'skip' | 'first'>>;
    amountsUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type RewardTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RewardToken'] = ResolversParentTypes['RewardToken']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    type?: Resolver<ResolversTypes['RewardTokenType'], ParentType, ContextType>;
    _distributionEnd?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
    token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
    tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
    rewardToken?: SubscriptionResolver<Maybe<ResolversTypes['RewardToken']>, "rewardToken", ParentType, ContextType, RequireFields<SubscriptionrewardTokenArgs, 'id' | 'subgraphError'>>;
    rewardTokens?: SubscriptionResolver<Array<ResolversTypes['RewardToken']>, "rewardTokens", ParentType, ContextType, RequireFields<SubscriptionrewardTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
    interestRate?: SubscriptionResolver<Maybe<ResolversTypes['InterestRate']>, "interestRate", ParentType, ContextType, RequireFields<SubscriptioninterestRateArgs, 'id' | 'subgraphError'>>;
    interestRates?: SubscriptionResolver<Array<ResolversTypes['InterestRate']>, "interestRates", ParentType, ContextType, RequireFields<SubscriptioninterestRatesArgs, 'skip' | 'first' | 'subgraphError'>>;
    fee?: SubscriptionResolver<Maybe<ResolversTypes['Fee']>, "fee", ParentType, ContextType, RequireFields<SubscriptionfeeArgs, 'id' | 'subgraphError'>>;
    fees?: SubscriptionResolver<Array<ResolversTypes['Fee']>, "fees", ParentType, ContextType, RequireFields<SubscriptionfeesArgs, 'skip' | 'first' | 'subgraphError'>>;
    revenueDetail?: SubscriptionResolver<Maybe<ResolversTypes['RevenueDetail']>, "revenueDetail", ParentType, ContextType, RequireFields<SubscriptionrevenueDetailArgs, 'id' | 'subgraphError'>>;
    revenueDetails?: SubscriptionResolver<Array<ResolversTypes['RevenueDetail']>, "revenueDetails", ParentType, ContextType, RequireFields<SubscriptionrevenueDetailsArgs, 'skip' | 'first' | 'subgraphError'>>;
    oracle?: SubscriptionResolver<Maybe<ResolversTypes['Oracle']>, "oracle", ParentType, ContextType, RequireFields<SubscriptionoracleArgs, 'id' | 'subgraphError'>>;
    oracles?: SubscriptionResolver<Array<ResolversTypes['Oracle']>, "oracles", ParentType, ContextType, RequireFields<SubscriptionoraclesArgs, 'skip' | 'first' | 'subgraphError'>>;
    lendingProtocol?: SubscriptionResolver<Maybe<ResolversTypes['LendingProtocol']>, "lendingProtocol", ParentType, ContextType, RequireFields<SubscriptionlendingProtocolArgs, 'id' | 'subgraphError'>>;
    lendingProtocols?: SubscriptionResolver<Array<ResolversTypes['LendingProtocol']>, "lendingProtocols", ParentType, ContextType, RequireFields<SubscriptionlendingProtocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
    marketList?: SubscriptionResolver<Maybe<ResolversTypes['_MarketList']>, "marketList", ParentType, ContextType, RequireFields<SubscriptionmarketListArgs, 'id' | 'subgraphError'>>;
    marketLists?: SubscriptionResolver<Array<ResolversTypes['_MarketList']>, "marketLists", ParentType, ContextType, RequireFields<SubscriptionmarketListsArgs, 'skip' | 'first' | 'subgraphError'>>;
    usageMetricsDailySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['UsageMetricsDailySnapshot']>, "usageMetricsDailySnapshot", ParentType, ContextType, RequireFields<SubscriptionusageMetricsDailySnapshotArgs, 'id' | 'subgraphError'>>;
    usageMetricsDailySnapshots?: SubscriptionResolver<Array<ResolversTypes['UsageMetricsDailySnapshot']>, "usageMetricsDailySnapshots", ParentType, ContextType, RequireFields<SubscriptionusageMetricsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    usageMetricsHourlySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['UsageMetricsHourlySnapshot']>, "usageMetricsHourlySnapshot", ParentType, ContextType, RequireFields<SubscriptionusageMetricsHourlySnapshotArgs, 'id' | 'subgraphError'>>;
    usageMetricsHourlySnapshots?: SubscriptionResolver<Array<ResolversTypes['UsageMetricsHourlySnapshot']>, "usageMetricsHourlySnapshots", ParentType, ContextType, RequireFields<SubscriptionusageMetricsHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    financialsDailySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['FinancialsDailySnapshot']>, "financialsDailySnapshot", ParentType, ContextType, RequireFields<SubscriptionfinancialsDailySnapshotArgs, 'id' | 'subgraphError'>>;
    financialsDailySnapshots?: SubscriptionResolver<Array<ResolversTypes['FinancialsDailySnapshot']>, "financialsDailySnapshots", ParentType, ContextType, RequireFields<SubscriptionfinancialsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    market?: SubscriptionResolver<Maybe<ResolversTypes['Market']>, "market", ParentType, ContextType, RequireFields<SubscriptionmarketArgs, 'id' | 'subgraphError'>>;
    markets?: SubscriptionResolver<Array<ResolversTypes['Market']>, "markets", ParentType, ContextType, RequireFields<SubscriptionmarketsArgs, 'skip' | 'first' | 'subgraphError'>>;
    marketDailySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['MarketDailySnapshot']>, "marketDailySnapshot", ParentType, ContextType, RequireFields<SubscriptionmarketDailySnapshotArgs, 'id' | 'subgraphError'>>;
    marketDailySnapshots?: SubscriptionResolver<Array<ResolversTypes['MarketDailySnapshot']>, "marketDailySnapshots", ParentType, ContextType, RequireFields<SubscriptionmarketDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    marketHourlySnapshot?: SubscriptionResolver<Maybe<ResolversTypes['MarketHourlySnapshot']>, "marketHourlySnapshot", ParentType, ContextType, RequireFields<SubscriptionmarketHourlySnapshotArgs, 'id' | 'subgraphError'>>;
    marketHourlySnapshots?: SubscriptionResolver<Array<ResolversTypes['MarketHourlySnapshot']>, "marketHourlySnapshots", ParentType, ContextType, RequireFields<SubscriptionmarketHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
    accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    position?: SubscriptionResolver<Maybe<ResolversTypes['Position']>, "position", ParentType, ContextType, RequireFields<SubscriptionpositionArgs, 'id' | 'subgraphError'>>;
    positions?: SubscriptionResolver<Array<ResolversTypes['Position']>, "positions", ParentType, ContextType, RequireFields<SubscriptionpositionsArgs, 'skip' | 'first' | 'subgraphError'>>;
    positionSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['PositionSnapshot']>, "positionSnapshot", ParentType, ContextType, RequireFields<SubscriptionpositionSnapshotArgs, 'id' | 'subgraphError'>>;
    positionSnapshots?: SubscriptionResolver<Array<ResolversTypes['PositionSnapshot']>, "positionSnapshots", ParentType, ContextType, RequireFields<SubscriptionpositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>>;
    activeAccount?: SubscriptionResolver<Maybe<ResolversTypes['_ActiveAccount']>, "activeAccount", ParentType, ContextType, RequireFields<SubscriptionactiveAccountArgs, 'id' | 'subgraphError'>>;
    activeAccounts?: SubscriptionResolver<Array<ResolversTypes['_ActiveAccount']>, "activeAccounts", ParentType, ContextType, RequireFields<SubscriptionactiveAccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
    positionCounter?: SubscriptionResolver<Maybe<ResolversTypes['_PositionCounter']>, "positionCounter", ParentType, ContextType, RequireFields<SubscriptionpositionCounterArgs, 'id' | 'subgraphError'>>;
    positionCounters?: SubscriptionResolver<Array<ResolversTypes['_PositionCounter']>, "positionCounters", ParentType, ContextType, RequireFields<SubscriptionpositionCountersArgs, 'skip' | 'first' | 'subgraphError'>>;
    deposit?: SubscriptionResolver<Maybe<ResolversTypes['Deposit']>, "deposit", ParentType, ContextType, RequireFields<SubscriptiondepositArgs, 'id' | 'subgraphError'>>;
    deposits?: SubscriptionResolver<Array<ResolversTypes['Deposit']>, "deposits", ParentType, ContextType, RequireFields<SubscriptiondepositsArgs, 'skip' | 'first' | 'subgraphError'>>;
    withdraw?: SubscriptionResolver<Maybe<ResolversTypes['Withdraw']>, "withdraw", ParentType, ContextType, RequireFields<SubscriptionwithdrawArgs, 'id' | 'subgraphError'>>;
    withdraws?: SubscriptionResolver<Array<ResolversTypes['Withdraw']>, "withdraws", ParentType, ContextType, RequireFields<SubscriptionwithdrawsArgs, 'skip' | 'first' | 'subgraphError'>>;
    borrow?: SubscriptionResolver<Maybe<ResolversTypes['Borrow']>, "borrow", ParentType, ContextType, RequireFields<SubscriptionborrowArgs, 'id' | 'subgraphError'>>;
    borrows?: SubscriptionResolver<Array<ResolversTypes['Borrow']>, "borrows", ParentType, ContextType, RequireFields<SubscriptionborrowsArgs, 'skip' | 'first' | 'subgraphError'>>;
    repay?: SubscriptionResolver<Maybe<ResolversTypes['Repay']>, "repay", ParentType, ContextType, RequireFields<SubscriptionrepayArgs, 'id' | 'subgraphError'>>;
    repays?: SubscriptionResolver<Array<ResolversTypes['Repay']>, "repays", ParentType, ContextType, RequireFields<SubscriptionrepaysArgs, 'skip' | 'first' | 'subgraphError'>>;
    liquidate?: SubscriptionResolver<Maybe<ResolversTypes['Liquidate']>, "liquidate", ParentType, ContextType, RequireFields<SubscriptionliquidateArgs, 'id' | 'subgraphError'>>;
    liquidates?: SubscriptionResolver<Array<ResolversTypes['Liquidate']>, "liquidates", ParentType, ContextType, RequireFields<SubscriptionliquidatesArgs, 'skip' | 'first' | 'subgraphError'>>;
    transfer?: SubscriptionResolver<Maybe<ResolversTypes['Transfer']>, "transfer", ParentType, ContextType, RequireFields<SubscriptiontransferArgs, 'id' | 'subgraphError'>>;
    transfers?: SubscriptionResolver<Array<ResolversTypes['Transfer']>, "transfers", ParentType, ContextType, RequireFields<SubscriptiontransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
    flashloan?: SubscriptionResolver<Maybe<ResolversTypes['Flashloan']>, "flashloan", ParentType, ContextType, RequireFields<SubscriptionflashloanArgs, 'id' | 'subgraphError'>>;
    flashloans?: SubscriptionResolver<Array<ResolversTypes['Flashloan']>, "flashloans", ParentType, ContextType, RequireFields<SubscriptionflashloansArgs, 'skip' | 'first' | 'subgraphError'>>;
    defaultOracle?: SubscriptionResolver<Maybe<ResolversTypes['_DefaultOracle']>, "defaultOracle", ParentType, ContextType, RequireFields<SubscriptiondefaultOracleArgs, 'id' | 'subgraphError'>>;
    defaultOracles?: SubscriptionResolver<Array<ResolversTypes['_DefaultOracle']>, "defaultOracles", ParentType, ContextType, RequireFields<SubscriptiondefaultOraclesArgs, 'skip' | 'first' | 'subgraphError'>>;
    flashLoanPremium?: SubscriptionResolver<Maybe<ResolversTypes['_FlashLoanPremium']>, "flashLoanPremium", ParentType, ContextType, RequireFields<SubscriptionflashLoanPremiumArgs, 'id' | 'subgraphError'>>;
    flashLoanPremiums?: SubscriptionResolver<Array<ResolversTypes['_FlashLoanPremium']>, "flashLoanPremiums", ParentType, ContextType, RequireFields<SubscriptionflashLoanPremiumsArgs, 'skip' | 'first' | 'subgraphError'>>;
    protocol?: SubscriptionResolver<Maybe<ResolversTypes['Protocol']>, "protocol", ParentType, ContextType, RequireFields<SubscriptionprotocolArgs, 'id' | 'subgraphError'>>;
    protocols?: SubscriptionResolver<Array<ResolversTypes['Protocol']>, "protocols", ParentType, ContextType, RequireFields<SubscriptionprotocolsArgs, 'skip' | 'first' | 'subgraphError'>>;
    event?: SubscriptionResolver<Maybe<ResolversTypes['Event']>, "event", ParentType, ContextType, RequireFields<SubscriptioneventArgs, 'id' | 'subgraphError'>>;
    events?: SubscriptionResolver<Array<ResolversTypes['Event']>, "events", ParentType, ContextType, RequireFields<SubscriptioneventsArgs, 'skip' | 'first' | 'subgraphError'>>;
    _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;
export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    lastPriceUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
    lastPriceBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['TokenType']>, ParentType, ContextType>;
    _market?: Resolver<Maybe<ResolversTypes['Market']>, ParentType, ContextType>;
    _iavsTokenType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type TransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasUsed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    sender?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    receiver?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<TransferpositionsArgs, 'skip' | 'first'>>;
    market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
    asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UsageMetricsDailySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsageMetricsDailySnapshot'] = ResolversParentTypes['UsageMetricsDailySnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    days?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
    dailyActiveUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyActiveDepositors?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueDepositors?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyActiveBorrowers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueBorrowers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyActiveLiquidators?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueLiquidators?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyActiveLiquidatees?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueLiquidatees?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyBorrowCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyRepayCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyLiquidateCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyTransferCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyFlashloanCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativePositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    openPositionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    dailyActivePositions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    totalPoolCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type UsageMetricsHourlySnapshotResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsageMetricsHourlySnapshot'] = ResolversParentTypes['UsageMetricsHourlySnapshot']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hours?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    protocol?: Resolver<ResolversTypes['LendingProtocol'], ParentType, ContextType>;
    hourlyActiveUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hourlyTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hourlyDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hourlyWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hourlyBorrowCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hourlyRepayCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    hourlyLiquidateCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type WithdrawResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Withdraw'] = ResolversParentTypes['Withdraw']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasUsed?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
    accountActor?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
    market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>;
    position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
    asset?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
    amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _ActiveAccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_ActiveAccount'] = ResolversParentTypes['_ActiveAccount']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
    hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _DefaultOracleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_DefaultOracle'] = ResolversParentTypes['_DefaultOracle']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    oracle?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _FlashLoanPremiumResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_FlashLoanPremium'] = ResolversParentTypes['_FlashLoanPremium']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    premiumRateTotal?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    premiumRateToProtocol?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _MarketListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_MarketList'] = ResolversParentTypes['_MarketList']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    markets?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
    block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
    deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _PositionCounterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_PositionCounter'] = ResolversParentTypes['_PositionCounter']> = ResolversObject<{
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    nextCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    lastTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type Resolvers<ContextType = MeshContext> = ResolversObject<{
    Account?: AccountResolvers<ContextType>;
    BigDecimal?: GraphQLScalarType;
    BigInt?: GraphQLScalarType;
    Borrow?: BorrowResolvers<ContextType>;
    Bytes?: GraphQLScalarType;
    Deposit?: DepositResolvers<ContextType>;
    Event?: EventResolvers<ContextType>;
    Fee?: FeeResolvers<ContextType>;
    FinancialsDailySnapshot?: FinancialsDailySnapshotResolvers<ContextType>;
    Flashloan?: FlashloanResolvers<ContextType>;
    Int8?: GraphQLScalarType;
    InterestRate?: InterestRateResolvers<ContextType>;
    LendingProtocol?: LendingProtocolResolvers<ContextType>;
    Liquidate?: LiquidateResolvers<ContextType>;
    Market?: MarketResolvers<ContextType>;
    MarketDailySnapshot?: MarketDailySnapshotResolvers<ContextType>;
    MarketHourlySnapshot?: MarketHourlySnapshotResolvers<ContextType>;
    Oracle?: OracleResolvers<ContextType>;
    Position?: PositionResolvers<ContextType>;
    PositionSnapshot?: PositionSnapshotResolvers<ContextType>;
    Protocol?: ProtocolResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    Repay?: RepayResolvers<ContextType>;
    RevenueDetail?: RevenueDetailResolvers<ContextType>;
    RewardToken?: RewardTokenResolvers<ContextType>;
    Subscription?: SubscriptionResolvers<ContextType>;
    Token?: TokenResolvers<ContextType>;
    Transfer?: TransferResolvers<ContextType>;
    UsageMetricsDailySnapshot?: UsageMetricsDailySnapshotResolvers<ContextType>;
    UsageMetricsHourlySnapshot?: UsageMetricsHourlySnapshotResolvers<ContextType>;
    Withdraw?: WithdrawResolvers<ContextType>;
    _ActiveAccount?: _ActiveAccountResolvers<ContextType>;
    _Block_?: _Block_Resolvers<ContextType>;
    _DefaultOracle?: _DefaultOracleResolvers<ContextType>;
    _FlashLoanPremium?: _FlashLoanPremiumResolvers<ContextType>;
    _MarketList?: _MarketListResolvers<ContextType>;
    _Meta_?: _Meta_Resolvers<ContextType>;
    _PositionCounter?: _PositionCounterResolvers<ContextType>;
}>;
export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
    entity?: entityDirectiveResolver<any, any, ContextType>;
    subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
    derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;
export type MeshContext = EthereumPrimaryTypes.Context & BaseMeshContext;
export declare const rawServeConfig: YamlConfig.Config['serve'];
export declare function getMeshOptions(): Promise<GetMeshOptions>;
export declare function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext>;
export declare function getBuiltGraphClient(): Promise<MeshInstance>;
export declare const execute: ExecuteMeshFn;
export declare const subscribe: SubscribeMeshFn;
