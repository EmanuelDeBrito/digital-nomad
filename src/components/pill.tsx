import { IconName } from "../types/icon-name";
import { Box, BoxProps } from "./box";
import { Icon } from "./icon";
import { Text } from "./text";

export type PillProps = {
  iconName: IconName;
  label: string;
  active: boolean;
};

export const Pill = ({ iconName, label, active }: PillProps) => {
  return (
    <Box {...boxStyles} backgroundColor={active ? "gray1" : "transparent"}>
      <Icon name={iconName} size={16} color={active ? "primary" : "gray2"} />
      <Text variant="text12">{label}</Text>
    </Box>
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
