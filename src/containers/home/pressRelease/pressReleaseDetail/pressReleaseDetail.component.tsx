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
import { DownloadIcon } from '@src/assets/icons';
import { SafeAreaView } from 'react-navigation';
import { isTablet } from 'react-native-device-info';

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
    paddingTop: pxToPercentage(8),
    backgroundColor: theme['background-basic-color-2'],
  },
  viewItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: pxToPercentage(8),
    marginHorizontal: pxToPercentage(16),
    paddingHorizontal: pxToPercentage(9),
    paddingVertical: pxToPercentage(9),
    borderRadius: pxToPercentage(4),
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
  },
  txtRead: {
    color: theme['text-hint-color'],
  },
  txtTitle: {
    textAlign: 'justify',
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.semibold,
  },
  txtDescription: {
    textAlign: 'justify',
    marginTop: pxToPercentage(15),
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.regular,
  },
  viewFile: {
    marginTop: pxToPercentage(30),
    flexDirection: 'row',
  },
  txtFileTitle: {
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.italic,
  },
  txtFileName: {
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.regular,
  },
  btnDownload: {
    marginTop: pxToPercentage(7.5),
    alignSelf: 'center',
    alignItems: 'center',
  },
  txtDownload: {
    marginTop: pxToPercentage(2.5),
    fontSize: isTablet() ? pxToPercentage(9) : pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.regular,
  },
  iconDownload: {
    width: pxToPercentage(50),
    height: pxToPercentage(50),
  },
}));
