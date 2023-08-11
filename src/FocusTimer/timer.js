import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js'

export function countdown() { // lógica para a contagem regressiva
    if(!state.isRunning) {
        return
    }
    
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds-- // diminuir 1s

    if(seconds < 0) {
        seconds = 59 // valor o segundo, quando ele for menor que zero (volta pros 59s)
        minutes-- // diminuir 1 min quando o segundo for menor que zero
    }

    if(minutes < 0) {
        reset()
        kitchenTimer.play() // para adicionar o audio
        return
    }

    updateDisplay(minutes, seconds)

    setTimeout(() => countdown(), 1000) // faz a função acontecer depois de um tempo, em milessegundo. 
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes /* o ?? observa se o valor do minutos é nulo, caso seja será
         colocado o calor do state.minutes*/
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0") // define dois caracteres e o "0" é o caractere usado para preencher o espaço vazio
    el.seconds.textContent = String(seconds).padStart(2, "0") // define dois caracteres e o "0" é o caractere usado para preencher o espaço vazio
    //o padStart preenche no início .padStart(nº de caracteres, "o caractere usado para preencher")
}