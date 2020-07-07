import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Home } from './home.component';

export const HomeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'HomeContainer';

  const onMeetingItemPress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'function',
    });
  };

  const week = '32';

  return (
    <Home
      onMeetingItemPress={onMeetingItemPress}
      week={week}
    />
  );
};
