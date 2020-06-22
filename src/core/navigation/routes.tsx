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
import {
  MainNavigationOptions,
  TopNavigationOptions,
  TopNavigationOptions2,
  StudyNavigationOptions,
  TopNavigationOptions3,
} from './options';
import { SplashContainer } from '@src/containers/splash/splash.container';

// // Auth
// const AuthNavigator: NavigationContainer = createStackNavigator({
//   ['signIn']: SignInContainer,
//   ['forgotPassword']: ForgotPasswordContainer,
// }, {
//   defaultNavigationOptions: {
//     header: null,
//   },
//   // transitionConfig: () => StackViewTransitionConfigs.FadeInFromBottomAndroid,
//   transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
// });

// Bottom tab
// const HomeNavigator: NavigationContainer = createStackNavigator({
//   ['home']: HomeContainer,
// }, {
//   defaultNavigationOptions: {
//     header: null,
//   },
//   // transitionConfig: () => StackViewTransitionConfigs.FadeInFromBottomAndroid,
//   transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
// });

// const OthersNavigator: NavigationContainer = createStackNavigator({
//   ['others']: OthersContainer,
// }, {
//   defaultNavigationOptions: MainNavigationOptions,
//   // transitionConfig: () => StackViewTransitionConfigs.FadeInFromBottomAndroid,
//   transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
// });

// const HomeNavigationMap: NavigationRouteConfigMap<any, any> = {
//   ['example']: {
//     screen: ExampleContainer,
//     navigationOptions: TopNavigationOptions3,
//   },
// };

// Others map
// const OthersNavigationMap: NavigationRouteConfigMap<any, any> = {
//   ['example']: {
//     screen: exampleContainer,
//     navigationOptions: TopNavigationOptions2,
//   },
// };

// const MenuNavigator: NavigationNavigator<any, NavigationProp<NavigationState>> = createBottomTabNavigator({
//   ['tabHome']: HomeNavigator,
//   ['tabOthers']: OthersNavigator,
// }, { tabBarComponent: TabBarBottomContainer });

// const AppNavigator: NavigationContainer = createStackNavigator({
//   ['menu']: MenuNavigator,
//   ...HomeNavigationMap,
//   ...OthersNavigationMap,
// }, {
//   headerMode: 'screen',
//   defaultNavigationOptions: {
//     header: null,
//   },
//   // transitionConfig: () => StackViewTransitionConfigs.FadeInFromBottomAndroid,
//   transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
// });

const createAppRouter = (container?: NavigationNavigator<any, NavigationProp<NavigationState>>): NavigationContainer => {
  return createAppContainer(createSwitchNavigator({
    ['splash']: SplashContainer,
    // ['auth']: AuthNavigator,
    // ['app']: container,

    // ['test']: TestContainer,
  }, { initialRouteName: 'splash' }));
};

export const Router: NavigationContainer = createAppRouter();
