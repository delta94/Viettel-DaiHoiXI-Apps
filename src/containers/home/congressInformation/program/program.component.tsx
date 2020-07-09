import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Program as ProgramModel,
  ProgramContent,
} from '@src/core/models/program/program.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { ProgramContentItem } from './programContentItem.component';

interface ComponentProps {
  programs: ProgramModel[];
}

export type ProgramProps = ThemedComponentProps & ComponentProps;

const ProgramComponent: React.FunctionComponent<ProgramProps> = (props) => {
  const { themedStyle } = props;

  const renderContents = (contents: ProgramContent[]): React.ReactElement[] => {
    return contents.map((item, index) => {
      return (
        <ProgramContentItem
          content={item}
          index={index + 1}
        />
      );
    });
  };

  const renderPrograms = (): React.ReactElement[] => {
    return props.programs.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <View style={themedStyle.viewSection}>
            <ProgramContentItem flag={item.section} />
          </View>
          {renderContents(item.contents)}
        </React.Fragment>
      );
    });
  };

  return (
    <ScrollView>
      <View style={themedStyle.container}>
        <View style={themedStyle.view}>
          <ProgramContentItem flag={'title'} />
          {renderPrograms()}
        </View>
      </View>
    </ScrollView>
  );
};

export const Program = withStyles(ProgramComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    margin: pxToPercentage(6),
    backgroundColor: theme['color-custom-100'],
  },
  viewSection: {
  },
  txtSection: {
    textAlign: 'center',
    color: 'red',
    fontSize: pxToPercentage(14),
    ...textStyle.regular,
  },
  view: {
    borderBottomWidth: pxToPercentage(1),
    marginHorizontal: pxToPercentage(3),
  },
}));
