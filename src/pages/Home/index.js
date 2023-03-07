import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import CardProduct from "../../components/CardProduct";
import api from "../../services/api";
import { priceFormat } from '../../utils/priceFormat'

const Home = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {

    api.get('/products')
    .then(response => {
      setProducts(response.data.map(item => ({
        ...item,
        priceFormatted: priceFormat(item.price)
      })))
    })
    .catch(() => toast.error('Houve um erro ao retornar os produtos'))

    /*

    fetch('http://localhost:3333/products')
      .then(async (response) => {
        const data = await response.json()
        setProducts(data.map(item => ({
          ...item,
          priceFormatted: priceFormat(item.price)
        })))
      })
      .catch(() => toast.error('Houve um erro ao retornar os produtos'))

    */
  }

  useEffect(() => {
    getProducts();
  }, [])

  console.log(products)
  return (
    <div>
      <div className="main-container">
        <div className="products-list">
          {
            products.map((product) => (
              <CardProduct
                key={product.id}
                name={product.name}
                price={product.priceFormatted}
                image={product.image}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
