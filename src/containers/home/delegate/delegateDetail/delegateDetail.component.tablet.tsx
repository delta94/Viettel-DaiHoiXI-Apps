import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { UserDetail as UserDetailModel } from '@src/core/models/user/userDetail.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { BackHeader } from '@src/components/header/backHeader.component';
import { ProfileInfoV3Tablet } from '@src/components/profileInfo/profileinfoV3.compoent.tablet';
import { DelegateDetailContentTablet } from './delegateDetailContent.component.tablet';

interface ComponentProps {
  delegateDetail: UserDetailModel;
  onBackPress: () => void;
}

export type DelegateDetailTabletProps = ThemedComponentProps & ComponentProps;

const DelegateDetailTabletComponent: React.FunctionComponent<DelegateDetailTabletProps> = (props) => {
  const { themedStyle } = props;

  const onMessagePress = (): void => {

  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {

  };

  return (
    <View style={themedStyle.container}>
      <BackHeader
        title={'THÔNG TIN ĐẠI BIỂU'}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress}
      />
      <View style={themedStyle.viewCard}>
        <ProfileInfoV3Tablet user={props.delegateDetail} />
        <ScrollView contentContainerStyle={themedStyle.scrollViewContainer}>
          <DelegateDetailContentTablet user={props.delegateDetail} />
        </ScrollView>
      </View>
    </View>
  );
};

export const DelegateDetailTablet = withStyles(DelegateDetailTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewCard: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: pxToPercentage(40),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  scrollViewContainer: {

  },
}));
