import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import theme from "../theme/theme";
import { useAppTheme } from "../theme/useAppTheme";
import { Box } from "./box";
import { Text } from "./text";

type AccordionProps = {
  title: string;
  description: string;
};

export const Accordion = ({ title, description }: AccordionProps) => {
  const isOpen = useSharedValue(false);
  const progress = useSharedValue(0);

  const handleOpenAccordionPress = () => {
    isOpen.value = !isOpen.value;
    progress.value = withTiming(isOpen.value ? 0 : 1, { duration: 500 });
  };

  return (
    <Pressable onPress={handleOpenAccordionPress}>
      <Box>
        <AccordionHeader title={title} progress={progress} />
        <AccordionBody description={description} isOpen={isOpen} />
      </Box>
    </Pressable>
  );
};

const AccordionHeader = ({
  title,
  progress,
}: {
  title: string;
  progress: SharedValue<number>;
}) => {
  const { colors } = useAppTheme();

  const animatedStyles = useAnimatedStyle(() => ({
    tintColor: interpolateColor(
      progress.value,
      [0, 1],
      [colors.gray2, colors.primary],
    ),
    transform: [
      {
        rotate: interpolate(progress.value, [0, 1], [0, -180]) + "deg",
      },
    ],
  }));

  return (
    <View style={styles.header}>
      <Box flexShrink={1}>
        <Text variant="title16">{title}</Text>
      </Box>
      <Animated.Image
        source={require("@/assets/images/chevron-down.png")}
        style={[animatedStyles, { width: 24, height: 24 }]}
      />
    </View>
  );
};

const AccordionBody = ({
  description,
  isOpen,
}: {
  description: string;
  isOpen: SharedValue<boolean>;
}) => {
  const height = useSharedValue(0);

  // const derivedHeight = useDerivedValue(() =>
  //   withTiming(height.value * Number(isOpen.value), {
  //     duration: 500,
  //   }),
  // );

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value * Number(isOpen.value), {
        duration: 500,
      }),
    };
  });

  return (
    <Animated.View style={[animatedStyles, { overflow: "hidden" }]}>
      <View
        style={styles.body}
        onLayout={(event) => {
          height.value = event.nativeEvent.layout.height;
        }}
      >
        <Text variant="text12">{description}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 2,
    borderColor: theme.colors.gray1,
    borderRadius: theme.borderRadii.default,
  },
  body: {
    position: "absolute",
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: theme.colors.gray1,
    borderBottomLeftRadius: theme.borderRadii.default,
    borderBottomRightRadius: theme.borderRadii.default,
  },
});
