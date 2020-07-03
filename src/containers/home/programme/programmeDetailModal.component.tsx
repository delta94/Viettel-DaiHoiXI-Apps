import React from 'react';
import {
  Text,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { Card, CardHeader } from '@kitten/ui';
import { Programmation } from '@src/core/models/programmation/programe.model';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  programmation: Programmation;
}

export type ProgramationModalDetailProps = ThemedComponentProps & ComponentProps;

const ProgeamMationModalComponent: React.FunctionComponent<ProgramationModalDetailProps> = (props) => {
  const { themedStyle, programmation } = props;

  return (
    <Card disabled={true} style={themedStyle.viewCard}>
      <CardHeader
        style={[themedStyle.bottomBorder]}
        titleStyle={[themedStyle.txtTitle]}
        title='Chi tiết'>
      </CardHeader>
      <ScrollView style={[themedStyle.Scrollview]}
        showsVerticalScrollIndicator={false}>
        <Text style={[themedStyle.txtBold]}>
          {'Người thực hiện:'}
          <Text style={[themedStyle.txtDetails]}>
            {programmation.implementer}
          </Text>
        </Text>
        <Text style={[themedStyle.txtBold]}>
          {'Nội dung:'}
          <Text style={[themedStyle.txtDetails]}>
            {programmation.description}
          </Text>
        </Text>
      </ScrollView>
    </Card>
  );
};

export const ProgrammeModelDetail = withStyles(ProgeamMationModalComponent, (theme: ThemeType) => ({
  viewCard: {
    width: pxToPercentage(300),
    height: pxToPercentage(450),
    paddingBottom: pxToPercentage(36),
  },
  bottomBorder: {
    borderBottomWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
  },
  txtTitle: {
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: 'red',
    textAlign: 'center',
    marginBottom: pxToPercentage(8),
    ...textStyle.regular,
  },
  Scrollview: {
    marginTop: pxToPercentage(10),
    marginBottom: pxToPercentage(10),
  },
  txtDetails: {
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-basic-color'],
    textAlign: 'justify',
    ...textStyle.regular,
    fontWeight: 'none',
  },
  txtBold: {
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-basic-color'],
    textAlign: 'justify',
    ...textStyle.regular,
    fontWeight: 'bold',
    paddingVertical: pxToPercentage(6),
  },
}));
