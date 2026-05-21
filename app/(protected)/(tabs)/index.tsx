import { useCategories } from "@/src/domain/category/operations/useCategories";
import { CityPreview } from "@/src/domain/city/city";
import { useCities } from "@/src/domain/city/operations/useCities";
import { CityCard } from "@/src/ui/components/city-card";
import { Container } from "@/src/ui/components/container";
import { CityFilter } from "@/src/ui/containers/city-filter";
import { useAppTheme } from "@/src/ui/theme/useAppTheme";
import { useDebounce } from "@/src/utils/hooks/useDebounce";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { ListRenderItemInfo } from "react-native";
import Animated, { FadingTransition } from "react-native-reanimated";
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

  // Filter Function - Return supabase data
  const { data: cityPreviewList } = useCities({
    cityName: debouncedCityName,
    categoryId: selectedCategoryId,
  });

  // Buscando as categorias do supabase
  const { data: categories } = useCategories();

  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);

  const renderItem = ({ item }: ListRenderItemInfo<CityPreview>) => {
    return <CityCard cityPreview={item} />;
  };

  return (
    <Container>
      <Animated.FlatList
        ref={flatListRef}
        itemLayoutAnimation={FadingTransition.duration(500)}
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
