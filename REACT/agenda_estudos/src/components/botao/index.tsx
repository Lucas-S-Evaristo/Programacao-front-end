import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component{ // o nome do componente tem que ser a primeira letra em maiúscula
    render() { // cria o método render
        return (
            <button className={style.botao}>
                {this.props.children} 
            </button>
        )
    }
}

export default Botao