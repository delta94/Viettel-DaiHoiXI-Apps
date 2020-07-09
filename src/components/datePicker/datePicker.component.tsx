import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ImageStyle,
  ViewStyle,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { RightArrowIcon, LeftArrowIcon } from '@src/assets/icons';

interface ComponentProps {
  iconStyle?: StyleProp<ImageStyle>;
  style?: StyleProp<ViewStyle>;
  styleSelected?: StyleProp<ViewStyle>;
  day: number;
  selected: number;
  onDateSelected: (value: number) => void;
}

export type DatePickerProps = ThemedComponentProps & ComponentProps;

const DatePickerComponent: React.FunctionComponent<DatePickerProps> = (props) => {
  const { themedStyle, style, iconStyle, styleSelected } = props;
  const day = props.day;
  const [month, setMonth] = useState((new Date()).getMonth() + 1);
  const year = (new Date()).getFullYear();

  const onDateSelected = (value: number) => {
    props.onDateSelected(value);
  };

  return (
    <View style={themedStyle.container}>
      {LeftArrowIcon([themedStyle.iconLeftArrow, iconStyle])}
      <View style={themedStyle.viewBody}>
        <View style={[
          themedStyle.viewDate1,
          props.selected === 1 ? [themedStyle.viewSelected, styleSelected] : {},
          style,
        ]}>
          <TouchableOpacity
            style={themedStyle.bntDate}
            onPress={() => { onDateSelected(1); }}
          >
            <Text
              style={[
                themedStyle.txtDate,
                props.selected === 1 ? themedStyle.txtSelected : {},
              ]}>
              {day + '/' + month + '/' + year}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[
          themedStyle.viewDate2,
          props.selected === 2 ? [themedStyle.viewSelected, styleSelected] : {},
          style,
        ]}>
          <TouchableOpacity
            style={themedStyle.bntDate}
            onPress={() => { onDateSelected(2); }}>
            <Text style={[
              themedStyle.txtDate,
              props.selected === 2 ? themedStyle.txtSelected : {},
            ]}>
              {(day + 1) + '/' + month + '/' + year}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[
          themedStyle.viewDate3,
          props.selected === 3 ? [themedStyle.viewSelected, styleSelected] : {},
          style,
        ]}>
          <TouchableOpacity
            style={themedStyle.bntDate}
            onPress={() => { onDateSelected(3); }}>
            <Text style={[
              themedStyle.txtDate,
              props.selected === 3 ? themedStyle.txtSelected : {},
            ]}>
              {(day + 2) + '/' + month + '/' + year}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {RightArrowIcon([themedStyle.iconRightArrow, iconStyle])}
    </View >
  );
};

export const DatePicker = withStyles(DatePickerComponent, (theme: ThemeType) => ({
  container: {
    width: '100%',
    height: pxToPercentage(30),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: pxToPercentage(10),
  },
  viewSelected: {
    backgroundColor: 'rgba(172, 32, 5, 1)',
    borderRadius: pxToPercentage(7),
    borderWidth: null,
  },
  bntDate: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(30),
  },
  txtDate: {
    fontSize: pxToPercentage(13),
  },
  txtSelected: {
    color: 'white',
  },
  iconRightArrow: {
    width: pxToPercentage(21),
    height: pxToPercentage(19),
    tintColor: 'red',
  },
  iconLeftArrow: {
    width: pxToPercentage(21),
    height: pxToPercentage(19),
    tintColor: 'red',
  },
  viewBody: {
    flex: 1,
    flexDirection: 'row',
    height: pxToPercentage(30),
  },
  viewDate1: {
    flex: 1,
    marginLeft: pxToPercentage(5),
    borderRadius: pxToPercentage(7),
    borderWidth: pxToPercentage(0.5),
    borderColor: 'red',
  },
  viewDate2: {
    flex: 1,
    marginLeft: pxToPercentage(5),
    borderRadius: pxToPercentage(7),
    borderWidth: pxToPercentage(0.5),
    borderColor: 'red',
  },
  viewDate3: {
    flex: 1,
    marginLeft: pxToPercentage(5),
    marginRight: pxToPercentage(5),
    borderRadius: pxToPercentage(7),
    borderWidth: pxToPercentage(0.5),
    borderColor: 'red',
  },
}));
