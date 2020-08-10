import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { MyQRCode } from './myQRCode.component';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { isTablet } from 'react-native-device-info';
import { MyQRCodeTablet } from './myQRCode.component.tablet';
import { SessionState } from '@src/core/store/reducer/session/types';
import { useSelector } from 'react-redux';
import { AppState } from '@src/core/store';

export const MyQRCodeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'MyQRCodeContainer';
  const { deputy: user }: SessionState = useSelector((state: AppState) => state.session);

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <MyQRCodeTablet
        user={user}
      />
    );
  }

  return (
    <MyQRCode
      onBackPress={onBackPress}
    />
  );
};
