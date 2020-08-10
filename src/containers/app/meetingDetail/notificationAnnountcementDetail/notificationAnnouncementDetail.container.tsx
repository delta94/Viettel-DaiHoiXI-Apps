import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { NotificationAnnouncementDetailTablet } from './notificationAnnouncementDetail.component.tablet';
import { NotificationAnnouncementDetail } from './notificationAnnouncementDetail.component';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';
import { isTablet } from 'react-native-device-info';

export const NotificationAnnouncementDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'NotificationAnnouncementDetailContainer';

  if (isTablet()) {
    return (
      <NotificationAnnouncementDetailTablet
        notification={props.navigation.getParam('notification') || new NotificationModel()}
      />
    );
  }

  return (
    <NotificationAnnouncementDetail
      notification={props.navigation.getParam('notification') || new NotificationModel()}
    />
  );
};
