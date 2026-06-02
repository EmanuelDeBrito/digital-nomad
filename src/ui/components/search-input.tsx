import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { Box, BoxProps } from "./box";
import { IconButton } from "./icon-button";

type SearchInputProps = {} & Pick<
  TextInputProps,
  "placeholder" | "value" | "onChangeText"
>;

export const SearchInput = ({
  placeholder,
  value,
  onChangeText,
}: SearchInputProps) => {
  const { colors, textVariants } = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handlePressIconButton = () => {
    if (value!.length > 0) {
      onChangeText?.("");
    }
  };

  return (
    <Box
      {...boxStyles}
      style={{ borderColor: isFocused ? colors.primary : colors.gray1 }}
    >
      <TextInput
        testID="search-input"
        style={{
          ...textVariants.title16,
          flexShrink: 1,
          width: "100%",
          height: "100%",
          color: colors.text,
        }}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <IconButton
        iconName={value!.length > 0 ? "Close" : "Search-outline"}
        onPress={handlePressIconButton}
      />
    </Box>
  );
};

const boxStyles: BoxProps = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: 70,
  padding: "s8",
  paddingLeft: "s16",
  backgroundColor: "gray1",
  borderWidth: 2,
  borderRadius: "rounded",
};
