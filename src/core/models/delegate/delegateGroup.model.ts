import { Type } from 'class-transformer';
import { User } from '../user/user.model';

export class DelegateGroup {
  @Type(() => User)
  delegates: User[];

  constructor() {
    this.delegates = [];
  }
}
