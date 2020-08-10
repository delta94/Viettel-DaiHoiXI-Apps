import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
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
import { ArrowIosBackFill } from '@src/assets/icons';
import { DocumentModal } from './documentModal.component';
import { Hr } from '@src/components/hr/hr.component';

interface ComponentProps {
  documentSection: DocumentSectionModel;
}

export type DocumentItemProps = ComponentProps & ThemedComponentProps;

const DocumentItemComponent: React.FunctionComponent<DocumentItemProps> = (props) => {
  const { themedStyle } = props;
  const [isVisibleDocument, setIsVisibleDocument] = React.useState<boolean>(false);
  const [isShowDocument, setIsShowDocument] = React.useState<boolean>(true);

  const onDocumentPress = () => {
    setIsVisibleDocument(true);
  };
  const onClosePress = () => {
    setIsVisibleDocument(false);
  };

  const renderDocumentItem = (): React.ReactElement[] => {
    return props.documentSection.documents.map((item, index) => {
      return (
        <View style={themedStyle.viewContent}>
          <Text style={themedStyle.txtInfo}>
            <Text style={themedStyle.txtContent}>
              {'STT: '}
            </Text>
            {item.id}
          </Text>
          <Text style={themedStyle.txtInfo}>
            <Text style={themedStyle.txtContent}>
              {'Số văn bản: '}
            </Text>
            {item.documentNumber}
          </Text>
          <Text style={themedStyle.txtInfo}>
            <Text style={themedStyle.txtContent}>
              {'Ngày ban hành: '}
            </Text>
            {item.date}
          </Text>
          <Text style={themedStyle.txtInfo}>
            <Text style={themedStyle.txtContent}>
              {'Cơ quan ban hành: '}
            </Text>
            {item.department || '-'}
          </Text>
          <Text style={themedStyle.txtInfo}>
            <Text style={themedStyle.txtContent}>
              {'Trích yếu: '}
            </Text>
            {item.title || '-'}
          </Text>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={onDocumentPress}>
            <Text style={themedStyle.txtXemChiTiet}>
              {'Xem chi tiết'}
            </Text>
          </TouchableOpacity>
          <Hr style={themedStyle.viewHr} />
          <DocumentModal
            isVisible={isVisibleDocument}
            onClosePress={onClosePress}
          />
        </View>
      );
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={themedStyle.container}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => setIsShowDocument(!isShowDocument)}
        style={themedStyle.viewTitle}>
        <Text style={themedStyle.txtTitle}>
          {props.documentSection.title.toUpperCase()}
        </Text>
        {ArrowIosBackFill(isShowDocument
          ? [themedStyle.iconArrow,
          themedStyle.iconArrowUp]
          : [themedStyle.iconArrow,
          themedStyle.iconArrowDown],
        )}
      </TouchableOpacity>
      {isShowDocument && renderDocumentItem()}
    </ScrollView>
  );
};

export const DocumentItem = withStyles(DocumentItemComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    marginTop: pxToPercentage(6),
  },
  txtInfo: {
    flexDirection: 'row',
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
    paddingVertical: pxToPercentage(4),
  },
  txtTitle: {
    color: theme['color-primary-12'],
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegular,
  },
  txtContent: {
    fontSize: pxToPercentage(15),
    ...textStyle.proDisplayRegular,
    fontWeight: 'bold',
  },
  viewContent: {
    paddingHorizontal: pxToPercentage(8),
  },
  iconArrow: {
    position: 'absolute',
    right: pxToPercentage(6),
    width: pxToPercentage(20),
    height: pxToPercentage(20),
    tintColor: theme['color-custom-100'],
  },
  iconArrowUp: {
    transform: [{ rotate: '90deg' }],
  },
  iconArrowDown: {
    transform: [{ rotate: '270deg' }],
  },
  viewTitle: {
    paddingVertical: pxToPercentage(10),
    justifyContent: 'center',
    backgroundColor: theme['color-primary-2'],
    paddingHorizontal: pxToPercentage(8),
  },
  txtXemChiTiet: {
    color: theme['color-primary-2'],
    fontSize: pxToPercentage(14),
    ...textStyle.proDisplayRegularItalic,
    textAlign: 'right',
  },
  viewHr: {
    marginVertical: pxToPercentage(10),
    backgroundColor: theme['color-primary-2'],
  },
}));
