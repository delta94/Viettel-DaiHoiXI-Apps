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
import { viewStyle } from '@src/components/viewStyle';
import { DeputyGroup as DeputyGroupModel } from '@src/core/models/deputy/deputyGroup.model';
import { Deputy as DeputyModel } from '@src/core/models/deputy/deputy.model';
import { SERVER_ADDRESS } from '../../../../../config';
import { ArrowIosBackFill, SearchIcon } from '@src/assets/icons';
import { Tr } from '@src/components/table/tr.component';
import { Table } from '@src/components/table/table.component';
import { Thead } from '@src/components/table/thead.component';
import { Th } from '@src/components/table/th.component';
import { Tbody } from '@src/components/table/tbody.component';
import { Td } from '@src/components/table/td.component';

interface ComponentProps {
  deputyGroup: DeputyGroupModel;
  onDeputyPress: (deputy: DeputyModel) => void;
}

export type DeputyGroupItemProps = ThemedComponentProps & ComponentProps;

const DeputyGroupTabletItemComponent: React.FunctionComponent<DeputyGroupItemProps> = (props) => {
  const { themedStyle } = props;
  const [deputies, setDeputies] = React.useState<DeputyModel[]>([]);
  const [isShowLoadMore, setShowLoadMore] = React.useState<boolean>(false);

  const onDeputyPress = (deputy: DeputyModel) => {
    return onDeputyPress(deputy);
  };

  React.useEffect(() => {
    onSliceDeputyFromDate(false);
  }, [props.deputyGroup]);

  const onSliceDeputyFromDate = (isMoreLoad: boolean) => {
    const Grouplength = props.deputyGroup.deputies.length;
    const StartLength = deputies.length;
    if (isMoreLoad) {
      if (Grouplength > StartLength + 10) {
        setShowLoadMore(true);
        setDeputies([...deputies, ...props.deputyGroup.deputies.slice(StartLength, StartLength + 10)]);
        return;
      }
      if (Grouplength <= StartLength + 10) {
        setDeputies([...deputies, ...props.deputyGroup.deputies.slice(StartLength, Grouplength)]);
        setShowLoadMore(false);
        return;
      }
    } else {
      if (Grouplength > 10) {
        setShowLoadMore(true);
        setDeputies(props.deputyGroup.deputies.slice(0, 10));
      } else {
        setShowLoadMore(false);
        setDeputies(props.deputyGroup.deputies);
      }
      return;
    }
  };

  const onRenderDeputies = (): React.ReactElement[] => {
    return props.deputyGroup.deputies.map((item, index) => {
      return (
        <Tr key={index}>
          <Td alignItems='center' width={150}>
            <Text style={themedStyle.txtTd}>
              {index}
            </Text>
          </Td>
          <Td alignItems='center' width={260}>
            <Image
              source={(new RemoteImage(`${SERVER_ADDRESS}${item.avatar}`).imageSource)}
              style={themedStyle.imgAvatar}
            />
          </Td>
          <Td width={570}>
            <Text style={themedStyle.txtFullname}>
              {item.fullName.toUpperCase()}
            </Text>
          </Td>
          <Td>
            <Text style={themedStyle.txtTd}>
              {item.position}
            </Text>
          </Td>
          <Td alignItems='center' width={230}>
            <Text style={themedStyle.txtTd}>
              {item.discussionGroup || 'Không'}
            </Text>
          </Td>
          <Td alignItems='center' width={200}>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={() => onDeputyPress(item)}>
              {SearchIcon(themedStyle.iconSearch)}
            </TouchableOpacity>
          </Td>
        </Tr>
      );
    });
  };
  return (
    <React.Fragment >
      {onRenderDeputies()}
    </React.Fragment>
  );
};

export const DeputyGroupTabletItem = withStyles(DeputyGroupTabletItemComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  viewTable: {
    flex: 1,
    marginTop: pxToPercentage(28),
  },
  txtTd: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  txtFullname: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayBold,
  },
  imgAvatar: {
    width: pxToPercentage(120),
    height: pxToPercentage(160),
    borderRadius: pxToPercentage(12),
  },
  textInput: {
    fontSize: pxToPercentage(34),
    height: pxToPercentage(80),
    width: pxToPercentage(584),
    marginRight: pxToPercentage(20),
    paddingHorizontal: pxToPercentage(24),
    borderRadius: pxToPercentage(28),
    borderWidth: pxToPercentage(2),
    borderColor: theme['color-primary-18'],
    ...textStyle.proDisplayRegular,
    paddingVertical: 0,
  },
  selectInput: {
    width: pxToPercentage(584),
    marginRight: pxToPercentage(20),
    borderColor: theme['color-primary-18'],
    borderRadius: pxToPercentage(28),
  },
  selectInputTeam: {
    width: pxToPercentage(376),
    marginRight: pxToPercentage(20),
    borderColor: theme['color-primary-18'],
    borderRadius: pxToPercentage(28),
  },
  txtSelectInput: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  btnSearch: {
    flex: 1,
    height: pxToPercentage(80),
  },
  iconSearch: {
    width: pxToPercentage(54),
    height: pxToPercentage(54),
  },
}));
