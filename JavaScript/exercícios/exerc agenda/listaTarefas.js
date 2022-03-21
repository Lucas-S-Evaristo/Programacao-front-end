const criarTarefa = (evento)=>{
    evento.preventDefault() // impedir que a página seja recarregada ao clicar no botão

    const lista = document.querySelector('[data-list]') 
    const input = document.querySelector('[data-form-input]') // 
    const valor = input.value
    const tarefa = document.createElement('li') 
    tarefa.classList.add('tarefa')
    const conteudo = `<p>${valor}</p>` // configurando a variável "valor" como parágrafo

    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoExcluir())
    lista.appendChild(tarefa)

    input.value=" "
}

const BotaoConcluir = () =>{
    const botaoConcluir = document.createElement('button')
    botaoConcluir.classList.add('clicado')
    botaoConcluir.textContent = 'Concluir'

    botaoConcluir.addEventListener('click', concluirTarefa)
    return botaoConcluir
}

const concluirTarefa = (evento) =>{
    const botaoConclui = evento.target
    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle('feito')
}

const BotaoExcluir = () =>{
    const botaoExcluir = document.createElement('button')
    botaoExcluir.classList.add('clicado')
    botaoExcluir.textContent = 'Excluir'
    botaoExcluir.addEventListener('click', excluirTarefa)
    return botaoExcluir

}
const excluirTarefa = (evento) =>{
    const botaoExclui = evento.target
    const tarefaExcluida = botaoExclui.parentElement
    tarefaExcluida.remove()
}

const novaTarefa = document.querySelector('[data-form-button]') // seletor da data-attributes
novaTarefa.addEventListener('click', criarTarefa)