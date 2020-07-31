import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { imageBackGroundSignInPhone } from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  textStyle,
  ValidationInput,
  ScrollableAvoidKeyboard,
} from '@src/components';
import { NumberValidator } from '@src/core/validators';
import { Button } from '@src/components/button/button.component';
import { ArrowPrevIcon } from '@src/assets/icons';
import { SwitchSetting } from '@src/components/switch/switchSetting.component';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';

interface ComponentProps {
  onResendOtpPress: () => void;
  onConfirmPress: (otp: string) => void;
  onBackPress: () => void;
}

export type OtpProps = ComponentProps & ThemedComponentProps;

const OtpComponent: React.FunctionComponent<OtpProps> = (props) => {
  const [otp, setOtp] = useState<string | undefined>(undefined);

  const onResendOtpButtonPress = (): void => {
    props.onResendOtpPress();
  };

  const onConfirmButtonPress = (): void => {
    props.onConfirmPress(otp);
  };

  const onOtpInputTextChange = (otpParam: string) => {
    setOtp(otpParam);
  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const { themedStyle } = props;

  return (
    <ScrollableAvoidKeyboard>
      <View style={themedStyle.viewStatusBar} />
      <ImageBackground
        resizeMode='stretch'
        source={imageBackGroundSignInPhone.imageSource}
        style={themedStyle.container}>
        <View style={themedStyle.sectionHeader}>
          <Text style={themedStyle.txtHeaderTitle}>
            {'ĐẠI HỘI XI'}
          </Text>
          <Text style={themedStyle.txtHeaderSubtitle}>
            {'ĐẢNG BỘ THÀNH PHỐ\n HỒ CHÍ MINH'}
          </Text>
        </View>
        <View style={themedStyle.viewHeader}>
          <View style={themedStyle.viewHeaderLeftRight}>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={onBackPress}>
              {ArrowPrevIcon(themedStyle.iconBack)}
            </TouchableOpacity>
          </View>
          <Text style={themedStyle.txtHeaderTitle}>
            {'NHẬP MÃ OTP'}
          </Text>
          <View style={themedStyle.viewHeaderLeftRight} />
        </View>
        <View style={themedStyle.viewBody}>
          <Text style={themedStyle.txtOtpNote}>
            {'Điền vào đoạn mã OTP được gửi đến\nsố +84 941219915'}
            {'\nThời gian hiệu lực 3:10'}
          </Text>

          <ValidationInput
            style={themedStyle.inputOtp}
            placeholder='Mã OTP'
            validator={NumberValidator}
            onChangeText={onOtpInputTextChange}
          />
          <View style={themedStyle.viewBtn}>
            <Button
              title={'GỬI MÃ LẠI'}
              titleStyle={themedStyle.txtBtn}
              style={themedStyle.btn}
              onPress={onResendOtpButtonPress} />
            <Button
              title={'XÁC NHẬN'}
              titleStyle={themedStyle.txtAccept}
              style={themedStyle.btnAccept}
              onPress={onConfirmButtonPress} />
          </View>
        </View>
      </ImageBackground>
    </ScrollableAvoidKeyboard>
  );
};

export const Otp = withStyles(OtpComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(12),
    backgroundColor: theme['color-custom-100'],
  },
  viewStatusBar: {
    height: getStatusBarHeight(false),
    backgroundColor: theme['color-primary-2'],
  },
  sectionHeader: {
    justifyContent: 'flex-end',
    marginTop: pxToPercentage(150),
  },
  txtHeaderTitle: {
    fontSize: pxToPercentage(32),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayBold,
    textAlign: 'right',
  },
  txtHeaderSubtitle: {
    fontSize: pxToPercentage(24),
    marginTop: pxToPercentage(7),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayBold,
    textAlign: 'right',
  },
  btnSignIn: {
    marginTop: pxToPercentage(20),
  },
  imgBg: {
    flex: 1,
    alignItems: 'flex-end',
  },
  scrollViewContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: pxToPercentage(1),
  },
  viewBody: {
    flex: 1,
  },
  iconBack: {
    width: pxToPercentage(32),
    height: pxToPercentage(30),
    tintColor: theme['color-primary-2'],
  },
  txtOtpNote: {
    textAlign: 'center',
    marginTop: pxToPercentage(11),
    fontSize: pxToPercentage(18),
    ...textStyle.proDisplayRegular,
  },
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pxToPercentage(16),
  },
  btn: {
    width: '49%',
    borderRadius: pxToPercentage(28),
    height: pxToPercentage(48),
    backgroundColor: theme['color-primary-2'],
  },
  btnAccept: {
    width: '49%',
    height: pxToPercentage(48),
    borderRadius: pxToPercentage(16),
    backgroundColor: theme['color-primary-0'],
  },
  txtAccept: {
    fontSize: pxToPercentage(18),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayBold,
  },
  txtBtn: {
    color: theme['color-primary-0'],
    ...textStyle.proDisplayBold,
    fontSize: pxToPercentage(18),
  },
  viewBottom: {
    paddingBottom: pxToPercentage(20),
  },
  inputOtp: {
    marginTop: pxToPercentage(9),
  },
}));
