import React from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import { Layout } from '@kitten/ui';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  pxToPercentage,
  isEmpty,
} from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { Program as ProgramModel } from '@src/core/models/program/program.model';
import { ArrowHeadDownIconFill } from '@src/assets/icons';
import { DateList } from '../dateList.component';

interface ComponentProps {
  programs: ProgramModel[];
}

export type ProgramProps = ComponentProps & ThemedComponentProps;

const ProgramComponent: React.FunctionComponent<ProgramProps> = (props) => {
  const { themedStyle } = props;

  const renderPrograms = (): React.ReactElement[] => {
    return props.programs.map((item, index) => {
      return (
        <View key={index}>
          <View style={themedStyle.viewSection}>
            <Text style={themedStyle.txtSection}>
              {item.section}
            </Text>
          </View>
          {item.contents.map((itemChild, indexChild) => {
            return (
              <View
                key={indexChild}
                style={themedStyle.viewItem}>
                <View style={themedStyle.viewItemTop}>
                  <View style={themedStyle.viewTime}>
                    <Text style={themedStyle.txtTime}>
                      {itemChild.fromTime}
                    </Text>
                    {ArrowHeadDownIconFill(themedStyle.iconArrow)}
                    <Text style={themedStyle.txtTime}>
                      {itemChild.toTime}
                    </Text>
                  </View>
                  <Text style={themedStyle.txtDescription}>
                    {itemChild.description}
                  </Text>
                </View>
                {!isEmpty(itemChild.implementer) &&
                  (<View style={themedStyle.viewItemBottom}>
                    <Text
                      style={[
                        themedStyle.txtImplementer,
                        themedStyle.txtBold,
                      ]}>
                      {`Chủ trì: `}
                      <Text style={themedStyle.txtImplementer}>
                        {itemChild.implementer}
                      </Text>
                    </Text>
                  </View>)}
              </View>
            );
          })}
        </View>
      );
    });
  };

  return (
    <Layout style={themedStyle.container}>
      <DateList />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={themedStyle.scrollViewContainer}>
        {renderPrograms()}
      </ScrollView>
    </Layout>
  );
};

export const Program = withStyles(ProgramComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    color: theme['color-custom-100'],
  },
  scrollViewContainer: {
    padding: pxToPercentage(8),
    paddingTop: 0,
  },
  viewSection: {
    justifyContent: 'center',
    height: pxToPercentage(25),
  },
  txtSection: {
    fontSize: pxToPercentage(14),
    lineHeight: pxToPercentage(25),
    color: theme['text-basic-color'],
    ...textStyle.proTextBold,
  },
  viewItem: {
    marginVertical: pxToPercentage(4),
    borderWidth: pxToPercentage(1),
    borderColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(5),
    padding: pxToPercentage(4),
  },
  viewTime: {
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToPercentage(70),
    height: pxToPercentage(70),
    borderRadius: pxToPercentage(5),
    backgroundColor: theme['color-primary-2'],
  },
  txtTime: {
    fontSize: pxToPercentage(14),
    color: theme['color-custom-100'],
    ...textStyle.proTextSemibold,
  },
  iconArrow: {
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    tintColor: theme['color-custom-100'],
  },
  viewItemTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewItemBottom: {
    paddingVertical: pxToPercentage(10),
  },
  txtDescription: {
    flex: 1,
    marginHorizontal: pxToPercentage(5),
    textAlign: 'justify',
    lineHeight: pxToPercentage(25),
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  txtImplementer: {
    flex: 1,
    marginRight: pxToPercentage(5),
    textAlign: 'justify',
    lineHeight: pxToPercentage(25),
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  txtBold: {
    ...textStyle.proTextBold,
  },
}));
