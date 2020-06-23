import React from "react";
import { convertToDollars } from "../../utils";

const Product = props => {
  const {
    imageUrl,
    name,
    quantityAvailable,
    retailPrice,
    salePrice
  } = props.product;

  return (
    <div className="product-container">
      <div className="product">
        <div className="imgcontainer">
          <img
            src={imageUrl}
            alt={name}
            className="pro-img"
            aria-label="{name}"
          />
          {quantityAvailable === 0 && (
            <div className="sold-out">
              <span className="sold">Sold out</span>
            </div>
          )}
        </div>
        <div className="product-details">
          <div className="proname">{name}</div>

          {retailPrice && retailPrice > 0 ? (
            <div className="retail-price">${convertToDollars(retailPrice)}</div>
          ) : (
            " "
          )}

          {salePrice && (
            <div className="sale-price">${convertToDollars(salePrice)}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
