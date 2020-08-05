import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { GroupAttendance as GroupAttendanceModel } from '@src/core/models/attendance/groupAttendance/groupAttendance.model';
import { GroupAttendanceContent } from '@src/core/models/attendance/groupAttendance/groupAttendance.model';
import { GroupAttendanceItem } from './groupAttendanceItem.component';
import { DateList } from '../../conferenceInfo/dateList.component';
import {
  TabView,
  Tab,
} from 'react-native-ui-kitten/ui';
import { textStyle } from '@src/components/textStyle';

interface ComponentProps {
  groupAttendance: GroupAttendanceModel[];
}

export type GroupAttendanceProps = ThemedComponentProps & ComponentProps;

const GroupAttendanceComponent: React.FunctionComponent<GroupAttendanceProps> = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState<number>(0);

  const onTabSelect = (selectedTabIndexParam: number) => {
    setSelectedTabIndex(selectedTabIndexParam);
  };
  const { themedStyle } = props;

  const renderSection = (section: string): React.ReactElement[] => {
    return props.groupAttendance.map((item, index) => {
      if (section === item.section) {
        return (
          <View
            key={index}
            style={themedStyle.viewSection}>
            {renderRow(item.attendance)}
          </View>
        );
      }
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
      <View style={themedStyle.viewContent}>
        <TabView
          style={themedStyle.tabView}
          tabBarStyle={themedStyle.tabBar}
          indicatorStyle={themedStyle.tabViewIndicator}
          selectedIndex={selectedTabIndex}
          onSelect={onTabSelect}>
          <Tab
            title='SÁNG'
            titleStyle={themedStyle.tabTitle}>
            <ScrollView>
              {renderSection('SÁNG')}
            </ScrollView>
          </Tab>
          <Tab
            title='CHIỀU'
            titleStyle={themedStyle.tabTitle}>
            <ScrollView>
              {renderSection('CHIỀU')}
            </ScrollView>
          </Tab>
        </TabView>
      </View>
    </View >
  );
};

export const GroupAttendance = withStyles(GroupAttendanceComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  viewSection: {
    flex: 1,
  },
  viewContent: {
    flex: 1,
    borderTopWidth: pxToPercentage(4),
    borderColor: theme['color-primary-11'],
  },
  tabView: {
    flex: 1,
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
    fontSize: pxToPercentage(12),
    paddingVertical: pxToPercentage(5),
  },
}));
