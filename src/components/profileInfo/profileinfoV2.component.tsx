import React from 'react';
import {
  View,
  ViewProps,
  Text,
  Image,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';
import { RemoteImage } from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '../viewStyle';
import { SERVER_ADDRESS } from '../../../config';

interface ComponentProps {
  deputy: DeputyModel;
}

export type ProfileInfoV2Props = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoV2Component: React.FunctionComponent<ProfileInfoV2Props> = (props) => {
  const { style, themedStyle, deputy } = props;

  return (
    <View
      style={[
        themedStyle.container,
        style,
      ]}>
      <View style={themedStyle.sectionHeader}>
        <Text style={themedStyle.txtHeader}>
          {'ĐẠI HỘI ĐẠI BIỂU ĐẢNG BỘ THÀNH PHỐ LẦN THỨ XI, NHIỆM KỲ 2020 - 2025'}
        </Text>
      </View>
      <View style={themedStyle.sectionBody}>
        <Image
          resizeMode='cover'
          source={(new RemoteImage(`${SERVER_ADDRESS}${deputy.avatar}`)).imageSource}
          style={themedStyle.imgAvatar}
        />
        <View style={themedStyle.viewInfo}>
          <Text
            numberOfLines={1}
            style={[
              themedStyle.txtInfo,
              themedStyle.txtBold,
            ]}>
            {`Đồng chí ${deputy.fullName.toUpperCase()}`}
          </Text>
          <Text
            numberOfLines={2}
            style={[
              themedStyle.txtInfo,
              themedStyle.txtItalic,
            ]}>
            {deputy.position}
          </Text>
          <Text
            numberOfLines={2}
            style={[
              themedStyle.txtInfo,
              themedStyle.txtItalic,
            ]}>
            {'Đoàn: '}
            <Text
              numberOfLines={2}
              style={[
                themedStyle.txtInfo,
                themedStyle.txtBoldItalic,
              ]}>
              {deputy.organization}
            </Text>
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
                {1}
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
                {deputy.code}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const ProfileInfoV2 = withStyles(ProfileInfoV2Component, (theme: ThemeType) => ({
  container: {
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-basic-100'],
    ...viewStyle.shadow2,
  },
  sectionHeader: {
    paddingVertical: pxToPercentage(12.5),
    paddingHorizontal: pxToPercentage(25),
  },
  sectionBody: {
    flexDirection: 'row',
    padding: pxToPercentage(12.5),
  },
  txtHeader: {
    fontSize: pxToPercentage(14),
    textAlign: 'center',
    ...textStyle.proTextBold,
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
