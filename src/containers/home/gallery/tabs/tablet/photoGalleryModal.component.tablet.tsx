import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import Modal from 'react-native-modal';
import { ImageSource } from '@src/assets/images';
import {
  ArrowNextIcon,
  ArrowPrevIcon,
  CloseIconOutline,
} from '@src/assets/icons';

interface ComponentProps {
  image: ImageSource;
  isVisible: boolean;
  onClosePress: () => void;
  onPrevImageModal: () => void;
  onNextImageModal: () => void;
}

export type PhotoGalleryModalTabletProps = ThemedComponentProps & ComponentProps;

const PhotoGalleryModalTabletComponent: React.FunctionComponent<PhotoGalleryModalTabletProps> = (props) => {
  const onClosePress = (): void => {
    props.onClosePress();
  };

  const onPrevImageModal = () => {
    props.onPrevImageModal();
  };

  const onNextImageModal = () => {
    props.onNextImageModal();
  };

  const { themedStyle } = props;

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
        <View style={themedStyle.viewTop}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => onClosePress()}
          >
            {CloseIconOutline(themedStyle.iconClose)}
          </TouchableOpacity>
        </View>
        <View style={themedStyle.viewBody}>
          <View style={themedStyle.viewLeft}>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => onPrevImageModal()}
              style={themedStyle.btnChange}>
              {ArrowPrevIcon(themedStyle.iconArrow)}
            </TouchableOpacity>
          </View>
          <View style={themedStyle.viewCenter}>
            <Image
              source={props.image.imageSource}
              style={themedStyle.img}
            />
          </View>
          <View style={themedStyle.viewRight}>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => onNextImageModal()}
              style={themedStyle.btnChange}>
              {ArrowNextIcon(themedStyle.iconArrow)}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const PhotoGalleryModalTablet = withStyles(PhotoGalleryModalTabletComponent, (theme: ThemeType) => ({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  viewBox: {
    flex: 1,
  },
  viewTop: {
    height: pxToPercentage(200),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: pxToPercentage(120),
  },
  viewBody: {
    flex: 1,
    flexDirection: 'row',
  },
  viewLeft: {
    width: pxToPercentage(302),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  viewRight: {
    width: pxToPercentage(302),
    justifyContent: 'center',
    paddingLeft: pxToPercentage(50),
  },
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  img: {
    width: pxToPercentage(1556),
    height: pxToPercentage(1148),
  },
  btnChange: {
    width: pxToPercentage(150),
    height: pxToPercentage(150),
    justifyContent: 'center',
  },
  iconArrow: {
    width: pxToPercentage(100),
    height: pxToPercentage(93),
    tintColor: theme['color-custom-100'],
  },
  iconClose: {
    width: pxToPercentage(150),
    height: pxToPercentage(150),
    tintColor: theme['color-custom-100'],
  },
}));
