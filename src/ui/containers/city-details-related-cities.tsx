import { City } from "@/src/domain/city/city";
import { useRelatedCities } from "@/src/domain/city/operations/useRelatedCities";
import { ScrollView, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "../components/box";
import { CityCard } from "../components/city-card";
import { Text } from "../components/text";
import { useAppTheme } from "../theme/useAppTheme";

type CityDetailsRelatedCitiesProps = Pick<City, "id">;

export const CityDetailsRelatedCities = ({
  id,
}: CityDetailsRelatedCitiesProps) => {
  const { data: relatedCities } = useRelatedCities(id);
  const { width } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  const { spacing } = useAppTheme();

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
        {relatedCities?.map((city) => (
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
