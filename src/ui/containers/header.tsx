import { router } from "expo-router";
import { Box } from "../components/box";
import { IconButton } from "../components/icon-button";
import { Text } from "../components/text";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      mt="s20"
      mb="s56"
    >
      <IconButton iconName="Chevron-left" onPress={router.back} />
      <Text variant="title16">{title}</Text>
    </Box>
  );
};
