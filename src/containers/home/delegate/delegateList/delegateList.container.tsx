import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DelegateList } from './delegateList.component';
import { isTablet } from 'react-native-device-info';
import { DelegateListTablet } from './delegateList.component.tablet';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '@src/core/store';
import { SessionState } from '@src/core/store/reducer/session/types';
import { onThunkGetDelegateListReq } from '../store/thunk';
import { DelegateState } from '../store/reducer/types';
import { Delegate } from '@src/core/models/delegate/delegate.model';

export const DelegateListContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DelegateListContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const delegateReducer: DelegateState = useSelector((state: AppState) => state.delegate);
  const [dataGroup, setDataGroup] = React.useState([]);
  const [dataTeam, setDataTeam] = React.useState([]);

  const {
    meetingId,
  }: SessionState = useSelector((state: AppState) => state.session);

  const onDelegateItemPress = (deputy: Delegate): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'delegateDetail',
      params: {
        deputy,
      },
    });
  };

  const onGetGroupsFromData = () => {
    const tmp = delegateReducer.delegateList.map(item => ({ text: item.group }));
    setDataGroup(tmp);
  };

  const onGetDiscussionGroupsFromData = () => {
    let discussionGroupsTemp = [];

    delegateReducer.delegateList.forEach(item => {
      item.deputies.forEach(deputie => {
        discussionGroupsTemp.push(deputie.discussionGroup);
      });
    });
    discussionGroupsTemp = discussionGroupsTemp.map(item => ({ text: item }));
    setDataTeam(discussionGroupsTemp);
  };

  useEffect(() => {
    onGetDelegateList();
    onGetGroupsFromData();
    onGetDiscussionGroupsFromData();
  }, []);

  const onGetDelegateList = (): void => {
    dispatch(
      onThunkGetDelegateListReq(
        meetingId,
        () => { },
      ),
    );
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
        dataTeam={dataTeam}
        dataGroup={dataGroup}
      />
    );
  }

  return (
    <DelegateList
      delegateList={delegateReducer.delegateList}
      onDelegateItemPress={onDelegateItemPress}
      dataGroup={dataGroup}
    />
  );
};
