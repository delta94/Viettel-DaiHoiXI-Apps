import {
  DelegateState,
  DelegateActionTypes,
  GET_DELEGATE_LIST_SUCCESS,
  GET_DELEGATE_DETAIL_SUCCESS,
} from './types';

const initialState: DelegateState = {
  delegateList: [],
  delegateDetail: [],
};

export const delegateReducer = (state = initialState, action: DelegateActionTypes): DelegateState => {
  switch (action.type) {
    case GET_DELEGATE_LIST_SUCCESS: {
      return {
        ...state,
        delegateList: action.payload,
      };
    }
    case GET_DELEGATE_DETAIL_SUCCESS: {
      return {
        ...state,
        delegateDetail: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
