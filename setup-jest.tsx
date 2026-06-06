jest.mock("@expo/vector-icons/createIconSetFromIcoMoon", () => {
  const { View } = require("react-native");

  const FakeIcon = (props: any) => {
    return <View testID={props.name} />;
  };

  return () => FakeIcon;
});
