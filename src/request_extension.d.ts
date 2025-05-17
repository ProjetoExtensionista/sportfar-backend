import { User } from './domain/entities/User';

declare namespace Express {
  export interface Request {
    user: User;
  }
}
