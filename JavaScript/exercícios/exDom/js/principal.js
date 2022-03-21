const titulo = document.querySelector('[data-title]')
titulo.textContent = 'Nutrição DevTarde'

const pacientes = document.querySelectorAll('.paciente')
for (let i = 0; i < pacientes.length; i++) {

    const peso = pacientes[i].querySelector('.info-peso').textContent
    const altura = pacientes[i].querySelector('.info-altura').textContent
    const tdImc = pacientes[i].querySelector('.info-imc')

    let pesoValido = true
    let alturaValida = true

    if (peso < 0 || peso > 300) {
        pesoValido = false
        tdImc.textContent = 'Peso Inválido'
        pacientes[i].classList.add('invalido')
    }
    if (altura < 0 || altura > 3) {
        alturaValida = false
        tdImc.textContent = 'Altura Inválida'
        pacientes[i].classList.add('invalido')
    }
    if (pesoValido == true && alturaValida == true) {
        const imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(2)
    }
}

const botaoAdicionar = document.querySelector('[data-form-button]')
const formulario = document.querySelector('#form-adiciona')

botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault()
    //Buscando valores dos inputs
    const nomeForm = formulario.nome.value
    const pesoForm = formulario.peso.value
    const alturaForm = formulario.altura.value
    const gorduraForm = formulario.gordura.value
    const imcForm = pesoForm / (alturaForm * alturaForm)
    const alertaErro = document.querySelector('.alerta-erro')
    alertaErro.classList.add('.alerta-erro')

    //Variáveis para validação dos dados
    let pesoValido = true
    let alturaValida = true

  

    if ((pesoForm < 0 || pesoForm > 300) && (alturaForm < 0 || alturaForm > 3)) {
        pesoValido = false
        alturaValida = false
        alertaErro.textContent = 'Peso e altura inválida'
        return
    } else if (pesoForm < 0 || pesoForm > 300) {
        pesoValido = false
        alertaErro.textContent = 'Peso Inválido'
        return
    } else if (alturaForm < 0 || alturaForm > 3) {
        alturaValida = false
        alertaErro.textContent = 'Altura Inválida'
        return
    }
    if (pesoValido && alturaValida) {
        //Criar linhas e células
        const pacienteTr = document.createElement('tr')
        const nomeTd = document.createElement('td')
        const pesoTd = document.createElement('td')
        const alturaTd = document.createElement('td')
        const gorduraTd = document.createElement('td')
        const imcTd = document.createElement('td')

        //Adicionar Informações as células
        imcTd.textContent = imcForm.toFixed(2)
        nomeTd.textContent = nomeForm
        pesoTd.textContent = pesoForm
        alturaTd.textContent = alturaForm
        gorduraTd.textContent = gorduraForm

        const tabela = document.querySelector('#tabela-pacientes')
        tabela.appendChild(pacienteTr)
        pacienteTr.appendChild(nomeTd)
        pacienteTr.appendChild(pesoTd)
        pacienteTr.appendChild(alturaTd)
        pacienteTr.appendChild(gorduraTd)
        pacienteTr.appendChild(imcTd)
    }
    })