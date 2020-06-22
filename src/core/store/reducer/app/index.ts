import {
  AppState,
  AppActionTypes,
  SET_ENABLED_SPINNER,
  SET_FLAG,
} from './types';

const initialState: AppState = {
  isEnabledSpinner: false,
  textSpinner: undefined,
  flag: true,
};

export const appReducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_ENABLED_SPINNER: {
      const { isEnabled, textSpinner } = action.payload;

      return {
        ...state,
        isEnabledSpinner: isEnabled,
        textSpinner: isEnabled ? textSpinner : undefined,
      };
    }
    case SET_FLAG: {
      return {
        ...state,
        flag: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
