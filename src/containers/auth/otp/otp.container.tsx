import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { BackHandler } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { Otp } from './otp.component';
import { isTablet } from 'react-native-device-info';
import { OtpTablet } from './otp.component.tablet';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { onThunkVerifyOtp, onThunkGetOtp } from '../signIn/store/thunk';
import { SessionState } from '@src/core/store/reducer/session/types';
import { AppState } from '@src/core/store';
import { alerts } from '@src/core/utils/alerts';
import { isEmpty } from '@src/core/utils/utils';

export const OtpContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'OtpContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const phoneNumber: string | undefined = props.navigation.getParam('phoneNumber');
  const { loggedIn }: SessionState = useSelector((state: AppState) => state.session);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackEventHandle);

    return () => BackHandler.removeEventListener('hardwareBackPress', onBackEventHandle);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      props.navigation.navigate({
        key: navigationKey,
        routeName: 'app',
      });
    }
  }, [loggedIn]);

  const onResendOtpPress = (): void => {
    dispatch(onThunkGetOtp(phoneNumber, props, true));
  };

  const onConfirmPress = (otp: string): void => {
    if (!isEmpty(otp)) {
      dispatch(onThunkVerifyOtp(otp, phoneNumber));
    } else {
      alerts.alert({ message: 'Mã xác nhận OTP không được trống!' });
    }
  };

  const onBackEventHandle = () => {
    alerts.confirm({
      message: 'Quay lại trang đăng nhập?',
      accept: 'Đồng ý',
      cancel: 'Huỷ',
      onResult: onBackResult,
    });

    return true;
  };

  const onBackPress = (): void => {
    alerts.confirm({
      message: 'Quay lại trang đăng nhập?',
      accept: 'Đồng ý',
      cancel: 'Huỷ',
      onResult: onBackResult,
    });
  };

  const onBackResult = (value) => {
    if (value) {
      props.navigation.goBack(KEY_NAVIGATION_BACK);
    }
  };

  if (isTablet()) {
    return (
      <OtpTablet
        phoneNumber={phoneNumber}
        onResendOtpPress={onResendOtpPress}
        onConfirmPress={onConfirmPress}
        onBackPress={onBackPress}
      />
    );
  }

  return (
    <Otp
      phoneNumber={phoneNumber}
      onResendOtpPress={onResendOtpPress}
      onConfirmPress={onConfirmPress}
      onBackPress={onBackPress}
    />
  );
};
