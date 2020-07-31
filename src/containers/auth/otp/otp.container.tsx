import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Otp } from './otp.component';
import { isTablet } from 'react-native-device-info';
import { OtpTablet } from './otp.component.tablet';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';

export const OtpContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'OtpContainer';

  const onResendOtpPress = (): void => {

  };

  const onConfirmPress = (otp: string): void => {

  };

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
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
    />
  );
};
