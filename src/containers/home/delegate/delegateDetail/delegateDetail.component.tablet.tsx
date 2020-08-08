import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { ProfileInfoV3Tablet } from '@src/components/profileInfo/profileinfoV3.compoent.tablet';
import { DelegateDetailContentTablet } from './delegateDetailContent.component.tablet';
import { Delegate } from '@src/core/models/delegate/delegate.model';
import { DelegateDetail } from '@src/core/models/delegate/delegateDetail.model';

interface ComponentProps {
  delegateDetail: DelegateDetail[];
  deputy: Delegate;
  onBackPress: () => void;
}

export type DelegateDetailTabletProps = ThemedComponentProps & ComponentProps;

const DelegateDetailTabletComponent: React.FunctionComponent<DelegateDetailTabletProps> = (props) => {
  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <ProfileInfoV3Tablet user={props.deputy} />
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
