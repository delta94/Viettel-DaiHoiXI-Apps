import { ThunkActionTypes } from '@src/core/store/thunk/types';
import { alerts } from '@src/core/utils/alerts';
import { onGetProgramListSuccess, onGetNotificationListSuccess, onGetAnnoucementListSuccess } from '../reducer/actions';
import { catchHandle } from '@src/core/utils/catchHelper';
import MeetingDetail from '@src/core/services/meetingDetail.service';
import { toasts } from '@src/core/utils/toasts';
import { onSetEnabledSpinner } from '@src/core/store/reducer/app/actions';

export const onThunkGetProgramListReq = (meetingId: string, onSuccess: () => void): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const meetingDetailService = new MeetingDetail();

  try {
    const res = await meetingDetailService.getProgramList(meetingId);

    if (res.success) {
      dispatch(onGetProgramListSuccess(res.data));
      onSuccess();
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }
  dispatch(onSetEnabledSpinner(false));
};

export const onThunkGetNotificationListReq = (meetingId: string, onSuccess: () => void): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const meetingDetailService = new MeetingDetail();

  try {
    const res = await meetingDetailService.getNotificationList(meetingId);

    if (res.success) {
      dispatch(onGetNotificationListSuccess(res.data));
      onSuccess();
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }
  dispatch(onSetEnabledSpinner(false));
};

export const onThunkGetAnnoucementListReq = (meetingId: string, onSuccess: () => void): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const meetingDetailService = new MeetingDetail();

  try {
    const res = await meetingDetailService.getAnnoucementList(meetingId);

    if (res.success) {
      dispatch(onGetAnnoucementListSuccess(res.data));
      onSuccess();
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }
  dispatch(onSetEnabledSpinner(false));
};

