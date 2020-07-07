export class MeetingItem {
  name: string;
  fromTime: string;
  toTime: string;
  date: string;
  week: string;
  numberOfDate: string;
}

export class Meeting {
  default: MeetingItem[];
  pink: MeetingItem[];
}
