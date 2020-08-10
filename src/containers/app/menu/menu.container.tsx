import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Menu } from './menu.component';
import { MenuEnum } from '@src/core/utils/constants';
import { isTablet } from 'react-native-device-info';
import { MenuTablet } from './menu.component.tablet';
import { SessionState } from '@src/core/store/reducer/session/types';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '@src/core/store';
import { Dispatch } from 'redux';
import { onThunkGetMenuReq } from './store/thunk';
import { MenuState } from './store/reducer/types';

export const MenuContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'MenuContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const { deputy }: SessionState = useSelector((state: AppState) => state.session);
  const { menu }: MenuState = useSelector((state: AppState) => state.menu);
  const meetingId: string = props.navigation.getParam('meetingId');

  useEffect(() => {
    onGetMenu();
  }, []);

  const onGetMenu = (): void => {
    dispatch(onThunkGetMenuReq(meetingId, deputy.userId));
  };

  const onMenuItemPress = (type: string): void => {
    let routeName: string;
    let params: {};

    switch (type) {
      case MenuEnum.ThongTin: {
        routeName = 'meetingDetail';
        params = {
          meetingId,
        };
        break;
      }
      case MenuEnum.DanhSachDaiBieu: {
        routeName = 'deputyGroup';
        params = {
          meetingId,
        };
        break;
      }
      case MenuEnum.TaiLieu: {
        // routeName = 'document';
        break;
      }
      case MenuEnum.PhimAnhHinhAnh: {
        // routeName = 'gallery';
        break;
      }
      case MenuEnum.SoDoChoNgoi: {
        routeName = 'seatingChart';

        break;
      }
      case MenuEnum.DiemDanh: {
        // routeName = 'attendance';
        break;
      }
      case MenuEnum.DangKyPhatBieu: {
        params = {
          meetingId,
        };
         routeName = 'speechSignUp';
        break;
      }
      case MenuEnum.QuanLyPhatBieu: {
        routeName = 'speechManagement';
        break;
      }
      case MenuEnum.ToThaoLuan: {
         routeName = 'deputyDiscussionGroup';
         params = {
          meetingId,
        };
        break;
      }
      default: {
        break;
      }
    }

    props.navigation.navigate({
      key: navigationKey,
      routeName,
      params,
    });
  };

  if (isTablet()) {
    return (
      <MenuTablet
        deputy={deputy}
        menu={menu}
        onMenuItemPress={onMenuItemPress}
      />
    );
  }

  return (
    <Menu
      deputy={deputy}
      menu={menu}
      onMenuItemPress={onMenuItemPress}
    />
  );
};
