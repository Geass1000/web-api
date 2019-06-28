import * as Nest from '@nestjs/common';

import { CacheKey } from './cache.interfaces';
import { CacheByKeyInterceptor } from './cache-by-key.interceptor';
import { ReflectMetadata } from './cache.constants';

export const UseCache = (cacheKey: CacheKey): ((target: object, key?: any, descriptor?: any) => any) => {
  return (target, key, descriptor) => {
    Nest.SetMetadata(ReflectMetadata.Cache.Key, cacheKey)(target, key, descriptor);
    return Nest.UseInterceptors(CacheByKeyInterceptor)(target, key, descriptor);
  };
};
