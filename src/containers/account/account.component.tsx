import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ProfileInfoV1 } from '@src/components/profileInfo/profileInfoV1.component';
import { userDataFake } from '@src/core/data/user';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  QRCodeIcon,
  LogoutIcon,
  InfomationIcon,
} from '@src/assets/icons';
import { SettingButton } from '@src/components/settingButton/settingButton.component';
import { SettingSwitch } from '@src/components/settingButton/settingSwitch.component';
import { textStyle } from '@src/components/textStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ComponentProps {
  onLogoutPress: () => void;
  onQRCodePress: () => void;
}

export type AccountProps = ThemedComponentProps & ComponentProps;

const AccountComponent: React.FunctionComponent<AccountProps> = (props) => {
  const onQRCodeButtonPress = (): void => {
    props.onQRCodePress();
  };

  const onLogoutButtonPress = (): void => {
    props.onLogoutPress();
  };

  const { themedStyle } = props;

  return (

    <View style={themedStyle.container}>
      <SafeAreaView style={themedStyle.container}>
        <View style={themedStyle.viewBody}>
          <ProfileInfoV1
            user={userDataFake}
            style={themedStyle.profileInfo}
          />
          <View style={themedStyle.viewContent}>
            <SettingButton
              title={'Mã QR'}
              iconLeft={QRCodeIcon}
              onPress={onQRCodeButtonPress}
            />
            <Text style={themedStyle.txtTitle}>
              {'QUẢN LÝ ĐĂNG NHẬP'}
            </Text>
            <SettingButton
              title={'Lịch sử đăng nhập'}
            />
            <SettingSwitch
              title={'Đăng nhập bằng vân tay'}
            />
            <SettingSwitch
              title={'Đăng nhập bằng nhận diện khuôn mặt'}
            />
            <SettingButton
              style={themedStyle.btnSetting}
              title={'Thông tin ứng dụng'}
              iconLeft={InfomationIcon}
            />
          </View>
        </View>
        <TouchableOpacity
          style={themedStyle.btnLogout}
          onPress={onLogoutButtonPress}>
          {LogoutIcon(themedStyle.iconLogout)}
          <Text style={themedStyle.txtBtnLogout}>
            {'ĐĂNG XUẤT'}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export const Account = withStyles(AccountComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  viewBody: {
    flex: 1,
  },
  profileInfo: {
    paddingVertical: pxToPercentage(15),
    paddingHorizontal: pxToPercentage(15),
    backgroundColor: theme['background-basic-color-1'],
  },
  viewContent: {
    flex: 1,
  },
  btnLogout: {
    height: pxToPercentage(40),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: pxToPercentage(4),
    marginBottom: pxToPercentage(15),
    flexDirection: 'row',
    borderWidth: pxToPercentage(1),
    borderColor: 'red',
  },
  txtTitle: {
    fontSize: pxToPercentage(14),
    ...textStyle.regular,
    paddingTop: pxToPercentage(18),
    paddingLeft: pxToPercentage(11.5),
  },
  btnSetting: {
    marginTop: pxToPercentage(15),
  },
  txtBtnLogout: {
    color: 'red',
    fontSize: pxToPercentage(13),
    ...textStyle.bold,
    marginLeft: pxToPercentage(10),
  },
  iconLogout: {
    width: pxToPercentage(16),
    height: pxToPercentage(16),
    tintColor: 'red',
  },
}));
