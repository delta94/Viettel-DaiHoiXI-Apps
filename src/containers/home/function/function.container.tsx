import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Function } from './function.component';
import { functionDataFake } from '@src/core/data/function';
import { userDataFake } from '@src/core/data/user';
import { FunctionEnum } from '@src/core/utils/constants';

export const FunctionContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'FunctionContainer';

  const onFunctionItemPress = (type: number): void => {
    let routeName: string;

    switch (type) {
      case FunctionEnum.ThongTin: {
        routeName = 'conferenceInfo';
        break;
      }
      case FunctionEnum.DanhSachDaiBieu: {
        routeName = 'delegateList';
        break;
      }
      case FunctionEnum.TaiLieu: {

        break;
      }
      case FunctionEnum.PhimAnhHinhAnh: {

        break;
      }
      case FunctionEnum.SoDoChoNgoi: {

        break;
      }
      case FunctionEnum.DiemDanh: {

        break;
      }
      case FunctionEnum.DangKyPhatBieu: {
        routeName = false ? 'speechList' : 'signUpToSpeak';
        break;
      }
      case FunctionEnum.ToThaoLuan: {
        routeName = 'delegateGroup';

        break;
      }
      default: {
        break;
      }
    }

    props.navigation.navigate({
      key: navigationKey,
      routeName,
    });
  };

  return (
    <Function
      user={userDataFake}
      functions={functionDataFake}
      onFunctionItemPress={onFunctionItemPress}
    />
  );
};
