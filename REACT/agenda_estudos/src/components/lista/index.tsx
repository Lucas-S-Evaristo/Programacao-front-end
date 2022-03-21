import React from "react";

function Lista(){
    const tarefas = [{tarefa:"JavaScript", tempo:"01:30:00"},{tarefa:"React", tempo:"02:00:00"}, {tarefa:"Angular", tempo:"01:20:00"}]

    return(
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index)=>(
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
            ))}
            </ul>

        </aside>
    )
}

export default Lista