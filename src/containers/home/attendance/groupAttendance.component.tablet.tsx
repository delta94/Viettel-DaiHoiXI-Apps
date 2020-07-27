import React from 'react';
import {
  View,
  Text,
  processColor,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { GroupAttendance } from '@src/core/models/attendance/groupAttendance/groupAttendance.model';
import { GroupAttendanceItemTablet } from './groupAttendanceItem.component.tablet';
import { GroupAttendanceContent } from '@src/core/models/attendance/groupAttendance/groupAttendance.model';
import { ScrollView } from 'react-native-gesture-handler';

interface ComponentProps {
  groupAttendance: GroupAttendance[];
}

export type GroupAttendanceTabletProps = ThemedComponentProps & ComponentProps;

const GroupAttendanceTabletComponent: React.FunctionComponent<GroupAttendanceTabletProps> = (props) => {
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
        <GroupAttendanceItemTablet
          key={index}
          attendance={item} />
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      {renderSection()}
    </View >
  );
};

export const GroupAttendanceTablet = withStyles(GroupAttendanceTabletComponent, (theme: ThemeType) => ({
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
    color: 'white',
    fontSize: pxToPercentage(34),
  },
  txtGroup: {
    fontSize: pxToPercentage(34),
    marginLeft: pxToPercentage(20),
  },
  icon: {
    width: pxToPercentage(68.32),
    height: pxToPercentage(34),
    tintColor: 'black',
    marginBottom: pxToPercentage(6),
  },
  viewRow: {
    backgroundColor: theme['color-primary-31'],
    paddingTop: pxToPercentage(10),
    paddingHorizontal: pxToPercentage(20),
    marginBottom: pxToPercentage(8),
  },
  viewTop: {
    flexDirection: 'row',
    height: pxToPercentage(80),
  },
  viewTopLeft: {
    width: pxToPercentage(200),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  viewTopRight: {
    flex: 1,
    justifyContent: 'center',
  },
  txt: {
    fontSize: pxToPercentage(34),
  },
  viewBottom: {
    height: pxToPercentage(138),
    paddingVertical: pxToPercentage(20),
  },
  view: {
    flexDirection: 'row',
    marginTop: pxToPercentage(5),
  },
  viewBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: pxToPercentage(5),
  },
  viewCirclePresent: {
    width: pxToPercentage(25),
    height: pxToPercentage(25),
    borderRadius: pxToPercentage(50),
    backgroundColor: 'red',
    marginRight: pxToPercentage(20),
  },
}));
