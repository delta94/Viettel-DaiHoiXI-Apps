import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ImageStyle,
  ViewStyle,
  Alert,
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
  month: number;
  year: number;
  selected: number;
  onDateSelected: (value: number) => void;
  onIncrementDate: () => void;
  onDecrementDate: () => void;
}

export type DatePickerProps = ThemedComponentProps & ComponentProps;

const DatePickerComponent: React.FunctionComponent<DatePickerProps> = (props) => {
  const { themedStyle, style, iconStyle, styleSelected } = props;

  const checkDate = (date: number) => {
    if ([1, 3, 5, 7, 8, 10, 12].indexOf(props.month) !== -1) {
      if (date > 31) {
        return date % 31;
      }
    } else if (props.month === 2) {
      if (date > 29) {
        return date % 29;
      }
    } else {
      if (date > 30) {
        return date % 30;
      }
    }
    return date;
  };

  const checkMonth = (date: number) => {
    if ([1, 3, 5, 7, 8, 10, 12].indexOf(props.month) !== -1) {
      if (date > 31) {
        if (props.month + 1 > 12) {
          return 1;
        }
        return props.month + 1;
      }
    } else if (props.month === 2) {
      if (date > 29) {
        return props.month + 1;
      }
    } else {
      if (date > 30) {
        return props.month + 1;
      }
    }
    return props.month;
  };

  const checkYear = (date: number) => {
    if (checkMonth(date) === 1 && props.month === 12) {
      return props.year + 1;
    }
    return props.year;
  };

  const onDateSelected = (value: number): void => {
    props.onDateSelected(value);
  };

  const onIncrementDate = (): void => {
    props.onIncrementDate();
  };

  const onDecrementDate = (): void => {
    props.onDecrementDate();
  };

  return (
    <View style={themedStyle.container}>
      <TouchableOpacity
        onPress={onDecrementDate}
      >
        {LeftArrowIcon([themedStyle.iconLeftArrow, iconStyle])}
      </TouchableOpacity>
      <View style={themedStyle.viewBody}>
        <View style={[
          themedStyle.viewDate,
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
              {checkDate(props.day) + '/' + checkMonth(props.day) + '/' + checkYear(props.day)}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[
          themedStyle.viewDate,
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
              {checkDate(props.day + 1) + '/' + checkMonth(props.day + 1) + '/' + checkYear(props.day + 1)}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[
          [themedStyle.viewDate, themedStyle.viewDate3],
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
              {checkDate(props.day + 2) + '/' + checkMonth(props.day + 2) + '/' + checkYear(props.day + 2)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={onIncrementDate}
      >
        {RightArrowIcon([themedStyle.iconRightArrow, iconStyle])}
      </TouchableOpacity>
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
    tintColor: 'rgba(172, 32, 5, 1)',
  },
  iconLeftArrow: {
    width: pxToPercentage(21),
    height: pxToPercentage(19),
    tintColor: 'rgba(172, 32, 5, 1)',
  },
  viewBody: {
    flex: 1,
    flexDirection: 'row',
    height: pxToPercentage(30),
  },
  viewDate: {
    flex: 1,
    marginLeft: pxToPercentage(5),
    borderRadius: pxToPercentage(7),
    borderWidth: pxToPercentage(0.5),
    borderColor: 'red',
  },
  viewDate3: {
    marginRight: pxToPercentage(5),
  },
}));
