import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import Product from "./product";

describe("", () => {
  test("Card renders properly", function() {
    const product = {
      id: "a730c210-2790-448f-b880-6358a9f658e4",
      name: "Apple Genuine EarPods w/ Lightning Connector - White",
      salePrice: 2999,
      retailPrice: 4500,
      imageUrl:
        "https://s.catch.com.au/images/product/0004/4474/5acaf30d7b302105343281_w200.jpg",
      quantityAvailable: 16
    };

    product.salePrice = "$(product.salePrice)";
    const { getByTestId, queryByTestId } = render(
      <Product product={product} />
    );

    expect(getByTestId("proname").textContent).toBe(product.name);
    expect(queryByTestId("sold-out")).toBeNull();
  });
});
