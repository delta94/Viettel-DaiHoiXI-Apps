import React, {
  useState,
  useEffect,
} from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { NotificationDetail } from './notificationDetail.component';
import { Notification } from '@src/core/models/notification/notification.model';

export const NotificationDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'NotificationDetailContainer';
  const [notification, setNotification] = useState<Notification>(new Notification());

  useEffect(() => {
    const notificationParam: Notification = props.navigation.getParam('notification');

    if (notificationParam) {
      setNotification(notificationParam);
    }
  }, []);

  return (
    <NotificationDetail notification={notification} />
  );
};
