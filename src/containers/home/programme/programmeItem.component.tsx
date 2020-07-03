import React, { useState } from 'react';
import {
  ListItem,
  ListItemProps,
  Icon,
} from '@kitten/ui/';
import { Text, View, Image } from 'react-native';
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
        <View style={[
          themedStyle.placeTimeView,
          style,
        ]} >
          <Text>-</Text>
        </View>
        <View style={[themedStyle.timeView]} >
          <Text style={[
            themedStyle.txtTitle,
          ]}>
            {programmation.fromTime}
          </Text>
          <Text style={themedStyle.txtTitle}>
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
  placeTimeView: {
    flex: 0.02,
    justifyContent: 'center',
  },
  viewTitile: {
    flex: 0.81,
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
    paddingHorizontal: pxToPercentage(8),
    paddingVertical: pxToPercentage(8),
    borderRadius: pxToPercentage(4),
    marginVertical: pxToPercentage(12),
    marginLeft: pxToPercentage(8),
  },
  timelineView: {
    flex: 0.06,
    justifyContent: 'center',
    alignItems: 'center',
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
    flex: 0.12,
    justifyContent: 'center',
  },
  viewDotIcon : {
    height: pxToPercentage(16),
    width: pxToPercentage(16),
  },
}));
