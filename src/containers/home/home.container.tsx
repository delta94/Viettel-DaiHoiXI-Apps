import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Home } from './home.component';
import { HomeTablet } from './home.component.tablet';
import { meetingDataFake, weeklyMeetingDatafake } from '@src/core/data/meeting';
import { userDataFake } from '@src/core/data/user';
import { isTablet } from 'react-native-device-info';

export const HomeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'HomeContainer';

  const onMeetingItemPress = (isExample: boolean): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'function',
      params: {
        isExample,
      },
    });
  };

  const onEditProfilePress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'delegateDetail',
    });
  };

  const onLogoutPress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'auth',
    });
  };

  const onQRCodePress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'scanQRCode',
    });
  };

  const onEmailPress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'chat',
    });
  };

  const onSearchPress = (): void => {

  };

  if (isTablet()) {
    return (
      <HomeTablet
        user={userDataFake}
        currentWeek={32}
        meetings={weeklyMeetingDatafake}
        onEditProfilePress={onEditProfilePress}
        onLogoutPress={onLogoutPress}
        onMeetingItemPress={onMeetingItemPress}
        onQRCodePress={onQRCodePress}
        onSearchPress={onSearchPress}
        onEmailPress={onEmailPress}
      />
    );
  }

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
