import { Notification } from '../models/notification/notification.model';
import { Annoucement } from '../models/annoucement/annoucement.model';

export const notificationDataFake: Notification[] = [
  {
    title: 'Ban Chấp hành Trung ương Đảng đã xem xét, thảo luận, cho ý kiến về nguyên tắc và các căn cứ phân bố đại biểu và dự kiến số lượng đại biểu tham dự Đại hội Đảng lần thứ XIII, thực hiện nguyên tắc phân bổ.',
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '08:00 - 15/07/2020',
    read: false,
  },
  {
    title: 'Quốc hội họp phiên toàn thể tại Hội trường. Dưới sự điều hành của Phó Chủ tịch Quốc hội Uông Chu Lưu, Quốc hội đã tiến hành biểu quyết thông qua các nội dung:',
    description: 'Quốc hội họp phiên toàn thể tại hội trường để biểu quyết thông qua Nghị quyết về một số cơ chế, chính sách tài chính - ngân sách đặc thù đối với Thủ đô Hà Nội; Nghị quyết về giảm thuế thu nhập doanh nghiệp phải nộp năm 2020 đối với doanh nghiệp, hợp tác xã, đơn vị sự nghiệp và tổ chức khác; Nghị quyết về việc điều chỉnh chủ trương đầu tư Dự án xây dựng một số đoạn đường bộ cao tốc trên tuyến Bắc - Nam phía Đông giai đoạn 2017-2020; Nghị quyết về việc thành lập Hội đồng bầu cử quốc gia. Sau đó, Quốc hội thảo luận ở hội trường về dự án Luật Biên phòng Việt Nam.',
    date: '10:00 - 16/07/2020',
    read: true,
  },
  {
    title: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV',
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '10:00 - 16/07/2020',
    read: true,
  },
];

export const pressReleaseDataFake: Annoucement[] = [
  {
    title: 'Thông báo phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp',
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '15:00 - 17/07/2020',
    read: false,
    file: 'Thong-Bao-Ke-Hoach.xlsx',
  },
  {
    title: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV',
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '10:00 - 16/07/2020',
    read: true,
    file: 'Thong-Bao-Ke-Hoach.xlsx',
  },
  {
    title: 'Ban Chấp hành Trung ương Đảng đã xem xét, thảo luận, cho ý kiến về nguyên tắc và các căn cứ phân bố đại biểu và dự kiến số lượng đại biểu tham dự Đại hội Đảng lần thứ XIII, thực hiện nguyên tắc phân bổ.',
    description: 'Ban Chấp hành Trung ương Đảng thảo luận, cho ý kiến phân tích, bổ sung, làm rõ, tạo sự thống nhất cao về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026. Trong đó, tập trung phânt tích mục tiêu, yêu cầu, quan điểm chỉ đạo công tác bầu cử; việc thành lập các tổ chức phụ trách bầu cử, tiêu chuẩn đại biểu Quốc hội, đại biểu Hội đồng nhân dân các cấp nói chung và đại biểu chuyên trách nói riêng; số lượng, cơ cấu, độ tuổi của đại biểu Quốc hội, đại biểu Hội đồng nhân dân, nhất là số lượng, cơ cấu đại biểu chuyên trách, đại biểu nữ, đại biểu người dân tộc thiểu số, đại biểu đại diện cho các thành phần, giai tầng trong xã hội; đơn vị bầu cử và số dư người ứng cử ở ác đơn vị bầu cử, đề cử; việc tuyên truyền, vận động bầu cử và giải quyết khiếu nại, tố cáo; việc tổ chức bầu đại biểu Hội đồng nhân dân ở những nơi mà ở cấp dưới không có tổ chức Hộ đồng nhân dân phường; ngày bầu cử dự kiến... và những vấn đề cốt yếu của Đề án về phương hướng bầu cử đại biểu Quốc hội khoá XV và đại biểu Hội đồng nhân dân các cấp nhiệm kỳ 2021 - 2026',
    date: '08:00 - 15/07/2020',
    read: true,
    file: 'Thong-Bao-Ke-Hoach.xlsx',
  },
];
