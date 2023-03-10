import { fireEvent, render, screen } from "@testing-library/react"
import Details from ".";
// import { oneProductMock } from "../../mocks/products.mock";

const oneProductMock = {
  "id": 1,
  "name": "Creme hidratante facial",
  "price": 50.00,
  "discount": 5.0,
  "priceFormatted": "R$50,00",
  "image": "https://www.farmasesi.com.br/estatico/sesi/images/produto/16534.png"
}

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: { ...oneProductMock }
  })
}));

describe('Teste da tela Detalhes',  () => {

  it('Deve renderizar os principais elementos da tela quando houve desconto', () => {
    render(<Details />)

    expect(screen.getByRole('img')).toHaveAttribute('src', oneProductMock.image)
    expect(screen.getByText(oneProductMock.name)).toBeInTheDocument()
    expect(screen.getByText(oneProductMock.priceFormatted)).toBeInTheDocument()

    expect(screen.getByTestId('amount-product').textContent).toEqual("1")

  })

  it('Deve exibir a quantidade correta ao interagir com os botões' , () => {

    render(<Details />)

    const buttonIncrement = screen.getByTestId('increment-button')
    const buttonDecrement = screen.getByTestId('decrement-button')

    fireEvent.click(buttonIncrement)
    fireEvent.click(buttonIncrement)
    fireEvent.click(buttonIncrement)

    expect(screen.getByTestId('amount-product').textContent).toEqual("4")

    fireEvent.click(buttonDecrement)
    fireEvent.click(buttonDecrement)

    expect(screen.getByTestId('amount-product').textContent).toEqual("2")
  })


  it('Deve desabilitar a quantidade quando quantidade igual 1', () => {

    render(<Details />)

    const buttonIncrement = screen.getByTestId('increment-button')
    const buttonDecrement = screen.getByTestId('decrement-button')

    fireEvent.click(buttonIncrement)
    fireEvent.click(buttonIncrement)

    fireEvent.click(buttonDecrement)
    fireEvent.click(buttonDecrement)

    expect(screen.getByTestId('amount-product').textContent).toEqual("1")
    expect(buttonDecrement).toBeDisabled()
    expect(buttonIncrement).not.toBeDisabled()
  })

})