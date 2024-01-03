import { User } from '@prisma/client';

export interface IRequest extends Request {
  user: User;
}

export type IBody<TBody> = TBody & {
  boardId: string;
};
