import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SignIn } from './signIn.component';
import {
  SignInAccountFormData,
  SignInPhoneNumberFormData,
} from '@src/core/models/auth/signIn/signIn.model';

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

  return (
    <SignIn
      onSignInAccountPress={onSignInAccountPress}
      onSignInPhoneNumberPress={onSignInPhoneNumberPress}
      onForgotPasswordPress={onForgotPasswordPress}
    />
  );
};
