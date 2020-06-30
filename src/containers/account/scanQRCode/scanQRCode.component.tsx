import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from '@kitten/theme';
import { CloseIcon, ImageLibraryIcon, QRCodeIcon } from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { ModalScanQRCode } from './modalScanQRCode.component';

export type ScanQRCodeProps = ThemedComponentProps;

const ScanQRCodeComponent: React.FunctionComponent<ScanQRCodeProps> = (props) => {
    const [isVisibleMyQRCode, setIsVisibleMyQRCode] = useState<boolean>(false);

    const onMyQRPress = () => {
        setIsVisibleMyQRCode(true);
    };

    const onClosePress = () => {
        setIsVisibleMyQRCode(false);
    };

    const { themedStyle } = props;

    return (
        <View style={themedStyle.container}>
            <View style={themedStyle.viewHeader}>
                <View style={themedStyle.viewHeaderLeft}>
                    <TouchableOpacity
                        activeOpacity={0.75}>
                        {CloseIcon(themedStyle.iconClose)}
                    </TouchableOpacity>
                </View>
                <View style={themedStyle.viewHeaderRight}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={themedStyle.btnImageLibrary}>
                        {ImageLibraryIcon(themedStyle.iconImage)}
                        <Text style={themedStyle.txt}>Thư viện</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={themedStyle.viewBody}>
                <View style={themedStyle.viewQRCode} />
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={onMyQRPress}
                    style={themedStyle.btnMyQR}>
                    {QRCodeIcon(themedStyle.iconQRCode)}
                    <Text style={themedStyle.txtQR}> Mã QR của tôi</Text>
                </TouchableOpacity>
            </View>
            <View style={themedStyle.viewFooter}>
                <Text style={themedStyle.txtFooter}>Quét mã để truy cập nhanh vào{'\n'}các tính năng của ứng dụng</Text>
            </View>
            <ModalScanQRCode
                isVisible={isVisibleMyQRCode}
                onClosePress={onClosePress}
            />
        </View>
    );
};

export const ScanQRCode = withStyles(ScanQRCodeComponent, (theme: ThemeType) => ({
    container: {
        flex: 1,
        backgroundColor: 'rgba(160, 160, 161, 1)',
    },
    viewHeader: {
        flexDirection: 'row',
        marginTop: pxToPercentage(25),
        marginHorizontal: pxToPercentage(10),
    },
    btnImageLibrary: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txt: {
        marginLeft: pxToPercentage(10),
        fontSize: pxToPercentage(12),
        color: 'rgba(255, 255, 255, 1)',
        marginHorizontal: pxToPercentage(12),
        ...textStyle.bold,
    },
    txtQR: {
        marginLeft: pxToPercentage(10),
        fontSize: pxToPercentage(15),
        color: 'rgba(255, 255, 255, 1)',
        marginHorizontal: pxToPercentage(12),
        ...textStyle.bold,
    },
    iconClose: {
        width: pxToPercentage(25),
        height: pxToPercentage(25),
        tintColor: 'rgba(64, 64, 64, 1)',
    },
    iconQRCode: {
        width: pxToPercentage(25),
        height: pxToPercentage(25),
        tintColor: 'rgba(242, 242, 242, 1)',
    },
    iconImage: {
        width: pxToPercentage(25),
        height: pxToPercentage(25),
        tintColor: 'rgba(255, 255, 255, 1)',
    },
    viewHeaderLeft: {
    },
    viewHeaderRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
    viewBody: {
        marginVertical: pxToPercentage(53),
        alignItems: 'center',
    },
    viewQRCode: {
        backgroundColor: 'rgba(222, 222, 222, 1)',
        height: pxToPercentage(333),
        width: pxToPercentage(333),
        borderRadius: 15,
    },
    btnMyQR: {
        alignItems: 'center',
        marginTop: pxToPercentage(40),
    },
    viewFooter: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        flex: 1,
        alignItems: 'center',
    },
    txtFooter: {
        marginTop: pxToPercentage(50),
        fontSize: pxToPercentage(17),
        textAlign: 'center',
        color: 'rgba(160, 160, 161, 1)',
    },
}));
