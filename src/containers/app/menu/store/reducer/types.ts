
import { Menu } from '@src/core/models/menu/menu.model';

export interface MenuState {
  menu: Menu[];
}

export const GET_MENU_SUCCESS = 'GET_MENU_SUCCESS';

export interface GetMenuSuccessAction {
  type: typeof GET_MENU_SUCCESS;
  payload: Menu[];
}

export type MenuActionTypes = GetMenuSuccessAction;
