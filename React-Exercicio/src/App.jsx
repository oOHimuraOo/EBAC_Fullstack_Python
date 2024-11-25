import { useState } from 'react'
import './App.css'

function App() {
  const [resultado, setResultado] = useState('Preencha os campos para calcular o seu IMC')
  const [frase2, setFrase2] = useState('')
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)

  const calcularIMC = (altura, peso) => {
    const alturaM = (parseFloat(altura) / 100) * (parseFloat(altura) /100)
    const imc = parseFloat(peso) / parseFloat(alturaM)

    var retorno = ''
    var retorno2 = ''

    if (imc < 18.5) {
      retorno = `Seu imc é de: ${imc.toFixed(1)}!`
      retorno2 =  "Você é considerado de baixo peso."
    } else if (imc >= 18.5 && imc <= 24.9) {
      retorno = `Seu imc é de: ${imc.toFixed(1)}!`
      retorno2 = "Você é considerado de peso normal."
    } else if (imc >= 25 && imc <= 29.9) {
      retorno = `Seu imc é de: ${imc.toFixed(1)}!`
      retorno2 = "Você é considerado com excesso de peso."
    } else if (imc >= 30 && imc <= 34.9) {
      retorno = `Seu imc é de: ${imc.toFixed(1)}!`
      retorno2 = "Você é considerado com grau de obesidade nivel 1."
    } else if (imc >= 35.0 && imc <= 39.9) {
      retorno = `Seu imc é de: ${imc.toFixed(1)}!`
      retorno2 = "Você é considerado com grau de obesidade nivel 2"
    } else {
      retorno = `Seu imc é de: ${imc.toFixed(1)}!`
      retorno2 = "Você é considerado com grau de obesidade nivel 3"
    }

    setResultado(retorno)
    setFrase2(retorno2)
  }

  return (
    <>
      <h1>Calculadora de IMC</h1>
      <div className="card">
        <div className='peso__altura'>
          <label htmlFor="altura">Altura (cm):</label>
          <input id='altura' className='altura' type="number" placeholder='Informe a sua altura em centimetros' onBlur={({target}) => setAltura(target.value)} />
          <label htmlFor="peso">Peso (kg):</label>
          <input id='peso' className='peso' type="number" placeholder='informe o seu peso em quilos' onBlur={({target}) => setPeso(target.value)} />
        </div>
        <button onClick={() => calcularIMC(altura,peso)}>
          calcular
        </button>
        <p>
          {resultado}
        </p>
        <p>
          {frase2}
        </p>
      </div>
    </>
  )
}

export default App
