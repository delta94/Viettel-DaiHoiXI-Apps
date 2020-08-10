import ApiService from './api.service';
import { GetDeputyGroupsApiResult } from '../dataTransfer/deputy/getDeputyGroups.apiResult';
import { GetDeputyDetailsApiResult } from '../dataTransfer/deputy/getDeputyDetails.apiResult';
import { GetDeputyDiscussionGroupsApiResult, GetDiscussionGroupsApiResult, GetDiscussionGroupsKeyMemberApiResult } from '../dataTransfer/deputy/getDeputyDiscussionGroups.apiResult';

export default class DeputyService extends ApiService {
  public getDeputyGroups(meetingId: string) {
    return this.apiGet<GetDeputyGroupsApiResult>(`/meetings/${meetingId}/deputy-groups`, null, true);
  }

  public getDeputyDetails(deputyId: string) {
    return this.apiGet<GetDeputyDetailsApiResult>(`/deputies/${deputyId}`, null, true);
  }

  public getDeputyDiscussionGroups(meetingId: string, discussionGroupId: string) {
    return this.apiGet<GetDeputyDiscussionGroupsApiResult>(`/meetings/${meetingId}/discussion-groups/${discussionGroupId}/deputies`, null, true);
  }

  public getDiscussionGroups(meetingId: string) {
    return this.apiGet<GetDiscussionGroupsApiResult>(`/meetings/${meetingId}/discussion-groups`, null, true);
  }

  public getDiscussionGroupsKeyMember(meetingId: string, discussionGroupId: string) {
    return this.apiGet<GetDiscussionGroupsKeyMemberApiResult>(`/meetings/${meetingId}/discussion-groups/${discussionGroupId}/key-members`, null, true);
  }
}
