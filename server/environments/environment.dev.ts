import * as Enums from '../shared/enums';
import * as Constants from '../constants';
import * as Interfaces from '../interfaces/environment.interfaces';

export const environment: Interfaces.Environment = {
  mode: Enums.Environment.Development,
  port: Constants.Default.Port,
  nats: {
    url: Constants.Default.Nats.Url,
  },
};
