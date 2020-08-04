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
import { SafeAreaView } from 'react-navigation';
import { viewStyle } from '@src/components/viewStyle';
import { DownloadIcon } from '@src/assets/icons';

interface ComponentProps {
  pressRelease: PressReleaseModel;
}

export type PressReleaseDetailProps = ThemedComponentProps & ComponentProps;

const PressReleaseDetailComponent: React.FunctionComponent<PressReleaseDetailProps> = (props) => {
  const { themedStyle, pressRelease } = props;

  return (
    <ScrollView style={themedStyle.container}>
      <SafeAreaView>
        <View style={themedStyle.viewItem}>
          <Text style={themedStyle.txtTitle}>
            {pressRelease.title}
          </Text>
          <Text style={themedStyle.txtDescription}>
            {pressRelease.description}
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
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export const PressReleaseDetail = withStyles(PressReleaseDetailComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    color: theme['color-custom-100'],
  },
  viewItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: pxToPercentage(8),
    borderRadius: pxToPercentage(5),
    justifyContent: 'center',
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  txtTitle: {
    textAlign: 'justify',
    lineHeight: pxToPercentage(25),
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.proTextBold,
  },
  txtDescription: {
    textAlign: 'justify',
    lineHeight: pxToPercentage(25),
    marginTop: pxToPercentage(15),
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  viewFile: {
    marginTop: pxToPercentage(30),
    flexDirection: 'row',
  },
  txtFileTitle: {
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegularItalic,
  },
  txtFileName: {
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  btnDownload: {
    marginTop: pxToPercentage(7.5),
    alignSelf: 'center',
    alignItems: 'center',
  },
  txtDownload: {
    marginTop: pxToPercentage(2.5),
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  iconDownload: {
    width: pxToPercentage(40),
    height: pxToPercentage(40),
  },
}));
