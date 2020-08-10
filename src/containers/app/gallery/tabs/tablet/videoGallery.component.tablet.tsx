import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import Video from 'react-native-video';
import { viewStyle } from '@src/components/viewStyle';
import { VideoGalleryItem } from './videoGalleryItem.component.tablet';
import { Videos as VideosModel } from '@src/core/models/galleryVideo/videos.model';

interface ComponentProps {
  onVideosItemPress: (id: number, url: string) => void;
  gallery: VideosModel[];
  videoSelected: number;
  url: string;
}

export type VideoGalleryTabletProps = ThemedComponentProps & ComponentProps;

const VideoGalleryTabletComponent: React.FunctionComponent<VideoGalleryTabletProps> = (props) => {

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <Video
        resizeMode='stretch'
        controls={true}
        style={themedStyle.videoView}
        source={{ uri: props.url }}
      />
      <View style={themedStyle.viewRight}>
        <FlatList
          data={props.gallery}
          extraData={props.gallery}
          contentContainerStyle={themedStyle.flatListContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <VideoGalleryItem
                videos={item}
                isFirstTopic={index === 0 ? true : false}
                onVideosItemPress={props.onVideosItemPress}
                videoSelected={props.videoSelected}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export const VideoGalleryTablet = withStyles(VideoGalleryTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    borderRadius: pxToPercentage(40),
    padding: pxToPercentage(20),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
    flexDirection: 'row',
  },
  videoView: {
    width: pxToPercentage(1485),
    borderRadius: pxToPercentage(32),
    marginRight: pxToPercentage(28),
  },
  viewRight: {
    flex: 1,
    borderWidth: pxToPercentage(2),
    borderColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(32),
    overflow: 'hidden',
  },
}));
