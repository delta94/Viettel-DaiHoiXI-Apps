import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateDetail } from './delegateDetail.component';
import { isTablet } from 'react-native-device-info';
import { DelegateDetailTablet } from './delegateDetail.component.tablet';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { AppState } from '@src/core/store';
import { DelegateState } from '../store/reducer/types';
import { onThunkGetDelegateDetailsReq } from '../store/thunk';
import { Delegate } from '@src/core/models/delegate/delegate.model';

export const DelegateDetailContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DelegateDetailContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const { delegateDetails }: DelegateState = useSelector((state: AppState) => state.delegate);
  const deputy: Delegate = props.navigation.getParam('deputy');

  useEffect(() => {
    onGetDelegateDetails();
  }, []);

  const onGetDelegateDetails = (): void => {
    dispatch(onThunkGetDelegateDetailsReq(deputy.id, () => { }));
  };

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <DelegateDetailTablet
        delegateDetails={delegateDetails}
        onBackPress={onBackPress}
        deputy={deputy}
      />
    );
  }

  return (
    <DelegateDetail
      delegateDetails={delegateDetails}
      deputy={deputy}
    />
  );
};
