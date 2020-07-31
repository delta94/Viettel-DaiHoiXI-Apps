import React, {
  useState,
  useEffect,
} from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  StyleProp,
  TouchableOpacity,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {
  pxToPercentage,
  addDays,
  minusDays,
} from '@src/core/utils/utils';
import {
  ArrowPrevIcon,
  ArrowNextIcon,
} from '@src/assets/icons';
import { ddMMyyyyFormatter } from '@src/core/formatters';
import { textStyle } from '@src/components';

interface ComponentProps {
  dateSelected: Date;
  numDates: number;
  onDatePress: (date: Date) => void;
  dateList: string[];
}

export type DateSelectorTabletProps = ComponentProps & ThemedComponentProps;

const DateSelectorTabletComponent: React.FunctionComponent<DateSelectorTabletProps> = (props) => {
  const { themedStyle } = props;
  const [dates, setDates] = useState<Date[]>([]);
  const [dateSelected, setDateSelected] = useState<number>(0);
  0;

  const onDatePress = (date: number): void => {
    setDateSelected(date);
  };

  // sẽ xử lý sau khi chốt tối đa bao nhiêu ngày trong 1 cuộc họp
  // const onPrevDatesPress = (): void => {
  // };

  // const onNextDatesPress = (): void => {
  // };

  const getBtnDateStyle = (dateChooseIndex: number, index: number): StyleProp<ViewStyle> => {
    const btnDateStyle = [themedStyle.btnDate];

    if (dateChooseIndex === dateSelected) {
      btnDateStyle.push(themedStyle.btnDateSelected);
    }

    if (dateChooseIndex + 1 === dateSelected || index + 1 === dates.length) {
      btnDateStyle.push(themedStyle.btnDateNoBorder);
    }
    return btnDateStyle;
  };

  const renderBtnDates = (): React.ReactElement[] => {
    return props.dateList.map((item, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => onDatePress(index)}
          style={getBtnDateStyle(index, index)}>
          <Text
            style={[
              themedStyle.txtDate,
              index === dateSelected && themedStyle.txtDateSelected,
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewDates}>
        {renderBtnDates()}
      </View>
    </View>
  );
};

export const DateListTablet = withStyles(DateSelectorTabletComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    height: pxToPercentage(86),
  },
  viewDates: {
    flex: 1,
    borderWidth: pxToPercentage(2),
    borderRightWidth: pxToPercentage(2),
    borderColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(30),
    flexDirection: 'row',
  },
  btnDate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxToPercentage(30),
    borderRightWidth: pxToPercentage(2),
    borderColor: theme['color-primary-2'],
  },
  btnDateNoBorder: {
    borderRightWidth: 0,
  },
  btnDateSelected: {
    borderRadius: pxToPercentage(30),
    backgroundColor: theme['color-primary-2'],
  },
  txtDate: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  txtDateSelected: {
    color: theme['color-custom-100'],
  },
  btnPrevChangeDates: {
    justifyContent: 'center',
    width: pxToPercentage(100),
  },
  btnNextChangeDates: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: pxToPercentage(100),
  },
  iconBtnChangeDates: {
    width: pxToPercentage(50),
    height: pxToPercentage(46),
  },
}));
