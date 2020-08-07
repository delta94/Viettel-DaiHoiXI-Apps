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

export type GroupAttendanceItemTabletProps = ThemedComponentProps & ComponentProps;

const GroupAttendanceItemTabletComponent: React.FunctionComponent<GroupAttendanceItemTabletProps> = (props) => {
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
              {`${100 - getPercent(attendance.present, attendance.absent)}%`}
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

export const GroupAttendanceItemTablet = withStyles(GroupAttendanceItemTabletComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-primary-22'],
    paddingTop: pxToPercentage(10),
    paddingHorizontal: pxToPercentage(20),
    marginBottom: pxToPercentage(8),
  },
  txt: {
    fontSize: pxToPercentage(34),
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
  icon: {
    width: pxToPercentage(68.32),
    height: pxToPercentage(34),
    tintColor: theme['color-primary-23'],
    marginBottom: pxToPercentage(6),
  },
  txtGroup: {
    marginLeft: pxToPercentage(20),
  },
  viewTopRight: {
    flex: 1,
    justifyContent: 'center',
  },
  viewPercent: {
    height: pxToPercentage(20),
    flexDirection: 'row',
    backgroundColor: theme['color-custom-1000'],
    borderRadius: 10,
    overflow: 'hidden',
  },
  viewPresentPercent: {
    backgroundColor: theme['color-primary-2'],
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
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
    flex: 1,
  },
  viewBottom: {
    height: pxToPercentage(138),
    paddingVertical: pxToPercentage(20),
  },
  viewDescription: {
    flexDirection: 'row',
    marginTop: pxToPercentage(5),
  },
  viewBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: pxToPercentage(5),
  },
  viewCircle: {
    width: pxToPercentage(25),
    height: pxToPercentage(25),
    borderRadius: pxToPercentage(50),
    backgroundColor: theme['color-primary-2'],
    marginRight: pxToPercentage(20),
  },
  viewCircleAbsent: {
    backgroundColor: theme['color-custom-1000'],
  },
}));
