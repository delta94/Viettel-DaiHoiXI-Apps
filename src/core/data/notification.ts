import { Notification } from '../models/notification/notification.model';
import { PressRelease } from '../models/pressRelease/pressRelease.model';
import { Programmation } from '../models/programmation/programe.model';

export const meetingNotificationDataFake: Notification[] = [
  {
    title: 'Thông báo phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp',
    description: 'Nội dung: Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '15:00 - 17/07/2020',
    read: false,
  },
  {
    title: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV',
    description: 'Nội dung: Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '10:00 - 16/07/2020',
    read: true,
  },
  {
    title: 'Ban Chấp hành Trung ương Đảng đã xem xét, thảo luận, cho ý kiến về nguyên tắc và các căn cứ phân bố đại biểu và dự kiến số lượng đại biểu tham dự Đại hội Đảng lần thứ XIII, thực hiện nguyên tắc phân bổ.',
    description: 'Nội dung: Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '08:00 - 15/07/2020',
    read: true,
  },
];

export const notificationDataFake: Notification[] = [
  {
    title: 'Ban Chấp hành Trung ương Đảng đã xem xét, thảo luận, cho ý kiến về nguyên tắc và các căn cứ phân bố đại biểu và dự kiến số lượng đại biểu tham dự Đại hội Đảng lần thứ XIII, thực hiện nguyên tắc phân bổ.',
    description: 'Nội dung: Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '08:00 - 15/07/2020',
    read: false,
  },
  {
    title: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV',
    description: 'Nội dung: Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '10:00 - 16/07/2020',
    read: true,
  },
  {
    title: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV',
    description: 'Nội dung: Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '10:00 - 16/07/2020',
    read: true,
  },
];

export const pressReleaseDataFake: PressRelease[] = [
  {
    title: 'Thông báo phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp',
    description: 'Nội dung: Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '15:00 - 17/07/2020',
    read: false,
    file: 'Thong-Bao-Ke-Hoach.xlsx',
  },
  {
    title: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV',
    description: 'Nội dung: Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '10:00 - 16/07/2020',
    read: true,
    file: 'Thong-Bao-Ke-Hoach.xlsx',
  },
  {
    title: 'Ban Chấp hành Trung ương Đảng đã xem xét, thảo luận, cho ý kiến về nguyên tắc và các căn cứ phân bố đại biểu và dự kiến số lượng đại biểu tham dự Đại hội Đảng lần thứ XIII, thực hiện nguyên tắc phân bổ.',
    description: 'Nội dung: Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '08:00 - 15/07/2020',
    read: true,
    file: 'Thong-Bao-Ke-Hoach.xlsx',
  },
];

export const programmationDataFake: Programmation[] = [
  {
    implementer : 'Đ/c Võ Thị Dung, Phó Bí Thư thành ủy',
    title: 'Tuyên bố bắt đầu hội nghị',
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    fromTime:  '7:00',
    toTime : '7:30',
  },
  {
    implementer : 'Đ/c Võ Thị Dung, Phó Bí Thư thành ủy',
    title: 'Tuyên bố lý do, giới thiệu ĐB và thông qua chương trình',
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    fromTime:  '8:00',
    toTime : '8:30',
  },
  {
    implementer : 'Đ/c Võ Thị Dung, Phó Bí Thư thành ủy',
    title: 'Trình bày tờ ủy trình của ban thường vụ thành ủy',
    description: 'Nội dung:3 Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    fromTime:  '9:00',
    toTime : '9:30',
  },
  {
    implementer : 'Đ/c Võ Thị Dung, Phó Bí Thư thành ủy',
    title: 'Trình bày tờ ủy trình của ban thường vụ thành ủy',
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    fromTime:  '10:00',
    toTime : '10:30',
  },
  {
    implementer : 'Đ/c Võ Thị Dung, Phó Bí Thư thành ủy',
    title: 'Trình bày tờ ủy trình của ban thường vụ thành ủy',
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    fromTime:  '10:00',
    toTime : '10:30',
  },
];
export const programmationDataFake2: Programmation[] = [
  {
    implementer : 'Đ/c Võ Thị Dung, Phó Bí Thư thành ủy',
    title: 'Tuyên bố bắt đầu hội nghị',
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    fromTime:  '13:00',
    toTime : '13:30',
  },
  {
    implementer : 'Đ/c Võ Thị Dung, Phó Bí Thư thành ủy',
    title: 'Tuyên bố lý do, giới thiệu ĐB và thông qua chương trình',
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    fromTime:  '13:30',
    toTime : '14:30',
  },
  {
    implementer : 'Đ/c Võ Thị Dung, Phó Bí Thư thành ủy',
    title: 'Trình bày tờ ủy trình của ban thường vụ thành ủy',
    description: 'Nội dung:3 Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    fromTime:  '14:00',
    toTime : '14:30',
  },
  {
    implementer : 'Đ/c Võ Thị Dung, Phó Bí Thư thành ủy',
    title: 'Trình bày tờ ủy trình của ban thường vụ thành ủy',
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    fromTime:  '14:30',
    toTime : '15:00',
  },
  {
    implementer : 'Đ/c Võ Thị Dung, Phó Bí Thư thành ủy',
    title: 'Trình bày tờ ủy trình của ban thường vụ thành ủy',
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    fromTime:  '14:30',
    toTime : '15:00',
  },
];
