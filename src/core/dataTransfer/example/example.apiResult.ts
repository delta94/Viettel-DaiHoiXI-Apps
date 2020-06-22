import { ApiResult } from '../apiResult';
import { Example } from '@src/core/models/example/example.model';

export class ExampleApiResult extends ApiResult {
  data: Example;
}
