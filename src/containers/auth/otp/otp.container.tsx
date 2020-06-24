import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Otp } from './otp.component';

export const OtpContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'OtpContainer';

  const onResendOtpPress = (): void => {

  };

  const onConfirmPress = (otp: string): void => {

  };

  return (
    <Otp
      onResendOtpPress={onResendOtpPress}
      onConfirmPress={onConfirmPress}
    />
  );
};
