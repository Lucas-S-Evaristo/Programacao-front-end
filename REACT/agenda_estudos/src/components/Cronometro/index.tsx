import Botao from "../botao";
import { Relogio } from "./Relogio";
import Style from "./Cronometro.module.scss";


export function Cronometro(){
    return(
        <div className={Style.cronometro}>
            <p className={Style.titulo}>Escolha um card e inicie o  cronômetro</p>
            <div className={Style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Iniciar
            </Botao>
        </div>
    )
}