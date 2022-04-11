import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component<{type?: "button" | "submit" | "reset" | undefined}>{ // o nome do componente tem que ser a primeira letra em maiúscula
    render() { // cria o método render
        const {type='button'} = this.props
        return (
            <button type={type} className={style.botao}>
                {this.props.children} 
            </button>
        )
    }
}

export default Botao