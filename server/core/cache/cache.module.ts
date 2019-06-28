import * as Nest from '@nestjs/common';

import { CacheService } from './cache.service';

@Nest.Module({
  providers: [
    CacheService,
  ],
  exports: [
    CacheService,
  ],
})
export class CacheModule {}
