/// <reference types="node" />
import EventEmitter from 'events';
import * as sinon from 'sinon';
import { type ClientConfigurationInput } from '../../src/types';
export declare const createPool: (clientConfiguration?: ClientConfigurationInput) => Promise<{
    connection: {
        connection: {
            slonik: {
                connectionId: string;
                mock: boolean;
                poolId: string;
                transactionDepth: null;
            };
        };
        emit: (eventName: string | symbol, ...args: any[]) => boolean;
        end: () => void;
        off: (eventName: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
        on: (eventName: string | symbol, listener: (...args: any[]) => void) => EventEmitter;
        query: () => {};
        release: () => void;
    };
    connectSpy: sinon.SinonSpy<any[], any>;
    endSpy: sinon.SinonSpy<any[], any>;
    querySpy: sinon.SinonStub<any[], any>;
    releaseSpy: sinon.SinonSpy<any[], any>;
    removeSpy: sinon.SinonSpy<any[], any>;
    any: import("../../src/types").QueryAnyFunction;
    anyFirst: import("../../src/types").QueryAnyFirstFunction;
    exists: import("../../src/types").QueryExistsFunction;
    many: import("../../src/types").QueryManyFunction;
    manyFirst: import("../../src/types").QueryManyFirstFunction;
    maybeOne: import("../../src/types").QueryMaybeOneFunction;
    maybeOneFirst: import("../../src/types").QueryMaybeOneFirstFunction;
    one: import("../../src/types").QueryOneFunction;
    oneFirst: import("../../src/types").QueryOneFirstFunction;
    query: import("../../src/types").QueryFunction;
    transaction: <T>(handler: import("../../src/types").TransactionFunction<T>, transactionRetryLimit?: number | undefined) => Promise<T>;
    configuration: import("../../src/types").ClientConfiguration;
    connect: <T_1>(connectionRoutine: import("../../src/types").ConnectionRoutine<T_1>) => Promise<T_1>;
    copyFromBinary: import("../../src/types").QueryCopyFromBinaryFunction;
    end: () => Promise<void>;
    getPoolState: () => import("../../src/types").PoolState;
    stream: import("../../src/types").StreamFunction;
}>;
