import {
  Module,
  Inject,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DynamicModule, NestModule } from '@nestjs/common/interfaces';
import * as express from 'express';

import * as Interfaces from './angular-universal.interfaces';
import * as Constants from './angular-universal.constants';
import { AngularUniversalController } from './angular-universal.controller';
import { angularUniversalProviders } from './angular-universal.providers';
import { Folder } from '../../../shared/constants';
import { HttpAdapterHost } from '@nestjs/core';

@Module({
  controllers: [ AngularUniversalController ],
  providers: [ ...angularUniversalProviders ],
})
export class AngularUniversalModule implements NestModule {
  constructor(
    @Inject(Constants.DI.AngularUniversal.Options)
    private readonly ngOptions: Interfaces.AngularUniversal.Options,
    readonly httpAdapterHost: HttpAdapterHost
  ) {
    const httpAdapter = httpAdapterHost.httpAdapter;
    const serverRef = httpAdapter.getInstance();
    serverRef.get('*.*', express.static(this.ngOptions.viewsPath));
  }

  static forRoot(): DynamicModule {
    const options: Interfaces.AngularUniversal.Options = {
      viewsPath: Folder.Dist.Client.Browser,
      bundle: require('../../../dist/client-server/main.js')
    };

    return {
      module: AngularUniversalModule,
      providers: [
        {
          provide: Constants.DI.AngularUniversal.Options,
          useValue: options,
        }
      ]
    };
  }

  configure(consumer: MiddlewareConsumer): void {
    // consumer
    //   .apply(express.static(this.ngOptions.viewsPath))
    //   .forRoutes('*.*');
  }
}
