import { Type } from 'class-transformer';

export class Annoucements {
  id: string;
  date: string;
  title: string;
  content: string;
  attachment: String;
}

export class Annoucement {
  date: string;
  @Type(() => Annoucements)
  annoucements: Annoucements[];

  constructor() {
    this.annoucements = [];
  }
}
