import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Menu = () => {

  return (
    <header className="menu">
      <div className="menu-content">
        <h1>Clamed Farmácias</h1>
        <ul>
          <li data-testid="cart-link">
            <FaCartPlus color="#fff" />
            Carrinho - {0} items
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
