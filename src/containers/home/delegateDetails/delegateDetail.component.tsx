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
import { UserDetail as UserDetailModel } from '@src/core/models/user/userDetail.model';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { ProfileInfoV3 } from '@src/components/profileInfo/profileinfoV3.compoent';
import { DelegateDetailContent } from './delegateDetailContent.component';

interface ComponentProps {
  userDetail: UserDetailModel;
}

export type DelegateDetailProps = ThemedComponentProps & ComponentProps;

const DelegateDetailComponent: React.FunctionComponent<DelegateDetailProps> = (props) => {
  const { themedStyle } = props;
  return (
    <ScrollView style={themedStyle.container}>
      <Text style={themedStyle.txtTitle}>{'Thông tin đại biểu'}</Text>
      <ProfileInfoV3 user={props.userDetail} />
      <DelegateDetailContent user={props.userDetail} />
    </ScrollView>
  );
};

export const DelegateDetail = withStyles(DelegateDetailComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-11'],
  },
  txtTitle: {
    fontSize: pxToPercentage(18),
    ...textStyle.proTextRegular,
    textAlign: 'center',
    paddingVertical: pxToPercentage(10),
  },
}));
