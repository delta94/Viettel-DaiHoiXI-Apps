import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SignUpToSpeak } from './signUpToSpeak.component';

export const SignUpToSpeakContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SignUpToSpeakContainer';

  return (
    <SignUpToSpeak

    />
  );
};
