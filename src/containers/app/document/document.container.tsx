import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { KEY_NAVIGATION_BACK } from '@src/core/navigation/constants';
import { isTablet } from 'react-native-device-info';
import { documentDataFake } from '@src/core/data/document';
import { DocumentSelectorTablet } from './tablet/documentSelector.component.tablet';
import { DocumentType } from './phone/documentType.component';

export const DocumentContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'DocumentContainer';

  const onMessagePress = (): void => {
    props.navigation.navigate({
      key: navigationKey,
      routeName: 'chat',
    });
  };

  const onBackPress = (): void => {
    props.navigation.goBack(KEY_NAVIGATION_BACK);
  };

  if (isTablet()) {
    return (
      <DocumentSelectorTablet
        documents={documentDataFake}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
      />
    );
  }
  return (
    <DocumentType
      documentSections={documentDataFake}
      onBackPress={onBackPress}
    />
  );
};
