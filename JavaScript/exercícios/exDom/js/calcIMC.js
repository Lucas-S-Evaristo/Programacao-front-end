const titulo = document.querySelector('[data-title]')
titulo.textContent = 'Jéssica'

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
        const imc = calculaIMC(peso, altura)
        tdImc.textContent = imc
    }
}

function calculaIMC (peso, altura){
    let imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}






