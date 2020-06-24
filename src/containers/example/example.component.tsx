import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';

interface ComponentProps {
  example?: any;
}

export type ExampleProps = ThemedComponentProps & ComponentProps;

const ExampleComponent: React.FunctionComponent<ExampleProps> = (props) => {
  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <Text>
        {'Example'}
      </Text>
    </View>
  );
};

export const Example = withStyles(ExampleComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
