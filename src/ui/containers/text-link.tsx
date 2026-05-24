import { LinkProps, router } from "expo-router";
import { Pressable } from "react-native";
import { Text } from "../components/text";

type TextLinkType = {
  text: string;
  highlighted: string;
  href?: LinkProps["href"];
  goBack?: boolean;
};

export const TextLink = ({ text, highlighted, href, goBack }: TextLinkType) => {
  const handleTextLinkPress = () => {
    if (href) {
      router.navigate(href);
    } else if (goBack) {
      router.back();
    }
  };

  return (
    <Pressable onPress={handleTextLinkPress}>
      <Text textAlign="center" mt="s20" variant="text16" color="gray2">
        {text}{" "}
        <Text variant="title16" color="primary">
          {highlighted}
        </Text>
      </Text>
    </Pressable>
  );
};
