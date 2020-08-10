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
import { PieChart } from 'react-native-charts-wrapper';
import { textStyle } from '@src/components';
import {
  HallAttendance,
  HallAttendanceContent,
} from '@src/core/models/attendance/hallAttendance/hallAttendance.model';

interface ComponentProps {
  attendances: HallAttendance[];
}

export type AttendanceHallTabletProps = ThemedComponentProps & ComponentProps;

const AttendanceHallTabletComponent: React.FunctionComponent<AttendanceHallTabletProps> = (props) => {
  const { themedStyle } = props;

  const getData = (attendance: HallAttendanceContent): any => {
    const data = {
      dataSets: [
        {
          label: 'Diem danh',
          values: [
            { value: attendance.present },
            { value: attendance.absent },
            { value: attendance.leave },
          ],
          config: {
            colors: [
              processColor('rgba(172,32,5,1)'),
              processColor('rgba(149, 138, 131,1)'),
              processColor('rgba(255, 194, 85,1)'),
            ],
            valueTextSize: pxToPercentage(28),
            valueTextColor: processColor('white'),
            valueFormatter: '#\'%\'',
          },
        },
      ],
    };

    return data;
  };

  const getAllPeople = (attendance: HallAttendanceContent) => {
    return attendance.absent + attendance.present + attendance.leave;
  };

  const renderTitle = (color?: string, title?: string | number): React.ReactElement => {
    return (
      <View
        style={[
          themedStyle.viewTitle,
          !title && { backgroundColor: 'white' },
        ]}>
        {color && <View style={[themedStyle.viewCircle, { backgroundColor: color }]} />}
        {title &&
          (<Text style={themedStyle.txtTitle}>
            {title}
          </Text>)}
      </View>
    );
  };

  const renderSection = (): React.ReactElement[] => {
    return props.attendances.map((item, index) => {
      return (
        <View style={themedStyle.viewSection}>
          {renderData(item.section, true)}
          {renderData(item.attendance.present)}
          {renderData(item.attendance.leave)}
          {renderData(item.attendance.absent)}
        </View>
      );
    });
  };

  const renderData = (value: string | number, isTitle?: boolean): React.ReactElement => {
    return (
      <View
        style={[
          themedStyle.containerData,
          isTitle && { backgroundColor: 'white' },
        ]}>
        <Text style={themedStyle.txtData}>
          {value}
        </Text>
      </View>
    );
  };

  const renderChart = (): React.ReactElement[] => {
    return props.attendances.map((item, index) => {
      return (
        <PieChart
          key={index}
          style={themedStyle.chart}
          touchEnabled={false}
          chartBackgroundColor={processColor('white')}
          chartDescription={{ text: '' }}
          styledCenterText={{
            text: `${getAllPeople(item.attendance)}\n${item.section}`,
            color: processColor('rgba(172,32,5,1)'),
            size: pxToPercentage(40),
          }}
          data={getData(item.attendance)}
          legend={{ enabled: false }}
          centerTextRadiusPercent={90}
          holeRadius={60}
          holeColor={processColor('white')}
          transparentCircleRadius={1}
          usePercentValues={true}
          rotationEnabled={false}
        />
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewChart}>
        {renderChart()}
      </View>
      <View style={themedStyle.viewRight}>
        <View style={themedStyle.containerTitle}>
          {renderTitle()}
          {renderTitle('rgba(172,32,5,1)', 'Có mặt tại hội trường')}
          {renderTitle('rgba(255, 194, 85,1)', 'Vắng có lý do')}
          {renderTitle('rgba(149, 138, 131,1)', 'Vắng không lý do')}
        </View>
        {renderSection()}
      </View>
    </View>
  );
};

export const AttendanceHallTablet = withStyles(AttendanceHallTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  viewChart: {
    width: pxToPercentage(712),
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: pxToPercentage(22),
  },
  chart: {
    width: pxToPercentage(430),
    height: pxToPercentage(430),
    justifyContent: 'center',
  },
  viewRight: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerTitle: {
    height: pxToPercentage(350),
    width: pxToPercentage(430),
  },
  viewTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme['color-primary-31'],
    paddingHorizontal: pxToPercentage(35),
    margin: pxToPercentage(3),
  },
  txtTitle: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  viewCircle: {
    borderRadius: pxToPercentage(50),
    marginRight: pxToPercentage(15),
    width: pxToPercentage(35),
    height: pxToPercentage(35),
  },
  viewSection: {
    height: pxToPercentage(350),
    width: pxToPercentage(200),
  },
  containerData: {
    flex: 1,
    backgroundColor: theme['color-primary-31'],
    margin: pxToPercentage(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtData: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
}));
