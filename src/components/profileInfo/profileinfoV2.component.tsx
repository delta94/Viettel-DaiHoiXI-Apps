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
import { UserDetail } from '@src/core/models/user/userDetail.model';
import { RemoteImage } from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
  userDetail: UserDetail;
}

export type ProfileInfoProps = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoV2Component: React.FunctionComponent<ProfileInfoProps> = (props) => {
  const { style, themedStyle, ...restProps } = props;

  return (
    <View
      style={themedStyle.container}
      {...restProps}>
      <View style={themedStyle.viewSection}>
      <Image
        style={themedStyle.avatar}
        source={(new RemoteImage(props.userDetail.avatar)).imageSource}
      />
      <View style={themedStyle.viewSectionDetails}>
        <Text
          numberOfLines={1}
          style={themedStyle.txtName}>
          {`Đồng chí ${props.userDetail.full_name}`}
        </Text>
        <Text
          numberOfLines={1}
          style={themedStyle.txtPosition}>
          {props.userDetail.position}
        </Text>
        <Text
          numberOfLines={1}
          style={themedStyle.txtPosition}>
          {`Đoàn: ${props.userDetail.group}`}
        </Text>
        <View style={themedStyle.viewDelegateNumber}>
          <Text
            numberOfLines={1}
            style={themedStyle.txtPosition}>
            {`Tổ: ${props.userDetail.group}`}
          </Text>
          <Text
            numberOfLines={1}
            style={themedStyle.txtPosition}>
            {`Số đại biểu: ${props.userDetail.number}`}
          </Text>
        </View>
      </View>
      </View>
    </View>
  );
};

export const ProfileInfoV2 = withStyles(ProfileInfoV2Component, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-primary-7'],
    paddingBottom: pxToPercentage(2),
    marginHorizontal: pxToPercentage(353),
    marginTop: pxToPercentage(28),
  },
  viewSection: {
    flexDirection: 'row',
    width: pxToPercentage(1396),
    height: pxToPercentage(240),
  },
  viewSectionDetails: {
    flex: 1,
    marginLeft: pxToPercentage(8),
    justifyContent: 'center',
  },
  txtName: {
    fontSize: pxToPercentage(36), // size 24
    ...textStyle.semibold,
    fontWeight: 'normal',
    color: theme['text-basic-color'],
  },
  txtPosition: {
    fontSize: pxToPercentage(36),
    ...textStyle.light,
    marginLeft: pxToPercentage(0),
    marginVertical: pxToPercentage(2),
    marginHorizontal: pxToPercentage(32),
  },
  txtPhone: {
    fontSize: pxToPercentage(36),
    ...textStyle.regular,
    marginLeft: pxToPercentage(9),
  },
  avatar: {
    width: pxToPercentage(150), // width 96
    height: pxToPercentage(200), // height 128
    marginHorizontal: pxToPercentage(20),
    borderRadius: pxToPercentage(4),
    margin: pxToPercentage(20),
  },
  viewDelegateNumber: {
    flexDirection: 'row',
    paddingVertical: pxToPercentage(2),
  },
}));
