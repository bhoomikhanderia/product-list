import React from "react";

const productSorting = props => {
  return (
    <select
      name="productSorting"
      id="productSorting"
      onChange={event => props.onChange(event)}
    >
      <option value="high-low">Highest Price</option>
      <option value="low-high" defaultValue>
        Lowest Price
      </option>
    </select>
  );
};

export default productSorting;
