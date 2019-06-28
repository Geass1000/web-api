import {
  Module, MiddlewareConsumer, DynamicModule, NestModule,
} from '@nestjs/common';

import * as Interfaces from './angular-universal.interfaces';
import * as Constants from './angular-universal.constants';

import { AngularUniversalController } from './angular-universal.controller';
import { angularUniversalProviders } from './angular-universal.providers';

import { Folder } from '../../../shared/constants';

@Module({
  controllers: [ AngularUniversalController ],
  providers: [ ...angularUniversalProviders ],
})
export class AngularUniversalModule implements NestModule {
  static forRoot(): DynamicModule {
    const options: Interfaces.AngularUniversal.Options = {
      viewsPath: Folder.Dist.Client.Browser,
      bundle: require('../../../dist/client-server/main.js')
    };

    return {
      module: AngularUniversalModule,
      providers: [
        {
          provide: Constants.DI.Options,
          useValue: options,
        }
      ]
    };
  }

  configure(consumer: MiddlewareConsumer): void {
  }
}
