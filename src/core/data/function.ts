import { FunctionModel } from '../models/function/function.model';
import {
  InformationIconOther,
  DelegateListIconOther,
  DocumentIconOther,
  AssetsIconOther,
  SeatMapIconOther,
  PersonIconOther,
  SignUpToSpeakIconOther,
  PeopleIconOther,
} from '@src/assets/icons';
import { FunctionEnum } from '../utils/constants';

export const functionDataFake: FunctionModel[] = [
  {
    title: 'Thông tin',
    icon: InformationIconOther,
    type: FunctionEnum.ThongTin,
  },
  {
    title: 'Danh sách đại biểu',
    icon: DelegateListIconOther,
    type: FunctionEnum.DanhSachDaiBieu,
  },
  {
    title: 'Tài liệu',
    icon: DocumentIconOther,
    type: FunctionEnum.TaiLieu,
  },
  {
    title: 'Phim ảnh, hình ảnh',
    icon: AssetsIconOther,
    type: FunctionEnum.PhimAnhHinhAnh,
  },
  {
    title: 'Sơ đồ chỗ ngồi',
    icon: SeatMapIconOther,
    type: FunctionEnum.SoDoChoNgoi,
  },
  {
    title: 'Điểm danh',
    icon: PersonIconOther,
    type: FunctionEnum.DiemDanh,
  },
  {
    title: 'Đăng ký phát biểu',
    icon: SignUpToSpeakIconOther,
    type: FunctionEnum.DangKyPhatBieu,
  },
  {
    title: 'Tổ thảo luận',
    icon: PeopleIconOther,
    type: FunctionEnum.ToThaoLuan,
  },
];
