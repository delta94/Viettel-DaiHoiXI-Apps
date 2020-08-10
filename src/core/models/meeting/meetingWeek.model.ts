export class MeetingWeek {
  id: string;
  weekName: string;
  selected: boolean;

  constructor() {
    this.id = '';
    this.weekName = '';
    this.selected = true;
  }
}
