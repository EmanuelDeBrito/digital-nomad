import { Link } from "expo-router";
import { ImageBackground, ImageBackgroundProps, Pressable } from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { CityPreview } from "../types/city";
import { BlackOpacity } from "./black-opacity";
import { Box } from "./box";
import { Icon } from "./icon";
import { Text } from "./text";

type CityCardProps = {
  cityPreview: CityPreview;
  style?: ImageBackgroundProps["style"];
};

export const CityCard = ({ cityPreview, style }: CityCardProps) => {
  const { borderRadii } = useAppTheme();

  return (
    <Link href={`/(protected)/city-details/${cityPreview.id}`} asChild>
      <Pressable>
        <ImageBackground
          source={cityPreview.coverImage}
          style={[{ width: "100%", height: 280 }, style]}
          imageStyle={{ borderRadius: borderRadii.default }}
        >
          <BlackOpacity />
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
      </Pressable>
    </Link>
  );
};
