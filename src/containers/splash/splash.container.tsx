import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Splash } from './splash.component';

export const SplashContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SplashContainer';

  useEffect(() => {
    const timer = setTimeout(() => {
      props.navigation.navigate({
        key: navigationKey,
        routeName: 'auth',
      });
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Splash />
  );
};
