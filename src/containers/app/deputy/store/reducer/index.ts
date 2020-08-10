import {
  DeputyState,
  DeputyActionTypes,
  GET_DEPUTY_GROUPS_SUCCESS,
  GET_DEPUTY_DETAILS_SUCCESS,
} from './types';

const initialState: DeputyState = {
  deputyGroups: [],
  deputyDetails: [],
};

export const deputyReducer = (state = initialState, action: DeputyActionTypes): DeputyState => {
  switch (action.type) {
    case GET_DEPUTY_GROUPS_SUCCESS: {
      return {
        ...state,
        deputyGroups: action.payload,
      };
    }
    case GET_DEPUTY_DETAILS_SUCCESS: {
      return {
        ...state,
        deputyDetails: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
