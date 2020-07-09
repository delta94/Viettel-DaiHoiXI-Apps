import { Type } from 'class-transformer';

export class ProgramContent {
  title: string;
  description: string;
  fromTime: string;
  toTime: string;
  implementer: string;
}

export class Program {
  section: string;
  @Type(() => ProgramContent)
  contents: ProgramContent[];

  constructor() {
    this.contents = [];
  }
}
