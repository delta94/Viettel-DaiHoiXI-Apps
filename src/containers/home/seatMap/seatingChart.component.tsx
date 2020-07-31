import React from 'react';
import {
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import Pdf from 'react-native-pdf';

interface ComponentProps {
  source: object;
}

export type SeatingChartProps = ThemedComponentProps & ComponentProps;

const SeatingChartComponent: React.FunctionComponent<SeatingChartProps> = (props) => {
  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <Pdf
          source={props.source}
          style={themedStyle.pdf}
        />
      </View>
    </View>
  );
};

export const SeatingChart = withStyles(SeatingChartComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-2'],
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(40),
    paddingVertical: pxToPercentage(40),
    backgroundColor: theme['color-custom-100'],
    justifyContent: 'center',
    alignItems: 'center',
    ...viewStyle.shadow2,
  },
  pdf: {
    backgroundColor: theme['color-custom-100'],
    width: pxToPercentage(375),
    height: pxToPercentage(750),
  },
}));
