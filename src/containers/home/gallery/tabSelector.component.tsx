import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
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

interface ComponentProps {
  example?: any;
}

const tabDataFake: string[] = [
  'Thành phố 40 năm xây dựng và phát triển',
  'Đại hội Đảng bộ lần thứ X',
  'Lãnh đạo và đồng hành',
];

export type TabSelectorProps = ComponentProps & ThemedComponentProps;

const TabSelectorComponent: React.FunctionComponent<TabSelectorProps> = (props) => {
  const [tabSelected, setTabSelected] = useState<string>(tabDataFake[0]);

  const { themedStyle } = props;

  const renderTabs = (): React.ReactElement[] => {
    return tabDataFake.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.75}
          onPress={() => setTabSelected(item)}
          style={[
            themedStyle.viewTab,
            item === tabSelected && themedStyle.viewTabSelected,
          ]}>
          <Text
          numberOfLines={2}
            style={[
              themedStyle.txtTab,
              item === tabSelected && themedStyle.txtTabSelected,
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <Layout style={themedStyle.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={themedStyle.scrollViewContainer}
        showsHorizontalScrollIndicator={false}>
        {renderTabs()}
      </ScrollView>
    </Layout>
  );
};

export const TabSelector = withStyles(TabSelectorComponent, (theme: ThemeType) => ({
  container: {
    height: pxToPercentage(70),
  },
  scrollViewContainer: {
    alignItems: 'center',
  },
  viewTab: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: pxToPercentage(8),
    padding: pxToPercentage(4),
    width: pxToPercentage(162),
    height: pxToPercentage(50),
    borderRadius: pxToPercentage(5),
    backgroundColor: theme['color-primary-2'],
    ...viewStyle.shadow3,
  },
  viewTabSelected: {
    backgroundColor: theme['color-custom-100'],
  },
  txtTab: {
    fontSize: pxToPercentage(14),
    color: theme['color-custom-100'],
    ...textStyle.proTextRegular,
    textAlign: 'center',
  },
  txtTabSelected: {
    fontSize: pxToPercentage(14),
    color: theme['color-primary-2'],
    ...textStyle.proTextRegular,
  },
}));
