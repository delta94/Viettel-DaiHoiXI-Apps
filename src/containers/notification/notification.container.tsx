import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Notification } from './notification.component';
import { notificationDataFake } from '@src/core/data/notification';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';

export const NotificationContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'NotificationContainer';

  const onNotificationItemPress = (notification: NotificationModel): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'notificationDetail',
      params: {
        notification,
      },
    });
  };

  return (
    <Notification
      notifications={notificationDataFake}
      onNotificationItemPress={onNotificationItemPress}
    />
  );
};
