import React from 'react';
import { ImageProps } from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  TopNavigationActionProps,
  TopNavigationAction,
  TopNavigation,
} from '@kitten/ui';
import {
  QRCodeIconOther,
  MessageIconOther,
} from '@src/assets/icons';
import { SafeAreaView } from 'react-navigation';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { getStatusBarHeight } from 'react-native-status-bar-height';

interface ComponentProps {
  title: string;
  routeName: string;
  backIcon?: BackIconProp;
  onMessagePress: () => void;
  onQRCodePress: () => void;
  onBack: () => void;
}

export type HomeNavigationBarProps = ThemedComponentProps & ComponentProps;

type BackIconProp = (style: StyleType) => React.ReactElement<ImageProps>;
type BackButtonElement = React.ReactElement<TopNavigationActionProps>;

const HomeNavigationBarComponent: React.FunctionComponent<HomeNavigationBarProps> = (props) => {
  const { themedStyle, title, backIcon } = props;

  const onBack = (): void => {
    props.onBack();
  };

  const onMessagePress = (): void => {
    props.onMessagePress();
  };

  const onQRCodePress = (): void => {
    props.onQRCodePress();
  };

  const renderBackButton = (source: BackIconProp): React.ReactElement<TopNavigationActionProps> => {
    return (
      <TopNavigationAction
        icon={source}
        onPress={onBack}
      />
    );
  };

  const renderQRCodeIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    return QRCodeIconOther({ ...style, ...themedStyle.iconQRCode });
  };

  const renderMessageIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    return MessageIconOther({ ...style, ...themedStyle.iconMessage });
  };

  const renderRightControls = (): React.ReactElement<TopNavigationActionProps>[] => {
    if (props.routeName === 'signInQRCode') {
      return [];
    }

    return ([
      <TopNavigationAction
        icon={renderQRCodeIcon}
        onPress={onQRCodePress}
      />,
      <TopNavigationAction
        icon={renderMessageIcon}
        onPress={onMessagePress}
      />,
    ]);
  };

  const leftControlElement: BackButtonElement | null = backIcon ? renderBackButton(backIcon) : null;

  return (
    <SafeAreaView style={themedStyle.safeArea}>
      <TopNavigation
        alignment='center'
        title={title}
        titleStyle={themedStyle.titleStyle}
        style={themedStyle.header}
        subtitleStyle={textStyle.regular}
        leftControl={leftControlElement}
        rightControls={renderRightControls()}
      />
    </SafeAreaView>
  );
};

export const HomeNavigationBar = withStyles(HomeNavigationBarComponent, (theme: ThemeType) => ({
  safeArea: {
    paddingTop: getStatusBarHeight(false),
    backgroundColor: theme['color-primary-2'],
  },
  header: {
    backgroundColor: theme['color-primary-2'],
  },
  titleStyle: {
    color: theme['text-control-color'],
    ...textStyle.proTextSemibold,
  },
  iconQRCode: {
    width: pxToPercentage(25),
    height: pxToPercentage(25),
    tintColor: theme['color-custom-100'],
  },
  iconMessage: {
    width: pxToPercentage(25) * (174 / 162),
    height: pxToPercentage(25),
    tintColor: theme['color-custom-100'],
  },
}));

