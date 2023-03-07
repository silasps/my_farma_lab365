import React from 'react';

const Details = () => {
  return (
    <div className='main-container'>

      <div className='product-details'>
        <div>
          <img
            src="https://www.farmasesi.com.br/estatico/sesi/images/temp/222_16527.png"
            width="250px"
            alt="foto do produto"
          />
        </div>

        <div className='product-content'>
          <div>
            <h2>Nome do produto</h2>
            <span>R$ 12,00</span>
          </div>

          <div className='product-controls'>
            <button>Adicionar a sacola</button>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Details;