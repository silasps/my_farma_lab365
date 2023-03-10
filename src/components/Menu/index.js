import React, {useContext} from "react";
import { FaCartPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const Menu = () => {

  const navigate = useNavigate()
  const {cart} = useContext(CartContext)

  const handleNavigateToCart = () => {
    navigate('carrinho')
  }

  return (
    <header className="menu">
      <div className="menu-content">
        <h1>Clamed Farmácias</h1>
        <ul>
          <li data-testid="cart-link" onClick={handleNavigateToCart}>
            <FaCartPlus color="#fff" />
            Carrinho - {cart.length} items
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Menu;
