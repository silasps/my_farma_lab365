// inicializar o contexto
import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { generateDiscount } from "../utils/generateDiscount";
import { priceFormat } from "../utils/priceFormat";

export const CartContext = createContext()

// Montar o provedor

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])


  const addProduct = (product, observations, amount, priceWithDiscount) => {

    console.log("o desconto é ", product.discount)

    const data = {
      itemId: uuidv4(),
      product,
      priceWithDiscount: priceFormat(priceWithDiscount),
      observations,
      amount,
      subTotal: priceWithDiscount * amount,
      subTotalFormatted: priceFormat(priceWithDiscount * amount)
    }

    setCart([...cart, data])
  }

  return (
    <CartContext.Provider value={{
      cart: cart,
      addProduct: addProduct
    }}>
      {children}
    </CartContext.Provider>
  )
}
