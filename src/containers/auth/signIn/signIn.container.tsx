import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SignIn } from './signIn.component';
import {
  SignInAccountFormData,
  SignInPhoneNumberFormData,
} from '@src/core/models/auth/signIn/signIn.model';
import { isTablet } from 'react-native-device-info';
import { SignInTablet } from './signIn.component.tablet';
import { SessionState } from '@src/core/store/reducer/session/types';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '@src/core/store';
import { Dispatch } from 'redux';
import { onThunkSignInReq, onThunkGetOtp } from './store/thunk';
import { alerts } from '@src/core/utils/alerts';
import { generateCaptcha } from '@src/core/utils/utils';

export const SignInContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SignInContainer';
  const [isPrivateIntenet, setIsPrivateIntenet] = React.useState<boolean>(true);
  const dispatch: Dispatch<any> = useDispatch();
  const { loggedIn }: SessionState = useSelector((state: AppState) => state.session);

  useEffect(() => {
    if (loggedIn) {
      props.navigation.navigate({
        key: navigationKey,
        routeName: 'app',
      });
    }
  }, [loggedIn]);

  useEffect(() => {
    const focusComponent = props.navigation.addListener(
      'willFocus',
      () => {
      },
    );
    return () => {
      focusComponent.remove();
    };
  }, []);

  const onSignInAccountPress = (data: SignInAccountFormData) => {
    if (data) {
      if (data.password.length < 8) {
        alerts.alert({ message: 'Mật khẩu phải có ít nhất 8 ký tự!' });
      } else {
        dispatch(onThunkSignInReq(data));
      }
    } else {
      alerts.alert({ message: 'Thông tin đăng nhập không được trống!' });
    }
  };

  const onSignInPhoneNumberPress = (data: SignInPhoneNumberFormData) => {
    if (data) {
      if (data.phone.length < 10 || data.phone.length > 11) {
        alerts.alert({ message: 'Số điện thoại không đúng!' });
      } else
        if (data.enterCaptca !== data.captcha) {
          alerts.alert({ message: 'Mã xác nhận không chính xác!' });
        } else {
          dispatch(onThunkGetOtp(data.phone, props, false));
        }
    } else {
      alerts.alert({ message: 'Số điện thoại không được để trông!' });
    }
  };

  const onForgotPasswordPress = () => {

  };

  const onSwichInternetPress = () => {
    setIsPrivateIntenet(!isPrivateIntenet);
  };

  const onSigInQRCodePress = () => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'signInQRCode',
    });
  };

  if (isTablet()) {
    return (
      <SignInTablet
        onSignInAccountPress={onSignInAccountPress}
        onSignInPhoneNumberPress={onSignInPhoneNumberPress}
        onForgotPasswordPress={onForgotPasswordPress}
        isPrivateIntenet={isPrivateIntenet}
        onSwichInternetPress={onSwichInternetPress}
        onSigInQRCodePress={onSigInQRCodePress}
      />
    );
  }

  return (
    <SignIn
      onSignInAccountPress={onSignInAccountPress}
      onSignInPhoneNumberPress={onSignInPhoneNumberPress}
      onForgotPasswordPress={onForgotPasswordPress}
      isPrivateIntenet={isPrivateIntenet}
      onSwichInternetPress={onSwichInternetPress}
      onSigInQRCodePress={onSigInQRCodePress}
    />
  );
};
