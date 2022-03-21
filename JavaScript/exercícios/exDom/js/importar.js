const botaoImportar = document.querySelector('[data-import-button]')

botaoImportar.addEventListener('click', function() {

    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')
    xhr.addEventListener('load', function(){

        /* Antes de converter para arquivo JSON */
        const resposta = xhr.responseText
        console.log(resposta, typeof resposta);

        /* Depois de converter para arquivo JSON */
        const pacienteAdd = JSON.parse(resposta)
        console.log(pacienteAdd, typeof pacienteAdd);
        pacienteAdd.forEach(function(pacientes)){
            
        }
    })
    xhr.send()
})