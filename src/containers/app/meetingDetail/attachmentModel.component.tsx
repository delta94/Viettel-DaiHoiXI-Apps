import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import Modal from 'react-native-modal';
import { CloseIconOutline } from '@src/assets/icons';
import { PhotoGallery as PhotoGalleryModel } from '@src/core/models/photoGallery/photoGallery.model';
import Pdf from 'react-native-pdf';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  example?: number;
  isVisible: boolean;
  onClosePress: () => void;
}

export type AttachmentModalProps = ThemedComponentProps & ComponentProps;

const AttachmentModalComponent: React.FunctionComponent<AttachmentModalProps> = (props) => {

  const onClosePress = (): void => {
    props.onClosePress();
  };

  const { themedStyle } = props;

  const source = { uri: 'http://dwrm.gov.vn/uploads/download/files/02-final-thong-cao-bao-chi.pdf', cache: true };

  return (
    <Modal
      isVisible={props.isVisible}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      onBackdropPress={onClosePress}
      backdropOpacity={0.5}
      onSwipeComplete={onClosePress}
      onBackButtonPress={onClosePress}
      backdropTransitionInTiming={1}
      backdropTransitionOutTiming={1}
      style={themedStyle.container}>
      <View style={themedStyle.viewBox}>
        <SafeAreaView style={themedStyle.viewTop}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => onClosePress()}
          >
            {CloseIconOutline(themedStyle.iconClose)}
          </TouchableOpacity>
        </SafeAreaView>
        <Pdf
          source={source}
          style={themedStyle.pdf} />
      </View>
    </Modal>
  );
};

export const AttachmentModal = withStyles(AttachmentModalComponent, (theme: ThemeType) => ({
  container: {
    margin: 0,
    flex: 1,
  },
  viewBox: {
    flex: 1,
  },
  iconClose: {
    width: isTablet() ? pxToPercentage(80) : pxToPercentage(50),
    height: isTablet() ? pxToPercentage(80) : pxToPercentage(50),
    tintColor: theme['color-custom-100'],
  },
  pdf: {
    flex: 1,
  },
  viewTop: {
    height: isTablet() ? pxToPercentage(100) : pxToPercentage(60),
    alignItems: 'flex-end',
  },
}));
