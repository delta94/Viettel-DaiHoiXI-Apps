import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import {
  textStyle,
  ValidationInput,
} from '@src/components';
import { DocumentSection as DocumentSectionModel } from '@src/core/models/document/document.model';
import { StringValidator } from '@src/core/validators';
import { Document } from './document.component';
import { Select } from 'react-native-ui-kitten/ui';
import { ModalDocumentRequest } from './modalDocumentRequest.component';

interface ComponentProps {
  documentSections: DocumentSectionModel[];
  onBackPress?: () => void;
}

export type DocumentListProps = ComponentProps & ThemedComponentProps;

const DocumentListComponent: React.FunctionComponent<DocumentListProps> = (props) => {

  const [isVisibleDocumentRequest, setIsVisibleDocumentRequest] = React.useState<boolean>(false);

  const onDocumentRequestPress = () => {
    setIsVisibleDocumentRequest(true);
  };

  const onClosePress = () => {
    setIsVisibleDocumentRequest(false);
  };

  const { themedStyle } = props;

  const [selectedOption, setSelectedOption] = useState<any>(null);

  return (
    <React.Fragment>
      <View style={themedStyle.container}>
        <View style={themedStyle.viewCard}>
          <View style={themedStyle.viewTopGroup}>
            <ValidationInput
              style={themedStyle.viewInput}
              placeholder={'Nhập trích yếu/số văn bản'}
              validator={StringValidator}
              onChangeText={() => { }}
            />
            <TouchableOpacity style={themedStyle.btnTimKiem}
              activeOpacity={0.75}>
              <Text style={themedStyle.txtTimKiem}>
                {'TÌM KIẾM'}
              </Text>
            </TouchableOpacity>
            <View style={themedStyle.viewSelect}>
              <Select
                data={[
                  { text: '7 chương trình đột phá' },
                  { text: 'Về tăng cường xây dựng chỉnh đốn Đảng; ngăn chặn đẩy lùi sự suy thoái về tư tưởng chính trị' },
                  { text: 'Công tác kết nạp đảng viên và tình hình đảng viên ra khỏi Đảng' },
                  { text: 'Nhiệm vụ kinh tế - xã hội' },
                  { text: 'Danh sách tổ' },
                ]}
                textStyle={themedStyle.txtSelectInput}
                keyExtractor={(item) => item.text}
                selectedOption={selectedOption}
                controlStyle={themedStyle.selectOption}
                placeholder={'Chọn nội dung tài liệu'}
                placeholderStyle={themedStyle.selectOptionPhd}
                size={'large'}
                onSelect={setSelectedOption}>
              </Select>
            </View>
          </View>
          <Document
            documentSections={props.documentSections}
          />
          <View style={themedStyle.viewYeuCau}>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={onDocumentRequestPress}
              style={themedStyle.btnYeuCau}>
              <Text style={themedStyle.txtYeuCau}>
                {'YÊU CẦU TÀI LIỆU'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ModalDocumentRequest
          isVisible={isVisibleDocumentRequest}
          onClosePress={onClosePress} />
      </View>
      <SafeAreaView />
    </React.Fragment>
  );
};

export const DocumentList = withStyles(DocumentListComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-2'],
    marginTop: pxToPercentage(8),
  },
  viewCard: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  viewSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: pxToPercentage(10),
  },
  viewSelect: {
    marginTop: pxToPercentage(8),
  },
  viewTopGroup: {
    paddingHorizontal: pxToPercentage(8),
  },
  viewInput: {
    height: pxToPercentage(48),
    borderRadius: pxToPercentage(5),
    fontSize: pxToPercentage(14),
  },
  btnTimKiem: {
    marginTop: pxToPercentage(8),
    height: pxToPercentage(48),
    backgroundColor: theme['color-primary-0'],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: pxToPercentage(10),
  },
  txtTimKiem: {
    fontSize: pxToPercentage(14),
    color: theme['color-primary-2'],
  },
  btnYeuCau: {
    height: pxToPercentage(48),
    backgroundColor: theme['color-primary-2'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtYeuCau: {
    fontSize: pxToPercentage(14),
    color: theme['color-primary-0'],
    ...textStyle.proDisplayRegular,
  },
  txtSelectInput: {
    fontSize: pxToPercentage(14),
    padding: 0,
    ...textStyle.proTextRegular,
  },
  selectOption: {

    height: pxToPercentage(48),
    borderRadius: pxToPercentage(5),
    borderColor: theme['color-primary-18'],
  },
  selectOptionPhd: {
    color: theme['color-primary-18'],
  },
}));
