import {
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { DocumentSection as DocumentSectionModel } from '@src/core/models/document/document.model';
import React from 'react';
import { DocumentItem } from './documentItem.component';

interface ComponentProps {
  documentSections: DocumentSectionModel[];
}

export type DocumentProps = ComponentProps & ThemedComponentProps;

const DocumentComponent: React.FunctionComponent<DocumentProps> = (props) => {
  const { themedStyle } = props;

  const renderDocument = (): React.ReactElement[] => {

    return props.documentSections.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <DocumentItem
            documentSection={item}>
          </DocumentItem>
        </React.Fragment>
      );
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={themedStyle.container}>
      {renderDocument()}
    </ScrollView>
  );
};

export const Document = withStyles(DocumentComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    marginTop: pxToPercentage(10),
  },
  txtInfo: {
    flexDirection: 'row',
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
    padding: pxToPercentage(5),
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
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
  },
  txtContent: {
    fontSize: pxToPercentage(15),
    ...textStyle.proDisplayRegular,
    fontWeight: 'bold',
  },
  iconArrowUp: {
    position: 'absolute',
    right: pxToPercentage(6),
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    tintColor: theme['color-custom-100'],
    transform: [{ rotate: '90deg' }],
  },
  iconArrowDown: {
    position: 'absolute',
    right: pxToPercentage(6),
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    tintColor: theme['color-custom-100'],
    transform: [{ rotate: '270deg' }],
  },
  viewTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginbottom: pxToPercentage(10),
    flexDirection: 'row',
    height: pxToPercentage(30),
    backgroundColor: theme['color-primary-2'],
  },
  txtXemChiTiet: {
    color: theme['color-primary-2'],
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
  },
  viewBottom: {
    height: pxToPercentage(1),
    backgroundColor: theme['color-primary-2'],
  },
}));
