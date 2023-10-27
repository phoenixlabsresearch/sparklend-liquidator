"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribe = exports.execute = exports.getBuiltGraphClient = exports.createBuiltMeshHTTPHandler = exports.getMeshOptions = exports.rawServeConfig = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("@graphql-mesh/utils");
const utils_2 = require("@graphql-mesh/utils");
const cache_localforage_1 = tslib_1.__importDefault(require("@graphql-mesh/cache-localforage"));
const fetch_1 = require("@whatwg-node/fetch");
const graphql_1 = tslib_1.__importDefault(require("@graphql-mesh/graphql"));
const transform_prefix_1 = tslib_1.__importDefault(require("@graphql-mesh/transform-prefix"));
const client_block_tracking_1 = tslib_1.__importDefault(require("@graphprotocol/client-block-tracking"));
const merger_stitching_1 = tslib_1.__importDefault(require("@graphql-mesh/merger-stitching"));
const http_1 = require("@graphql-mesh/http");
const runtime_1 = require("@graphql-mesh/runtime");
const store_1 = require("@graphql-mesh/store");
const cross_helpers_1 = require("@graphql-mesh/cross-helpers");
const importedModule$0 = tslib_1.__importStar(require("./sources/gnosisPrimary/introspectionSchema.json"));
const importedModule$1 = tslib_1.__importStar(require("./sources/ethereumPrimary/introspectionSchema.json"));
const baseDir = cross_helpers_1.path.join(typeof __dirname === 'string' ? __dirname : '/', '..');
const importFn = (moduleId) => {
    const relativeModuleId = (cross_helpers_1.path.isAbsolute(moduleId) ? cross_helpers_1.path.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".graphclient/sources/gnosisPrimary/introspectionSchema.json":
            return Promise.resolve(importedModule$0);
        case ".graphclient/sources/ethereumPrimary/introspectionSchema.json":
            return Promise.resolve(importedModule$1);
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new store_1.MeshStore('.graphclient', new store_1.FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "json",
}), {
    readonly: true,
    validate: false
});
exports.rawServeConfig = undefined;
async function getMeshOptions() {
    const pubsub = new utils_1.PubSub();
    const sourcesStore = rootStore.child('sources');
    const logger = new utils_2.DefaultLogger("GraphClient");
    const cache = new cache_localforage_1.default({
        ...{},
        importFn,
        store: rootStore.child('cache'),
        pubsub,
        logger,
    });
    const sources = [];
    const transforms = [];
    const additionalEnvelopPlugins = [];
    const ethereumPrimaryTransforms = [];
    const gnosisPrimaryTransforms = [];
    const additionalTypeDefs = [];
    const ethereumPrimaryHandler = new graphql_1.default({
        name: "ethereumPrimary",
        config: { "endpoint": "https://api.thegraph.com/subgraphs/name/messari/spark-lend-ethereum" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("ethereumPrimary"),
        logger: logger.child("ethereumPrimary"),
        importFn,
    });
    const gnosisPrimaryHandler = new graphql_1.default({
        name: "gnosisPrimary",
        config: { "endpoint": "https://api.thegraph.com/subgraphs/name/messari/spark-lend-gnosis" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("gnosisPrimary"),
        logger: logger.child("gnosisPrimary"),
        importFn,
    });
    ethereumPrimaryTransforms[0] = new transform_prefix_1.default({
        apiName: "ethereumPrimary",
        config: { "value": "ethereumPrimary", "includeRootOperations": true },
        baseDir,
        cache,
        pubsub,
        importFn,
        logger,
    });
    gnosisPrimaryTransforms[0] = new transform_prefix_1.default({
        apiName: "gnosisPrimary",
        config: { "value": "gnosisPrimary", "includeRootOperations": true },
        baseDir,
        cache,
        pubsub,
        importFn,
        logger,
    });
    ethereumPrimaryTransforms[1] = new client_block_tracking_1.default({
        apiName: "ethereumPrimary",
        config: { "validateSchema": true },
        baseDir,
        cache,
        pubsub,
        importFn,
        logger,
    });
    gnosisPrimaryTransforms[1] = new client_block_tracking_1.default({
        apiName: "gnosisPrimary",
        config: { "validateSchema": true },
        baseDir,
        cache,
        pubsub,
        importFn,
        logger,
    });
    sources[0] = {
        name: 'ethereumPrimary',
        handler: ethereumPrimaryHandler,
        transforms: ethereumPrimaryTransforms
    };
    sources[1] = {
        name: 'gnosisPrimary',
        handler: gnosisPrimaryHandler,
        transforms: gnosisPrimaryTransforms
    };
    const additionalResolvers = [];
    const merger = new merger_stitching_1.default({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
    });
    return {
        sources,
        transforms,
        additionalTypeDefs,
        additionalResolvers,
        cache,
        pubsub,
        merger,
        logger,
        additionalEnvelopPlugins,
        get documents() {
            return [];
        },
        fetchFn: fetch_1.fetch,
    };
}
exports.getMeshOptions = getMeshOptions;
function createBuiltMeshHTTPHandler() {
    return (0, http_1.createMeshHTTPHandler)({
        baseDir,
        getBuiltMesh: getBuiltGraphClient,
        rawServeConfig: undefined,
    });
}
exports.createBuiltMeshHTTPHandler = createBuiltMeshHTTPHandler;
let meshInstance$;
function getBuiltGraphClient() {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions().then(meshOptions => (0, runtime_1.getMesh)(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
exports.getBuiltGraphClient = getBuiltGraphClient;
const execute = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));
exports.execute = execute;
const subscribe = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
exports.subscribe = subscribe;
