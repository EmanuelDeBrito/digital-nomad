import { ImageBackground } from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { CityPreview } from "../types/city";
import { Box } from "./box";
import { Icon } from "./icon";
import { Text } from "./text";

type CityCardProps = {
  cityPreview: CityPreview;
};

export const CityCard = ({ cityPreview }: CityCardProps) => {
  const { borderRadii } = useAppTheme();

  return (
    <ImageBackground
      source={cityPreview.coverImage}
      style={{ width: "100%", height: 280 }}
      imageStyle={{ borderRadius: borderRadii.default }}
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        backgroundColor="midnightBlack"
        opacity={0.2}
      />
      <Box flex={1} justifyContent="space-between" padding="s24">
        <Box alignSelf="flex-end">
          <Icon name="Favorite-outline" color="text" />
        </Box>

        <Box gap="s2">
          <Text variant="title22">{cityPreview.name}</Text>
          <Text variant="text16">{cityPreview.country}</Text>
        </Box>
      </Box>
    </ImageBackground>
  );
};
