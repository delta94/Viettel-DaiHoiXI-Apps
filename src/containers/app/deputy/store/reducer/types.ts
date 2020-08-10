import { DeputyDetail } from '@src/core/models/deputy/deputyDetail.model';
import { DeputyGroup } from '@src/core/models/deputy/deputyGroup.model';
import { DeputyDiscussionGroup } from '@src/core/models/deputy/deputyDiscussionGroup.model';
import { DiscussionGroup } from '@src/core/models/deputy/discussionGroup.model';
import { DiscussionGroupKeyMember } from '@src/core/models/deputy/keyMember.model';

export interface DeputyState {
  deputyGroups: DeputyGroup[];
  deputyDetails: DeputyDetail[];
  deputyDiscussionGroups: DeputyDiscussionGroup;
  discussionGroup: DiscussionGroup[];
  discussionGroupKeyMember: DiscussionGroupKeyMember;
}

export const GET_DEPUTY_GROUPS_SUCCESS = 'GET_DEPUTY_GROUPS_SUCCESS';
export const GET_DEPUTY_DETAILS_SUCCESS = 'GET_DEPUTY_DETAILS_SUCCESS';
export const GET_DEPUTY_DISCUSSION_GROUPS_SUCCESS = 'GET_DEPUTY_DISCUSSION_GROUPS_SUCCESS';
export const GET_DISCUSSION_GROUPS_SUCCESS = 'GET_DISCUSSION_GROUPS_SUCCESS';
export const GET_DISCUSSION_GROUPS_KEY_MEMBER_SUCCESS = 'GET_DISCUSSION_GROUPS_KEY_MEMBER_SUCCESS';

// discussion
export interface GetDeputyDiscussionGroupsAction {
  type: typeof GET_DEPUTY_DISCUSSION_GROUPS_SUCCESS;
  payload: DeputyDiscussionGroup;
}
export interface GetDiscussionGroupsAction {
  type: typeof GET_DISCUSSION_GROUPS_SUCCESS;
  payload: DiscussionGroup[];
}

export interface GetDiscussionGroupKeyMemberAction {
  type: typeof GET_DISCUSSION_GROUPS_KEY_MEMBER_SUCCESS;
  payload: DiscussionGroupKeyMember;
}
// group
export interface GetDeputyGroupsAction {
  type: typeof GET_DEPUTY_GROUPS_SUCCESS;
  payload: DeputyGroup[];
}

export interface GetDeputyDetailsAction {
  type: typeof GET_DEPUTY_DETAILS_SUCCESS;
  payload: DeputyDetail[];
}


export type DeputyActionTypes = GetDeputyGroupsAction & GetDeputyDetailsAction & GetDeputyDiscussionGroupsAction &
  GetDiscussionGroupsAction& GetDiscussionGroupKeyMemberAction;
