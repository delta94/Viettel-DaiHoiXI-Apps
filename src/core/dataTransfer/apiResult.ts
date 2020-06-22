export class ApiResult {
  success: boolean;
  status_code?: string | number;
  error_code?: string;
  message?: string;
  error_message?: string;
  data?: any;
  token?: string;
}
