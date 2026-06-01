import { fireEvent, screen } from "@testing-library/react-native";
import { RenderApp } from "../test-utils/render-app";

describe("Integration Test: Auth Flow", () => {
  it("Should Sign-In user with valid credentials and allow user to do Sign-Out", async () => {
    RenderApp();

    // Verify if home screen is rendered
    expect(await screen.findByText("Bem-vindo"));

    // Fill email and password fileds
    fireEvent.changeText(
      screen.getByPlaceholderText("Digite seu email"),
      "emanuelbrit16@gmail.com",
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

    // Pressing profile tab
  });
});
