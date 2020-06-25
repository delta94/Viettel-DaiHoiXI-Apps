import { FunctionModel } from '../models/function/function.model';
import {
  CongressIcon,
  PoliticianIcon,
  GroupIcon,
  VotingIcon,
  DemocracyIcon,
  DocumentIcon,
  SupportIcon,
} from '@src/assets/icons';

export const functionDataFake: FunctionModel[] = [
  {
    title: 'Xem thông tin đại hội, hội nghị',
    icon: CongressIcon,
  },
  {
    title: 'Nhân sự',
    icon: GroupIcon,
  },
  {
    title: 'Tư liệu',
    icon: DocumentIcon,
  },
  {
    title: 'Điểm danh',
    icon: DemocracyIcon,
  },
  {
    title: 'Phát biểu',
    icon: PoliticianIcon,
  },
  {
    title: 'Biểu quyết',
    icon: VotingIcon,
  },
  {
    title: 'Hỗ trợ',
    icon: SupportIcon,
  },
];
