import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
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
  CloseIconOutline,
} from '@src/assets/icons';
import {
  imageDocument,
} from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { themes } from '@src/core/themes';
import Pdf from 'react-native-pdf';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  isVisible: boolean;
  onClosePress: () => void;
}

export type DocumentModalProps = ThemedComponentProps & ComponentProps;

const DocumentModalComponent: React.FunctionComponent<DocumentModalProps> = (props) => {
  const onClosePress = (): void => {
    props.onClosePress();
  };

  const { themedStyle } = props;

  const sourcePdf = { uri: 'http://www.pdf995.com/samples/pdf.pdf', cache: true };

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
      <SafeAreaView />
      <View style={themedStyle.viewDocHeader}>
        <TouchableOpacity style={themedStyle.viewDocLeft}>
          {NightModeIcon(themedStyle.iconNightMode)}
          <Text
            style={themedStyle.txtNightMode}
            numberOfLines={1
            }>
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
            {'Góp ý'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={themedStyle.viewExit}
          activeOpacity={0.75}
          onPress={onClosePress}>
          {CloseIconOutline(themedStyle.iconClose)}
          <Text style={themedStyle.txtMessage}>
            {'Thoát '}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={themedStyle.container}>
        <Pdf
          source={sourcePdf}
          scale={1}
          style={themedStyle.pdf}
        />
      </View>
    </Modal>
  );
};

export const DocumentModal = withStyles(DocumentModalComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: 'red',
    flex: 1,
    margin: 0,
  },
  viewDocHeader: {
    flexDirection: 'row',
    height: pxToPercentage(50),
    backgroundColor: theme['color-primary-18'],
    alignItems: 'center',
  },
  viewDocLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewDocCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    width: pxToPercentage(76),
  },
  viewDocRight: {
    flexDirection: 'row',
    width: pxToPercentage(70),
  },
  iconNightMode: {
    tintColor: theme['color-primary-3'],
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    marginLeft: pxToPercentage(10),
  },
  txtNightMode: {
    color: theme['color-primary-12'],
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(5),
  },
  iconClose: {
    width: pxToPercentage(30),
    height: pxToPercentage(30),
    tintColor: theme['color-primary-3'],
  },
  iconPencil: {
    tintColor: theme['color-primary-3'],
    width: pxToPercentage(20),
    height: pxToPercentage(20),
  },
  txtPencil: {
    color: theme['color-primary-12'],
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
    marginRight: pxToPercentage(5),

  },
  iconMessage: {
    tintColor: theme['color-primary-3'],
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    marginLeft: pxToPercentage(8),
  },
  txtMessage: {
    color: theme['color-primary-12'],
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(5),
  },
  viewExit: {
    flexDirection: 'row',
    alignItems: 'center',
    width: pxToPercentage(80),
    marginRight: pxToPercentage(4),
  },
  pdf: {
    flex: 1,
    backgroundColor: theme['color-basic-100'],
  },
}));
