import {
  MenuState,
  MenuActionTypes,
  GET_MENU_SUCCESS,
} from './types';

const initialState: MenuState = {
  menu: [],
};

export const menuReducer = (state = initialState, action: MenuActionTypes): MenuState => {
  switch (action.type) {
    case GET_MENU_SUCCESS: {
      return {
        ...state,
        menu: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
