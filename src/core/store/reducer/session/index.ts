import {
  SessionState,
  SessionActionTypes,
  SET_SESSION,
  CLEAR_SESSION,
} from './types';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';

const initialState: SessionState = {
  loggedIn: false,
  deputy: new DeputyModel(),
};

export const sessionReducer = (state = initialState, action: SessionActionTypes): SessionState => {
  switch (action.type) {
    case SET_SESSION: {
      return {
        loggedIn: true,
        deputy: action.payload,
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
