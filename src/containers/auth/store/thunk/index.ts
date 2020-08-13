import AuthService from '@src/core/services/auth.service';
import { ThunkActionTypes } from '@src/core/store/thunk/types';
import {
  SignInReq,
  VerifyOTPReq,
  GetOTPReq,
} from '@src/core/models/auth/signIn/signInReq.model';
import { onSetSession } from '@src/core/store/reducer/session/actions';
import { ApiResult } from '@src/core/dataTransfer/apiResult';
import {
  SignInAccountFormData,
  SignInPhoneNumberFormData,
} from '@src/core/models/auth/signIn/signIn.model';
import {
  getMacAddress,
  getIpAddress,
  getSystemVersion,
  getSystemName,
  getModel,
} from 'react-native-device-info';
import { onSetEnabledSpinner } from '@src/core/store/reducer/app/actions';
import { NavigationInjectedProps } from 'react-navigation';
import { toasts } from '@src/core/utils/toasts';

export const onThunkSignInReq = (data: SignInAccountFormData): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const macAddress = await getMacAddress();
  const ipAddress = await getIpAddress();
  const osVersion = getSystemVersion();
  const osType = getSystemName();
  const deviceCode = getModel();

  const authService = new AuthService();
  const signInReq: SignInReq = {
    userName: data.userName,
    password: data.password,
    deviceCode,
    imei: null,
    ipAddress,
    macAddress,
    osType: osType === 'android' ? 2 : 1,
    osVersion,
  };

  try {
    const res = await authService.signIn(signInReq);

    if (res.success) {
      dispatch(onSetSession(res.data));
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    const { message }: ApiResult = e;
    toasts.error(message);
  }

  dispatch(onSetEnabledSpinner(false));
};

export const onThunkGetOtpReq = (data: SignInPhoneNumberFormData, navigator: NavigationInjectedProps, fromOTPScreen: boolean): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const authService = new AuthService();
  const otpReq: GetOTPReq = {
    phoneNumber: data.phoneNumber,
  };

  try {
    const res = await authService.getOTP(otpReq);

    if (res.success) {
      if (fromOTPScreen) {
        toasts.success(`Mã xác nhận OTP đã được gửi đến số điện thoại ${data.phoneNumber}!`);
      } else {
        navigator.navigation.navigate({
          key: 'SignInContainer',
          routeName: 'otp',
          params: {
            phoneNumber: data.phoneNumber,
          },
        });
      }
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    const { message }: ApiResult = e;
    toasts.error(message);
  }

  dispatch(onSetEnabledSpinner(false));
};

export const onThunkVerifyOtpReq = (otp: string, phoneNumber: string): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const macAddress = await getMacAddress();
  const ipAddress = await getIpAddress();
  const osVersion = getSystemVersion();
  const osType = getSystemName();
  const deviceCode = getModel();
  const authService = new AuthService();

  const verifyOTPReq: VerifyOTPReq = {
    phoneNumber: phoneNumber,
    otp,
    deviceCode,
    imei: null,
    ipAddress,
    macAddress,
    osType: osType === 'android' ? 2 : 1,
    osVersion,
  };

  try {
    const res = await authService.verifyOTP(verifyOTPReq);

    if (res.success) {
      dispatch(onSetSession(res.data));
    } else {
      toasts.error(res.message);
    }
  } catch (e) {
    const { message }: ApiResult = e;
    toasts.error(message);
  }

  dispatch(onSetEnabledSpinner(false));
};
