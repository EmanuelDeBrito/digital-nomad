const sum = (n1: number, n2: number): number => {
  return n1 + n2;
};

test("sumTest", () => {
  const value = sum(10, 10);

  expect(value).toBe(21);
});
