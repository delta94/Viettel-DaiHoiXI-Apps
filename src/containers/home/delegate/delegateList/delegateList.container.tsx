import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateList } from './delegateList.component';
import { delegateListDataFake, delegateListDataFake2 } from '@src/core/data/delegateList';
import { User as UserModel } from '@src/core/models/user/user.model';
import { isTablet } from 'react-native-device-info';
import { DelegateListTablet } from './delegateList.component.tablet';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';

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

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <DelegateListTablet
        delegateList={delegateListDataFake2}
        onDelegateItemPress={onDelegateItemPress}
        onBackPress={onBackPress}
      />
    );
  }

  return (
    <DelegateList
      delegateList={delegateListDataFake}
      onDelegateItemPress={onDelegateItemPress}
    />
  );
};
