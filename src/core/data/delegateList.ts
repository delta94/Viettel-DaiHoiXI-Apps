import { DelegateList, DelegateListApi } from '../models/delegate/delegateList.model';


export const delegateListDataFake2: DelegateList[] = [
  {
    group: '1 - ĐẢNG BỘ KHỐI CHÍNH ĐÃNG',
    deputies: [
      {
        id: '01',
        fullName: 'NGUYỄN THIỆN NHÂN',
        avatar: 'https://images.hcmcpv.org.vn//res/news/2015/10/DHX_NguyenThienNhan.jpg',
        position: 'Ủy viên Bộ Chính trị, Bí thư Thành ủy',
        code: 'DB01',
        discussionGroup: 'Tổ: 1',
      },
      {
        id: '02',
        fullName: 'VÕ THỊ DUNG',
        avatar: 'https://images.hcmcpv.org.vn//res/news/2015/10/DHX_VoThiDung.jpg',
        position: 'Ủy viên Ban thường vụ Thành ủy, Phó Bí thư Thành ủy',
        code: 'DB02',
        discussionGroup: 'Tổ: 2',
      },
      {
        id: '03',
        fullName: 'TRẦN LƯU QUANG',
        avatar: 'https://images.hcmcpv.org.vn//res/news/2015/10/DHX_TranLuuQuang.jpg',
        position: 'Ủy viên Trung ương Đảng, Phó Bí thư Thường trực Thành ủy',
        code: 'DB03',
        discussionGroup: 'Tổ: 1',
      },
    ],
  },
  {
    group: '2 - ĐẢNG BỘ QUẬN 1',
    deputies: [
      {
        id: '04',
        fullName: 'HUỲNH THANH HẢI',
        avatar: 'https://images.hcmcpv.org.vn//res/news/2015/10/DHX_HuynhThanhHai.jpg',
        position: 'Phó Trưởng ban chuyên trách biên soạn lịch sử Đảng bộ TP.HCM',
        code: 'DB04',
        discussionGroup: 'Tổ: 1',
      },
      {
        id: '05',
        fullName:  'TRẦN KIM YẾN',
        avatar: 'https://data.voh.com.vn//uploads/Image/2016/05/17/151501TrankImyen.jpg',
        position: 'Ủy viên Ban thường vụ Thành ủy, Bí thư Quận ủy Quận 1',
        code: 'DB05',
        discussionGroup: 'Tổ: 2',
      },
      {
        id: '06',
        fullName:  'PHẠM XUÂN KHÁNH',
        avatar: 'https://automation.net.vn/images/stories9/dd_t11-12-20.jpg',
        position: 'Quận ủy viên, Giám đốc Trung tâm Bồi dưỡng chính trị quận 1',
        code: 'DB06',
        discussionGroup: 'Tổ: 3',
      },
    ],
  },
];

export const delegateListApiDataFake: DelegateListApi = {
  success: true,
  data: delegateListDataFake2,
};
