import { fireEvent, render, screen } from "@testing-library/react-native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

type ComponentProps = {
  label: string;
  isLoading: boolean;
};

const Component = ({ label, isLoading }: ComponentProps) => {
  const [count, setCount] = useState(0);

  if (isLoading) {
    return <Text>Is loading...</Text>;
  }

  return (
    <View>
      <Pressable>
        <Text>{label}</Text>
      </Pressable>

      <Pressable
        testID="count-area"
        onPress={() => setCount((prev) => prev + 1)}
      >
        <Text>Count: {count}</Text>
        <Text onPress={() => setCount(0)}>Reset Count</Text>
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

  it("Should show a correct count value", () => {
    render(<Component label="foo bar" isLoading={false} />);

    const element = screen.getByText(/Count: 0/);

    expect(element).toBeOnTheScreen();

    fireEvent.press(screen.getByTestId("count-area"));

    expect(screen.getByText(/Count: 1/)).toBeOnTheScreen();
  });
});
