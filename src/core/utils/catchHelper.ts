import { ApiResult } from '../dataTransfer/apiResult';
import { onClearSession } from '../store/reducer/session/actions';
import { alerts } from './alerts';
import I18n from '@src/assets/i18n';

export const catchHandle = (e: any, dispatch: any): void => {
  const { message, status_code }: ApiResult = e;

  switch (status_code) {
    case 401: {
      dispatch(onClearSession());
      alerts.alert({ message: I18n.t('common.txtSessionExpired') });

      break;
    }
    default: {
      alerts.alert({ message });
    }
  }
};
