import React from 'react';
import {
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { UserDetail as UserDetailModel } from '@src/core/models/user/userDetail.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { ProfileInfoV3 } from '@src/components/profileInfo/profileinfoV3.compoent';
import { DelegateDetailContent } from './delegateDetailContent.component';

interface ComponentProps {
  delegateDetail: UserDetailModel;
}

export type DelegateDetailProps = ThemedComponentProps & ComponentProps;

const DelegateDetailComponent: React.FunctionComponent<DelegateDetailProps> = (props) => {
  const { themedStyle } = props;

  return (
    <React.Fragment>
      <ScrollView
        style={themedStyle.container}
        contentContainerStyle={themedStyle.scrollViewContainer}>
        <ProfileInfoV3 user={props.delegateDetail} />
        <DelegateDetailContent user={props.delegateDetail} />
      </ScrollView>
      <SafeAreaView />
    </React.Fragment>
  );
};

export const DelegateDetail = withStyles(DelegateDetailComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  scrollViewContainer: {
    padding: pxToPercentage(8),
  },
}));
