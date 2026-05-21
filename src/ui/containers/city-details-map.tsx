import { City } from "@/src/domain/city/city";
import MapView from "react-native-maps";
import { Box } from "../components/box";
import { Text } from "../components/text";
import { useAppTheme } from "../theme/useAppTheme";

type CityDetailsMap = Pick<City, "location">;

export const CityDetailsMap = ({ location }: CityDetailsMap) => {
  const { borderRadii } = useAppTheme();

  return (
    <Box paddingHorizontal="padding">
      <Text mb="s16" variant="title22">
        Mapa
      </Text>
      <MapView
        style={{
          width: "100%",
          height: 180,
          borderRadius: borderRadii.default,
        }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Box>
  );
};
