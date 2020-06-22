import React from 'react';
import {
  StyleType,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  ImageProps,
  // SafeAreaView,
  Text,
  StyleProp,
  TextStyle,
} from 'react-native';
import {
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionProps,
  TopNavigationProps,
} from '@kitten/ui';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';

export interface ComponentProps {
  backIcon?: BackIconProp;
  backText?: string;
  backTextStyle?: StyleProp<TextStyle>;
  onBackPress?: () => void;
  isTransparent?: boolean;
  isV2?: boolean;
  isNotBottomLine?: boolean;
}

export type TopNavigationBarProps = TopNavigationProps & ComponentProps;

type BackIconProp = (style: StyleType) => React.ReactElement<ImageProps>;
type BackButtonElement = React.ReactElement<TopNavigationActionProps>;

const TopNavigationBarComponent: React.FunctionComponent<TopNavigationBarProps> = (props) => {
  const onBackButtonPress = () => {
    if (props.onBackPress) {
      props.onBackPress();
    }
  };

  const renderBackButton = (source: BackIconProp): BackButtonElement => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onBackButtonPress}
        style={themedStyle.leftControl}>
        <TopNavigationAction
          icon={source}
          style={themedStyle.topNavigationAction}
          onPress={onBackButtonPress}
        />
        <Text
          style={[
            themedStyle.leftText,
            props.backTextStyle,
          ]}>
          {props.backText}
        </Text>
      </TouchableOpacity>
    );
  };

  const { themedStyle, title, backIcon, isTransparent, isV2, isNotBottomLine } = props;

  const leftControlElement: BackButtonElement | null = backIcon ? renderBackButton(backIcon) : null;

  return (
    <SafeAreaView
      style={[
        themedStyle.safeArea,
        isTransparent ? themedStyle.safeAreaTransparent : {},
        isV2 ? themedStyle.safeAreaV2 : {},
      ]}>
      <TopNavigation
        alignment='center'
        style={[
          themedStyle.header,
          isTransparent ? themedStyle.headerTransparent : {},
          isV2 ? themedStyle.headerV2 : {},
          isNotBottomLine ? themedStyle.headerNotBottomLine : {},
        ]}
        title={title}
        titleStyle={[
          themedStyle.titleStyle,
          isTransparent ? themedStyle.titleStyleTransparent : {},
        ]}
        subtitleStyle={themedStyle.proTextRegular}
        leftControl={leftControlElement}
      />
    </SafeAreaView>
  );
};

export const TopNavigationBar = withStyles(TopNavigationBarComponent, (theme: ThemeType) => ({
  safeArea: {
    paddingTop: getStatusBarHeight(false),
    backgroundColor: theme['color-basic-light-100'],
  },
  safeAreaTransparent: {
    backgroundColor: 'transparent',
  },
  safeAreaV2: {
    backgroundColor: theme['color-background-100'],
  },
  header: {
    borderBottomWidth: pxToPercentage(1.001),
    borderColor: theme['color-gray-1300'],
  },
  headerTransparent: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  headerV2: {
    backgroundColor: theme['color-background-100'],
    borderBottomWidth: 0,
  },
  headerNotBottomLine: {
    borderBottomWidth: 0,
  },
  titleStyle: {
    fontSize: pxToPercentage(17),
    color: theme['color-blue'],
    lineHeight: pxToPercentage(22),
    ...textStyle.proTextSemibold,
  },
  titleStyleTransparent: {
    color: theme['color-basic-light-100'],
  },
  subtitleStyle: {

  },
  topNavigationAction: {
    marginLeft: 0,
  },
  leftControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftText: {
    fontSize: pxToPercentage(17),
    color: theme['color-blue'],
    lineHeight: pxToPercentage(22),
    ...textStyle.proTextRegular,
  },
}));
