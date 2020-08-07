import React from 'react';
import {
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { ProfileInfoV3 } from '@src/components/profileInfo/profileinfoV3.compoent';
import { DelegateDetailContent } from './delegateDetailContent.component';
import { Delegate } from '@src/core/models/delegate/delegate.model';
import { DelegateDetail as  DelegateDetailModel} from '@src/core/models/delegate/delegateDetail.model';

interface ComponentProps {
  delegateDetail: DelegateDetailModel[];
  deputy: Delegate;
}

export type DelegateDetailProps = ThemedComponentProps & ComponentProps;

const DelegateDetailComponent: React.FunctionComponent<DelegateDetailProps> = (props) => {
  const { themedStyle } = props;

  return (
    <React.Fragment>
      <ScrollView
        style={themedStyle.container}
        contentContainerStyle={themedStyle.scrollViewContainer}>
        <ProfileInfoV3 user={props.deputy} />
        <DelegateDetailContent user={props.delegateDetail} />
      </ScrollView>
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
    paddingBottom: pxToPercentage(20),
  },
}));
