import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Shop from "./Pages/Shop/Shop";
import Product from "./Pages/Shop/Product";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Cart/Checkout";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
