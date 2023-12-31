import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Body,
} from '@nestjs/common';
import { IMinimalBodyPermission, IRequest } from '../types/http.type';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<IRequest>();
    const body = request.body as unknown as IMinimalBodyPermission<{}>;
    console.log('body', body);
    return true;
  }
}
