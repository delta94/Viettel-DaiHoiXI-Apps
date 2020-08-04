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
import { textStyle } from '@src/components';
import { DocumentSection as DocumentSectionModel } from '@src/core/models/document/document.model';
import { Tbody } from '@src/components/table/tbody.component';
import { Tr } from '@src/components/table/tr.component';
import { Td } from '@src/components/table/td.component';
import { SearchIcon } from '@src/assets/icons';
import { ModalTabletDocument } from './modalDocument.component.tablet';
import { ArrowIosBackFill } from '@src/assets/icons';
interface ComponentProps {
  documentSection: DocumentSectionModel;
}

export type DocumentItemTabletProps = ComponentProps & ThemedComponentProps;

const DocumentItemTabletComponent: React.FunctionComponent<DocumentItemTabletProps> = (props) => {
  const { themedStyle } = props;
  const [isVisibleDocument, setIsVisibleDocument] = React.useState<boolean>(false);
  const [isShowDocument, setIsShowDocument] = React.useState<boolean>(true);

  const onDocumentPress = () => {
    setIsVisibleDocument(true);
  };
  const onClosePress = () => {
    setIsVisibleDocument(false);
  };

  const renderDocumentItemTablet = (): React.ReactElement[] => {

    return props.documentSection.documents.map((item, index) => {
      return (
        <View>
          <Tr>
            <Td alignItems='center' width={110}                >
              <Text style={themedStyle.txtInfo}>
                {item.id}
              </Text>
            </Td>
            <Td alignItems='center' width={295}>
              <Text style={themedStyle.txtInfo}>
                {item.documentNumber}
              </Text>
            </Td>
            <Td alignItems='center' width={250}>
              <Text style={themedStyle.txtInfo}>
                {item.date}
              </Text>
            </Td>
            <Td alignItems='center' width={250}>
              <Text style={themedStyle.txtInfo}>
                {item.department || '-'}
              </Text>
            </Td>
            <Td alignItems='center'>
              <Text style={themedStyle.txtInfo}>
                {item.title}
              </Text>
            </Td>
            <Td alignItems='center' width={130}>
              <TouchableOpacity
                activeOpacity={0.75}
                onPress={onDocumentPress}>
                {SearchIcon(themedStyle.iconSearch)}
              </TouchableOpacity>
            </Td>
          </Tr>
          <ModalTabletDocument
            isVisible={isVisibleDocument}
            onClosePress={onClosePress}
          />
        </View>
      );
    });
  };

  return (
    <Tbody>
      <Tr style={themedStyle.viewTr}>
        <Td>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => setIsShowDocument(!isShowDocument)}
            style={themedStyle.viewTop}>
            <View style={themedStyle.viewTitle}>
              <Text style={themedStyle.txtTitle}>
                {props.documentSection.title}
              </Text>
            </View>
            {ArrowIosBackFill(isShowDocument ? themedStyle.iconArrowUp : themedStyle.iconArrowDown)}
          </TouchableOpacity>
        </Td>
      </Tr>
      {isShowDocument && renderDocumentItemTablet()}
    </Tbody>
  );
};

export const DocumentItemTablet = withStyles(DocumentItemTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    marginTop: pxToPercentage(28),
  },
  txtInfo: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  viewTr: {
    borderRightWidth: pxToPercentage(0),
    backgroundColor: theme['color-primary-2'],
  },
  viewTop: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  viewTitle: {
    flex: 1,
  },
  viewModal: {
    width: pxToPercentage(1556),
    height: pxToPercentage(1148),
    backgroundColor: theme['color-primary-0'],
  },
  txtTitle: {
    color: theme['color-primary-12'],
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  iconArrowUp: {
    width: pxToPercentage(54),
    height: pxToPercentage(54),
    tintColor: theme['color-custom-100'],
    transform: [{ rotate: '90deg' }],
  },
  iconArrowDown: {
    width: pxToPercentage(54),
    height: pxToPercentage(54),
    tintColor: theme['color-custom-100'],
    transform: [{ rotate: '270deg' }],
  },
  iconSearch: {
    width: pxToPercentage(54),
    height: pxToPercentage(54),
  },
}));
