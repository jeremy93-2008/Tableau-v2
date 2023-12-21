import { createId } from '@paralleldrive/cuid2';
import { faker } from '@faker-js/faker';
import { User } from '@prisma/client';

export const users: User[] = Array.from({ length: 5 }, () => ({
  id: createId(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  theme: 'dark',
  notifyMe: true,
}));
