import { Type } from 'class-transformer';
import { Delegate } from './delegate.model';

export class DelegateList {
  group: string;
  @Type(() => Delegate)
  deputies: Delegate[];

  constructor() {
    this.deputies = [];
  }
}


export class DelegateListApi {
  success: boolean;
  @Type(() => DelegateList)
  data: DelegateList[];

  constructor() {
    this.data = [];
  }
}
