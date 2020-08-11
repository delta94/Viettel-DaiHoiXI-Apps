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

interface Tab {
    title: string;
    type: number;
}

interface ComponentProps {
    tabs?: Tab[];
    onBackPress: () => void;
    onMessagePress: () => void;
    onHelpPress: () => void;
    onTabPress?: (type: number) => void;
    tabSelected?: number;
}

export type DocumentBackHeaderProps = ThemedComponentProps & ComponentProps;

const DocumentBackHeaderComponent: React.FunctionComponent<DocumentBackHeaderProps> = (props) => {
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

    const hasTabs = (): boolean => {
        return props.tabs && props.tabs.length !== 0;
    };

    const renderBtnTabs = (): React.ReactElement[] => {
        return props.tabs.map((item, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.75}
                    style={[
                        themedStyle.btnTab,
                        props.tabSelected === item.type && themedStyle.btnSelected,
                    ]}
                    onPress={() => onTabPress(item.type)}>
                    <Text
                        style={[
                            themedStyle.txtTab,
                            props.tabSelected === item.type && themedStyle.txtSelected,
                        ]}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
            );
        });
    };

    return (
        <View style={themedStyle.container}>
            <Button
                title='Quay lại'
                icon={ArrowPrevIcon}
                iconStyle={themedStyle.iconBtnBack}
                onPress={onBackPress}
            />
            <View style={themedStyle.viewCenter}>
                <View style={themedStyle.viewBtnTab}>
                    {renderBtnTabs()}
                </View>
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

export const DocumentBackHeader = withStyles(DocumentBackHeaderComponent, (theme: ThemeType) => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: pxToPercentage(120),
    },
    viewRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    viewCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        paddingHorizontal: pxToPercentage(18),
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
