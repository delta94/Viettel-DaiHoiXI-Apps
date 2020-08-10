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
  dateSelected: string;
  dateList: string[];
  onDatePress(date: string): void;
}

export type MeetingDetailDateProps = ComponentProps & ThemedComponentProps;

const MeetingDetailDateComponent: React.FunctionComponent<MeetingDetailDateProps> = (props) => {
  const { themedStyle } = props;
  const [dates, setDates] = useState<string[]>(props.dateList);
  const [dateSelected, setDateSelected] = useState<string>(props.dateSelected);

  React.useEffect(() => {
    setDates(props.dateList);
  }, [props.dateList]);

  React.useEffect(() => {
    setDateSelected(props.dateSelected);
  }, [props.dateSelected]);

  const onDatePress = (date: string): void => {
    props.onDatePress(date);
  };

  const renderDates = (): React.ReactElement[] => {
    return dates.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.75}
          onPress={() => onDatePress(item)}
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
