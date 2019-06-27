import { NestApplication, HttpAdapterHost } from '@nestjs/core';

import { AngularUniversalUtils } from './angular-universal.utils';
import * as Constants from './angular-universal.constants';
import * as Interfaces from './angular-universal.interfaces';

export const angularUniversalProviders = [
  {
    provide: Constants.DI.AngularUniversal.Initializer,
    useFactory: (
        httpAdapterHost: HttpAdapterHost,
        options: Interfaces.AngularUniversal.Options) => {
      return AngularUniversalUtils.setupUniversal(httpAdapterHost, options);
    },
    inject: [
      HttpAdapterHost,
      Constants.DI.AngularUniversal.Options,
    ],
  }
];
