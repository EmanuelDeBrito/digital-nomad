import {
  fireEvent,
  render,
  screen,
  userEvent,
} from "@testing-library/react-native";
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
      </Pressable>

      <Text onPress={() => setCount(0)}>Reset Count</Text>
    </View>
  );
};

describe("Component", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("Should show a Text Component with label(foo bar) when isn't loading", () => {
    render(<Component label="foo bar" isLoading={false} />);

    const element = screen.getByText(/foo bar/i);

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

  it("Should show a reset count value when the text Reset Value is pressed", async () => {
    render(<Component label="foo bar" isLoading={false} />);

    const user = userEvent.setup();
    const element = screen.getByTestId("count-area");

    await user.press(element);
    await user.press(element);
    await user.press(element);
    await user.press(element);

    expect(screen.getByText("Count: 4")).toBeOnTheScreen();

    await user.press(screen.getByText("Reset Count"));

    expect(screen.getByText("Count: 0")).toBeOnTheScreen();
  });
});
