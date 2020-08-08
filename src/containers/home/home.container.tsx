import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Home } from './home.component';
import { HomeTablet } from './home.component.tablet';
import {
  meetingDataFake,
  weeklyMeetingDatafake,
} from '@src/core/data/meeting';
import { isTablet } from 'react-native-device-info';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Dispatch } from 'redux';
import { onClearSession } from '@src/core/store/reducer/session/actions';
import { SessionState } from '@src/core/store/reducer/session/types';
import { AppState } from '@src/core/store';

export const HomeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'HomeContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const {
    loggedIn,
    user,
  }: SessionState = useSelector((state: AppState) => state.session);

  useEffect(() => {
    if (!loggedIn) {
      props.navigation.navigate({
        key: navigationKey,
        routeName: 'auth',
      });
    }
  }, [loggedIn]);

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
    dispatch(onClearSession());
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
        user={user}
        currentWeek={32}
        meetings={weeklyMeetingDatafake}
        onEditProfilePress={onEditProfilePress}
        onMeetingItemPress={onMeetingItemPress}
        onQRCodePress={onQRCodePress}
        onSearchPress={onSearchPress}
        onEmailPress={onEmailPress}
      />
    );
  }

  return (
    <Home
      user={user}
      currentWeek={32}
      meetings={meetingDataFake}
      onEditProfilePress={onEditProfilePress}
      onLogoutPress={onLogoutPress}
      onMeetingItemPress={onMeetingItemPress}
    />
  );
};
