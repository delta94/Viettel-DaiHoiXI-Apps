import { ApiResult } from '../../apiResult';
import { Program as  ProgramModel} from '@src/core/models/program/program.model';

export class GetProgramListApiResult extends ApiResult {
  data: ProgramModel[];
}
