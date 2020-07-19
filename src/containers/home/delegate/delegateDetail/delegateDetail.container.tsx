import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateDetail } from './delegateDetail.component';
import { userDetailDataFake } from '@src/core/data/user';
import { isTablet } from 'react-native-device-info';
import { DelegateDetailTablet } from './delegateDetail.component.tablet';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';

export const DelegateDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DelegateDetailContainer';

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <DelegateDetailTablet
        delegateDetail={userDetailDataFake}
        onBackPress={onBackPress}
      />
    );
  }

  return (
    <DelegateDetail
      delegateDetail={userDetailDataFake}
    />
  );
};
