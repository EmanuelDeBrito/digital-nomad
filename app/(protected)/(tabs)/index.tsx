import { Box } from "@/src/components/box";
import { CityCard } from "@/src/components/city-card";
import { cityPreviewList } from "@/src/data/cities";
import { CityPreview } from "@/src/types/city";
import { FlatList, ListRenderItemInfo } from "react-native";

const HomeScreen = () => {
  const renderItem = ({ item }: ListRenderItemInfo<CityPreview>) => {
    return <CityCard cityPreview={item} />;
  };

  return (
    <Box>
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </Box>
  );
};

export default HomeScreen;
