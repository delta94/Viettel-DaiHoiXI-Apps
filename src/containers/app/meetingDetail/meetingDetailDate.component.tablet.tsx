import React, {
  useState,
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
} from '@src/core/utils/utils';
import {
  ArrowPrevIcon,
  ArrowNextIcon,
} from '@src/assets/icons';
import { textStyle } from '@src/components';

interface ComponentProps {
  dateSelected: string;
  dateList: string[];
  onDatePress(date: string): void;
}

export type MeetingDetailDateTabletProps = ComponentProps & ThemedComponentProps;

const MeetingDetailDateTabletComponent: React.FunctionComponent<MeetingDetailDateTabletProps> = (props) => {
  const { themedStyle } = props;
  const [dates, setDates] = useState<string[]>(props.dateList);
  const [dateSelected, setDateSelected] = useState<string>(props.dateSelected);
  const [dateLength, setDateLengthSelected] = useState<number>(0);

  React.useEffect(() => {
    setDates(props.dateList);
  }, [props.dateList]);

  React.useEffect(() => {
    setDateSelected(props.dateSelected);
  }, [props.dateSelected]);

  const onDatePress = (date: string): void => {
    props.onDatePress(date);
  };

  const onPrevDatesPress = (): void => {
    if (dateLength - 3 >= 0) {
      setDateLengthSelected(dateLength - 3);
    } else if (dateLength - 2 === 0 || dateLength - 1 === 0) {
      setDateLengthSelected(0);
    } else { }
  };

  const onNextDatesPress = (): void => {
    if (dateLength + 3 <= dates.length - 3) {
      setDateLengthSelected(dateLength + 3);
    } else if (dateLength + 2 === dates.length - 3) {
      setDateLengthSelected(dateLength + 2);
    } else if (dateLength + 1 === dates.length - 3) {
      setDateLengthSelected(dateLength + 1);
    } else { }
  };

  const getBtnDateStyle = (dateChooseIndex: string, index: number): StyleProp<ViewStyle> => {
    const btnDateStyle = [themedStyle.btnDate, dates.length <= 3 && themedStyle.viewBtn];
    if (dateChooseIndex === dateSelected) {
      btnDateStyle.push(themedStyle.btnDateSelected);
    }
    const isLast = dates.length > 2 ? index + 1 === dateLength + 3 : index + 1 === dateLength + 2;
    if (dates[index + 1] === dateSelected || isLast) {
      btnDateStyle.push(themedStyle.btnDateNoBorder);
    }
    return btnDateStyle;
  };

  const renderBtnDates = (): React.ReactElement[] => {
    return [dateLength, dateLength + 1, dateLength + 2].map((item, index) => {
      return (
        (dates[index] &&
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => onDatePress(dates[item])}
            style={getBtnDateStyle(dates[item], item)}>
            <Text
              style={[
                themedStyle.txtDate,
                dates[item] === dateSelected && themedStyle.txtDateSelected,
              ]}>
              {dates[item]}
            </Text>
          </TouchableOpacity>)
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      {dates.length > 3 &&
        <TouchableOpacity
          onPress={() => onPrevDatesPress()}
          activeOpacity={0.75}
          style={themedStyle.btnPrevChangeDates}>
          {ArrowPrevIcon(themedStyle.iconBtnChangeDates)}
        </TouchableOpacity>}
      <View style={themedStyle.viewDates}>
        {renderBtnDates()}
      </View>
      {dates.length > 3 &&
        <TouchableOpacity
          onPress={() => onNextDatesPress()}
          activeOpacity={0.75}
          style={themedStyle.btnNextChangeDates}>
          {dates.length > 3 &&
            ArrowNextIcon(themedStyle.iconBtnChangeDates)}
        </TouchableOpacity>}
    </View>
  );
};

export const MeetingDetailDateTablet = withStyles(MeetingDetailDateTabletComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    height: pxToPercentage(86),
    justifyContent: 'flex-start',
  },
  viewDates: {
    borderWidth: pxToPercentage(2),
    borderRightWidth: pxToPercentage(2),
    borderColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(30),
    flexDirection: 'row',
  },
  btnDate: {
    width: pxToPercentage(525),
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
    borderRightWidth: 0,
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
  viewBtn: {
    width: pxToPercentage(588),
  },
}));
