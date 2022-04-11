import React, { useState } from 'react';
import Botao from '../components/botao';
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './App.module.scss'

function App() {
  const [tarefas, setTarefas] = useState([{ tarefa: "JavaScript", tempo: "01:30:00" }, { tarefa: "React", tempo: "02:00:00" }, { tarefa: "Angular", tempo: "01:20:00" }])
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App; // para deixar esse componente acessível por outros arquivos