import { RenderComponent } from "@/src/test-utils/render-component";
import { fireEvent, screen } from "@testing-library/react-native";
import { Button } from "../button";

describe("<Button />", () => {
  it("Should call onPress action when button is pressed", () => {
    const onPressFn = jest.fn();

    RenderComponent(<Button title="Button" onPress={onPressFn} />);

    fireEvent.press(screen.getByText("Button"));

    expect(onPressFn).toHaveBeenCalled();
  });

  it("Should NOT call onPress function when button property DISABLED is ACTIVE", () => {
    const onPressFn = jest.fn();

    RenderComponent(
      <Button title="Button" disabled={true} onPress={onPressFn} />,
    );

    fireEvent.press(screen.getByText("Button"));

    expect(onPressFn).not.toHaveBeenCalled();
  });
});
