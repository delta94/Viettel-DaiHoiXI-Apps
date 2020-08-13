export class SignInReq {
  userName: string;
  password: string;
  osType?: number;
  osVersion?: string;
  deviceCode?: string;
  imei?: string;
  ipAddress?: string;
  macAddress?: string;
}

export class VerifyOTPReq {
  phoneNumber: string;
  otp: string;
  osType?: number;
  osVersion?: string;
  deviceCode?: string;
  imei?: string;
  ipAddress?: string;
  macAddress?: string;
}

export class GetOTPReq {
  phoneNumber: string;
}
