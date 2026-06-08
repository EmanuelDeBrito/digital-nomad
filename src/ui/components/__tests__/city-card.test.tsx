import { RenderComponent } from "@/src/test-utils/render-component";
import { screen } from "@testing-library/react-native";
import { CityCard } from "../city-card";

describe("<CityCard />", () => {
  // Teste de Snapshot - Para atualizar o Snapshot você deve rodar o seguinte comando (--u ou --updateSnapshot)
  it("Should render the component", () => {
    RenderComponent(
      <CityCard
        cityPreview={{
          id: "1",
          name: "Rio de Janeiro",
          country: "Brasil",
          coverImage: "rio-de-janeiro.png",
        }}
      />,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });
  it("Should show the favorite icon", () => {
    RenderComponent(
      <CityCard
        cityPreview={{
          id: "1",
          name: "Rio de Janeiro",
          country: "Brasil",
          coverImage: "rio-de-janeiro.png",
        }}
      />,
    );

    screen.debug();
    expect(screen.getByTestId("Favorite-outline")).toBeOnTheScreen();
  });
});
