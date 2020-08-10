import { Type } from 'class-transformer';

export class Notifications {
  id: string;
  date: string;
  title: string;
  content: string;
  attachment: String[];
}
export class Notification {
  date: string;
  @Type(() => Notifications)
  notifications: Notifications[];

  constructor() {
    this.notifications = [];
  }
}
