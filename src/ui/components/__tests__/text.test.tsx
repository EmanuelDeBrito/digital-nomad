import { RenderComponent } from "@/src/test-utils/render-component";
import { screen } from "@testing-library/react-native";
import { Text } from "../text";

describe("<Text />", () => {
  it("Should show a text in the screen", () => {
    RenderComponent(<Text>Text for Test</Text>);

    expect(screen.getByText("Text for Test")).toBeOnTheScreen();
  });
});
