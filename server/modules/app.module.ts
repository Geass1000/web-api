import { Module } from '@nestjs/common';

import { CoreModule } from './../core/core.module';
import { ApiModule } from './api/api.module';
import { AngularUniversalModule } from './angular-universal/angular-universal.module';

@Module({
  imports: [
    CoreModule,
    ApiModule,
    AngularUniversalModule.forRoot(),
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {}
