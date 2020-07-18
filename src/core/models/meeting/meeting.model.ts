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
