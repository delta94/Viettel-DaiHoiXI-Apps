import { HallAttendance } from '../models/attendance/hallAttendance/hallAttendance.model';

export const hallAttendanceDataFake: HallAttendance[] = [
  {
    section: 'SÁNG',
    attendance: {
        present: 46,
        absent: 22,
        leave: 20,
    },
  },
  {
    section: 'CHIỀU',
    attendance: {
        present: 41,
        absent: 21,
        leave: 20,
    },
  },
];
