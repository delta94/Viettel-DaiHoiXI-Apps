import { Type } from 'class-transformer';
import { User } from '../user/user.model';

export class DelegateList {
  group: string;
  @Type(() => User)
  delegates: User[];

  constructor() {
    this.delegates = [];
  }
}
