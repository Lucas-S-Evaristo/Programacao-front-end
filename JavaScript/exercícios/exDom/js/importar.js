const botaoImportar = document.querySelector('[data-add-button]')

botaoImportar.addEventListener('click', function(){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

    xhr.addEventListener('load', function(){
        const resposta = xhr.responseText
        console.log(resposta, typeof resposta)

        const pacienteAdd = JSON.parse(resposta)
        console.log(pacienteAdd, typeof pacienteAdd)
        
        pacienteAdd.forEach(function(paciente) {
            montaTr(paciente)
        })
    })
    xhr.send()
})