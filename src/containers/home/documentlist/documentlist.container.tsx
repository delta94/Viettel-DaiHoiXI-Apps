import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { isTablet } from 'react-native-device-info';
import { documentDataFake } from '@src/core/data/document';
import { DocumentListTablet } from './tablet/documentlist.component.tablet';
import { DocumentList } from './phone/documentlist.component';

export const DocumentContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DocumentListContainer';

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <DocumentListTablet
        documents={documentDataFake}
        onBackPress={onBackPress}
      />
    );
  }
  return (
    <DocumentList
      documentSections={documentDataFake}
      onBackPress={onBackPress}
    />
  );
};
