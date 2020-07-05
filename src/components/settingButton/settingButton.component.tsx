import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ImageProps,
  Text,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
  StyleType,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { IconElement } from '@src/assets/icons/icon.component';
import { ArrowForwardIcon } from '@src/assets/icons';
import { textStyle } from '../textStyle';

interface ComponentProps extends TouchableOpacityProps {
  title: string;
  iconLeft?: IconProp;
}

export type SettingButtonProps = ComponentProps & ThemedComponentProps;

type IconProp = (style: StyleType) => React.ReactElement<ImageProps>;

const SettingButtonComponent: React.FunctionComponent<SettingButtonProps> = (props) => {
  const { themedStyle, style, ...restProps } = props;

  const iconLeft = (): IconElement => {
    return props.iconLeft(themedStyle.iconLeft);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[
        themedStyle.container,
        style,
      ]}
      {...restProps}>
      {props.iconLeft &&
        (<View style={themedStyle.viewLeft}>
          {iconLeft()}
        </View>)}
      <View style={themedStyle.viewCenter}>
        <Text style={themedStyle.txtTitle}>
          {props.title}
        </Text>
      </View>
      <View style={themedStyle.viewRight}>
        {ArrowForwardIcon(themedStyle.iconRight)}
      </View>
    </TouchableOpacity>
  );
};


export const SettingButton = withStyles(SettingButtonComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    height: pxToPercentage(45),
    marginTop: pxToPercentage(5),
    paddingLeft: pxToPercentage(4),
    borderTopWidth: pxToPercentage(1),
    borderBottomWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
  },
  viewLeft: {
    width: pxToPercentage(27.5),
    height: pxToPercentage(35),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  viewCenter: {
    flex: 1,
    paddingLeft: pxToPercentage(7.5),
    height: pxToPercentage(35),
    justifyContent: 'center',
  },
  viewRight: {
    width: pxToPercentage(40),
    height: pxToPercentage(35),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  iconLeft: {
    height: pxToPercentage(20),
    width: pxToPercentage(20),
  },
  iconRight: {
    height: pxToPercentage(25),
    width: pxToPercentage(25),
    opacity: 0.5,
  },
  txtTitle: {
    fontSize: pxToPercentage(14),
    ...textStyle.regular,
  },
}));
