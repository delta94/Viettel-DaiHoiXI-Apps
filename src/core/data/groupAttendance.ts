import { GroupAttendance } from '../models/attendance/groupAttendance/groupAttendance.model';


export const groupAttendanceDataFake: GroupAttendance[] = [
  {
    section: 'SÁNG',
    attendance: [
      {
        group: 1,
        present: 8,
        absent: 2,
      },
      {
        group: 2,
        present: 9,
        absent: 7,
      },
      {
        group: 3,
        present: 5,
        absent: 3 ,
      },
      {
        group: 4,
        present: 3,
        absent: 3,
      },
    ],
  },
  {
    section: 'CHIỀU',
    attendance: [
      {
        group: 1,
        present: 8,
        absent: 2,
      },
      {
        group: 2,
        present: 8,
        absent: 7,
      },
      {
        group: 3,
        present: 3,
        absent: 3 ,
      },
      {
        group: 4,
        present: 3,
        absent: 3,
      },
    ],
  },
];
