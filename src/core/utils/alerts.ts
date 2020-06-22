/*
  Alerts.confirm({
    title: 'Title',
    message: 'Message',
    onResult(result) {
      console.log(result);
    },
  });
*/
import { Alert } from 'react-native';
import I18n from '@src/assets/i18n';

export interface AlertParams {
  title?: string;
  message: string;
  cancel?: string;
  accept?: string;
  notCancelable?: boolean;
  onResult?: (result?: boolean) => void;
}

const confirm = (params: AlertParams) => {
  Alert.alert(
    params.title,
    params.message,
    [
      {
        text: params.cancel || I18n.t('common.alert.cancel'),
        onPress: () => params.onResult ? params.onResult(false) : {},
        style: 'cancel',
      },
      {
        text: params.accept || I18n.t('common.alert.ok'),
        onPress: () => params.onResult ? params.onResult(true) : {},
      },
    ],
    {
      cancelable: false,
    },
  );
};

const alert = (params: AlertParams) => {
  Alert.alert(
    params.title || I18n.t('common.txtAlertTitle'),
    params.message,
    [
      {
        text: params.accept || I18n.t('common.btnClose'),
        onPress: () => params.onResult ? params.onResult() : {},
      },
    ],
    {
      cancelable: params.notCancelable ? false : true,
    },
  );
};

export const alerts = {
  confirm,
  alert,
};
