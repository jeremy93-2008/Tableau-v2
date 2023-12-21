import { Injectable } from '@nestjs/common';

import { AuthGuard } from '../../auth/auth.guard';
import { AuthService } from '../../auth/auth.service';
import { UserRepository } from '../../user/user.repository';
import { PrismaService } from './prisma.service';

@Injectable()
export class AuthGlobalService {
  constructor() {}

  getGuard(): AuthGuard {
    return new AuthGuard(
      new AuthService(new UserRepository(new PrismaService())),
    );
  }
}
