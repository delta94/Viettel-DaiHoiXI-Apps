import React from 'react';
import { Text } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import { pxToPercentage } from '@src/core/utils/utils';
import { textStyle } from '@src/components';
import { Program as ProgramModel } from '@src/core/models/program/program.model';
import { Table } from '@src/components/table/table.component';
import { Thead } from '@src/components/table/thead.component';
import { Th } from '@src/components/table/th.component';
import { Tbody } from '@src/components/table/tbody.component';
import { Tr } from '@src/components/table/tr.component';
import { Td } from '@src/components/table/td.component';

interface ComponentProps {
  programs: ProgramModel[];
}

export type ProgramTabletProps = ComponentProps & ThemedComponentProps;

const ProgramTabletComponent: React.FunctionComponent<ProgramTabletProps> = (props) => {
  const { themedStyle } = props;

  const renderPrograms = (): React.ReactElement[] => {
    let indexTemp: number = 0;

    return props.programs.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <Tr>
            <Td alignItems='center' width={110} />
            <Td alignItems='center' width={300}>
              <Text style={themedStyle.txtInfo}>
                {item.section}
              </Text>
            </Td>
            <Td width={600} />
            <Td alignItems='center' />
          </Tr>
          {item.contents.map((itemChild, indexChild) => {
            indexTemp++;

            return (
              <Tr key={indexChild}>
                <Td alignItems='center' width={110}>
                  <Text style={themedStyle.txtInfo}>
                    {indexTemp}
                  </Text>
                </Td>
                <Td alignItems='center' width={300}>
                  <Text style={themedStyle.txtInfo}>
                    {`${itemChild.fromTime} - ${itemChild.toTime}`}
                  </Text>
                </Td>
                <Td width={600}>
                  <Text style={themedStyle.txtInfo}>
                    {itemChild.description}
                  </Text>
                </Td>
                <Td alignItems='center'>
                  <Text style={themedStyle.txtInfo}>
                    {itemChild.implementer || '-'}
                  </Text>
                </Td>
              </Tr>
            );
          })}
        </React.Fragment>
      );
    });
  };

  return (
    <Table style={themedStyle.container}>
      <Thead>
        <Th alignItems='center' width={110}>
          {'STT'}
        </Th>
        <Th alignItems='center' width={300}>
          {'Thời gian'}
        </Th>
        <Th alignItems='center' width={600}>
          {'Nội dung'}
        </Th>
        <Th alignItems='center'>
          {'Người thực hiện'}
        </Th>
      </Thead>
      <Tbody>
        {renderPrograms()}
      </Tbody>
    </Table>
  );
};

export const ProgramTablet = withStyles(ProgramTabletComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    marginTop: pxToPercentage(28),
  },
  txtInfo: {
    fontSize: pxToPercentage(34),
    ...textStyle.proDisplayRegular,
  },
}));
