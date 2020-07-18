import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateList } from './delegateList.component';
import { delegateListDataFake } from '@src/core/data/delegateList';
import { User as UserModel } from '@src/core/models/user/user.model';

export const DelegateListContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DelegateListContainer';

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
    <DelegateList
      delegateList={delegateListDataFake}
      onDelegateItemPress={onDelegateItemPress}
    />
  );
};
