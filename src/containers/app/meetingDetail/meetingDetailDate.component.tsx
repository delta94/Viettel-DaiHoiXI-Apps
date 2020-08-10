import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Layout } from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';

interface ComponentProps {
  example?: any;
}

const dateDataFake: string[] = [
  '08/10/2020',
  '09/10/2020',
  '10/10/2020',
  '11/10/2020',
];

export type MeetingDetailDateProps = ComponentProps & ThemedComponentProps;

const MeetingDetailDateComponent: React.FunctionComponent<MeetingDetailDateProps> = (props) => {
  const [dateSelected, setDateSelected] = useState<string>(dateDataFake[0]);

  const { themedStyle } = props;

  const renderDates = (): React.ReactElement[] => {
    return dateDataFake.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.75}
          onPress={() => setDateSelected(item)}
          style={[
            themedStyle.viewDate,
            item === dateSelected && themedStyle.viewDateSelected,
          ]}>
          <Text
            style={[
              themedStyle.txtDate,
              item === dateSelected && themedStyle.txtDateSelected,
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <Layout style={themedStyle.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={themedStyle.scrollViewContainer}
        showsHorizontalScrollIndicator={false}>
        {renderDates()}
      </ScrollView>
    </Layout>
  );
};

export const MeetingDetailDate = withStyles(MeetingDetailDateComponent, (theme: ThemeType) => ({
  container: {
    height: pxToPercentage(50),
  },
  scrollViewContainer: {
    alignItems: 'center',
  },
  viewDate: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: pxToPercentage(8),
    width: pxToPercentage(100),
    height: pxToPercentage(30),
    borderRadius: pxToPercentage(5),
    backgroundColor: theme['color-primary-2'],
    ...viewStyle.shadow3,
  },
  viewDateSelected: {
    backgroundColor: theme['color-custom-100'],
  },
  txtDate: {
    fontSize: pxToPercentage(14),
    color: theme['color-custom-100'],
    ...textStyle.proTextRegular,
  },
  txtDateSelected: {
    fontSize: pxToPercentage(14),
    color: theme['color-primary-2'],
    ...textStyle.proTextRegular,
  },
}));
