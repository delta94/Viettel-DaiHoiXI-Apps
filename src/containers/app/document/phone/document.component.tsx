import React from 'react';
import { ScrollView } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { DocumentSection as DocumentSectionModel } from '@src/core/models/document/document.model';
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
}));
