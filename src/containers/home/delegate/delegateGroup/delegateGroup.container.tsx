import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateGroup } from './delegateGroup.component';
import { User as UserModel } from '@src/core/models/user/user.model';
import { delegateGroupDataFake } from '@src/core/data/delegateGroup';
import { delegateListDataFake2 } from '@src/core/data/delegateList';
import { DelegateGroupTablet } from './delegateGroup.component.tablet';
import { isTablet } from 'react-native-device-info';

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

  if (isTablet()) {
    return (
      <DelegateGroupTablet
        delegateList={delegateListDataFake2}
        onDelegateItemPress={onDelegateItemPress}
      />
    );
  }

  return (
    <DelegateGroup
      delegateGroup={delegateGroupDataFake}
      onDelegateItemPress={onDelegateItemPress}
    />
  );
};
