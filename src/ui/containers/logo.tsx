import { Image } from "react-native";

export const Logo = () => {
  return (
    <Image
      style={{
        alignSelf: "center",
        width: 150,
        height: 60,
        marginTop: 40,
        marginBottom: 60,
      }}
      source={require("@/assets/images/logo.png")}
      resizeMode="cover"
    />
  );
};
