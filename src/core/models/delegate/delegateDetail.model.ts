import { Type } from 'class-transformer';

export class DelegateDetail {
  key: string;
  value: string;
  type: number;
}

export class DelegateDetailApi {
  success: boolean;
  @Type(() => DelegateDetail)
  data: DelegateDetail[];

  constructor() {
    this.data = [];
  }
}
