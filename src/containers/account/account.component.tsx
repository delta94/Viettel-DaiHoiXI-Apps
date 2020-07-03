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
import { ProfileInfoV1 } from '@src/components/profileInfo/profileInfoV1.component';
import { userDataFake } from '@src/core/data/user';
import { pxToPercentage } from '@src/core/utils/utils';
import { isTablet } from 'react-native-device-info';
import { QRCodeIcon, LogoutIcon, InfomationIcon } from '@src/assets/icons';
import { SettingButton } from '@src/components/settingButton/settingButton.component';
import { SettingSwitch } from '@src/components/settingButton/settingSwitch.component';
import { SafeAreaView } from 'react-navigation';
import { textStyle } from '@src/components/textStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ComponentProps {
  onLogoutPress: () => void;
}

export type AccountProps = ThemedComponentProps & ComponentProps;

const AccountComponent: React.FunctionComponent<AccountProps> = (props) => {
  const onLogoutButtonPress = (): void => {
    props.onLogoutPress();
  };

  const { themedStyle } = props;

  return (

    <View style={themedStyle.container}>
      <SafeAreaView style={themedStyle.container}>
        <View style={themedStyle.viewHeader}>
          <Text style={themedStyle.txtHeader}>
            {'Tài khoản'}
          </Text>
        </View>
        <View style={themedStyle.viewBody}>
          <ProfileInfoV1
            user={userDataFake}
            style={themedStyle.profileInfo}
          />
          <View style={themedStyle.viewContent}>
            <SettingButton
              title={'Mã QR'}
              iconLeft={QRCodeIcon} />
            <Text style={themedStyle.txtTitle}>
              {'QUẢN LÝ ĐĂNG NHẬP'}
            </Text>
            <SettingButton
              title={'Lịch sử đăng nhập'} />
            <SettingSwitch
              title={'Đăng nhập bằng vân tay'} />
            <SettingSwitch
              title={'Đăng nhập bằng nhận diện khuôn mặt'} />
            <SettingButton
              style={themedStyle.settingButton}
              title={'Thông tin ứng dụng'}
              iconLeft={InfomationIcon} />
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
    backgroundColor: 'rgba(242, 242, 242, 1)',
  },
  viewHeader: {
    height: isTablet() ? pxToPercentage(50) : pxToPercentage(80),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  viewBody: {
    flex: 1,
  },
  profileInfo: {
    paddingVertical: isTablet() ? pxToPercentage(5) : pxToPercentage(15),
    paddingHorizontal: pxToPercentage(15),
    backgroundColor: theme['background-basic-color-1'],
  },
  viewContent: {
    flex: 1,
  },
  btnLogout: {
    height: isTablet() ? pxToPercentage(30) : pxToPercentage(40),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: pxToPercentage(4),
    marginBottom: isTablet() ? pxToPercentage(5) : pxToPercentage(15),
    flexDirection: 'row',
    borderWidth: pxToPercentage(1),
    borderColor: 'red',
  },
  txtHeader: {
    fontSize: isTablet() ? pxToPercentage(15) : pxToPercentage(18),
    paddingTop: pxToPercentage(14),
    color: 'white',
    ...textStyle.bold,
  },
  txtTitle: {
    fontSize: isTablet() ? pxToPercentage(12) : pxToPercentage(14),
    ...textStyle.regular,
    paddingTop: isTablet() ? pxToPercentage(13) : pxToPercentage(18),
    paddingLeft: isTablet() ? pxToPercentage(14) : pxToPercentage(11.5),
  },
  settingButton: {
    marginTop: isTablet() ? pxToPercentage(12) : pxToPercentage(15),
  },
  txtBtnLogout: {
    color: 'red',
    fontSize: isTablet() ? pxToPercentage(10) : pxToPercentage(13),
    ...textStyle.bold,
    marginLeft: pxToPercentage(10),
  },
  iconLogout: {
    width: pxToPercentage(16),
    height: pxToPercentage(16),
    tintColor: 'red',
  },
}));
