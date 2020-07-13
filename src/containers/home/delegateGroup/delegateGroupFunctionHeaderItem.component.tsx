import React from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { widthPercentageToDP } from 'react-native-responsive-screen';

interface ComponentProps {
    delegateGroups: number;
    sections: number;
    onHeaderDelegateGroupPress: (type: number) => void;
}

export type DelegateGroupFunctionHeaderItemProps = ThemedComponentProps & ComponentProps;

const DelegateGroupFunctionHeaderItemComponent: React.FunctionComponent<DelegateGroupFunctionHeaderItemProps> = (props) => {
    const { themedStyle, delegateGroups } = props;

    const onHeaderDelegateGroupPress = (type: number) => {
        props.onHeaderDelegateGroupPress(type);
    };

    return (
        <TouchableOpacity
            onPress={() => onHeaderDelegateGroupPress(delegateGroups)}
            activeOpacity={0.75}
            style={[themedStyle.container, props.sections === delegateGroups && themedStyle.checked]}>
            <Text style={themedStyle.txtDelegateGroup}>{`Tổ ${delegateGroups}`}</Text>
        </TouchableOpacity>
    );
};

export const DelegateGroupFunctionHeaderItem = withStyles(DelegateGroupFunctionHeaderItemComponent, (theme: ThemeType) => ({
    container: {
        borderWidth: pxToPercentage(1),
        borderColor: theme['border-basic-color-4'],
        justifyContent: 'center',
        height: pxToPercentage(45),
        marginVertical: pxToPercentage(8),
        width: widthPercentageToDP(32),
    },
    txtDelegateGroup: {
        fontSize: pxToPercentage(16),
        textAlign: 'center',
    },
    checked: {
        borderBottomWidth: pxToPercentage(2),
        borderBottomColor: 'red',

    },
}));
