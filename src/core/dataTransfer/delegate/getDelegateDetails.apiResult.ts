import { ApiResult } from '../apiResult';
import { DelegateDetail } from '@src/core/models/delegate/delegateDetail.model';

export class GetDelegateDetailsApiResult extends ApiResult {
  data: DelegateDetail[];
}




