import { Type } from 'class-transformer';

export class Detail {
  id: string;
  startHour: string;
  endHour: string;
  content: string;
  implementer: string;
}

export class ProgramSection {
  type: string;
  @Type(() => Detail)
  details: Detail[];
}

export class Program {
  date: string;
  programs: ProgramSection[];
}
