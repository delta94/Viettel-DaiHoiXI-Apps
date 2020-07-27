import { Type } from 'class-transformer';

export class HallAttendanceContent {
  present: number;
  absent: number;
  leave: number;
}

export class HallAttendance {
  section: string;
  @Type(() => HallAttendanceContent)
  attendance: HallAttendanceContent;

  constructor() {
    this.attendance = null;
  }
}
