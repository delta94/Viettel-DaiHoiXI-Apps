import { ThunkActionTypes } from '@src/core/store/thunk/types';
import { catchHandle } from '@src/core/utils/catchHelper';
import { onSetEnabledSpinner } from '@src/core/store/reducer/app/actions';
import { toasts } from '@src/core/utils/toasts';
import SpeechSignUpService from '@src/core/services/spechSignUp.service';
import { onGetSpeechFieldsSuccess } from '../reducer/actions';
import { SpeechSignUpReq } from '@src/core/models/speechSignUp/speechSignUpReqModel';
import { ApiResult } from '@src/core/dataTransfer/apiResult';
import { UpdateSpeechSignUpReq } from '@src/core/models/speechSignUp/updateSpeechSignUp';

export const onThunkSpeechFeildsReq = (): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const speechSignUpService = new SpeechSignUpService();

  try {
    const res = await speechSignUpService.getSpeechFields();
    if (res.success) {
      dispatch(onGetSpeechFieldsSuccess(res.data || []));
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    catchHandle(e, dispatch);
  }

  dispatch(onSetEnabledSpinner(false));
};

export const onThunkSignUpSpeechReq = (meetingId: string, UserId: string, meetingSessionId: string, fieldIds: [], onSignUpSpeechSuccess: () => void): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const speechSignUpService = new SpeechSignUpService();

  const speechSignUpReq: SpeechSignUpReq = {
    meetingId: meetingId,
    meetingSessionId: meetingSessionId,
    deputyId: UserId,
    fieldIds: fieldIds,
  };

  try {
    const res = await speechSignUpService.speechSignUp(speechSignUpReq);

    if (res.success) {
      toasts.success(`Đăng ký phát biểu thành công`);
      onSignUpSpeechSuccess();
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    const { message }: ApiResult = e;
    toasts.error(message);
  }

  dispatch(onSetEnabledSpinner(false));
};

export const onThunkUpdateSignUpSpeechReq = (meetingSpeakerId: string, fieldIds: [], onSignUpSpeechSuccess: () => void): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const speechSignUpService = new SpeechSignUpService();

  const speechSignUpReq: UpdateSpeechSignUpReq = {
    meetingSpeakerId: meetingSpeakerId,
    fieldIds: fieldIds,
  };

  try {
    const res = await speechSignUpService.updateSpeechSignUp(speechSignUpReq);

    if (res.success) {
      toasts.success(`Chỉnh sửa đăng ký phát biểu thành công`);
      onSignUpSpeechSuccess();
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    const { message }: ApiResult = e;
    toasts.error(message);
  }

  dispatch(onSetEnabledSpinner(false));
};
