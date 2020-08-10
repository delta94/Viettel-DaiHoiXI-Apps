import { Program as ProgramModel } from '@src/core/models/program/program.model';
import {
  GetProgramListAction,
  GET_PROGRAM_LIST_SUCCESS,
  GET_NOTIFICATION_LIST_SUCCESS,
  GET_ANNOUCEMENT_LIST_SUCCESS,
  GetNotificationListAction,
  GetPressReleaseListAction,
} from './types';
import { Notification } from '@src/core/models/notification/notification.model';
import { Annoucement } from '@src/core/models/annoucement/annoucement.model';

export const onGetProgramListSuccess = (payload: ProgramModel[]): GetProgramListAction => ({
  type: GET_PROGRAM_LIST_SUCCESS,
  payload,
});

export const onGetNotificationListSuccess = (payload: Notification[]): GetNotificationListAction => ({
  type: GET_NOTIFICATION_LIST_SUCCESS,
  payload,
});

export const onGetAnnoucementListSuccess = (payload: Annoucement[]): GetPressReleaseListAction => ({
  type: GET_ANNOUCEMENT_LIST_SUCCESS,
  payload,
});



