import React from 'react';
import {
  NavigationParams,
  NavigationInjectedProps,
} from 'react-navigation';
import { onGetCurrentRouteState } from './util';
import { KEY_NAVIGATION_BACK } from './constants';
import { TopNavigationBar } from './components/topNavigationBar.component';
import { TopNavigationBarTablet } from './components/topNavigationBar.tablet.component';

export const routeNameDataSource: { [key: string]: string } = {
  'otp': 'Nhập mã OTP',
  'home': 'Trang chủ',
  'menu': 'Danh sách chức năng',
  'meetingDetail': 'Thông tin',
  'notification': 'Chi tiết thông báo',
  'announcement': 'Chi tiết thông cáo',
  'deputyGroup': 'Danh sách đại biểu',
  'deputyDiscussionGroup': 'Tổ thảo luận',
  'deputyDetail': 'Thông tin đại biểu',
  'speechSignUp': 'Đăng ký phát biểu',
  'speechManagement': 'Quản lý phát biểu',
  'attendance': 'Điểm danh',
  'myQRCode': 'Mã QR Code của tôi',
  'chat': 'Chat',
  'chatDetail': 'Chat',
  'seatingChart': 'Sơ đồ chỗ ngồi',
  'signInQRCode': 'Quét mã',
  'gallery': 'Triển Lãm',
  'document': 'Tài liệu',
};

export type TopNavigationElement = React.ReactElement<any>;
export type BottomNavigationElement = React.ReactElement<any>;

export interface TopNavigationParams extends NavigationParams {
  header: (props: NavigationInjectedProps) => TopNavigationElement | null;
}

const MenuTopNavigationParams: TopNavigationParams = {
  header: (props: NavigationInjectedProps): TopNavigationElement => {
    return <TopNavigationBar {...props} />;
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

export const MenuNavigationOptions: NavigationParams = MenuTopNavigationParams;
export const MenuNavigationTabletOptions: NavigationParams = MenuTopNavigationTabletParams;
export const MenuNavigationTabletNoHeaderOptions: NavigationParams = MenuTopNavigationTabletNoHeaderParams;
