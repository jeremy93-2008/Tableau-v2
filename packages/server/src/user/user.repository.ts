import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma.service';
import { Prisma, User } from '@prisma/client';
import { clerkClient, createClerkClient } from '@clerk/clerk-sdk-node';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  getUser(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async exist(userFindManyArgs?: Prisma.UserFindManyArgs): Promise<boolean> {
    const users = await this.prisma.user.findMany(userFindManyArgs);
    return users.length > 0;
  }

  async create(userCreateArgs: Prisma.UserCreateArgs): Promise<User> {
    return this.prisma.user.create(userCreateArgs);
  }

  async update(userUpdateArgs: Prisma.UserUpdateArgs): Promise<User> {
    return this.prisma.user.update(userUpdateArgs);
  }

  async delete(userDeleteArgs: Prisma.UserDeleteArgs): Promise<User> {
    return this.prisma.user.delete(userDeleteArgs);
  }
}
