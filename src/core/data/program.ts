import { Program } from '../models/program/program.model';

export const programDataFake: Program[] = [
  {
    section: 'SÁNG',
    contents: [
      {
        implementer: 'Đồng chí Nguyễn Thiện Nhân - Uỷ viên Bộ Chính trị, Bí thư Thành uỷ',
        description: 'Báo cáo thực hiện một số nhiệm vụ cấp bách cần tập trung chỉ đạo trong 5 năm 2011 - 2015.',
        fromTime: '08:00',
        toTime: '10:00',
      },
      {
        implementer: 'Đồng chí Nguyễn Thiện Nhân - Uỷ viên Bộ Chính trị, Bí thư Thành uỷ',
        description: 'Chương trình hỗ trợ chuyển dịch cơ cấu kinh tế, chuyển đổi mô hình tăng trưởng kinh tế.',
        fromTime: '8:00',
        toTime: '8:30',
      },
    ],
  },
  {
    section: 'CHIỀU',
    contents: [
      {
        implementer: '',
        description: 'Bế mạc hội nghị',
        fromTime: '14:00',
        toTime: '16:00',
      },
    ],
  },
];
