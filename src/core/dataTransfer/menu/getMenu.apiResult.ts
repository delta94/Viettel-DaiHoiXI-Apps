import { ApiResult } from '../apiResult';
import { Menu } from '@src/core/models/menu/menu.model';

export class GetMenuApiResult extends ApiResult {
  data: Menu[];
}
