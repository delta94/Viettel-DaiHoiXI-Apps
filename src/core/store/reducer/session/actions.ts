import {
  SET_SESSION,
  SessionSetAction,
  SessionClearAction,
  CLEAR_SESSION,
} from './types';
import { User } from '@src/core/models/user/user.model';

export const onSetSession = (payload: User): SessionSetAction => ({
  type: SET_SESSION,
  payload,
});

export const onClearSession = (): SessionClearAction => ({
  type: CLEAR_SESSION,
});
