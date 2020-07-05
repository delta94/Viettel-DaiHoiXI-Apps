import React, { useState } from 'react';
import {
  ListItemProps,
} from '@kitten/ui/';
import { Text, View, Dimensions} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { Programmation } from '@src/core/models/programmation/programe.model';
import { isTablet } from 'react-native-device-info';
interface ComponentProps {
  programmation: Programmation;
}
export type ProgrammeItemProps = ThemedComponentProps & ComponentProps & ListItemProps;

const ProgrammeItemComponent: React.FunctionComponent<ProgrammeItemProps> = (props) => {
  const { style, themedStyle, programmation, ...restProps } = props;

  return (
    <View style={[themedStyle.container]}>
      <View style={[themedStyle.directionView]}>
        <View style={themedStyle.placeTimeView}>
        <Text style={themedStyle.txtTime}>-</Text>
        </View>
        <View style={[themedStyle.timeView]} >
          <Text style={themedStyle.txtTime}>
            {programmation.fromTime}
          </Text>
          <Text style={themedStyle.txtTime}>
            {programmation.toTime}
          </Text>
        </View>
        <View style={themedStyle.timelineView} >
          <View style={themedStyle.lineView}>
          </View>
          <View style={themedStyle.viewIcon}>
            <View style={themedStyle.viewDotIcon}>
            </View>
          </View>
        </View>
        <View style={themedStyle.viewTitile} >
          <Text style={themedStyle.txtTitle}>
            {programmation.title}
          </Text>
        </View>
      </View>
    </View>
  );
};
const { width } = Dimensions.get('window');
const itemWidth: number =  width - pxToPercentage(108);

export const ProgrameItem = withStyles(ProgrammeItemComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: pxToPercentage(1),
    marginHorizontal: pxToPercentage(16),
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: theme['color-custom-100'],
  },
  directionView: {
    flex: 1,
    flexDirection: 'row',
  },
  txtRead: {
    color: theme['text-hint-color'],
  },
  txtTitle: {
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-basic-color'],
    textAlign: 'justify',
    ...textStyle.regular,
  },
  txtTime: {
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-basic-color'],
    textAlign: 'center',
    ...textStyle.regular,
  },
  placeTimeView: {
    width : pxToPercentage(4),
    justifyContent: 'center',
  },
  viewTitile: {
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
    paddingHorizontal: pxToPercentage(8),
    paddingVertical: pxToPercentage(8),
    borderRadius: pxToPercentage(4),
    marginVertical: pxToPercentage(12),
    marginLeft: pxToPercentage(12),
    width :  itemWidth,
  },
  timelineView: {
    justifyContent: 'center',
    alignItems: 'center',
    width : pxToPercentage(10),
  },
  lineView: {
    borderWidth: pxToPercentage(1),
    borderColor: '#4682b4',
    height: '110%',
  },
  viewIcon: {
    position: 'absolute',
    backgroundColor: '#4682b4',
    borderRadius: pxToPercentage(8),
  },
  timeView: {
    justifyContent: 'center',
    width : pxToPercentage(50),
  },
  viewDotIcon : {
    height: pxToPercentage(16),
    width: pxToPercentage(16),
  },
}));
