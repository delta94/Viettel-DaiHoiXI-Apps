import React from 'react';
import {
  StyleType,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { ImageProps } from 'react-native';
import {
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionProps,
  TopNavigationProps,
} from '@kitten/ui';
import { textStyle } from '@src/components';
import { SafeAreaView } from 'react-navigation';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  MessageIconOther,
  QuestionIcon,
} from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import { HelpModel } from './helpModel.component';

export interface ComponentProps {
  routeName: string;
  backIcon?: BackIconProp;
  onBackPress?: () => void;
  onMessagePress?: () => void;
}

export type TopNavigationBarProps = TopNavigationProps & ComponentProps;

type BackIconProp = (style: StyleType) => React.ReactElement<ImageProps>;
type BackButtonElement = React.ReactElement<TopNavigationActionProps>;

const TopNavigationBarComponent: React.FunctionComponent<TopNavigationBarProps> = (props) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const onBackButtonPress = () => {
    if (props.onBackPress) {
      props.onBackPress();
    }
  };

  const onMessagePress = () => {
    props.onMessagePress();
  };

  const onHelpPress = () => {
    setIsVisible(prevState => !prevState);
  };

  const renderQuestionIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    return QuestionIcon({ ...style, ...themedStyle.iconQRCode });
  };

  const renderMessageIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    return MessageIconOther({ ...style, ...themedStyle.iconMessage });
  };

  const renderBackButton = (source: BackIconProp): BackButtonElement => {
    return (
      <TopNavigationAction
        icon={source}
        onPress={onBackButtonPress}
      />
    );
  };

  const renderRightControls = (): React.ReactElement<TopNavigationActionProps>[] => {
    if (props.routeName === 'signInQRCode') {
      return [];
    }

    return ([
      <TopNavigationAction
        icon={renderQuestionIcon}
        onPress={onHelpPress}
      />,
      <TopNavigationAction
        icon={renderMessageIcon}
        onPress={onMessagePress}
      />,
    ]);
  };

  const { themedStyle, title, backIcon } = props;

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
      <HelpModel
        isVisible={isVisible}
        onClosePress={onHelpPress}
      />
    </SafeAreaView>
  );
};

export const TopNavigationBar = withStyles(TopNavigationBarComponent, (theme: ThemeType) => ({
  safeArea: {
    paddingTop: getStatusBarHeight(false),
    backgroundColor: theme['color-primary-2'],
  },
  header: {
    backgroundColor: theme['background-basic-custom-color-3'],
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
