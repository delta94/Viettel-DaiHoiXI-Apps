import React from 'react';
import {
  ListItemProps,
} from '@kitten/ui';
import {
  Text,
  View,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { MeetingItem } from '@src/core/models/meeting/meeting.model';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { } from 'react-native-gesture-handler';

interface ComponentProps extends TouchableOpacityProps {
  meeting: MeetingItem;
}

export type HomeMeetingItemProps = ThemedComponentProps & ComponentProps & ListItemProps;

const HomeMeetingItemComponent: React.FunctionComponent<HomeMeetingItemProps> = (props) => {
  const { style, themedStyle, meeting, ...restProps } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      {...restProps}
      style={themedStyle.container}>
      <View style={themedStyle.sectionDate}>
        <View style={themedStyle.viewDate}>
          <Text
            style={[
              themedStyle.txtDate,
              !meeting.isExample && themedStyle.txtDateOther,
            ]}>
            {meeting.date}
          </Text>
          <Text style={themedStyle.txtDay}>
            {meeting.day}
          </Text>
        </View>
        <View style={themedStyle.viewTimeline}>
          <View style={themedStyle.viewLine} />
          <View
            style={[
              themedStyle.viewDot,
              !meeting.isExample && themedStyle.viewDotOther,
            ]}
          />
        </View>
      </View>
      <View style={themedStyle.sectionContent}>
        <View
          style={[
            themedStyle.viewContent,
            !meeting.isExample && themedStyle.viewContentOther,
          ]}>
          <View style={themedStyle.viewContentInner}>
            <View
              style={[
                themedStyle.viewTime,
                !meeting.isExample && themedStyle.viewTimeOther,
              ]}>
              <Text
                style={[
                  themedStyle.txtTime,
                  !meeting.isExample && themedStyle.txtTimeOther,
                ]}>
                {`${meeting.fromTime} - ${meeting.toTime}`}
              </Text>
            </View>
            <Text style={themedStyle.txtName}>
              {meeting.name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const HomeMeetingItem = withStyles(HomeMeetingItemComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    height: pxToPercentage(110),
  },
  sectionDate: {
    flexDirection: 'row',
    width: pxToPercentage(85),
  },
  sectionContent: {
    flex: 1,
    paddingVertical: pxToPercentage(10),
  },
  viewDate: {
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToPercentage(60),
  },
  viewTimeline: {
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToPercentage(25),
  },
  viewContent: {
    flex: 1,
    paddingLeft: pxToPercentage(7.5),
    paddingBottom: pxToPercentage(1.5),
    paddingRight: pxToPercentage(1.5),
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-primary-0'],
  },
  viewContentInner: {
    flex: 1,
    overflow: 'hidden',
    justifyContent: 'center',
    opacity: 0.9,
    paddingHorizontal: pxToPercentage(15),
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-custom-100'],
  },
  viewTime: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: pxToPercentage(15),
    paddingBottom: pxToPercentage(2),
    top: -pxToPercentage(20),
    width: pxToPercentage(150),
    height: pxToPercentage(40),
    backgroundColor: theme['color-primary-0'],
  },
  txtTime: {
    fontSize: pxToPercentage(12),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  txtTimeOther: {
    color: theme['color-custom-100'],
  },
  viewTimeOther: {
    backgroundColor: theme['color-primary-2'],
  },
  viewContentOther: {
    backgroundColor: theme['color-primary-2'],
  },
  viewLine: {
    width: pxToPercentage(1),
    height: pxToPercentage(110),
    backgroundColor: theme['color-basic-400'],
  },
  viewDot: {
    position: 'absolute',
    width: pxToPercentage(10),
    height: pxToPercentage(10),
    borderRadius: pxToPercentage(5),
    backgroundColor: theme['color-primary-0'],
  },
  viewDotOther: {
    backgroundColor: theme['color-primary-2'],
  },
  txtDate: {
    fontSize: pxToPercentage(20),
    color: theme['color-primary-0'],
    ...textStyle.proTextRegularItalic,
  },
  txtDateOther: {
    color: theme['color-primary-2'],
  },
  txtDay: {
    fontSize: pxToPercentage(13),
    marginTop: pxToPercentage(2.5),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
  txtName: {
    fontSize: pxToPercentage(13),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
}));
