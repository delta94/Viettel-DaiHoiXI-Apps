import React from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Layout } from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';

interface ComponentProps {
  pressReleases: PressReleaseModel[];
  onPressReleaseItemPress: (pressRelease: PressReleaseModel) => void;
}

export type PressReleaseProps = ComponentProps & ThemedComponentProps;

const PressReleaseComponent: React.FunctionComponent<PressReleaseProps> = (props) => {
  const { themedStyle } = props;

  const onPressReleaseItemPress = (pressRelease: PressReleaseModel): void => {
    props.onPressReleaseItemPress(pressRelease);
  };

  return (
    <Layout style={themedStyle.container}>
      <FlatList
        data={props.pressReleases}
        extraData={props.pressReleases}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={themedStyle.scrollViewContainer}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => onPressReleaseItemPress(item)}
              style={themedStyle.btnItem}>
              <Text style={themedStyle.txtTitle}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </Layout>
  );
};

export const PressRelease = withStyles(PressReleaseComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  scrollViewContainer: {
    padding: pxToPercentage(8),
    paddingTop: 0,
  },
  btnItem: {
    padding: pxToPercentage(8),
    marginTop: pxToPercentage(8),
    borderRadius: pxToPercentage(5),
    justifyContent: 'center',
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  txtTitle: {
    fontSize: pxToPercentage(14),
    textAlign: 'justify',
    lineHeight: pxToPercentage(25),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
}));
