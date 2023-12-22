import React from "react";
import PRODUCTS from "../../Products";
import Product from "./Product";


function Shop() {
  return (
    <div className="shop-card"> 
      <div className="shop-title">
        <h1>Easypay Shop</h1>
      </div>
      <div className="products-container"> 
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
