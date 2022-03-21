const titulo = document.querySelector('[data-titulo]')
titulo.textContent = 'nutrição TecDevTarde'

const pacientes = document.querySelectorAll('.paciente') // pega as 5 linhas das variáveis, aqui, cria uma variavel pacientes, e, no queryselectorall com a classe .paciente, pega todos os pacientes, porque todos os pacientes tem a classe .paciente
for (let i = 0; i < pacientes.length; i++) {
    const peso = pacientes[i].querySelector('.info-peso').textContent
    const altura = pacientes[i].querySelector('.info-altura').textContent
    const tdImc = pacientes[i].querySelector('.info-imc')
/* 
    const imc = peso/(altura * altura)
    tdImc.textContent = imc.toFixed(2) */

    let pesoValido = true
    let alturaValida = true

    if (peso < 0 || peso > 300) { // falando que, se o peso for 'false', ele coloca um texto na td dizendo 'Peso Inválido'
        pesoValido = false
        tdImc.textContent = 'Peso Inválido'
    }

    if (altura < 0 || altura > 3) { // falando que, se a altura for 'false', ele coloca um texto na td dizendo 'Altura Inválida'
        alturaValida = false
        tdImc.textContent('Altura Inválida')
    }

    if (pesoValido && alturaValida == true) { // não precisa colocar o '== true'
        const imc = peso/(altura * altura)
        tdImc.textContent = imc.toFixed(2)
    }
}

console.log(pacientes);

/* FORMULÁRIO */

const botaoAdicionar = document.querySelector('[data-form-button]') // para reconhecer o botão (ativar o botão)
                                                                    // data-atributs
botaoAdicionar.addEventListener('click', function() {
    event.preventDefault()

    // buscando valores dos inputs
    const formulario = document.querySelector('#form-adiciona')
    const nomeForm = formulario.nome.value // 'nome' é o valor do 'name' do input 'nome'
    const pesoForm = formulario.peso.value //'nome' é o valor do 'name' do input 'nome'
    const alturaForm = formulario.altura.value //'nome' é o valor do 'name' do input 'nome'
    const gorduraForm = formulario.gordura.value //'nome' é o valor do 'name' do input 'nome'

    // criar linhas e células
    const pacienteTr = document.createElement('tr')
    const nomeTd = document.createElement('td')
    const pesoTd = document.createElement('td')
    const alturaTd = document.createElement('td')
    const gorduraTd = document.createElement('td')

    // adicionar as informações dentro das TDs
    nomeTd.textContent = nomeForm
    pesoTd.textContent = pesoForm
    alturaTd.textContent = alturaForm
    gorduraTd.textContent = gorduraForm
    imcTd.textContent = pesoForm / (alturaForm * alturaForm)

    const tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)

})