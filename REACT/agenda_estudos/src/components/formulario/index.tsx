import { render } from "@testing-library/react";
import React from "react";
import Botao from "../botao";
import style from './Form.module.scss'

class Formulario extends React.Component {
    state = {
        tarefa:"",
        tempo:"00:00:00"
    }
    
    adicionarTarefa(evento: React.FormEvent){
        evento.preventDefault()
        console.log('estado :', this.state);
        
    }

    render() {
        return (
            <form action="" className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um estudo</label>
                    <input type="text" name="tarefa" id="tarefa" value={this.state.tarefa} onChange={evento => this.setState({...this.state, tarefa: evento.target.value})} placeholder="Adicione um estudo" required />
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Determine o tempo</label>
                    <input type="time" name="tempo" id="tempo" value={this.state.tempo} onChange={evento => this.setState({...this.state, tempo: evento.target.value})} step="1" min="00:00:00" max="23:59:59" required />
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        )
    }
}

export default Formulario