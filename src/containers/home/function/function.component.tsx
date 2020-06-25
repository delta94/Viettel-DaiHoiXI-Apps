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
  Modal,
  Card,
  Button,
} from '@kitten/ui';
import { FunctionModel } from '@src/core/models/function/function.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { AlternativeFunctionEnum } from '@src/core/utils/constants';
import { isTablet } from 'react-native-device-info';

const { width } = Dimensions.get('window');
const itemWidth: number = width / (isTablet() ? 3 : 2) - pxToPercentage(16);

interface ComponentProps {
  functions: FunctionModel[];
  onAlternativeFunctionPress: (type: number) => void;
}

export type FunctionProps = ThemedComponentProps & ComponentProps;

const FunctionComponent: React.FunctionComponent<FunctionProps> = (props) => {
  const [visible, setVisible] = React.useState(false);

  const onFunctionItemPress = (): void => {
    setVisible(true);
  };

  const onAlternativeFunctionPress = (type: number): void => {
    onHideModal();
    props.onAlternativeFunctionPress(type);
  };

  const onHideModal = (): void => {
    setVisible(false);
  };

  const { themedStyle } = props;

  return (
    <React.Fragment>
      <List
        data={props.functions}
        numColumns={isTablet() ? 3 : 2}
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
      <Modal
        visible={visible}
        backdropStyle={themedStyle.backdrop}
        onBackdropPress={onHideModal}>
        <Card
          disabled={true}
          style={themedStyle.viewCard}>
          <Button
            size={isTablet() ? 'giant' : 'large'}
            onPress={() => onAlternativeFunctionPress(AlternativeFunctionEnum.Program)}>
            {'Chương trình'}
          </Button>
          <Button
            size={isTablet() ? 'giant' : 'large'}
            style={themedStyle.btnAlternative}
            onPress={() => onAlternativeFunctionPress(AlternativeFunctionEnum.Notification)}>
            {'Thông báo'}
          </Button>
          <Button
            size={isTablet() ? 'giant' : 'large'}
            style={themedStyle.btnAlternative}
            onPress={() => onAlternativeFunctionPress(AlternativeFunctionEnum.PressRelease)}>
            {'Thông cáo báo chí'}
          </Button>
        </Card>
      </Modal>
    </React.Fragment>
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
  viewCard: {
    width: pxToPercentage(300),
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  btnItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: itemWidth,
    borderRadius: pxToPercentage(8),
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
    maxWidth: itemWidth,
    marginHorizontal: pxToPercentage(8),
    marginVertical: pxToPercentage(8),
    paddingVertical: 0,
    paddingTop: itemWidth / 3.75,
  },
  btnAlternative: {
    marginTop: pxToPercentage(8),
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    marginTop: pxToPercentage(2),
    ...textStyle.semibold,
  },
  icon: {
    width: itemWidth / 3,
    height: itemWidth / 3,
    tintColor: theme['color-primary-default'],
  },
}));
