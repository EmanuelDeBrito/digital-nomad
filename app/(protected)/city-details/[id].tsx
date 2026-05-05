import { Container } from "@/src/components/container";
import { Text } from "@/src/components/text";
import { CityDetailsHeader } from "@/src/containers/city-details-header";
import { CityDetailsInfo } from "@/src/containers/city-details-info";
import { CityDetailsMap } from "@/src/containers/city-details-map";
import { CityDetailsRelatedCities } from "@/src/containers/city-details-related-cities";
import { CityDetailsTouristAttractions } from "@/src/containers/city-details-tourist-attractions";
import { useLocalSearchParams } from "expo-router";

const CityDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <Container>
      <Text>Cidade - {id}</Text>
      <CityDetailsHeader />
      <CityDetailsInfo />
      <CityDetailsTouristAttractions />
      <CityDetailsMap />
      <CityDetailsRelatedCities />
    </Container>
  );
};

export default CityDetailsScreen;
