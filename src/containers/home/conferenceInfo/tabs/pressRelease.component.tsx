import React from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
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
import { DateList } from '../dateList.component';
import { PressRelease as PressReleaseModel } from '@src/core/models/pressRelease/pressRelease.model';
import { AttachmentIcon } from '@src/assets/icons';
import { AttachmentModal } from '../attachmentModel.component';

interface ComponentProps {
  pressReleases: PressReleaseModel[];
  onPressReleaseItemPress: (pressRelease: PressReleaseModel) => void;
}

export type PressReleaseProps = ComponentProps & ThemedComponentProps;

const PressReleaseComponent: React.FunctionComponent<PressReleaseProps> = (props) => {
  const { themedStyle } = props;
  const [isShowModal, setIsShowModal] = React.useState<boolean>(false);

  const onPressReleaseItemPress = (pressRelease: PressReleaseModel): void => {
    return props.onPressReleaseItemPress(pressRelease);
  };

  const onAttachMentIconPress = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <Layout style={themedStyle.container}>
      <DateList />
      <FlatList
        data={props.pressReleases}
        extraData={props.pressReleases}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={themedStyle.scrollViewContainer}
        renderItem={({ item, index }) => {
          return (
            <View style={themedStyle.btnItem}>
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => onPressReleaseItemPress(item)}>
                <Text style={themedStyle.txtTitle}>
                  {item.title}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onAttachMentIconPress}
                activeOpacity={0.75}
                style={themedStyle.viewAttachment}>
                {AttachmentIcon(themedStyle.icon)}
                <Text style={themedStyle.txtAttachment}>
                  {'Tập tin đính kèm'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <AttachmentModal
      isVisible={isShowModal}
      onClosePress={onAttachMentIconPress}
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
  viewAttachment: {
    flexDirection: 'row',
  },
  icon: {
    height: pxToPercentage(20),
    width: pxToPercentage(20),
  },
  txtAttachment: {
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
    marginLeft: pxToPercentage(10),
  },
}));
