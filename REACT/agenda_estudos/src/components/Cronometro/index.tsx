import Botao from "../botao";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../commons/utils/time";
import { ITarefas } from "../../types/Tarefas"
import { useEffect, useState } from "react";
import Relogio from "./Relogio";

interface Props {
    selecionado: ITarefas | undefined
}

export function Cronometro({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>()
    useEffect(() => {
        setTempo(tempoParaSegundos(String(selecionado?.tempo)))
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout => {
            if(contador > 0) {
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
        }
    }


    // console.log('conversao para segundos: ', tempoParaSegundos('01:01:01'));

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            tempo : {tempo}
            <div className={style.relogioWrapper}>
                <Relogio
                    tempo={tempo}
                />
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Iniciar!
            </Botao>
        </div>
    )
}