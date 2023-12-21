import { createId } from '@paralleldrive/cuid2';
import { faker } from '@faker-js/faker';
import {Board} from "@prisma/client"

import { users } from './users';

export const boards: Board[] = Array.from({ length: 5 }, (_, idx) => ({
  id: createId(),
  name: faker.lorem.words(3),
  userId: users[idx].id,
}))