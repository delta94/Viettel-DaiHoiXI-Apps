import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Menu } from './menu.component';

export const MenuContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'MenuContainer';

  const onTabSelect = (index: number): void => {
    const { navigation } = props;
    const { [index]: selectedRoute } = navigation.state.routes;

    props.navigation.navigate({
      key: navigationKey,
      routeName: selectedRoute.routeName,
    });
  };

  return (
    <Menu
      selectedIndex={props.navigation.state.index}
      onTabSelect={onTabSelect}
    />
  );
};
