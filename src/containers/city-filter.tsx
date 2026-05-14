import { ScrollView } from "react-native";
import { Box } from "../components/box";
import { CategoryPill } from "../components/category-pill";
import { SearchInput } from "../components/search-input";
import { Category } from "../domain/category/category";

type CityFilterProps = {
  categories?: Category[];
  cityName: string;
  selectedCategoryId: string | null;
  onChangeCityName: (newCityName: string) => void;
  onChangeSelectedCategoryId: (newSelectedCategoryId: string | null) => void;
};

export const CityFilter = ({
  categories,
  cityName,
  selectedCategoryId,
  onChangeCityName,
  onChangeSelectedCategoryId,
}: CityFilterProps) => {
  return (
    <Box>
      <SearchInput
        placeholder="Qual seu próximo destino?"
        value={cityName}
        onChangeText={onChangeCityName}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box flexDirection="row" gap="s8" mt="s16">
          {categories?.map((category) => (
            <CategoryPill
              key={category.id}
              category={category}
              active={category.id == selectedCategoryId}
              onPress={() =>
                onChangeSelectedCategoryId(
                  category.id === selectedCategoryId ? null : category.id,
                )
              }
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
};
