import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";

const CityDetailsPage = () => {
  const router = useRouter();

  const { id, name } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        City Details Page - {id} {name}
      </Text>

      <Text onPress={() => router.back()}>Voltar</Text>
    </View>
  );
};

export default CityDetailsPage;
