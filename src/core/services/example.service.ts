import ApiService from './api.service';
import { ExampleApiResult } from '../dataTransfer/example/example.apiResult';

export default class ExampleService extends ApiService {
  public getExample() {
    return this.apiGet<ExampleApiResult>(`/example`, null, true);
  }
}
