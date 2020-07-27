import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { Button } from '@src/components/button/button.component';
import {
  QuestionIcon,
  MessageIconOther,
  ArrowPrevIcon,
} from '@src/assets/icons';
import { textStyle } from '../textStyle';

interface ComponentProps {
  title?: string;
  titleTab?: { title: string, type: number }[];
  onBackPress: () => void;
  onMessagePress: () => void;
  onHelpPress: () => void;
  onTabPress?: (type: number) => void;
  selectedTab?: number;
}

export type BackHeaderProps = ThemedComponentProps & ComponentProps;

const BackHeaderComponent: React.FunctionComponent<BackHeaderProps> = (props) => {
  const { themedStyle } = props;

  const onMessagePress = (): void => {
    props.onMessagePress();
  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {
    props.onHelpPress();
  };

  const onTabPress = (type: number): void => {
    props.onTabPress(type);
  };

  const renderBtnTab = (): React.ReactElement[] => {
    return props.titleTab.map((item, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.75}
          style={[
            themedStyle.btnTab,
            props.selectedTab === item.type && themedStyle.btnSelected,
          ]}
          onPress={() => onTabPress(item.type)}
        >
          <Text
            style={[
              themedStyle.txtTab,
              props.selectedTab === item.type && themedStyle.txtSelected,
            ]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewLeft}>
        <Button
          title='Quay lại'
          icon={ArrowPrevIcon}
          iconStyle={themedStyle.iconBtnBack}
          onPress={onBackPress}
        />
      </View>
      <View style={themedStyle.viewCenter}>

        {props.title
          ? <Text style={themedStyle.txtTitle}>
            {props.title}
          </Text>
          : <View style={themedStyle.viewBtnTab}>
            {renderBtnTab()}
          </View>
        }
      </View>
      <View style={themedStyle.viewRight}>
        <Button
          icon={QuestionIcon}
          style={themedStyle.btnHelp}
          iconStyle={themedStyle.iconBtnHelp}
          onPress={onHelpPress}
        />
        <Button
          title='Trò chuyện'
          icon={MessageIconOther}
          iconStyle={themedStyle.iconMessage}
          onPress={onMessagePress}
        />
      </View>
    </View>
  );
};

export const BackHeader = withStyles(BackHeaderComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: pxToPercentage(120),
  },
  viewLeft: {
    flexDirection: 'row',
    width: pxToPercentage(450),
  },
  viewCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: pxToPercentage(450),
  },
  txtTitle: {
    fontSize: pxToPercentage(58),
    lineHeight: pxToPercentage(90),
    color: theme['color-custom-100'],
    ...textStyle.proDisplayBold,
  },
  btnHelp: {
    marginRight: pxToPercentage(20),
  },
  iconBtnBack: {
    width: pxToPercentage(50),
    height: pxToPercentage(46),
  },
  iconBtnHelp: {
    height: pxToPercentage(60),
    width: pxToPercentage(36),
  },
  iconMessage: {
    height: pxToPercentage(54),
    width: pxToPercentage(57.7),
  },
  viewBtnTab: {
    height: pxToPercentage(80),
    borderRadius: pxToPercentage(28),
    borderWidth: pxToPercentage(2),
    borderColor: theme['color-primary-19'],
    flexDirection: 'row',
  },
  btnTab: {
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToPercentage(80),
    width: pxToPercentage(560),
  },
  btnSelected: {
    backgroundColor: theme['color-primary-19'],
    borderRadius: pxToPercentage(28),
  },
  txtTab: {
    fontSize: pxToPercentage(30),
    ...textStyle.proDisplayBold,
    color: theme['color-primary-19'],
  },
  txtSelected: {
    color: theme['color-primary-2'],
  },
}));
