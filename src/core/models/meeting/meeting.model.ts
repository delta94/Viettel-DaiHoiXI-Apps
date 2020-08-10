import { Type } from 'class-transformer';

export class MeetingItem {
  meetingId: string;
  meetingName: string;
  time: string;
  color: string;

  constructor() {
    this.meetingId = '';
    this.meetingName = '';
    this.time = '';
  }
}

export class Meeting {
  date: string;
  dayOfWeek: string;
  @Type(() => MeetingItem)
  meetings: MeetingItem[];

  constructor() {
    this.date = '';
    this.dayOfWeek = '';
    this.meetings = [];
  }
}
