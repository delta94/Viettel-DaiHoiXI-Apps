import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { ScanQRCode } from './scanQRCode.component';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';

export const ScanQRCodeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'ScanQRCodeContainer';

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  return (
    <ScanQRCode
      onBackPress={onBackPress}
    />
  );
};
