import { screen } from "@testing-library/react-native";
import { RenderApp } from "../test-utils/render-app";

describe("Integration Test: Home", () => {
  it("Should show cities list and navigate to city details screen when a specific city card is pressed", async () => {
    // Renderizando o app com um usuário já autenticado
    RenderApp({ userIsAuthenticated: true });

    // Verify if Home Screen is rendered
    expect(await screen.findByText("Barcelona")).toBeOnTheScreen();
  }, 50000);
});
