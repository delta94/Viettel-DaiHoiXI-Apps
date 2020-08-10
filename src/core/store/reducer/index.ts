import { combineReducers } from 'redux';
import { sessionReducer } from './session';
import { appReducer } from './app';
import { deputyReducer } from '@src/containers/app/deputy/store/reducer';
import { meetingReducer } from '@src/containers/app/store/reducer';
import { menuReducer } from '@src/containers/app/menu/store/reducer';
import { meetingDetailReducer } from '@src/containers/app/meetingDetail/store/reducer';
import { SpeechSignUpReducer } from '@src/containers/app/speechSignUp/store/reducer';


export const rootReducer = combineReducers({
  session: sessionReducer,
  app: appReducer,
  deputy: deputyReducer,
  meetings: meetingReducer,
  menu: menuReducer,
  meetingDetail: meetingDetailReducer,
  speechSignUp : SpeechSignUpReducer,
});
