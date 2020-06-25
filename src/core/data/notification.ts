import { Notification } from '../models/notification/notification.model';

export const notificationDataFake: Notification[] = [
  {
    description: 'Thông báo phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp',
    date: '15:00 - 17/07/2020',
    read: false,
  },
  {
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khkoas XV',
    date: '10:00 - 16/07/2020',
    read: true,
  },
  {
    description: 'Ban Chấp hành Trung ương Đảng đã xem xét, thảo luận, cho ý kiến về nguyên tắc và các căn cứ phân bố đại biểu và dự kiến số lượng đại biểu tham dự Đại hội Đảng lần thứ XIII, thực hiện nguyên tắc phân bổ.',
    date: '08:00 - 15/07/2020',
    read: true,
  },
];
