import { DelegateList } from '@src/core/models/delegate/delegateList.model';
import { DelegateDetail } from '@src/core/models/delegate/delegateDetail.model';

export interface DelegateState {
  delegateList: DelegateList[];
  delegateDetail: DelegateDetail[];
}

export const GET_DELEGATE_LIST_SUCCESS = 'GET_DELEGATE_LIST_SUCCESS';
export const GET_DELEGATE_DETAIL_SUCCESS = 'GET_DELEGATE_DETAIL_SUCCESS';


export interface GetDelegateListAction {
  type: typeof GET_DELEGATE_LIST_SUCCESS;
  payload: DelegateList[];
}

export interface GetDelegateDetailAction {
  type: typeof GET_DELEGATE_DETAIL_SUCCESS;
  payload: DelegateDetail[];
}

export type DelegateActionTypes = GetDelegateListAction & GetDelegateDetailAction;
