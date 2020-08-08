import ApiService from './api.service';
import { SignInApiResult } from '../dataTransfer/auth/signIn.apiResult';
import {
  SignInReq,
  GetOTPReq,
  VerifyOTPReq,
} from '../models/auth/signIn/signInReq.model';

export default class AuthService extends ApiService {
  public signIn(data: SignInReq) {
    return this.apiPost<SignInApiResult>('/users/login', data, null, false);
  }

  public getOTP(data: GetOTPReq) {
    return this.apiPost<SignInApiResult>('/users/login/otp', data, null, false);
  }

  public verifyOTP(data: VerifyOTPReq) {
    return this.apiPost<SignInApiResult>('/users/login/verify-otp', data, null, false);
  }
}
