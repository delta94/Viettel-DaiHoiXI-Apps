import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Home } from './home.component';
import { meetingDataFake } from '@src/core/data/meeting';
import { userDataFake } from '@src/core/data/user';

export const HomeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'HomeContainer';

  const onMeetingItemPress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'function',
    });
  };

  const onEditProfilePress = (): void => {

  };

  const onLogoutPress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'auth',
    });
  };

  return (
    <Home
      user={userDataFake}
      currentWeek={32}
      meetings={meetingDataFake}
      onEditProfilePress={onEditProfilePress}
      onLogoutPress={onLogoutPress}
      onMeetingItemPress={onMeetingItemPress}
    />
  );
};
