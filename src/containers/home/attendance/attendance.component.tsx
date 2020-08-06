import React, { useState } from 'react';
import {
  View,
} from 'react-native';
import {
  TabView,
  Tab,
  TabBar,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import {
  PeopleIconOther,
  HallIcon,
} from '@src/assets/icons';
import { HallAttendance as HallAttendanceModel } from '@src/core/models/attendance/hallAttendance/hallAttendance.model';
import { GroupAttendance as GroupAttendanceModel } from '@src/core/models/attendance/groupAttendance/groupAttendance.model';
import { HallAttendance } from './tabs/hallAttendance.component';
import { GroupAttendance } from './tabs/groupAttendance.component';
import { DateList } from '../conferenceInfo/dateList.component';
import { AttendanceTabEnum } from '@src/core/utils/constants';

interface ComponentProps {
  hallAttendance: HallAttendanceModel[];
  groupAttendance: GroupAttendanceModel[];
}

export type AttendanceProps = ComponentProps & ThemedComponentProps;

const AttendanceComponent: React.FunctionComponent<AttendanceProps> = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const onTabSelect = (selectedTabIndexParam: number) => {
    setSelectedTabIndex(selectedTabIndexParam);
  };

  const { themedStyle } = props;

  const renderTabSelected = (): React.ReactElement => {
    switch (selectedTabIndex) {
      case AttendanceTabEnum.Hall: {
        return (
          <HallAttendance attendances={props.hallAttendance} />
        );
      }
      case AttendanceTabEnum.Group: {
        return (
          <GroupAttendance groupAttendance={props.groupAttendance} />
        );
      }
      default: {
        return undefined;
      }
    }
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewContent}>
        <TabBar
          style={themedStyle.tabView}
          indicatorStyle={themedStyle.tabViewIndicator}
          selectedIndex={selectedTabIndex}
          onSelect={onTabSelect}>
          <Tab
            title='Hội trường'
            icon={HallIcon}
            titleStyle={themedStyle.tabTitle} />
          <Tab
            title='Tổ'
            icon={PeopleIconOther}
            titleStyle={themedStyle.tabTitle} />
        </TabBar>
        <DateList />
        {renderTabSelected()}
      </View>
    </View>
  );
};

export const Attendance = withStyles(AttendanceComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    paddingBottom: pxToPercentage(10),
    backgroundColor: theme['color-primary-11'],
  },
  viewContent: {
    flex: 1,
    borderTopLeftRadius: pxToPercentage(12.5),
    borderTopRightRadius: pxToPercentage(12.5),
    overflow: 'hidden',
  },
  tabView: {
    backgroundColor: theme['color-primary-11'],
  },
  tabBar: {
    backgroundColor: theme['color-custom-100'],
  },
  tabViewIndicator: {
    backgroundColor: theme['color-primary-2'],
  },
  tabTitle: {
    fontWeight: '500',
    ...textStyle.proTextRegular,
    fontSize: pxToPercentage(13),
    paddingVertical: pxToPercentage(3),
  },
}));
