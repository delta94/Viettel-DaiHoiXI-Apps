import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { Hr } from '@src/components/hr/hr.component';
import { DelegateDetail } from '@src/core/models/delegate/delegateDetail.model';

interface ComponentProps {
  user: DelegateDetail[];
}

interface InfoTypeOneParams {
  firstTitle: string;
  firstValue: string | number;
  secondTitle: string;
  secondValue: string | number;
}

interface InfoTypeTwoParams {
  title: string;
  value: string | number;
}

export type DelegateDetailContentProps = ThemedComponentProps & ComponentProps;

const DelegateDetailContentComponent: React.FunctionComponent<DelegateDetailContentProps> = (props) => {
  const { themedStyle, user } = props;

  const renderInfoTypeOne = (params: InfoTypeOneParams): React.ReactElement => {
    return (
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {params.firstTitle}
          </Text>
          <Text style={themedStyle.txtValue}>
            {params.firstValue}
          </Text>
        </View>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {params.secondTitle}
          </Text>
          <Text style={themedStyle.txtValue}>
            {params.secondValue}
          </Text>
        </View>
      </View>
    );
  };

  const renderInfoTypeTwo = (params: InfoTypeTwoParams): React.ReactElement => {
    return (
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {params.title}
          </Text>
          <Text style={themedStyle.txtValue}>
            {params.value}
          </Text>
        </View>
      </View>
    );
  };

  const renderInfor = (): React.ReactElement[] => {
    const result = [];
    for (let i = 0; i < user.length; i++) {
      if (user[i].type === 2 && user[i + 1].type === 2) {
        result.push(
          renderInfoTypeOne({
            firstTitle: user[i].key,
            firstValue: user[i].value,
            secondTitle: user[i + 1].key,
            secondValue: user[i + 1].value,
          }),
        );
        i = i + 1;
      }
      if (user[i].type === 1) {
        result.push(
          renderInfoTypeTwo({
            title: user[i].key,
            value: user[i].value,
          }),
        );
      }
      result.push(<Hr />);
    }
    return result;
  };

  return (
    <View style={themedStyle.container}>
      {renderInfor()}
    </View>
  );
};

export const DelegateDetailContent = withStyles(DelegateDetailContentComponent, (theme: ThemeType) => ({
  container: {
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-custom-100'],
    marginTop: pxToPercentage(8),
    ...viewStyle.shadow2,
  },
  txtTitle: {
    fontSize: pxToPercentage(14),
    ...textStyle.proTextRegular,
    color: theme['color-primary-13'],
  },
  txtValue: {
    marginTop: pxToPercentage(2),
    fontSize: pxToPercentage(14),
    ...textStyle.proTextRegular,
    color: theme['text-basic-color'],
  },
  viewBlock: {
    flex: 1,
    paddingHorizontal: pxToPercentage(5),
  },
  viewSectionRow: {
    flexDirection: 'row',
    paddingVertical: pxToPercentage(10),
    paddingHorizontal: pxToPercentage(8),
  },
}));
