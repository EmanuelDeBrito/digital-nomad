import { PropsWithChildren } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

export type BottomSheetProps = {
  isOpen: SharedValue<boolean>;
  duration?: number;
  onPress: () => void;
};

export const BottomSheet = ({
  isOpen,
  duration = 2000,
  children,
  onPress,
}: PropsWithChildren<BottomSheetProps>) => {
  const childrenHeight = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration: duration }),
  );

  const bottomSheetAnimatedStyles = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen.value
      ? 1
      : withDelay(duration, withTiming(-1, { duration: 0 })),
  }));

  const contentAnimatedStyles = useAnimatedStyle(() => ({
    zIndex: 2,
    transform: [
      {
        translateY: childrenHeight.value * progress.value,
      },
    ],
  }));

  return (
    <>
      <Animated.View style={[styles.backdrop, bottomSheetAnimatedStyles]}>
        <TouchableOpacity style={{ flex: 1 }} onPress={onPress} />
      </Animated.View>
      <Animated.View
        style={[styles.content, contentAnimatedStyles]}
        onLayout={(event) => {
          childrenHeight.value = event.nativeEvent.layout.height;
        }}
      >
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
