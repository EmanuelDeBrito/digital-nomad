import { useCity } from "@/src/domain/city/operations/useCity";
import { Box } from "@/src/ui/components/box";
import { Container } from "@/src/ui/components/container";
import { Divider } from "@/src/ui/components/divider";
import { Text } from "@/src/ui/components/text";
import { BottomSheetMap } from "@/src/ui/containers/bottom-sheet-map";
import { CityDetailsHeader } from "@/src/ui/containers/city-details-header";
import { CityDetailsInfo } from "@/src/ui/containers/city-details-info";
import { CityDetailsMap } from "@/src/ui/containers/city-details-map";
import { CityDetailsRelatedCities } from "@/src/ui/containers/city-details-related-cities";
import { CityDetailsTouristAttractions } from "@/src/ui/containers/city-details-tourist-attractions";
import { useLocalSearchParams } from "expo-router";
import { Pressable } from "react-native";
import { useSharedValue } from "react-native-reanimated";

const CityDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data: city } = useCity(id);

  const bottomSheetIsOpen = useSharedValue(false);

  const toggleBottomSheet = () => {
    bottomSheetIsOpen.value = !bottomSheetIsOpen.value;
  };

  if (!city) {
    return (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        backgroundColor="background"
      >
        <Text variant="title22">Cidade não encontrada!</Text>
      </Box>
    );
  }

  return (
    <>
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
        <Pressable onPress={toggleBottomSheet}>
          <CityDetailsMap location={city.location} />
        </Pressable>
        <Divider paddingHorizontal="padding" />
        <CityDetailsRelatedCities id={city.id} />
      </Container>
      <BottomSheetMap
        location={city.location}
        isOpen={bottomSheetIsOpen}
        onPress={toggleBottomSheet}
      />
    </>
  );
};

export default CityDetailsScreen;
