import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SigInQRCode } from './sigInQRCode.component';
import { Dispatch } from 'redux';
import { onThunkSignInReq } from '../signIn/store/thunk';
import { useDispatch } from 'react-redux';
import { QrCode } from '@src/core/models/qrCode/qrCode.model';

export const SignInQRcodeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'SigInQRCodeContainer';
  const dispatch: Dispatch<any> = useDispatch();

  const onQRCodeScanSucces = (qrCodeValue: QrCode): void => {
    dispatch(onThunkSignInReq(JSON.parse(qrCodeValue.data)));
  };

  return (
    <SigInQRCode
      onQRCodeScanSucces={onQRCodeScanSucces}
    />
  );
};
