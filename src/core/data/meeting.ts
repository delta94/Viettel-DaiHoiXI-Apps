import { MeetingItem } from '../models/meeting/meeting.model';

export const meetingDataFake: MeetingItem[] = [
  {
    name: 'Họp thường trực Thành uỷ',
    fromTime: '08:00',
    toTime: '09:00',
    date: '15',
    day: 'Hai',
    isExample: false,
  },
  {
    name: 'Họp Ban thường vụ',
    fromTime: '08:00',
    toTime: '09:00',
    date: '17',
    day: 'Tư',
    isExample: false,
  },
  {
    name: 'Hội nghị lần thứ 31 Ban chấp hành Đảng bộ TP.Hồ Chí Minh',
    fromTime: '08:00',
    toTime: '10:00',
    date: '19',
    day: 'Sáu',
    isExample: true,
  },
  {
    name: 'Kết luận của ủy ban thường vụ về kết quả kỳ họp thứ 9, việc chuẩn bị kỳ họp thứ 10',
    fromTime: '15:00',
    toTime: '17:00',
    date: '20',
    day: 'Bảy',
    isExample: true,
  },
  {
    name: 'Hội nghị cải cách quan trọng trong luật doanh nghiệp 2020',
    fromTime: '14:00',
    toTime: '16:00',
    date: '22',
    day: 'Hai',
    isExample: true,
  },
];
