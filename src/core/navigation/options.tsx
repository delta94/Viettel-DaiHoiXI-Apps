import React from 'react';
import {
  NavigationParams,
  NavigationInjectedProps,
} from 'react-navigation';
import { MenuContainer } from '@src/containers/menu/menu.container';
import { ArrowIosBackFill } from '@src/assets/icons';
import { TopNavigationBar } from './components/topNavigationBar.component';
import {
  onGetCurrentRouteState,
  isRootRoute,
  onGetCurrentRouteIndex,
} from './util';
import { KEY_NAVIGATION_BACK } from './constants';

const routeNameDataSource: { [key: string]: string } = {
  'otp': 'Nhập mã OTP',
  'home': 'Trang chủ',
};

export type TopNavigationElement = React.ReactElement<any>;
export type BottomNavigationElement = React.ReactElement<any>;

export interface TopNavigationParams extends NavigationParams {
  header: (props: NavigationInjectedProps) => TopNavigationElement | null;
}

export interface BottomNavigationParams extends NavigationParams {
  bottomNavigation: (props: NavigationInjectedProps) => BottomNavigationElement | null;
}

const MenuTopNavigationParams: TopNavigationParams = {
  header: (props: NavigationInjectedProps): TopNavigationElement => {
    // @ts-ignore (private API)
    const { routeName } = onGetCurrentRouteState(props.navigation);
    const index: number = onGetCurrentRouteIndex(props.navigation);

    const renderArrowsBack = () => ArrowIosBackFill({
      tintColor: 'white',
    });

    return (
      <TopNavigationBar
        {...props}
        title={routeNameDataSource[routeName]}
        backIcon={isRootRoute(index) && renderArrowsBack}
        onBackPress={() => {
          props.navigation.goBack(KEY_NAVIGATION_BACK);
        }}
      />
    );
  },
};

const MenuBottomNavigationParams: BottomNavigationParams = {
  bottomNavigation: (props: NavigationInjectedProps): BottomNavigationElement => {
    return (
      <MenuContainer {...props} />
    );
  },
};

export const MenuNavigationOptions: NavigationParams = {
  ...MenuTopNavigationParams,
  ...MenuBottomNavigationParams,
};
