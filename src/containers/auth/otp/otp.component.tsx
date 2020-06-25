import React, { useState } from 'react';
import {
  View,
  Text,
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

interface ComponentProps {
  onResendOtpPress: () => void;
  onConfirmPress: (otp: string) => void;
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

  const { themedStyle } = props;

  return (
    <ScrollableAvoidKeyboard>
      <View style={themedStyle.container}>
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
            size='large'
            status='basic'
            style={themedStyle.btn}
            onPress={onResendOtpButtonPress}>
            {'Gửi lại mã'}
          </Button>
          <Button
            size='large'
            status='primary'
            style={themedStyle.btn}
            onPress={onConfirmButtonPress}>
            {'Xác nhận'}
          </Button>
        </Layout>
      </View>
    </ScrollableAvoidKeyboard>
  );
};

export const Otp = withStyles(OtpComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(16),
    backgroundColor: theme['color-custom-100'],
  },
  txtOtpNote: {
    textAlign: 'center',
    marginTop: pxToPercentage(10),
    marginHorizontal: pxToPercentage(32),
    fontSize: pxToPercentage(14),
    color: theme['text-hint-color'],
    ...textStyle.regular,
  },
  inputOtp: {
    marginTop: pxToPercentage(7.5),
  },
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: pxToPercentage(16),
  },
  btn: {
    width: '49%',
  },
}));
