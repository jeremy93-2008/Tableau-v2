import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { Permission } from './permission';
import { PermissionsGuard } from './permissions.guard';

export function Permissions(permissions: Permission[]) {
  return applyDecorators(
    SetMetadata('Permissions', permissions),
    UseGuards(PermissionsGuard),
  );
}
