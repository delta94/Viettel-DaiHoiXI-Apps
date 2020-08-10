import { ApiResult } from '../apiResult';
import { DeputyGroup } from '@src/core/models/deputy/deputyGroup.model';

export class GetDeputyGroupsApiResult extends ApiResult {
  data: DeputyGroup[];
}
