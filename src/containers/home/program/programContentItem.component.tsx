import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { ProgramContent } from '@src/core/models/program/program.model';

interface ComponentProps {
  content: ProgramContent;
}

export type ProgramContentItemProps = ThemedComponentProps & ComponentProps;

const ProgramContentItemComponent: React.FunctionComponent<ProgramContentItemProps> = (props) => {
  const { themedStyle, content } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewPlacetime}>
        <Text>
          {'-'}
        </Text>
      </View>
      <View style={themedStyle.viewTime} >
        <Text style={themedStyle.txtTitle}>
          {content.fromTime}
        </Text>
        <Text style={themedStyle.txtTitle}>
          {content.toTime}
        </Text>
      </View>
      <View style={themedStyle.viewTimeline} >
        <View style={themedStyle.viewLine} />
        <View style={themedStyle.viewDotIcon} />
      </View>
      <View style={themedStyle.viewTitle} >
        <Text style={themedStyle.txtTitle}>
          {content.title}
        </Text>
      </View>
    </View>
  );
};

export const ProgramContentItem = withStyles(ProgramContentItemComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  txtTitle: {
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    textAlign: 'justify',
    ...textStyle.regular,
  },
  viewPlacetime: {
    width: pxToPercentage(10),
    justifyContent: 'center',
  },
  viewTime: {
    width: pxToPercentage(45),
    justifyContent: 'center',
  },
  viewTimeline: {
    width: pxToPercentage(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTitle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: pxToPercentage(8),
    paddingHorizontal: pxToPercentage(9),
    paddingVertical: pxToPercentage(9),
    borderRadius: pxToPercentage(4),
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
    marginLeft: pxToPercentage(8),
  },
  viewLine: {
    borderWidth: pxToPercentage(1),
    borderColor: theme['background-custom-color-7'],
    height: '110%',
  },
  viewDotIcon: {
    height: pxToPercentage(16),
    width: pxToPercentage(16),
    borderRadius: pxToPercentage(8),
    position: 'absolute',
    backgroundColor: theme['background-custom-color-7'],
  },
}));
