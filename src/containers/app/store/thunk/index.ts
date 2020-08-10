import { ThunkActionTypes } from '@src/core/store/thunk/types';
import { catchHandle } from '@src/core/utils/catchHelper';
import {
  onGetMeetingsSuccess,
  onGetMeetingWeeksSuccess,
} from '../reducer/actions';
import MeetingService from '@src/core/services/meeting.service';
import { toasts } from '@src/core/utils/toasts';
import { onSetEnabledSpinner } from '@src/core/store/reducer/app/actions';

export const onThunkGetMeetingsReq = (userId: string, fromDate: string, toDate: string): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const meetingService = new MeetingService();

  try {
    const res = await meetingService.getMeetings(userId, fromDate, toDate);

    if (res.success) {
      dispatch(onGetMeetingsSuccess(res.data));
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }

  dispatch(onSetEnabledSpinner(false));
};

export const onThunkGetMeetingWeeksReq = (): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const meetingService = new MeetingService();

  try {
    const res = await meetingService.getMeetingWeeks();

    if (res.success) {
      dispatch(onGetMeetingWeeksSuccess(res.data));
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }

  dispatch(onSetEnabledSpinner(false));
};
