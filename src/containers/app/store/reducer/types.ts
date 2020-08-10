import { Meeting as MeetingModel } from '@src/core/models/meeting/meeting.model';
import { MeetingWeek as MeetingWeekModel } from '@src/core/models/meeting/meetingWeek.model';

export interface MeetingState {
  meetings: MeetingModel[];
  meetingWeeks: MeetingWeekModel[];
}

export const GET_MEETINGS_SUCCESS = 'GET_MEETINGS_SUCCESS';
export const GET_MEETING_WEEKS_SUCCESS = 'GET_MEETING_WEEKS_SUCCESS';
export const UPDATE_MEETING_WEEKS = 'UPDATE_MEETING_WEEKS';


export interface GetMeetingsAction {
  type: typeof GET_MEETINGS_SUCCESS;
  payload: MeetingModel[];
}

export interface GetMeetingWeeksAction {
  type: typeof GET_MEETING_WEEKS_SUCCESS;
  payload: MeetingWeekModel[];
}

export interface UpdateMeetingWeeksAction {
  type: typeof UPDATE_MEETING_WEEKS;
  payload: string;
}

export type MeetingActionTypes = GetMeetingsAction &
  GetMeetingWeeksAction;
