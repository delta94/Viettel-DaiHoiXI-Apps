export class SignInReq {
  userName: string;
  password: string;
  osType?: string;
  osVersion?: string;
  deviceCode?: string;
  imei?: string;
  ipAddress?: string;
  macAddress?: string;
}

export class VerifyOTPReq {
  phoneNumber: string;
  otp: string;
  osType?: string;
  osVersion?: string;
  deviceCode?: string;
  imei?: string;
  ipAddress?: string;
  macAddress?: string;
}

export class OtpReq {
  phoneNumber: string;
}
