import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { MeetingDetail } from './meetingDetail.component';
import { programDataFake } from '@src/core/data/program';
import {
  notificationDataFake,
  pressReleaseDataFake,
} from '@src/core/data/notification';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { isTablet } from 'react-native-device-info';
import { MeetingDetailTablet } from './meetingDetail.component.tablet';

export const MeetingDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'MeetingDetailContainer';

  const onNotificationItemPress = (notification: NotificationModel): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'notificationDetail',
      params: {
        notification,
      },
    });
  };

  const onPressReleaseItemPress = (pressRelease: PressReleaseModel): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'pressReleaseDetail',
      params: {
        pressRelease,
      },
    });
  };

  const onMessagePress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'chat',
    });
  };

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <MeetingDetailTablet
        programs={programDataFake}
        notifications={notificationDataFake}
        pressReleases={pressReleaseDataFake}
        onNotificationItemPress={onNotificationItemPress}
        onPressReleaseItemPress={onPressReleaseItemPress}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
      />
    );
  }

  return (
    <MeetingDetail
      programs={programDataFake}
      notifications={notificationDataFake}
      pressReleases={pressReleaseDataFake}
      onNotificationItemPress={onNotificationItemPress}
      onPressReleaseItemPress={onPressReleaseItemPress}
    />
  );
};
