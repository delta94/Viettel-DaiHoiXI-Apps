import React, { useState } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { CongressInformation } from './congressInformation.component';

export const CongressInformationContainer: React.FunctionComponent<NavigationInjectedProps> = (props) => {
  const navigationKey: string = 'CongressInformationContainer';
  const [tabSelected, setTabSelected] = useState(1);
  const [dateSelected, setDateSelected] = useState(1);
  const [day, setDay] = useState((new Date()).getDate());
  const [month, setMonth] = useState((new Date()).getMonth() + 1);
  const [year, setYear] = useState((new Date()).getFullYear());

  const onTabSelected = (value: number): void => {
    setTabSelected(value);
  };

  const onDateSelected = (value: number): void => {
    setDateSelected(value);
  };

  const onIncrementDate = (): void => {
    if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) !== -1) {
      if (day + 1 > 31) {
        setDay(1);
        if (month + 1 > 11) {
          setMonth(1);
          setYear(year + 1);
        } else {
          setMonth(month + 1);
        }
      } else {
        setDay(day + 1);
      }
    } else if (month === 2) {
      if (day + 1 > 29) {
        setDay(1);
        setMonth(month + 1);
      } else {
        setDay(day + 1);
      }
    } else {
      if (day + 1 > 30) {
        setDay(1);
        setMonth(month + 1);
      } else {
        setDay(day + 1);
      }
    }
  };

  const onDecrementDate = (): void => {
    if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) !== -1) {
      if (day - 1 < 1) {
        if (month === 8 || month === 1) {
          setDay(31);
        } else {
          setDay(30);
        }
        if (month === 3) {
          setDay(29);
        }
        if (month - 1 < 1) {
          setMonth(12);
          setYear(year - 1);
        } else {
          setMonth(month - 1);
        }
      } else {
        setDay(day - 1);
      }
    } else if (month === 2) {
      if (day - 1 < 1) {
        setDay(30);
        setMonth(month - 1);
      } else {
        setDay(day - 1);
      }
    } else {
      if (day - 1 < 1) {
        setDay(30);
        setMonth(month - 1);
      } else {
        setDay(day - 1);
      }
    }
  };

  return (
    <CongressInformation
      year={year}
      day={day}
      month={month}
      onIncrementDate={onIncrementDate}
      onDecrementDate={onDecrementDate}
      tabSelected={tabSelected}
      onTabSelected={onTabSelected}
      dateSelected={dateSelected}
      onDateSelected={onDateSelected}
    />
  );
};
