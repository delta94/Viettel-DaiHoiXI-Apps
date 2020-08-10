import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { DeputyDiscussionGroup } from './deputyDiscussionGroup.component';
import { delegateGroupDataFake } from '@src/core/data/delegateGroup';
import { delegateListDataFake2 } from '@src/core/data/delegateList';
import { DeputyDiscussionGroupTablet } from './deputyDiscussionGroup.component.tablet';
import { isTablet } from 'react-native-device-info';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';

export const DeputyDiscussionGroupContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DeputyDiscussionGroupContainer';

  const onDeputyPress = (deputy: DeputyModel): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'deputyDetail',
      params: {
        deputy,
      },
    });
  };

  if (isTablet()) {
    return (
      <DeputyDiscussionGroupTablet
        delegateList={delegateListDataFake2}
        onDelegateItemPress={onDeputyPress}
      />
    );
  }

  return (
    <DeputyDiscussionGroup
      deputyDiscussionGroups={delegateGroupDataFake}
      onDeputyPress={onDeputyPress}
    />
  );
};
