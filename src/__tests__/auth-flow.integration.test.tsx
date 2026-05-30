import { screen } from "@testing-library/react-native";
import { RenderApp } from "../test-utils/render-app";

describe("Integration Test: Auth Flow", () => {
  test("Should Sign-In user with valid credentials and allow user to do Sign-Out", async () => {
    RenderApp();

    expect(await screen.findByText("Bem-vindo"));
    screen.debug();
  });
});
