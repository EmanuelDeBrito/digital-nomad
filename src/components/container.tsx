import { PropsWithChildren } from "react";
import { Box, BoxProps } from "./box";

export const Container = ({
  children,
  ...boxProps
}: PropsWithChildren & BoxProps) => {
  return (
    <Box backgroundColor="background" paddingHorizontal="padding" {...boxProps}>
      {children}
    </Box>
  );
};
