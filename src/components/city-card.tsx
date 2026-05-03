import { ImageBackground } from "react-native";
import { CityPreview } from "../types/city";
import { Text } from "./text";

type CityCardProps = {
  cityPreview: CityPreview;
};

export const CityCard = ({ cityPreview }: CityCardProps) => {
  return (
    <ImageBackground
      source={cityPreview.coverImage}
      style={{ width: 200, height: 200 }}
    >
      <Text>{cityPreview.name}</Text>
      <Text>{cityPreview.country}</Text>
    </ImageBackground>
  );
};
