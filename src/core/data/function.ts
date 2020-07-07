import { FunctionModel } from '../models/function/function.model';
import {
  RegisterIcon,
  HandIcon,
  DocumentIcon2,
  GroupIconFill,
  DelegateListIcon,
  SitmapIcon,
  UserCheckIcon,
} from '@src/assets/icons';

export const functionDataFake: FunctionModel[] = [
  {
    title: 'Thông tin',
    icon: GroupIconFill,
  },
  {
    title: 'Danh sách đại biểu',
    icon: DelegateListIcon,
  },
  {
    title: 'Tư liệu',
    icon: DocumentIcon2,
  },
  {
    title: 'Điểm danh',
    icon: UserCheckIcon,
  },
  {
    title: 'Đăng ký phát biểu',
    icon: RegisterIcon,
  },
  {
    title: 'Biểu quyết',
    icon: HandIcon,
  },
  {
    title: 'Sơ đồ chỗ ngồi',
    icon: SitmapIcon,
  },
];
