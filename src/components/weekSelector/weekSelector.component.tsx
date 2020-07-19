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
import { pxToPercentage } from '@src/core/utils/utils';
import {
  ArrowPrevIcon,
  ArrowNextIcon,
} from '@src/assets/icons';
import { textStyle } from '../textStyle';

interface ComponentProps {
  weekSelected: number;
  numWeeks: number;
  onWeekPress: (week: number) => void;
}

export type WeekSelectorProps = ComponentProps & ThemedComponentProps;

const WeekSelectorComponent: React.FunctionComponent<WeekSelectorProps> = (props) => {
  const { themedStyle } = props;
  const [weeks, setWeeks] = useState<number[]>([]);
  const [weekSelected, setWeekSelected] = useState<number>(props.weekSelected);

  useEffect(() => {
    onInitWeeks();
  }, []);

  const onInitWeeks = (): void => {
    const weeksTemp: number[] = [];
    let quotient: number = Math.floor(props.weekSelected / props.numWeeks);
    const remainder: number = props.weekSelected % props.numWeeks;

    if (remainder === 0) {
      quotient = (quotient - 1) * props.numWeeks;
    } else {
      quotient *= props.numWeeks;
    }

    for (let i = 0; i < props.numWeeks; i++) {
      weeksTemp.push(quotient + i + 1);
    }

    setWeeks([...weeksTemp]);
  };

  const onWeekPress = (week: number): void => {
    setWeekSelected(week);
  };

  const onPrevWeeksPress = (): void => {
    if (weeks[0] !== 1) {
      setWeeks(prevState => prevState.map(value => value - props.numWeeks));
    }
  };

  const onNextWeeksPress = (): void => {
    if (weeks[weeks.length - 1] !== 36) {
      setWeeks(prevState => prevState.map(value => value + props.numWeeks));
    }
  };

  const getBtnWeekStyle = (week: number, index: number): StyleProp<ViewStyle> => {
    const btnWeekStyle = [themedStyle.btnWeek];

    if (week === weekSelected) {
      btnWeekStyle.push(themedStyle.btnWeekSelected);
    }

    if (week + 1 === weekSelected || index + 1 === weeks.length) {
      btnWeekStyle.push(themedStyle.btnWeekNoBorder);
    }

    return btnWeekStyle;
  };

  const renderBtnWeeks = (): React.ReactElement[] => {
    return weeks.map((item, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => onWeekPress(item)}
          style={getBtnWeekStyle(item, index)}>
          <Text
            style={[
              themedStyle.txtWeek,
              item === weekSelected && themedStyle.txtWeekSelected,
            ]}>
            {`Tuần ${item}`}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPrevWeeksPress}
        style={themedStyle.btnPrevChangeWeeks}>
        {ArrowPrevIcon(themedStyle.iconBtnChangeWeeks)}
      </TouchableOpacity>
      <View style={themedStyle.viewWeeks}>
        {renderBtnWeeks()}
      </View>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onNextWeeksPress}
        style={themedStyle.btnNextChangeWeeks}>
        {ArrowNextIcon(themedStyle.iconBtnChangeWeeks)}
      </TouchableOpacity>
    </View>
  );
};

export const WeekSelector = withStyles(WeekSelectorComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    height: pxToPercentage(86),
  },
  viewWeeks: {
    flex: 1,
    borderWidth: pxToPercentage(2),
    borderRightWidth: pxToPercentage(2),
    borderColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(30),
    flexDirection: 'row',
  },
  btnWeek: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxToPercentage(30),
    borderRightWidth: pxToPercentage(2),
    borderColor: theme['color-primary-2'],
  },
  btnWeekNoBorder: {
    borderRightWidth: 0,
  },
  btnWeekSelected: {
    borderRadius: pxToPercentage(30),
    backgroundColor: theme['color-primary-2'],
  },
  txtWeek: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  txtWeekSelected: {
    color: theme['color-custom-100'],
  },
  btnPrevChangeWeeks: {
    justifyContent: 'center',
    width: pxToPercentage(100),
  },
  btnNextChangeWeeks: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: pxToPercentage(100),
  },
  iconBtnChangeWeeks: {
    width: pxToPercentage(50),
    height: pxToPercentage(46),
  },
}));
