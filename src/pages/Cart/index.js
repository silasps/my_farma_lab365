import { useContext } from 'react'
import { FaMinusCircle, FaPlusCircle, FaTrashAlt } from 'react-icons/fa'
import { CartContext } from '../../contexts/CartContext'

const Cart = () => {

  const {cart} = useContext(CartContext)


  return (
    <>
      <div className='main-container'>
        <table className='table-cart' data-testid="table-cart">
          <thead>
            <tr>
              <th>#</th>
              <th>Produto</th>
              <th>Unidade</th>
              <th>Quantidade</th>
              <th>SubTotal</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.itemId}>
                <td>
                  <img className='table-image' src={item.product.image} alt={item.product.name} />
                </td>
                <td>{item.product.name}</td>
                <td>{item.priceWithDiscount}</td>
                <td>
                  <FaMinusCircle
                    size={18}
                    color="#9721BD"
                    className='margin-button'
                  />
                  {item.amount}
                  <FaPlusCircle
                    size={18}
                    color="#9721BD"
                    className='margin-button'
                  />
                </td>
                <td>{item.subTotalFormatted}</td>
                <td>
                  <FaTrashAlt size={22} color='#9721BD'/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='footer-cart'>
          <h1>Total: 0</h1>
          <button>Continuar compra</button>
        </div>
      </div>
    </>
  )
}

export default Cart
