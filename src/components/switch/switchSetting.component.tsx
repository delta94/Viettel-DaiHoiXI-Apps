import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  StyleType,
} from '@kitten/theme';
import {
  View,
  StyleProp,
  TextStyle,
  Text,
  ImageProps,
  ImageStyle,
  ViewProps,
  TouchableOpacity,
} from 'react-native';
import {
  pxToPercentage,
} from '@src/core/utils/utils';
import { textStyle } from '../textStyle';
import {
  ArrowNextIcon,
  ArrowPrevIcon,
} from '@src/assets/icons';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  icon?: IconProp;
  iconStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export type SwitchSettingProps = ComponentProps & ThemedComponentProps & ViewProps;

type IconProp = (style: StyleType) => React.ReactElement<ImageProps>;

const SwitchSettingComponent: React.FunctionComponent<SwitchSettingProps> = (props) => {
  const { themedStyle, style, titleStyle, iconStyle, ...restProps } = props;
  const [state, setstate] = React.useState(true);


  return (
    <View style={themedStyle.container}>
      <Text style={themedStyle.txt}>
        {'Chuyển mạng kết nối'}
      </Text>
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          themedStyle.btnSwitch,
          !state && themedStyle.btnChange,
        ]}
        onPress={() => setstate(!state)}
      >
        {state
          ? <View style={themedStyle.viewIcon}>
            {ArrowNextIcon(themedStyle.icon)}
          </View>
          : <Text style={[
            themedStyle.txtTitle,
            !state && themedStyle.txtChange,
          ]}>
            {'Internet'}
          </Text>
        }
        {state
          ? <Text style={themedStyle.txtTitle}>
            {'Nội bộ'}
          </Text>
          : <View style={[
            themedStyle.viewIcon,
            !state && themedStyle.iconChange,
          ]}>
            {ArrowPrevIcon(themedStyle.icon)}
          </View>
        }
      </TouchableOpacity>
    </View>
  );
};

export const SwitchSetting = withStyles(SwitchSettingComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(70),
  },
  txt: {
    ...textStyle.proTextRegular,
    fontSize: isTablet() ? pxToPercentage(30) : pxToPercentage(18),
    color: theme['color-custom-100'],
  },
  txtTitle: {
    fontSize: isTablet() ? pxToPercentage(30) : pxToPercentage(16),
    ...textStyle.proTextRegular,
    color: theme['color-primary-2'],
  },
  btnSwitch: {
    marginLeft: pxToPercentage(20),
    width: isTablet() ? pxToPercentage(194) : pxToPercentage(120),
    height: isTablet() ? pxToPercentage(70) : pxToPercentage(48),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme['color-custom-100'],
    borderWidth: pxToPercentage(1),
    borderColor: theme['color-custom-900'],
    borderRadius: pxToPercentage(40),
  },
  viewIcon: {
    marginHorizontal: pxToPercentage(8),
    justifyContent: 'center',
    alignItems: 'center',
    width: isTablet() ? pxToPercentage(54) : pxToPercentage(36),
    height: isTablet() ? pxToPercentage(54) : pxToPercentage(36),
    borderRadius: pxToPercentage(50),
    borderColor: theme['color-custom-900'],
    borderWidth: pxToPercentage(1),
  },
  icon: {
    tintColor: theme['color-custom-900'],
    width: isTablet() ? pxToPercentage(26.09) : pxToPercentage(20),
    height: isTablet() ? pxToPercentage(24) : pxToPercentage(20),
  },
  btnChange: {
    backgroundColor: theme['color-custom-900'],
  },
  txtChange: {
    color: theme['color-custom-100'],
    marginLeft: pxToPercentage(6),
  },
  iconChange: {
    backgroundColor: theme['color-custom-100'],
  },
}));
