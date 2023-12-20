import { Module } from '@nestjs/common';

import { UserRepository } from './user.repository';
import { UserController } from './user.controller';

import { PrismaService } from '../shared/services/prisma.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, PrismaService],
})

export class UserModule {}
