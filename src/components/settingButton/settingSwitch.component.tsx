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
import { textStyle } from '..';

interface ComponentProps {
  title: string;
}

export type SettingSwitchProps = ComponentProps & ThemedComponentProps & ViewProps;

const SettingSwitchComponent: React.FunctionComponent<SettingSwitchProps> = (props) => {
  const { themedStyle, style, ...restProps } = props;
  const [isEnable, setIsEnable] = useState(false);

  const toggleSwitch = () => {
    setIsEnable(!isEnable);
  };

  return (
    <View
      style={[
        themedStyle.container,
        style,
      ]}
      {...restProps}>
      <View style={themedStyle.viewLeft}>
        <Text style={themedStyle.txtTitle}>
          {props.title}
        </Text>
      </View>
      <View style={themedStyle.viewRight}>
        <Switch
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
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    height: pxToPercentage(45),
    marginTop: pxToPercentage(5),
    paddingHorizontal: pxToPercentage(4),
    paddingRight: pxToPercentage(8),
    borderTopWidth: pxToPercentage(1),
    borderBottomWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
  },
  viewLeft: {
    flex: 1,
    paddingLeft: pxToPercentage(7.5),
    height: pxToPercentage(35),
    justifyContent: 'center',
  },
  viewRight: {
    width: pxToPercentage(100),
    height: pxToPercentage(35),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  txtTitle: {
    fontSize: pxToPercentage(14),
    ...textStyle.regular,
  },
}));
