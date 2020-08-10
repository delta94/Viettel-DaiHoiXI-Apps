import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { User as UserModel } from '@src/core/models/user/user.model';
import { RemoteImage } from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';

interface ComponentProps extends TouchableOpacityProps {
  delegate: UserModel;
}

export type DeputyDiscussionGroupItemProps = ThemedComponentProps & ComponentProps;

const DeputyDiscussionGroupItemComponent: React.FunctionComponent<DeputyDiscussionGroupItemProps> = (props) => {
  const { themedStyle, delegate, ...restProps } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      {...restProps}
      style={themedStyle.container}>
      <View style={themedStyle.viewBody}>
        <Image
          resizeMode='cover'
          source={(new RemoteImage(delegate.avatar)).imageSource}
          style={themedStyle.imgAvatar}
        />
        <View style={themedStyle.viewInfo}>
          <Text
            numberOfLines={1}
            style={[
              themedStyle.txtInfo,
              themedStyle.txtBold,
            ]}>
            {'Đồng chí'}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              themedStyle.txtInfo,
              themedStyle.txtBold,
            ]}>
            {delegate.full_name.toUpperCase()}
          </Text>
          <Text
            numberOfLines={2}
            style={[
              themedStyle.txtInfo,
              themedStyle.txtItalic,
            ]}>
            {delegate.position}
          </Text>
          <View style={themedStyle.viewRow}>
            <Text
              numberOfLines={1}
              style={themedStyle.txtInfo}>
              {'Tổ: '}
              <Text
                numberOfLines={1}
                style={[
                  themedStyle.txtInfo,
                  themedStyle.txtBold,
                ]}>
                {delegate.team_number}
              </Text>
            </Text>
            <Text
              numberOfLines={1}
              style={[
                themedStyle.txtInfo,
                themedStyle.txtDelegateNumber,
              ]}>
              {'Số đại biểu: '}
              <Text
                numberOfLines={1}
                style={[
                  themedStyle.txtInfo,
                  themedStyle.txtBold,
                ]}>
                {delegate.delegate_number}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const DeputyDiscussionGroupItem = withStyles(DeputyDiscussionGroupItemComponent, (theme: ThemeType) => ({
  container: {
    paddingHorizontal: pxToPercentage(8),
    paddingVertical: pxToPercentage(4),
    marginVertical: pxToPercentage(4),
    borderRadius: pxToPercentage(5),
    backgroundColor: theme['color-basic-100'],
    ...viewStyle.shadow2,
  },
  viewBody: {
    flexDirection: 'row',
    padding: pxToPercentage(12.5),
  },
  imgAvatar: {
    height: pxToPercentage(105),
    width: pxToPercentage(75),
    borderRadius: pxToPercentage(5),
    marginRight: pxToPercentage(12.5),
  },
  viewInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  viewRow: {
    flexDirection: 'row',
  },
  txtInfo: {
    fontSize: pxToPercentage(13),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  txtBold: {
    ...textStyle.proTextBold,
  },
  txtItalic: {
    ...textStyle.proTextRegularItalic,
  },
  txtBoldItalic: {
    ...textStyle.proTextBoldItalic,
  },
  txtDelegateNumber: {
    marginLeft: pxToPercentage(40),
  },
}));
