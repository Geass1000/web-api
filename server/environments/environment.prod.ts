import * as Enums from '../shared/enums';
import * as Interfaces from '../interfaces/environment.interfaces';

export const environment: Interfaces.Environment = {
  mode: Enums.Environment.Production,
  port: +process.env.PORT || 4321,
};
