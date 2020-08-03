import React, { useState } from 'react';
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
import { GalleryVideoItem } from './galleryVideoItem.component.tablet';
import { Videos as VideosModel } from '@src/core/models/gallery/videos.model';

interface ComponentProps {
  onVideosItemPress: (id: number, url: string) => void;
  gallery: VideosModel[];
  videoSelected: number;
  url: string;
}

export type GalleryVideoProps = ThemedComponentProps & ComponentProps;

const GalleryVideoComponent: React.FunctionComponent<GalleryVideoProps> = (props) => {

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
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
              <GalleryVideoItem
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

export const GalleryVideo = withStyles(GalleryVideoComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    backgroundColor: theme['color-custom-100'],
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
    padding: pxToPercentage(8),
  },
  videoView: {
    height: pxToPercentage(300),
  },
}));
