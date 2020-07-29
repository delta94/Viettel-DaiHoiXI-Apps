import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  ArrowNextIcon,
  ArrowPrevIcon,
} from '@src/assets/icons';
import { textStyle } from '@src/components';
import {
  imageGallery1,
  imageGallery2,
  imageGallery3,
  imageGallery4,
  imageGallery5,
  imageGallery6,
  imageGallery7,
  imageGallery8,
  ImageSource,
} from '@src/assets/images';
import { PhotoGalleryModal } from './photoGalleryModal.component.tablet';

interface ComponentProps {
  a?: number;
}

export type PhotoGalleryTabletProps = ComponentProps & ThemedComponentProps;

const PhotoGalleryTabletComponent: React.FunctionComponent<PhotoGalleryTabletProps> = (props) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedPhoto, setSelectedPhoto] = useState<ImageSource>(imageGallery1);
  const [isVisible, setIsVisible] = useState(false);
  const [tabState, settabState] = useState(0);
  const tabDataFake = [
    'Thành phố 40 năm xây dựng',
    'Lãnh đạo và đồng hành',
    'Hình ảnh tư liệu Đại hội Đảng bộ lần X',
    'Tab 1', 'Tab 2', 'Tab 3', 'Tab 4',
  ];
  const imgDataFake = [
    imageGallery1, imageGallery2, imageGallery3, imageGallery4,
    imageGallery5, imageGallery6, imageGallery7, imageGallery8,
  ];

  const getTabStyle = (index: number) => {
    const style = [themedStyle.btnTab];

    if (selectedTab === index) {
      style.push(themedStyle.btnTabSelected);
    }

    if (selectedTab === index + 1 || selectedTab === tabState + 1 || index === tabState + 2) {
      style.push(themedStyle.btnTabNoBorder);
    }

    return style;
  };

  const renderTabSelector = (): React.ReactElement[] => {
    return [tabState, tabState + 1, tabState + 2].map((item, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.75}
          style={getTabStyle(item)}
          onPress={() => setSelectedTab(item)}>
          <Text
            numberOfLines={2}
            style={[
              themedStyle.txtTab,
              selectedTab === item && themedStyle.txtTabSelected,
            ]}>
            {tabDataFake[item]}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  const onImageItemPress = (image: ImageSource) => {
    setSelectedPhoto(image);
    setIsVisible(true);
  };

  const onClosePress = () => {
    setIsVisible(false);
  };

  const onNextTab = () => {
    if (tabState + 3 <= tabDataFake.length - 3) {
      settabState(tabState + 3);
    } else if (tabState + 3 === tabDataFake.length - 2) {
      settabState(tabState + 2);
    } else if (tabState + 3 === tabDataFake.length - 1) {
      settabState(tabState + 1);
    }
  };

  const onPrevTab = () => {
    if (tabState - 3 >= 0) {
      settabState(tabState - 3);
    }
    if (tabState - 3 === - 1) {
      settabState(tabState - 2);
    }
    if (tabState - 3 === - 2) {
      settabState(tabState - 1);
    }
  };

  const onPrevImageModal = () => {
    const indexSelected = imgDataFake.indexOf(selectedPhoto);
    if (indexSelected - 1 >= 0) {
      setSelectedPhoto(imgDataFake[indexSelected - 1]);
    } else {
      setSelectedPhoto(imgDataFake[imgDataFake.length - 1]);
    }
  };

  const onNextImageModal = () => {
    const indexSelected = imgDataFake.indexOf(selectedPhoto);
    if (indexSelected + 1 < imgDataFake.length) {
      setSelectedPhoto(imgDataFake[indexSelected + 1]);
    } else {
      setSelectedPhoto(imgDataFake[0]);
    }
  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewTop}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => onPrevTab()}
          style={themedStyle.btnPrevChangeTabs}>
          {ArrowPrevIcon(themedStyle.iconBtnChangeTabs)}
        </TouchableOpacity>
        <View style={themedStyle.viewTab}>
          {renderTabSelector()}
        </View>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => onNextTab()}
          style={themedStyle.btnNextChangeTabs}>
          {ArrowNextIcon(themedStyle.iconBtnChangeTabs)}
        </TouchableOpacity>
      </View>
      <View style={themedStyle.viewBody}>
        <FlatList
          data={imgDataFake}
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.75}
              style={themedStyle.btnImage}
              onPress={() => onImageItemPress(item)}
            >
              <Image
                source={item.imageSource}
                style={themedStyle.img}
              />
            </TouchableOpacity>
          )}
        />
        <PhotoGalleryModal
          isVisible={isVisible}
          onClosePress={onClosePress}
          image={selectedPhoto}
          onNextImageModal={onNextImageModal}
          onPrevImageModal={onPrevImageModal}
        />
      </View>
    </View>
  );
};

export const PhotoGalleryTablet = withStyles(PhotoGalleryTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  viewTop: {
    flexDirection: 'row',
    height: pxToPercentage(102),
  },
  viewTab: {
    flex: 1,
    borderWidth: pxToPercentage(2),
    borderRightWidth: pxToPercentage(2),
    borderColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(28),
    flexDirection: 'row',
  },
  btnTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxToPercentage(28),
    borderRightWidth: pxToPercentage(2),
    borderColor: theme['color-primary-2'],
  },
  btnTabNoBorder: {
    borderRightWidth: 0,
  },
  btnTabSelected: {
    borderRadius: pxToPercentage(28),
    backgroundColor: theme['color-primary-2'],
  },
  txtTab: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    textAlign: 'center',
    color: theme['color-primary-2'],
  },
  txtTabSelected: {
    color: theme['color-custom-100'],
  },
  btnPrevChangeTabs: {
    justifyContent: 'center',
    width: pxToPercentage(100),
  },
  btnNextChangeTabs: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: pxToPercentage(100),
  },
  iconBtnChangeTabs: {
    width: pxToPercentage(58),
    height: pxToPercentage(54),
  },
  viewBody: {
    flex: 1,
    paddingTop: pxToPercentage(28),
  },
  btnImage: {
    height: pxToPercentage(328),
    width: pxToPercentage(497),
    margin: pxToPercentage(6),
  },
  img: {
    height: pxToPercentage(328),
    width: pxToPercentage(497),
  },
}));
