import ApiService from './api.service';
import { GetDeputyGroupsApiResult } from '../dataTransfer/deputy/getDeputyGroups.apiResult';
import { GetDeputyDetailsApiResult } from '../dataTransfer/deputy/getDeputyDetails.apiResult';

export default class DeputyService extends ApiService {
  public getDeputyGroups(meetingId: string) {
    return this.apiGet<GetDeputyGroupsApiResult>(`/meetings/${meetingId}/deputy-groups`, null, true);
  }

  public getDeputyDetails(deputyId: string) {
    return this.apiGet<GetDeputyDetailsApiResult>(`/deputies/${deputyId}`, null, true);
  }
}
