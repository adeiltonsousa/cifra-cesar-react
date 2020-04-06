import React from 'react';



export default function CifraCesar({cifraCesar, DadosCifrados}) {  

  return (
      <div>
         <button onClick={cifraCesar}>Decifrar:</button>
          <h2>Frase Decifrada</h2>
        <p>{DadosCifrados.decifrado}</p><br/>
      </div>
  )
} 