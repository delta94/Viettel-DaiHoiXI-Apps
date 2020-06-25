import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { MeetingNotification } from './meetingNotification.component';
import { meetingNotificationDataFake } from '@src/core/data/notification';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';

export const MeetingNotificationContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'MeetingNotificationContainer';

  const onNotificationItemPress = (notification: NotificationModel): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'meetingNotificationDetail',
      params: {
        notification,
      },
    });
  };

  return (
    <MeetingNotification
      notifications={meetingNotificationDataFake}
      onNotificationItemPress={onNotificationItemPress}
    />
  );
};
