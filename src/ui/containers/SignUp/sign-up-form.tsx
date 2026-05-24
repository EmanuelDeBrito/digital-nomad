import { Box } from "../../components/box";
import { Button } from "../../components/button";

type SignUpFormProps = {
  onSubmit: () => void;
};

export const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  return (
    <Box>
      <Button title="Criar conta" onPress={onSubmit} />
    </Box>
  );
};
