import { ApiResult } from '../apiResult';
import { DeputyDetail } from '@src/core/models/deputy/deputyDetail.model';

export class GetDeputyDetailsApiResult extends ApiResult {
  data: DeputyDetail[];
}




