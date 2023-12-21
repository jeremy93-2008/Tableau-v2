import { Module } from '@nestjs/common';

import { UserRepository } from './user.repository';
import { UserController } from './user.controller';

import { PrismaService } from '../shared/services/prisma.service';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, AuthService, PrismaService],
})
export class UserModule {}
