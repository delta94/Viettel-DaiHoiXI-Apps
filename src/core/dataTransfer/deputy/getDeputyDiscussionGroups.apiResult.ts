import { ApiResult } from '../apiResult';
import { DeputyDiscussionGroup } from '@src/core/models/deputy/deputyDiscussionGroup.model';
import { DiscussionGroup } from '@src/core/models/deputy/discussionGroup.model';
import { DiscussionGroupKeyMember } from '@src/core/models/deputy/keyMember.model';

export class GetDeputyDiscussionGroupsApiResult extends ApiResult {
    data: DeputyDiscussionGroup;
}

export class GetDiscussionGroupsApiResult extends ApiResult {
    data: DiscussionGroup[];
}

export class GetDiscussionGroupsKeyMemberApiResult extends ApiResult {
    data: DiscussionGroupKeyMember;
}
