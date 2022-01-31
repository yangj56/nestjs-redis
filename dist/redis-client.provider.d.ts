import * as Redis from 'ioredis';
import { Provider } from '@nestjs/common';
import { RedisModuleAsyncOptions } from './redis.interface';
export declare class RedisClientError extends Error {
}
export interface RedisClient {
    defaultKey: string;
    clients: Map<string, Redis.Redis>;
    size: number;
}
export declare const createClient: () => Provider;
export declare const createAsyncClientOptions: (options: RedisModuleAsyncOptions) => Provider;
