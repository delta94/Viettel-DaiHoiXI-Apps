import { ApiResult } from '../apiResult';
import { DelegateDetail } from '@src/core/models/delegate/delegateDetail.model';

export class GetDelegateDetailApiResult extends ApiResult {
  data: DelegateDetail[];
}




