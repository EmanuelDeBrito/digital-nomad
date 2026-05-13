import { ScrollView, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "../components/box";
import { CityCard } from "../components/city-card";
import { Text } from "../components/text";
import { useRelatedCities } from "../hooks/useRelatedCities";
import { useAppTheme } from "../theme/useAppTheme";
import { City } from "../types/city";

type CityDetailsRelatedCitiesProps = Pick<City, "id">;

export const CityDetailsRelatedCities = ({
  id,
}: CityDetailsRelatedCitiesProps) => {
  const { width } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  const { spacing } = useAppTheme();

  const relatedCities = useRelatedCities(id);
  const cardWidth = width * 0.7;
  const cardHeight = width * 0.6;
  return (
    <Box style={{ paddingBottom: bottom + 10 }}>
      <Text variant="title22" paddingHorizontal="padding" mb="padding">
        Veja também
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingHorizontal: spacing.padding,
        }}
      >
        {relatedCities.map((city) => (
          <CityCard
            key={city.id}
            cityPreview={city}
            style={{ width: cardWidth, height: cardHeight }}
          />
        ))}
      </ScrollView>
    </Box>
  );
};
