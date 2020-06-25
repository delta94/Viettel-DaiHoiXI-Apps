export class MeetingItem {
  name: string;
  time: string;
}

export class Meeting {
  today: MeetingItem[];
  feature: MeetingItem[];
}
