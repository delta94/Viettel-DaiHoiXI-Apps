import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateGroup } from './delegateGroup.component';
import { User as UserModel } from '@src/core/models/user/user.model';
import { delegateGroupDataFake } from '@src/core/data/delegateGroup';

export const DelegateGroupContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DelegateGroupContainer';

  const onDelegateItemPress = (delegate: UserModel): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'delegateDetail',
      params: {
        delegate,
      },
    });
  };

  return (
    <DelegateGroup
      delegateGroup={delegateGroupDataFake}
      onDelegateItemPress={onDelegateItemPress}
    />
  );
};
