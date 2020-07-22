import { MeetingItem } from '../models/meeting/meeting.model';
import { WeeklyMeeting } from '../models/meeting/meeting.model';

export const meetingDataFake: MeetingItem[] = [
  {
    name: 'Họp thường trực Thành uỷ',
    fromTime: '08:00',
    toTime: '09:00',
    date: '20/7',
    day: 'Thứ 2',
    isExample: false,
  },
  {
    name: 'Họp Ban thường vụ',
    fromTime: '08:00',
    toTime: '09:00',
    date: '22/7',
    day: 'Thứ 4',
    isExample: false,
  },
  {
    name: 'Họp Ban thường vụ',
    fromTime: '08:00',
    toTime: '09:00',
    date: '23/7',
    day: 'Thứ 5',
    isExample: false,
  },
  {
    name: 'Kết luận của ủy ban thường vụ về kết quả kỳ họp thứ 9, việc chuẩn bị kỳ họp thứ 10',
    fromTime: '15:00',
    toTime: '17:00',
    date: '24/7',
    day: 'Thứ 6',
    isExample: true,
  },
  {
    name: 'Hội nghị lần thứ 31 Ban chấp hành Đảng bộ TP.Hồ Chí Minh',
    fromTime: '08:00',
    toTime: '17:00',
    date: '25/7',
    day: 'Thứ 7',
    isExample: true,
  },
];

export const weeklyMeetingDatafake: WeeklyMeeting[] = [
  {
    day: 1,
    date: '20/7',
    contents: [
      {
        name: 'Họp thường trực Thành uỷ',
        fromTime: '08:00',
        toTime: '09:00',
        date: '20/7',
        isExample: false,
      },
    ],
  },
  {
    day: 2,
    date: '21/7',
    contents: [],
  },
  {
    date: '22/7',
    day: 3,
    contents: [
      {
        name: 'Họp thường trực Thành uỷ',
        fromTime: '08:00',
        toTime: '09:00',
        date: '22/7',
        isExample: false,
      },
    ],
  },
  {
    date: '23/7',
    day: 4,
    contents: [
      {
        name: 'Họp thường trực Thành uỷ',
        fromTime: '08:00',
        toTime: '09:00',
        date: '22/7',
        isExample: false,
      },
    ],
  },
  {
    day: 5,
    date: '24/7',
    contents: [
      {
        name: 'Kết luận của ủy ban thường vụ về kết quả kỳ họp thứ 9, việc chuẩn bị kỳ họp thứ 10',
        fromTime: '15:00',
        toTime: '17:00',
        date: '24/7',
        isExample: true,
      },
    ],
  },
  {
    date: '25/7',
    day: 6,
    contents: [
      {
        name: 'Hội nghị lần thứ 31 Ban chấp hành Đảng bộ TP.Hồ Chí Minh',
        fromTime: '08:00',
        toTime: '17:00',
        date: '25/7',
        isExample: true,
      },
    ],
  },
  {
    date: '26/7',
    day: 7,
    contents: [],
  },
];

