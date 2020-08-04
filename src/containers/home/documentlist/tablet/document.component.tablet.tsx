import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { DocumentSection as DocumentSectionModel } from '@src/core/models/document/document.model';
import { Table } from '@src/components/table/table.component';
import { Thead } from '@src/components/table/thead.component';
import { Th } from '@src/components/table/th.component';
import { Tbody } from '@src/components/table/tbody.component';
import { DocumentItemTablet } from './documentItem.tablet.component';
interface ComponentProps {
  documentSections: DocumentSectionModel[];
}

export type DocumentTabletProps = ComponentProps & ThemedComponentProps;

const DocumentTabletComponent: React.FunctionComponent<DocumentTabletProps> = (props) => {
  const { themedStyle } = props;

  const renderDocumentTablet = (): React.ReactElement[] => {

    return props.documentSections.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <DocumentItemTablet
            documentSection={item}>
          </DocumentItemTablet>
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
        {renderDocumentTablet()}
      </Tbody>
    </Table>
  );
};

export const DocumentTablet = withStyles(DocumentTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    marginTop: pxToPercentage(28),
  },
  modal: {
    alignItems: 'center',
  },
}));
