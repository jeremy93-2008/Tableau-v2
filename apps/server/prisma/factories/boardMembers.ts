import { createId } from '@paralleldrive/cuid2';
import { BoardMember } from '@prisma/client';

import { users } from './users';
import { boards } from './boards';

export const boardMembers: BoardMember[] = Array.from({ length: 5 }, (_, idx) => ({
  id: createId(),
  roleId: 'owner',
  boardId: boards[idx].id,
  userId: users[idx].id,
}))