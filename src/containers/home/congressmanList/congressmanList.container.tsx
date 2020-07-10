import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { CongressmanList } from './congressmanList.component';
import { listCongressmenDataFake } from '@src/core/data/congressmanList';
import { User as UserModel } from '@src/core/models/user/user.model';

export const CongressmanListContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'CongressmanListContainer';

  const onCongressmanItemPress = (congressman: UserModel): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'CongressmanDetail',
      params: {
        congressman,
      },
    });
  };
  return (
    <CongressmanList
      congressmen={listCongressmenDataFake}
      onCongressmanItemPress={onCongressmanItemPress}
    />
  );
};
