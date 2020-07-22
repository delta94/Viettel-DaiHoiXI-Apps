import { User } from '../models/user/user.model';
import { UserDetail } from '../models/user/userDetail.model';

export const userDataFake: User = {
  avatar: 'https://images.hcmcpv.org.vn//res/news/2015/10/DHX_VoThiDung.jpg',
  full_name: 'VÕ THỊ DUNG',
  position: 'Ủy viên Ban thường vụ Thành ủy, Phó Bí thư Thành ủy',
  phone: '0123456789',
  unit: 'Văn phòng thành ủy',
  group: 'ĐẢNG BỘ KHỐI DÂN - CHÍNH - ĐẢNG THÀNH PHỐ',
  team_number: 2,
  delegate_number: 24,
};

export const userDetailDataFake: UserDetail = {
  avatar: 'https://images.hcmcpv.org.vn//res/news/2015/10/DHX_VoThiDung.jpg',
  full_name: 'VÕ THỊ DUNG',
  position: 'Ủy viên Ban thường vụ Thành ủy, Phó Bí thư Thành ủy',
  phone: '0123456789',
  organ: 'Văn phòng thành ủy',
  group: 'Đảng bộ khối dân chính thành phố',
  birthDay: '02-06-1960',
  delegate_number: '32',
  nation: 'Thành Phố Hồ Chí Minh',
  sex: 'Nữ',
  hometown: 'Thành Phố Hồ Chí Minh ',
  religion: 'Không',
  preparatoryDay: '12/12',
  officialDay: '14/1/2000',
  education: '14/1/2000',
  degree: 'Cử nhân',
  note: 'cao cấp',
  specialize: 'Tiếng anh',
  politicalTheory: 'Cao cấp',
  discipline: 'Không có',
  bonus: 'Không có',
};
