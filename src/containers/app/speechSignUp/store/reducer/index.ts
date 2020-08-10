import {
  SpeechSignUpState,
  SpeechFielsActionTypes,
  GET_SPEECH_FIELDS_SUCCES,
} from './types';

const initialState: SpeechSignUpState = {
  fields: [],
};

export const SpeechSignUpReducer = (state = initialState, action: SpeechFielsActionTypes): SpeechSignUpState => {
  switch (action.type) {
    case GET_SPEECH_FIELDS_SUCCES: {
      return {
        ...state,
        fields: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
