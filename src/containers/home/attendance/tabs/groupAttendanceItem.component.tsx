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
import { PeopleIconOther } from '@src/assets/icons';
import { GroupAttendanceContent } from '@src/core/models/attendance/groupAttendance/groupAttendance.model';

interface ComponentProps {
  attendance: GroupAttendanceContent;
}

export type GroupAttendanceItemProps = ThemedComponentProps & ComponentProps;

const GroupAttendanceItemComponent: React.FunctionComponent<GroupAttendanceItemProps> = (props) => {
  const { themedStyle, attendance } = props;

  const getPercent = (value1: number, value2: number) => {
    const percent = value1 / (value1 + value2);

    return Math.round(percent * 100);
  };

  const renderDescription = (title: string, value: number, isAbsent?: boolean) => {
    return (
      <View style={themedStyle.viewBlock}>
        <View
          style={[
            themedStyle.viewCircle,
            isAbsent && themedStyle.viewCircleAbsent,
          ]}
        />
        <Text style={themedStyle.txt}>
          {`${title}: ${value}`}
        </Text>
      </View>
    );
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewTop}>
        <View style={themedStyle.viewTopLeft}>
          {PeopleIconOther(themedStyle.icon)}
          <Text
            style={[
              themedStyle.txtGroup,
              themedStyle.txt,
            ]}>
            {`Tổ: ${attendance.group}`}
          </Text>
        </View>
        <View style={themedStyle.viewTopRight}>
          <View style={themedStyle.viewTxtPercent}>
            <Text
              style={[
                themedStyle.txtPresent,
                { width: `${getPercent(attendance.present, attendance.absent)}%` },
              ]}>
              {`${getPercent(attendance.present, attendance.absent)}%`}
            </Text>
            <Text style={themedStyle.txtAbsent}>
              {`${getPercent(attendance.absent, attendance.present)}%`}
            </Text>
          </View>
          <View style={themedStyle.viewPercent}>
            <View
              style={[
                themedStyle.viewPresentPercent,
                { width: `${getPercent(attendance.present, attendance.absent)}%` },
              ]}
            />
          </View>
        </View>
      </View>
      <View style={themedStyle.viewBottom}>
        <Text style={themedStyle.txt}>
          {`Tổng số đại biểu: ${attendance.present + attendance.absent}`}
        </Text>
        <View style={themedStyle.viewDescription}>
          {renderDescription('Đại biểu có mặt', attendance.present)}
          {renderDescription('Đại biểu vắng mặt', attendance.absent, true)}
        </View>
      </View>
    </View>
  );
};

export const GroupAttendanceItem = withStyles(GroupAttendanceItemComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-primary-22'],
    paddingTop: pxToPercentage(5),
    paddingHorizontal: pxToPercentage(10),
    marginBottom: pxToPercentage(5),
  },
  txt: {
    fontSize: pxToPercentage(14),
  },
  viewTop: {
    flexDirection: 'row',
    height: pxToPercentage(40),
  },
  viewTopLeft: {
    width: pxToPercentage(80),
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: pxToPercentage(3),
  },
  icon: {
    width: pxToPercentage(34.16),
    height: pxToPercentage(17),
    tintColor: theme['color-primary-23'],
  },
  txtGroup: {
    marginLeft: pxToPercentage(7),
  },
  viewTopRight: {
    flex: 1,
    justifyContent: 'center',
  },
  viewPercent: {
    height: pxToPercentage(10),
    flexDirection: 'row',
    backgroundColor: theme['color-primary-19'],
    borderRadius: pxToPercentage(5),
    overflow: 'hidden',
  },
  viewPresentPercent: {
    backgroundColor: theme['color-primary-2'],
    borderTopRightRadius: pxToPercentage(5),
    borderBottomRightRadius: pxToPercentage(5),
  },
  viewTxtPercent: {
    flexDirection: 'row',
  },
  txtPresent: {
    textAlign: 'center',
    color: theme['color-primary-2'],
  },
  txtAbsent: {
    textAlign: 'center',
    color: theme['color-primary-19'],
    flex: 1,
  },
  viewBottom: {
    height: pxToPercentage(60),
    paddingVertical: pxToPercentage(10),
  },
  viewDescription: {
    flexDirection: 'row',
  },
  viewBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: pxToPercentage(5),
  },
  viewCircle: {
    width: pxToPercentage(12),
    height: pxToPercentage(12),
    borderRadius: pxToPercentage(6),
    backgroundColor: theme['color-primary-2'],
    marginRight: pxToPercentage(10),
  },
  viewCircleAbsent: {
    backgroundColor: theme['color-primary-19'],
  },
}));
