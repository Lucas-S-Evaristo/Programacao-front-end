import React from "react";

class Botao extends React.Component { // o nome do componente tem que ser a primeira letra em maiúscula
    render() { // cria o método render
        return (
            <button style={
                {
                    backgroundColor: "tomato",
                    color: "white"
                }
            }>
                Botão
            </button>
        )
    }
}

export default Botao