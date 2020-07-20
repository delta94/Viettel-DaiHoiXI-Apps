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
import { DownloadIcon } from '@src/assets/icons';
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
      <ScrollView style={themedStyle.viewCard}>
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
          <Text style={themedStyle.txtFileName}>
            {pressRelease.file}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => { }}
          style={themedStyle.btnDownload}>
          {DownloadIcon(themedStyle.iconDownload)}
          <Text style={themedStyle.txtDownload}>
            {'Tải về'}
          </Text>
        </TouchableOpacity>
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
    padding: pxToPercentage(20),
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
  txtBold: {
    ...textStyle.proTextBold,
  },
  viewFile: {
    marginTop: pxToPercentage(30),
    flexDirection: 'row',
  },
  txtFileTitle: {
    fontSize: pxToPercentage(34),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegularItalic,
  },
  txtFileName: {
    fontSize: pxToPercentage(34),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  btnDownload: {
    marginTop: pxToPercentage(20),
    alignSelf: 'center',
    alignItems: 'center',
  },
  txtDownload: {
    marginTop: pxToPercentage(2.5),
    fontSize: pxToPercentage(34),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  iconDownload: {
    width: pxToPercentage(100),
    height: pxToPercentage(100),
  },
}));
