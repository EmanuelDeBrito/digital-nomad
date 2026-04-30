import ParallaxScrollView from "@/components/parallax-scroll-view";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <Link href={"/city-details/1"}>Detalhes da Cidade - Via Link</Link>

      <Link
        href={{
          pathname: "/city-details/[id]",
          params: { id: 2, name: "Viviane dos Santos" },
        }}
        asChild
      >
        <Text>Detalhes da Cidade - Via Link com AsChild</Text>
      </Link>

      <Text
        onPress={() =>
          router.navigate({
            pathname: "/city-details/[id]",
            params: { id: 5, name: "Emanuel de Brito" },
          })
        }
      >
        Detalhes da Cidade - Vários Params
      </Text>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
