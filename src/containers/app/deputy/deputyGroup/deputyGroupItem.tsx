import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { textStyle } from '@src/components';
import { RemoteImage } from '@src/assets/images';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { DeputyGroup as DeputyGroupModel } from '@src/core/models/deputy/deputyGroup.model';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';
import { SERVER_ADDRESS } from '../../../../../config';

interface ComponentProps {
  deputyGroup: DeputyGroupModel;
  onDeputyPress: (deputy: DeputyModel) => void;
}

export type DeputyGroupItemProps = ThemedComponentProps & ComponentProps;

const DeputyGroupItemComponent: React.FunctionComponent<DeputyGroupItemProps> = (props) => {
  const { themedStyle } = props;

  const onDeputyPress = (deputy: DeputyModel): void => {
    props.onDeputyPress(deputy);
  };

  const onRenderDeputies = (): React.ReactElement[] => {
    return props.deputyGroup.deputies.map((item, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => onDeputyPress(item)}
          style={themedStyle.viewItem}>
          <View style={themedStyle.viewBody}>
            <Image
              resizeMode='cover'
              source={(new RemoteImage(`${SERVER_ADDRESS}${item.avatar}`)).imageSource}
              style={themedStyle.imgAvatar}
            />
            <View style={themedStyle.viewInfo}>
              <Text
                numberOfLines={1}
                style={[
                  themedStyle.txtInfo,
                  themedStyle.txtBold,
                ]}>
                {'Đồng chí'}
              </Text>
              <Text
                numberOfLines={1}
                style={[
                  themedStyle.txtInfo,
                  themedStyle.txtBold,
                ]}>
                {item.fullName.toUpperCase()}
              </Text>
              <Text
                numberOfLines={6}
                style={[
                  themedStyle.txtInfo,
                  themedStyle.txtItalic,
                ]}>
                {item.position || item.position}
              </Text>
              <View style={themedStyle.viewRow}>
                <Text
                  numberOfLines={1}
                  style={[
                    themedStyle.txtInfo,
                    themedStyle.txtBold,
                  ]}>
                  {`Tổ: ${item.discussionGroup || 'Không'}`}
                </Text>
                <Text
                  numberOfLines={1}
                  style={[
                    themedStyle.txtInfo,
                    themedStyle.txtDeputyNumber,
                  ]}>
                  {'Số đại biểu: '}
                  <Text
                    numberOfLines={1}
                    style={[
                      themedStyle.txtInfo,
                      themedStyle.txtBold,
                    ]}>
                    {item.code}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.sectionGroup}>
        <Text style={themedStyle.txtGroup}>
          {props.deputyGroup.group}
        </Text>
      </View>
      <View style={themedStyle.sectionItem}>
        {onRenderDeputies()}
      </View>
    </View>
  );
};

export const DeputyGroupItem = withStyles(DeputyGroupItemComponent, (theme: ThemeType) => ({
  container: {
  },
  sectionGroup: {
    paddingVertical: pxToPercentage(10),
    justifyContent: 'center',
    paddingHorizontal: pxToPercentage(8),
    backgroundColor: theme['color-primary-2'],
  },
  sectionItem: {
    paddingHorizontal: pxToPercentage(8),
    paddingVertical: pxToPercentage(4),
  },
  viewItem: {
    marginVertical: pxToPercentage(4),
    borderRadius: pxToPercentage(5),
    backgroundColor: theme['color-basic-100'],
    ...viewStyle.shadow2,
  },
  viewBody: {
    flexDirection: 'row',
    padding: pxToPercentage(12.5),
  },
  txtGroup: {
    fontSize: pxToPercentage(14),
    color: theme['color-custom-100'],
    ...textStyle.proTextSemibold,
  },
  imgAvatar: {
    height: pxToPercentage(105),
    width: pxToPercentage(75),
    borderRadius: pxToPercentage(5),
    marginRight: pxToPercentage(12.5),
    alignSelf: 'center',
  },
  viewInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  viewRow: {
    flexDirection: 'row',
  },
  txtInfo: {
    fontSize: pxToPercentage(13),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  txtBold: {
    ...textStyle.proTextBold,
  },
  txtItalic: {
    ...textStyle.proTextRegularItalic,
  },
  txtBoldItalic: {
    ...textStyle.proTextBoldItalic,
  },
  txtDeputyNumber: {
    marginLeft: pxToPercentage(40),
  },
}));
