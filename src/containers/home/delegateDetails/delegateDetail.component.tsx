import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { User as UserModel } from '@src/core/models/user//userDetails';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';
import { ProfileInfoV3 } from '@src/components/profileInfo/profileinfoV3.compoent';


interface ComponentProps {
  users: UserModel;
}

export type DelegateDetailProps = ThemedComponentProps & ComponentProps;

const DelegateDetailComponent: React.FunctionComponent<DelegateDetailProps> = (props) => {
  const { themedStyle, users } = props;

  const BreakLine = () => {
    return (
      <View style={themedStyle.breakLine} />
    );
  };

  return (
    <ScrollView style={themedStyle.container}>
      <Text style={themedStyle.txtTitle}>{'Thông tin đại biểu'}</Text>
      <ProfileInfoV3 user={users} />
      <View style={themedStyle.viewDetails}>
        <View style={themedStyle.viewSectionRow}>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'ngày sinh '}</Text>
            <Text style={themedStyle.txtProps}>{users.birthDay}</Text>
          </View>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Số đại biểu '}</Text>
            <Text style={themedStyle.txtProps}>{users.number}</Text>
          </View>
        </View>
        <View style={themedStyle.breakLine} />
        <View style={themedStyle.viewSectionRow}>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Dân tộc '}</Text>
            <Text style={themedStyle.txtProps}>{users.nation}</Text>
          </View>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Giới tính '}</Text>
            <Text style={themedStyle.txtProps}>{users.sex}</Text>
          </View>
        </View>
        <View style={themedStyle.breakLine} />
        <View style={themedStyle.viewSectionRow}>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'quê quán'}</Text>
            <Text style={themedStyle.txtProps}>{users.hometown}</Text>
          </View>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Tôn giáo'}</Text>
            <Text style={themedStyle.txtProps}>{users.religion}</Text>
          </View>
        </View>
        <View style={themedStyle.breakLine} />
        <View style={themedStyle.viewSectionRow}>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Ngày vào đảng dự bị'}</Text>
            <Text style={themedStyle.txtProps}>{users.preparatoryDay}</Text>
          </View>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Ngày vào đảng chỉnh thức'}</Text>
            <Text style={themedStyle.txtProps}>{users.officialDay}</Text>
          </View>
        </View>
        <View style={themedStyle.breakLine} />
        <View style={themedStyle.viewSectionRow}>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Học vấn phổ thông'}</Text>
            <Text style={themedStyle.txtProps}>{users.Education}</Text>
          </View>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Học hàm, học vị'}</Text>
            <Text style={themedStyle.txtProps}>{users.degree}</Text>
          </View>
        </View>
        <View style={themedStyle.breakLine} />
        <View style={themedStyle.viewSectionRow}>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Cơ quan'}</Text>
            <Text style={themedStyle.txtProps}>{users.position}</Text>
          </View>
        </View>
        <View style={themedStyle.breakLine} />
        <View style={themedStyle.viewSectionRow}>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Chuyên môn, nghiệp vụ, ngoại ngữ'}</Text>
            <Text style={themedStyle.txtProps}>{users.specialize}</Text>
          </View>
        </View>
        <View style={themedStyle.breakLine} />
        <View style={themedStyle.viewSectionRow}>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Lý luận chính trị'}</Text>
            <Text style={themedStyle.txtProps}>{users.politicalTheory}</Text>
          </View>
        </View>
        <View style={themedStyle.breakLine} />
        <View style={themedStyle.viewSectionRow}>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Kỷ luật'}</Text>
            <Text style={themedStyle.txtProps}>{users.discipline}</Text>
          </View>
        </View>
        <View style={themedStyle.breakLine} />
        <View style={themedStyle.viewSectionRow}>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Khen thưởng'}</Text>
            <Text style={themedStyle.txtProps}>{users.Bonus}</Text>
          </View>
        </View>
        <View style={themedStyle.breakLine} />
        <View style={themedStyle.viewSectionRow}>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'Đoàn'}</Text>
            <Text style={themedStyle.txtProps}>{users.group}</Text>
          </View>
        </View>
        <View style={themedStyle.breakLine} />
        <View style={themedStyle.viewSectionRow}>
          <View style={themedStyle.viewBlock}>
            <Text style={themedStyle.txtName}>{'ghi chú'}</Text>
            <Text style={themedStyle.txtProps}>{users.note}</Text>
          </View>
        </View>
        <View style={themedStyle.breakLine} />
      </View>
    </ScrollView>
  );
};

export const DelegateDetail = withStyles(DelegateDetailComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-11'],
  },
  txtTitle: {
    fontSize: pxToPercentage(18),
    ...textStyle.proTextRegular,
    textAlign: 'center',
    paddingVertical: pxToPercentage(10),
  },
  txtName: {
    fontSize: pxToPercentage(13),
    ...textStyle.proTextRegular,
    color: theme['color-primary-13'],
  },
  txtProps: {

  },
  viewDetails: {
    flex: 2,
    backgroundColor: theme['color-primary-12'],
    borderTopLeftRadius: pxToPercentage(1),
    borderTopRightRadius: pxToPercentage(1),
    marginHorizontal: pxToPercentage(10),
    marginTop: pxToPercentage(8),
  },
  viewBlock: {
    flex: 1,
  },
  viewSectionRow: {
    flexDirection: 'row',
    paddingVertical: pxToPercentage(10),
    paddingHorizontal: pxToPercentage(16),
  },
  breakLine: {
    height: pxToPercentage(2),
    backgroundColor: theme['color-primary-11'],
  },

}));
