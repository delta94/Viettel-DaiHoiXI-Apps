import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { NotificationDetail } from './notificationDetail.component';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';

export const NotificationDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'NotificationDetailContainer';

  return (
    <NotificationDetail
      notification={props.navigation.getParam('notification') || new NotificationModel()}
    />
  );
};
