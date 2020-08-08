import DelegateService from '@src/core/services/delegate.service';
import { ThunkActionTypes } from '@src/core/store/thunk/types';
import { alerts } from '@src/core/utils/alerts';
import {
  onGetDelegateListSuccess,
  onGetDelegateDetailsSuccess,
} from '../reducer/actions';
import { catchHandle } from '@src/core/utils/catchHelper';
import { delegateListApiDataFake } from '@src/core/data/delegateList';
import { GetDelegateListApiResult } from '@src/core/dataTransfer/delegate/getDelegateList.apiResult';

export const onThunkGetDelegateListReq = (
  meetingId: string,
  onSuccess: () => void,
): ThunkActionTypes => async (dispatch) => {
  const delegateService = new DelegateService();

  try {
    // const res = await delegateService.getDelegateList(meetingId);

    const res: GetDelegateListApiResult = delegateListApiDataFake;

    if (res.success) {
      dispatch(onGetDelegateListSuccess(res.data || []));
      onSuccess();
    } else {
      alerts.alert({ message: res.message || res.error_message });
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }
};

export const onThunkGetDelegateDetailsReq = (
  deputyId: string,
  onSuccess: () => void,
): ThunkActionTypes => async (dispatch) => {
  const delegateService = new DelegateService();

  try {
    const res = await delegateService.getDelegateDetails(deputyId);

    if (res.success) {
      dispatch(onGetDelegateDetailsSuccess(res.data || []));
      onSuccess();
    } else {
      alerts.alert({ message: res.message || res.error_message });
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }
};
