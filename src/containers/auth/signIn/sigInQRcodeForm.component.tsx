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
import { pxToPercentage } from '@src/core/utils/utils';
import {
  textStyle,
} from '@src/components';
import { ScanQRIcon, FlashIcon } from '@src/assets/icons';

export type SignInQRCodeFormProps =  ThemedComponentProps;

const SignInQRCodeFormComponent: React.FunctionComponent<SignInQRCodeFormProps> = (props) => {

  const { themedStyle, ...restprops } = props;

  return (
    <View
      {...restprops}
      style={themedStyle.container}>
      <View style={themedStyle.box}>
        {ScanQRIcon(themedStyle.iconScanQR)}
        <Text style={themedStyle.txt}>
          {'Quét mã QR từ cán bộ điểm danh\n để đăng nhập'}
        </Text>
        {FlashIcon(themedStyle.iconFlash)}
      </View>
    </View>
  );
};

export const SignInQRCodeForm = withStyles(SignInQRCodeFormComponent, (theme: ThemeType) => ({
  container: {
    alignItems: 'center',
  },
  box: {
    width: pxToPercentage(351),
    height: pxToPercentage(394),
    backgroundColor: theme['color-custom-600'],
    alignItems: 'center',
  },
  iconScanQR: {
    width: pxToPercentage(262),
    height: pxToPercentage(262),
    marginVertical: pxToPercentage(20),
  },
  txt: {
    fontSize: pxToPercentage(18),
    ...textStyle.proDisplayRegular,
    color: theme['color-custom-100'],
    textAlign: 'center',
  },
  iconFlash: {
    width: pxToPercentage(22),
    height: pxToPercentage(22),
    marginTop: pxToPercentage(5),
    marginBottom: pxToPercentage(17),
  },
}));
