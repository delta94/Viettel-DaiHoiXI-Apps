import {
  createAppContainer,
  NavigationContainer,
  createSwitchNavigator,
  NavigationNavigator,
  NavigationProp,
  NavigationState,
  NavigationRouteConfigMap,
} from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MenuNavigationOptions } from './options';
import { MenuContainer } from '@src/containers/menu/menu.container';
import { SplashContainer } from '@src/containers/splash/splash.container';
import { ExampleContainer } from '@src/containers/example/example.container';
import { SignInContainer } from '@src/containers/auth/signIn/signIn.container';

// Auth
const AuthNavigator: NavigationContainer = createStackNavigator({
  ['signIn']: SignInContainer,
  ['forgotPassword']: ExampleContainer,
}, {
  defaultNavigationOptions: {
    header: null,
  },
  transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
});

// Bottom tab
const HomeNavigator: NavigationContainer = createStackNavigator({
  ['home']: ExampleContainer,
}, {
  defaultNavigationOptions: MenuNavigationOptions,
  transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
});

const MeetingNavigator: NavigationContainer = createStackNavigator({
  ['meeting']: ExampleContainer,
}, {
  defaultNavigationOptions: MenuNavigationOptions,
  transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
});

const NotificationNavigator: NavigationContainer = createStackNavigator({
  ['notification']: ExampleContainer,
}, {
  defaultNavigationOptions: MenuNavigationOptions,
  transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
});

const AccountNavigator: NavigationContainer = createStackNavigator({
  ['account']: ExampleContainer,
}, {
  defaultNavigationOptions: MenuNavigationOptions,
  transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
});

// Map
const HomeNavigationMap: NavigationRouteConfigMap<any, any> = {
};

const MeetingNavigationMap: NavigationRouteConfigMap<any, any> = {
};

const NotificationNavigationMap: NavigationRouteConfigMap<any, any> = {
};

const AccountNavigationMap: NavigationRouteConfigMap<any, any> = {
};

const MenuNavigator: NavigationNavigator<any, NavigationProp<NavigationState>> = createBottomTabNavigator({
  ['tabHome']: HomeNavigator,
  ['tabMeeting']: MeetingNavigator,
  ['tabNotification']: NotificationNavigator,
  ['tabAccount']: AccountNavigator,
}, { tabBarComponent: MenuContainer });

const AppNavigator: NavigationContainer = createStackNavigator({
  ['menu']: MenuNavigator,
  ...HomeNavigationMap,
  ...MeetingNavigationMap,
  ...NotificationNavigationMap,
  ...AccountNavigationMap,
}, {
  headerMode: 'screen',
  defaultNavigationOptions: {
    header: null,
  },
  transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
});

const createAppRouter = (container: NavigationNavigator<any, NavigationProp<NavigationState>>): NavigationContainer => {
  return createAppContainer(createSwitchNavigator({
    ['splash']: SplashContainer,
    ['auth']: AuthNavigator,
    ['app']: container,
  }, { initialRouteName: 'auth' }));
};

export const Router: NavigationContainer = createAppRouter(AppNavigator);
