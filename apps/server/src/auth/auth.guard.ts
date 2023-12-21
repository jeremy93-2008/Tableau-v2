import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { verifyToken } from '@clerk/clerk-sdk-node';
import { AuthService } from './auth.service';

import { JwtPayload } from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      console.warn('Token was not found in the request header.');
      return false;
    }

    let payload: JwtPayload = null;

    try {
      payload = await verifyToken(token, {
        secretKey:
          process.env.CLERK_SECRET_KEY || process.env.CLERK_API_KEY || '',
        issuer: process.env.CLERK_API_URL || '',
      });

      await this.authService.createOrConnectUser(payload, request);

      return payload !== null;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    // @ts-ignore
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
