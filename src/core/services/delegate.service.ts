import ApiService from './api.service';
import { GetDelegateListApiResult } from '../dataTransfer/delegate/getDelegateList.apiResult';
import { GetDelegateDetailApiResult } from '../dataTransfer/delegate/getDelegateDetail.apiResult';


export default class DelegateService extends ApiService {
  public getDelegateList(meettingId: string) {
    return this.apiGet<GetDelegateListApiResult>(`/meetings/e05561b7-b2ec-4d8e-8639-08d8352259e3/deputy-groups`, null, true);
  }

  public getDelegateDetail(deputyId: string) {
    return this.apiGet<GetDelegateDetailApiResult>(`/deputies/${deputyId}`, null, true);
  }
}
