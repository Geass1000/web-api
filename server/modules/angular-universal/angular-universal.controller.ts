import { Controller, Get, Res, Req, Inject } from '@nestjs/common';
import { Response, Request } from 'express';
import { join } from 'path';

import * as Constants from './angular-universal.constants';
import * as Interfaces from './angular-universal.interfaces';

@Controller()
export class AngularUniversalController {
  constructor(
    @Inject(Constants.DI.AngularUniversal.Options)
    private readonly ngOptions: Interfaces.AngularUniversal.Options,
  ) {}

  @Get('*')
  render(@Res() res: Response, @Req() req: Request) {
    res.render(join(this.ngOptions.viewsPath, 'index.html'), { req });
  }
}
