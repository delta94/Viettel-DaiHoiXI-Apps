import { ApiResult } from '../apiResult';
import { SpeechField } from '@src/core/models/speechSignUp/speechField.model';

export class GetSpeechFieldsApiResult extends ApiResult {
  data: SpeechField[];
}
