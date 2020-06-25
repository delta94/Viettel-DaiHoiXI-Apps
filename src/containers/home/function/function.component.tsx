import React from 'react';
import {
  Text,
  Dimensions,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  List,
  ListItem,
} from '@kitten/ui';
import { FunctionModel } from '@src/core/models/function/function.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';

const { width } = Dimensions.get('window');
const itemWidth: number = width / 2 - pxToPercentage(16);

interface ComponentProps {
  functions: FunctionModel[];
  onFunctionItemPress: () => void;
}

export type FunctionProps = ThemedComponentProps & ComponentProps;

const FunctionComponent: React.FunctionComponent<FunctionProps> = (props) => {
  const onFunctionItemPress = (): void => {
    props.onFunctionItemPress();
  };

  const { themedStyle } = props;

  return (
    <List
      data={props.functions}
      numColumns={2}
      extraData={props.functions}
      style={themedStyle.container}
      contentContainerStyle={themedStyle.contentContainer}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => {
        return (
          <ListItem
            activeOpacity={0.75}
            onPress={onFunctionItemPress}
            style={themedStyle.btnItem}>
            {item.icon(themedStyle.icon)}
            <Text style={themedStyle.txtTitle}>
              {item.title}
            </Text>
          </ListItem>
        );
      }}
    />
  );
};

export const Function = withStyles(FunctionComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  contentContainer: {
    paddingHorizontal: pxToPercentage(8),
    paddingVertical: pxToPercentage(8),
  },
  btnItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: pxToPercentage(168),
    borderRadius: pxToPercentage(8),
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
    maxWidth: itemWidth,
    marginHorizontal: pxToPercentage(8),
    marginVertical: pxToPercentage(8),
    paddingVertical: 0,
    paddingTop: pxToPercentage(50),
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: pxToPercentage(14),
    marginTop: pxToPercentage(2),
    ...textStyle.semibold,
  },
  icon: {
    width: pxToPercentage(50),
    height: pxToPercentage(50),
    tintColor: theme['color-primary-default'],
  },
}));
