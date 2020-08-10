import { ApiResult } from '../apiResult';
import { MeetingWeek } from '@src/core/models/meeting/meetingWeek.model';

export class GetMeetingWeeksApiResult extends ApiResult {
  data: MeetingWeek[];
}
