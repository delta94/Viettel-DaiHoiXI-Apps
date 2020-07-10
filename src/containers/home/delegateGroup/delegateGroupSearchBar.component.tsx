import React from 'react';
import { View } from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from '@kitten/theme';
import {
    textStyle,
    ValidationInput,
} from '@src/components';
import { NameValidator } from '@src/core/validators';
import { pxToPercentage } from '@src/core/utils/utils';
import { SearchIconOutline } from '@src/assets/icons';

export type DelegateGroupContentItemProps = ThemedComponentProps;

const DelegateGroupContentItemComponent: React.FunctionComponent<DelegateGroupContentItemProps> = (props) => {
    const { themedStyle } = props;

    return (
        <View
            style={[
                themedStyle.container,
            ]}>
            <ValidationInput
                style={themedStyle.inputSearch}
                textStyle={textStyle.regular}
                placeholder='Tìm kiếm'
                icon={SearchIconOutline}
                validator={NameValidator}
            />
        </View>
    );
};

export const DelegateGroupSearchBar = withStyles(DelegateGroupContentItemComponent, (theme: ThemeType) => ({
    container: {
        marginHorizontal: pxToPercentage(8),
    },
    inputSearch: {
        borderRadius: pxToPercentage(16),
    },
}));
