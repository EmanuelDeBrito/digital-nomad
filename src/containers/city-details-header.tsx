import { router } from "expo-router";
import { ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "../components/box";
import { Icon } from "../components/icon";
import { IconButton } from "../components/icon-button";
import { City } from "../types/city";

type CityDetailsHeaderProps = Pick<City, "id" | "coverImage" | "categories">;

export const CityDetailsHeader = ({
  id,
  coverImage,
  categories,
}: CityDetailsHeaderProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <Box>
      <ImageBackground
        imageStyle={{ borderBottomRightRadius: 50 }}
        style={{ width: "100%", height: 200 }}
        source={coverImage}
      >
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          padding="padding"
          style={{ paddingTop: top }}
        >
          <IconButton iconName="Chevron-left" onPress={() => router.back()} />
          <Icon name="Favorite-outline" color="pureWhite" size={26} />
        </Box>
      </ImageBackground>
    </Box>
  );
};
