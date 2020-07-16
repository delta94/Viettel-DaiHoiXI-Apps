import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SignIn } from './signIn.component';
import {
  SignInAccountFormData,
  SignInPhoneNumberFormData,
} from '@src/core/models/auth/signIn/signIn.model';
import { isTablet } from 'react-native-device-info';
import { SignInTablet } from './signIn.component.tablet';

export const SignInContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SignInContainer';

  const onSignInAccountPress = (data: SignInAccountFormData) => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'app',
    });
  };

  const onSignInPhoneNumberPress = (data: SignInPhoneNumberFormData) => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'otp',
    });
  };

  const onForgotPasswordPress = () => {

  };

  if (isTablet()) {
    return (
      <SignInTablet
        onSignInAccountPress={onSignInAccountPress}
        onSignInPhoneNumberPress={onSignInPhoneNumberPress}
        onForgotPasswordPress={onForgotPasswordPress}
      />
    );
  }

  return (
    <SignIn
      onSignInAccountPress={onSignInAccountPress}
      onSignInPhoneNumberPress={onSignInPhoneNumberPress}
      onForgotPasswordPress={onForgotPasswordPress}
    />
  );
};
