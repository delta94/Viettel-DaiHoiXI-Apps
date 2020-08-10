import { SpeechField } from '@src/core/models/speechSignUp/speechField.model';

export interface SpeechSignUpState {
  fields: SpeechField[];
}

export const GET_SPEECH_FIELDS_SUCCES = 'GET_SPEECH_FIELDS_SUCCES';

export interface GetSpeechFieldsSuccessAction {
  type: typeof GET_SPEECH_FIELDS_SUCCES;
  payload: SpeechField[];
}

export type SpeechFielsActionTypes = GetSpeechFieldsSuccessAction;
