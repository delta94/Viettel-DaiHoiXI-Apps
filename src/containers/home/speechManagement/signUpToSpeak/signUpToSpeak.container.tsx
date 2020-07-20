import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SignUpToSpeak } from './signUpToSpeak.component';
import { isTablet } from 'react-native-device-info';
import { SignUpToSpeakTablet } from './signUptoSpeak.component.tablet';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';

export const SignUpToSpeakContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SignUpToSpeakContainer';
  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <SignUpToSpeakTablet
        onBackPress={onBackPress} />
    );
  }

  return (
    <SignUpToSpeak
    />
  );
};
