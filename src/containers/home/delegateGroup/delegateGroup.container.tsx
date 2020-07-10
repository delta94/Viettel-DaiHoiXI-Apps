import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateGroup } from './delegateGroup.component';
import { delegateGroupListDataFake } from '@src/core/data/user';

export const DelegateGroupContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DelegateGroupContainer';

  return (
    <DelegateGroup
      delegateGroups={delegateGroupListDataFake}
    />
  );
};
