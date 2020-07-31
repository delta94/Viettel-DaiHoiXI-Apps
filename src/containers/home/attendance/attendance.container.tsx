import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { isTablet } from 'react-native-device-info';
import { AttendanceTablet } from './attendance.component.tablet';
import { hallAttendanceDataFake } from '@src/core/data/hallAttendance';
import { groupAttendanceDataFake } from '@src/core/data/groupAttendance';
import { programDataFake } from '@src/core/data/program';
import { notificationDataFake } from '@src/core/data/notification';
import { Attendance } from './attendance.component';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';

export const AttendanceContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'AttendanceContainer';

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  const onNotificationItemPress = (notification: NotificationModel): void => {
  };

  if (isTablet()) {
    return (
      <AttendanceTablet
        onBackPress={onBackPress}
        hallAttendance={hallAttendanceDataFake}
        groupAttendance={groupAttendanceDataFake}
      />
    );
  }

  return (
    <Attendance
      hallAttendance={hallAttendanceDataFake}
      groupAttendance={groupAttendanceDataFake}
    />
  );
};
