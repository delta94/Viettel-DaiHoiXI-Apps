import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { DocumentSection as DocumentSectionModel } from '@src/core/models/document/document.model';
import { Table } from '@src/components/table/table.component';
import { Thead } from '@src/components/table/thead.component';
import { Th } from '@src/components/table/th.component';
import { Tbody } from '@src/components/table/tbody.component';
import { Tr } from '@src/components/table/tr.component';
import { Td } from '@src/components/table/td.component';
import { SearchIcon } from '@src/assets/icons';
import { ModalDocument } from './modalDocument.component.tablet';
// import Modal from 'react-native-modal';

interface ComponentProps {
  documents: DocumentSectionModel[];
}

export type ProgramTabletProps = ComponentProps & ThemedComponentProps;

const ProgramTabletComponent: React.FunctionComponent<ProgramTabletProps> = (props) => {
  const { themedStyle } = props;
  const [isVisibleDocument, setIsVisibleDocument] = React.useState<boolean>(false);
  const onDocumentPress = () => {
    setIsVisibleDocument(true);
  };
  const onClosePress = () => {
    setIsVisibleDocument(false);
  };

  const renderDocument = (): React.ReactElement[] => {

    return props.documents.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <Tr style={themedStyle.td}>
            <Td>
              <Text style={themedStyle.txtTitle}>
                {item.title}
              </Text>
            </Td>
          </Tr>
          {item.documents.map((itemChild, indexChild) => {
            return (
              <Tr key={indexChild}>
                <Td alignItems='center' width={110}                >
                  <Text style={themedStyle.txtInfo}>
                    {itemChild.id}
                  </Text>
                </Td>
                <Td alignItems='center' width={295}>
                  <Text style={themedStyle.txtInfo}>
                    {itemChild.documentNumber}
                  </Text>
                </Td>
                <Td alignItems='center' width={250}>
                  <Text style={themedStyle.txtInfo}>
                    {itemChild.date}
                  </Text>
                </Td>
                <Td alignItems='center' width={250}>
                  <Text style={themedStyle.txtInfo}>
                    {itemChild.department || '-'}
                  </Text>
                </Td>
                <Td alignItems='center'>
                  <Text style={themedStyle.txtInfo}>
                    {itemChild.title}
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
            );
          })}
          <ModalDocument
            isVisible={isVisibleDocument}
            onClosePress={onClosePress}
          />
        </React.Fragment>
      );
    });
  };

  return (
    <Table style={themedStyle.container}>
      <Thead>
        <Th alignItems='center' width={110}>
          {'STT'}
        </Th>
        <Th alignItems='center' width={295}>
          {'Số văn bản'}
        </Th>
        <Th alignItems='center' width={250}>
          {'Ngày ban hành'}
        </Th>
        <Th alignItems='center' width={250}>
          {'Cơ quan ban hành'}
        </Th>
        <Th alignItems='center'>
          {'Trích yếu'}
        </Th>
        <Th alignItems='center' width={130}>
          {'Xem'}
        </Th>
      </Thead>
      <Tbody>
        {renderDocument()}
      </Tbody>
    </Table>
  );
};

export const DocumentTablet = withStyles(ProgramTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    marginTop: pxToPercentage(28),
  },
  txtInfo: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
    paddingLeft: pxToPercentage(20),
  },
  td: {
    borderRightWidth: pxToPercentage(0),
    backgroundColor: theme['color-primary-2'],
  },
  viewModal: {
    width: pxToPercentage(1556),
    height: pxToPercentage(1148),
    backgroundColor: theme['color-primary-0'],
  },
  modal: {
    alignItems: 'center',
  },
  txtTitle: {
    color: theme['color-primary-3'],
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  iconSearch: {
    width: pxToPercentage(54),
    height: pxToPercentage(54),
  },
}));
