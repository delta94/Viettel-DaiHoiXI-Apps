import React from 'react';
import {
  ListItem,
  ListItemProps,
} from '@kitten/ui';
import { Text } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  pressRelease: PressReleaseModel;
}

export type PressReleaseItemProps = ThemedComponentProps & ComponentProps & ListItemProps;

const PressReleaseItemComponent: React.FunctionComponent<PressReleaseItemProps> = (props) => {
  const { style, themedStyle, pressRelease, ...restProps } = props;

  return (
    <ListItem
      activeOpacity={0.75}
      {...restProps}
      style={[
        themedStyle.container,
        style,
      ]}>
      <Text
        style={[
          themedStyle.txtTitle,
          pressRelease.read && themedStyle.txtRead,
        ]}>
        {pressRelease.title}
      </Text>
      <Text
        style={[
          themedStyle.txtDate,
          pressRelease.read && themedStyle.txtRead,
        ]}>
        {pressRelease.date}
      </Text>
    </ListItem>
  );
};

export const PressReleaseItem = withStyles(PressReleaseItemComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: pxToPercentage(8),
    marginHorizontal: pxToPercentage(16),
    paddingHorizontal: pxToPercentage(9),
    paddingVertical: pxToPercentage(9),
    borderRadius: pxToPercentage(4),
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
  },
  txtRead: {
    color: theme['text-hint-color'],
  },
  txtTitle: {
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-basic-color'],
    textAlign: 'justify',
    ...textStyle.regular,
  },
  txtDate: {
    alignSelf: 'flex-end',
    marginTop: pxToPercentage(2),
    fontSize: isTablet() ? pxToPercentage(7.5) : pxToPercentage(12),
    color: theme['text-basic-color'],
    ...textStyle.regular,
  },
}));
