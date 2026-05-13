import { router } from "expo-router";
import { ImageBackground, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlackOpacity } from "../components/black-opacity";
import { Box } from "../components/box";
import { CategoryPill } from "../components/category-pill";
import { Icon } from "../components/icon";
import { IconButton } from "../components/icon-button";
import { PILL_HEIGHT } from "../components/pill";
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
        style={{ width: "100%", height: 250 }}
        source={
          typeof coverImage === "number" ? coverImage : { uri: coverImage }
        }
      >
        <BlackOpacity />
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
      <ScrollView
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: -PILL_HEIGHT / 2 }}
      >
        <Box
          flexDirection="row"
          alignItems="center"
          gap="s8"
          paddingHorizontal="padding"
        >
          {categories.map((category) => (
            <CategoryPill key={category.code} category={category} active />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
};
