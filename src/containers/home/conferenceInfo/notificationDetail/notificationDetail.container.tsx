import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { NotificationDetailTablet } from './notificationDetail.component.tablet';
import { NotificationDetail } from './notificationDetail.component';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';
import { isTablet } from 'react-native-device-info';

export const NotificationDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'NotificationDetailContainer';

  if (isTablet()) {
    return (
      <NotificationDetailTablet
        notification={props.navigation.getParam('notification') || new NotificationModel()}
      />
    );
  }

  return (
    <NotificationDetail
      notification={props.navigation.getParam('notification') || new NotificationModel()}
    />
  );
};
