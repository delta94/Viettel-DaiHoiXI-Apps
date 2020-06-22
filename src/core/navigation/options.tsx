import React from 'react';
import {
  NavigationParams,
  NavigationInjectedProps,
} from 'react-navigation';
import { ArrowIosBackFill } from '@src/assets/icons';
import {
  onGetCurrentRouteState,
  isRootRoute,
  onGetCurrentRouteIndex,
} from './util';
import { KEY_NAVIGATION_BACK } from './constants';
import { themes } from '../themes';
import { TopNavigationBar } from './components/topNavigationBar.component';
import { TabBarBottomContainer } from '@src/containers/tabBarBottom/tabBarBottom.container';
import { pxToPercentage } from '../utils/utils';
import I18n from '@src/assets/i18n';

export type TopNavigationElement = React.ReactElement<any>;
export type BottomNavigationElement = React.ReactElement<any>;

export interface TopNavigationParams extends NavigationParams {
  header: (props: NavigationInjectedProps) => TopNavigationElement | null;
  gesturesEnabled: boolean;
}

export interface BottomNavigationParams extends NavigationParams {
  bottomNavigation: (props: NavigationInjectedProps) => BottomNavigationElement | null;
}

const MainTopNavigationParams = (isV2?: boolean, isNotBottomLine?: boolean): TopNavigationParams => ({
  header: (props: NavigationInjectedProps): TopNavigationElement => {
    // @ts-ignore (private API)
    const { routeName } = onGetCurrentRouteState(props.navigation);
    const index: number = onGetCurrentRouteIndex(props.navigation);

    const renderArrowsBack = () => ArrowIosBackFill({
      tintColor: themes['App Theme']['color-blue'],
      width: pxToPercentage(10),
      height: pxToPercentage(10) * (20.5 / 12),
    });

    return (
      <TopNavigationBar
        {...props}
        isV2={isV2}
        isNotBottomLine={isNotBottomLine}
        title={I18n.t(`layout.header.${routeName}`)}
        backIcon={isRootRoute(index) && renderArrowsBack}
        backText={I18n.t(`layout.prevHeader.${routeName}`)}
        onBackPress={() => {
          if (routeName === 'schoolAbsenceDetail') {
            props.navigation.goBack('SchoolAbsenceContainer');
          } else {
            props.navigation.goBack(KEY_NAVIGATION_BACK);
          }
        }}
      />
    );
  },
  gesturesEnabled: false,
});

const MainBottomNavigationParams: BottomNavigationParams = {
  bottomNavigation: (props: NavigationInjectedProps): BottomNavigationElement => {
    return (<TabBarBottomContainer {...props} />);
  },
};

export const MainNavigationOptions: NavigationParams = {
  ...MainTopNavigationParams(false),
  ...MainBottomNavigationParams,
};

// white, bottom line
export const TopNavigationOptions: NavigationParams = MainTopNavigationParams(false);
// transparent
export const TopNavigationOptions2: NavigationParams = MainTopNavigationParams(true);
// white, not bottom line
export const TopNavigationOptions3: NavigationParams = MainTopNavigationParams(false, true);
