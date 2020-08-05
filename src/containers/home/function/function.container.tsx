import React, {
  useState,
  useEffect,
} from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { Function } from './function.component';
import { functionDataFake } from '@src/core/data/function';
import { FunctionEnum } from '@src/core/utils/constants';
import { isTablet } from 'react-native-device-info';
import { FunctionTablet } from './function.component.tablet';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { alerts } from '@src/core/utils/alerts';
import { SessionState } from '@src/core/store/reducer/session/types';
import { useSelector } from 'react-redux';
import { AppState } from '@src/core/store';

export const FunctionContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'FunctionContainer';
  const { user }: SessionState = useSelector((state: AppState) => state.session);

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
        routeName = 'documentList';
        break;
      }
      case FunctionEnum.PhimAnhHinhAnh: {
        // routeName = 'galleryVideo';
        routeName = 'gallery';
        break;
      }
      case FunctionEnum.SoDoChoNgoi: {
        routeName = 'seatingChart';

        break;
      }
      case FunctionEnum.DiemDanh: {
        routeName = 'attendance';
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
        user={user}
        functions={functionDataFake}
        onFunctionItemPress={onFunctionItemPress}
        onBackPress={onBackPress}
      />
    );
  }

  return (
    <Function
      user={user}
      functions={functionDataFake}
      onFunctionItemPress={onFunctionItemPress}
    />
  );
};
