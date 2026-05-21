import { City } from "@/src/domain/city/city";
import { Box } from "../components/box";
import { Text } from "../components/text";

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
