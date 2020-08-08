import React from 'react';
import { BackHandler } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { Otp } from './otp.component';
import { isTablet } from 'react-native-device-info';
import { OtpTablet } from './otp.component.tablet';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { onThunkVerifyOtp, onThunkSignInReq, onThunkGetOtp } from '../signIn/store/thunk';
import { SessionState } from '@src/core/store/reducer/session/types';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '@src/core/store';
import { Dispatch } from 'redux';
import { alerts } from '@src/core/utils/alerts';
import { isEmpty } from '@src/core/utils/utils';

export const OtpContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'OtpContainer';
  const [phoneNumber, setPhoneNumber] = React.useState<string>('');
  const dispatch: Dispatch<any> = useDispatch();
  const { loggedIn }: SessionState = useSelector((state: AppState) => state.session);
  const [isCount, setCount] = React.useState<boolean>(true);

  const backAction = () => {
    alerts.alert({ message: 'Quay lại trang đăng nhập?', accept: 'đồng ý', onResult: onBackResult });
    return true;
  };

  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  const onBackResult = () => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  const onResendOtpPress = (): void => {
    dispatch(onThunkGetOtp(phoneNumber, props, true));
  };

  React.useEffect(() => {
    const phoneNumberTemp: string = props.navigation.getParam('phoneNumber');
    setPhoneNumber(phoneNumberTemp);
    if (loggedIn) {
      props.navigation.navigate({
        key: navigationKey,
        routeName: 'app',
      });
    }
  }, [loggedIn]);

  const onConfirmPress = (otp: string): void => {
    if (!isEmpty(otp)) {
      if (otp.length < 4 || otp.length > 4) {
        alerts.alert({ message: 'Mã OTP phải có 4 ký tự!' });
      } else {
        dispatch(onThunkVerifyOtp(otp, phoneNumber));
      }
    } else {
      alerts.alert({ message: 'Mã OTP không được trông!' });
    }
  };

  const onBackPress = (): void => {
    alerts.alert({ message: 'Quay lại trang đăng nhập?', accept: 'đồng ý', onResult: onBackResult });
  };

  if (isTablet()) {
    return (
      <OtpTablet
        onResendOtpPress={onResendOtpPress}
        onConfirmPress={onConfirmPress}
        onBackPress={onBackPress}
      />
    );
  }

  return (
    <Otp
      onResendOtpPress={onResendOtpPress}
      onConfirmPress={onConfirmPress}
      onBackPress={onBackPress}
      isCount={isCount}
    />
  );
};
