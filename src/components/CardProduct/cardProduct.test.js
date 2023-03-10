import { fireEvent, render, screen } from "@testing-library/react"
import CardProduct from '.'

const product = {
  "id": 1,
  "name": "Creme hidratante facial",
  "price": 50.00,
  "priceFormatted": "R$ 50,00",
  "discount": 5.0,
  "image": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16534.png"
}

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedNavigate,
}));

describe('Teste do componente de CardProduct', () => {

  it('Deve renderizar o componente com as principais informações', () => {
    render(<CardProduct product={product} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', product.image)

    expect(screen.getByText(product.name)).toBeInTheDocument()
    expect(screen.getByText(product.priceFormatted)).toBeInTheDocument()
    expect(screen.getByText(/Ver Detalhes/i)).toBeInTheDocument()
  })

  it('Deve chamar disparar o evento de onClick ao clicar no card', () => {
    render(<CardProduct product={product} />)

    const button = screen.getByText(/Ver Detalhes/i)

    fireEvent.click(button)

    expect(mockedNavigate).toBeCalled()
    expect(mockedNavigate).toBeCalledTimes(1)
  })

})