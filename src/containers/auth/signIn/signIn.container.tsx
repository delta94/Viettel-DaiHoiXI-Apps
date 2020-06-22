import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { NavigationInjectedProps } from 'react-navigation';
import { SignIn } from './signIn.component';
import { SignInFormData } from '@src/core/models/auth/signIn/signIn.model';

export const signInNavigationKey: string = 'SignInContainer';

export const SignInContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const dispatch: Dispatch<any> = useDispatch();

  const onSignInPress = (data: SignInFormData): void => {

  };

  const onForgotPasswordPress = (): void => {
    props.navigation.navigate({
      key: signInNavigationKey,
      routeName: 'forgotPassword',
    });
  };

  return (
    <SignIn
      onSignInPress={onSignInPress}
      onForgotPasswordPress={onForgotPasswordPress}
    />
  );
};
