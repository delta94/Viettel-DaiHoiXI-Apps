import React from 'react';
import {
  View,
  ViewProps,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { NotificationIcon, ProgramIcon, ThongCaoIcon } from '@src/assets/icons';

interface ComponentProps extends ViewProps {
  selected: number;
  onTabSelected: (value: number) => void;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
  btnStyle?: StyleProp<ViewStyle>;
  styleSelected?: StyleProp<ViewStyle>;
}

export type TabVerticalProps = ThemedComponentProps & ComponentProps;

const TabVerticalComponent: React.FunctionComponent<TabVerticalProps> = (props) => {

  const { themedStyle, selected, style, iconStyle, textStyle, btnStyle, styleSelected } = props;

  const onTabSelected = (value: number) => {
    props.onTabSelected(value);
  };

  return (
    <View style={[themedStyle.container, style]}>
      <ScrollView>
        <TouchableOpacity
          style={[
            themedStyle.bntProgram,
            selected === 1 ? [themedStyle.viewSelect, styleSelected] : {},
            btnStyle,
          ]}
          onPress={() => { onTabSelected(1); }}
        >
          <View style={themedStyle.viewProgram}>
            {ProgramIcon([themedStyle.iconProgram, iconStyle])}
            <Text style={[themedStyle.txt, textStyle]}>
              {'Chương trình'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            themedStyle.bntNotification,
            selected === 2 ? [themedStyle.viewSelect, styleSelected] : {},
            btnStyle,
          ]}
          onPress={() => { onTabSelected(2); }}
        >
          <View style={themedStyle.viewNotification}>
            {NotificationIcon([themedStyle.iconNotification, iconStyle])}
            <Text style={[themedStyle.txt, textStyle]}>
              {'Thông báo'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            themedStyle.bntThongCao,
            selected === 3 ? [themedStyle.viewSelect, styleSelected] : {},
            btnStyle,
          ]}
          onPress={() => { onTabSelected(3); }}
        >
          <View style={themedStyle.viewThongCao}>
            {ThongCaoIcon([themedStyle.iconThongCao, iconStyle])}
            <Text style={[themedStyle.txt, textStyle]}>
              {'Thông cáo'}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export const TabVertical = withStyles(TabVerticalComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: 'rgba(172, 32, 5, 1)',
    marginTop: pxToPercentage(12),
    marginLeft: pxToPercentage(10),
    borderRadius: pxToPercentage(8),
  },
  viewNotSelect: {
    backgroundColor: 'white',
  },
  viewSelect: {
    backgroundColor: 'rgba(138, 14, 2, 0.8)',
  },
  viewProgram: {
    width: pxToPercentage(118),
    height: pxToPercentage(72),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewNotification: {
    width: pxToPercentage(96),
    height: pxToPercentage(93.55),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewThongCao: {
    width: pxToPercentage(94),
    height: pxToPercentage(86.67),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bntProgram: {
    width: pxToPercentage(140),
    height: pxToPercentage(140),
    marginHorizontal: pxToPercentage(10),
    borderRadius: pxToPercentage(8),
    borderWidth: pxToPercentage(0.8),
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bntNotification: {
    width: pxToPercentage(140),
    height: pxToPercentage(140),
    marginTop: pxToPercentage(15),
    marginHorizontal: pxToPercentage(10),
    borderRadius: pxToPercentage(8),
    borderWidth: pxToPercentage(0.8),
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bntThongCao: {
    width: pxToPercentage(140),
    height: pxToPercentage(140),
    marginVertical: pxToPercentage(15),
    marginHorizontal: pxToPercentage(10),
    borderRadius: pxToPercentage(8),
    borderWidth: pxToPercentage(0.8),
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconProgram: {
    height: pxToPercentage(28),
    width: pxToPercentage(40),
    marginBottom: pxToPercentage(17),
    tintColor: 'white',
  },
  iconNotification: {
    height: pxToPercentage(47),
    width: pxToPercentage(41.31),
    marginBottom: pxToPercentage(17),
    tintColor: 'white',
  },
  iconThongCao: {
    height: pxToPercentage(43.36),
    width: pxToPercentage(37.81),
    marginBottom: pxToPercentage(17),
    tintColor: 'white',
  },
  txt: {
    fontSize: pxToPercentage(15),
    color: 'white',
  },
}));
