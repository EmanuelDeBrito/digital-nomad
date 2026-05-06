import { Pressable, StyleSheet, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import theme from "../theme/theme";
import { Box } from "./box";
import { Icon } from "./icon";
import { Text } from "./text";

type AccordionProps = {
  title: string;
  description: string;
};

export const Accordion = ({ title, description }: AccordionProps) => {
  const isOpen = useSharedValue(false);

  const handleOpenAccordionPress = () => {
    isOpen.value = !isOpen.value;
  };

  return (
    <Pressable onPress={handleOpenAccordionPress}>
      <Box>
        <AccordionHeader title={title} />
        <AccordionBody description={description} isOpen={isOpen} />
      </Box>
    </Pressable>
  );
};

const AccordionHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.header}>
      <Box flexShrink={1}>
        <Text variant="title16">{title}</Text>
      </Box>
      <Icon name="Chevron-down" color="gray2" />
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
