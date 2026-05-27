import { RenderComponent } from "@/src/test-utils/render-component";
import { fireEvent, screen, waitFor } from "@testing-library/react-native";
import { SignUpForm } from "./sign-up-form";

describe("<SignInUpForm />", () => {
  it("Should submit sign in form when all fields are filled correctly", async () => {
    const onSubmitMock = jest.fn();

    RenderComponent(<SignUpForm onSubmit={onSubmitMock} />);

    fireEvent.changeText(screen.getByTestId("name-input"), "Emanuel de Brito");
    fireEvent.changeText(
      screen.getByTestId("email-input"),
      "emanuel@gmail.com",
    );
    fireEvent.changeText(screen.getByTestId("password-input"), "12345678");
    fireEvent.changeText(
      screen.getByTestId("confirm-password-input"),
      "12345678",
    );

    fireEvent.press(screen.getByTestId("signup-button"));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith(
        expect.objectContaining({
          fullName: "Emanuel de Brito",
          email: "emanuel@gmail.com",
          password: "12345678",
        }),
        undefined,
      );
    });
  });
});
