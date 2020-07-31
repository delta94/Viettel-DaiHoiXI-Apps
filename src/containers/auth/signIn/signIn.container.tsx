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
  const [isPrivateIntenet, setIsPrivateIntenet] = React.useState<boolean>(true);

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
