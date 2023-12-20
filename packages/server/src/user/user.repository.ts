import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  getUser(userFindManyArgs?: Prisma.UserFindManyArgs): Promise<User[] | null> {
    return this.prisma.user.findMany(userFindManyArgs)
  }
}