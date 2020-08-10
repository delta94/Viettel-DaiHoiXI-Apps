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
import { DeputyDetail as DeputyDetailModel } from '@src/core/models/deputy/deputyDetail.model';
import { Hr } from '@src/components/hr/hr.component';

interface ComponentProps {
  deputyDetails: DeputyDetailModel[];
}

export type DeputyDetailContentProps = ThemedComponentProps & ComponentProps;

const DeputyDetailContentComponent: React.FunctionComponent<DeputyDetailContentProps> = (props) => {
  const { themedStyle } = props;

  const renderDeputyDetails = (): React.ReactElement[] => {
    return props.deputyDetails.map((item, index) => {
      return (
        <View>
          <View
            key={index}
            style={[
              themedStyle.viewBlock,
              item.type === 1 && themedStyle.viewBlockFull,
            ]}>
            <Text style={themedStyle.txtTitle}>
              {item.key}
            </Text>
            <Text style={themedStyle.txtValue}>
              {item.value}
            </Text>
          </View>
          {++index !== props.deputyDetails.length && <Hr />}
        </View>
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      {renderDeputyDetails()}
    </View>
  );
};

export const DeputyDetailContent = withStyles(DeputyDetailContentComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    width: pxToPercentage(163.5),
    paddingHorizontal: pxToPercentage(5),
    marginVertical: pxToPercentage(10),
    marginHorizontal: pxToPercentage(8),
  },
  viewBlockFull: {
    width: pxToPercentage(343),
  },
}));
