import { User } from '../models/user/user.model';
import { UserDetail } from '../models/user/userDetail.model';

export const userDataFake: User = {
  avatar: 'https://vcdn-vnexpress.vnecdn.net/2016/05/25/Vo-Thi-Dung-TPHCM-6031-1446118-2504-7878-1464171876.jpg',
  full_name: 'TĂNG PHƯỚC LỘC',
  position: 'Ủy viên Ban Thường vụ Đảng ủy cơ quan, Phó Chánh Văn phòng Thành ủy',
  phone: '0123456789',
  unit: 'Văn phòng thành ủy',
  group: 'ĐẢNG BỘ KHỐI DÂN - CHÍNH - ĐẢNG THÀNH PHỐ',
  team_number: 2,
  delegate_number: 24,
};

export const userDetailDataFake: UserDetail = {
  avatar: 'https://vcdn-vnexpress.vnecdn.net/2016/05/25/Vo-Thi-Dung-TPHCM-6031-1446118-2504-7878-1464171876.jpg',
  full_name: 'VÕ THỊ DUNG',
  position: 'Phó Bí thư Đoàn Khối Dân - Chính - Đảng TP.HCM',
  phone: '0123456789',
  organ: 'Văn phòng thành ủy',
  group: 'Đảng bộ khối dân chính thành phố',
  birthDay: '32-4-1977',
  delegate_number: '32',
  nation: 'quảng nam',
  sex: 'nam',
  hometown: 'quảng bình',
  religion: 'không',
  preparatoryDay: '12/12',
  officialDay: '14/1/2000',
  education: '14/1/2000',
  degree: 'Cử nhân',
  note: 'cao cấp',
  specialize: 'tiếng anh',
  politicalTheory: 'cao cấp',
  discipline: 'không có',
  bonus: 'không có',
};
