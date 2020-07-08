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
import {ProfileInfoV2} from '@src/components/profileInfo/profileinfov2.component';
import { userDataFake } from '@src/core/data/user';
import {HeaderFunctionContainer} from '@src/components/function/headerFunction.container';

const { width } = Dimensions.get('window');
const itemWidth: number = isTablet() ? (width - pxToPercentage(64)) / 3 : (width - pxToPercentage(48)) / 2;

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
      <ProfileInfoV2 user={userDataFake}/>
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
    padding: pxToPercentage(8),
  },
  viewCard: {
    width: pxToPercentage(300),
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  btnItem: {
    width: itemWidth,
    flexDirection: 'column',
    alignItems: 'center',
    height: itemWidth,
    borderRadius: pxToPercentage(8),
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
    maxWidth: itemWidth,
    margin: pxToPercentage(8),
    paddingTop: itemWidth / 3.75,
  },
  btnAlternative: {
    marginTop: pxToPercentage(8),
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: pxToPercentage(14),
    marginTop: pxToPercentage(2),
    ...textStyle.semibold,
  },
  icon: {
    width: itemWidth / 3,
    height: itemWidth / 3,
    tintColor: theme['color-primary-default'],
  },
}));
