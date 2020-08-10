import { Meeting as MeetingModel } from '@src/core/models/meeting/meeting.model';
import { MeetingWeek as MeetingWeekModel } from '@src/core/models/meeting/meetingWeek.model';
import {
  GetMeetingsAction,
  GET_MEETINGS_SUCCESS,
  GetMeetingWeeksAction,
  GET_MEETING_WEEKS_SUCCESS,
  UpdateMeetingWeeksAction,
  UPDATE_MEETING_WEEKS,
} from './types';

export const onGetMeetingsSuccess = (payload: MeetingModel[]): GetMeetingsAction => ({
  type: GET_MEETINGS_SUCCESS,
  payload,
});

export const onGetMeetingWeeksSuccess = (payload: MeetingWeekModel[]): GetMeetingWeeksAction => ({
  type: GET_MEETING_WEEKS_SUCCESS,
  payload,
});

export const onUpdateMeetingWeeks = (payload: string): UpdateMeetingWeeksAction => ({
  type: UPDATE_MEETING_WEEKS,
  payload,
});
