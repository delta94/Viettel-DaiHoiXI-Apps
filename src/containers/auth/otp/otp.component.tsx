import React, {
  useState,
  useEffect,
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  imageBgPhone,
  imageFlag,
} from '@src/assets/images';
import {
  pxToPercentage,
  tenMinutesCountdown,
  isEmpty,
} from '@src/core/utils/utils';
import {
  textStyle,
  ValidationInput,
  ScrollableAvoidKeyboard,
} from '@src/components';
import { StringValidator } from '@src/core/validators';
import { Button } from '@src/components/button/button.component';
import { ArrowPrevIcon } from '@src/assets/icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { OTPTime } from '@src/core/utils/constants';
import { toasts } from '@src/core/utils/toasts';

interface ComponentProps {
  phoneNumber: string | undefined;
  onResendOtpPress: () => void;
  onConfirmPress: (otp: string) => void;
  onBackPress: () => void;
}

export type OtpProps = ComponentProps & ThemedComponentProps;

const OtpComponent: React.FunctionComponent<OtpProps> = (props) => {
  const [otp, setOtp] = useState<string | undefined>(undefined);
  const [time, setTime] = useState<number>(OTPTime);
  const [timer, setTimer] = useState<NodeJS.Timeout>(undefined);

  useEffect(() => {
    setTimer(setInterval(() => {
      setTime(prevState => prevState - 1);
    }, 1000));

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (time <= 0) {
      clearInterval(timer);
    }
  }, [time]);

  const onResendOtpButtonPress = (): void => {
    if (time <= 0) {
      setTime(OTPTime);
      setTimer(setInterval(() => {
        setTime(prevState => prevState - 1);
      }, 1000));
    } else {
      setTime(OTPTime);
    }

    props.onResendOtpPress();
  };

  const onConfirmButtonPress = (): void => {
    if (time > 0) {
      if (!isEmpty(otp)) {
        props.onConfirmPress(otp);
      } else {
        toasts.error('Mã xác nhận OTP không được trống!');
      }
    } else {
      toasts.error('Thời gian hiệu lực của mã Otp đã hết!');
    }
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
        source={imageBgPhone.imageSource}
        style={themedStyle.container}>
        <Image
          source={imageFlag.imageSource}
          style={themedStyle.imgFlag}
        />
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
            {`Điền vào đoạn mã OTP được gửi đến\nsố ${props.phoneNumber}`}
            {`\nThời gian hiệu lực ${tenMinutesCountdown(time)}`}
          </Text>
          <ValidationInput
            value={otp}
            viewContainerStyle={themedStyle.viewInputOTP}
            placeholder='Mã OTP'
            validator={StringValidator}
            onChangeText={onOtpInputTextChange}
            keyboardType='number-pad'
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
    paddingHorizontal: pxToPercentage(16),
    backgroundColor: theme['color-custom-100'],
  },
  viewStatusBar: {
    height: getStatusBarHeight(false),
    backgroundColor: theme['color-primary-2'],
  },
  imgFlag: {
    position: 'absolute',
    width: pxToPercentage(300),
    height: pxToPercentage(300) * (901 / 1854),
  },
  sectionHeader: {
    marginTop: pxToPercentage(65),
  },
  viewHeaderLeftRight: {
    flex: 1,
  },
  viewInputOTP: {
    marginTop: pxToPercentage(10),
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
    marginTop: pxToPercentage(20),
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
    marginTop: pxToPercentage(15),
  },
  btn: {
    width: '49%',
    borderRadius: pxToPercentage(16),
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
