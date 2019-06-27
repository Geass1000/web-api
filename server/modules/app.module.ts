import { ApiModule } from './api/api.module';
import { AngularUniversalModule } from './angular-universal/angular-universal.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ApiModule,
    AngularUniversalModule.forRoot(),
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {}
