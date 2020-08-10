import {
  GET_MENU_SUCCESS,
  GetMenuSuccessAction,
} from './types';
import { Menu } from '@src/core/models/menu/menu.model';

export const onGetMenuSuccess = (payload: Menu[]): GetMenuSuccessAction => ({
  type: GET_MENU_SUCCESS,
  payload,
});
