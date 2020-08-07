import { DelegateList } from '@src/core/models/delegate/delegateList.model';
import {
  GetDelegateListAction,
  GET_DELEGATE_LIST_SUCCESS,
  GetDelegateDetailAction,
  GET_DELEGATE_DETAIL_SUCCESS,
} from './types';
import { DelegateDetail } from '@src/core/models/delegate/delegateDetail.model';

export const onGetDelegateListSuccess = (payload: DelegateList[]): GetDelegateListAction => ({
  type: GET_DELEGATE_LIST_SUCCESS,
  payload,
});

export const onGetDelegateDetailSuccess = (payload: DelegateDetail[]): GetDelegateDetailAction => ({
  type: GET_DELEGATE_DETAIL_SUCCESS,
  payload,
});
