export const generateDiscount = (valor, percentual) => {
  const desconto = Number((Number(valor) * Number(percentual) / 100).toFixed(2));
  const valorComDesconto = valor - desconto;
  console.log(valorComDesconto)
  const porcentagemFormatada = `${percentual}%`;


  return {
    porcentagem: porcentagemFormatada,
    valorComDesconto: Number(valorComDesconto.toFixed(2))
  };

}