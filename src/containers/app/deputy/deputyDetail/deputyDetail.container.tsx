import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { NavigationInjectedProps } from 'react-navigation';
import { DeputyDetail } from './deputyDetail.component';
import { isTablet } from 'react-native-device-info';
import { DeputyDetailTablet } from './deputyDetail.component.tablet';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { AppState } from '@src/core/store';
import { DeputyState } from '../store/reducer/types';
import { onThunkGetDeputyDetailsReq } from '../store/thunk';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';

export const DeputyDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DeputyDetailContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const { deputyDetails }: DeputyState = useSelector((state: AppState) => state.deputy);
  const deputy: DeputyModel = props.navigation.getParam('deputy');

  useEffect(() => {
    onGetDeputyDetails();
  }, []);

  const onGetDeputyDetails = (): void => {
    dispatch(onThunkGetDeputyDetailsReq(deputy.id || deputy.deputyId));
  };

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <DeputyDetailTablet
        deputyDetails={deputyDetails}
        onBackPress={onBackPress}
        deputy={deputy}
      />
    );
  }

  return (
    <DeputyDetail
      deputyDetails={deputyDetails}
      deputy={deputy}
    />
  );
};
