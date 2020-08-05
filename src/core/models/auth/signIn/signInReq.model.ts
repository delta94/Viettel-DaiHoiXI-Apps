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
