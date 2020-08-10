import { ApiResult } from '../apiResult';
import { DeputyDiscussionGroup } from '@src/core/models/deputy/deputyDiscussionGroup.model';

export class GetDeputyDiscussionGroupsApiResult extends ApiResult {
    data: DeputyDiscussionGroup[];
}
