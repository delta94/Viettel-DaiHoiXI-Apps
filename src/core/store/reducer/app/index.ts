import {
  AppState,
  AppActionTypes,
  SET_ENABLED_SPINNER,
} from './types';

const initialState: AppState = {
  isEnabledSpinner: false,
};

export const appReducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_ENABLED_SPINNER: {
      return {
        ...state,
        isEnabledSpinner: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
