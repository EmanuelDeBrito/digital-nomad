import { Pressable, PressableProps } from "react-native";
import { IconName } from "../../types/icon-name";
import { useAppTheme } from "../theme/useAppTheme";
import { Box } from "./box";
import { Icon } from "./icon";

type IconButtonProps = {
  iconName: IconName;
  onPress: PressableProps["onPress"];
};

export const IconButton = ({ iconName, onPress }: IconButtonProps) => {
  const { boxShadows } = useAppTheme();

  return (
    <Pressable onPress={onPress}>
      <Box
        justifyContent="center"
        alignItems="center"
        width={48}
        height={48}
        backgroundColor="primary"
        borderRadius="rounded"
        style={{
          boxShadow: boxShadows.primary,
        }}
      >
        <Icon name={iconName} color="pureWhite" />
      </Box>
    </Pressable>
  );
};
