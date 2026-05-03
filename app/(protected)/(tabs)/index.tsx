import { Box } from "@/src/components/box";
import { Text } from "@/src/components/text";
import { useAppTheme } from "@/src/theme/useAppTheme";

const HomeScreen = () => {
  // Por meio do useTheme posso acessar os valores do meu Design System definido no THEME
  const { colors, spacing, textVariants } = useAppTheme();

  return (
    <Box>
      <Text>Cor principal: {colors.cardPrimaryBackground}</Text>
      <Text>Spacing Large: {spacing.xl}</Text>
      <Text>Tamanho da fonte Header: {textVariants.header.fontSize}</Text>
    </Box>
  );
};

export default HomeScreen;
