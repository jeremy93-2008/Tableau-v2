import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { IBody, IRequest } from '../types/http.type';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<IRequest>();
    const body = request.body as unknown as IBody<{}>;
    console.log('body', body);
    console.log(
      'reflector',
      this.reflector.get('Permissions', context.getHandler()),
    );
    return true;
  }
}
