import AuthService from '@src/core/services/auth.service';
import { ThunkActionTypes } from '@src/core/store/thunk/types';
import { SignInReq } from '@src/core/models/auth/signIn/signInReq.model';
import { onSetSession } from '@src/core/store/reducer/session/actions';
import { alerts } from '@src/core/utils/alerts';
import { ApiResult } from '@src/core/dataTransfer/apiResult';
import I18n from '@src/assets/i18n';
import { SignInAccountFormData } from '@src/core/models/auth/signIn/signIn.model';

export const onThunkSignInReq = (data: SignInAccountFormData, onSuccess?: () => void, onError?: () => void): ThunkActionTypes => async dispatch => {
  const authService = new AuthService();
  const signInReq: SignInReq = {
    userName: data.userName,
    password: data.password,
    deviceCode: data.deviceCode,
    imei: data.imei,
    ipAddress: data.ipAddress,
    macAddress: data.macAddress,
    osType: data.osType,
    osVersion: data.osVersion,
  };

  try {
    const res = await authService.signIn(signInReq);
    if (res.success) {
      dispatch(onSetSession(res.data));
      if (onSuccess) {
        onSuccess();
      } else {
        onError();
        alerts.alert({ message: I18n.t('signIn.txtNoPupil') });
      }
    } else {
      onError();
      alerts.alert({ message: res.message || res.error_message });
    }
  } catch (e) {
    const { message }: ApiResult = e;
    onError();
    alerts.alert({ message });
  }
};
