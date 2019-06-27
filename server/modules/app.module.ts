import { AngularUniversalModule } from './angular-universal/angular-universal.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    AngularUniversalModule.forRoot(),
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {}
