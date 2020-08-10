import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { QRCodeIconOther } from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { viewStyle } from '@src/components/viewStyle';

interface ComponentProps {
  onBackPress: () => void;
}

export type MyQRCodeProps = ThemedComponentProps & ComponentProps;

const MyQRCodeComponent: React.FunctionComponent<MyQRCodeProps> = (props) => {
  const { themedStyle } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewBox}>
        {QRCodeIconOther(themedStyle.imgQRCode)}
        <Text style={themedStyle.txtNote}>
          {'Quý đại biểu vui lòng quẹt QR CODE qua máy\n scan mã đặt ở bàn điểm danh để điểm danh\n trước khi vào hội trường'}
        </Text>
      </View>
    </View>
  );
};

export const MyQRCode = withStyles(MyQRCodeComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    padding: pxToPercentage(8),
    paddingBottom: pxToPercentage(20),
  },
  viewBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: pxToPercentage(12.5),
    backgroundColor: theme['color-basic-100'],
    ...viewStyle.shadow2,
  },
  imgQRCode: {
    width: pxToPercentage(215),
    height: pxToPercentage(215),
  },
  txtNote: {
    textAlign: 'center',
    marginTop: pxToPercentage(20),
    fontSize: pxToPercentage(15),
    color: theme['background-custom-color-2'],
    ...textStyle.proTextRegular,
  },
}));
