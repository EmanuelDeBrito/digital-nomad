import { PropsWithChildren } from "react";
import { Box, BoxProps } from "./box";

export const Container = ({
  children,
  ...boxProps
}: PropsWithChildren & BoxProps) => {
  return (
    <Box
      flex={1}
      paddingHorizontal="padding"
      backgroundColor="background"
      {...boxProps}
    >
      {children}
    </Box>
  );
};
