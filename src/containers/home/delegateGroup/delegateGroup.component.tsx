import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  DelegateGroup as DelegateGroupModel,
  DelegateContent,
} from '@src/core/models/delegateGroup/delegateGroup.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { DelegateGroupContentItem } from './delegateGroupContentItem.component';
import { DelegateGroupFunctionHeaderItem } from './delegateGroupFunctionHeaderItem.component';
import { DelegateGroupSearchBar } from './delegateGroupSearchBar.component';

interface ComponentProps {
  delegateGroups: DelegateGroupModel[];
  onHeaderDelegateGroupPress: (type: number) => void;
  onSearchTextChange: () => void;
  sections: number;
  onChangeText: () => void;
}

export type ProgramProps = ThemedComponentProps & ComponentProps;

const DelegateGroupComponent: React.FunctionComponent<ProgramProps> = (props) => {

  const { themedStyle } = props;

  const onChangeText = (): void => {
    props.onChangeText();
  };

  const renderDelegateGroupContents = (contents: DelegateContent[]): React.ReactElement[] => {
    return contents.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.75}>
          <DelegateGroupContentItem delegateGroup={item} />
        </TouchableOpacity>
      );
    });
  };

  const renderHeaderFunctionDelegateGroups = (): React.ReactElement[] => {
    return props.delegateGroups.map((item, index) => {
      return (
        <DelegateGroupFunctionHeaderItem
          onHeaderDelegateGroupPress={props.onHeaderDelegateGroupPress}
          delegateGroups={item.section}
          sections={props.sections}
        />
      );
    });
  };

  const renderDelegateGroups = (): React.ReactElement[] => {
    return props.delegateGroups.map((item, index) => {
      if (item.section === props.sections) {
        return (
          <React.Fragment key={index}>
            <View style={themedStyle.viewSection}>
              <Text style={themedStyle.txtSection}>
                {`Tổ ${item.section}`}
              </Text>
            </View>
            {renderDelegateGroupContents(item.contents)}
          </React.Fragment>
        );
      }
    });
  };

  return (
    <SafeAreaView style={themedStyle.container}>
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={themedStyle.viewHeaderFuction}>
          {renderHeaderFunctionDelegateGroups()}
        </ScrollView>
      </View>
      <DelegateGroupSearchBar
        onSearchTextChange={props.onSearchTextChange}
        onChangeText={onChangeText}
      />
      <ScrollView
        style={themedStyle.scrollView}
        contentContainerStyle={themedStyle.scrollViewContainer}>
        {renderDelegateGroups()}
      </ScrollView>
    </SafeAreaView>
  );
};

export const DelegateGroup = withStyles(DelegateGroupComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  scrollView: {
    paddingHorizontal: pxToPercentage(16),
  },
  scrollViewContainer: {
    paddingBottom: pxToPercentage(16),
  },
  backdrop: {
    backgroundColor: theme['color-custom-800'],
  },
  txtChooseDate: {
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    marginRight: pxToPercentage(15),
    marginBottom: pxToPercentage(5),
    ...textStyle.semibold,
  },
  viewSection: {
    paddingTop: pxToPercentage(16),
  },
  txtSection: {
    textAlign: 'center',
    color: 'red',
    fontSize: pxToPercentage(16),
    ...textStyle.regular,
  },
  viewHeaderFuction: {
    flexDirection: 'row',
    marginHorizontal: pxToPercentage(8),
  },
}));
