import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  CloseIconOutline,
  ArrowPrevIcon,
  ArrowNextIcon,
  NightModeIcon,
  MessageIcon,
  PencilIcon,
} from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import Pdf from 'react-native-pdf';
import { getStatusBarHeight } from 'react-native-status-bar-height';

interface ComponentProps {
  // Add PDF here Cuong
  isVisible: boolean;
  onClosePress: () => void;
}

export type DocumentModalTabletProps = ThemedComponentProps & ComponentProps;

const DocumentModalTabletComponent: React.FunctionComponent<DocumentModalTabletProps> = (props) => {
  const onClosePress = (): void => {
    props.onClosePress();
  };

  const sourcePdf = { uri: 'http://www.pdf995.com/samples/pdf.pdf', cache: true };

  const { themedStyle } = props;

  return (
    <Modal
      isVisible={props.isVisible}
      animationIn='fadeIn'
      animationOut='fadeOut'
      onBackdropPress={onClosePress}
      backdropOpacity={0.5}
      onSwipeComplete={onClosePress}
      onBackButtonPress={onClosePress}
      backdropTransitionInTiming={1}
      backdropTransitionOutTiming={1}
      style={themedStyle.viewModal}>
      <TouchableOpacity
        activeOpacity={0.75}
        style={themedStyle.bntClose}
        onPress={onClosePress}>
        {CloseIconOutline(themedStyle.iconClose)}
      </TouchableOpacity>
      <View style={themedStyle.viewBox}>
        <TouchableOpacity
          activeOpacity={0.75}>
          {ArrowPrevIcon([
            themedStyle.iconArrow,
            themedStyle.iconArrowPrev,
          ])}
        </TouchableOpacity>
        <View style={themedStyle.viewDoc}>
          <View style={themedStyle.viewDocHeader}>
            <TouchableOpacity style={themedStyle.viewDocLeft}>
              {NightModeIcon(themedStyle.iconNightMode)}
              <Text style={themedStyle.txtNightMode}>
                {'Chuyển chế độ'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={themedStyle.viewDocCenter}>
              {PencilIcon(themedStyle.iconPencil)}
              <Text style={themedStyle.txtPencil}>
                {'Ghi chú'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={themedStyle.viewDocRight}>
              {MessageIcon(themedStyle.iconMessage)}
              <Text style={themedStyle.txtMessage}>
                {'Góp ý '}
              </Text>
            </TouchableOpacity>
          </View>
          <Pdf
            source={sourcePdf}
            scale={1}
            style={themedStyle.pdf}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.75}>
          {ArrowNextIcon([
            themedStyle.iconArrow,
            themedStyle.iconArrowNext])}
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export const DocumentModalTablet = withStyles(DocumentModalTabletComponent, (theme: ThemeType) => ({
  viewModal: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: getStatusBarHeight() / 2,
  },
  viewBox: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewDoc: {
    width: pxToPercentage(1556),
    height: pxToPercentage(1148),
    backgroundColor: theme['color-primary-20'],
  },
  viewDocHeader: {
    flexDirection: 'row',
    height: pxToPercentage(100),
    backgroundColor: theme['color-primary-24'],
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconClose: {
    tintColor: theme['color-primary-3'],
    width: pxToPercentage(172),
    height: pxToPercentage(192),
  },
  iconArrow: {
    tintColor: theme['color-primary-12'],
    alignItems: 'center',
    width: pxToPercentage(100),
    height: pxToPercentage(93),
  },
  iconArrowPrev: {
    marginRight: pxToPercentage(60),
  },
  iconArrowNext: {
    marginLeft: pxToPercentage(60),
  },
  bntClose: {
    position: 'absolute',
    top: pxToPercentage(-100),
    right: 0,
  },
  viewDocLeft: {
    flexDirection: 'row',
    width: pxToPercentage(298),
    height: pxToPercentage(60),
    alignItems: 'center',
  },
  viewDocCenter: {
    flexDirection: 'row',
    width: pxToPercentage(187),
    height: pxToPercentage(60),
    alignItems: 'center',
  },
  viewDocRight: {
    flexDirection: 'row',
    width: pxToPercentage(250),
    height: pxToPercentage(60),
    alignItems: 'center',
  },
  iconNightMode: {
    tintColor: theme['color-primary-3'],
    width: pxToPercentage(50),
    height: pxToPercentage(50),
    marginLeft: pxToPercentage(40),
  },
  txtNightMode: {
    color: theme['color-primary-12'],
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(15),
  },
  iconPencil: {
    tintColor: theme['color-primary-3'],
    width: pxToPercentage(50),
    height: pxToPercentage(50),
    marginLeft: pxToPercentage(40),
  },
  txtPencil: {
    color: theme['color-primary-12'],
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(21),
  },
  iconMessage: {
    tintColor: theme['color-primary-3'],
    width: pxToPercentage(52),
    height: pxToPercentage(52),
    marginLeft: pxToPercentage(40),
  },
  txtMessage: {
    color: theme['color-primary-12'],
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(18),
  },
  viewDocImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgDocument: {
    width: pxToPercentage(710),
    height: pxToPercentage(1035),
  },
  pdf: {
    flex: 1,
    backgroundColor: theme['color-basic-100'],
  },
}));
