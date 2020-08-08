import ApiService from './api.service';
import { GetDelegateListApiResult } from '../dataTransfer/delegate/getDelegateList.apiResult';
import { GetDelegateDetailsApiResult } from '../dataTransfer/delegate/getDelegateDetails.apiResult';

export default class DelegateService extends ApiService {
  public getDelegateList(meetingId: string) {
    return this.apiGet<GetDelegateListApiResult>(`/meetings/${meetingId}/deputy-groups`, null, true);
  }

  public getDelegateDetails(deputyId: string) {
    return this.apiGet<GetDelegateDetailsApiResult>(`/deputies/${deputyId}`, null, true);
  }
}
