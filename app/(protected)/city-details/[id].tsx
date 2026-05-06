import { Box } from "@/src/components/box";
import { Container } from "@/src/components/container";
import { Divider } from "@/src/components/divider";
import { Text } from "@/src/components/text";
import { CityDetailsHeader } from "@/src/containers/city-details-header";
import { CityDetailsInfo } from "@/src/containers/city-details-info";
import { CityDetailsTouristAttractions } from "@/src/containers/city-details-tourist-attractions";
import { useCity } from "@/src/hooks/useCity";
import { useLocalSearchParams } from "expo-router";

const CityDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const city = useCity(id);

  if (!city) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant="title28">Cidade não encontrada!</Text>
      </Box>
    );
  }

  return (
    <Container scrollable style={{ paddingHorizontal: 0 }}>
      <CityDetailsHeader
        id={city.id}
        coverImage={city.coverImage}
        categories={city.categories}
      />
      <CityDetailsInfo
        name={city.name}
        country={city.country}
        description={city.description}
      />
      <Divider paddingHorizontal="padding" />
      <CityDetailsTouristAttractions
        touristAttractions={city.touristAttractions}
      />
      <Divider paddingHorizontal="padding" />
    </Container>
  );
};

export default CityDetailsScreen;
