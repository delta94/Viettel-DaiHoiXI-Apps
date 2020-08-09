import React, { useState, useEffect } from 'react';
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
import { imageBgTablet, imageFlag } from '@src/assets/images';
import { pxToPercentage, tenMinutesCountdown } from '@src/core/utils/utils';
import {
  textStyle,
  ValidationInput,
  ScrollableAvoidKeyboard,
} from '@src/components';
import { StringValidator } from '@src/core/validators';
import { Button } from '@src/components/button/button.component';
import { ArrowPrevIcon } from '@src/assets/icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { alerts } from '@src/core/utils/alerts';
import { OTPTime } from '@src/core/utils/constants';

interface ComponentProps {
  phoneNumber: string | undefined;
  onResendOtpPress: () => void;
  onConfirmPress: (otp: string) => void;
  onBackPress: () => void;
}

export type OtpTabletProps = ComponentProps & ThemedComponentProps;

const OtpTabletComponent: React.FunctionComponent<OtpTabletProps> = (props) => {
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
      props.onConfirmPress(otp);
    } else {
      alerts.alert({ message: 'Thời gian hiệu lực của mã Otp đã hết!' });
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
    <React.Fragment>
      <View style={themedStyle.viewStatusBar} />
      <ImageBackground
        source={imageBgTablet.imageSource}
        style={themedStyle.container}>
        <Image
          source={imageFlag.imageSource}
          style={themedStyle.imgFlag}
        />
        <ScrollableAvoidKeyboard
          style={themedStyle.container}
          contentContainerStyle={themedStyle.scrollViewContainer}>
          <View style={themedStyle.sectionBox}>
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
              </Text>
              <Text style={themedStyle.txtOtpNote}>
                {`\nThời gian hiệu lực ${tenMinutesCountdown(time)}`}
              </Text>
              <ValidationInput
                value={otp}
                style={themedStyle.inputOtp}
                placeholder='Mã OTP'
                validator={StringValidator}
                onChangeText={onOtpInputTextChange}
                keyboardType='phone-pad'
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
            <View style={themedStyle.viewBottom}>
            </View>
          </View>
        </ScrollableAvoidKeyboard>
      </ImageBackground>
    </React.Fragment>
  );
};

export const OtpTablet = withStyles(OtpTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  viewStatusBar: {
    height: getStatusBarHeight(false),
    backgroundColor: theme['color-primary-2'],
  },
  imgFlag: {
    position: 'absolute',
    width: pxToPercentage(1500),
    height: pxToPercentage(1500) * (901 / 1854),
  },
  scrollViewContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: pxToPercentage(200),
  },
  sectionBox: {
    width: pxToPercentage(860),
    height: '100%',
    paddingTop: pxToPercentage(210),
  },
  viewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: pxToPercentage(100),
    paddingHorizontal: pxToPercentage(16),
  },
  viewBody: {
    flex: 1,
  },
  viewHeaderLeftRight: {
    width: pxToPercentage(100),
  },
  txtHeaderTitle: {
    fontSize: pxToPercentage(58),
    ...textStyle.proTextSemibold,
    color: theme['color-primary-2'],
  },
  iconBack: {
    width: pxToPercentage(70),
    height: pxToPercentage(70),
    tintColor: theme['color-primary-2'],
  },
  txtOtpNote: {
    textAlign: 'center',
    marginTop: pxToPercentage(20),
    marginHorizontal: pxToPercentage(64),
    fontSize: pxToPercentage(34),
    ...textStyle.proTextRegular,
  },
  inputOtp: {
    marginTop: pxToPercentage(34),
  },
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pxToPercentage(40),
  },
  btn: {
    width: '49%',
    borderRadius: pxToPercentage(28),
    height: pxToPercentage(95),
    backgroundColor: theme['color-primary-2'],
  },
  btnAccept: {
    width: '49%',
    height: pxToPercentage(95),
    borderRadius: pxToPercentage(28),
    backgroundColor: theme['color-primary-0'],
  },
  txtAccept: {
    color: theme['color-primary-2'],
  },
  txtBtn: {
    color: theme['color-primary-0'],
  },
  viewBottom: {
    paddingBottom: pxToPercentage(20),
  },
}));
