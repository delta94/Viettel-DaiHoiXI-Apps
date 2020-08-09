export class SignInAccountFormData {
  userName: string | undefined;
  password: string | undefined;
}

export class SignInPhoneNumberFormData {
  phone: string | undefined;
  captcha: string;
  enterCaptcha: string;
}

export class Otp {
  value: string;
}
