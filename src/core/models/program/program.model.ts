import { Type } from 'class-transformer';

export class ProgramContent {
  title: string;
  description: string;
  fromTime: string;
  toTime: string;
  implementer: string;
}

export class Program {
  section: number;
  @Type(() => ProgramContent)
  contents: ProgramContent[];

  constructor() {
    this.contents = [];
  }
}
