import React from 'react';
import {
  ListItemProps,
} from '@kitten/ui';
import {
  Text,
  View,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { } from 'react-native-gesture-handler';
import { Videos as VideosModel } from '@src/core/models/galleryVideo/videos.model';
import {
  GalleryVideoIcon,
  UpIcon,
  DownIcon,
} from '@src/assets/icons';
import { isTablet } from 'react-native-device-info';

interface ComponentProps extends TouchableOpacityProps {
  videos: VideosModel;
  isFirstTopic?: boolean;
  videoSelected: number;
  onVideosItemPress: (id: number, url: string) => void;
}

export type VideoGalleryItemProps = ThemedComponentProps & ComponentProps & ListItemProps;

const VideoGalleryItemComponent: React.FunctionComponent<VideoGalleryItemProps> = (props) => {
  const { themedStyle } = props;
  const [isCollapse, setIsCollapse] = React.useState<boolean>(props.isFirstTopic ? false : true);

  const onCollapseIconPress = () => {
    setIsCollapse(prevState => !prevState);
  };

  const onVideosItemPress = (id: number, url: string) => {
    return props.onVideosItemPress(id, url);
  };

  const onRenderVideos = (): React.ReactElement[] => {
    return props.videos.videos.map((item, index) => {
      if (item.id === props.videoSelected) {
        return (
          <TouchableOpacity style={[
            themedStyle.viewVideosList,
            themedStyle.viewSelectedVideo,
          ]}
            onPress={() => { onVideosItemPress(item.id, item.url); }}
            activeOpacity={0.75}>
            {GalleryVideoIcon(themedStyle.iconVideo)}
            <Text style={themedStyle.txtVideoName}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }
      return (
        <TouchableOpacity style={themedStyle.viewVideosList}
          onPress={() => { onVideosItemPress(item.id, item.url); }}
          activeOpacity={0.75}>
          {GalleryVideoIcon(themedStyle.iconVideo)}
          <Text style={themedStyle.txtVideoName}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onCollapseIconPress}
        style={themedStyle.viewTopic}>
        <View style={themedStyle.viewVideoHeader}>
          <View style={themedStyle.viewTopicName}>
            <Text style={themedStyle.txtHeader}>
              {props.videos.topic}
            </Text>
          </View>
          {isCollapse ? DownIcon(themedStyle.iconCollapse) : UpIcon(themedStyle.iconCollapse)}
        </View>
      </TouchableOpacity>
      {!isCollapse && onRenderVideos()}
    </View>
  );
};

export const VideoGalleryItem = withStyles(VideoGalleryItemComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    borderBottomWidth: pxToPercentage(5),
    borderColor: theme['color-custom-100'],
  },
  viewVideoHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pxToPercentage(20),
    paddingVertical: pxToPercentage(20),
    backgroundColor: theme['color-primary-2'],
  },
  viewTopic: {
  },
  viewTopicName: {
    flex: 1,
  },
  txtHeader: {
    color: 'white',
    ...textStyle.proDisplayBold,
    fontSize: isTablet() ? pxToPercentage(34) : pxToPercentage(14),
    textAlign: 'justify',
    lineHeight: isTablet() ? pxToPercentage(54) : pxToPercentage(24),
  },
  viewVideosList: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: isTablet() ? theme['color-primary-12'] : theme['color-custom-300'],
    alignItems: 'center',
    paddingVertical: pxToPercentage(34),
    paddingHorizontal: pxToPercentage(18),
    marginTop: isTablet() ? 0 : pxToPercentage(4),
    borderTopWidth: isTablet() ? pxToPercentage(2) : 0,
    borderColor: theme['color-primary-2'],
  },
  viewSelectedVideo: {
    backgroundColor: theme['color-primary-19'],
  },
  iconVideo: {
    height: pxToPercentage(52),
    width: pxToPercentage(52),
    marginRight: isTablet() ? pxToPercentage(17) : pxToPercentage(8),
  },
  txtVideoName: {
    fontSize: isTablet() ? pxToPercentage(34) : pxToPercentage(14),
    ...textStyle.proDisplayBold,
    color: theme['color-primary-2'],
    flex: 1,
  },
  iconCollapse: {
    height: isTablet() ? pxToPercentage(60) : pxToPercentage(20),
    width: isTablet() ? pxToPercentage(60) : pxToPercentage(20),
    tintColor: theme['color-primary-12'],
  },
}));
