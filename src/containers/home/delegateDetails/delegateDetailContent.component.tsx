import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { User as UserModel } from '@src/core/models/user//userDetails';
import { textStyle } from '@src/components';
import { pxToPercentage } from '@src/core/utils/utils';

interface ComponentProps {
  users: UserModel;
}

export type DelegateDetailContentProps = ThemedComponentProps & ComponentProps;

const DelegateDetailContentComponent: React.FunctionComponent<DelegateDetailContentProps> = (props) => {
  const { themedStyle, users } = props;

  return (
    <View style={themedStyle.container}>
      <View style={themedStyle.viewSection}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>{'ngày sinh '}</Text>
          <Text style={themedStyle.txtItem}>{users.birthDay}</Text>
        </View>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>{'Số đại biểu '}</Text>
          <Text style={themedStyle.txtItem}>{users.number}</Text>
        </View>
      </View>
      <View style={themedStyle.breakLine} />
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>{'Dân tộc '}</Text>
          <Text style={themedStyle.txtItem}>{users.nation}</Text>
        </View>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>{'Giới tính '}</Text>
          <Text style={themedStyle.txtItem}>{users.sex}</Text>
        </View>
      </View>
      <View style={themedStyle.breakLine} />
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>{'quê quán'}</Text>
          <Text style={themedStyle.txtItem}>{users.hometown}</Text>
        </View>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>{'Tôn giáo'}</Text>
          <Text style={themedStyle.txtItem}>{users.religion}</Text>
        </View>
      </View>
      <View style={themedStyle.breakLine} />
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>{'Ngày vào đảng dự bị'}</Text>
          <Text style={themedStyle.txtItem}>{users.preparatoryDay}</Text>
        </View>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>{'Ngày vào đảng chỉnh thức'}</Text>
          <Text style={themedStyle.txtItem}>{users.officialDay}</Text>
        </View>
      </View>
      <View style={themedStyle.breakLine} />
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {'Học vấn phổ thông'}
          </Text>
          <Text style={themedStyle.txtItem}>
            {users.Education}</Text>
        </View>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {'Học hàm, học vị'}
          </Text>
          <Text style={themedStyle.txtItem}>
            {users.degree}
          </Text>
        </View>
      </View>
      <View style={themedStyle.breakLine} />
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {'Cơ quan'}</Text>
          <Text style={themedStyle.txtItem}>
            {users.position}
          </Text>
        </View>
      </View>
      <View style={themedStyle.breakLine} />
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {'Chuyên môn, nghiệp vụ, ngoại ngữ'}
          </Text>
          <Text style={themedStyle.txtItem}>
            {users.specialize}
          </Text>
        </View>
      </View>
      <View style={themedStyle.breakLine} />
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {'Lý luận chính trị'}
          </Text>
          <Text style={themedStyle.txtItem}>
            {users.politicalTheory}
          </Text>
        </View>
      </View>
      <View style={themedStyle.breakLine} />
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {'Kỷ luật'}
          </Text>
          <Text style={themedStyle.txtItem}>
            {users.discipline}
          </Text>
        </View>
      </View>
      <View style={themedStyle.breakLine} />
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {'Khen thưởng'}
          </Text>
          <Text style={themedStyle.txtItem}>
            {users.Bonus}
          </Text>
        </View>
      </View>
      <View style={themedStyle.breakLine} />
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {'Đoàn'}
          </Text>
          <Text style={themedStyle.txtItem}>
            {users.group}
          </Text>
        </View>
      </View>
      <View style={themedStyle.breakLine} />
      <View style={themedStyle.viewSectionRow}>
        <View style={themedStyle.viewBlock}>
          <Text style={themedStyle.txtTitle}>
            {'ghi chú'}
          </Text>
          <Text style={themedStyle.txtItem}>
            {users.note}
          </Text>
        </View>
      </View>
      <View style={themedStyle.breakLine} />
    </View>
  );
};

export const DelegateDetailContent = withStyles(DelegateDetailContentComponent, (theme: ThemeType) => ({
  container: {
    backgroundColor: theme['color-primary-12'],
    borderTopLeftRadius: pxToPercentage(1),
    borderTopRightRadius: pxToPercentage(1),
    marginHorizontal: pxToPercentage(10),
    marginTop: pxToPercentage(8),
  },
  txtTitle: {
    fontSize: pxToPercentage(13),
    ...textStyle.proTextRegular,
    color: theme['color-primary-13'],
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
