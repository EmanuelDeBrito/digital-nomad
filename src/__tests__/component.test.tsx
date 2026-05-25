import { render, screen } from "@testing-library/react-native";
import { Pressable, Text, View } from "react-native";

type ComponentProps = {
  label: string;
  isLoading: boolean;
};

const Component = ({ label, isLoading }: ComponentProps) => {
  if (isLoading) {
    return <Text>Is loading...</Text>;
  }

  return (
    <View>
      <Pressable>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
};

describe("Component", () => {
  it("Should show a Text Component with label(foo bar) when isn't loading", () => {
    render(<Component label="foo bar" isLoading={false} />);

    const element = screen.getByText(/foo ba/i);

    expect(element).toBeOnTheScreen();
  });

  it("Should show a Text Component with the label(Is Loading...) when the Component is loading", () => {
    render(<Component label="foo bar" isLoading={true} />);

    const element = screen.getByText(/Is loading/);

    expect(element).toBeOnTheScreen();
  });
});
