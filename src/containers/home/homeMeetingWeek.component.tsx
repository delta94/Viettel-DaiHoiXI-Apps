import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import {
  ArrowForwardIcon,
  ArrowIosBackFill,
} from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
  currentWeek: number;
  onNextWeekPress: () => void;
  onPrevWeekPress: () => void;
}

export type HomeMeetingWeekProps = ThemedComponentProps & ComponentProps;

const HomeMeetingWeekComponent: React.FunctionComponent<HomeMeetingWeekProps> = (props) => {
  const { themedStyle } = props;

  const onNextWeekPress = (): void => {
    props.onNextWeekPress();
  };

  const onPrevWeekPress = (): void => {
    props.onPrevWeekPress();
  };

  return (
    <View style={themedStyle.container}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPrevWeekPress}
        style={themedStyle.btnCircle}>
        {ArrowIosBackFill(themedStyle.btnCircleIcon)}
      </TouchableOpacity>
      <View style={themedStyle.viewCenter}>
        <View style={themedStyle.viewWeek}>
          <Text style={themedStyle.txtWeek}>
            {`Tuần ${props.currentWeek}`}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onNextWeekPress}
        style={themedStyle.btnCircle}>
        {ArrowForwardIcon(themedStyle.btnCircleIcon)}
      </TouchableOpacity>
    </View>
  );
};

export const HomeMeetingWeek = withStyles(HomeMeetingWeekComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    alignContent: 'space-between',
    padding: pxToPercentage(16),
  },
  iconLogout: {
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    tintColor: 'red',
  },
  btnCircle: {
    width: pxToPercentage(30),
    height: pxToPercentage(30),
    borderRadius: pxToPercentage(15),
    borderWidth: pxToPercentage(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme['color-primary-2'],
  },
  btnCircleIcon: {
    width: pxToPercentage(23),
    height: pxToPercentage(23),
    tintColor: theme['color-primary-2'],
  },
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewWeek: {
    width: pxToPercentage(120),
    height: pxToPercentage(30),
    borderRadius: pxToPercentage(15),
    borderWidth: pxToPercentage(1),
    justifyContent: 'center',
    borderColor: theme['color-primary-2'],
  },
  txtWeek: {
    fontSize: pxToPercentage(13),
    ...textStyle.proTextSemibold,
    textAlign: 'center',
    color: theme['color-primary-2'],
  },
}));
