import React, {
  useState,
  useEffect,
} from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Function } from './function.component';
import { functionDataFake } from '@src/core/data/function';
import { userDataFake } from '@src/core/data/user';
import { FunctionEnum } from '@src/core/utils/constants';
import { isTablet } from 'react-native-device-info';
import { FunctionTablet } from './function.component.tablet';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { alerts } from '@src/core/utils/alerts';

export const FunctionContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'FunctionContainer';
  const [isExample, setIsExample] = useState<boolean>(false);

  useEffect(() => {
    const isExampleTemp: boolean = props.navigation.getParam('isExample');

    setIsExample(isExampleTemp);
  }, []);

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
        routeName = 'galleryVideo';
        break;
      }
      case FunctionEnum.SoDoChoNgoi: {
        routeName = 'seatingChart';

        break;
      }
      case FunctionEnum.DiemDanh: {
        if (isTablet()) {
          routeName = 'attendance';
        } else {
          alerts.alert({ message: 'Chức năng này đang được phát triển trên điện thoại' });
        }

        break;
      }
      case FunctionEnum.DangKyPhatBieu: {
        routeName = isExample ? 'speechList' : 'signUpToSpeak';
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

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <FunctionTablet
        user={userDataFake}
        functions={functionDataFake}
        onFunctionItemPress={onFunctionItemPress}
        onBackPress={onBackPress}
      />
    );
  }

  return (
    <Function
      user={userDataFake}
      functions={functionDataFake}
      onFunctionItemPress={onFunctionItemPress}
    />
  );
};
