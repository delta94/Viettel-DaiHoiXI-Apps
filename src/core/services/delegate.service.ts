import ApiService from './api.service';
import { GetDelegateListApiResult } from '../dataTransfer/delegate/getDelegateList.apiResult';
import { GetDelegateDetailApiResult } from '../dataTransfer/delegate/getDelegateDetail.apiResult';

export default class DelegateService extends ApiService {
  public getDelegateList(meetingId: string) {
    return this.apiGet<GetDelegateListApiResult>(`/meetings/${meetingId}/deputy-groups`, null, true);
  }

  public getDelegateDetail(deputyId: string) {
    return this.apiGet<GetDelegateDetailApiResult>(`/deputies/${deputyId}`, null, true);
  }
}
