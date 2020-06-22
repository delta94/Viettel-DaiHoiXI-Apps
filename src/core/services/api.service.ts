import axios, { Method } from 'axios';
import {
  SERVER_ADDRESS,
  API_URL,
} from '../../../config';
import { store } from '../store';
import I18n from '@src/assets/i18n';

interface RequestHeader {
  'Accept': string;
  'Content-Type': string;
  'Authorization'?: string;
  'Accept-Language'?: string;
}

export default class ApiService {
  protected apiGet<T>(url: string, params: object = null, hasToken: boolean = false): Promise<T> {
    return this.apiRun<T>('get', url, null, params, hasToken);
  }

  protected apiPost<T>(url: string, body: any = null, params: object = {}, hasToken: boolean = false): Promise<T> {
    return this.apiRun<T>('post', url, body, params, hasToken);
  }

  protected apiPut<T>(url: string, body: any = null, params: object = {}, hasToken: boolean = false): Promise<T> {
    return this.apiRun<T>('put', url, body, params, hasToken);
  }

  protected apiDelete<T>(url: string, params: object = {}, hasToken: boolean = false): Promise<T> {
    return this.apiRun<T>('delete', url, null, params, hasToken);
  }

  private apiRun<T>(
    method: Method,
    url: string,
    body: any = null,
    params: object = {},
    hasToken: boolean = false,
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      axios({
        url,
        method,
        baseURL: `${SERVER_ADDRESS}${API_URL}`,
        params,
        data: body,
        headers: this.appendHeaders(hasToken),
        timeout: 30000,
      })
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          // tslint:disable-next-line:no-console
          __DEV__ && console.log(error);

          const errorData = !error.response
            ? { message: I18n.t('layout.networkDisconnect') }
            : error.response.data;

          const statusCode = error.response && error.response.status
            ? error.response.status
            : undefined;

          reject({
            ...errorData,
            status_code: statusCode,
          });
        });
    });
  }

  private appendHeaders(hasToken: boolean = false): RequestHeader {
    const headers: RequestHeader = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': store.getState().setting.languageKey,
    };

    if (hasToken) {
      const sessionReducer = store.getState().session;
      headers.Authorization = `Bearer ${sessionReducer.token}`;
    }

    return headers;
  }
}
