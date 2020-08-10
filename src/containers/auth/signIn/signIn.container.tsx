import React, {
  useEffect,
  useState,
} from 'react';
import { Dispatch } from 'redux';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { NavigationInjectedProps } from 'react-navigation';
import { SignIn } from './signIn.component';
import {
  SignInAccountFormData,
  SignInPhoneNumberFormData,
} from '@src/core/models/auth/signIn/signIn.model';
import { isTablet } from 'react-native-device-info';
import { SignInTablet } from './tablet/signIn.component.tablet';
import { SessionState } from '@src/core/store/reducer/session/types';
import { AppState } from '@src/core/store';
import {
  onThunkSignInReq,
  onThunkGetOtpReq,
} from '../store/thunk';
import { toasts } from '@src/core/utils/toasts';
import { Keyboard } from 'react-native';

export const SignInContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SignInContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const [isPrivateInternet, setIsPrivateInternet] = useState<boolean>(true);
  const { loggedIn }: SessionState = useSelector((state: AppState) => state.session);

  useEffect(() => {
    if (loggedIn) {
      props.navigation.navigate({
        key: navigationKey,
        routeName: 'app',
      });
    }
  }, [loggedIn]);

  const onSignInAccountPress = (data: SignInAccountFormData) => {
    dispatch(onThunkSignInReq(data));
  };

  const onSignInPhoneNumberPress = (data: SignInPhoneNumberFormData) => {
    Keyboard.dismiss();
    dispatch(onThunkGetOtpReq(data, props, false));
  };

  const onSwitchInternetPress = () => {
    setIsPrivateInternet(!isPrivateInternet);
  };

  const onSigInQRCodePress = () => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'signInQRCode',
    });
  };

  const onRecognizePress = (): void => {
    toasts.info('Chức năng này không có sẵn!');
  };

  const onForgotPasswordPress = () => {
    toasts.info('Chức năng này không có sẵn!');
  };

  if (isTablet()) {
    return (
      <SignInTablet
        isPrivateIntenet={isPrivateInternet}
        onSignInAccountPress={onSignInAccountPress}
        onSignInPhoneNumberPress={onSignInPhoneNumberPress}
        onForgotPasswordPress={onForgotPasswordPress}
        onSwichInternetPress={onSwitchInternetPress}
        onSigInQRCodePress={onSigInQRCodePress}
        onRecognizePress={onRecognizePress}
      />
    );
  }

  return (
    <SignIn
      isPrivateInternet={isPrivateInternet}
      onSignInAccountPress={onSignInAccountPress}
      onSignInPhoneNumberPress={onSignInPhoneNumberPress}
      onForgotPasswordPress={onForgotPasswordPress}
      onSwitchInternetPress={onSwitchInternetPress}
      onSigInQRCodePress={onSigInQRCodePress}
      onRecognizePress={onRecognizePress}
    />
  );
};
