import React, { useState } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { ScanQRCode } from './scanQRCode.component';

export const ScanQRCodeContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'AccountContainer';
  return (
    <ScanQRCode/>
  );
};
