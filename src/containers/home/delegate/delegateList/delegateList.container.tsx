import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateList } from './delegateList.component';
import { isTablet } from 'react-native-device-info';
import { DelegateListTablet } from './delegateList.component.tablet';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { AppState } from '@src/core/store';
import { onThunkGetDelegateListReq } from '../store/thunk';
import { DelegateState } from '../store/reducer/types';
import { Delegate } from '@src/core/models/delegate/delegate.model';

export const DelegateListContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DelegateListContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const delegateReducer: DelegateState = useSelector((state: AppState) => state.delegate);

  useEffect(() => {
    onGetDelegateList();
  }, []);

  const onGetDelegateList = (): void => {
    dispatch(onThunkGetDelegateListReq(
      'example',
      () => { },
    ));
  };

  const onDelegateItemPress = (deputy: Delegate): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'delegateDetail',
      params: {
        deputy,
      },
    });
  };

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <DelegateListTablet
        delegateList={delegateReducer.delegateList}
        onDelegateItemPress={onDelegateItemPress}
        onBackPress={onBackPress}
      />
    );
  }

  return (
    <DelegateList
      delegateList={delegateReducer.delegateList}
      onDelegateItemPress={onDelegateItemPress}
    />
  );
};
