export class SignInAccountFormData {
  userName: string | undefined;
  password: string | undefined;
}

export class SignInPhoneNumberFormData {
  phone: string | undefined;
  captcha: string;
  enterCaptca: string;
}

export class Otp {
  value: string;
}
