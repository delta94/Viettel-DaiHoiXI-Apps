import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateGroup } from './delegateGroup.component';
import { User as UserModel } from '@src/core/models/user/user.model';
import { delegateGroupDataFake } from '@src/core/data/delegateGroup';
import { delegateListDataFake2 } from '@src/core/data/delegateList';
import { DelegateGroupTablet } from './delegateGroup.component.tablet';
import { isTablet } from 'react-native-device-info';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';

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

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <DelegateGroupTablet
        delegateList={delegateListDataFake2}
        onDelegateItemPress={onDelegateItemPress}
        onBackPress={onBackPress}
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
