import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { NavigationInjectedProps } from 'react-navigation';
import { DeputyGroup } from './deputyGroup.component';
import { isTablet } from 'react-native-device-info';
import { DeputyGroupTablet } from './deputyGroup.component.tablet';
import { AppState } from '@src/core/store';
import { onThunkGetDeputyGroupsReq } from '../store/thunk';
import { DeputyState } from '../store/reducer/types';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';

export const DeputyGroupContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DeputyGroupContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const delegateReducer: DeputyState = useSelector((state: AppState) => state.deputy);
  const meetingId: string = props.navigation.getParam('meetingId');

  useEffect(() => {
    onGetDeputyGroups();
  }, []);

  const onGetDeputyGroups = (): void => {
    dispatch(onThunkGetDeputyGroupsReq(meetingId));
  };

  const onDeputyItemPress = (deputy: DeputyModel): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'deputyDetail',
      params: {
        deputy,
      },
    });
  };

  if (isTablet()) {
    return (
      <DeputyGroupTablet
        deputyGroups={delegateReducer.deputyGroups}
        onDeputyItemPress={onDeputyItemPress}
      />
    );
  }

  return (
    <DeputyGroup
      deputyGroups={delegateReducer.deputyGroups}
      onDeputyItemPress={onDeputyItemPress}
    />
  );
};
