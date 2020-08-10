import { Program as ProgramModel } from '@src/core/models/program/program.model';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';
import { Annoucement as AnnoucementModel } from '@src/core/models/annoucement/annoucement.model';

export interface ConferenceListState {
  programs: ProgramModel[];
  notifications: NotificationModel[];
  annoucement: AnnoucementModel[];
}

export const GET_PROGRAM_LIST_SUCCESS = 'GET_PROGRAM_LIST_SUCCESS';
export const GET_NOTIFICATION_LIST_SUCCESS = 'GET_NOTIFICATION_LIST_SUCCESS';
export const GET_ANNOUCEMENT_LIST_SUCCESS = 'GET_ANNOUCEMENT_LIST_SUCCESS';


export interface GetNotificationListAction {
  type: typeof GET_NOTIFICATION_LIST_SUCCESS;
  payload: NotificationModel[];
}

export interface GetPressReleaseListAction {
  type: typeof GET_ANNOUCEMENT_LIST_SUCCESS;
  payload: AnnoucementModel[];
}

export interface GetProgramListAction {
  type: typeof GET_PROGRAM_LIST_SUCCESS;
  payload: ProgramModel[];
}

export type ProgramListActionTypes = GetProgramListAction & GetNotificationListAction & GetPressReleaseListAction;
