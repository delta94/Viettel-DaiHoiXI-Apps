import React from 'react';
import {
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { ThemedComponentProps } from '@kitten/theme';
import { CloseIconOutline } from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import { isTablet } from 'react-native-device-info';
import { themes } from '@src/core/themes';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Modal from 'react-native-modal';
import Pdf from 'react-native-pdf';

export interface ComponentProps {
  isVisible: boolean;
  onClosePress: () => void;
}

export type TopNavigationBarProps = ThemedComponentProps & ComponentProps;

const TopNavigationBarComponent: React.FunctionComponent<TopNavigationBarProps> = (props) => {
  const { themedStyle } = props;

  const onClosePress = () => {
    props.onClosePress();
  };

  const sourcePdf = { uri: 'http://dwrm.gov.vn/uploads/download/files/02-final-thong-cao-bao-chi.pdf', cache: true };

  return (
    <Modal
      backdropColor={'black'}
      isVisible={props.isVisible}
      animationIn='fadeIn'
      animationOut='fadeOut'
      onBackdropPress={onClosePress}
      backdropOpacity={0.9}
      onSwipeComplete={onClosePress}
      onBackButtonPress={onClosePress}
      backdropTransitionInTiming={1}
      backdropTransitionOutTiming={1}
      style={themedStyle.container}>
      <StatusBar
        backgroundColor={themes['App Theme']['color-basic-100']}
        barStyle='dark-content'
      />
      <Pdf
        source={sourcePdf}
        scale={1}
        style={themedStyle.pdf}>
        <TouchableOpacity
          activeOpacity={0.75}
          style={themedStyle.btnClose}
          onPress={() => onClosePress()}>
          {CloseIconOutline(themedStyle.iconClose)}
        </TouchableOpacity>
      </Pdf>
    </Modal>
  );
};

export const HelpModel = withStyles(TopNavigationBarComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: theme['color-basic-100'],
    paddingTop: getStatusBarHeight(false),
  },
  btnClose: {
    position: 'absolute',
    right: isTablet() ? pxToPercentage(30) : 0,
  },
  iconClose: {
    width: isTablet() ? pxToPercentage(80) : pxToPercentage(50),
    height: isTablet() ? pxToPercentage(80) : pxToPercentage(50),
  },
  pdf: {
    flex: 1,
    backgroundColor: theme['color-basic-100'],
  },
  safeAreaView: {
    backgroundColor: theme['color-basic-100'],
  },
}));
