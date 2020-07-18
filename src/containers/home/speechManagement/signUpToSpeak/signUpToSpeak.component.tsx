import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Button } from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';

interface ComponentProps {
  example?: any;
}

export type SignUpToSpeakProps = ComponentProps & ThemedComponentProps;

const SignUpToSpeakComponent: React.FunctionComponent<SignUpToSpeakProps> = (props) => {
  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>

    </View>
  );
};

export const SignUpToSpeak = withStyles(SignUpToSpeakComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    backgroundColor: theme['color-custom-100'],
  },
  viewBox: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme['color-custom-100'],
    borderRadius: pxToPercentage(5),
    ...viewStyle.shadow2,
  },
}));
