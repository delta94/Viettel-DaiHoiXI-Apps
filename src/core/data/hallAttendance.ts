import { HallAttendance } from '../models/attendance/hallAttendance/hallAttendance.model';

export const hallAttendanceDataFake: HallAttendance[] = [
  {
    section: 'SÁNG',
    attendance: {
        present: 38,
        absent: 19,
        leave: 19,
    },
  },
  {
    section: 'CHIỀU',
    attendance: {
        present: 38,
        absent: 19,
        leave: 19,
    },
  },
];
