import AuthService from '@src/core/services/auth.service';
import { ThunkActionTypes } from '@src/core/store/thunk/types';
import {
  SignInReq,
  VerifyOTPReq,
  OtpReq,
} from '@src/core/models/auth/signIn/signInReq.model';
import { onSetSession } from '@src/core/store/reducer/session/actions';
import { alerts } from '@src/core/utils/alerts';
import { ApiResult } from '@src/core/dataTransfer/apiResult';
import {
  SignInAccountFormData,
  SignInPhoneNumberFormData,
  Otp,
} from '@src/core/models/auth/signIn/signIn.model';
import {
  getMacAddress,
  getIpAddress,
  getSystemVersion,
  getSystemName,
} from 'react-native-device-info';
import { onSetEnabledSpinner } from '@src/core/store/reducer/app/actions';
import { NavigationInjectedProps } from 'react-navigation';

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

export const onThunkGetOtp = (phone: string, navigator: NavigationInjectedProps, isResetCaptcha: boolean): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const authService = new AuthService();
  const otpReq: OtpReq = {
    phoneNumber: phone,
  };

  try {
    const res = await authService.getOTP(otpReq);

    if (res.success) {
      if (isResetCaptcha) {
        dispatch(onSetEnabledSpinner(false));
        alerts.alert({ message: 'Cấp lại mã Otp thành công' });
      } else {
        navigator.navigation.navigate({
          key: 'SignInContainer',
          routeName: 'otp',
          params: {
            phoneNumber: phone,
          },
        });
        dispatch(onSetEnabledSpinner(false));
      }
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

export const onThunkVerifyOtp = (otpValue: string, phoneNumber: string): ThunkActionTypes => async dispatch => {
  dispatch(onSetEnabledSpinner(true));

  const authService = new AuthService();
  const verifyOTPReq: VerifyOTPReq = {
    phoneNumber: phoneNumber,
    otp: otpValue,
    // deviceCode: undefined,
    // imei: undefined,
    // ipAddress,
    // macAddress,
    // osType,
    // osVersion,
  };

  try {
    const res = await authService.verifyOTP(verifyOTPReq);

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
