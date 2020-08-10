import MenuService from '@src/core/services/menu.service';
import { ThunkActionTypes } from '@src/core/store/thunk/types';
import { onGetMenuSuccess } from '../reducer/actions';
import { catchHandle } from '@src/core/utils/catchHelper';
import { onSetEnabledSpinner } from '@src/core/store/reducer/app/actions';
import { toasts } from '@src/core/utils/toasts';

export const onThunkGetMenuReq = (meetingId: string, userId: string): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const menuService = new MenuService();

  try {
    const res = await menuService.getMenu(meetingId, userId);

    if (res.success) {
      dispatch(onGetMenuSuccess(res.data || []));
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }

  dispatch(onSetEnabledSpinner(false));
};
