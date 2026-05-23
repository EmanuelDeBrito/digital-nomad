import { ThemeColors } from "../theme/theme";
import { TouchableOpacityBox, TouchableOpacityBoxProps } from "./box";
import { Text } from "./text";

type ButtonVariant = "primary" | "secondary";

const buttonColors: Record<
  ButtonVariant,
  { backgroundColor: ThemeColors; textColor: ThemeColors }
> = {
  primary: {
    backgroundColor: "primary",
    textColor: "text",
  },
  secondary: {
    backgroundColor: "gray1",
    textColor: "text",
  },
};

type ButtonProps = TouchableOpacityBoxProps & {
  title: string;
  variant?: ButtonVariant;
  onPress: () => void;
};

export const Button = ({
  title,
  variant = "primary",
  onPress,
  ...touchableOpacityBoxProps
}: ButtonProps) => {
  const buttonVariantColors = buttonColors[variant];

  return (
    <TouchableOpacityBox
      {...touchableOpacityBoxProps}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      padding="padding"
      backgroundColor={buttonVariantColors.backgroundColor}
      borderRadius="default"
      onPress={onPress}
    >
      <Text variant="title16" color={buttonVariantColors.textColor}>
        {title}
      </Text>
    </TouchableOpacityBox>
  );
};
