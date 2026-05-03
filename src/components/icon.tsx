import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { ThemeColors } from "../theme/theme";
import { useAppTheme } from "../theme/useAppTheme";
import { IconName } from "../types/icon-name";

const IconFromIcoMoon = createIconSetFromIcoMoon(
  require("../../assets/icons/selection.json"),
  "IcoMoon",
  "icomoon.ttf",
);

type IconProps = {
  name: IconName;
  color?: ThemeColors;
  size?: number;
};

export const Icon = ({ name, color = "gray2", size = 24 }: IconProps) => {
  const { colors } = useAppTheme();

  return <IconFromIcoMoon name={name} color={colors[color]} size={size} />;
};
