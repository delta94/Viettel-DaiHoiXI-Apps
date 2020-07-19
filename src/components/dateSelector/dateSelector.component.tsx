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
import { textStyle } from '../textStyle';
import { ddMMyyyyFormatter } from '@src/core/formatters';

interface ComponentProps {
  dateSelected: Date;
  numDates: number;
  onDatePress: (date: Date) => void;
}

export type DateSelectorProps = ComponentProps & ThemedComponentProps;

const DateSelectorComponent: React.FunctionComponent<DateSelectorProps> = (props) => {
  const { themedStyle } = props;
  const [dates, setDates] = useState<Date[]>([]);
  const [dateSelected, setDateSelected] = useState<Date>(props.dateSelected);

  useEffect(() => {
    onInitDates();
  }, []);

  const onInitDates = (): void => {
    const datesTemp: Date[] = [];

    for (let i = 0; i < props.numDates; i++) {
      datesTemp.push(addDays(props.dateSelected, i));
    }

    setDates([...datesTemp]);
  };

  const onDatePress = (date: Date): void => {
    setDateSelected(date);
  };

  const onPrevDatesPress = (): void => {
    setDates(prevState => prevState.map(value => minusDays(value, props.numDates)));
  };

  const onNextDatesPress = (): void => {
    setDates(prevState => prevState.map(value => addDays(value, props.numDates)));
  };

  const equalDate = (firstDate: Date, secondDate: Date): boolean => {
    return ddMMyyyyFormatter(firstDate) === ddMMyyyyFormatter(secondDate);
  };

  const getBtnDateStyle = (date: Date, index: number): StyleProp<ViewStyle> => {
    const btnDateStyle = [themedStyle.btnDate];

    if (equalDate(date, dateSelected)) {
      btnDateStyle.push(themedStyle.btnDateSelected);
    }

    if (equalDate(addDays(date, 1), dateSelected) || index + 1 === dates.length) {
      btnDateStyle.push(themedStyle.btnDateNoBorder);
    }

    return btnDateStyle;
  };

  const renderBtnDates = (): React.ReactElement[] => {
    return dates.map((item, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => onDatePress(item)}
          style={getBtnDateStyle(item, index)}>
          <Text
            style={[
              themedStyle.txtDate,
              equalDate(item, dateSelected) && themedStyle.txtDateSelected,
            ]}>
            {ddMMyyyyFormatter(item)}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPrevDatesPress}
        style={themedStyle.btnPrevChangeDates}>
        {ArrowPrevIcon(themedStyle.iconBtnChangeDates)}
      </TouchableOpacity>
      <View style={themedStyle.viewDates}>
        {renderBtnDates()}
      </View>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onNextDatesPress}
        style={themedStyle.btnNextChangeDates}>
        {ArrowNextIcon(themedStyle.iconBtnChangeDates)}
      </TouchableOpacity>
    </View>
  );
};

export const DateSelector = withStyles(DateSelectorComponent, (theme: ThemeType) => ({
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
