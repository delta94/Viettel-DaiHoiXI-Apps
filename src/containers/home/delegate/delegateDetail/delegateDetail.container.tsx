import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateDetail } from './delegateDetail.component';
import { isTablet } from 'react-native-device-info';
import { DelegateDetailTablet } from './delegateDetail.component.tablet';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '@src/core/store';
import { Dispatch } from 'redux';
import { DelegateState } from '../store/reducer/types';
import { onThunkGetDelegateDetailReq } from '../store/thunk';
import { Delegate } from '@src/core/models/delegate/delegate.model';

export const DelegateDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DelegateDetailContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const delegateReducer: DelegateState = useSelector((state: AppState) => state.delegate);
  const deputy: Delegate = props.navigation.getParam('deputy');

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  useEffect(() => {
    onGetDelegateDetail(deputy.id);
  }, []);

  const onGetDelegateDetail = (deputyId: string): void => {
    dispatch(onThunkGetDelegateDetailReq(deputyId, () => { }));
  };

  if (isTablet()) {
    return (
      <DelegateDetailTablet
        delegateDetail={delegateReducer.delegateDetail}
        onBackPress={onBackPress}
        deputy={deputy}
      />
    );
  }

  return (
    <DelegateDetail
      delegateDetail={delegateReducer.delegateDetail}
      deputy={deputy}
    />
  );
};
