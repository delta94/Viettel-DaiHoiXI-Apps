import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageProps,
  TextInput,
  Button,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  StyleType,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { Program as ProgramModel } from '@src/core/models/program/program.model';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';
import { BackHeader } from '@src/components/header/backHeader.component';
import { ProgramTabEnum } from '@src/core/utils/constants';
import { ProgramTablet } from './tabs/tablet/program.component.tablet';
import { PressReleaseTablet } from './tabs/tablet/pressRelease.component.tablet';
import { NotificationTablet } from './tabs/tablet/notification.component.tablet';

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
  const [selectedTab, setSelectedTab] = useState<number>();

  const onNotificationItemPress = (notification: NotificationModel): void => {
    props.onNotificationItemPress(notification);
  };

  const onPressReleaseItemPress = (pressReleae: PressReleaseModel): void => {
    props.onPressReleaseItemPress(pressReleae);
  };

  const onMessagePress = (): void => {

  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {

  };

  const { themedStyle } = props;

  const renderTabBtn = (type: number, title: string): React.ReactElement => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          themedStyle.btnTab,
          selectedTab === type && themedStyle.btnTabSelected,
          type === 0 && themedStyle.isTop,
        ]}
        onPress={() => setSelectedTab(type)}>
        <Text
          style={[
            themedStyle.txtBtnTab,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const getTitleByType = (): string => {
    switch (selectedTab) {
      case ProgramTabEnum.ChuongTrinh: {
        return 'CHƯƠNG TRÌNH';
      }
      case ProgramTabEnum.ThongCao: {
        return 'THÔNG CÁO';
      }
      case ProgramTabEnum.ThongBao: {
        return 'THÔNG BÁO';
      }
      default: {
        return undefined;
      }
    }
  };

  return (
    <View style={themedStyle.container}>
      <BackHeader
        title={getTitleByType()}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress}
      />
      <View style={themedStyle.viewRow}>
        <View style={themedStyle.viewTab}>
          {renderTabBtn(0, '7 chương trình đột phá')}
          {renderTabBtn(1, 'Về tăng cường xây dựng chỉnh đốn Đảng;')}
          {renderTabBtn(2, 'Công tác kết nạp đảng viên và tình hình đảng viên ra khỏi Đảng')}
          {renderTabBtn(3, 'Nhiệm vụ kinh tế - xã hội')}
          {renderTabBtn(4, 'Danh sách tổ')}
        </View>
        <View style={themedStyle.viewCard}>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={themedStyle.textInput}
            placeholder='Nhập trích yếu/ số văn bản'/>
            <TouchableOpacity style={themedStyle.btnTimKiem}>
              <Text style={themedStyle.txtTimKiem}>TÌM KIẾM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={themedStyle.btnYeuCau}>
              <Text style={themedStyle.txtYeuCau}>YÊU CẦU TÀI LIỆU</Text>
            </TouchableOpacity>
          </View>
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
    borderRadius: pxToPercentage(32),
    backgroundColor: 'white',
    justifyContent: 'center',
    width: pxToPercentage(488),
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
    flex: 1,
    borderTopWidth: pxToPercentage(2),
    borderColor: 'red',
    overflow: 'hidden',
    borderTopLeftRadius: pxToPercentage(32),
    borderTopRightRadius: pxToPercentage(32),
  },
  btnTabSelected: {
    backgroundColor: theme['color-primary-19'],
  },
  txtBtnTab: {
    fontSize: pxToPercentage(34),
    marginTop: pxToPercentage(20),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayBold,
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
  isTop: {
    borderTopWidth: 0,
  },
  textInput: {
    width: pxToPercentage(393),
    height: pxToPercentage(72),
    borderWidth: pxToPercentage(2),
    borderRadius: pxToPercentage(32),
  },
  btnTimKiem: {
    width: pxToPercentage(355),
    height: pxToPercentage(80),
    borderRadius: pxToPercentage(32),
    backgroundColor: theme['color-primary-0'],
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: pxToPercentage(28),
    marginRight: pxToPercentage(261),
  },
  txtTimKiem: {
    color: theme['color-primary-2'],
    fontSize: pxToPercentage(34),
  },
  btnYeuCau: {
    width: pxToPercentage(400),
    height: pxToPercentage(80),
    borderRadius: pxToPercentage(32),
    backgroundColor: theme['color-primary-2'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtYeuCau: {
    color: theme['color-primary-0'],
    fontSize: pxToPercentage(34),
  },
}));
