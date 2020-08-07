import React from 'react';
import {
  View,
  Text,
  processColor,
  ScrollView,
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
  HallAttendance as HallAttendanceModel,
  HallAttendanceContent,
} from '@src/core/models/attendance/hallAttendance/hallAttendance.model';
import { DateList } from '../../conferenceInfo/dateList.component';

interface ComponentProps {
  attendances: HallAttendanceModel[];
}

export type HallAttendanceProps = ThemedComponentProps & ComponentProps;

const HallAttendanceComponent: React.FunctionComponent<HallAttendanceProps> = (props) => {
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
            valueTextSize: pxToPercentage(15),
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

  const renderTitle = (color?: string, title?: string): React.ReactElement => {
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
            size: pxToPercentage(18),
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
      <DateList />
      <ScrollView>
        <View style={themedStyle.viewDescription}>
          <View style={themedStyle.containerTitle}>
            {renderTitle()}
            {renderTitle('rgba(172,32,5,1)', 'Có mặt tại hội trường')}
            {renderTitle('rgba(255, 194, 85,1)', 'Vắng có lý do')}
            {renderTitle('rgba(149, 138, 131,1)', 'Vắng không lý do')}
          </View>
          {renderSection()}
        </View>
        <View style={themedStyle.viewChart}>
          {renderChart()}
        </View>
      </ScrollView>
    </View>
  );
};

export const HallAttendance = withStyles(HallAttendanceComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  viewChart: {
    width: '100%',
    paddingVertical: pxToPercentage(5),
    alignItems: 'center',
  },
  chart: {
    width: pxToPercentage(200),
    height: pxToPercentage(200),
    justifyContent: 'center',
  },
  viewDescription: {
    height: pxToPercentage(155),
    flexDirection: 'row',
    paddingBottom: pxToPercentage(10),
    paddingHorizontal: pxToPercentage(5),
    borderTopWidth: pxToPercentage(3),
    borderBottomWidth: pxToPercentage(3),
    borderColor: theme['color-primary-11'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTitle: {
    width: pxToPercentage(180),
  },
  viewTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme['color-primary-31'],
    paddingHorizontal: pxToPercentage(10),
    margin: pxToPercentage(2),
  },
  txtTitle: {
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
  },
  viewCircle: {
    borderRadius: pxToPercentage(5),
    marginTop: pxToPercentage(2),
    marginRight: pxToPercentage(10),
    width: pxToPercentage(10),
    height: pxToPercentage(10),
  },
  viewSection: {
    width: pxToPercentage(80),
  },
  containerData: {
    flex: 1,
    backgroundColor: theme['color-primary-31'],
    margin: pxToPercentage(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtData: {
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
  },
}));
