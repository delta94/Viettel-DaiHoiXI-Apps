import React from 'react';
import {
  Text,
  ScrollView,
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
import { ProfileInfoV2 } from '@src/components/profileInfo/profileinfoV2.component';
import { HeaderFunction } from '@src/components/headerFunction/headerFunction.component';
import { HomeFooter } from '@src/components/homeFooter/homeFooter.component';
import { User } from '@src/core/models/user/user.model';

interface ComponentProps {
  user: User;
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
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <HeaderFunction
          onPressBackIcon={props.onPressBackIcon}
        />
        <ProfileInfoV2 user={props.user} />
        <List
          scrollEnabled={false}
          data={props.functions}
          numColumns={4}
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
      </ScrollView>
      <HomeFooter />
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
    backgroundColor: theme['color-primary-2'],
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
    justifyContent: 'center',
    borderRadius: pxToPercentage(8),
    borderWidth: pxToPercentage(2),
    borderColor: theme['color-primary-3'],
    margin: pxToPercentage(12.5),
    backgroundColor: theme['color-primary-2'],
  },
  btnAlternative: {
    marginTop: pxToPercentage(8),
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: pxToPercentage(14),
    marginTop: pxToPercentage(2),
    paddingVertical: pxToPercentage(2),
    color: theme['color-primary-3'],
    ...textStyle.regular,
  },
  icon: {
    width: pxToPercentage(50),
    height: pxToPercentage(46),
    tintColor: theme['color-primary-3'],
    resizeMode: 'contain',
  },
}));
