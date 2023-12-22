import React, { useContext } from "react";
import PRODUCTS from "../../Products";
import ShopContext from "../../context/ShopContext";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart-card">
      <div className="cart-title">
        <h1>EasyPay Shopping Cart</h1>
      </div>
      <div className="cart-items-container">
        {PRODUCTS.map((Product) => {
          if (cartItems[Product.id] !== 0) {
            return <CartItems key={Product.id} data={Product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="cart-summary">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={() => navigate("/Checkout")}>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
