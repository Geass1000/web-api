import * as Enums from '../shared/enums';
import * as Constants from '../constants';
import * as Interfaces from '../interfaces/environment.interfaces';

export const environment: Interfaces.Environment = {
  mode: Enums.Environment.Production,
  port: +process.env.PORT || Constants.Default.Port,
  nats: {
    url: process.env.NATS_URL || Constants.Default.Nats.Url,
  },
};
