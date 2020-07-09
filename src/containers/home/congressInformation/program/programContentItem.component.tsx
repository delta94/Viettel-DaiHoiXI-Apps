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
import { pxToPercentage } from '@src/core/utils/utils';
import { ProgramContent } from '@src/core/models/program/program.model';

interface ComponentProps {
  content?: ProgramContent;
  index?: number;
  flag?: string;
}

export type ProgramContentItemProps = ThemedComponentProps & ComponentProps;

const ProgramContentItemComponent: React.FunctionComponent<ProgramContentItemProps> = (props) => {
  const { themedStyle, content } = props;

  return (
    <View style={[
      themedStyle.container,
      props.flag === 'title' ? themedStyle.viewTitle : props.flag ? themedStyle.viewSection : '',
    ]}>
      <View style={themedStyle.viewNumber}>
        <Text style={themedStyle.txt}>
          {props.flag === 'title' ? 'STT' : props.flag ? '' : props.index}
        </Text>
      </View>
      <View style={themedStyle.viewTime}>
        <Text style={themedStyle.txt}>
          {props.flag === 'title' ? 'Thời gian' : props.flag ? props.flag : content.fromTime + ' - ' + content.toTime}
        </Text>
      </View >
      <View style={themedStyle.viewContent}>
        <Text style={themedStyle.txt}>
          {props.flag === 'title' ? 'Nội dung' : props.flag ? '' : content.title}
        </Text>
      </View>
      <View style={themedStyle.viewImplementer}>
        <Text style={themedStyle.txt}>
          {props.flag === 'title' ? 'Người thực hiện' : props.flag ? '' : content.implementer}
        </Text>
      </View>
    </View>
  );
};

export const ProgramContentItem = withStyles(ProgramContentItemComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    borderTopWidth: pxToPercentage(1),
    borderLeftWidth: pxToPercentage(1),
    borderRightWidth: pxToPercentage(1),
    height: pxToPercentage(30),
  },
  viewNumber: {
    height: pxToPercentage(30),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  viewTime: {
    borderLeftWidth: pxToPercentage(1),
    height: pxToPercentage(30),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  viewContent: {
    borderLeftWidth: pxToPercentage(1),
    height: pxToPercentage(30),
    justifyContent: 'center',
    paddingLeft: pxToPercentage(5),
    flex: 4,
  },
  viewImplementer: {
    borderLeftWidth: pxToPercentage(1),
    height: pxToPercentage(30),
    justifyContent: 'center',
    paddingLeft: pxToPercentage(5),
    flex: 3,
  },
  viewTitle: {
    backgroundColor: '#F1E5B5',
  },
  viewSection: {
    backgroundColor: 'rgba(234, 235, 236,1)',
  },
  txt: {
    fontSize: pxToPercentage(11),
  },
}));
