import { ApiResult } from '../apiResult';
import { DelegateList } from '@src/core/models/delegate/delegateList.model';

export class GetDelegateListApiResult extends ApiResult {
  data: DelegateList[];
}
