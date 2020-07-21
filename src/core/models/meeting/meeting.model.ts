import { Type } from 'class-transformer';
export class MeetingItem {
  name: string;
  fromTime: string;
  toTime: string;
  date: string;
  day: string;
  isExample: boolean;
}

export class Meeting {
  meetings: MeetingItem[];
}

export class WeeklyMeetingItem {
  name: string;
  fromTime: string;
  toTime: string;
  date: string;
  isExample: boolean;
}

export class WeeklyMeeting {
  day: number;
  date: string;
  @Type(() => WeeklyMeetingItem)
  contents: WeeklyMeetingItem[];

  constructor() {
    this.contents = [];
  }
}
