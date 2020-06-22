import React, { useEffect } from 'react';
import {
  Animated,
  Easing,
  EventSubscription,
  Keyboard,
  KeyboardEvent,
  KeyboardEventName,
  Platform,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewProps,
  ViewStyle,
} from 'react-native';

export interface AvoidKeyboardProps extends ViewProps {
  offset?: (height: number) => number;
  autoDismiss?: boolean;
}

export const AvoidKeyboard: React.FunctionComponent<AvoidKeyboardProps> = (props) => {
  const translateY: Animated.Value = new Animated.Value(0);

  const animationDuration: number = Platform.select({
    android: 160,
    default: 250,
  });

  // @ts-ignore
  const showEvent: KeyboardEventName = Platform.select({
    android: 'keyboardDidShow',
    default: 'keyboardWillShow',
  });

  // @ts-ignore
  const hideEvent: KeyboardEventName = Platform.select({
    android: 'keyboardDidHide',
    default: 'keyboardWillHide',
  });

  let keyboardShowSubscription: EventSubscription;
  let keyboardHideSubscription: EventSubscription;

  useEffect(() => {
    keyboardShowSubscription = Keyboard.addListener(showEvent, onKeyboardShow);
    keyboardHideSubscription = Keyboard.addListener(hideEvent, onKeyboardHide);

    return () => {
      keyboardShowSubscription.remove();
      keyboardHideSubscription.remove();
    };
  }, []);

  const onKeyboardShow = (event: KeyboardEvent): void => {
    const offset: number = -props.offset(event.endCoordinates.height);

    createTranslateAnimation({ offset }).start();
  };

  const onKeyboardHide = (event: KeyboardEvent): void => {
    const offset: number = 0;

    createTranslateAnimation({ offset }).start();
  };

  const onContainerPress = (): void => {
    Keyboard.dismiss();
  };

  const getComponentStyle = (source: StyleProp<ViewStyle>): ViewStyle => {
    return {
      ...styles.container,
      ...styles.transform(translateY),
      ...StyleSheet.flatten(source),
    };
  };

  const createTranslateAnimation = (params: { offset: number }): Animated.CompositeAnimation => {
    const { offset } = params;

    return Animated.timing(translateY, {
      toValue: offset,
      duration: animationDuration,
      easing: Easing.linear,
    });
  };

  const { style, autoDismiss, ...restProps } = props;
  const componentStyle: ViewStyle = getComponentStyle(style);

  return (
    <TouchableWithoutFeedback
      onPress={onContainerPress}
      disabled={!autoDismiss}>
      <Animated.View
        style={componentStyle}
        {...restProps}
      />
    </TouchableWithoutFeedback>
  );
};

AvoidKeyboard.defaultProps = {
  offset: (height: number): number => height,
  autoDismiss: true,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // @ts-ignore
  transform: (y: Animated.Value) => ({
    transform: [{ translateY: y }],
  }),
});
