import React, { useState } from 'react';
import {
  View,
} from 'react-native';
import {
  Tab,
  TabBar,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { Program } from './program/program.component';
import { NotificationAnnouncement } from './notificationAnnouncement/notificationAnnouncement.component';
import {
  PressReleaseIcon,
  SoundIcon,
  MenuIcon,
} from '@src/assets/icons';
import { Program as ProgramModel } from '@src/core/models/program/program.model';
import { Notification as NotificationModel, NotificationItem } from '@src/core/models/notification/notification.model';
import { Annoucement as AnnoucementModel, AnnoucementItem } from '@src/core/models/annoucement/annoucement.model';
import { ConferenceInfoEnum } from '@src/core/utils/constants';

interface ComponentProps {
  programs: ProgramModel[];
  notifications: NotificationModel[];
  onNotificationItemPress: (notification: NotificationItem) => void;
  annoucements: AnnoucementModel[];
  onAnnoucementItemPress: (annoucement: AnnoucementItem) => void;
}

export type MeetingDetailProps = ComponentProps & ThemedComponentProps;

const MeetingDetailComponent: React.FunctionComponent<MeetingDetailProps> = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [dates, setDates] = useState<string[]>([]);
  const [dateSelected, setDateSelected] = useState<string>('');

  React.useEffect(() => {
    const temp = onGetDateList();
    setDates(temp);
    setDateSelected(temp[0]);
  }, []);

  const onGetDateList = () => {
    const dateTemp: string[] = [];
    props.programs.forEach(item => {
      dateTemp.push(item.date);
    });
    return dateTemp;
  };

  const onTabSelect = (selectedTabIndexParam: number) => {
    setSelectedTabIndex(selectedTabIndexParam);
  };

  const onNotificationItemPress = (notification: NotificationItem): void => {
    props.onNotificationItemPress(notification);
  };

  const onAnnoucementItemPress = (annoucement: AnnoucementItem): void => {
    props.onAnnoucementItemPress(annoucement);
  };

  const onDatePress = (date: string): void => {
    setDateSelected(date);
  };

  const renderTabSelected = (): React.ReactElement => {
    switch (selectedTabIndex) {
      case ConferenceInfoEnum.program: {
        return (
          <Program
            programs={props.programs}
            dateList={dates}
            onDatePress={onDatePress}
            dateSelected={dateSelected} />
        );
      }
      case ConferenceInfoEnum.notification: {
        return (
          <NotificationAnnouncement
            notifications={props.notifications}
            onNotificationItemPress={onNotificationItemPress}
            dateSelected={dateSelected}
            dateList={dates}
            onDatePress={onDatePress}
            isNotifications
          />
        );
      }
      case ConferenceInfoEnum.pressRelease: {
        return (
          <NotificationAnnouncement
            notifications={props.annoucements}
            onNotificationItemPress={onAnnoucementItemPress}
            dateSelected={dateSelected}
            dateList={dates}
            onDatePress={onDatePress}
            isNotifications={false}
          />
        );
      }
      default: {
        return undefined;
      }
    }
  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewContent}>
        <TabBar
          style={themedStyle.tabView}
          indicatorStyle={themedStyle.tabViewIndicator}
          selectedIndex={selectedTabIndex}
          onSelect={onTabSelect}>
          <Tab
            title='Chương trình'
            icon={MenuIcon}
            titleStyle={themedStyle.tabTitle} />
          <Tab
            title='Thông báo'
            icon={SoundIcon}
            titleStyle={themedStyle.tabTitle} />
          <Tab
            title='Thông cáo'
            icon={PressReleaseIcon}
            titleStyle={themedStyle.tabTitle} />
        </TabBar>
        {renderTabSelected()}
      </View>
    </View>
  );
};

export const MeetingDetail = withStyles(MeetingDetailComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    paddingBottom: pxToPercentage(20),
    backgroundColor: theme['color-primary-11'],
  },
  viewContent: {
    flex: 1,
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  tabView: {
    backgroundColor: theme['color-primary-11'],
    borderTopLeftRadius: pxToPercentage(12.5),
    borderTopRightRadius: pxToPercentage(12.5),
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
  },
}));
