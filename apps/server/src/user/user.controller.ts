import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from './user.repository';
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';
import { IRequest } from '../types/http.type';

@Controller('api/user')
export class UserController {
  constructor(
    private readonly userRepository: UserRepository,
    private authService: AuthService,
  ) {}

  @Get('list')
  async list(request): Promise<User> {
    return await this.userRepository.getUser(request);
  }

  @Get('current')
  async current(@Req() request: IRequest): Promise<User> {
    return await this.authService.getCurrentUser(request);
  }
}
