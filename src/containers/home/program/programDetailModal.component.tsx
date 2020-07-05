import React from 'react';
import {
  Text,
  ScrollView,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Card } from '@kitten/ui';
import { ProgramContent } from '@src/core/models/program/program.model';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
  content: ProgramContent;
}

export type ProgramDetailModalProps = ThemedComponentProps & ComponentProps;

const ProgramDetailModalComponent: React.FunctionComponent<ProgramDetailModalProps> = (props) => {
  const { themedStyle, content } = props;

  return (
    <Card
      disabled={true}
      style={themedStyle.container}
      status='danger'
      header={() => {
        return (
          <View style={themedStyle.viewHeader}>
            <Text style={themedStyle.txtHeaderTitle}>
              {'Chi tiết'}
            </Text>
          </View>
        );
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={themedStyle.txtTitle}>
          {'Người thực hiện: '}
        </Text>
        <Text style={themedStyle.txtContent}>
          {content.implementer}
        </Text>
        <Text style={themedStyle.txtTitle}>
          {'Nội dung: '}
        </Text>
        <Text style={themedStyle.txtContent}>
          {content.description}
        </Text>
      </ScrollView>
    </Card>
  );
};

export const ProgramDetailModal = withStyles(ProgramDetailModalComponent, (theme: ThemeType) => ({
  container: {
    width: pxToPercentage(300),
    maxHeight: pxToPercentage(525),
    paddingBottom: pxToPercentage(36),
  },
  viewHeader: {
    alignItems: 'center',
    padding: pxToPercentage(10),
  },
  txtHeaderTitle: {
    fontSize: pxToPercentage(14),
    color: 'red',
    ...textStyle.regular,
  },
  txtTitle: {
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    textAlign: 'justify',
    paddingVertical: pxToPercentage(6),
    ...textStyle.bold,
  },
  txtContent: {
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    textAlign: 'justify',
    ...textStyle.regular,
  },
}));
