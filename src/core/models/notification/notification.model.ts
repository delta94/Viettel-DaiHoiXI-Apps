import { Type } from 'class-transformer';

export class NotificationItem {
  id: string;
  date: string;
  title: string;
  content: string;
  attachment: String[];
}
export class Notification {
  date: string;
  @Type(() => NotificationItem)
  notifications: NotificationItem[];

  constructor() {
    this.notifications = [];
  }
}
