import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { ScanQRCode } from './scanQRCode.component';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { isTablet } from 'react-native-device-info';
import { ScanQRCodeTablet } from './scanQRCode.component.tablet';
import { userDetailDataFake } from '@src/core/data/user';

export const ScanQRCodeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'ScanQRCodeContainer';

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <ScanQRCodeTablet
        user={userDetailDataFake}
      />
    );
  }

  return (
    <ScanQRCode
      onBackPress={onBackPress}
    />
  );
};
