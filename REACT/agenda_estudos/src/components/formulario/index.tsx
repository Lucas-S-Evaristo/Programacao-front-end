import React from "react";
import Botao from "../botao";

class Formulario extends React.Component {
    render() {
        return (
            <form action="">
                <div>
                    <label htmlFor="tarefa">Adicione um estudo</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="Adicione um estudo" required />
                </div>

                <div>
                    <label htmlFor="tempo">Determine o tempo</label>
                    <input type="time" name="tempo" id="tempo" step="1" min="00:00:00" max="02:00:00" required />
                </div>
                <Botao/>
            </form>
        )
    }
}

export default Formulario