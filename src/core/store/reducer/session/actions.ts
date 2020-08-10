import {
  SET_SESSION,
  SessionSetAction,
  SessionClearAction,
  CLEAR_SESSION,
} from './types';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';

export const onSetSession = (payload: DeputyModel): SessionSetAction => ({
  type: SET_SESSION,
  payload,
});

export const onClearSession = (): SessionClearAction => ({
  type: CLEAR_SESSION,
});
