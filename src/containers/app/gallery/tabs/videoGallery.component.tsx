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
import { VideoGalleryItem } from './tablet/videoGalleryItem.component.tablet';
import { Videos as VideosModel } from '@src/core/models/galleryVideo/videos.model';

interface ComponentProps {
  onVideosItemPress: (id: number, url: string) => void;
  gallery: VideosModel[];
  videoSelected: number;
  url: string;
}

export type VideoGalleryProps = ThemedComponentProps & ComponentProps;

const VideoGalleryComponent: React.FunctionComponent<VideoGalleryProps> = (props) => {

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <Video
        resizeMode='stretch'
        controls={true}
        style={themedStyle.videoView}
        source={{ uri: props.url }}
      />
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
  );
};

export const VideoGallery = withStyles(VideoGalleryComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
    padding: pxToPercentage(8),
  },
  videoView: {
    height: pxToPercentage(300),
  },
}));
