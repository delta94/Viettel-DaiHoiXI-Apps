import { ChatList } from '../models/chat/chat.model';
import { ChatDetail } from '../models/chat/chatDetail';

export const chatListDataFake: ChatList[] = [
  {
    name: 'Hệ thống',
    lastMessage: 'Yêu cầu tài liệu của quý đại biểu',
    notify: 3,
    time: '9:21',
  },
  {
    name: 'Tổ phục vụ',
    lastMessage: 'Tôi cần giúp đỡ tìm chỗ ngồi',
    notify: 0,
    time: '8:20',
  },
  {
    name: 'Tổ an ninh',
    lastMessage: 'Giờ họp đã bắt đầu',
    notify: 0,
    time: '8:20',
  },
];

export const ChatDetailDataFake: ChatDetail[] = [
  {
    content: 'Xin chào!! Tôi cần hỗ trợ tìm vị trí chỗ ngồi trong hội trường',
    time: '07:45',
    id: 1,
  },
  {
    content: 'Vâng ạ! em sẽ đến chỗ anh ngay',
    time: '07:45',
    id: 2,
  },
  {
    content: 'Ok! cảm ơn em',
    time: '07:45',
    id: 1,
  },
  {
    content: 'ahihi',
    time: '07:45',
    id: 1,
  },
];
