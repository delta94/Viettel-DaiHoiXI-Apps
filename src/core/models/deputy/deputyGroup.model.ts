import { Type } from 'class-transformer';
import { Deputy } from './deputy.model';

export class DeputyGroup {
  group: string;
  @Type(() => Deputy)
  deputies: Deputy[];

  constructor() {
    this.deputies = [];
  }
}
