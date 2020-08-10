import { ApiResult } from '../apiResult';
import { Meeting as MeetingModel } from '@src/core/models/meeting/meeting.model';

export class GetMeetingsByWeekApiResult extends ApiResult {
  data: MeetingModel[];
}
