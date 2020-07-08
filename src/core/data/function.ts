import { FunctionModel } from '../models/function/function.model';
import {
  CongressIcon,
  PoliticianIcon,
  GroupIcon,
  VotingIcon,
  DemocracyIcon,
  DocumentIcon,
  groupiConFill,
  delegateListIcon,
  usercheckIcon,
  sitmapIcon,
} from '@src/assets/icons';

export const functionDataFake: FunctionModel[] = [
  {
    title: 'Thông tin',
    icon: groupiConFill,
  },
  {
    title: 'Danh sách đại biểu',
    icon: delegateListIcon,
  },
  {
    title: 'Tư liệu',
    icon: DocumentIcon,
  },
  {
    title: 'Điểm danh',
    icon: usercheckIcon,
  },
  {
    title: 'Đăng ký phát biểu',
    icon: PoliticianIcon,
  },
  {
    title: 'Biểu quyết',
    icon: VotingIcon,
  },
  {
    title: 'Sơ đồ chỗ ngồi',
    icon: sitmapIcon,
  },
];
