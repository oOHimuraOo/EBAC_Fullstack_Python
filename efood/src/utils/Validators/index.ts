/* eslint-disable no-prototype-builtins */
export function verificarCEP(cep: string) {
  const url = `https://viacep.com.br/ws/${cep.toString()}/json/`

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (!data.hasOwnProperty('erro')) {
        const info = {
          endereco: `${data.logradouro}, ${data.bairro}`,
          cidade: `${data.localidade} - ${data.uf}`
        }
        return info
      }
    })
}
