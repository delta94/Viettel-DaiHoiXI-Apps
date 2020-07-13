import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateGroup } from './delegateGroup.component';
import { delegateGroupListDataFake } from '@src/core/data/user';

export const DelegateGroupContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DelegateGroupContainer';

  const [sections, setSection] = React.useState(1);

  const onHeaderDelegateGroupPress = (type: number): void => {
    setSection(type);
  };

  const onSearchTextChange = (): void => {
    alert('search');
  };

  return (
    <DelegateGroup
      delegateGroups={delegateGroupListDataFake}
      sections={sections}
      onHeaderDelegateGroupPress={onHeaderDelegateGroupPress}
      onSearchTextChange={onSearchTextChange}
    />
  );
};
