import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Video from 'react-native-video';
import { BackHeader } from '@src/components/header/backHeader.component';
import { GalleryVideoIcon } from '@src/assets/icons';

interface ComponentProps {
  onBackPress: () => void;
}

export type GalleryVideoTabletProps = ThemedComponentProps & ComponentProps;

const GalleryVideoTabletComponent: React.FunctionComponent<GalleryVideoTabletProps> = (props) => {

  const onMessagePress = (): void => {

  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {

  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <BackHeader
        title={'TỔ THẢO LUẬN'}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress}
      />
      <View style={themedStyle.viewContent}>
        <Video
          controls={true}
          resizeMode='stretch'
          style={themedStyle.videoView}
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        />
        <View style={themedStyle.viewRight}>
          <ScrollView
            contentContainerStyle={{ flex: 1 }}
            style={themedStyle.viewVideoList}>
            <View style={themedStyle.viewVideoHeader}>
              <Text style={themedStyle.txtHeader}>
                {'Lãnh đạo và đồng hành'}
              </Text>
            </View>
            <View style={themedStyle.viewVideoContent}>
              {GalleryVideoIcon(themedStyle.iconVideo)}
              <Text>
                {'Tập 1_ Sợi chỉ đỏ'}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export const GalleryVideoTablet = withStyles(GalleryVideoTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(20),
    // backgroundColor: theme['background-custom-color-2'],
  },
  viewContent: {
    flex: 1,
    flexDirection: 'row',
  },
  videoView: {
    width: pxToPercentage(1485),
    height: pxToPercentage(880),
    borderRadius: pxToPercentage(32),
    marginRight: pxToPercentage(28),
  },
  viewRight: {
    flex: 1,
    overflow: 'hidden',
  },
  viewVideoList: {
    flex: 1,
    backgroundColor: 'red',
    borderRadius: pxToPercentage(32),
    overflow: 'hidden',
  },
  viewVideoHeader: {
    height: pxToPercentage(128),
    backgroundColor: 'blue',
    paddingHorizontal: pxToPercentage(20),
    justifyContent: 'center',
  },
  txtHeader: {
    color: 'white',
    ...textStyle.proDisplayBold,
    fontSize: pxToPercentage(34),
  },
  viewVideoContent: {
    minHeight: pxToPercentage(120),
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  iconVideo: {
    height: pxToPercentage(52),
    width: pxToPercentage(52),
    marginRight: pxToPercentage(17),
  },
}));
