import ApiService from './api.service';
import { SignInApiResult } from '../dataTransfer/auth/signIn.apiResult';
import { SignInReq } from '../models/auth/signIn/signInReq.model';

export default class AuthService extends ApiService {
  public signIn(data: SignInReq) {
    return this.apiPost<SignInApiResult>('/users/login', data, null, false);
  }
}
