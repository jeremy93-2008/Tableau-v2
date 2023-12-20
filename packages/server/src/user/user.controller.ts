import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from './user.repository';
import { AuthGuard } from '../auth/auth.guard';

@Controller('api/user')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @UseGuards(AuthGuard)
  @Get('list')
  async list(): Promise<User[]> {
    return await this.userRepository.getUser();
  }
}
