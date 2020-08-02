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
import { Videos as VideosModel } from '@src/core/models/gallery/videos.model';
import {
  GalleryVideoIcon,
  UpIcon,
  DownIcon,
} from '@src/assets/icons';

interface ComponentProps extends TouchableOpacityProps {
  videos: VideosModel;
  isFirstTopic?: boolean;
  videoSelected: number;
  onVideosItemPress: (id: number, url: string) => void;
}

export type HomeMeetingItemProps = ThemedComponentProps & ComponentProps & ListItemProps;

const HomeMeetingItemComponent: React.FunctionComponent<HomeMeetingItemProps> = (props) => {
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

export const GalleryVideoItem = withStyles(HomeMeetingItemComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  viewVideoHeader: {
    flex: 1,
    minHeight: pxToPercentage(128),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: pxToPercentage(20),
    backgroundColor: theme['color-primary-2'],
  },
  viewTopic: {
  },
  viewTopicName: {
    width: pxToPercentage(400),
  },
  txtHeader: {
    color: 'white',
    ...textStyle.proDisplayBold,
    fontSize: pxToPercentage(34),
    textAlign: 'justify',
    lineHeight: pxToPercentage(54),
  },
  viewVideosList: {
    minHeight: pxToPercentage(120),
    flexDirection: 'row',
    backgroundColor: theme['color-primary-12'],
    alignItems: 'center',
    paddingHorizontal: pxToPercentage(18),
    borderTopWidth: pxToPercentage(2),
  },
  viewSelectedVideo: {
    backgroundColor: theme['color-primary-19'],
  },
  iconVideo: {
    height: pxToPercentage(52),
    width: pxToPercentage(52),
    marginRight: pxToPercentage(17),
  },
  txtVideoName: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayBold,
    color: theme['color-primary-2'],
  },
  iconCollapse: {
    height: pxToPercentage(60),
    width: pxToPercentage(60),
    tintColor: theme['color-primary-12'],
  },
}));
