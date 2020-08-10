import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { isTablet } from 'react-native-device-info';
import { AttendanceTablet } from './attendance.component.tablet';
import { hallAttendanceDataFake } from '@src/core/data/hallAttendance';
import { groupAttendanceDataFake } from '@src/core/data/groupAttendance';
import { Attendance } from './attendance.component';

export const AttendanceContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'AttendanceContainer';

  if (isTablet()) {
    return (
      <AttendanceTablet
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
