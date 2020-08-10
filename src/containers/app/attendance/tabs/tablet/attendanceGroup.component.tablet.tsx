import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { GroupAttendance } from '@src/core/models/attendance/groupAttendance/groupAttendance.model';
import { AttendanceGroupItemTablet } from './attendanceGroupItem.component.tablet';
import { GroupAttendanceContent } from '@src/core/models/attendance/groupAttendance/groupAttendance.model';
import { ScrollView } from 'react-native-gesture-handler';

interface ComponentProps {
  groupAttendance: GroupAttendance[];
}

export type AttendanceGroupTabletProps = ThemedComponentProps & ComponentProps;

const AttendanceGroupTabletComponent: React.FunctionComponent<AttendanceGroupTabletProps> = (props) => {
  const { themedStyle } = props;

  const renderSection = (): React.ReactElement[] => {
    return props.groupAttendance.map((item, index) => {
      return (
        <View
          key={index}
          style={[
            themedStyle.viewSection,
            index && { marginLeft: pxToPercentage(20) },
          ]}>
          <View style={themedStyle.viewTitle}>
            <Text style={themedStyle.txtTitle}>{item.section}</Text>
          </View>
          <ScrollView>
            {renderRow(item.attendance)}
          </ScrollView>
        </View>
      );
    });
  };

  const renderRow = (attendance: GroupAttendanceContent[]): React.ReactElement[] => {
    return attendance.map((item, index) => {
      return (
        <AttendanceGroupItemTablet
          key={index}
          attendance={item}
        />
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      {renderSection()}
    </View >
  );
};

export const AttendanceGroupTablet = withStyles(AttendanceGroupTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: pxToPercentage(30),
  },
  viewSection: {
    flex: 1,
  },
  viewTitle: {
    backgroundColor: theme['color-primary-2'],
    justifyContent: 'center',
    height: pxToPercentage(90),
    paddingLeft: pxToPercentage(20),
  },
  txtTitle: {
    color: theme['color-custom-100'],
    fontSize: pxToPercentage(34),
  },
}));
