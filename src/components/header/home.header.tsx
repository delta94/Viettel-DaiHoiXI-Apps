import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  StyleType,
} from '@kitten/theme';
import {
  TopNavigationActionProps,
  TopNavigationAction,
  TopNavigation,
} from '@kitten/ui';
import { SafeAreaView } from '@src/core/navigation';
import { QRCodeIconFill } from '@src/assets/icons';
import { routeNameDataSource } from '@src/core/navigation/options';
import { textStyle } from '..';
import { ImageProps } from 'react-native';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
  title: string;
  onQRButtonPress: () => void;
}

export type HomeHeaderProps = ThemedComponentProps & ComponentProps;

const HomeHeaderComponent: React.FunctionComponent<HomeHeaderProps> = (props) => {
  const onQRButtonPress = (): void => {
    props.onQRButtonPress();
  };

  const { themedStyle, title } = props;

  const renderQRCodeIcon = (style: StyleType): React.ReactElement<ImageProps> => {
    return QRCodeIconFill({ ...style, ...themedStyle.iconQRCode });
  };

  const renderRightControl = (): React.ReactElement<TopNavigationActionProps>[] => {
    return ([
      <TopNavigationAction
        icon={renderQRCodeIcon}
        onPress={onQRButtonPress}
      />,
    ]);
  };

  return (
    <SafeAreaView style={themedStyle.container}>
      <TopNavigation
        alignment='center'
        title={routeNameDataSource[title]}
        rightControls={renderRightControl()}
        titleStyle={themedStyle.titleStyle}
        subtitleStyle={textStyle.regular}
        style={themedStyle.topNavigation}
      />
    </SafeAreaView>
  );
};

export const HomeHeader = withStyles(HomeHeaderComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-primary-default'],
  },
  topNavigation: {
    backgroundColor: theme['color-primary-default'],
  },
  titleStyle: {
    color: 'white',
    ...textStyle.bold,
  },
  iconQRCode: {
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    tintColor: theme['background-basic-color-1'],
  },
}));

