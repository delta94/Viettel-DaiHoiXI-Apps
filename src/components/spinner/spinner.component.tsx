import React from 'react';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import { useSelector } from 'react-redux';
import { AppState } from '@src/core/store';
import Modal from 'react-native-modal';

export const SPINNER_TYPES = {
  BALL: 'BALL',
  BAR: 'BAR',
  DOT: 'DOT',
  MATERIAL: 'MATERIAL',
  PACMAN: 'PACMAN',
  PULSE: 'PULSE',
  SKYPE: 'SKYPE',
  WAVE: 'WAVE',
};

interface ComponentProps {
  isVisible?: boolean;
  type?: string;
}

export type SpinnerProps = ThemedComponentProps & ComponentProps;

const SpinnerComponent: React.FunctionComponent<SpinnerProps> = (props) => {
  const appReducer = useSelector((state: AppState) => state.app);

  const renderIndicator = (): React.ReactElement => {
    const { type } = props;
    const indicatorColor: string = themedStyle.indicator.color;
    const indicatorSize: number = themedStyle.indicator.size;

    switch (type) {
      case SPINNER_TYPES.BALL: {
        return <BallIndicator size={indicatorSize} color={indicatorColor} />;
      }
      case SPINNER_TYPES.BAR: {
        return <BarIndicator size={indicatorSize} color={indicatorColor} />;
      }
      case SPINNER_TYPES.DOT: {
        return <DotIndicator size={indicatorSize} color={indicatorColor} />;
      }
      case SPINNER_TYPES.MATERIAL: {
        return <MaterialIndicator size={indicatorSize} color={indicatorColor} />;
      }
      case SPINNER_TYPES.PACMAN: {
        return <PacmanIndicator size={indicatorSize} color={indicatorColor} />;
      }
      case SPINNER_TYPES.PULSE: {
        return <PulseIndicator size={indicatorSize} color={indicatorColor} />;
      }
      case SPINNER_TYPES.SKYPE: {
        return <SkypeIndicator size={indicatorSize} color={indicatorColor} />;
      }
      case SPINNER_TYPES.WAVE: {
        return <WaveIndicator size={indicatorSize} color={indicatorColor} />;
      }
      default: {
        return <ActivityIndicator size={'large'} />;
      }
    }
  };

  const { themedStyle, isVisible } = props;

  return (
    <Modal
      isVisible={isVisible || appReducer.isEnabledSpinner}
      animationIn='slideInUp'
      animationOut='slideOutDown'
      animationInTiming={1}
      animationOutTiming={1}
      backdropOpacity={0}
      hasBackdrop={false}
      backdropTransitionInTiming={1}
      backdropTransitionOutTiming={1}
      style={themedStyle.container}>
      <StatusBar
        backgroundColor='transparent'
        barStyle='dark-content'
      />
      {renderIndicator()}
    </Modal>
  );
};

export const Spinner = withStyles(SpinnerComponent, (theme: ThemeType) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    color: theme['background-dark-color-1'],
    size: 30,
  },
}));
