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
import { Hr } from '@src/components/hr/hr.component';
import { DeputyDetail as DeputyDetailModel } from '@src/core/models/deputy/deputyDetail.model';

interface ComponentProps {
  deputyDetails: DeputyDetailModel[];
}

export type DeputyDetailContentTabletProps = ThemedComponentProps & ComponentProps;

const DeputyDetailContentTabletComponent: React.FunctionComponent<DeputyDetailContentTabletProps> = (props) => {
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

export const DeputyDetailContentTablet = withStyles(DeputyDetailContentTabletComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: pxToPercentage(12.5),
    padding: pxToPercentage(20),
  },
  txtTitle: {
    fontSize: pxToPercentage(34),
    ...textStyle.proTextRegular,
    color: theme['color-primary-13'],
  },
  txtValue: {
    marginTop: pxToPercentage(10),
    fontSize: pxToPercentage(34),
    ...textStyle.proTextRegular,
    color: theme['text-basic-color'],
  },
  viewBlock: {
    width: pxToPercentage(685),
    paddingHorizontal: pxToPercentage(20),
    paddingVertical: pxToPercentage(20),
  },
  viewBlockFull: {
    width: pxToPercentage(1370),
  },
}));
