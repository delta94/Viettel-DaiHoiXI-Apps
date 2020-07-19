import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ImageProps,
} from 'react-native';
import {
  TabView,
  Tab,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  StyleType,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { Program } from './tabs/program.component';
import { Notification } from './tabs/notification.component';
import { PressRelease } from './tabs/pressRelease.component';
import {
  ListIconFill,
  FileTextIconFill,
  MenuIcon,
  PressReleaseIcon,
  SoundIcon,
} from '@src/assets/icons';
import { Program as ProgramModel } from '@src/core/models/program/program.model';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';
import { BackHeader } from '@src/components/header/backHeader.component';
import { ProgramTabEnum } from '@src/core/utils/constants';
import { DateSelector } from '@src/components/dateSelector/dateSelector.component';
import { ProgramTablet } from './tabs/tablet/program.component.tablet';
import { IconElement } from '@src/assets/icons/icon.component';

interface ComponentProps {
  programs: ProgramModel[];
  notifications: NotificationModel[];
  onNotificationItemPress: (notification: NotificationModel) => void;
  pressReleases: PressReleaseModel[];
  onPressReleaseItemPress: (pressRelease: PressReleaseModel) => void;
  onBackPress: () => void;
}

export type ConferenceInfoTabletProps = ComponentProps & ThemedComponentProps;

type IconProp = (style: StyleType) => React.ReactElement<ImageProps>;

const ConferenceInfoTabletComponent: React.FunctionComponent<ConferenceInfoTabletProps> = (props) => {
  const [selectedTab, setSelectedTab] = useState<number>(ProgramTabEnum.ChuongTrinh);

  const onTabSelect = (selectedTabIndexParam: number) => {
    setSelectedTab(selectedTabIndexParam);
  };

  const onNotificationItemPress = (notification: NotificationModel): void => {
    props.onNotificationItemPress(notification);
  };

  const onPressReleaseItemPress = (pressReleae: PressReleaseModel): void => {
    props.onPressReleaseItemPress(pressReleae);
  };

  const onMessagePress = (): void => {

  };

  const onDatePress = (): void => {

  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {

  };

  const { themedStyle } = props;

  const renderTabBtn = (type: number, title: string, icon: IconProp): React.ReactElement => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          themedStyle.btnTab,
          selectedTab === type && themedStyle.btnTabSelected,
        ]}
        onPress={() => setSelectedTab(type)}>
        {icon([
          themedStyle.iconMenu,
          selectedTab === type && themedStyle.iconSelected,
        ])}
        <Text
          style={[
            themedStyle.txtBtnTab,
            selectedTab === type && themedStyle.txtBtnTabSelected,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={themedStyle.container}>
      <BackHeader
        title={'CHƯƠNG TRÌNH'}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress}
      />
      <View style={themedStyle.viewRow}>
        <View style={themedStyle.viewTab}>
          {renderTabBtn(ProgramTabEnum.ChuongTrinh, 'Chương trình', MenuIcon)}
          {renderTabBtn(ProgramTabEnum.ThongBao, 'Thông báo', SoundIcon)}
          {renderTabBtn(ProgramTabEnum.ThongCao, 'Thông cáo', PressReleaseIcon)}
        </View>
        <View style={themedStyle.viewCard}>
          <DateSelector
            dateSelected={new Date()}
            numDates={4}
            onDatePress={onDatePress}
          />
          {selectedTab === ProgramTabEnum.ChuongTrinh &&
            (<ProgramTablet
              programs={props.programs}
            />)}
        </View>
      </View>
    </View>
  );
};

export const ConferenceInfoTablet = withStyles(ConferenceInfoTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewRow: {
    flex: 1,
    flexDirection: 'row',
  },
  viewTab: {
    justifyContent: 'center',
    width: pxToPercentage(260),
    marginRight: pxToPercentage(31),
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(40),
    padding: pxToPercentage(20),
    paddingTop: pxToPercentage(34),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  viewTable: {
    flex: 1,
    marginTop: pxToPercentage(28),
  },
  btnTab: {
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToPercentage(260),
    height: pxToPercentage(272),
    marginVertical: pxToPercentage(20),
    borderRadius: pxToPercentage(32),
    borderWidth: pxToPercentage(2),
    borderColor: theme['color-primary-19'],
  },
  btnTabSelected: {
    backgroundColor: theme['color-primary-19'],
  },
  txtBtnTab: {
    fontSize: pxToPercentage(34),
    marginTop: pxToPercentage(20),
    color: theme['color-custom-100'],
    ...textStyle.proDisplayBold,
  },
  txtBtnTabSelected: {
    color: theme['color-primary-2'],
  },
  txtTd: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  iconMenu: {
    height: pxToPercentage(82.63), // 56
    width: pxToPercentage(80),
    tintColor: theme['color-custom-100'],
  },
  iconSound: {
    width: pxToPercentage(82.63),
    height: pxToPercentage(94),
    tintColor: theme['color-custom-100'],
  },
  iconPressRelease: {
    width: pxToPercentage(82.63), // 76.21
    height: pxToPercentage(87.32),
    tintColor: theme['color-custom-100'],
  },
  iconSelected: {
    tintColor: theme['color-primary-2'],
  },
}));
