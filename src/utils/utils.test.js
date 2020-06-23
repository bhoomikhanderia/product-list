import { ascendingOrder, descendingOrder, convertToDollars } from "./index";

test("2359 cents is equal to 25.59 dollars", () => {
  expect(convertToDollars(2359)).toBe("23.59");
});

test("Product sorting in ascending order", () => {
  expect(
    ascendingOrder([
      { salePrice: 63.99 },
      { salePrice: 24.65 },
      { salePrice: 19.43 },
      { salePrice: 94.0 },
      { salePrice: 47.7 },
      { salePrice: 89.0 }
    ])
  ).toEqual([
    { salePrice: 19.43 },
    { salePrice: 24.65 },
    { salePrice: 47.7 },
    { salePrice: 63.99 },
    { salePrice: 89.0 },
    { salePrice: 94.0 }
  ]);
});

test("Product sorting in descending order", () => {
  expect(
    descendingOrder([
      { salePrice: 63.99 },
      { salePrice: 24.65 },
      { salePrice: 19.43 },
      { salePrice: 94.0 },
      { salePrice: 47.7 },
      { salePrice: 89.0 }
    ])
  ).toEqual([
    { salePrice: 94.0 },
    { salePrice: 89.0 },
    { salePrice: 63.99 },
    { salePrice: 47.7 },
    { salePrice: 24.65 },
    { salePrice: 19.43 }
  ]);
});
