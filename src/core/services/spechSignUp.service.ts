import ApiService from './api.service';
import { GetSpeechFieldsApiResult } from '../dataTransfer/speechSignUp/getSpeechFields.apiResult';
import { ApiResult } from '../dataTransfer/apiResult';
import { SpeechSignUpReq } from '../models/speechSignUp/speechSignUpReqModel';
import { UpdateSpeechSignUpReq } from '../models/speechSignUp/updateSpeechSignUp';

export default class SpeechSignUpService extends ApiService {
  public getSpeechFields() {
    return this.apiGet<GetSpeechFieldsApiResult>(`/meeting-speakers/fields`, null, true);
  }

  public speechSignUp(data: SpeechSignUpReq) {
    return this.apiPost<ApiResult>('/meeting-speakers/register', data, null, true);
  }

  public updateSpeechSignUp(data: UpdateSpeechSignUpReq) {
    return this.apiPost<ApiResult>('/meeting-speakers/update', data, null, true);
  }

}
