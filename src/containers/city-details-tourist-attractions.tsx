import { Accordion } from "../components/accordion";
import { Box } from "../components/box";
import { Text } from "../components/text";
import { City } from "../types/city";

type CityDetailsTouristAttractionsProps = Pick<City, "touristAttractions">;

export const CityDetailsTouristAttractions = ({
  touristAttractions,
}: CityDetailsTouristAttractionsProps) => {
  return (
    <Box paddingHorizontal="padding">
      <Text mb="s8" variant="title22">
        Pontos Turísticos
      </Text>
      <Box gap="s8">
        {touristAttractions.map((attraction) => (
          <Accordion
            key={attraction.id}
            title={attraction.name}
            description={attraction.description}
          />
        ))}
      </Box>
    </Box>
  );
};
