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
import { GroupAttendance as GroupAttendanceModel } from '@src/core/models/attendance/groupAttendance/groupAttendance.model';
import { GroupAttendanceContent } from '@src/core/models/attendance/groupAttendance/groupAttendance.model';
import { ScrollView } from 'react-native-gesture-handler';
import { GroupAttendanceItem } from './groupAttendanceItem.component';
import { DateList } from '../../conferenceInfo/dateList.component';

interface ComponentProps {
  groupAttendance: GroupAttendanceModel[];
}

export type GroupAttendanceProps = ThemedComponentProps & ComponentProps;

const GroupAttendanceComponent: React.FunctionComponent<GroupAttendanceProps> = (props) => {
  const { themedStyle } = props;

  const renderSection = (): React.ReactElement[] => {
    return props.groupAttendance.map((item, index) => {
      return (
        <View
          key={index}
          style={themedStyle.viewSection}>
          <View style={themedStyle.viewTitle}>
            <Text style={themedStyle.txtTitle}>{item.section}</Text>
          </View>
          {renderRow(item.attendance)}
        </View>
      );
    });
  };

  const renderRow = (attendance: GroupAttendanceContent[]): React.ReactElement[] => {
    return attendance.map((item, index) => {
      return (
        <GroupAttendanceItem
          key={index}
          attendance={item}
        />
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <DateList />
      <ScrollView>
        {renderSection()}
      </ScrollView>
    </View >
  );
};

export const GroupAttendance = withStyles(GroupAttendanceComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  viewSection: {
    flex: 1,
    marginTop: pxToPercentage(5),
  },
  viewTitle: {
    backgroundColor: theme['color-primary-2'],
    justifyContent: 'center',
    height: pxToPercentage(40),
    paddingLeft: pxToPercentage(20),
  },
  txtTitle: {
    color: theme['color-custom-100'],
    fontSize: pxToPercentage(14),
  },
}));
