import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { DelegateContent } from '@src/core/models/delegateGroup/delegateGroup.model';

interface ComponentProps {
  delegateGroup: DelegateContent;
}

export type DelegateGroupContentItemProps = ThemedComponentProps & ComponentProps;

const DelegateGroupContentItemComponent: React.FunctionComponent<DelegateGroupContentItemProps> = (props) => {
  const { themedStyle } = props;

  return (
    <View
      style={themedStyle.container}>
      <View style={themedStyle.viewName}>
        <Text
          style={themedStyle.txtName}>
          {`${props.delegateGroup.count}. ${props.delegateGroup.full_name}`}
        </Text>
      </View>
      <View style={themedStyle.viewSection}>
        <View style={themedStyle.viewLeft}>
          <Text
            style={themedStyle.txtLeft}>
            {`Chức vụ: `}
          </Text>
        </View>
        <View style={themedStyle.viewRight}>
          <Text
            style={themedStyle.txtRight}
            numberOfLines={2}>
            {props.delegateGroup.position}
          </Text>
        </View>
      </View>
      <View style={themedStyle.viewSection}>
        <View style={themedStyle.viewLeft}>
          <Text
            style={themedStyle.txtLeft}>
            {`Tổ: `}
          </Text>
        </View>
        <View style={themedStyle.viewRight}>
          <Text
            style={themedStyle.txtRight}
            numberOfLines={1}>
            {props.delegateGroup.count}
          </Text>
        </View>
      </View>
      <View style={themedStyle.viewSection}>
        <View style={themedStyle.viewLeft}>
          <Text
            style={themedStyle.txtLeft}>
            {`Tư cách tham gia: `}
          </Text>
        </View>
        <View style={themedStyle.viewRight}>
          <Text
            style={themedStyle.txtRight}
            numberOfLines={1}>
            {props.delegateGroup.status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const DelegateGroupContentItem = withStyles(DelegateGroupContentItemComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    marginVertical: pxToPercentage(8),
    paddingVertical: pxToPercentage(8),
    paddingHorizontal: pxToPercentage(8),
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
    borderTopLeftRadius: pxToPercentage(6),
    borderTopRightRadius: pxToPercentage(6),
    backgroundColor: theme['color-custom-100'],
  },
  viewName: {
    flexDirection: 'row',
    borderBottomWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
  },
  viewSection: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    marginVertical: pxToPercentage(4),
  },
  txtName: {
    fontSize: pxToPercentage(14),
    color: 'red',
    ...textStyle.proRoundedSemibold,
  },
  txtRight: {
    fontSize: pxToPercentage(12),
    textAlign: 'right',
  },
  viewRight: {
    flex: 1,
    alignItem: 'right',
  },
  viewLeft: {
    justifyContent: 'center',
  },
}));
