import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SigInQRCode } from './sigInQRCode.component';
import { toasts } from '@src/core/utils/toasts';

export const SignInQRcodeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SigInQRCodeContainer';

  const onQRCodeScanSucces = (): void => {
    toasts.success('Đăng nhập thành công');
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'app',
    });
  };

  return (
    <SigInQRCode
      onQRCodeScanSucces={onQRCodeScanSucces}
    />
  );
};
