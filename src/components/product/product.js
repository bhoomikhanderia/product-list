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
          {imageUrl && (
            <img
              src={imageUrl}
              alt={name}
              className="pro-img"
              aria-label="{name}"
            />
          )}
        </div>
        {quantityAvailable === 0 && (
          <div className="sold-out" data-testid="sold-out">
            <span className="sold">Sold out</span>
          </div>
        )}

        <div className="product-details">
          <div className="proname" data-testid="proname">
            {name}
          </div>

          {retailPrice && retailPrice > 0 ? (
            <div className="retail-price">${convertToDollars(retailPrice)}</div>
          ) : (
            <div className="no-price"></div>
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
