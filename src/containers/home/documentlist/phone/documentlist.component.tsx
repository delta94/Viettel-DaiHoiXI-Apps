import React, { useState } from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { DocumentSection as DocumentSectionModel } from '@src/core/models/document/document.model';
import { TabBar, Tab } from 'react-native-ui-kitten/ui';
import { DocumentTabContent } from './documentTabContent.component';
import { MenuIcon } from '@src/assets/icons';

interface ComponentProps {
  documentSections: DocumentSectionModel[];
  onBackPress?: () => void;
}

export type DocumentListProps = ComponentProps & ThemedComponentProps;

const DocumentListComponent: React.FunctionComponent<DocumentListProps> = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  const onTabSelect = (selectedTabIndexParam: number) => {
    setSelectedTabIndex(selectedTabIndexParam);
  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>

      <View style={themedStyle.viewContent}>
        <TabBar
          style={themedStyle.tabView}
          indicatorStyle={themedStyle.tabViewIndicator}
          selectedIndex={selectedTabIndex}
          onSelect={onTabSelect}>
          <Tab
            title='TL CTCĐ'
            icon={MenuIcon}
            titleStyle={themedStyle.tabTitle} />
          <Tab
            title='TL nội bộ'
            icon={MenuIcon}
            titleStyle={themedStyle.tabTitle} />
          <Tab
            title='TL NCTK'
            icon={MenuIcon}
            titleStyle={themedStyle.tabTitle} />
        </TabBar>
        <DocumentTabContent
          onBackPress={props.onBackPress}
          documentSections={props.documentSections} />
      </View>
    </View>
  );
};

export const DocumentList = withStyles(DocumentListComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    paddingBottom: pxToPercentage(20),
    backgroundColor: theme['color-primary-11'],
  },
  viewContent: {
    flex: 1,
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-custom-100'],
    overflow: 'hidden',
    ...viewStyle.shadow2,
  },
  tabView: {
    backgroundColor: theme['color-primary-11'],
    borderTopLeftRadius: pxToPercentage(12.5),
    borderTopRightRadius: pxToPercentage(12.5),
  },
  tabBar: {
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
