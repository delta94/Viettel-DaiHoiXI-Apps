import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  TabView,
  Tab,
} from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { Speech as SpeechModel } from '@src/core/models/speech/speech.model';
import { SpeechItem } from './speechItem.component';
import { SpeechStatusEnum } from '@src/core/utils/constants';

interface ComponentProps {
  speechs: SpeechModel[];
}

export type SpeechListProps = ComponentProps & ThemedComponentProps;

const SpeechListComponent: React.FunctionComponent<SpeechListProps> = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const onTabSelect = (selectedTabIndexParam: number) => {
    setSelectedTabIndex(selectedTabIndexParam);
  };

  const onGetPendingSpeechs = (): SpeechModel[] => {
    return props.speechs.filter(item => item.status === SpeechStatusEnum.Pending);
  };

  const onGetAcceptedSpeechs = (): SpeechModel[] => {
    return props.speechs.filter(item => [
      SpeechStatusEnum.Accepted,
      SpeechStatusEnum.Speaking,
    ].includes(item.status));
  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewContent}>
        <TabView
          style={themedStyle.tabView}
          tabBarStyle={themedStyle.tabBar}
          indicatorStyle={themedStyle.tabViewIndicator}
          selectedIndex={selectedTabIndex}
          onSelect={onTabSelect}>
          <Tab
            title='Chờ duyệt'
            titleStyle={themedStyle.tabTitle}>
            <FlatList
              data={onGetPendingSpeechs()}
              keyExtractor={(item, index) => index.toString()}
              extraData={props.speechs}
              contentContainerStyle={themedStyle.flatListContainer}
              renderItem={({ item, index }) => {
                return (
                  <SpeechItem
                    speech={item}
                  />
                );
              }}
            />
          </Tab>
          <Tab
            title='Chờ phát biểu'
            titleStyle={themedStyle.tabTitle}>
            <FlatList
              data={onGetAcceptedSpeechs()}
              keyExtractor={(item, index) => index.toString()}
              extraData={props.speechs}
              contentContainerStyle={themedStyle.flatListContainer}
              renderItem={({ item, index }) => {
                return (
                  <SpeechItem
                    index={++index}
                    speech={item}
                  />
                );
              }}
            />
          </Tab>
        </TabView>
      </View>
      <SafeAreaView />
    </View>
  );
};

export const SpeechList = withStyles(SpeechListComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    backgroundColor: theme['color-primary-11'],
  },
  flatListContainer: {
    paddingHorizontal: pxToPercentage(8),
  },
  viewContent: {
    flex: 1,
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  tabView: {
    flex: 1,
    backgroundColor: theme['color-primary-11'],
    borderRadius: pxToPercentage(12.5),
  },
  tabBar: {
    height: pxToPercentage(50),
    backgroundColor: theme['color-custom-100'],
  },
  tabViewIndicator: {
    backgroundColor: theme['color-primary-2'],
  },
  tabTitle: {
    fontWeight: '500',
    ...textStyle.proTextRegular,
  },
}));
