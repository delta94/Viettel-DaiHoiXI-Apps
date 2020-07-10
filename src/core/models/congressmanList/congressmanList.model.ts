import { Type } from 'class-transformer';
import { User } from '../user/user.model';
export class ListCongressmen {
  doanDB: string;
  @Type(() => User)
  congressmen: User[];

  constructor() {
    this.congressmen = [];
  }
}
