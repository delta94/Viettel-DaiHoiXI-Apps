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
  MenuNavigationTabletOptions,
  MenuNavigationTabletNoHeaderOptions,
} from './options';
import { SplashContainer } from '@src/containers/splash/splash.container';
import { SignInContainer } from '@src/containers/auth/signIn/signIn.container';
import { OtpContainer } from '@src/containers/auth/otp/otp.container';
import { MeetingContainer } from '@src/containers/app/meeting.container';
import { MenuContainer } from '@src/containers/app/menu/menu.container';
import { MyQRCodeContainer } from '@src/containers/app/myQRCode/myQRCode.container';
import { MeetingDetailContainer } from '@src/containers/app/meetingDetail/meetingDetail.container';
import { DeputyGroupContainer } from '@src/containers/app/deputy/deputyGroup/deputyGroup.container';
import { DeputyDetailContainer } from '@src/containers/app/deputy/deputyDetail/deputyDetail.container';
import { SpeechManagementContainer } from '@src/containers/app/speechManagement/speechManagement.container';
import { DeputyDiscussionGroupContainer } from '@src/containers/app/deputy/deputyDiscussionGroup/deputyDiscussionGroup.container';
import { SpeechSignUpContainer } from '@src/containers/app/speechSignUp/speechSignUp.container';
import { AttendanceContainer } from '@src/containers/app/attendance/attendance.container';
import { SeatingChartContainer } from '@src/containers/app/seatingChart/seatingChart.container';
import { SignInQRcodeContainer } from '@src/containers/auth/signInQRcode/sigInQRcode.container';
import { GalleryContainer } from '@src/containers/app/gallery/gallery.container';
import { ChatContainer } from '@src/containers/app/chat/chat.container';
import { ChatDetailContainer } from '@src/containers/app/chat/chatDetail/chatDetail.container';
import { DocumentContainer } from '@src/containers/app/document/document.container';
import { NotificationAnnouncementDetailContainer } from '@src/containers/app/meetingDetail/notificationAnnountcementDetail/notificationAnnouncementDetail.container';

// Auth
const AuthNavigator: NavigationContainer = createStackNavigator({
  ['signIn']: SignInContainer,
  ['otp']: {
    screen: OtpContainer,
  },
  ['signInQRCode']: {
    screen: SignInQRcodeContainer,
    navigationOptions: MenuNavigationOptions,
  },

}, {
  defaultNavigationOptions: {
    header: null,
  },
  transitionConfig: () => StackViewTransitionConfigs.NoAnimation,
});

const AppNavigator: NavigationContainer = createStackNavigator({
  ['home']: {
    screen: MeetingContainer,
    navigationOptions: !isTablet() ? MenuNavigationOptions : MenuNavigationTabletOptions,
  },
  ['menu']: MenuContainer,
  ['myQRCode']: MyQRCodeContainer,
  ['meetingDetail']: {
    screen: MeetingDetailContainer,
    navigationOptions: !isTablet() ? MenuNavigationOptions : MenuNavigationTabletNoHeaderOptions,
  },
  ['notification']: NotificationAnnouncementDetailContainer,
  ['announcement']: NotificationAnnouncementDetailContainer,
  ['deputyGroup']: DeputyGroupContainer,
  ['deputyDiscussionGroup']: DeputyDiscussionGroupContainer,
  ['deputyDetail']: DeputyDetailContainer,
  ['speechManagement']: SpeechManagementContainer,
  ['speechSignUp']: SpeechSignUpContainer,
  ['attendance']: AttendanceContainer,
  ['seatingChart']: SeatingChartContainer,
  ['gallery']: {
    screen: GalleryContainer,
    navigationOptions: !isTablet() ? MenuNavigationOptions : MenuNavigationTabletNoHeaderOptions,
  },
  ['document']: {
    screen: DocumentContainer,
    navigationOptions: !isTablet() ? MenuNavigationOptions : MenuNavigationTabletNoHeaderOptions,
  },
  ['chat']: ChatContainer,
  ['chatDetail']: ChatDetailContainer,
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
