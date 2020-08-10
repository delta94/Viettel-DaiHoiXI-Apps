export class SignInAccountFormData {
  userName: string | undefined;
  password: string | undefined;
}

export class SignInPhoneNumberFormData {
  phoneNumber: string | undefined;
  captcha?: string;
  enterCaptcha?: string;
}
