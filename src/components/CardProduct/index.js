import React from 'react';
import {useNavigate} from 'react-router-dom'

const CardProduct = ({ product }) => {
   const navigate = useNavigate()

  const handleClickProduct = () => {
    navigate('detalhes', { state: product })
  }

  return (
    <div className="card-product">
      <img
        src={product.image}
        width="150px"
        alt="foto do produto"
      />
      <h2>{product.name}</h2>
      <span>{product.priceFormatted}</span>
      <button onClick={handleClickProduct} className='button-default'>Ver Detalhes</button>
    </div>
  );
}

export default CardProduct;