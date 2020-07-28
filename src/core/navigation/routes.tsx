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
  MenuNavigationTabletOptions,
} from './options';
import { SplashContainer } from '@src/containers/splash/splash.container';
import { ExampleContainer } from '@src/containers/example/example.container';
import { SignInContainer } from '@src/containers/auth/signIn/signIn.container';
import { OtpContainer } from '@src/containers/auth/otp/otp.container';
import { HomeContainer } from '@src/containers/home/home.container';
import { FunctionContainer } from '@src/containers/home/function/function.container';
import { ScanQRCodeContainer } from '@src/containers/home/scanQRCode/scanQRCode.container';
import { ConferenceInfoContainer } from '@src/containers/home/conferenceInfo/conferenceInfo.container';
import { NotificationDetailContainer } from '@src/containers/home/conferenceInfo/notificationDetail/notificationDetail.container';
import { PressReleaseDetailContainer } from '@src/containers/home/conferenceInfo/pressReleaseDetail/pressReleaseDetail.container';
import { DelegateListContainer } from '@src/containers/home/delegate/delegateList/delegateList.container';
import { DelegateDetailContainer } from '@src/containers/home/delegate/delegateDetail/delegateDetail.container';
import { SpeechListContainer } from '@src/containers/home/speechManagement/speechList/speechList.container';
import { DelegateGroupContainer } from '@src/containers/home/delegate/delegateGroup/delegateGroup.container';
import { SignUpToSpeakContainer } from '@src/containers/home/speechManagement/signUpToSpeak/signUpToSpeak.container';
import { AttendanceContainer } from '@src/containers/home/attendance/attendance.container';

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
  ['home']: HomeContainer,
  ['function']: FunctionContainer,
  ['scanQRCode']: {
    screen: ScanQRCodeContainer,
    navigationOptions: isTablet() ? MenuNavigationTabletOptions : {
      header: null,
    },
  },
  ['conferenceInfo']: ConferenceInfoContainer,
  ['notificationDetail']: NotificationDetailContainer,
  ['pressReleaseDetail']: PressReleaseDetailContainer,
  ['delegateList']: DelegateListContainer,
  ['delegateGroup']: DelegateGroupContainer,
  ['delegateDetail']: DelegateDetailContainer,
  ['speechList']: SpeechListContainer,
  ['signUpToSpeak']: SignUpToSpeakContainer,
  ['attendance']: AttendanceContainer,
}, {
  defaultNavigationOptions: isTablet() ? MenuNavigationTabletOptions : MenuNavigationOptions,
  transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
});

const createAppRouter = (container: NavigationNavigator<any, NavigationProp<NavigationState>>): NavigationContainer => {
  return createAppContainer(createSwitchNavigator({
    ['splash']: SplashContainer,
    ['auth']: AuthNavigator,
    ['app']: container,
  }, { initialRouteName: 'splash' }));
};

export const Router: NavigationContainer = createAppRouter(AppNavigator);
