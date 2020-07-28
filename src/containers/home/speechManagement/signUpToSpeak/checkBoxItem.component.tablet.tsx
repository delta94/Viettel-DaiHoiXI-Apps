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

interface ComponentProps {
  topic: any;
  onCheckboxPress: (id: number, chunkNumber: number) => void;
  isCreateScreen: boolean;
  index: number;
  chunkNumber: number;
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
      <View style={[
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
    paddingHorizontal: pxToPercentage(35),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme['color-primary-31'],
    height: pxToPercentage(94),
  },
  viewCheckbox: {
    height: pxToPercentage(54),
    width: pxToPercentage(54),
    borderColor: theme['color-primary-2'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxToPercentage(8),
    borderWidth: pxToPercentage(1),
  },
  viewOncheck: {
    backgroundColor: theme['color-primary-19'],
  },
  checkedbox: {
    backgroundColor: theme['color-primary-2'],
  },
  txtCheckBox: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(25),
  },
  icon: {
    height: pxToPercentage(54),
    width: pxToPercentage(54),
    resizeMode: 'contain',
  },
}));
