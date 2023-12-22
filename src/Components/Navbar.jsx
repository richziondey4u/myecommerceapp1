import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="Links">
        <div className="Easy">
          <Link to="/">EasyPay</Link>
        </div>
        <div className="ca">
          {" "}
          <Link to="/Cart">
            <ShoppingCart color="white" size={50} />
          </Link>
        </div>
        <div className="log">
          <Link to="/Login">Login</Link>
        </div>
        <div className="sig">
          <Link to="/Signup">Create Account</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
