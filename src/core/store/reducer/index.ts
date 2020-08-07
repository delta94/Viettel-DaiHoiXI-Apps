import { combineReducers } from 'redux';
import { sessionReducer } from './session';
import { appReducer } from './app';
import { delegateReducer } from '@src/containers/home/delegate/store/reducer';

export const rootReducer = combineReducers({
  session: sessionReducer,
  app: appReducer,
  delegate: delegateReducer,
});
