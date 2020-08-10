import React from 'react';
import { ScrollView } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { ProfileInfoV3 } from '@src/components/profileInfo/profileinfoV3.component';
import { DeputyDetailContent } from './deputyDetailContent.component';
import { DeputyDetail as DeputyDetailModel } from '@src/core/models/deputy/deputyDetail.model';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';

interface ComponentProps {
  deputyDetails: DeputyDetailModel[];
  deputy: DeputyModel;
}

export type DeputyDetailProps = ThemedComponentProps & ComponentProps;

const DeputyDetailComponent: React.FunctionComponent<DeputyDetailProps> = (props) => {
  const { themedStyle } = props;

  return (
    <React.Fragment>
      <ScrollView
        style={themedStyle.container}
        contentContainerStyle={themedStyle.scrollViewContainer}>
        <ProfileInfoV3 deputy={props.deputy} />
        <DeputyDetailContent deputyDetails={props.deputyDetails} />
      </ScrollView>
    </React.Fragment>
  );
};

export const DeputyDetail = withStyles(DeputyDetailComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  scrollViewContainer: {
    padding: pxToPercentage(8),
    paddingBottom: pxToPercentage(20),
  },
}));
