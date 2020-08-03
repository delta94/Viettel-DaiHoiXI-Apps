import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
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
import Swiper from 'react-native-swiper';

interface ComponentProps {
  imageDataFake: PhotoGalleryModel[];
  isVisible: boolean;
  onClosePress: () => void;
  imageIndex: number;
}

export type PhotoGalleryModalProps = ThemedComponentProps & ComponentProps;

const PhotoGalleryModalComponent: React.FunctionComponent<PhotoGalleryModalProps> = (props) => {

  const onClosePress = (): void => {
    props.onClosePress();
  };

  const renderImage = (): React.ReactElement[] => {
    return props.imageDataFake.map((item, index) => {
      return (
        <View style={themedStyle.slide}>
          <Image
            key={index}
            source={item.uri.imageSource}
            style={themedStyle.image}
          />
        </View>
      );
    });
  };

  const renderDot = (isActive: boolean): React.ReactElement => {
    return (
      <View
        style={[
          themedStyle.viewDot,
          isActive && themedStyle.viewActiveDot,
        ]}
      />
    );
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
        <Swiper
          style={themedStyle.swiper}
          index={props.imageIndex}
          dot={renderDot(false)}
          activeDot={renderDot(true)}
          paginationStyle={{bottom: pxToPercentage(150)}}>
          {renderImage()}
        </Swiper>
      </View>
    </Modal>
  );
};

export const PhotoGalleryModal = withStyles(PhotoGalleryModalComponent, (theme: ThemeType) => ({
  container: {
    margin: 0,
    flex: 1,
  },
  viewBox: {
    flex: 1,
  },
  swiper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    margin: pxToPercentage(5),
  },
  image: {
    height: pxToPercentage(320),
    width: '100%',
  },
  viewTop: {
    height: pxToPercentage(60),
    alignItems: 'flex-end',
  },
  iconClose: {
    width: pxToPercentage(50),
    height: pxToPercentage(50),
    tintColor: theme['color-custom-100'],
  },
  viewDot: {
    backgroundColor: theme['color-basic-control-transparent-400'],
    width: pxToPercentage(12),
    height: pxToPercentage(12),
    borderRadius: pxToPercentage(6),
    marginLeft: pxToPercentage(6),
  },
  viewActiveDot: {
    backgroundColor: theme['color-custom-100'],
  },
}));
