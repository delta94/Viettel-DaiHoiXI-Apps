import { Type } from 'class-transformer';

export class DelegateContent {
    avatar: string;
    full_name: string;
    position: string;
    phone: string;
    count: string;
    constructor() {
        this.avatar = '';
        this.full_name = '';
        this.position = '';
        this.phone = '';
        this.count = '';
    }
}

export class DelegateGroup {
    section: number;
    @Type(() => DelegateContent)
    contents: DelegateContent[];
    constructor() {
        this.section = 0;
        this.contents = [];
    }
}
