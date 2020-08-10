import {
  GetDeputyGroupsAction,
  GET_DEPUTY_GROUPS_SUCCESS,
  GetDeputyDetailsAction,
  GET_DEPUTY_DETAILS_SUCCESS,
  GetDeputyDiscussionGruopsAction,
  GET_DEPUTY_DISCUSSION_GROUPS_SUCCESS,
} from './types';
import { DeputyDetail } from '@src/core/models/deputy/deputyDetail.model';
import { DeputyGroup } from '@src/core/models/deputy/deputyGroup.model';
import { DeputyDiscussionGroup } from '@src/core/models/deputy/deputyDiscussionGroup.model';


export const onGetDeputyDiscussionGroupsSuccess = (payload: DeputyDiscussionGroup[]): GetDeputyDiscussionGruopsAction => ({
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
