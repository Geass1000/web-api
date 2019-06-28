import { HttpAdapterHost } from '@nestjs/core';

import * as Constants from './angular-universal.constants';
import * as Interfaces from './angular-universal.interfaces';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';

export const angularUniversalProviders = [
  {
    provide: Constants.DI.Initializer,
    useFactory: (
        httpAdapterHost: HttpAdapterHost,
        ngOptions: Interfaces.AngularUniversal.Options) => {
      const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = ngOptions.bundle;
      const httpAdapter = httpAdapterHost.httpAdapter;
      const instance: express.Application = httpAdapter.getInstance();

      instance.set('view engine', 'html');
      instance.set('views', ngOptions.viewsPath);
      instance.engine('html', <any>ngExpressEngine({
        bootstrap: AppServerModuleNgFactory,
        providers: [
          provideModuleMap(LAZY_MODULE_MAP),
        ],
      }));

      instance.get('*.*', express.static(ngOptions.viewsPath));
    },
    inject: [
      HttpAdapterHost,
      Constants.DI.Options,
    ],
  }
];
