import { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";
import { Box, BoxProps } from "./box";

export const Container = ({
  children,
  scrollable = false,
  ...boxProps
}: PropsWithChildren & { scrollable?: boolean } & BoxProps) => {
  const Container = scrollable ? ScrollView : View;

  return (
    <Box
      flex={1}
      paddingHorizontal="padding"
      backgroundColor="background"
      {...boxProps}
    >
      <Container showsVerticalScrollIndicator={false}>{children}</Container>
    </Box>
  );
};
