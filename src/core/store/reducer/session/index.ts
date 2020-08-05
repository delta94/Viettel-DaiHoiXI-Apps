import {
  SessionState,
  SessionActionTypes,
  SET_SESSION,
  CLEAR_SESSION,
} from './types';
import { User } from '@src/core/models/user/user.model';

const initialState: SessionState = {
  loggedIn: false,
  user: new User(),
};

export const sessionReducer = (state = initialState, action: SessionActionTypes): SessionState => {
  switch (action.type) {
    case SET_SESSION: {
      return {
        loggedIn: true,
        user: action.payload,
      };
    }
    case CLEAR_SESSION: {
      return {
        ...state,
        loggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};
