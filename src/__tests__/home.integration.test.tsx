import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react-native";
import { RenderApp } from "../test-utils/render-app";

describe("Integration Test: Home", () => {
  it("Should show cities list and navigate to city details screen when a specific city card is pressed", async () => {
    // Renderizando o app com um usuário já autenticado
    RenderApp({ userIsAuthenticated: true });

    // Verify if Home Screen is rendered
    expect(await screen.findByText("Barcelona")).toBeOnTheScreen();

    // Navigate to City Details Screen
    fireEvent.press(screen.getByText("Barcelona"));

    // Verify if City Details is rendered
    expect(await screen.findByText("Veja também")).toBeOnTheScreen();

    // Press back button icon for return to Home Screen
    fireEvent.press(screen.getByTestId("Chevron-left"));

    // Verify if Home Screen is rendered
    expect(await screen.findByText("Barcelona")).toBeOnTheScreen();

    // Searching for a specific city in Search Input
    fireEvent.changeText(screen.getByTestId("search-input"), "Rio de Janeiro");

    // Verify if a specific city was removed with waitForElementToBeRemoved function
    await waitForElementToBeRemoved(() =>
      expect(screen.getByText("Barcelona")),
    );

    // Checking if search returns the correct city
    expect(screen.getByText("Rio de Janeiro")).toBeOnTheScreen();
  }, 50000);
});
