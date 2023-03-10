import { generateDiscount } from "./generateDiscount"

describe("Testando a função de desconto", () => {

  it('Deve retornar o valor a porcentagem formatada e o valor com desconto', () => {
    const result = generateDiscount(100, 10)

    expect(result.porcentagem).toBe("10%")
    expect(result.valorComDesconto).toBe(90)
  })

  it('Deve retornar o valor a porcentagem formatada e o valor com desconto para valores grandes', () => {
    const result = generateDiscount(1230.55, 35)

    expect(result.porcentagem).toBe("35%")
    expect(result.valorComDesconto).toBe(799.86)
  })

})