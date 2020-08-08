import React from 'react';
import {
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Modal from 'react-native-modal';
import { ThemedComponentProps } from '@kitten/theme';
import { SafeAreaView } from 'react-navigation';
import { CloseIconOutline } from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import Pdf from 'react-native-pdf';
import { isTablet } from 'react-native-device-info';

export interface ComponentProps {
  isVisible: boolean;
  onClosePress: () => void;
  sourcePdf: any;
}

export type TopNavigationBarProps = ThemedComponentProps & ComponentProps;

const TopNavigationBarComponent: React.FunctionComponent<TopNavigationBarProps> = (props) => {
  const { themedStyle } = props;

  const onClosePress = () => {
    props.onClosePress();
  };

  return (
    <View style={themedStyle.container}>
      {props.isVisible &&
        <StatusBar
          backgroundColor='black'
          barStyle='light-content'
        />}
      <Modal
        backdropColor={'black'}
        isVisible={props.isVisible}
        animationIn='slideInUp'
        animationOut='slideOutDown'
        onBackdropPress={onClosePress}
        backdropOpacity={0.9}
        onSwipeComplete={onClosePress}
        onBackButtonPress={onClosePress}
        backdropTransitionInTiming={1}
        backdropTransitionOutTiming={1}
        style={themedStyle.container}>
        <View style={themedStyle.viewBox}>
          <SafeAreaView style={themedStyle.viewTop}>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => onClosePress()}
            >
              {CloseIconOutline(themedStyle.iconClose)}
            </TouchableOpacity>
          </SafeAreaView>
          <Pdf
            source={props.sourcePdf}
            style={themedStyle.pdf} />
        </View>
      </Modal>
    </View>
  );
};

export const HelpModel = withStyles(TopNavigationBarComponent, (theme: ThemeType) => ({
  container: {
    margin: 0,
    flex: 1,
  },
  viewBox: {
    flex: 1,
  },
  iconClose: {
    width: isTablet() ? pxToPercentage(80) : pxToPercentage(50),
    height: isTablet() ? pxToPercentage(80) : pxToPercentage(50),
    tintColor: theme['color-custom-100'],
  },
  pdf: {
    flex: 1,
  },
  viewTop: {
    height: isTablet() ? pxToPercentage(100) : pxToPercentage(50),
    alignItems: 'flex-end',
  },
}));
