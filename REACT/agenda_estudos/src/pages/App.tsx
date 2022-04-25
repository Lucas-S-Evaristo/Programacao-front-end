import React, { useState } from 'react';
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import { ITarefas } from '../types/Tarefas';
import style from './App.module.scss'


function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([]) 
  const [selecionado, setSelecionado] = useState<ITarefas>()

  function selecionaTarefa(tarefaSelecionada: ITarefas){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map( tarefa =>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false 
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado={selecionado} // verifica se uma atividade foi selecionada ou não
      />
    </div>
  );
}

export default App;
