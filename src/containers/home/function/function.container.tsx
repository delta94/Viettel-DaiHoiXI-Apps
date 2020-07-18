import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Function } from './function.component';
import { functionDataFake } from '@src/core/data/function';
import { userDataFake } from '@src/core/data/user';
import { FunctionEnum } from '@src/core/utils/constants';

export const FunctionContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'FunctionContainer';

  const onFunctionItemPress = (type: number): void => {
    switch (type) {
      case FunctionEnum.ThongTin: {
        props.navigation.navigate({
          key: navigationKey,
          routeName: 'conferenceInfo',
        });

        break;
      }
      case FunctionEnum.DanhSachDaiBieu: {

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

        break;
      }
      case FunctionEnum.ToThaoLuan: {

        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <Function
      user={userDataFake}
      functions={functionDataFake}
      onFunctionItemPress={onFunctionItemPress}
    />
  );
};
