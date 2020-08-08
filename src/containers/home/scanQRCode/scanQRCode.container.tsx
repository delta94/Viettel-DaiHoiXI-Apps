import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { ScanQRCode } from './scanQRCode.component';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { isTablet } from 'react-native-device-info';
import { ScanQRCodeTablet } from './scanQRCode.component.tablet';
import { SessionState } from '@src/core/store/reducer/session/types';
import { useSelector } from 'react-redux';
import { AppState } from '@src/core/store';

export const ScanQRCodeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'ScanQRCodeContainer';
  const { user }: SessionState = useSelector((state: AppState) => state.session);

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <ScanQRCodeTablet
        user={user}
      />
    );
  }

  return (
    <ScanQRCode
      onBackPress={onBackPress}
    />
  );
};
