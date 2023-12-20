import { Controller, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from './user.repository';

@Controller('api/user')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get('list')
  async list(): Promise<User[]> {
    return await this.userRepository.getUser()
  }
}
