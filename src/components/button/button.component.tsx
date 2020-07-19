import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  StyleType,
} from '@kitten/theme';
import {
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  Text,
  ImageProps,
  ImageStyle,
} from 'react-native';
import {
  pxToPercentage,
  isEmpty,
} from '@src/core/utils/utils';
import { textStyle } from '../textStyle';
import { IconElement } from '@src/assets/icons/icon.component';
import { viewStyle } from '../viewStyle';

interface ComponentProps extends TouchableOpacityProps {
  title: string;
  icon?: IconProp;
  iconStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export type ButtonProps = ComponentProps & ThemedComponentProps;

type IconProp = (style: StyleType) => React.ReactElement<ImageProps>;

const ButtonComponent: React.FunctionComponent<ButtonProps> = (props) => {
  const { themedStyle, style, titleStyle, iconStyle, ...restProps } = props;

  const icon = (): IconElement => {
    if (props.icon) {
      return props.icon([
        themedStyle.icon,
        iconStyle,
        !isEmpty(props.title) && themedStyle.iconMarginRight,
      ]);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      {...restProps}
      style={[
        themedStyle.container,
        style,
      ]}>
      {icon()}
      <Text
        style={[
          themedStyle.txtTitle,
          titleStyle,
        ]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export const Button = withStyles(ButtonComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(80),
    paddingHorizontal: pxToPercentage(24),
    borderRadius: pxToPercentage(28),
    backgroundColor: theme['color-primary-0'],
    ...viewStyle.shadow2,
  },
  txtTitle: {
    fontSize: pxToPercentage(34),
    color: theme['color-primary-2'],
    ...textStyle.proDisplayBold,
  },
  icon: {
    height: pxToPercentage(50),
    width: pxToPercentage(50),
    tintColor: theme['color-primary-2'],
  },
  iconMarginRight: {
    marginRight: pxToPercentage(24),
  },
}));
