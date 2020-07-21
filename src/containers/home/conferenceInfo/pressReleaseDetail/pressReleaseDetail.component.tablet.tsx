import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { BackHeader } from '@src/components/header/backHeader.component';

interface ComponentProps {
  pressRelease: PressReleaseModel;
  onBackPress: () => void;
}

export type PressReleaseDetailTabletProps = ThemedComponentProps & ComponentProps;

const PressReleaseDetailTabletComponent: React.FunctionComponent<PressReleaseDetailTabletProps> = (props) => {
  const { themedStyle, pressRelease } = props;

  const onMessagePress = (): void => {
  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {
  };

  return (
    <View style={themedStyle.container}>
      <BackHeader
        title={'CHI TIẾT THÔNG CÁO BÁO CHÍ'}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={themedStyle.viewCard}>
        <Text style={themedStyle.txtTitle}>
          {pressRelease.title}
        </Text>
        <Text
          style={themedStyle.txtDescription}>
          {'Nội dung: '}
          <Text style={themedStyle.txtDescription}>
            {pressRelease.description}
          </Text>
        </Text>
        <View style={themedStyle.viewFile}>
          <Text style={themedStyle.txtFileTitle}>
            {'Tập tin đính kèm: '}
          </Text>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => { }}>
            <Text style={themedStyle.txtFileName}>
              {pressRelease.file}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export const PressReleaseDetailTablet = withStyles(PressReleaseDetailTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewCard: {
    flex: 1,
    borderRadius: pxToPercentage(40),
    paddingVertical: pxToPercentage(40),
    paddingHorizontal: pxToPercentage(400),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  txtTitle: {
    textAlign: 'justify',
    lineHeight: pxToPercentage(60),
    fontSize: pxToPercentage(36),
    color: theme['text-basic-color'],
    ...textStyle.proTextBold,
  },
  txtDescription: {
    textAlign: 'justify',
    lineHeight: pxToPercentage(55),
    marginTop: pxToPercentage(15),
    fontSize: pxToPercentage(34),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  viewFile: {
    marginTop: pxToPercentage(30),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  txtFileTitle: {
    fontSize: pxToPercentage(34),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  txtFileName: {
    fontSize: pxToPercentage(34),
    color: theme['color-blue-url-100'],
    ...textStyle.proTextRegularItalic,
  },
}));
