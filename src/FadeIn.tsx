import React, { PropsWithChildren } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing
} from 'react-native-reanimated';

const FadeIn = ({ children }: PropsWithChildren<any>) => {
  const opacity = useSharedValue(0);

  opacity.value = withRepeat(
    withTiming(1, { duration: 3000, easing: Easing.ease }),
    -1,
    true
  );

  const style = useAnimatedStyle(
    () => ({ opacity: opacity.value }),
    []
  );

  return <Animated.View style={style}>{children}</Animated.View>;
};

export default FadeIn;
