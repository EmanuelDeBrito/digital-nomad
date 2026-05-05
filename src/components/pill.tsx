import { Pressable, PressableProps } from "react-native";
import { IconName } from "../types/icon-name";
import { Box, BoxProps } from "./box";
import { Icon } from "./icon";
import { Text } from "./text";

export type PillProps = {
  iconName: IconName;
  label: string;
  active: boolean;
  onPress?: PressableProps["onPress"];
};

/**
 * A altura da Pill é a soma do padding vertical + tamanho do icone + tamanho da borda
 * - Padding Vertical ---> 8 + 8 = 16
 * - Tamanho do Icon ---> 16
 * - Tamanho da Borda ---> 2 + 2 = 4
 * - Soma ---> 36
 * Essa altura é usada para ajustar o margin-top da lista de pilhas na tela de city-details
 */
export const PILL_HEIGHT = 36;

export const Pill = ({ iconName, label, active, onPress }: PillProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box {...boxStyles} backgroundColor={active ? "gray1" : "transparent"}>
        <Icon name={iconName} size={16} color={active ? "primary" : "gray2"} />
        <Text variant="text12">{label}</Text>
      </Box>
    </Pressable>
  );
};

const boxStyles: BoxProps = {
  flexDirection: "row",
  alignItems: "center",
  gap: "s4",
  paddingHorizontal: "s12",
  paddingVertical: "s8",
  borderWidth: 2,
  borderColor: "gray1",
  borderRadius: "rounded",
};
