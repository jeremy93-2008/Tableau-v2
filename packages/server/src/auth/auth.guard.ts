import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { verifyToken } from '@clerk/clerk-sdk-node';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);

    if (!token) return false;

    let payload = null;

    try {
      payload = await verifyToken(token, {
        secretKey:
          process.env.CLERK_SECRET_KEY || process.env.CLERK_API_KEY || '',
        issuer: process.env.CLERK_API_URL || '',
      });
      return payload !== null;
    } catch (e) {
      return false;
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    // @ts-ignore
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
