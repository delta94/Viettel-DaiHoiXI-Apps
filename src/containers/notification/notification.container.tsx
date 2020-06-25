import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Notification } from './notification.component';
import { notificationDataFake } from '@src/core/data/notification';

export const NotificationContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'NotificationContainer';

  return (
    <Notification notifications={notificationDataFake} />
  );
};
