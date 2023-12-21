import { createId } from '@paralleldrive/cuid2';
import { faker } from '@faker-js/faker';
import { Task } from '@prisma/client';

import { columns } from './columns';
import { boards } from './boards';
import { users } from './users';

export const tasks: Task[] = Array.from({ length: 45 }, (_, idx) => ({
  id: createId(),
  name: faker.lorem.words(3),
  order: idx,
  startDate: faker.date.past(),
  endDate: faker.date.future(),
  priority: idx % 3,
  description: faker.lorem.paragraph(),
  columnId: columns[Math.floor(idx / 3)].id,
  boardId: boards[Math.floor(idx / 9)].id,
  userId: users[Math.floor(idx / 9)].id,
}))