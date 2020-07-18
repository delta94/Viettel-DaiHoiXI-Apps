import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { ConferenceInfo } from './conferenceInfo.component';
import { programDataFake } from '@src/core/data/program';
import {
  notificationDataFake,
  pressReleaseDataFake,
} from '@src/core/data/notification';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';

export const ConferenceInfoContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'ConferenceInfoContainer';

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

  return (
    <ConferenceInfo
      programs={programDataFake}
      notifications={notificationDataFake}
      pressReleases={pressReleaseDataFake}
      onNotificationItemPress={onNotificationItemPress}
      onPressReleaseItemPress={onPressReleaseItemPress}
    />
  );
};
