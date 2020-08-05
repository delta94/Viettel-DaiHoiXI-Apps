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
import { BackHeader } from '@src/components/header/backHeader.component';
import Pdf from 'react-native-pdf';

interface ComponentProps {
  onBackPress: () => void;
  source: object;
}

export type SeatingChartTabletProps = ThemedComponentProps & ComponentProps;

const SeatingChartTabletComponent: React.FunctionComponent<SeatingChartTabletProps> = (props) => {
  const { themedStyle } = props;

  const onMessagePress = (): void => {
  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {

  };

  return (
    <View style={themedStyle.container}>
      <BackHeader
        title={'SƠ ĐỒ CHỖ NGỒI'}
        onBackPress={onBackPress}
        onHelpPress={onHelpPress}
        onMessagePress={onMessagePress}
      />
      <View style={themedStyle.viewCard}>
        <Pdf
          source={props.source}
          style={themedStyle.pdf}
        />
      </View>
    </View>
  );
};

export const SeatingChartTablet = withStyles(SeatingChartTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
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
    width: '100%',
    height: '100%',
    backgroundColor: theme['color-custom-100'],
    // width: pxToPercentage(1640),
    // height: pxToPercentage(902),
  },
}));
