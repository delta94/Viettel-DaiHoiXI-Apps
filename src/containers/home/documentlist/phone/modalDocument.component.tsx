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
      backdropColor={'rgb(156, 156, 156)'}
      swipeDirection={['down']}
      onSwipeComplete={onClosePress}
      onBackButtonPress={onClosePress}
      backdropTransitionInTiming={1}
      backdropTransitionOutTiming={1}
      style={themedStyle.viewModal}>
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
              style={themedStyle.image}
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

export const ModalDocument = withStyles(ModalDocumentComponent, (theme: ThemeType) => ({
  viewModal: {
    alignItems: 'center',
  },
  viewBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewDoc: {
    width: pxToPercentage(300),
    height: pxToPercentage(450),
    backgroundColor: theme['color-primary-20'],
  },
  viewDocHeader: {
    flexDirection: 'row',
    height: pxToPercentage(30),
    backgroundColor: theme['color-primary-21'],
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconArrow: {
    tintColor: theme['color-primary-12'],
    alignItems: 'center',
    width: pxToPercentage(20),
    height: pxToPercentage(20),
  },
  iconArrowPrev: {
    marginRight: pxToPercentage(10),
  },
  iconArrowNext: {
    marginLeft: pxToPercentage(10),
  },
  viewDocLeft: {
    flexDirection: 'row',
    width: pxToPercentage(150),
    height: pxToPercentage(20),
    alignItems: 'center',
  },
  viewDocCenter: {
    flexDirection: 'row',
    width: pxToPercentage(60),
    height: pxToPercentage(20),
    alignItems: 'center',
  },
  viewDocRight: {
    flexDirection: 'row',
    width: pxToPercentage(85),
    height: pxToPercentage(20),
    alignItems: 'center',
  },
  iconNightMode: {
    tintColor: theme['color-primary-3'],
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    marginLeft: pxToPercentage(10),
  },
  txtNightMode: {
    color: theme['color-primary-12'],
    fontSize: pxToPercentage(12),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(5),
  },
  iconPencil: {
    tintColor: theme['color-primary-3'],
    width: pxToPercentage(20),
    height: pxToPercentage(20),
  },
  txtPencil: {
    color: theme['color-primary-12'],
    fontSize: pxToPercentage(12),
    ...textStyle.proDisplayRegular,
    marginRight: pxToPercentage(5),

  },
  iconMessage: {
    tintColor: theme['color-primary-3'],
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    marginLeft: pxToPercentage(15),
  },
  txtMessage: {
    color: theme['color-primary-12'],
    fontSize: pxToPercentage(12),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(5),
  },
  viewDocImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: pxToPercentage(210),
    height: pxToPercentage(420),
  },
}));
