import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { isTablet } from 'react-native-device-info';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { SigInQRCode } from './sigInQRCode.component';
import { toasts } from '@src/core/utils/toasts';

export const SignInQRcodeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SigInQRCodeContainer';


  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  const onQRCodeScanSucces = (): void => {
    toasts.success('Đăng nhập thành công');
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'app',
    });
  };


  return (
    <SigInQRCode
      onBackPress={onBackPress}
      onQRCodeScanSucces={onQRCodeScanSucces}
    />
  );
};
