import {
  createAppContainer,
  NavigationContainer,
  createSwitchNavigator,
  NavigationNavigator,
  NavigationProp,
  NavigationState,
} from 'react-navigation';
import {
  createStackNavigator,
  StackViewTransitionConfigs,
} from 'react-navigation-stack';
import { isTablet } from 'react-native-device-info';
import {
  MenuNavigationOptions,
  HomeNavigationOptions,
} from './options';
import { SplashContainer } from '@src/containers/splash/splash.container';
import { ExampleContainer } from '@src/containers/example/example.container';
import { SignInContainer } from '@src/containers/auth/signIn/signIn.container';
import { OtpContainer } from '@src/containers/auth/otp/otp.container';
import { HomeContainer } from '@src/containers/home/home.container';
import { FunctionContainer } from '@src/containers/home/function/function.container';
import { MeetingNotificationContainer } from '@src/containers/home/meetingNotification/meetingNotification.container';
import { MeetingNotificationDetailContainer } from '@src/containers/home/meetingNotification/meetingNotificationDetail/meetingNotificationDetail.container';
import { PressReleaseContainer } from '@src/containers/home/pressRelease/pressRelease.container';
import { PressReleaseDetailContainer } from '@src/containers/home/pressRelease/pressReleaseDetail/pressReleaseDetail.container';
import { ProgrammeContainer } from '@src/containers/home/program/program.container';
import { ScanQRCodeContainer } from '@src/containers/home/scanQRCode/scanQRCode.container';
import { DelegateDetailContainer } from '@src/containers/home/delegateDetails/delegateDetail.container';
import { DelegateGroupContainer } from '@src/containers/home/delegateGroup/delegateGroup.container';

// Auth
const AuthNavigator: NavigationContainer = createStackNavigator({
  ['signIn']: SignInContainer,
  ['forgotPassword']: ExampleContainer,
  ['otp']: {
    screen: OtpContainer,
    navigationOptions: !isTablet() && MenuNavigationOptions,
  },
}, {
  defaultNavigationOptions: {
    header: null,
  },
  transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
});

const AppNavigator: NavigationContainer = createStackNavigator({
  ['home']: {
    screen: HomeContainer,
    navigationOptions: HomeNavigationOptions,
  },
  ['function']: {
    screen: FunctionContainer,
    navigationOptions: HomeNavigationOptions,
  },
  ['meetingNotification']: MeetingNotificationContainer,
  ['meetingNotificationDetail']: MeetingNotificationDetailContainer,
  ['pressRelease']: PressReleaseContainer,
  ['pressReleaseDetail']: PressReleaseDetailContainer,
  ['programme']: ProgrammeContainer,
  ['delegateDetail']: DelegateDetailContainer,
  ['delegateGroup']: DelegateGroupContainer,
  ['scanQRCode']: {
    screen: ScanQRCodeContainer,
    navigationOptions: {
      header: null,
    },
  },
}, {
  defaultNavigationOptions: MenuNavigationOptions,
  transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
});

const createAppRouter = (container: NavigationNavigator<any, NavigationProp<NavigationState>>): NavigationContainer => {
  return createAppContainer(createSwitchNavigator({
    ['splash']: SplashContainer,
    ['auth']: AuthNavigator,
    ['app']: container,
  }, { initialRouteName: 'app' }));
};

export const Router: NavigationContainer = createAppRouter(AppNavigator);
