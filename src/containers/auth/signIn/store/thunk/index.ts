import AuthService from '@src/core/services/auth.service';
import { ThunkActionTypes } from '@src/core/store/thunk/types';
import { SignInReq } from '@src/core/models/auth/signIn/signInReq.model';
import { onSetSession } from '@src/core/store/reducer/session/actions';
import { alerts } from '@src/core/utils/alerts';
import { ApiResult } from '@src/core/dataTransfer/apiResult';
import { SignInAccountFormData } from '@src/core/models/auth/signIn/signIn.model';
import {
  getMacAddress,
  getIpAddress,
  getSystemVersion,
  getSystemName,
} from 'react-native-device-info';
import { onSetEnabledSpinner } from '@src/core/store/reducer/app/actions';

export const onThunkSignInReq = (data: SignInAccountFormData): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  // const macAddress = await getMacAddress();
  // const ipAddress = await getIpAddress();
  // const osVersion = getSystemVersion();
  // const osType = getSystemName();

  const authService = new AuthService();
  const signInReq: SignInReq = {
    userName: data.userName,
    password: data.password,
    // deviceCode: undefined,
    // imei: undefined,
    // ipAddress,
    // macAddress,
    // osType,
    // osVersion,
  };

  try {
    const res = await authService.signIn(signInReq);

    if (res.success) {
      dispatch(onSetSession(res.data));
      dispatch(onSetEnabledSpinner(false));
    } else {
      alerts.alert({
        message: res.message,
        onResult: () => {
          dispatch(onSetEnabledSpinner(false));
        },
      });
    }
  } catch (e) {
    const { message }: ApiResult = e;

    alerts.alert({
      message,
      onResult: () => {
        dispatch(onSetEnabledSpinner(false));
      },
    });
  }
};
