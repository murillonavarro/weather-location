import React, { Fragment, useState } from 'react';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState(false);
  
  return (
    <Fragment>
      <h3>Clima nas suas Coordenadas (Exemplo)</h3>
      <hr/>
      <ul>
        <li>Temperatura atual: xº</li>
        <li>Temperatura máxima: xº</li>
        <li>Temperatura minima: xº</li>
        <li>Pressão: x hpa</li>
        <li>Umidade: x%</li>
      </ul>
    </Fragment>
  );
}

export default App;
