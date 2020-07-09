import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateDetail } from './delegateDetail.component';
import { userDetailsDataFake } from '@src/core/data/user';

export const DelegateDetailContainer: React.FunctionComponent<NavigationInjectedProps> = () => {
  const navigationKey: string = 'DelegateDetailContainer';

  return (
    <DelegateDetail
      users={userDetailsDataFake}
    />
  );
};
