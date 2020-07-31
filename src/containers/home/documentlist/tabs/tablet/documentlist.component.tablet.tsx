import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { viewStyle } from '@src/components/viewStyle';
import { textStyle } from '@src/components';
import { DocumentSection as DocumentSectionModel } from '@src/core/models/document/document.model';
import { BackHeader } from '@src/components/header/backHeader.component';
import { ProgramTabEnum } from '@src/core/utils/constants';
import { DocumentTablet } from './document.component.tablet';
import { ModalDocumentRequest } from './modalDocumentRequest.tablet.component';

interface ComponentProps {
  documents: DocumentSectionModel[];
  onBackPress?: () => void;
}

export type DocumentListTabletProps = ComponentProps & ThemedComponentProps;

const DocumentListTabletComponent: React.FunctionComponent<DocumentListTabletProps> = (props) => {
  const [selectedTab, setSelectedTab] = useState<number>(ProgramTabEnum.ChuongTrinh);

  const [isVisibleDocumentRequest, setIsVisibleDocumentRequest] = React.useState<boolean>(false);

  const onDocumentRequestPress = () => {
    setIsVisibleDocumentRequest(true);
  };

  const onClosePress = () => {
    setIsVisibleDocumentRequest(false);
  };

  const onMessagePress = (): void => {

  };

  const onBackPress = (): void => {
    props.onBackPress();
  };

  const onHelpPress = (): void => {

  };

  const { themedStyle } = props;

  const renderTabBtn = (type: number, title: string): React.ReactElement => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          themedStyle.btnTab,
          selectedTab === type && themedStyle.btnTabSelected,
        ]}
        onPress={() => setSelectedTab(type)}>
        <Text
          style={[
            themedStyle.txtBtnTab,
            selectedTab === type && themedStyle.txtBtnTabSelected,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };


  return (
    <View style={themedStyle.container}>
      <BackHeader
        title={''}
        onBackPress={onBackPress}
        onMessagePress={onMessagePress}
        onHelpPress={onHelpPress} />
      <View style={themedStyle.viewCard}>
        <ScrollView style={themedStyle.viewLeft}>
          {renderTabBtn(0, '7 chương trình đột phá')}
          {renderTabBtn(1, 'Về tăng cường xây dựng chỉnh đốn Đảng; ngăn chặn đẩy lùi sự suy thoái về tư tưởng chính trị, đạo đức, lối sống, những biểu hiện "Tự diễn biến", "Tự chuyển hóa" trong nội bộ ')}
          {renderTabBtn(2, 'Công tác kết nạp đảng viên và tình hình đảng viên ra khỏi Đảng')}
          {renderTabBtn(3, 'Nhiệm vụ kinh tế - xã hội')}
          {renderTabBtn(4, 'Danh sách tổ')}
        </ScrollView>
        <View>
          <View style={themedStyle.viewTopRight}>
            <TextInput
              style={themedStyle.txtInput}
              placeholder='Nhập trích yếu/số văn bản'
            />
            <TouchableOpacity style={themedStyle.btnTimKiem}>
              <Text style={themedStyle.txtTimKiem}>TÌM KIẾM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={onDocumentRequestPress}
              style={themedStyle.btnYeuCau}>
              <Text style={themedStyle.txtYeuCau}>YÊU CẦU TÀI LIỆU</Text>
            </TouchableOpacity>
          </View>
          <DocumentTablet
            documents={props.documents}
          />
        </View>
      </View>
      <ModalDocumentRequest
        isVisible={isVisibleDocumentRequest}
        onClosePress={onClosePress} />
    </View>
  );
};

export const DocumentListTablet = withStyles(DocumentListTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: pxToPercentage(31),
    paddingBottom: pxToPercentage(31),
    backgroundColor: theme['color-primary-2'],
  },
  viewLeft: {
    width: pxToPercentage(488),
    alignSelf: 'baseline',
    marginRight: pxToPercentage(20),
    borderRadius: pxToPercentage(32),
    borderWidth: pxToPercentage(1),
    borderColor: theme['color-primary-2'],
    backgroundColor: theme['color-custom-100'],
  },
  viewCard: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: pxToPercentage(40),
    padding: pxToPercentage(20),
    paddingTop: pxToPercentage(34),
    backgroundColor: theme['color-custom-100'],
    ...viewStyle.shadow2,
  },
  viewTopRight: {
    flexDirection: 'row',
  },
  viewTable: {
    marginTop: pxToPercentage(28),
  },
  btnTab: {
    paddingLeft: pxToPercentage(20),
    borderTopLeftRadius: pxToPercentage(32),
    borderTopRightRadius: pxToPercentage(32),
    borderWidth: pxToPercentage(1),
    borderColor: theme['color-primary-2'],
    minHeight: pxToPercentage(125),
    borderBottomWidth: pxToPercentage(0),
    flex: 1,
  },
  btnTabSelected: {
    backgroundColor: theme['color-primary-19'],
    borderTop: pxToPercentage(1),
    borderColor: theme['color-primary-2'],
  },
  txtBtnTab: {
    paddingHorizontal: pxToPercentage(10),
    fontSize: pxToPercentage(34),
    marginTop: pxToPercentage(20),
    color: theme['color-custom-12'],
    ...textStyle.proDisplayBold,
  },
  txtBtnTabSelected: {
    color: theme['color-primary-2'],
  },
  txtTd: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
  txtInput: {
    borderWidth: pxToPercentage(1),
    width: pxToPercentage(512),
    height: pxToPercentage(80),
    borderRadius: pxToPercentage(32),
    paddingLeft: pxToPercentage(22),
  },
  btnTimKiem: {
    width: pxToPercentage(355),
    height: pxToPercentage(80),
    backgroundColor: theme['color-primary-0'],
    borderRadius: pxToPercentage(32),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: pxToPercentage(28),
  },
  txtTimKiem: {
    fontSize: pxToPercentage(34),
    color: theme['color-primary-2'],
  },
  btnYeuCau: {
    width: pxToPercentage(355),
    height: pxToPercentage(80),
    backgroundColor: theme['color-primary-2'],
    borderRadius: pxToPercentage(32),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: pxToPercentage(261),
  },
  txtYeuCau: {
    fontSize: pxToPercentage(34),
    color: theme['color-primary-0'],
    ...textStyle.proDisplayRegular,
  },
}));
