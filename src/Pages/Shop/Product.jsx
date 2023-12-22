import React, { useContext } from "react";
import ShopContext from "../../context/ShopContext";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product-card">
      <img className="product-image" src={productImage} alt={productName} />
      <div className="product-description">
        <p className="product-name">
          <b>{productName}</b>
        </p>
        <p className="product-price">${price}</p>
      </div>
      <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
