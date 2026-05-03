import { CityCard } from "@/src/components/city-card";
import { Container } from "@/src/components/container";
import { Text } from "@/src/components/text";
import { cityPreviewList } from "@/src/data/cities";
import { useAppTheme } from "@/src/theme/useAppTheme";
import { CityPreview } from "@/src/types/city";
import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

const HomeScreen = () => {
  const { spacing } = useAppTheme();
  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);

  const renderItem = ({ item }: ListRenderItemInfo<CityPreview>) => {
    return <CityCard cityPreview={item} />;
  };

  return (
    <Container>
      <Text variant="title28">Cidades</Text>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{ gap: spacing.padding }}
        data={cityPreviewList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default HomeScreen;
