import { Type } from 'class-transformer';

export class AnnoucementItem {
  id: string;
  date: string;
  title: string;
  content: string;
  attachment: String;
}

export class Annoucement {
  date: string;
  @Type(() => AnnoucementItem)
  annoucements: AnnoucementItem[];

  constructor() {
    this.annoucements = [];
  }
}
