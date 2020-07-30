import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { CheckIcon } from '@src/assets/icons';
import { isTablet } from 'react-native-device-info';

interface ComponentProps {
  topic: any;
  onCheckboxPress: (id: number, chunkNumber: number) => void;
  isCreateScreen: boolean;
  index: number;
  chunkNumber?: number;
}
export type CheckboxTabletProps = ThemedComponentProps & ComponentProps;

const CheckBoxComponent: React.FunctionComponent<CheckboxTabletProps> = (props) => {
  const { themedStyle } = props;

  const onCheckboxPress = (id: number, chunkNumber: number) => {
    return props.onCheckboxPress(id, chunkNumber);
  };

  return (
    <TouchableOpacity
      disabled={!props.isCreateScreen}
      activeOpacity={0.75}
      onPress={() => { onCheckboxPress(props.index, props.chunkNumber); }}
      style={[
        themedStyle.container, props.topic.status
        && themedStyle.viewOncheck,
      ]}>
      <View
        style={[
          themedStyle.viewCheckbox,
          props.topic.status && themedStyle.checkedbox,
        ]}>
        {props.topic.status && (
          <View style={themedStyle.viewIcon}>
            {CheckIcon(themedStyle.icon)}
          </View>
        )}
      </View>
      <Text style={themedStyle.txtCheckBox}>
        {props.topic.text}
      </Text>
    </TouchableOpacity>
  );
};

export const CheckboxItemTablet = withStyles(CheckBoxComponent, (theme: ThemeType) => ({
  container: {
    marginTop: pxToPercentage(4),
    paddingHorizontal: isTablet() ? pxToPercentage(35) : pxToPercentage(8),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme['color-primary-31'],
    height: isTablet() ? pxToPercentage(94) : pxToPercentage(48),
  },
  viewCheckbox: {
    height: isTablet() ? pxToPercentage(54) : pxToPercentage(30),
    width: isTablet() ? pxToPercentage(54) : pxToPercentage(30),
    borderColor: theme['color-primary-2'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: isTablet() ? pxToPercentage(8) : pxToPercentage(4),
    borderWidth: pxToPercentage(1),
  },
  viewOncheck: {
    backgroundColor: theme['color-primary-19'],
  },
  checkedbox: {
    backgroundColor: theme['color-primary-2'],
  },
  txtCheckBox: {
    fontSize: isTablet() ? pxToPercentage(34) : pxToPercentage(14),
    ...textStyle.proDisplayRegular,
    marginLeft: isTablet() ? pxToPercentage(25) : pxToPercentage(10),
  },
  icon: {
    height: isTablet() ? pxToPercentage(54) : pxToPercentage(26),
    width: isTablet() ? pxToPercentage(54) : pxToPercentage(26),
    resizeMode: 'contain',
  },
}));
