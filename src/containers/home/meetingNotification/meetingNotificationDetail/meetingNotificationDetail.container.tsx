import React, {
  useState,
  useEffect,
} from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { MeetingNotificationDetail } from './meetingNotificationDetail.component';
import { Notification } from '@src/core/models/notification/notification.model';

export const MeetingNotificationDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'MeetingNotificationDetailContainer';
  const [notification, setNotification] = useState<Notification>(new Notification());

  useEffect(() => {
    const notificationParam: Notification = props.navigation.getParam('notification');

    if (notificationParam) {
      setNotification(notificationParam);
    }
  }, []);

  return (
    <MeetingNotificationDetail notification={notification} />
  );
};
