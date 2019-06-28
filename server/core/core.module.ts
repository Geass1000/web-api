import * as Nest from '@nestjs/common';

import { CacheModule } from './cache/cache.module';

const nestCacheModule = Nest.CacheModule.register({
  ttl: 0, max: 0,
});

@Nest.Global()
@Nest.Module({
  imports: [
    nestCacheModule,
    CacheModule,
  ],
  exports: [
    nestCacheModule
  ],
})
export class CoreModule {}
