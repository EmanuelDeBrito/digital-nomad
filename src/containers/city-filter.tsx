import { useState } from "react";
import { Box } from "../components/box";
import { SearchInput } from "../components/search-input";

export const CityFilter = () => {
  const [cityName, setCityName] = useState("");

  return (
    <Box>
      <SearchInput
        placeholder="Qual seu próximo destino?"
        value={cityName}
        onChangeText={setCityName}
      />
    </Box>
  );
};
