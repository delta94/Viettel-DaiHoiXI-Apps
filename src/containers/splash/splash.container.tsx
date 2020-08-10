import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Splash } from './splash.component';
import { SessionState } from '@src/core/store/reducer/session/types';
import { useSelector } from 'react-redux';
import { AppState } from '@src/core/store';

export const SplashContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SplashContainer';
  const { loggedIn }: SessionState = useSelector((state: AppState) => state.session);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loggedIn) {
        onNavigateToApp();
      } else {
        onNavigateToAuth();
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onNavigateToApp = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'app',
    });
  };

  const onNavigateToAuth = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'auth',
    });
  };

  return <Splash />;
};
