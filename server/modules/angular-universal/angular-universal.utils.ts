import { HttpAdapterHost } from '@nestjs/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as Interfaces from './angular-universal.interfaces';
import * as express from 'express';

export class AngularUniversalUtils {
  public static setupUniversal(
      httpAdapterHost: HttpAdapterHost,
      ngOptions: Interfaces.AngularUniversal.Options) {
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
  }
}

