export const generateDiscount = (valor, percentual) => {

  const desconto = ((valor) * Number(percentual) / 100).toFixed(2);
  console.log('desconto', desconto)
  const valorComDesconto = valor - desconto;
  console.log('valorComDesconto', valorComDesconto)
  const porcentagemFormatada = `${percentual}%`;


  return {
    porcentagem: porcentagemFormatada,
    valorComDesconto: Number(valorComDesconto.toFixed(2))
  };

}