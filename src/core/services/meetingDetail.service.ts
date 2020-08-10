import ApiService from './api.service';
import { GetProgramListApiResult } from '../dataTransfer/meetingDetail/program/getProgramList.apiResult';
import { GetAnnoucementListApiResult } from '../dataTransfer/meetingDetail/annoucement/getAnnoucementList.apiResult';
import { GetNotificationListApiResult } from '../dataTransfer/meetingDetail/notification/getNotificationList.apiResult';


export default class MeetingDetail extends ApiService {
  public getProgramList(meetingId: string) {
    return this.apiGet<GetProgramListApiResult>(`/meetings/${meetingId}/programs`, null, true);
  }
  public getAnnoucementList(meetingId: string) {
    return this.apiGet<GetAnnoucementListApiResult>(`/meetings/${meetingId}/announcements`, null, true);
  }
  public getNotificationList(meetingId: string) {
    return this.apiGet<GetNotificationListApiResult>(`/meetings/${meetingId}/notifications`, null, true);
  }
}
