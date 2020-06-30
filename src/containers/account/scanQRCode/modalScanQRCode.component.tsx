import React from 'react';
import {
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from '@kitten/theme';
import { CloseIconOutline, QRCodeIcon, DownloadIcon, ShareIconOutline, RefreshIconFill } from '@src/assets/icons';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
    isVisible: boolean;
    onClosePress: () => void;
}

export type ModalScanQRCodeProps = ThemedComponentProps & ComponentProps;

const ModalScanQRCodeComponent: React.FunctionComponent<ModalScanQRCodeProps> = (props) => {
    const onClosePress = (): void => {
        props.onClosePress();
    };

    const { themedStyle } = props;

    return (
        <Modal
            isVisible={props.isVisible}
            animationIn='slideInUp'
            animationOut='slideOutDown'
            onBackdropPress={onClosePress}
            backdropColor={null}
            swipeDirection={['down']}
            onSwipeComplete={onClosePress}
            backdropOpacity={0.2}
            onBackButtonPress={onClosePress}
            backdropTransitionInTiming={1}
            backdropTransitionOutTiming={1}
            style={themedStyle.container}>
            <View style={themedStyle.view}>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={themedStyle.bntClose}
                    onPress={onClosePress}>
                    {CloseIconOutline(themedStyle.iconClose)}
                </TouchableOpacity>
                <View style={themedStyle.viewQRCode}>
                    {QRCodeIcon(themedStyle.iconQRCode)}
                </View>
                <View style={themedStyle.viewButton}>
                    <TouchableOpacity
                        activeOpacity={0.75}>
                        {RefreshIconFill(themedStyle.iconRefresh)}
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={themedStyle.bnt}>
                        {ShareIconOutline(themedStyle.iconShare)}
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        style={themedStyle.bnt}>
                        {DownloadIcon(themedStyle.iconDownload)}
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export const ModalScanQRCode = withStyles(ModalScanQRCodeComponent, (theme: ThemeType) => ({
    container: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    view: {
        height: pxToPercentage(375),
        backgroundColor: 'white',
    },
    iconClose: {
        width: pxToPercentage(28),
        height: pxToPercentage(28),
        tintColor: 'rgba(0, 0, 0, 1)',
    },
    iconQRCode: {
        width: pxToPercentage(200),
        height: pxToPercentage(200),
        tintColor: 'rgba(0, 0, 0, 1)',
    },
    iconShare: {
        width: pxToPercentage(35),
        height: pxToPercentage(35),
        tintColor: 'rgba(0, 0, 0, 1)',
    },
    iconRefresh: {
        width: pxToPercentage(30),
        height: pxToPercentage(30),
        tintColor: 'rgba(0, 0, 0, 1)',
    },
    iconDownload: {
        width: pxToPercentage(32),
        height: pxToPercentage(32),
        tintColor: 'rgba(0, 0, 0, 1)',
    },
    bnt: {
        marginLeft: pxToPercentage(70),
    },
    bntClose: {
        alignSelf: 'flex-start',
        marginTop: pxToPercentage(5),
        marginLeft: pxToPercentage(5),
    },
    viewQRCode: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewButton: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: pxToPercentage(20),
    },
}));
