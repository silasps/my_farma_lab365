import React from 'react';


const CardProduct = ({name, price, image}) => {
  return (
    <div className="card-product">
      <img
        src={image}
        width="150px"
        alt="foto do produto"
      />
      <h2>{name}</h2>
      <span>{price}</span>
      <button className='button-default'>Ver Detalhes</button>
    </div>
  );
}

export default CardProduct;