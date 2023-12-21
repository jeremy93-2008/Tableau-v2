import { Injectable, UseGuards } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { JwtPayload } from 'jsonwebtoken';
import { clerkClient, createClerkClient } from '@clerk/clerk-sdk-node';
import { IRequest } from '../types/http.type';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  private clerk: typeof clerkClient;

  constructor(private userRepository: UserRepository) {
    this.clerk = createClerkClient({
      secretKey:
        process.env.CLERK_SECRET_KEY || process.env.CLERK_API_KEY || '',
    });
  }

  async getCurrentUser(request: IRequest): Promise<User> {
    try {
      return request.user;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async createOrConnectUser(
    payload: JwtPayload,
    request: Request,
  ): Promise<void> {
    try {
      const user = await this.clerk.users.getUser(payload.sub);
      if (!(await this.userRepository.exist({ where: { id: user.id } }))) {
        await this.userRepository.create({
          data: {
            id: user.id,
            email: user.emailAddresses[0].emailAddress,
            name: user.username ?? user.firstName + ' ' + user.lastName,
            theme: 'light',
            notifyMe: true,
            profileUrl: user.imageUrl ?? '',
          },
        });
      }

      (request as IRequest).user = await this.userRepository.getUser(user.id);
    } catch (e) {
      console.log(e);
    }
  }
}
