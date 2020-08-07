import { ThunkActionTypes } from '@src/core/store/thunk/types';
import { alerts } from '@src/core/utils/alerts';
import { onGetDelegateListSuccess, onGetDelegateDetailSuccess } from '../reducer/actions';
import { catchHandle } from '@src/core/utils/catchHelper';
import DelegateService from '@src/core/services/delegate.service';
import { delegateListApiDataFake } from '@src/core/data/delegateList';
import { delegateDetailDataFake } from '@src/core/data/delegateDetail';
import { DelegateList as DelegateListModel } from '@src/core/models/delegate/delegateList.model';

export const onThunkGetDelegateListReq = (
  meetingId: string,
  onSuccess: (delegateList: DelegateListModel[]) => void,
): ThunkActionTypes => async (dispatch) => {
  const delegateService = new DelegateService();

  try {
    const res = await delegateService.getDelegateList(meetingId);
    if (res.success) {
      dispatch(onGetDelegateListSuccess(res.data));
      onSuccess(res.data);
    } else {
      alerts.alert({ message: res.message || res.error_message });
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }
};

export const onThunkGetDelegateDetailReq = (
  deputyId: string,
  onSuccess: () => void,
): ThunkActionTypes => async (dispatch) => {
  const delegateService = new DelegateService();

  try {

    const res = await delegateService.getDelegateDetail(deputyId);

    if (res.success) {
      dispatch(onGetDelegateDetailSuccess(res.data));
      onSuccess();
    } else {
      alerts.alert({ message: res.message || res.error_message });
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }
};
