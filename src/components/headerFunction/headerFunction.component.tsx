import React from 'react';
import {
  View,
  ViewProps,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  ExitIcon,
  EdituserIcon,
  QrIcon,
  ChatIcon,
} from '@src/assets/icons';
import { textStyle } from '../textStyle';

interface ComponentProps {
  onPressBackIcon: () => void;
}

export type HeaderFunctionProps = ThemedComponentProps & ViewProps & ComponentProps;

const FunctionComponent: React.FunctionComponent<HeaderFunctionProps> = (props) => {
  const { style, themedStyle, ...restProps } = props;

  return (
    <SafeAreaView
      style={[
        themedStyle.container,
        style,
      ]}
      {...restProps}>
      <TouchableOpacity style={[
        themedStyle.btn,
        themedStyle.btnExit,
      ]}
        activeOpacity={0.75}
        onPress={props.onPressBackIcon}>
        {ExitIcon(themedStyle.icon)}
        <Text style={themedStyle.txtButton}>
          {'Quay lại'}
        </Text>
      </TouchableOpacity>
      <View style={themedStyle.viewSession}>
        <TouchableOpacity
          style={[
            themedStyle.btn,
            themedStyle.btnEditUser,
          ]}
          activeOpacity={0.75}>
          {EdituserIcon(themedStyle.icon)}
          <Text style={themedStyle.txtButton}>
            {'Chỉnh sửa \nthông tin cá nhân'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            themedStyle.btn,
            themedStyle.btnQr,
          ]}
          activeOpacity={0.75}>
          {QrIcon(themedStyle.icon)}
          <Text style={themedStyle.txtButton}>
            {'Quét mã'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            themedStyle.btn,
            themedStyle.btnchat,
          ]}
          activeOpacity={0.75}>
          {ChatIcon(themedStyle.icon)}
          <Text style={themedStyle.txtButton}>
            {'Trò chuyện'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const HeaderFunction = withStyles(FunctionComponent, (theme: ThemeType) => ({
  container: {
    flexDirection: 'row',
    height: pxToPercentage(56), // h 54
    alignItems: 'center',
    backgroundColor: theme['color-primary-7'],
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: pxToPercentage(20),
    borderRadius: pxToPercentage(8),
    borderWidth: pxToPercentage(1),
    borderColor: theme['color-primary-2'],
    height: pxToPercentage(36), // h 54
  },
  btnQr: {
    width: pxToPercentage(105), // w 150
  },
  btnExit: {
    width: pxToPercentage(100), // w 128
  },
  btnEditUser: {
    width: pxToPercentage(150), // w 226
  },
  btnchat: {
    width: pxToPercentage(110), // w 176
  },
  icon: {
    width: pxToPercentage(24), // w 27
    height: pxToPercentage(20), // w 27
    tintColor: theme['color-primary-2'],
    resizeMode: 'contain',
  },
  txtButton: {
    fontSize: pxToPercentage(12), // font size 20
    marginHorizontal: pxToPercentage(6),
    color: theme['color-primary-2'],
    ...textStyle.regular,
  },
  viewSession: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
}));
