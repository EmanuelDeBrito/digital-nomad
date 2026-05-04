import { useState } from "react";
import { ScrollView } from "react-native";
import { Box } from "../components/box";
import { CategoryPill } from "../components/category-pill";
import { SearchInput } from "../components/search-input";
import { Category } from "../types/category";

type CityFilterProps = {
  categories: Category[];
};

export const CityFilter = ({ categories }: CityFilterProps) => {
  const [cityName, setCityName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );

  return (
    <Box>
      <SearchInput
        placeholder="Qual seu próximo destino?"
        value={cityName}
        onChangeText={setCityName}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box flexDirection="row" gap="s8" mt="s16">
          {categories.map((category) => (
            <CategoryPill
              key={category.id}
              category={category}
              active={category.id === selectedCategoryId}
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
};
