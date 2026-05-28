import { useState } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { Box, BoxProps } from "./box";
import { Text } from "./text";

type TextInputProps = RNTextInputProps & {
  label: string;
  errorMessage?: string;
};

export const TextInput = ({
  label,
  errorMessage,
  testID,
  ...textInputProps
}: TextInputProps) => {
  const { colors, textVariants } = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = errorMessage
    ? "fbErrorSurface"
    : isFocused
      ? "text"
      : "gray2";

  return (
    <Box>
      <Text mb="s4" variant="title14">
        {label}
      </Text>
      <Box
        testID={`${testID}-container`}
        {...textInputAreaStyle}
        borderColor={borderColor}
      >
        <RNTextInput
          testID={testID}
          {...textInputProps}
          style={{
            flexShrink: 1,
            width: "100%",
            height: "100%",
            color: colors.text,
            ...textVariants.text16,
          }}
          placeholderTextColor={colors.gray2}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </Box>
      <Text mt="s4" ml="s4" variant="text14" color="fbErrorSurface">
        {errorMessage}
      </Text>
    </Box>
  );
};

const textInputAreaStyle: BoxProps = {
  flexDirection: "row",
  alignItems: "center",
  height: 50,
  paddingHorizontal: "s16",
  borderWidth: 1,
  borderRadius: "default",
};
