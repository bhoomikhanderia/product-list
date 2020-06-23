// Sort products in ascending order
function ascendingOrder(price) {
  return price.sort((a, b) => a.salePrice - b.salePrice);
}

// Sort products in descending order
function descendingOrder(price) {
  return price.sort((a, b) => a.salePrice - b.salePrice).reverse();
}

// Convert price in Cents to Dollars
function convertToDollars(amount) {
  return amount && (amount / 100).toFixed(2);
}

export { ascendingOrder, descendingOrder, convertToDollars };
