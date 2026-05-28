import { RenderComponent } from "@/src/test-utils/render-component";
import { fireEvent, screen, waitFor } from "@testing-library/react-native";
import theme from "../../theme/theme";
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

  describe("Should NOT submit sign in form WHEN", () => {
    it("Email field is invalid", async () => {
      const onSubmitMock = jest.fn();

      RenderComponent(<SignUpForm onSubmit={onSubmitMock} />);

      fireEvent.changeText(
        screen.getByTestId("name-input"),
        "Emanuel de Brito",
      );
      fireEvent.changeText(
        screen.getByTestId("email-input"),
        "invalid-email.com",
      );
      fireEvent.changeText(screen.getByTestId("password-input"), "123456");
      fireEvent.changeText(
        screen.getByTestId("confirm-password-input"),
        "123456",
      );

      fireEvent.press(screen.getByTestId("signup-button"));

      expect(await screen.findByText("E-mail inválido"));

      expect(onSubmitMock).not.toHaveBeenCalled();
    });

    it("Password field aren't equal to Confirm Password field", async () => {
      const onSubmitMock = jest.fn();

      RenderComponent(<SignUpForm onSubmit={onSubmitMock} />);

      fireEvent.changeText(
        screen.getByTestId("name-input"),
        "Emanuel de Brito",
      );
      fireEvent.changeText(
        screen.getByTestId("email-input"),
        "emanuel@gmail.com",
      );
      fireEvent.changeText(screen.getByTestId("password-input"), "123456");
      fireEvent.changeText(
        screen.getByTestId("confirm-password-input"),
        "not-equal-password",
      );

      fireEvent.press(screen.getByTestId("signup-button"));

      expect(await screen.findByText("As senhas devem ser iguais"));

      expect(
        screen.getByTestId("confirm-password-input-container"),
      ).toHaveStyle({
        borderColor: theme.colors.fbErrorSurface,
      });

      expect(onSubmitMock).not.toHaveBeenCalled();
    });
  });
});
