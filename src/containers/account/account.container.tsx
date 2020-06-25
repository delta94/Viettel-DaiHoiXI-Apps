import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Account } from './account.component';

export const AccountContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'AccountContainer';

  const onLogoutPress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'auth',
    });
  };

  return (
    <Account
      onLogoutPress={onLogoutPress}
    />
  );
};
