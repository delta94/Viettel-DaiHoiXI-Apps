import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Splash } from './splash.component';

export const SplashContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SplashContainer';
  return (
    <Splash />
  );
};
