import {
  GetDeputyGroupsAction,
  GET_DEPUTY_GROUPS_SUCCESS,
  GetDeputyDetailsAction,
  GET_DEPUTY_DETAILS_SUCCESS,
} from './types';
import { DeputyDetail } from '@src/core/models/deputy/deputyDetail.model';
import { DeputyGroup } from '@src/core/models/deputy/deputyGroup.model';

export const onGetDeputyGroupsSuccess = (payload: DeputyGroup[]): GetDeputyGroupsAction => ({
  type: GET_DEPUTY_GROUPS_SUCCESS,
  payload,
});

export const onGetDeputyDetailsSuccess = (payload: DeputyDetail[]): GetDeputyDetailsAction => ({
  type: GET_DEPUTY_DETAILS_SUCCESS,
  payload,
});
