export enum ExampleEnum {
  Zero = 0,
  One,
}

export const cacheTime: number = 30; // minutes

export const customerSupportPhoneNumber: string = '18008000';

export enum SemesterToggleEnum {
  SemesterOne = 1,
  SemesterTwo,
  AllYear,
}

export enum ContactToggleEnum {
  Teacher = 1,
  Student,
}

export enum ErrorCodeEnum {
  UserNotFound = 'USER_NOT_FOUND',
  UserLocked = 'USER_LOCKED',
  NotViewResultStudy = 'NOT_VIEW_RESULT_STUDY',
}

export enum MenuEnum {
  Them = 'THEM',
  HoSo = 'HO_SO',
  DiemDanh = 'DIEM_DANH',
  ViPham = 'VI_PHAM',
  ThoiKhoaBieu = 'TKB',
  BaoBai = 'BAO_BAI',
  DanhBa = 'DANH_BA',
  TinNhan = 'TIN_NHAN',
  BanTin = 'BAN_TIN',
  NghiHoc = 'NGHI_HOC',
  KhenThuongKyLuat = 'KHEN_THUONG_KY_LUAT',
  LopHoc = 'LOP_HOC',
  TruongHoc = 'TRUONG_HOC',
  PhatTrienTre = 'PHAT_TRIEN_TRE',
  HoatDongTre = 'HOAT_DONG_TRE',
  CanDo = 'CAN_DO',
  BeNgoan = 'BE_NGOAN',
  ThucDon = 'THUC_DON',
  HocTap = 'HOC_TAP',
  PhieuDiem = 'PHIEU_DIEM',
  TroChuyen = 'TRO_CHUYEN',
  ChuyenLopHoc = 'CHUYEN_LOP_HOC',
  LopHocVuiVe = 'LOP_HOC_VUI_VE',
  YKien = 'Y_KIEN',
  Khao_Sat = 'KHAO_SAT',
}

export enum RecognizeEnum {
  TouchID = 'TouchID',
  FaceID = 'FaceID',
}

export enum EvaluationEnum {
  KetQuaNamHoc = 'KET_QUA_NAM_HOC',
  KetQuaHocTap = 'KET_QUA_HOC_TAP',
  HocLuc = 'HOC_LUC',
  HanhKiem = 'HANH_KIEM',
  TbCacMon = 'TB_CAC_MON',
  KhenThuong = 'KHEN_THUONG',
  DanhHieu = 'DANH_HIEU',
  XepHang = 'XEP_HANG',
  BuoiNghi = 'BUOI_NGHI',
  NhanXet = 'NHAN_XET',
  NhanXetGVHD = 'NHAN_XET_GVCN',
  ThuocDien = 'THUOC_DIEN',
  XepLoaiNangLuc = 'XEP_LOAI_NANG_LUC',
  XepLoaiPhamChat = 'XEP_LOAI_PHAM_CHAT',
  BieuHienNoiBat = 'BIEU_HIEN_NOI_BAT',
  NoiDungChuaHoanThanhChuongTrinh = 'NOI_DUNG_CHUA_HOAN_THANH_CHUONG_TRINH',
}

export enum SectionEnum {
  BuoiSang = 1,
  BuoiChieu,
  BuoiToi,
}

export enum SectionGroupEnum {
  BuoiSang = 1,
  BuoiChieu,
  BuoiToi,
  BuoiSangChieu,
  BuoiSangToi,
  BuoiChieuToi,
  BuoiSangChieuToi,
}

export enum NotPassEnum {
  ChuaHoanThanh = 'Chưa hoàn thành',
  CanCoGang = 'Cần cố gắng',
  ChuaDat = 'CĐ',
  ChuaDat2 = 'Chưa Đạt',
}

export enum LanguageEnum {
  Vietnamese = 'vi',
  English = 'en',
}

export enum GetStudyStatusEnum {
  Success,
  Loading,
  NotViewResult,
}

export enum GetContactsStatusEnum {
  Success,
  Loading,
  NotViewTeacher,
  NotAssignTeacher,
  NotDeclearedPupil,
}

export enum GetProfileStatusEnum {
  Success,
  Loading,
}

export enum GetMessagesStatusEnum {
  Success,
  Loading,
}

export enum GetNewsFeedStatusEnum {
  Success,
  Loading,
}

export enum GetAttendanceStatusEnum {
  Success,
  Loading,
}

export enum GetSchedulesStatusEnum {
  Success,
  Loading,
}

export enum GetScheduleDetailsStatusEnum {
  Success,
  Loading,
}

export enum GetSchoolAbsenceStatusEnum {
  Success,
  Loading,
}

export enum ContactTypeEnum {
  Teacher = 'teacher',
  Student = 'student',
}

export const newsIconText = {
  1: 'A',
  2: 'S',
  3: 'P',
  4: 'T',
  5: 'G',
};

export enum LoadDataStatusEnum {
  LoadNew = 1,
  LoadMore,
}

export enum AttendanceTypeEnum {
  Present = 1,
  HasPermit,
  NonePermit,
}

export enum AbsenceStatusEnum {
  All = 0,
  Approved,
  Waiting,
  Rejected,
}

export enum AbsenceSenderTypeEnum {
  Father = 1,
  Mother,
  Sponsor,
  Pupil,
}
