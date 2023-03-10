import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext';

import { generateDiscount } from '../../utils/generateDiscount';
import { priceFormat } from '../../utils/priceFormat';


const Details = () => {

  const {addProduct} = useContext(CartContext)

  const data = useLocation()
  const [amount, setAmount] = useState(1)

  const priceWithDiscount = generateDiscount(data.state.price, data.state.discount)
  const discountFormatted = priceFormat(priceWithDiscount.valorComDesconto)

  const handleAddProductInCart = () => {
    addProduct(data.state, '', amount, priceWithDiscount.valorComDesconto)
  }

  const handleIncrementAmount = () => {
    setAmount(amount + 1)
  }

  const handleDecrementAmount = () => {
    setAmount(amount - 1)
  }

  return (
    <div className='main-container'>

      <div className='product-details'>
        <div>
          <img
            src={data.state.image}
            alt="foto do produto"
            className='product-details-photo'
          />
        </div>

        <div className='product-content'>
          <div>
            <h2>{data.state.name}</h2>
            <span>
              {
                data.state.discount > 0 ? (
                  <>
                    <span style={{ textDecoration: 'line-through' }}>{data.state.priceFormatted}</span>
                    - <span data-testid="discount-value">{discountFormatted}</span>
                  </>
                ) : (
                  <span>{data.state.priceFormatted}</span>
                )
              }
            </span>
          </div>
          <div className='product-controls'>
            <div>
              <button onClick={handleAddProductInCart}>Adicionar a sacola</button>
            </div>

            <button
              onClick={handleDecrementAmount}
              disabled={amount === 1}
              data-testid="decrement-button"
            >
              -
            </button>
            <span className='product-quantity' data-testid="amount-product">{amount}</span>
            <button
              data-testid="increment-button"
              onClick={handleIncrementAmount}
            >
              +
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Details;