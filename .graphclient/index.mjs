import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';
import GraphqlHandler from "@graphql-mesh/graphql";
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { createMeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import * as importedModule$0 from "./sources/gnosisPrimary/introspectionSchema.json";
import * as importedModule$1 from "./sources/ethereumPrimary/introspectionSchema.json";
import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');
const importFn = (moduleId) => {
    const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".graphclient/sources/gnosisPrimary/introspectionSchema.json":
            return Promise.resolve(importedModule$0);
        case ".graphclient/sources/ethereumPrimary/introspectionSchema.json":
            return Promise.resolve(importedModule$1);
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "json",
}), {
    readonly: true,
    validate: false
});
export const rawServeConfig = undefined;
export async function getMeshOptions() {
    const pubsub = new PubSub();
    const sourcesStore = rootStore.child('sources');
    const logger = new DefaultLogger("GraphClient");
    const cache = new MeshCache({
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
    const ethereumPrimaryHandler = new GraphqlHandler({
        name: "ethereumPrimary",
        config: { "endpoint": "https://api.thegraph.com/subgraphs/name/messari/spark-lend-ethereum" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("ethereumPrimary"),
        logger: logger.child("ethereumPrimary"),
        importFn,
    });
    const gnosisPrimaryHandler = new GraphqlHandler({
        name: "gnosisPrimary",
        config: { "endpoint": "https://api.thegraph.com/subgraphs/name/messari/spark-lend-gnosis" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("gnosisPrimary"),
        logger: logger.child("gnosisPrimary"),
        importFn,
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
    const merger = new StitchingMerger({
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
        fetchFn,
    };
}
export function createBuiltMeshHTTPHandler() {
    return createMeshHTTPHandler({
        baseDir,
        getBuiltMesh: getBuiltGraphClient,
        rawServeConfig: undefined,
    });
}
let meshInstance$;
export function getBuiltGraphClient() {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
export const execute = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));
export const subscribe = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
