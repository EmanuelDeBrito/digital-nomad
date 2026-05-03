import { CityCard } from "@/src/components/city-card";
import { Container } from "@/src/components/container";
import { Icon } from "@/src/components/icon";
import { Text } from "@/src/components/text";
import { cityPreviewList } from "@/src/data/cities";
import { CityPreview } from "@/src/types/city";
import { FlatList, ListRenderItemInfo } from "react-native";

const HomeScreen = () => {
  const renderItem = ({ item }: ListRenderItemInfo<CityPreview>) => {
    return <CityCard cityPreview={item} />;
  };

  return (
    <Container>
      <Text variant="title28">Cidades</Text>
      <Icon name="Beach" color="primary" size={50} />
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </Container>
  );
};

export default HomeScreen;
