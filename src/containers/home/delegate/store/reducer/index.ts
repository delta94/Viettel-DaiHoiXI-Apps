import {
  DelegateState,
  DelegateActionTypes,
  GET_DELEGATE_LIST_SUCCESS,
  GET_DELEGATE_DETAILS_SUCCESS,
} from './types';

const initialState: DelegateState = {
  delegateList: [],
  delegateDetails: [],
};

export const delegateReducer = (state = initialState, action: DelegateActionTypes): DelegateState => {
  switch (action.type) {
    case GET_DELEGATE_LIST_SUCCESS: {
      return {
        ...state,
        delegateList: action.payload,
      };
    }
    case GET_DELEGATE_DETAILS_SUCCESS: {
      return {
        ...state,
        delegateDetails: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
