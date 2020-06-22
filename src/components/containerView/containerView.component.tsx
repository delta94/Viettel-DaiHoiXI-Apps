import React from 'react';
import {
  ScrollView,
  ScrollViewProps,
} from 'react-native';

export type ContainerViewProps = ScrollViewProps;

/**
 * React Native ScrollView component, but modified to remove bounces by default
 *
 * Used everywhere per app, where content needs to be scrollable to fit layout to device screen
 */

export const ContainerView: React.FunctionComponent<ContainerViewProps> = (props) => {
  return (
    <ScrollView
      bounces={false}
      bouncesZoom={false}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
      {...props}
    />
  );
};
