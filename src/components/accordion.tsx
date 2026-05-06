import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import theme from "../theme/theme";
import { Box } from "./box";
import { Icon } from "./icon";
import { Text } from "./text";

type AccordionProps = {
  title: string;
  description: string;
};

export const Accordion = ({ title, description }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Pressable onPress={handleSetIsOpen}>
      <Box>
        <AccordionHeader title={title} />
        {isOpen && <AccordionBody description={description} />}
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

const AccordionBody = ({ description }: { description: string }) => {
  return (
    <View style={styles.body}>
      <Text variant="text12">{description}</Text>
    </View>
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
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: theme.colors.gray1,
    borderBottomLeftRadius: theme.borderRadii.default,
    borderBottomRightRadius: theme.borderRadii.default,
  },
});
