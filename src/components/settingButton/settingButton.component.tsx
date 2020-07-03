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
import { isTablet } from 'react-native-device-info';

interface ComponentProps extends TouchableOpacityProps {
  title: string;
  iconLeft?: IconProp;
}
export type SettingButtonProps = ComponentProps & ThemedComponentProps;

type IconProp = (style: StyleType) => React.ReactElement<ImageProps>;

const SettingButtonComponent: React.FunctionComponent<SettingButtonProps> = (props) => {
  const { themedStyle, style } = props;

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
    >
      <View
        style={[themedStyle.viewLeft,
        !props.iconLeft ? themedStyle.viewLeftNoIcon : {},
        ]}>
        {props.iconLeft && iconLeft()}
      </View>
      <View
        style={[themedStyle.viewCenter,
        !props.iconLeft ? themedStyle.viewCenterNoIcon : {},
        ]}>
        <Text style={themedStyle.txtTitle}>
          {props.title}
        </Text>
      </View>
      <View
        style={[themedStyle.viewRight,
        ]}>
        {ArrowForwardIcon(themedStyle.iconRight)}
      </View>
    </TouchableOpacity>
  );
};


export const SettingButton = withStyles(SettingButtonComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    height: isTablet() ? pxToPercentage(30) : pxToPercentage(35),
    marginTop: pxToPercentage(5),
    borderRadius: isTablet() ? pxToPercentage(3) : pxToPercentage(7),
    marginHorizontal: pxToPercentage(4),
  },
  viewLeft: {
    width: pxToPercentage(40),
    height: pxToPercentage(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewLeftNoIcon: {
    width: isTablet() ? pxToPercentage(10) : pxToPercentage(7.5),
  },
  viewCenter: {
    width: pxToPercentage(375) - pxToPercentage(155),
    height: pxToPercentage(30),
    justifyContent: 'center',
  },
  viewCenterNoIcon: {
    width: isTablet() ? pxToPercentage(375) - pxToPercentage(125) : pxToPercentage(375) - pxToPercentage(122.5),
  },
  viewRight: {
    flexDirection: 'row',
    width: pxToPercentage(115),
    height: pxToPercentage(30),
    paddingRight: pxToPercentage(7),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconLeft: {
    height: isTablet() ? pxToPercentage(20) : pxToPercentage(25),
    width: isTablet() ? pxToPercentage(20) : pxToPercentage(25),
  },
  iconRight: {
    height: pxToPercentage(29),
    width: pxToPercentage(29),
    opacity: 0.5,
    marginRight: pxToPercentage(10),
  },
  txtTitle: {
    fontSize: isTablet() ? pxToPercentage(12) : pxToPercentage(14),
  },
}));
