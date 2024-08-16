import { Authorization } from '~/app/models/helpers/token';
import { RoleResponse, UserResponse } from '~/users/models/services/generated/user.generated';

export type GetTokenResponse = { user: UserResponse; token: Authorization; roles: RoleResponse[] };

export type SessionData = {
  userId?: string;
  token?: Authorization;
};
