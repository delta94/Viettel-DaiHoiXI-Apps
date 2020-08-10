import {
  GET_SPEECH_FIELDS_SUCCES,
  GetSpeechFieldsSuccessAction,
} from './types';
import { SpeechField } from '@src/core/models/speechSignUp/speechField.model';

export const onGetSpeechFieldsSuccess = (payload: SpeechField[]): GetSpeechFieldsSuccessAction => ({
  type: GET_SPEECH_FIELDS_SUCCES,
  payload,
});
