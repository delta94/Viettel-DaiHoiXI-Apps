import React from 'react';
import {
  Text,
  Dimensions,
  View,
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
import { ProfileInfoV2 } from '@src/components/profileInfo/profileinfov2.component';
import { userDataFake } from '@src/core/data/user';
import { FunctionHeader } from '@src/components/function/headerFunction.component';
import { Footer } from '@src/components/footer/home.footer';
import { types } from '@babel/core';

const { width } = Dimensions.get('window');
const itemWidth: number = isTablet() ? (width - pxToPercentage(64)) / 4 : (width - pxToPercentage(48)) / 2;

interface ComponentProps {
  functions: FunctionModel[];
  onAlternativeFunctionPress: (type: number) => void;
  onPressBackIcon: () => void;
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
      <FunctionHeader
        onPressBackIcon={props.onPressBackIcon}
      />
      <ProfileInfoV2 user={userDataFake} />
        <List
          data={props.functions}
          numColumns={isTablet() ? 4 : 2}
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
      <Footer />
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
  },
  contentContainer: {
    padding: pxToPercentage(12),
  },
  viewCard: {
    width: pxToPercentage(186),
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  btnItem: {
    width: pxToPercentage(160), // w 186
    height: pxToPercentage(148), // h 174
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: pxToPercentage(8),
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
    margin: pxToPercentage(12.5),
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
