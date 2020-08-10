import { ApiResult } from '../../apiResult';
import { Annoucement as AnnoucementModel } from '@src/core/models/annoucement/annoucement.model';

export class GetAnnoucementListApiResult extends ApiResult {
  data: AnnoucementModel[];
}
