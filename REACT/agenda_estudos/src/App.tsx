import React from 'react';
import Botao from './components/botao';
import Formulario from './components/formulario';
import Lista from './components/lista';

function App() {
  return (
    <div>
      <Formulario/>
      <Lista/>
    </div>
  );
}

export default App; // para deixar esse componente acessível por outros arquivos