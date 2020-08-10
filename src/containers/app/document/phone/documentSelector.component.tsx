import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import {
  textStyle,
  ValidationInput,
} from '@src/components';
import { DocumentSection as DocumentSectionModel } from '@src/core/models/document/document.model';
import { StringValidator } from '@src/core/validators';
import { Document } from './document.component';
import { Select } from 'react-native-ui-kitten/ui';
import { DocumentRequestModal } from './documentRequestModal.component';

interface ComponentProps {
  documentSections: DocumentSectionModel[];
  onBackPress?: () => void;
}

export type DocumentSelectorProps = ComponentProps & ThemedComponentProps;

const DocumentSelectorComponent: React.FunctionComponent<DocumentSelectorProps> = (props) => {

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
        <View style={themedStyle.viewTopGroup}>
          <ValidationInput
            style={themedStyle.viewInput}
            placeholder={'Nhập trích yếu/số văn bản'}
            validator={StringValidator}
            onChangeText={() => { }}
          />
          {/* <TouchableOpacity style={themedStyle.btnSearch}
              activeOpacity={0.75}>
              <Text style={themedStyle.txtSearch}>
                {'TÌM KIẾM'}
              </Text>
            </TouchableOpacity> */}
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
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={onDocumentRequestPress}
          style={themedStyle.btnRequest}>
          <Text style={themedStyle.txtRequest}>
            {'YÊU CẦU TÀI LIỆU'}
          </Text>
        </TouchableOpacity>
      </View>
      <DocumentRequestModal
        isVisible={isVisibleDocumentRequest}
        onClosePress={onClosePress}
      />
    </React.Fragment>
  );
};

export const DocumentSelector = withStyles(DocumentSelectorComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-custom-100'],
  },
  // viewSearch: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginBottom: pxToPercentage(10),
  // },
  viewSelect: {
    marginTop: pxToPercentage(8),
  },
  viewTopGroup: {
    paddingHorizontal: pxToPercentage(8),
    paddingTop: pxToPercentage(8),
  },
  viewInput: {
    height: pxToPercentage(48),
    borderRadius: pxToPercentage(5),
    fontSize: pxToPercentage(14),
  },
  // btnSearch: {
  //   marginTop: pxToPercentage(8),
  //   height: pxToPercentage(48),
  //   backgroundColor: theme['color-primary-0'],
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderRadius: pxToPercentage(10),
  // },
  // txtSearch: {
  //   fontSize: pxToPercentage(14),
  //   color: theme['color-primary-2'],
  // },
  btnRequest: {
    height: pxToPercentage(48),
    backgroundColor: theme['color-primary-2'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtRequest: {
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
