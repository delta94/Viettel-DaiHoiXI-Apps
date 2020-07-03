import React, { useState } from 'react';
import {
  View,
  Text,
  ViewProps,
} from 'react-native';
import {
  withStyles,
  ThemeType,
  ThemedComponentProps,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { Switch } from 'react-native-gesture-handler';
import { isTablet } from 'react-native-device-info';
interface ComponentProps {
  title: string;
}
export type SettingSwitchProps = ComponentProps & ThemedComponentProps & ViewProps;

const SettingSwitchComponent: React.FunctionComponent<SettingSwitchProps> = (props) => {
  const { themedStyle, style } = props;
  const [isEnable, setIsEnable] = useState(false);

  const toggleSwitch = () => {
    setIsEnable(!isEnable);
  };

  return (
    <View style={[themedStyle.container, style]}>
      <View style={themedStyle.viewLeft}>
        <Text style={themedStyle.txtTitle}>
          {props.title}
        </Text>
      </View>
      <View style={themedStyle.viewRight}>
        <Switch
          style={themedStyle.switch}
          value={isEnable}
          onValueChange={toggleSwitch}
        />
      </View>
    </View>
  );
};


export const SettingSwitch = withStyles(SettingSwitchComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    height: isTablet() ? pxToPercentage(30) : pxToPercentage(35), //
    marginTop: pxToPercentage(5),
    borderRadius: isTablet() ? pxToPercentage(3) : pxToPercentage(7),
    marginHorizontal: pxToPercentage(4),
  },
  viewLeft: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: isTablet() ? pxToPercentage(10) : pxToPercentage(7.5),
  },
  viewRight: {
    flexDirection: 'row',
    width: pxToPercentage(50),
    height: pxToPercentage(30),
    paddingRight: isTablet() ? pxToPercentage(10) : pxToPercentage(1),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: isTablet() ? pxToPercentage(12) : pxToPercentage(14),
  },
  switch: {
    transform: isTablet() ? [{ scaleX: 1.5 }, { scaleY: 1.5 }] : [{ scaleX: 1.1 }, { scaleY: 1.1 }], //
  },
}));
