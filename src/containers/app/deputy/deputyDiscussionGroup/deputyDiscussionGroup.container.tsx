import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DeputyDiscussionGroup } from './deputyDiscussionGroup.component';
import { delegateGroupDataFake } from '@src/core/data/delegateGroup';
import { delegateListDataFake2 } from '@src/core/data/delegateList';
import { DeputyDiscussionGroupTablet } from './deputyDiscussionGroup.component.tablet';
import { isTablet } from 'react-native-device-info';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';
import { DeputyState } from '../store/reducer/types';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@src/core/store';
import { onThunkGetDeputyDiscussionGroupsReq } from '../store/thunk';

export const DeputyDiscussionGroupContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DeputyDiscussionGroupContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const delegateReducer: DeputyState = useSelector((state: AppState) => state.deputy);
  const meetingId: string = props.navigation.getParam('meetingId');

  useEffect(() => {
    onGetDeputyGroups();
  }, []);

  const onGetDeputyGroups = (): void => {
    dispatch(onThunkGetDeputyDiscussionGroupsReq(meetingId));
  };

  const onDeputyPress = (deputy: DeputyModel): void => {
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
      <DeputyDiscussionGroupTablet
        deputyDiscussionGroups={delegateReducer.deputyDiscussionGroups}
        onDelegateItemPress={onDeputyPress}
      />
    );
  }

  return (
    <DeputyDiscussionGroup
      deputyDiscussionGroups={delegateReducer.deputyDiscussionGroups}
      onDeputyPress={onDeputyPress}
    />
  );
};
