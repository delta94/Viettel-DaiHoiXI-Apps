import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  textStyle,
  ValidationInput,
  ScrollableAvoidKeyboard,
} from '@src/components';
import { NumberValidator } from '@src/core/validators';
import {
  Button,
  Layout,
} from '@kitten/ui';
import { viewStyle } from '@src/components/viewStyle';
import { ArrowIosBackFill } from '@src/assets/icons';

interface ComponentProps {
  onResendOtpPress: () => void;
  onConfirmPress: (otp: string) => void;
  onBackPress: () => void;
}

export type OtpTabletProps = ComponentProps & ThemedComponentProps;

const OtpTabletComponent: React.FunctionComponent<OtpTabletProps> = (props) => {
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
      <View style={themedStyle.container}>
        <View style={themedStyle.sectionBox}>
          <View style={themedStyle.viewHeader}>
            <View style={themedStyle.viewHeaderLeftRight}>
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={onBackPress}>
                {ArrowIosBackFill(themedStyle.iconBack)}
              </TouchableOpacity>
            </View>
            <Text style={themedStyle.txtHeaderTitle}>
              {'Nhập mã OTP'}
            </Text>
            <View style={themedStyle.viewHeaderLeftRight} />
          </View>
          <View style={themedStyle.viewBody}>
            <Text style={themedStyle.txtOtpNote}>
              {'Điền vào đoạn mã OTP được gửi đến số\n+84 0123456789'}
            </Text>
            <Text style={themedStyle.txtOtpNote}>
              {'Thời gian hiệu lực 3:10'}
            </Text>
            <ValidationInput
              style={themedStyle.inputOtp}
              textStyle={textStyle.regular}
              placeholder='Mã OTP'
              validator={NumberValidator}
              onChangeText={onOtpInputTextChange}
            />
            <Layout style={themedStyle.viewBtn}>
              <Button
                size={'large'}
                status='basic'
                style={themedStyle.btn}
                onPress={onResendOtpButtonPress}>
                {'Gửi lại mã'}
              </Button>
              <Button
                size={'large'}
                style={themedStyle.btnAccept}
                onPress={onConfirmButtonPress}>
                {'Xác nhận'}
              </Button>
            </Layout>
          </View>
        </View>
      </View>
    </ScrollableAvoidKeyboard>
  );
};

export const OtpTablet = withStyles(OtpTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme['color-primary-2'],
  },
  sectionBox: {
    width: pxToPercentage(900),
    height: pxToPercentage(1200),
    backgroundColor: theme['color-custom-100'],
    borderRadius: pxToPercentage(40),
    ...viewStyle.shadow1,
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
    paddingHorizontal: pxToPercentage(32),
  },
  viewHeaderLeftRight: {
    width: pxToPercentage(100),
  },
  txtHeaderTitle: {
    fontSize: pxToPercentage(32),
    ...textStyle.proTextSemibold,
  },
  iconBack: {
    width: pxToPercentage(70),
    height: pxToPercentage(70),
  },
  txtOtpNote: {
    textAlign: 'center',
    marginTop: pxToPercentage(20),
    marginHorizontal: pxToPercentage(64),
    fontSize: pxToPercentage(28),
    color: theme['text-hint-color'],
    ...textStyle.proTextRegular,
  },
  inputOtp: {
    marginTop: pxToPercentage(15),
  },
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pxToPercentage(32),
  },
  btn: {
    width: '49%',
  },
  btnAccept: {
    width: '49%',
    backgroundColor: theme['color-primary-2'],
  },
}));
