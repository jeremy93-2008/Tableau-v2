import { Permission } from '../permission/permission';
import { Role } from './role';

export const RolePermissions = {
  [Role.Owner]: [
    Permission.Read,
    Permission.WriteBoard,
    Permission.WriteColumn,
    Permission.WriteTask,
    Permission.DeleteBoard,
    Permission.DeleteColumn,
    Permission.DeleteTask,
    Permission.Invite,
  ],
  [Role.Administrator]: [
    Permission.Read,
    Permission.WriteBoard,
    Permission.WriteColumn,
    Permission.WriteTask,
    Permission.DeleteBoard,
    Permission.DeleteColumn,
    Permission.DeleteTask,
    Permission.Invite,
  ],
  [Role.Collaborator]: [
    Permission.Read,
    Permission.WriteColumn,
    Permission.WriteTask,
    Permission.DeleteColumn,
    Permission.DeleteTask,
    Permission.InviteOnly,
  ],
  [Role.Member]: [Permission.Read, Permission.WriteTask, Permission.DeleteTask],
  [Role.Guest]: [Permission.Read],
};
