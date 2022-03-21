const botaoAdicionar = document.querySelector('[data-form-button]')
const formulario = document.querySelector('#form-adiciona')

botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault()
    //Buscando valores dos inputs
    const pacienteForm = obtemPaciente(formulario)

    //Variáveis para validação dos dados
    let pesoValido = true
    let alturaValida = true
    const alertaErro = document.querySelector('.alerta-erro')
    alertaErro.classList.add('.alerta-erro')

    if (pacienteForm.peso < 0 || pacienteForm.peso > 300) {
        pesoValido = false
        alertaErro.textContent = 'Peso Inválido'
        return
    }
    if (pacienteForm.altura < 0 || pacienteForm.altura > 3) {
        alturaValida = false
        alertaErro.textContent = 'Altura inválida'
        return
    }
    if (pacienteForm.nome == "" || pacienteForm.peso == "" || pacienteForm.altura == "" || pacienteForm.gordura == ""){
        alertaErro.textContent = 'Dado não informado'
        return
    }
    montaTr(pacienteForm)
    formulario.reset()
})

function obtemPaciente(form) {
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTr(paciente) {
    //Criar linhas e células
    const pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    const tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function montaTd(dado, classe){
    const td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}
