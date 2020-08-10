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
import { ProfileInfoV3Tablet } from '@src/components/profileInfo/profileinfoV3.component.tablet';
import { DeputyDetailContentTablet } from './deputyDetailContent.component.tablet';
import { DeputyDetail as DeputyDetailModel } from '@src/core/models/deputy/deputyDetail.model';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';

interface ComponentProps {
  deputyDetails: DeputyDetailModel[];
  deputy: DeputyModel;
  onBackPress: () => void;
}

export type DeputyDetailTabletProps = ThemedComponentProps & ComponentProps;

const DeputyDetailTabletComponent: React.FunctionComponent<DeputyDetailTabletProps> = (props) => {
  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewCard}>
        <ProfileInfoV3Tablet deputy={props.deputy} />
        <ScrollView contentContainerStyle={themedStyle.scrollViewContainer}>
          <DeputyDetailContentTablet deputyDetails={props.deputyDetails} />
        </ScrollView>
      </View>
    </View>
  );
};

export const DeputyDetailTablet = withStyles(DeputyDetailTabletComponent, (theme: ThemeType) => ({
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
