import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import {
  TabView,
  Tab,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import {
  PressReleaseIcon,
  PhotoGalleryIcon,
} from '@src/assets/icons';
import { PhotoGallery } from './tabs/photoGallery.component';
import { PhotoGallery as PhotoGalleryModel } from '@src/core/models/photoGallery/photoGallery.model';
import { GalleryVideo } from './tabs/galleryVideo.component';
import { Videos as VideosModel } from '@src/core/models/galleryVideo/videos.model';

interface ComponentProps {
  imgDataFake: PhotoGalleryModel[];
  onVideosItemPress: (id: number, url: string) => void;
  gallery: VideosModel[];
  videoSelected: number;
  url: string;
}

export type GalleryProps = ComponentProps & ThemedComponentProps;

const GalleryComponent: React.FunctionComponent<GalleryProps> = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const onTabSelect = (selectedTabIndexParam: number) => {
    setSelectedTabIndex(selectedTabIndexParam);
  };

  const onVideosItemPress = (id: number, url: string) => {
    props.onVideosItemPress(id, url);
  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewContent}>
        <TabView
          style={themedStyle.tabView}
          tabBarStyle={themedStyle.tabBar}
          indicatorStyle={themedStyle.tabViewIndicator}
          selectedIndex={selectedTabIndex}
          onSelect={onTabSelect}>
          <Tab
            title='Hình ảnh'
            icon={PhotoGalleryIcon}
            titleStyle={themedStyle.tabTitle}>
            <PhotoGallery
              imgDataFake={props.imgDataFake}
            />
          </Tab>
          <Tab
            title='Phim ảnh'
            icon={PressReleaseIcon}
            titleStyle={themedStyle.tabTitle}>
            <GalleryVideo
              gallery={props.gallery}
              onVideosItemPress={onVideosItemPress}
              videoSelected={props.videoSelected}
              url={props.url}
            />
          </Tab>
        </TabView>
      </View>
      <SafeAreaView />
    </View>
  );
};

export const Gallery = withStyles(GalleryComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    backgroundColor: theme['color-primary-11'],
  },
  viewContent: {
    flex: 1,
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
    overflow: 'hidden',
  },
  tabView: {
    flex: 1,
    backgroundColor: theme['color-primary-11'],
  },
  tabBar: {
    backgroundColor: theme['color-custom-100'],
  },
  tabViewIndicator: {
    backgroundColor: theme['color-primary-2'],
  },
  tabTitle: {
    fontWeight: '500',
    ...textStyle.proTextRegular,
  },
}));
