import * as Enums from '../shared/enums';
import * as Interfaces from '../interfaces/environment.interfaces';

export const environment: Interfaces.Environment = {
  mode: Enums.Environment.Development,
  port: 4321,
  natsUrl: 'nats://localhost:4222',
};
