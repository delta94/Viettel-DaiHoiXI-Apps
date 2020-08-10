import { ThunkActionTypes } from '@src/core/store/thunk/types';
import { alerts } from '@src/core/utils/alerts';
import { onGetProgramListSuccess, onGetNotificationListSuccess, onGetAnnoucementListSuccess } from '../reducer/actions';
import { catchHandle } from '@src/core/utils/catchHelper';
import MeetingDetail from '@src/core/services/meetingDetail.service';

export const onThunkGetProgramListReq = (meetingId: string, onSuccess: () => void): ThunkActionTypes => async dispatch => {
  const conferenceService = new MeetingDetail();

  try {
    const res = await conferenceService.getProgramList(meetingId);

    if (res.success) {
      dispatch(onGetProgramListSuccess(res.data));
      onSuccess();
    } else {
      alerts.alert({ message: res.message || res.error_message });
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }
};

export const onThunkGetNotificationListReq = (meetingId: string, onSuccess: () => void): ThunkActionTypes => async dispatch => {
  const conferenceService = new MeetingDetail();

  try {
    const res = await conferenceService.getNotificationList(meetingId);

    if (res.success) {
      dispatch(onGetNotificationListSuccess(res.data));
      onSuccess();
    } else {
      alerts.alert({ message: res.message || res.error_message });
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }
};

export const onThunkGetAnnoucementListReq = (meetingId: string, onSuccess: () => void): ThunkActionTypes => async dispatch => {
  const conferenceService = new MeetingDetail();

  try {
    const res = await conferenceService.getAnnoucementList(meetingId);

    if (res.success) {
      dispatch(onGetAnnoucementListSuccess(res.data));
      onSuccess();
    } else {
      alerts.alert({ message: res.message || res.error_message });
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }
};

