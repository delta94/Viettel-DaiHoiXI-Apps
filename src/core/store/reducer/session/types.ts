import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';

// Describing the shape of the session's slice of state
export interface SessionState {
  loggedIn: boolean;
  deputy: DeputyModel;
}

// Describing the different ACTION NAMES available
export const SET_SESSION = 'SET_SESSION';
export const CLEAR_SESSION = 'CLEAR_SESSION';

export interface SessionSetAction {
  type: typeof SET_SESSION;
  payload: DeputyModel;
}

export interface SessionClearAction {
  type: typeof CLEAR_SESSION;
}

export type SessionActionTypes = SessionSetAction &
  SessionClearAction;
