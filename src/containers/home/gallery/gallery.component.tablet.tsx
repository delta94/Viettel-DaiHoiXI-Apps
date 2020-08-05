import React from 'react';
import {
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { BackHeader } from '@src/components/header/backHeader.component';
import { PhotoGalleryTablet } from './tabs/tablet/photoGallery.component.tablet';
import { PhotoGallery } from '@src/core/models/photoGallery/photoGallery.model';
import { GalleryTabEnum } from '@src/core/utils/constants';
import { Videos as VideosModel } from '@src/core/models/galleryVideo/videos.model';
import { GalleryVideoTablet } from './tabs/tablet/galleryVideo.component.tablet';

interface ComponentProps {
  onBackPress: () => void;
  imgDataFake: PhotoGallery[];
  onVideosItemPress: (id: number, url: string) => void;
  gallery: VideosModel[];
  videoSelected: number;
  url: string;
}

export type GalleryTabletProps = ComponentProps & ThemedComponentProps;

const GalleryTabletComponent: React.FunctionComponent<GalleryTabletProps> = (props) => {
  const [selectedTab, setSelectedTab] = React.useState(GalleryTabEnum.HinhAnh);

  const onMessagePress = (): void => {

  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {

  };

  const onTabPress = (type: number) => {
    setSelectedTab(type);
  };

  const isPhotoGallery = () => {
    return selectedTab === GalleryTabEnum.HinhAnh;
  };
  const onVideosItemPress = (id: number, url: string) => {
    props.onVideosItemPress(id, url);
  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <BackHeader
        tabs={[
          { title: 'HÌNH ẢNH TRIỂN LÃM', type: GalleryTabEnum.HinhAnh },
          { title: 'PHIM ẢNH TRIỂN LÃM', type: GalleryTabEnum.PhimAnh },
        ]}
        onTabPress={onTabPress}
        tabSelected={selectedTab}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress}
      />
      <View style={themedStyle.viewCard}>
        {isPhotoGallery()
          ? <PhotoGalleryTablet imgDataFake={props.imgDataFake} />
          : <GalleryVideoTablet
            gallery={props.gallery}
            onVideosItemPress={onVideosItemPress}
            videoSelected={props.videoSelected}
            url={props.url} />
        }

      </View>
    </View>
  );
};

export const GalleryTablet = withStyles(GalleryTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(40),
    padding: pxToPercentage(20),
    paddingTop: pxToPercentage(34),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
}));
