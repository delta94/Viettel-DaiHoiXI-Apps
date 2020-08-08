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
import { TopNavigationBar } from './components/topNavigationBar.component';
import { HomeNavigationBar } from './components/homeNavigationBar.component';
import { TopNavigationBarTablet } from './components/topNavigationBar.tablet.component';

export const routeNameDataSource: { [key: string]: string } = {
  'otp': 'Nhập mã OTP',
  'home': 'Trang chủ',
  'function': 'Danh sách chức năng',
  'conferenceInfo': 'Thông tin',
  'notificationDetail': 'Chi tiết thông báo',
  'pressReleaseDetail': 'Chi tiết thông cáo',
  'delegateList': 'Danh sách đại biểu',
  'delegateGroup': 'Tổ thảo luận',
  'delegateDetail': 'Thông tin đại biểu',
  'speechList': 'Đăng ký phát biểu',
  'signUpToSpeak': 'Đăng ký phát biểu',
  'attendance': 'Điểm danh',
  'scanQRCode': 'Mã QR Code của tôi',
  'chatContainer': 'Chat',
  'seatingChart': 'Sơ đồ chỗ ngồi',
  'signInQRCode': 'Quét mã',
  'galleryVideo': 'Phim ảnh, hình ảnh triển lãm ',
  'gallery': 'Trển Lãm',
  'documentList': 'Tài liệu',
  'chatDetail': 'Chat',
  'chat': 'Chat',
};

export type TopNavigationElement = React.ReactElement<any>;
export type BottomNavigationElement = React.ReactElement<any>;

export interface TopNavigationParams extends NavigationParams {
  header: (props: NavigationInjectedProps) => TopNavigationElement | null;
}

const MenuTopNavigationParams: TopNavigationParams = {
  header: (props: NavigationInjectedProps): TopNavigationElement => {
    // @ts-ignore (private API)
    const { routeName } = onGetCurrentRouteState(props.navigation);
    const index: number = onGetCurrentRouteIndex(props.navigation);
    const navigationKey: string = 'HomeMenuTopNavigation';

    const onMessagePress = () => {
      props.navigation.navigate({
        key: navigationKey,
        routeName: 'chat',
      });
    };

    const renderArrowsBack = () => ArrowIosBackFill({
      tintColor: 'white',
    });

    return (
      <TopNavigationBar
        {...props}
        title={routeNameDataSource[routeName]}
        backIcon={isRootRoute(index) && renderArrowsBack}
        onMessagePress={onMessagePress}
        onBackPress={() => {
          props.navigation.goBack(KEY_NAVIGATION_BACK);
        }}
      />
    );
  },
};

const MenuTopNavigationTabletParams: TopNavigationParams = {
  header: (props: NavigationInjectedProps): TopNavigationElement => {
    const { routeName } = onGetCurrentRouteState(props.navigation);
    const navigationKey: string = 'MenuTopNavigationTablet';

    const onMessagePress = (): void => {
      props.navigation.navigate({
        key: navigationKey,
        routeName: 'chat',
      });
    };

    const onBackPress = (): void => {
      props.navigation.goBack(KEY_NAVIGATION_BACK);
    };

    return (
      <TopNavigationBarTablet
        isHome={routeName === 'home'}
        title={routeNameDataSource[routeName]}
        onMessagePress={onMessagePress}
        onBackPress={onBackPress}
      />
    );
  },
};

const MenuTopNavigationTabletNoHeaderParams: TopNavigationParams = {
  header: (props: NavigationInjectedProps): TopNavigationElement => {
    return (
      <TopNavigationBarTablet
        isNoHeader
      />
    );
  },
};

const HomeMenuTopNavigationParams: TopNavigationParams = {
  header: (props: NavigationInjectedProps): TopNavigationElement => {
    const navigationKey: string = 'HomeMenuTopNavigation';
    const { routeName } = onGetCurrentRouteState(props.navigation);
    const index: number = onGetCurrentRouteIndex(props.navigation);

    const onBackPress = () => {
      props.navigation.goBack(KEY_NAVIGATION_BACK);
    };

    const onQRCodePress = () => {
      props.navigation.navigate({
        key: navigationKey,
        routeName: 'scanQRCode',
      });
    };

    const onMessagePress = () => {
      props.navigation.navigate({
        key: navigationKey,
        routeName: 'chat',
      });
    };

    const renderArrowsBack = () => ArrowIosBackFill({
      tintColor: 'white',
    });

    return (
      <HomeNavigationBar
        {...props}
        title={routeNameDataSource[routeName]}
        backIcon={isRootRoute(index) && renderArrowsBack}
        onBack={onBackPress}
        onQRCodePress={onQRCodePress}
        onMessagePress={onMessagePress}
      />
    );
  },
};

export const MenuNavigationOptions: NavigationParams = MenuTopNavigationParams;
export const MenuNavigationTabletOptions: NavigationParams = MenuTopNavigationTabletParams;
export const MenuNavigationTabletNoHeaderOptions: NavigationParams = MenuTopNavigationTabletNoHeaderParams;
export const HomeNavigationOptions: NavigationParams = HomeMenuTopNavigationParams;
