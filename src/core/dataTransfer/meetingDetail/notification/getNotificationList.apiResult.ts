import { ApiResult } from '../../apiResult';
import { Notification as NotificationModel } from '@src/core/models/notification/notification.model';

export class GetNotificationListApiResult extends ApiResult {
  data: NotificationModel[];
}
