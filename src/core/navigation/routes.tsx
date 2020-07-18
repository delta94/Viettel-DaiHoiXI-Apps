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
import { ScanQRCodeContainer } from '@src/containers/home/scanQRCode/scanQRCode.container';
import { ConferenceInfoContainer } from '@src/containers/home/conferenceInformation/conferenceInfo.container';
import { NotificationDetailContainer } from '@src/containers/home/conferenceInformation/notificationDetail/notificationDetail.container';
import { PressReleaseDetailContainer } from '@src/containers/home/conferenceInformation/pressReleaseDetail/pressReleaseDetail.container';

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
  ['scanQRCode']: {
    screen: ScanQRCodeContainer,
    navigationOptions: {
      header: null,
    },
  },
  ['conferenceInfo']: ConferenceInfoContainer,
  ['notificationDetail']: NotificationDetailContainer,
  ['pressReleaseDetail']: PressReleaseDetailContainer,
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
