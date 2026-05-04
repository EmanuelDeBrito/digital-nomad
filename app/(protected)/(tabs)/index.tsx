import { CityCard } from "@/src/components/city-card";
import { Container } from "@/src/components/container";
import { CityFilter } from "@/src/containers/city-filter";
import { categories } from "@/src/data/categories";
import { useCities } from "@/src/hooks/useCities";
import { useDebounce } from "@/src/hooks/useDebounce";
import { useAppTheme } from "@/src/theme/useAppTheme";
import { CityPreview } from "@/src/types/city";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  // Config constants
  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();

  // States
  const [cityName, setCityName] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );

  // Debounce
  const debouncedCityName = useDebounce(cityName);

  // Filter Function - Return mock data
  const { cityPreviewList } = useCities({
    cityName: debouncedCityName,
    categoryId: selectedCategoryId,
  });

  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);

  const renderItem = ({ item }: ListRenderItemInfo<CityPreview>) => {
    return <CityCard cityPreview={item} />;
  };

  return (
    <Container>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingTop: top + 10,
          paddingBottom: spacing.padding,
        }}
        data={cityPreviewList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <CityFilter
            categories={categories}
            cityName={cityName}
            selectedCategoryId={selectedCategoryId}
            onChangeCityName={setCityName}
            onChangeSelectedCategoryId={setSelectedCategoryId}
          />
        }
      />
    </Container>
  );
};

export default HomeScreen;
