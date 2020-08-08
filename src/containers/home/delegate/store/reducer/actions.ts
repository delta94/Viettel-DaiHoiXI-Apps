import { DelegateList } from '@src/core/models/delegate/delegateList.model';
import {
  GetDelegateListAction,
  GET_DELEGATE_LIST_SUCCESS,
  GetDelegateDetailsAction,
  GET_DELEGATE_DETAILS_SUCCESS,
} from './types';
import { DelegateDetail } from '@src/core/models/delegate/delegateDetail.model';

export const onGetDelegateListSuccess = (payload: DelegateList[]): GetDelegateListAction => ({
  type: GET_DELEGATE_LIST_SUCCESS,
  payload,
});

export const onGetDelegateDetailsSuccess = (payload: DelegateDetail[]): GetDelegateDetailsAction => ({
  type: GET_DELEGATE_DETAILS_SUCCESS,
  payload,
});
