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
import { SERVER_ADDRESS } from '../../../config';

interface ComponentProps {
  deputy: DeputyModel;
  onProfilePress: () => void;
  onQRCodePress: () => void;
  onSearchPress: () => void;
}

export type ProfileInfoV2TabletProps = ThemedComponentProps & ViewProps & ComponentProps;

const ProfileInfoV2TabletComponent: React.FunctionComponent<ProfileInfoV2TabletProps> = (props) => {
  const { style, themedStyle, deputy } = props;

  const onProfileButtonPress = (): void => {
    props.onProfilePress();
  };

  const onQRCodeButtonPress = (): void => {
    props.onQRCodePress();
  };

  const onSearchButtonPress = (): void => {
    props.onSearchPress();
  };

  return (
    <View
      style={[
        themedStyle.container,
        style,
      ]}>
      <Image
        resizeMode='cover'
        source={(new RemoteImage(`${SERVER_ADDRESS}${deputy.avatar}`)).imageSource}
        style={themedStyle.imgAvatar}
      />
      <View style={themedStyle.viewInfo}>
        <Text style={themedStyle.txtFullname}>
          {`Đồng chí ${deputy.fullName.toUpperCase()}`}
        </Text>
        <Text
          style={[
            themedStyle.txtInfo,
            themedStyle.txtItalic,
          ]}>
          {deputy.position}
        </Text>
        <Text style={themedStyle.txtInfo}>
          {`Đoàn: ${deputy.organization}`}
        </Text>
        <View style={themedStyle.viewRow}>
          <Text style={themedStyle.txtInfo}>
            {`Tổ: ${'1'}`}
          </Text>
          <Text
            style={[
              themedStyle.txtInfo,
              themedStyle.txtDelegateNumber,
            ]}>
            {`Số Đại biểu: ${deputy.code}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export const ProfileInfoV2Tablet = withStyles(ProfileInfoV2TabletComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: pxToPercentage(274),
    padding: pxToPercentage(20),
    paddingTop: pxToPercentage(30),
  },
  imgAvatar: {
    height: pxToPercentage(200),
    width: pxToPercentage(150),
    borderRadius: pxToPercentage(16),
    marginRight: pxToPercentage(20),
    marginTop: pxToPercentage(10),
  },
  viewInfo: {
    flex: 1,
    paddingTop: pxToPercentage(10),
    height: pxToPercentage(200),
    justifyContent: 'space-between',
  },
  viewRow: {
    flexDirection: 'row',
  },
  txtFullname: {
    fontSize: pxToPercentage(34),
    color: theme['text-basic-color'],
    ...textStyle.proDisplayBold,
  },
  txtInfo: {
    fontSize: pxToPercentage(34),
    color: theme['text-basic-color'],
    ...textStyle.proDisplayRegular,
  },
  txtDelegateNumber: {
    marginLeft: pxToPercentage(117),
  },
  txtItalic: {
    ...textStyle.proTextRegularItalic,
  },
}));
