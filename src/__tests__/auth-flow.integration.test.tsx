import { fireEvent, screen } from "@testing-library/react-native";
import { RenderApp } from "../test-utils/render-app";

describe("Integration Test: Auth Flow", () => {
  it("Should Sign-In user with valid credentials and allow user to do Sign-Out", async () => {
    RenderApp();

    // Verify if Sign In Screen is rendered
    expect(await screen.findByText("Bem-vindo"));

    // Fill email and password fields
    fireEvent.changeText(
      screen.getByPlaceholderText("Digite seu email"),
      "emanuel@gmail.com",
    );
    fireEvent.changeText(
      screen.getByPlaceholderText("Digite sua senha"),
      "123456",
    );

    // Pressing Sign In Screen button
    fireEvent.press(screen.getByText("Login"));

    // Verify if toast message is on the Screen
    expect(
      await screen.findByText("Success: emanuel@gmail.com"),
    ).toBeOnTheScreen();

    // Verify if Home Screen is rendered
    expect(await screen.findByText("Rio de Janeiro")).toBeOnTheScreen();
    expect(screen.getByText("Bali")).toBeOnTheScreen();

    // Pressing profile tab
    fireEvent.press(screen.getByText("Perfil"));

    // Pressing Logout button
    fireEvent.press(screen.getByText("Logout"));

    // Verify if user was redirected to Sign In Screen
    expect(await screen.findByText("Bem-vindo"));
  });
});
