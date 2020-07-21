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
import { ScanQRIcon } from '@src/assets/icons';

interface ComponentProps {
  a?: number;
}

export type SignInQRCodeFormTabletProps = ComponentProps & ThemedComponentProps;

const SignInQRCodeFormTabletComponent: React.FunctionComponent<SignInQRCodeFormTabletProps> = (props) => {

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
      </View>
    </View>
  );
};

export const SignInQRCodeFormTablet = withStyles(SignInQRCodeFormTabletComponent, (theme: ThemeType) => ({
  container: {
    alignItems: 'center',
  },
  box: {
    width: pxToPercentage(728),
    height: pxToPercentage(676),
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconScanQR: {
    width: pxToPercentage(452),
    height: pxToPercentage(452),
  },
  txt: {
    marginTop: pxToPercentage(30),
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    color: 'white',
    textAlign: 'center',
  },
}));
