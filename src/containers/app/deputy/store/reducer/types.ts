import { DeputyDetail } from '@src/core/models/deputy/deputyDetail.model';
import { DeputyGroup } from '@src/core/models/deputy/deputyGroup.model';

export interface DeputyState {
  deputyGroups: DeputyGroup[];
  deputyDetails: DeputyDetail[];
}

export const GET_DEPUTY_GROUPS_SUCCESS = 'GET_DEPUTY_GROUPS_SUCCESS';
export const GET_DEPUTY_DETAILS_SUCCESS = 'GET_DEPUTY_DETAILS_SUCCESS';

export interface GetDeputyGroupsAction {
  type: typeof GET_DEPUTY_GROUPS_SUCCESS;
  payload: DeputyGroup[];
}

export interface GetDeputyDetailsAction {
  type: typeof GET_DEPUTY_DETAILS_SUCCESS;
  payload: DeputyDetail[];
}

export type DeputyActionTypes = GetDeputyGroupsAction & GetDeputyDetailsAction;
