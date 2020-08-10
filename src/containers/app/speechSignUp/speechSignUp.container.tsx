import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SpeechSignUp } from './speechSignUp.component';
import { isTablet } from 'react-native-device-info';
import { SpeechSignUpTablet } from './speechSignUp.component.tablet';

export const SpeechSignUpContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SpeechSignUpContainer';

  if (isTablet()) {
    return (
      <SpeechSignUpTablet

      />
    );
  }

  return (
    <SpeechSignUp
    />
  );
};
