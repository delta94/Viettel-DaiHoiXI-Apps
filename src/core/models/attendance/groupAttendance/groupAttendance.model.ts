import { Type } from 'class-transformer';

export class GroupAttendanceContent {
  group: number;
  present: number;
  absent: number;
}

export class GroupAttendance {
  section: string;
  @Type(() => GroupAttendanceContent)
  attendance: GroupAttendanceContent[];

  constructor() {
    this.attendance = [];
  }
}
