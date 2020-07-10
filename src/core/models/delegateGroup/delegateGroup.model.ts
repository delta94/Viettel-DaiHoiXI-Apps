import { Type } from 'class-transformer';

export class DelegateContent {
    avatar: string;
    full_name: string;
    position: string;
    phone: string;
    count: string;
}

export class DelegateGroup {
    section: number;
    @Type(() => DelegateContent)
    contents: DelegateContent[];
    constructor() {
        this.contents = [];
    }
}
