import { User } from '@prisma/client';

export interface IRequest extends Request {
  user: User;
}
