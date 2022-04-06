import React from 'react';
import Botao from '../components/botao';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista/>
    </div>
  );
}

export default App; // para deixar esse componente acessível por outros arquivos