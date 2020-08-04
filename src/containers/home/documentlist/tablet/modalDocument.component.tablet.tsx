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
import {
  imageDocument,
} from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';

interface ComponentProps {
  // Add PDF here Cuong
  isVisible: boolean;
  onClosePress: () => void;
}

export type ModalDocumentProps = ThemedComponentProps & ComponentProps;

const ModalDocumentComponent: React.FunctionComponent<ModalDocumentProps> = (props) => {
  const onClosePress = (): void => {
    props.onClosePress();
  };

  const { themedStyle } = props;

  return (
    <Modal
      isVisible={props.isVisible}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      onBackdropPress={onClosePress}
      backdropColor={'rgba(0, 0, 0, 0.6)'}
      swipeDirection={['down']}
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
          <View style={themedStyle.viewDocImage}>
            <Image
              style={themedStyle.imgDocument}
              source={imageDocument.imageSource}>
            </Image>
          </View>
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

export const ModalTabletDocument = withStyles(ModalDocumentComponent, (theme: ThemeType) => ({
  viewModal: {
    alignItems: 'center',
  },
  viewBox: {
    alignItems: 'center',
    flexDirection: 'row',
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
}));
