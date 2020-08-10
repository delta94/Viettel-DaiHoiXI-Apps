import {
  GetDeputyGroupsAction,
  GET_DEPUTY_GROUPS_SUCCESS,
  GetDeputyDetailsAction,
  GET_DEPUTY_DETAILS_SUCCESS,
  GetDeputyDiscussionGroupsAction,
  GET_DEPUTY_DISCUSSION_GROUPS_SUCCESS,
  GetDiscussionGroupsAction,
  GET_DISCUSSION_GROUPS_SUCCESS,
  GetDiscussionGroupKeyMemberAction,
  GET_DISCUSSION_GROUPS_KEY_MEMBER_SUCCESS,
} from './types';
import { DeputyDetail } from '@src/core/models/deputy/deputyDetail.model';
import { DeputyGroup } from '@src/core/models/deputy/deputyGroup.model';
import { DeputyDiscussionGroup } from '@src/core/models/deputy/deputyDiscussionGroup.model';
import { DiscussionGroup } from '@src/core/models/deputy/discussionGroup.model';
import { DiscussionGroupKeyMember } from '@src/core/models/deputy/keyMember.model';

export const onGetDiscussionGroupsSuccess = (payload: DiscussionGroup[]): GetDiscussionGroupsAction => ({
  type: GET_DISCUSSION_GROUPS_SUCCESS,
  payload,
});

export const onGetDiscussionGroupKeyMemberSuccess = (payload: DiscussionGroupKeyMember): GetDiscussionGroupKeyMemberAction => ({
  type: GET_DISCUSSION_GROUPS_KEY_MEMBER_SUCCESS,
  payload,
});

export const onGetDeputyDiscussionGroupsSuccess = (payload: DeputyDiscussionGroup): GetDeputyDiscussionGroupsAction => ({
  type: GET_DEPUTY_DISCUSSION_GROUPS_SUCCESS,
  payload,
});

export const onGetDeputyGroupsSuccess = (payload: DeputyGroup[]): GetDeputyGroupsAction => ({
  type: GET_DEPUTY_GROUPS_SUCCESS,
  payload,
});

export const onGetDeputyDetailsSuccess = (payload: DeputyDetail[]): GetDeputyDetailsAction => ({
  type: GET_DEPUTY_DETAILS_SUCCESS,
  payload,
});
