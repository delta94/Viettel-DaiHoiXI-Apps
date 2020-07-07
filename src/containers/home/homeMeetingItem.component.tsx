import React from 'react';
import {
  ListItemProps,
} from '@kitten/ui';
import {
  Text,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { MeetingItem } from '@src/core/models/meeting/meeting.model';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
  meetingItem: MeetingItem;
  isTypeDefault?: boolean;
}

export type HomeMeetingItemProps = ThemedComponentProps & ComponentProps & ListItemProps;

const HomeMeetingItemComponent: React.FunctionComponent<HomeMeetingItemProps> = (props) => {
  const { style, themedStyle, meetingItem, ...restProps } = props;

  return (
    <View style={themedStyle.container}
      {...restProps}>
      <View style={themedStyle.dateView}>
        <Text style={[themedStyle.txtTime,
        props.isTypeDefault && themedStyle.viewTextDefault,
        ]}>
          {meetingItem.numberOfDate}
        </Text>
        <Text style={themedStyle.txtDate}>
          {meetingItem.date}
        </Text>
      </View>
      <View style={themedStyle.timelineView}>
        <View style={themedStyle.lineView} />
        <View style={[
          themedStyle.viewDotIcon,
          props.isTypeDefault && themedStyle.viewDefault,
        ]}/>
      </View>
      <View style={[themedStyle.secctionView,
      props.isTypeDefault && themedStyle.viewDefault,
      ]}>
        <View style={themedStyle.viewHeader}>
          <View style={[themedStyle.viewTimeHeader,
          props.isTypeDefault && themedStyle.viewDefault,
          ]}>
            <Text style={themedStyle.txtTimeHeader} >
              {meetingItem.fromTime}{' - '}{meetingItem.toTime}
            </Text>
          </View>
          <View style={themedStyle.detailView}>
            <Text style={themedStyle.txtName} >
              {meetingItem.name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const HomeMeetingItem = withStyles(HomeMeetingItemComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  secctionView: {
    flex: 1,
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
    overflow: 'hidden',
    borderRadius: pxToPercentage(12),
    backgroundColor: theme['color-warning-default'],
    marginVertical: pxToPercentage(12),
    marginRight: pxToPercentage(4),
  },
  viewHeader: {
    backgroundColor: theme['border-basic-color-1'],
    marginRight: pxToPercentage(1.5),
    marginLeft: pxToPercentage(6),
    borderRadius: pxToPercentage(12),
    marginBottom: pxToPercentage(1),
  },
  viewDefault: {
    backgroundColor: 'pink',
  },
  viewTextDefault: {
    color: 'pink',
  },
  txtName: {
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.regular,
  },
  txtDate: {
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.regular,
  },
  txtTime: {
    fontSize: pxToPercentage(17),
    color: theme['color-warning-default'],
    ...textStyle.extrabold,
  },
  txtTimeHeader: {
    fontSize: pxToPercentage(12),
    color: theme['text-basic-color'],
    ...textStyle.regular,
  },
  lineView: {
    borderWidth: pxToPercentage(1),
    borderColor: theme['border-basic-color-4'],
    height: '110%',
  },
  dateView: {
    width: pxToPercentage(35),
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewDotIcon: {
    height: pxToPercentage(16),
    width: pxToPercentage(16),
    position: 'absolute',
    borderRadius: pxToPercentage(8),
    backgroundColor: theme['color-warning-default'],
  },
  detailView: {
    paddingVertical: pxToPercentage(12),
    paddingHorizontal: pxToPercentage(12),
  },
  viewTimeHeader: {
    backgroundColor: theme['color-warning-default'],
    marginHorizontal: pxToPercentage(50),
    borderBottomRightRadius: pxToPercentage(30),
    borderBottomLeftRadius: pxToPercentage(30),
    alignItems: 'center',
  },
  timelineView: {
      width: pxToPercentage(20),
      justifyContent: 'center',
      alignItems: 'center',
  },
}));
