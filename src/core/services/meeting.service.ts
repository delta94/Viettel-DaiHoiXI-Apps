import ApiService from './api.service';
import { GetMeetingsByWeekApiResult } from '../dataTransfer/meeting/getMeetingsByWeek.apiResult';
import { GetMeetingWeeksApiResult } from '../dataTransfer/meeting/getMeetingWeeks.apiResult';

export default class MeetingService extends ApiService {
  public getMeetings(userId: string, fromDate: string, toDate: String) {
    return this.apiGet<GetMeetingsByWeekApiResult>(`/users/${userId}/from-date/${fromDate}/to-date/${toDate}/meetings`, null, true);
  }

  public getMeetingWeeks() {
    return this.apiGet<GetMeetingWeeksApiResult>(`/meetings/weeks`, null, true);
  }
}
