import { createContext, useState } from "react";
import PRODUCTS from "../Products";

export const ShopContext = createContext();

const getDefaultCart = () => {
  const cart = {};
  for (let i = 0; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [user, setUser] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = PRODUCTS.find(
          (Product) => Product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const updateCustomerInfo = (info) => {
    setCustomerInfo(info);
  };

  const completeCheckout = () => {
    // Add logic for completing the checkout process (e.g., making an API request)
    // Reset cartItems and customerInfo after successful checkout
    setCartItems(getDefaultCart());
    setCustomerInfo({
      name: "",
      email: "",
      address: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    });
  };

  // New functions for user authentication
  const signup = async (formData) => {
    // Implement the signup logic (e.g., make an API request)
    // Update the user state if signup is successful
    setUser({ username: formData.username, email: formData.email });
  };

  const login = async (formData) => {
    // Implement the login logic (e.g., make an API request)
    // Update the user state if login is successful
    setUser({ email: formData.email });
  };

  const logout = () => {
    // Implement the logout logic (e.g., clear user data)
    setUser(null);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    user,
    signup,
    login,
    logout,
    customerInfo,
    updateCustomerInfo,
    completeCheckout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContext;
