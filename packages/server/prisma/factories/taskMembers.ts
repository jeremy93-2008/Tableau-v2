import { createId } from '@paralleldrive/cuid2';
import { TaskMember } from '@prisma/client';

import { users } from './users';
import { tasks } from './tasks';

export const taskMembers: TaskMember[] = Array.from({ length: 45 }, (_, idx) => ({
  id: createId(),
  userId: users[Math.floor(idx / 9)].id,
  taskId: tasks[idx].id,
}))