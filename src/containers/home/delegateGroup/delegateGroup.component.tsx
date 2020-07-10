import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
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
import { DelegateGroupContentItem } from './delegateGroupContentItem.componet';
import { DelegateGroupFunctionHeaderItem } from './delegateGroupFunctionHeaderItem';
import { DelegateGroupSearchBar } from './delegateGroupSearchBar.component';

interface ComponentProps {
  delegateGroups: DelegateGroupModel[];
}

export type ProgramProps = ThemedComponentProps & ComponentProps;

const DelegateGroupComponent: React.FunctionComponent<ProgramProps> = (props) => {
  const [date, setDate] = React.useState<Date>(new Date());
  // const [DelegateContentSelected, setDelegateContentSelected] = React.useState<DelegateContent>(new DelegateContent);

  const { themedStyle } = props;

  const renderDelegateGroupContents = (contents: DelegateContent[]): React.ReactElement[] => {
    return contents.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.75}>
          <DelegateGroupContentItem delegateGroups={item} />
        </TouchableOpacity>
      );
    });
  };

  const renderHeaderFunctionDelegateGroups = (): React.ReactElement[] => {
    return props.delegateGroups.map((item, index) => {
      return (
        <DelegateGroupFunctionHeaderItem delegateGroups={item.section} />
      );
    });
  };

  const renderDelegateGroups = (): React.ReactElement[] => {
    return props.delegateGroups.map((item, index) => {
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
    });
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewHeaderFuction}>
        {renderHeaderFunctionDelegateGroups()}
      </View>
      <DelegateGroupSearchBar />
      <ScrollView
        style={themedStyle.scrollView}
        contentContainerStyle={themedStyle.scrollViewContainer}>
        {renderDelegateGroups()}
      </ScrollView>
    </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
