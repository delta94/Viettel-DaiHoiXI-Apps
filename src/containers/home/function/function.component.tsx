import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { FunctionModel } from '@src/core/models/function/function.model';
import { pxToPercentage } from '@src/core/utils/utils';
import { ProfileInfoV2 } from '@src/components/profileInfo/profileinfoV2.component';
import { userDataFake } from '@src/core/data/user';
import { User } from '@src/core/models/user/user.model';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';

interface ComponentProps {
  user: User;
  functions: FunctionModel[];
  onFunctionItemPress: (type: number) => void;
}

export type FunctionProps = ThemedComponentProps & ComponentProps;

const FunctionComponent: React.FunctionComponent<FunctionProps> = (props) => {
  const onFunctionItemPress = (type: number): void => {
    props.onFunctionItemPress(type);
  };

  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <ProfileInfoV2
        user={userDataFake}
        style={themedStyle.viewProfileInfo}
      />
      <View style={themedStyle.viewList}>
        <FlatList
          data={props.functions}
          extraData={props.functions}
          numColumns={3}
          contentContainerStyle={themedStyle.viewListContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={() => onFunctionItemPress(item.type)}
                style={themedStyle.viewItem}>
                <View style={themedStyle.viewItemCircle}>
                  {item.icon(themedStyle.icon)}
                </View>
                <Text style={themedStyle.txtItem}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <SafeAreaView />
    </View>
  );
};

export const Function = withStyles(FunctionComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
  },
  viewList: {
    flex: 1,
    marginTop: pxToPercentage(8),
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-basic-100'],
    ...viewStyle.shadow2,
  },
  viewListContainer: {
  },
  viewItem: {
    width: pxToPercentage(119.666),
    height: pxToPercentage(140),
    paddingTop: pxToPercentage(10),
    paddingHorizontal: pxToPercentage(10),
    alignItems: 'center',
  },
  viewItemCircle: {
    width: pxToPercentage(90),
    height: pxToPercentage(90),
    borderRadius: pxToPercentage(45),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme['color-primary-2'],
  },
  icon: {
    width: pxToPercentage(40),
    height: pxToPercentage(40),
    tintColor: theme['color-custom-100'],
  },
  txtItem: {
    textAlign: 'center',
    marginTop: pxToPercentage(5),
    fontSize: pxToPercentage(14),
    color: theme['text-basic-color'],
    ...textStyle.proTextRegular,
  },
}));
