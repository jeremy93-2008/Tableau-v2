import { createId } from '@paralleldrive/cuid2';
import { faker } from '@faker-js/faker';
import { Column } from '@prisma/client';

import { boards } from './boards';

export const columns: Column[] = Array.from({ length: 15 }, (_, idx) => ({
  id: createId(),
  name: idx % 3 === 0 ? 'To Do' : idx % 3 === 1 ? 'In Progress' : 'Done',
  color: faker.internet.color(),
  order: idx % 3,
  boardId: boards[Math.floor(idx / 3)].id,
}))