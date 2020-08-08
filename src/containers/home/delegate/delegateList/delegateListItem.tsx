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
import { DelegateList as DelegateListModel } from '@src/core/models/delegate/delegateList.model';
import { viewStyle } from '@src/components/viewStyle';
import { Delegate } from '@src/core/models/delegate/delegate.model';

interface ComponentProps {
  delegateList: DelegateListModel;
  onDelegateItemPress: (deputy: Delegate) => void;
}

export type DelegateListItemProps = ThemedComponentProps & ComponentProps;

const DelegateListItemComponent: React.FunctionComponent<DelegateListItemProps> = (props) => {
  const { themedStyle } = props;

  const onDelegateItemPress = (deputy: Delegate): void => {
    props.onDelegateItemPress(deputy);
  };

  const onRenderDelegate = (): React.ReactElement[] => {
    return props.delegateList.deputies.map((item, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => onDelegateItemPress(item)}
          style={themedStyle.viewItem}>
          <View style={themedStyle.viewBody}>
            <Image
              resizeMode='cover'
              source={(new RemoteImage(`http://daihoi11.imt-soft.com:8080${item.avatar}`)).imageSource}
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
                {item.position ? item.position : 'a'}
              </Text>
              <View style={themedStyle.viewRow}>
                <Text
                  numberOfLines={1}
                  style={[
                    themedStyle.txtInfo,
                    themedStyle.txtBold,
                  ]}>
                  {item.discussionGroup ? item.discussionGroup : 'Tổ: Không'}
                </Text>
                <Text
                  numberOfLines={1}
                  style={[
                    themedStyle.txtInfo,
                    themedStyle.txtDelegateNumber,
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
          {props.delegateList.group}
        </Text>
      </View>
      <View style={themedStyle.sectionItem}>
        {onRenderDelegate()}
      </View>
    </View>
  );
};

export const DelegateListItem = withStyles(DelegateListItemComponent, (theme: ThemeType) => ({
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
  txtDelegateNumber: {
    marginLeft: pxToPercentage(40),
  },
}));
