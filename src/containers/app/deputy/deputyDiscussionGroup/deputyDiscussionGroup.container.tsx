import React, { useEffect } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DeputyDiscussionGroup } from './deputyDiscussionGroup.component';
import { DeputyDiscussionGroupTablet } from './deputyDiscussionGroup.component.tablet';
import { isTablet } from 'react-native-device-info';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';
import { DeputyState } from '../store/reducer/types';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@src/core/store';
import {
  onThunkGetDeputyDiscussionGroupsReq,
  onThunkGetDiscussionGroupsReq,
  onThunkGetDiscussionGroupsKeyMemberReq,
} from '../store/thunk';
import { SelectOptionType } from 'react-native-ui-kitten/ui';
import { isEmpty } from '@src/core/utils/utils';

export const DeputyDiscussionGroupContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DeputyDiscussionGroupContainer';
  const dispatch: Dispatch<any> = useDispatch();
  const {
    discussionGroup,
    deputyDiscussionGroups,
    discussionGroupKeyMember,
  }: DeputyState = useSelector((state: AppState) => state.deputy);
  const meetingId: string = props.navigation.getParam('meetingId');
  const [discussionGroupSelected, setDiscussionGroupSelected] = React.useState<SelectOptionType>({ text: '' });

  useEffect(() => {
    onGetGroupsDiscussion();
  }, []);

  useEffect(() => {
    if (discussionGroup.length > 0) {
      setDiscussionGroupSelected({ text: discussionGroup[0].name });
    }
  }, [discussionGroup]);

  useEffect(() => {
    if (discussionGroup.length > 0) {
      if (!isEmpty(discussionGroupSelected.text)) {
        const groupSelected = discussionGroup.find(groupName => groupName.name.includes(discussionGroupSelected.text));
        onGetDeputyDiscussionGroups(groupSelected.id);
      } else {
        onGetDeputyDiscussionGroups(discussionGroup[0].id);
      }
    }
  }, [discussionGroupSelected]);

  const onGetGroupsDiscussion = (): void => {
    dispatch(onThunkGetDiscussionGroupsReq(meetingId));
  };

  const onGetDeputyDiscussionGroups = (discussionGroupId: string): void => {
    dispatch(onThunkGetDeputyDiscussionGroupsReq(meetingId, discussionGroupId));
    isTablet() && dispatch(onThunkGetDiscussionGroupsKeyMemberReq(meetingId, discussionGroupId));
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

  const onSelectGroupChange = (groupName: SelectOptionType) => {
    setDiscussionGroupSelected(groupName);
  };

  if (isTablet()) {
    return (
      <DeputyDiscussionGroupTablet
        deputyDiscussionGroups={deputyDiscussionGroups}
        onDelegateItemPress={onDeputyPress}
        discussionGroups={discussionGroup}
        onSelectGroupChange={onSelectGroupChange}
        discussionGroupSelected={discussionGroupSelected}
        discussionGroupKeyMember={discussionGroupKeyMember}
      />
    );
  }

  return (
    <DeputyDiscussionGroup
      deputyDiscussionGroups={deputyDiscussionGroups}
      onDeputyPress={onDeputyPress}
      discussionGroups={discussionGroup}
      onSelectGroupChange={onSelectGroupChange}
      discussionGroupSelected={discussionGroupSelected}
    />
  );
};
