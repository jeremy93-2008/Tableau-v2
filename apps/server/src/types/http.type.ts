import { User } from '@prisma/client';

export interface IRequest extends Request {
  user: User;
}

export type IMinimalBodyPermission<TBody> = TBody & {
  boardId: string;
};
