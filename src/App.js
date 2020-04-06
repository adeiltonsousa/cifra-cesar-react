import React, { useState } from 'react';
import sha1 from 'sha1';
import './App.css';
import fileDownload from 'js-file-download';

import api from './services/api';
import Form from './components/Form.jsx';
import SearchApi from './components/SearchApi.jsx';
import CifraCesar from './components/CifraCesar.jsx';
import GerarJson from './components/GerarJson.jsx';


export default function App() {
  const [DadosCifrados, setDadosCifrados] = useState('');
  let alfaBase = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

  async function getDados() {
    const response = await api.get('generate-data?token=cbbe54251474cc2cf4e35a783bdb7a895f14b028');
    setDadosCifrados(response.data);
  }

  function cifraCesar() {
    
    let tamAlfabeto = alfaBase.length;
    var decifrada = [];


    let frase = DadosCifrados.cifrado
    frase = frase.split('');
    frase.forEach(function (letra) {

      let pos = alfaBase.lastIndexOf(letra)

      if (pos === -1) {
        decifrada.push(letra)

      } else if ((pos - DadosCifrados.numero_casas) < 0) {
        pos = (tamAlfabeto - pos);
        decifrada.push(alfaBase[pos])

      } else {
        decifrada.push(alfaBase[pos - DadosCifrados.numero_casas])

      }

    })

    let frase_decifrada = decifrada.join('')
    let resumo_sha1 = sha1(frase_decifrada);

    setDadosCifrados({
      ...DadosCifrados,
      decifrado: frase_decifrada,
      resumo_criptografico: resumo_sha1,
    });

  };

  async function saveAnswer() {
    var dados = {
      "numero_casas": DadosCifrados.numero_casas,
      "token": DadosCifrados.token,
      "cifrado": DadosCifrados.cifrado,
      "decifrado": DadosCifrados.decifrado,
      "resumo_criptografico": DadosCifrados.resumo_criptografico
    }
    dados = JSON.stringify(dados)
    fileDownload(dados, 'answer.json');
  }


  return (
    <>
      <div className="container-api">
        <SearchApi
          DadosCifrados={DadosCifrados}
          getDados={() => getDados()}
        />
      </div>

      <br /><br /><br /><p>-================ GERAR JSON ==================</p>
      <CifraCesar
        cifraCesar={() => cifraCesar()}
        DadosCifrados={DadosCifrados}
        />

      <br /><br /><br /><p>-================ CIFRA DE CESAR ==================</p>
      <GerarJson saveAnswer={() => saveAnswer()} />

      <br /><br /><br /><p>-================ FOR ENVIO ==================</p><br /><br /><br />
      <Form />

    </>
  )
}


