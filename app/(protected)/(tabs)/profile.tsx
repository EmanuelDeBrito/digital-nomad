import { useAuthSignOut } from "@/src/domain/auth/operations/useAuthSignOut";
import { Box } from "@/src/ui/components/box";
import { Container } from "@/src/ui/components/container";
import { Icon } from "@/src/ui/components/icon";
import { Text } from "@/src/ui/components/text";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const { mutate: signOut } = useAuthSignOut();

  return (
    <Container>
      <SafeAreaView>
        <Text variant="title28" mt="s16">
          Profile
        </Text>
        <Pressable onPress={signOut}>
          <Box flexDirection="row" alignItems="center" gap="s4" mt="s10">
            <Icon name="Logout" color="primary" size={32} />
            <Text variant="text16">Logout</Text>
          </Box>
        </Pressable>
      </SafeAreaView>
    </Container>
  );
};

export default ProfileScreen;
