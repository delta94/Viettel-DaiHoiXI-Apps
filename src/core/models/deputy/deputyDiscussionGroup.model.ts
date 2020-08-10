import { Type } from 'class-transformer';
import { Deputy } from './deputy.model';

export class DeputyDiscussionGroup {
  id: string;
  name: string;
  meetingRoom: string;
  @Type(() => Deputy)
  discussionGroupDeputies: Deputy[];

  constructor() {
    this.discussionGroupDeputies = [];
  }
}
