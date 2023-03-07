

import { FaMinusCircle, FaPlusCircle, FaTrashAlt } from 'react-icons/fa'

import Swal from 'sweetalert2';

const Cart = () => {
  return (
    <>

      <div className='main-container'>
        <table className='table-cart' data-testid="table-cart">
          <thead>
            <tr>
              <th>#</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>SubTotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[].map(item => (
              <tr key={item.itemId}>
                <td>
                  <img className='table-image' src={item.product.image} alt={item.product.name} />
                </td>
                <td>{item.product.name}</td>
                <td>
                  <FaMinusCircle
                    size={18}
                    color="#9721BD"
                    className='margin-button'

                  />

                  {item.quantity}
                  <FaPlusCircle
                    size={18}
                    color="#9721BD"
                    className='margin-button'

                  />
                </td>

                <td>{item.subTotalFormatted}</td>
                <td>
                  <FaTrashAlt size={22} color='#9721BD' onClick={() => {
                    Swal.fire({
                      title: 'Deseja realmente remover esse item ?',
                      showCancelButton: true,
                      confirmButtonText: 'Sim, desejo !',
                      cancelButtonText: `Cancelar`,
                    }).then((result) => {
                      if (result.isConfirmed) {
                      }
                    })
                  }} />
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
