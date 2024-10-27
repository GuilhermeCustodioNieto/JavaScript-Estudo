import { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
import iconPng from './assets/icon.png'

function App() {
  const [brParaDolar, setBrParaDolar] = useState(true);
  const [taxa, setTaxa] = useState(null);
  const [moedaHtml, setMoeda] = useState(null);
  const quantidade = useRef(); // Ref para o input

  function convertUsd() {
    const moeda = brParaDolar ? 'USD-BRL' : 'BRL-USD';
    setMoeda(brParaDolar ? 'Real' : 'Dólar');

    const valorQuantidade = parseFloat(quantidade.current.value); 

    if (isNaN(valorQuantidade)) {
      console.error("Quantidade não é um número válido");
      return;
    }

    axios.get(`https://economia.awesomeapi.com.br/json/last/${moeda}/`)
      .then((retorno) => {
        const valorTaxa = brParaDolar ? retorno.data.USDBRL.high : retorno.data.BRLUSD.high;
        
        const resultado = valorQuantidade * valorTaxa;

        setTaxa(resultado);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }
  
  return (
    <>
      <img src={iconPng} alt="Icon " />
      <h1>Conversor de Moedas!</h1>
      <div className="card">
        <p>Diga um valor para converter:</p>
        <input ref={quantidade} type="number" name="value" id="value" />
        <br />
        <button id="trocarMoeda" onClick={() => {
          setBrParaDolar(!brParaDolar);
          convertUsd(); 
        }}>
          Inverter
        </button>

        {taxa && (
          <p>Taxa de conversão atual: {taxa.toFixed(2)}</p>
        )}
        {taxa && (
          <p>{moedaHtml}</p>
        )}
      </div>
    </>
  );
}

export default App;
