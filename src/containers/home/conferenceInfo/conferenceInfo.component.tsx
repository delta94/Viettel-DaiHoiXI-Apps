import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import {
  TabView,
  Tab,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { Program } from './tabs/program.component';
import { Notification } from './tabs/notification.component';
import { PressRelease } from './tabs/pressRelease.component';
import {
  PressReleaseIcon,
  SoundIcon,
  MenuIcon,
} from '@src/assets/icons';
import { Program as ProgramModel } from '@src/core/models/program/program.model';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';

interface ComponentProps {
  programs: ProgramModel[];
  notifications: NotificationModel[];
  onNotificationItemPress: (notification: NotificationModel) => void;
  pressReleases: PressReleaseModel[];
  onPressReleaseItemPress: (pressRelease: PressReleaseModel) => void;
}

export type ConferenceInfoProps = ComponentProps & ThemedComponentProps;

const ConferenceInfoComponent: React.FunctionComponent<ConferenceInfoProps> = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const onTabSelect = (selectedTabIndexParam: number) => {
    setSelectedTabIndex(selectedTabIndexParam);
  };

  const onNotificationItemPress = (notification: NotificationModel): void => {
    props.onNotificationItemPress(notification);
  };

  const onPressReleaseItemPress = (pressReleae: PressReleaseModel): void => {
    props.onPressReleaseItemPress(pressReleae);
  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewContent}>
        <TabView
          style={themedStyle.tabView}
          tabBarStyle={themedStyle.tabBar}
          indicatorStyle={themedStyle.tabViewIndicator}
          selectedIndex={selectedTabIndex}
          onSelect={onTabSelect}>
          <Tab
            title='Chương trình'
            icon={MenuIcon}
            titleStyle={themedStyle.tabTitle}>
            <Program programs={props.programs} />
          </Tab>
          <Tab
            title='Thông báo'
            icon={SoundIcon}
            titleStyle={themedStyle.tabTitle}>
            <Notification
              notifications={props.notifications}
              onNotificationItemPress={onNotificationItemPress}
            />
          </Tab>
          <Tab
            title='Thông cáo'
            icon={PressReleaseIcon}
            titleStyle={themedStyle.tabTitle}>
            <PressRelease
              pressReleases={props.pressReleases}
              onPressReleaseItemPress={onPressReleaseItemPress}
            />
          </Tab>
        </TabView>
      </View>
      <SafeAreaView />
    </View>
  );
};

export const ConferenceInfo = withStyles(ConferenceInfoComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    backgroundColor: theme['color-primary-11'],
  },
  viewContent: {
    flex: 1,
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  tabView: {
    flex: 1,
    backgroundColor: theme['color-primary-11'],
    borderRadius: pxToPercentage(12.5),
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
