import React, { useState } from 'react';
import { Button, Card, Elevation, input, Collapse, Divider } from "@blueprintjs/core";
import cesar from '../assets/cesar.jpg';

export default function SearchApi({ getDados, DadosCifrados }) {
  const [isOpen, SetIsOpen] = useState(false);

  function handleClick() {
    SetIsOpen(isOpen ? false : true)
  }

  return (
    <>
      <Card className="container" interactive={true} elevation={Elevation.TWO}>
        <img className="img-cesar" src={cesar} alt=""/>
        <h1>Criptografia de Júlio César</h1>

        <label class="bp3-label">
          Número de Casa:
          <input disabled class="bp3-input bp3-inline" type="text" dir="auto" value={DadosCifrados.numero_casas} />
        </label>

        <label class="bp3-label">
          Frase Cifrada:
          <textarea disabled class="bp3-input" type="text" value={DadosCifrados.cifrado} />
        </label>

        <Button onClick={getDados}>Buscar Frase Criptografada</Button>

        <Divider className="Divider" />

        <label class="bp3-label">
          Frase Decifrada:
          <textarea disabled class="bp3-input" type="text" dir="auto" value={DadosCifrados.decifrado} />
        </label>

        <label class="bp3-label">
          Resumo Criptografico:
          <span class="bp3-text-muted"> ( SHA1 )</span>
          <input disabled class="bp3-input" type="text" dir="auto" value={DadosCifrados.resumo_criptografico} />
        </label>

        <div>
        <Divider className="Divider" />
          <Button onClick={handleClick}>
            {isOpen ? "-" : "!"}
          </Button><br/>
          <Collapse isOpen={isOpen} className="texto-info">
            <blockquote class="texto-info bp3-blockquote bp3-running-text bp3-text-small">
              <p>
                Das Criptografias mais curiosas na história da humanidade podemos citar a criptografia utilizada pelo grande líder militar romano Júlio César para comunicar com os seus generais. Essa criptografia se baseia na substituição da letra do alfabeto avançado um determinado número de casas. Por exemplo, considerando o número de casas = 3:
              </p>
              <li><strong>Normal:</strong> a ligeira raposa marrom saltou sobre o cachorro cansado</li>
              <li><strong>Cifrado:</strong> d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr </li>
              <p>

              </p>
            </blockquote>
          </Collapse>
        </div>
      </Card>





    </>
  )
}