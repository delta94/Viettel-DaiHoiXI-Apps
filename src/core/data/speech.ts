import { Speech } from '../models/speech/speech.model';
import { SpeechStatusEnum } from '../utils/constants';

export const speechDataFake: Speech[] = [
  {
    full_name: 'Võ Thị Dung',
    content: 'Kết luận về thí điểm cơ chế, chính sách đặc thù phát triển thành phố Hồ Chí Minh',
    status: SpeechStatusEnum.Speaking,
  },
  {
    full_name: 'Nguyễn Văn Hiếu',
    content: 'Tờ trình về tình hình kinh tế - xã hội thành phố 06 tháng đầu năm, nhiệm vụ, giải pháp trọng tâm 6 tháng cuối năm 2019 và tiếp tục rà soát kết quả thực hiện các chỉ tiêu Nghị quyết Đại hội Đảng bộ thành phố lần thứ X trong lĩnh vực kinh tế - xã hội và 7 chương trình đột phá (kèm dự thảo Báo cáo)',
    status: SpeechStatusEnum.Accepted,
  },
  {
    full_name: 'Nguyễn Hữu Hiệp',
    content: 'Nghị quyết về thí điểm cơ chế, chính sách đặc thù phát triển thành phố Hồ Chí Minh',
    status: SpeechStatusEnum.Accepted,
  },
  {
    full_name: 'Tăng Phước Lộc',
    content: 'Tờ trình về tình hình kinh tế - xã hội thành phố 06 tháng đầu năm, nhiệm vụ, giải pháp trọng tâm 06 tháng cuối năm 2019 và tiếp tục rà soát kết quả thực hiện các chỉ tiêu Nghị quyết Đại hội Đảng bộ thành phố lần thứ X trong lĩnh vực kinh tế - xã hội và 7 chương trình đột phá (kèm dự thảo Báo cáo)',
    status: SpeechStatusEnum.Pending,
  },
  {
    full_name: 'Trần Lưu Quang',
    content: 'Nghị quyết về thí điểm cơ chế, chính sách đặc thù phát triển thành phố Hồ Chí Minh',
    status: SpeechStatusEnum.Pending,
  },
];
