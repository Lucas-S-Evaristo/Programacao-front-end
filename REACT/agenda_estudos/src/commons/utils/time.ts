export function tempoParaSegundos(tempo: String) {
    const [horas = 0, minutos = 0, segundos = 0] = tempo.split(":") // split: onde vai cortar o array

    const horaEmSegundos = Number(horas) * 3600
    const minutosEmSegundos = Number(minutos) * 60

    return horaEmSegundos + minutosEmSegundos + Number(segundos)
    
}