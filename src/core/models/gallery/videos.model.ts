import { Type } from 'class-transformer';

export class VideosContent {
  name: string;
  url: string;
  id: number;
}

export class Videos {
  topic: string;
  @Type(() => VideosContent)
  videos: VideosContent[];

  constructor() {
    this.videos = [];
  }
}
