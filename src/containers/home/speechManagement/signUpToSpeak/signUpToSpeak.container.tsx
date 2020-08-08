import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SignUpToSpeak } from './signUpToSpeak.component';
import { isTablet } from 'react-native-device-info';
import { SignUpToSpeakTablet } from './signUptoSpeak.component.tablet';

export const SignUpToSpeakContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SignUpToSpeakContainer';

  if (isTablet()) {
    return (
      <SignUpToSpeakTablet

      />
    );
  }

  return (
    <SignUpToSpeak
    />
  );
};
