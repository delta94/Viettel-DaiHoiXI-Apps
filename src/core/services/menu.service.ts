import ApiService from './api.service';
import { GetMenuApiResult } from '../dataTransfer/menu/getMenu.apiResult';

export default class MenuService extends ApiService {
  public getMenu(meetingId: string, userId: string) {
    return this.apiGet<GetMenuApiResult>(`/meetings/${meetingId}/menu/${userId}`, null, true);
  }
}
