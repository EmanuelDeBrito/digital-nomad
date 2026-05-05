import { Box } from "@/src/components/box";
import { Container } from "@/src/components/container";
import { Text } from "@/src/components/text";
import { CityDetailsHeader } from "@/src/containers/city-details-header";
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
    <Container style={{ paddingHorizontal: 0 }}>
      <CityDetailsHeader
        id={city.id}
        coverImage={city.coverImage}
        categories={city.categories}
      />
    </Container>
  );
};

export default CityDetailsScreen;
