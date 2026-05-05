import { Box } from "../components/box";
import { Text } from "../components/text";
import { City } from "../types/city";

type CityDetailsInfoProps = Pick<City, "name" | "country" | "description">;

export const CityDetailsInfo = ({
  name,
  country,
  description,
}: CityDetailsInfoProps) => {
  return (
    <Box paddingHorizontal="padding" marginTop="padding">
      <Text mb="s2" variant="title28">
        {name}
      </Text>
      <Text mb="s24" variant="text18">
        {country}
      </Text>
      <Text variant="text14">{description}</Text>
    </Box>
  );
};
