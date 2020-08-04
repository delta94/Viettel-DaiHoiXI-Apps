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
<<<<<<< HEAD
import { ChatContainer } from '@src/containers/chat/chat.container';
import { SeatingChartContainer } from '@src/containers/home/seatMap/seatingChart.container';
import { SignInQRcodeContainer } from '@src/containers/auth/signInQRcode/sigInQRcode.container';
import { GalleryVideoContainer } from '@src/containers/home/gallery/galleryVideo/galleryVideo.container';
import { GalleryContainer } from '@src/containers/home/gallery/gallery.container';
=======
import { ChatContainer } from '@src/containers/home/chat/chat.container';
import { ChatDetailContainer } from '@src/containers/home/chat/chatDetail/chatDetail.container';
import { Chat } from '@src/containers/home/chat/chat.component';
// import { ChatContainer } from '@src/containers/chat/chat.container';
>>>>>>> [WIP] implement UI phone chat

import { DocumentContainer } from '@src/containers/home/documentlist/documentlist.container';
// Auth
const AuthNavigator: NavigationContainer = createStackNavigator({
  // ['chat']: ChatContainer,
  ['chatdetail']: ChatDetailContainer,
  ['forgotPassword']: ExampleContainer,
  ['otp']: {
    screen: OtpContainer,
  },
  ['signInQRCode']: {
    screen: SignInQRcodeContainer,
    navigationOptions: !isTablet() ? MenuNavigationOptions : HomeNavigationOptions,
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
    navigationOptions: !isTablet() ? HomeNavigationOptions : MenuNavigationTabletOptions,
  },
  ['function']: FunctionContainer,
  ['scanQRCode']: ScanQRCodeContainer,
  ['conferenceInfo']: ConferenceInfoContainer,
  ['notificationDetail']: NotificationDetailContainer,
  ['pressReleaseDetail']: PressReleaseDetailContainer,
  ['delegateList']: DelegateListContainer,
  ['delegateGroup']: DelegateGroupContainer,
  ['delegateDetail']: DelegateDetailContainer,
  ['speechList']: SpeechListContainer,
  ['signUpToSpeak']: SignUpToSpeakContainer,
  ['attendance']: AttendanceContainer,
  ['chat']: ChatContainer,
  ['seatingChart']: SeatingChartContainer,
  ['galleryVideo']: GalleryVideoContainer,
  ['gallery']: GalleryContainer,
  ['documentList']: DocumentContainer,
}, {
  defaultNavigationOptions: isTablet() ? MenuNavigationTabletOptions : MenuNavigationOptions,
  transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
});

const createAppRouter = (container: NavigationNavigator<any, NavigationProp<NavigationState>>): NavigationContainer => {
  return createAppContainer(createSwitchNavigator({
    ['splash']: container,
    ['auth']: AuthNavigator,
    ['app']: container,
  }, { initialRouteName: 'splash' }));
};

export const Router: NavigationContainer = createAppRouter(AppNavigator);
