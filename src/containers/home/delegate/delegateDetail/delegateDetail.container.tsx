import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateDetail } from './delegateDetail.component';
import { userDetailDataFake } from '@src/core/data/user';

export const DelegateDetailContainer: React.FunctionComponent<NavigationInjectedProps> = () => {
  const navigationKey: string = 'DelegateDetailContainer';

  return (
    <DelegateDetail
      delegateDetail={userDetailDataFake}
    />
  );
};
